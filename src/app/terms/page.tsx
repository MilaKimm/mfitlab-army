import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "이용약관 — MFL ARMY",
  robots: { index: false },
};

export default function Page() {
  return <LegalPage doc="terms" locale="ko" />;
}
