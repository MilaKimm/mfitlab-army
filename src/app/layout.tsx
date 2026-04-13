import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: [{ path: "../fonts/PretendardVariable.woff2", weight: "100 900" }],
  variable: "--font-pretendard",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARMY | Growth Marketing AI Agent — MarketFitLab",
  description:
    "그로스 마케팅을 AI 군단이 대신 돌립니다. 7년 3,000번의 실험이 학습된 마켓핏랩의 에이전트 군단, ARMY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${pretendard.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
