"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { agents, localizeAgent } from "@/data/army";
import {
  getDictionary,
  localePrefix,
  localizePath,
  type Locale,
} from "@/i18n/dictionaries";

function useLocale(): Locale {
  const pathname = usePathname() || "/";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [agentDropdown, setAgentDropdown] = useState(false);
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const dict = getDictionary(locale);
  const otherLocale: Locale = locale === "ko" ? "en" : "ko";
  const altPath = localizePath(pathname, otherLocale);

  const homeHref = localePrefix("/", locale);
  const contactHref = locale === "en" ? "/en#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2">
          <span className="text-lg font-bold" style={{ fontFamily: "var(--font-clash)" }}>
            <span className="text-[#15867E]">MFL</span>
            <span className="inline-block w-[0.2em]" />
            <span className="text-[#1B1B1B]">ARMY</span>
          </span>
          <span className="text-[9px] font-bold tracking-widest uppercase bg-[#1B1B1B] text-white px-1.5 py-0.5 rounded">AX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {/* ARMY Agent 드롭다운 */}
          <div
            className="relative"
            onMouseEnter={() => setAgentDropdown(true)}
            onMouseLeave={() => setAgentDropdown(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-[#626166] hover:text-[#1B1B1B] transition">
              {dict.nav.armyAgent} <ChevronDown size={14} />
            </button>
            {agentDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-2xl shadow-lg border border-[#E9E9E9] p-4 min-w-[240px] space-y-1">
                  {agents.map((a) => {
                    const agent = localizeAgent(a, locale);
                    return (
                      <Link
                        key={agent.id}
                        href={localePrefix(`/army/${agent.id}`, locale)}
                        className="flex items-center text-sm text-[#626166] hover:text-[#1B1B1B] transition py-2 px-2 rounded-lg hover:bg-[#F4F4F4]"
                      >
                        <span
                          className="inline-block w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: agent.color }}
                        />
                        {agent.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Replit — 외부 링크 */}
          <a
            href="https://replit.mfitlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-[#626166] hover:text-[#1B1B1B] transition"
          >
            Replit <ArrowUpRight size={12} className="text-[#9B9B9B]" />
          </a>

          {/* Articul8 — 외부 링크 */}
          <a
            href="https://www.mfitlab.com/articul8/articul8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-[#626166] hover:text-[#1B1B1B] transition"
          >
            Articul8 <ArrowUpRight size={12} className="text-[#9B9B9B]" />
          </a>

          {/* 마켓핏랩 — 외부 링크 */}
          <a
            href="https://www.mfitlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-[#626166] hover:text-[#1B1B1B] transition"
          >
            {dict.nav.mfitlab} <ArrowUpRight size={12} className="text-[#9B9B9B]" />
          </a>

          {/* Locale toggle (switch-style) */}
          <Link
            href={altPath}
            aria-label="Switch language"
            className="flex items-center gap-0 rounded-full bg-[#F4F4F4] p-0.5 text-xs font-semibold transition hover:bg-[#ECECEC]"
          >
            <span
              className={`px-2.5 py-1 rounded-full transition ${
                locale === "ko"
                  ? "bg-white text-[#1B1B1B] shadow-sm"
                  : "text-[#9B9B9B]"
              }`}
            >
              KO
            </span>
            <span
              className={`px-2.5 py-1 rounded-full transition ${
                locale === "en"
                  ? "bg-white text-[#1B1B1B] shadow-sm"
                  : "text-[#9B9B9B]"
              }`}
            >
              EN
            </span>
          </Link>

          <a
            href={contactHref}
            className="h-10 px-5 flex items-center rounded-full bg-[#36B1A7] text-white text-sm font-semibold hover:bg-[#15867E] transition"
          >
            {dict.nav.contact}
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E9E9E9] px-6 py-4 space-y-4">
          {/* Locale toggle (mobile top, switch-style) */}
          <Link
            href={altPath}
            className="inline-flex items-center gap-0 rounded-full bg-[#F4F4F4] p-0.5 text-xs font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            <span
              className={`px-2.5 py-1 rounded-full transition ${
                locale === "ko"
                  ? "bg-white text-[#1B1B1B] shadow-sm"
                  : "text-[#9B9B9B]"
              }`}
            >
              KO
            </span>
            <span
              className={`px-2.5 py-1 rounded-full transition ${
                locale === "en"
                  ? "bg-white text-[#1B1B1B] shadow-sm"
                  : "text-[#9B9B9B]"
              }`}
            >
              EN
            </span>
          </Link>
          <div>
            <p className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-widest mb-2">{dict.nav.armyAgent}</p>
            {agents.map((a) => {
              const agent = localizeAgent(a, locale);
              return (
                <Link key={agent.id} href={localePrefix(`/army/${agent.id}`, locale)} className="block text-sm text-[#626166] py-2" onClick={() => setMobileOpen(false)}>
                  {agent.name}
                </Link>
              );
            })}
          </div>
          <div className="border-t border-[#E9E9E9] pt-3 space-y-2">
            <a href="https://replit.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#626166] py-2" onClick={() => setMobileOpen(false)}>
              Replit <ArrowUpRight size={12} className="text-[#9B9B9B]" />
            </a>
            <a href="https://www.mfitlab.com/articul8/articul8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#626166] py-2" onClick={() => setMobileOpen(false)}>
              Articul8 <ArrowUpRight size={12} className="text-[#9B9B9B]" />
            </a>
            <a href="https://www.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#626166] py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.mfitlab} <ArrowUpRight size={12} className="text-[#9B9B9B]" />
            </a>
          </div>
          <a href={contactHref} className="block text-center h-10 flex items-center justify-center rounded-full bg-[#36B1A7] text-white text-sm font-semibold" onClick={() => setMobileOpen(false)}>
            {dict.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
