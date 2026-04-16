import Link from "next/link";
import { agents } from "@/data/army";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
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

          {/* ARMY */}
          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">에이전트</p>
            <div className="space-y-2">
              {agents.map((agent) => (
                <Link
                  key={agent.id}
                  href={`/army/${agent.id}`}
                  className="block text-sm text-white/40 hover:text-white/70 transition"
                >
                  {agent.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">바로가기</p>
            <div className="space-y-2">
              <a href="https://replit.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                Replit
              </a>
              <a href="https://www.mfitlab.com/articul8/articul8" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                Articul8
              </a>
              <a href="https://www.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/40 hover:text-white/70 transition">
                마켓핏랩
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">문의</p>
            <div className="space-y-2">
              <a
                href="mailto:hello@mfitlab.com"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                hello@mfitlab.com
              </a>
              <a
                href="https://army.mfitlab.com/#contact"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                도입 상담
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 space-y-2 text-center">
          <p className="text-xs text-white/30">
            (주)마켓핏랩 | 대표이사 정성영 | 서울시 강남구 테헤란로 113, 1503
          </p>
          <p className="text-xs text-white/30">
            <a href="https://www.mfitlab.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition">이용약관</a>
            {" | "}
            <a href="https://www.mfitlab.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition">개인정보처리방침</a>
            {" | "}&copy; 2024 MarketFitLab Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
