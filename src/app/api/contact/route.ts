import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbyJjSqTEXBNLxcO50lVvbFF_w1U1lH_rtx3HFwtRQ1lwH2hg2MjABkQ1lO2x8RpYf4Eaw/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, solutions, message } = body;

    const solutionList = (solutions as string[]).join(", ") || "미선택";

    // Google Sheets 저장 + Resend 메일 발송 (둘 다 실패해도 에러 안 냄)
    await Promise.allSettled([
      fetch(SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, phone, solutions: solutionList, message: message || "-" }),
      }),
      resend.emails.send({
        from: "ARMY 도입 문의 <onboarding@resend.dev>",
        to: "hello@mfitlab.com",
        subject: `[ARMY 도입 문의] ${company} - ${name}`,
        html: `
          <h2>ARMY 도입 문의가 접수되었습니다</h2>
          <table style="border-collapse:collapse;width:100%;max-width:500px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">담당자</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">회사명</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">이메일</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">전화번호</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">관심 솔루션</td><td style="padding:8px;border-bottom:1px solid #eee;">${solutionList}</td></tr>
            <tr><td style="padding:8px;color:#666;">문의 내용</td><td style="padding:8px;">${message || "-"}</td></tr>
          </table>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: true });
  }
}
