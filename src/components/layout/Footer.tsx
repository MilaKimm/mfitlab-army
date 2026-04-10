import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#171e19] text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 pt-24 md:pt-32 pb-8">
        {/* Massive CTA */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] text-white mb-8">
            Let&apos;s
            <br />
            <span className="text-outline">Create</span>
          </h2>
          <a
            href="mailto:mila@mfitlab.com"
            className="text-[#b7c6c2] text-2xl md:text-4xl underline underline-offset-8 hover:text-white transition-colors duration-300 font-body font-light"
          >
            mila@mfitlab.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] uppercase tracking-[0.2em] text-white/40">
            &copy; {new Date().getFullYear()} MarketFitLab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.mfitlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors"
            >
              mfitlab.com
            </a>
            <Link
              href="#contact"
              className="text-[12px] uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
