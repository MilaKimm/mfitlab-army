import type { Metadata } from "next";

const title = "ARMY | Growth Marketing AI Agents — MarketFit Lab";
const description =
  "MarketFit Lab's growth marketing AI agents. 7 years and 3,000 experiments — now running as an agent army. Agents execute, humans decide.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://army.mfitlab.com/en",
    siteName: "MFL ARMY",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/en",
    languages: {
      ko: "/",
      en: "/en",
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
