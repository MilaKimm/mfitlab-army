"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { agents, localizeAgent } from "@/data/army";
import { getDictionary, localePrefix, type Locale } from "@/i18n/dictionaries";

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
  const dict = getDictionary(locale);
  const contactHref = locale === "en" ? "/en#contact" : "/#contact";

  const agentsLabel = locale === "en" ? "Agents" : "에이전트";
  const linksLabel = locale === "en" ? "Links" : "바로가기";
  const contactLabel = locale === "en" ? "Contact" : "문의";
  const terms = locale === "en" ? "Terms" : "이용약관";
  const privacy = locale === "en" ? "Privacy" : "개인정보처리방침";
  const corpLine = locale === "en"
    ? "MarketFit Lab Inc. | CEO Sung-young Jung | 113 Teheran-ro, Gangnam-gu, Seoul, Suite 1503"
    : "(주)마켓핏랩 | 대표이사 정성영 | 서울시 강남구 테헤란로 113, 1503";

  return (
    <footer className="bg-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-clash)" }}>
              <span className="text-white/50">MFL</span>
              <span className="inline-block w-[0.2em]" />
              <span className="text-white">ARMY</span>
            </p>
            <p className="text-sm text-white/50">
              by MarketFitLab
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">{agentsLabel}</p>
            <div className="space-y-2">
              {agents.map((a) => {
                const agent = localizeAgent(a, locale);
                return (
                  <Link
                    key={agent.id}
                    href={localePrefix(`/army/${agent.id}`, locale)}
                    className="block text-sm text-white/40 hover:text-white/70 transition"
                  >
                    {agent.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">{linksLabel}</p>
            <div className="space-y-2">
              <a href="https://replit.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                Replit
              </a>
              <a href="https://www.mfitlab.com/articul8/articul8" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                Articul8
              </a>
              <a href="https://www.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                {dict.nav.mfitlab}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">{contactLabel}</p>
            <div className="space-y-2">
              <a
                href="mailto:hello@mfitlab.com"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                hello@mfitlab.com
              </a>
              <a
                href={contactHref}
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                {dict.nav.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 space-y-2 text-center">
          <p className="text-xs text-white/30">{corpLine}</p>
          <p className="text-xs text-white/30">
            <a href="https://www.mfitlab.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition">{terms}</a>
            {" | "}
            <a href="https://www.mfitlab.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition">{privacy}</a>
            {" | "}&copy; 2026 MarketFitLab Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
