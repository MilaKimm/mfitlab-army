"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { agents } from "@/data/army";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [armyDropdown, setArmyDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">MarketFitLab</span>
          <span className="text-[10px] font-semibold tracking-widest uppercase bg-gray-900 text-white px-2 py-0.5 rounded">
            AX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* ARMY Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setArmyDropdown(true)}
            onMouseLeave={() => setArmyDropdown(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition">
              ARMY <ChevronDown size={14} />
            </button>
            {armyDropdown && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 min-w-[320px] grid grid-cols-2 gap-x-6 gap-y-2">
                  <Link
                    href="/army"
                    className="col-span-2 text-sm font-semibold text-gray-900 hover:text-purple-600 transition pb-2 border-b border-gray-100 mb-1"
                  >
                    ARMY 소개
                  </Link>
                  {agents.map((agent) => (
                    <Link
                      key={agent.id}
                      href={`/army/${agent.id}`}
                      className="text-sm text-gray-600 hover:text-gray-900 transition py-1"
                    >
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: agent.color }}
                      />
                      {agent.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/solutions/replit"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Replit
          </Link>
          <Link
            href="/solutions/articul8"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Articul8
          </Link>

          <Link
            href="#contact"
            className="h-10 px-5 flex items-center rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            도입 상담
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              ARMY
            </p>
            <Link
              href="/army"
              className="block text-sm font-semibold text-gray-900 py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              ARMY 소개
            </Link>
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={`/army/${agent.id}`}
                className="block text-sm text-gray-600 py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {agent.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 space-y-2">
            <Link
              href="/solutions/replit"
              className="block text-sm text-gray-700 py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              Replit
            </Link>
            <Link
              href="/solutions/articul8"
              className="block text-sm text-gray-700 py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              Articul8
            </Link>
          </div>
          <Link
            href="#contact"
            className="block text-center h-10 flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            도입 상담
          </Link>
        </div>
      )}
    </header>
  );
}
