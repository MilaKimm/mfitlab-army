import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — MFL ARMY",
  robots: { index: false },
};

export default function Page() {
  return <LegalPage doc="privacy" locale="en" />;
}
