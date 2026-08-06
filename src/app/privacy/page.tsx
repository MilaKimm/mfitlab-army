import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "개인정보처리방침 — MFL ARMY",
  robots: { index: false },
};

export default function Page() {
  return <LegalPage doc="privacy" locale="ko" />;
}
