import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — MFL ARMY",
  robots: { index: false },
};

export default function Page() {
  return <LegalPage doc="terms" locale="en" />;
}
