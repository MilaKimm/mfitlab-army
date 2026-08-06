/**
 * 이용약관 · 개인정보처리방침 본문.
 *
 * ⚠️ sections가 비어 있으면 페이지에 "준비 중" 안내가 노출된다.
 *    법적 효력이 있는 문서이므로 반드시 회사 공식 약관 문안을 넣어야 한다.
 *
 * 개인정보처리방침에 최소한 반영해야 할 실제 데이터 흐름
 * (src/app/api/contact/route.ts 기준):
 *   - 수집 항목: 이름, 회사명, 이메일, 전화번호, 관심 솔루션, 문의 내용
 *   - 수집 경로: 홈 하단 도입 문의 폼
 *   - 처리 위탁: Resend(메일 발송) → hello@mfitlab.com 수신,
 *                Google Apps Script → Google Sheets 저장
 *   - 보관 기간·파기 절차·정보주체 권리·문의처는 회사 정책에 따라 기재
 */

export interface LegalSection {
  heading: string;
  /** 문단 단위. 각 항목이 <p> 하나로 렌더된다. */
  body: string[];
}

export interface LegalDoc {
  title: string;
  /** 시행일. 비어 있으면 표기하지 않는다. */
  effectiveDate: string;
  sections: LegalSection[];
}

type LegalKey = "terms" | "privacy";

export const legalDocs: Record<LegalKey, Record<"ko" | "en", LegalDoc>> = {
  terms: {
    ko: { title: "이용약관", effectiveDate: "", sections: [] },
    en: { title: "Terms of Service", effectiveDate: "", sections: [] },
  },
  privacy: {
    ko: { title: "개인정보처리방침", effectiveDate: "", sections: [] },
    en: { title: "Privacy Policy", effectiveDate: "", sections: [] },
  },
};
