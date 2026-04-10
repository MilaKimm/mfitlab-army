"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { agents } from "@/data/army";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
        style={{ padding: "24px 32px" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl tracking-widest text-white uppercase">
            ARMY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/army"
              className="text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/solutions/replit"
              className="text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
            >
              Replit
            </Link>
            <Link
              href="/solutions/articul8"
              className="text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300"
            >
              Articul8
            </Link>
            <Link
              href="#contact"
              className="text-[12px] uppercase tracking-[0.2em] text-white border border-white/50 px-5 py-2 hover:bg-white hover:text-[#171e19] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#171e19] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="font-display text-2xl tracking-widest text-white uppercase"
              onClick={() => setMobileOpen(false)}
            >
              ARMY
            </Link>
            <button className="text-white" onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f8d8b] mb-2">
              Agents
            </p>
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={`/army/${agent.id}`}
                className="font-display text-3xl text-white/80 hover:text-white uppercase tracking-wider transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {agent.name}
              </Link>
            ))}

            <div className="border-t border-white/10 my-4" />

            <Link
              href="/solutions/replit"
              className="text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Replit
            </Link>
            <Link
              href="/solutions/articul8"
              className="text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Articul8
            </Link>

            <Link
              href="#contact"
              className="mt-4 text-center text-[12px] uppercase tracking-[0.2em] text-white border border-white/50 px-6 py-3 hover:bg-white hover:text-[#171e19] transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
