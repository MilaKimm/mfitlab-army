import Link from "next/link";
import { agents } from "@/data/army";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-gray-900">
                MarketFitLab
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase bg-gray-900 text-white px-2 py-0.5 rounded">
                AX
              </span>
            </div>
            <p className="text-sm text-gray-500">
              AI로 성장을 만드는 3가지 방법
            </p>
          </div>

          {/* ARMY */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">ARMY</p>
            <div className="space-y-2">
              <Link
                href="/army"
                className="block text-sm text-gray-500 hover:text-gray-700 transition"
              >
                ARMY 소개
              </Link>
              {agents.map((agent) => (
                <Link
                  key={agent.id}
                  href={`/army/${agent.id}`}
                  className="block text-sm text-gray-500 hover:text-gray-700 transition"
                >
                  {agent.name}
                </Link>
              ))}
            </div>
          </div>

          {/* AX */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">AX</p>
            <div className="space-y-2">
              <Link
                href="/solutions/replit"
                className="block text-sm text-gray-500 hover:text-gray-700 transition"
              >
                Replit 바이브 코딩
              </Link>
              <Link
                href="/solutions/articul8"
                className="block text-sm text-gray-500 hover:text-gray-700 transition"
              >
                Articul8
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">Company</p>
            <div className="space-y-2">
              <a
                href="https://www.mfitlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-500 hover:text-gray-700 transition"
              >
                mfitlab.com
              </a>
              <Link
                href="#contact"
                className="block text-sm text-gray-500 hover:text-gray-700 transition"
              >
                도입 상담
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} MarketFitLab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
