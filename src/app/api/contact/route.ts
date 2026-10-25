import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// 웹훅 주소·비밀값은 Vercel 환경변수로만 관리한다 (공개 저장소에 노출 금지)
const SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL;
const SHEET_WEBHOOK_SECRET = process.env.SHEET_WEBHOOK_SECRET;

// 사람이 폼을 열고 이보다 빨리 제출하는 경우는 없다고 본다
const MIN_FILL_MS = 3000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+\-\s().]{7,20}$/;
const SOLUTION_ID_RE = /^[a-z0-9-]{1,40}$/;

type ContactInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  solutions: string[];
  message: string;
};

function str(value: unknown, max: number, required: boolean): string | null {
  if (value === undefined || value === null) return required ? null : "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (required && !trimmed) return null;
  if (trimmed.length > max) return null;
  return trimmed;
}

/** 형식이 맞으면 정리된 값을, 아니면 null을 돌려준다 */
function validate(body: Record<string, unknown>): ContactInput | null {
  const name = str(body.name, 50, true);
  const company = str(body.company, 100, true);
  const email = str(body.email, 254, true);
  const phone = str(body.phone, 20, true);
  const message = str(body.message, 2000, false);
  if (name === null || company === null || email === null || phone === null || message === null) return null;
  if (!EMAIL_RE.test(email)) return null;
  const digits = phone.replace(/\D/g, "").length;
  if (!PHONE_RE.test(phone) || digits < 8 || digits > 15) return null;

  const rawSolutions = body.solutions ?? [];
  if (!Array.isArray(rawSolutions) || rawSolutions.length > 20) return null;
  if (!rawSolutions.every((s) => typeof s === "string" && SOLUTION_ID_RE.test(s))) return null;

  return { name, company, email, phone, solutions: rawSolutions as string[], message };
}

/** 봇 흔적: 숨김 칸(website)이 채워졌거나, 폼을 연 직후 제출 */
function looksLikeBot(body: Record<string, unknown>): boolean {
  if (typeof body.website === "string" && body.website.length > 0) return true;
  const elapsed = body.elapsedMs;
  if (typeof elapsed !== "number" || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return true;
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed;
  } catch {
    return NextResponse.json({ success: false, error: "invalid_request" }, { status: 400 });
  }

  const input = validate(body);
  if (!input) {
    return NextResponse.json({ success: false, error: "invalid_fields" }, { status: 400 });
  }

  // 봇에게는 차단 사실을 알리지 않는다 (성공처럼 응답하고 저장·발송만 생략)
  if (looksLikeBot(body)) {
    console.warn("[contact] 봇 의심 요청 차단", { company: input.company, email: input.email });
    return NextResponse.json({ success: true });
  }

  const { name, company, email, phone, solutions, message } = input;
  const solutionList = solutions.join(", ") || "미선택";


  // Google Sheets 저장 (타임아웃 5초)
  const sheetPromise: Promise<boolean> = SHEET_WEBHOOK_URL
    ? fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: SHEET_WEBHOOK_SECRET, name, company, email, phone, solutions: solutionList, message: message || "-" }),
        redirect: "follow",
        signal: AbortSignal.timeout(5000),
      })
        .then(async (res) => {
          // Apps Script 웹앱은 거부할 때도 HTTP 200을 주므로 본문의 result까지 확인한다
          const result = res.ok ? ((await res.json().catch(() => null)) as { result?: string } | null)?.result : undefined;
          if (result !== "success") console.error(`[contact] 시트 저장 실패 (HTTP ${res.status}, result=${result})`, { company, email });
          return result === "success";
        })
        .catch((err) => {
          console.error("[contact] 시트 저장 실패", { company, email }, err);
          return false;
        })
    : (console.error("[contact] SHEET_WEBHOOK_URL 미설정 — 시트 저장 생략"), Promise.resolve(false));

  const row = (label: string, value: string, last = false) =>
    `<tr><td style="padding:8px;${last ? "" : "border-bottom:1px solid #eee;"}color:#666;">${label}</td><td style="padding:8px;${last ? "" : "border-bottom:1px solid #eee;"}">${escapeHtml(value)}</td></tr>`;

  // Resend 메일 발송
  // 키가 없으면 new Resend()가 즉시 throw하므로 Promise 안에서 생성해 시트 저장과 분리한다
  const mailPromise: Promise<boolean> = Promise.resolve()
    .then(() => new Resend(process.env.RESEND_API_KEY).emails.send({
      from: "ARMY 도입 문의 <noreply@mfitlab.com>",
      to: "hello@mfitlab.com",
      subject: `[ARMY 도입 문의] ${company} - ${name}`,
      html: `
        <h2>ARMY 도입 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          ${row("담당자", name)}
          ${row("회사명", company)}
          ${row("이메일", email)}
          ${row("전화번호", phone)}
          ${row("관심 솔루션", solutionList)}
          ${row("문의 내용", message || "-", true)}
        </table>
      `,
    }))
    .then((res) => {
      // Resend SDK는 API 오류를 throw하지 않고 error 필드로 돌려준다 (키 만료·도메인 미인증 등)
      if (res?.error) console.error("[contact] 메일 발송 실패", { company, email }, res.error);
      return !res?.error;
    })
    .catch((err) => {
      console.error("[contact] 메일 발송 실패", { company, email }, err);
      return false;
    });

  const [sheetOk, mailOk] = await Promise.all([sheetPromise, mailPromise]);

  // 둘 중 하나라도 남았으면 리드는 확보된 것으로 본다
  if (!sheetOk && !mailOk) {
    return NextResponse.json({ success: false, error: "delivery_failed" }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
