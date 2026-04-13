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

          {/* AX */}
          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">AX 솔루션</p>
            <div className="space-y-2">
              <Link
                href="/solutions/replit"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                Replit 바이브 코딩
              </Link>
              <Link
                href="/solutions/articul8"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                Articul8
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white/80 mb-3">문의</p>
            <div className="space-y-2">
              <a
                href="https://www.mfitlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                mfitlab.com
              </a>
              <Link
                href="#contact"
                className="block text-sm text-white/40 hover:text-white/70 transition"
              >
                도입 상담
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} MarketFitLab Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            서울시 강남구 테헤란로 113, 1503
          </p>
        </div>
      </div>
    </footer>
  );
}
