"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Check } from "lucide-react";
import { usePathname } from "next/navigation";

type Msg = { agent: boolean; sender: string; text: string };

const KO = {
  channel: "# cro-experiments",
  msgs: [
    { agent: false, sender: "PM Kim", text: "이 페이지 가설 뽑아줘 — /product/detail" },
    { agent: true, sender: "CRO Agent", text: "분석 완료 · ICE 상위 가설 5개 도출" },
    { agent: true, sender: "CRO Agent", text: "1번으로 VWO에 3개 Variant 세팅 · QA 통과" },
  ] as Msg[],
  resultLabel: "실험 준비 완료",
  variants: [
    { label: "CONTROL", img: "/cases/cro-mobile-control.png", win: false },
    { label: "VAR 1", img: "/cases/cro-mobile-variation.png", win: true },
    { label: "VAR 2", img: "/cases/cro-mobile-variation2.png", win: false },
  ],
  typing: "입력 중…",
};

const EN = {
  channel: "# cro-experiments",
  msgs: [
    { agent: false, sender: "PM Kim", text: "Pull hypotheses for this page — /product/detail" },
    { agent: true, sender: "CRO Agent", text: "Analyzed · top 5 ICE-ranked hypotheses" },
    { agent: true, sender: "CRO Agent", text: "#1 set up as 3 VWO variants · QA passed" },
  ] as Msg[],
  resultLabel: "Experiment ready",
  variants: [
    { label: "CONTROL", img: "/cases/cro-mobile-control.png", win: false },
    { label: "VAR 1", img: "/cases/cro-mobile-variation.png", win: true },
    { label: "VAR 2", img: "/cases/cro-mobile-variation2.png", win: false },
  ],
  typing: "typing…",
};

// step: 0 idle → 1 msg1 → 2 typing → 3 msg2 → 4 msg3 → 5 result, then loop
const STEP_DELAYS = [500, 650, 600, 650, 750, 4200];

export default function HeroAgentDemo() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const seq = isEn ? EN : KO;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setStep((s) => (s >= 5 ? 0 : s + 1)), STEP_DELAYS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const visibleCount = step >= 4 ? 3 : step >= 3 ? 2 : step >= 1 ? 1 : 0;
  const shown = seq.msgs.slice(0, visibleCount);
  const showTyping = step === 2;
  const showResult = step >= 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-[420px] mx-auto lg:mx-0"
    >
      <div className="rounded-[20px] overflow-hidden border border-black/5 bg-white shadow-[0_24px_60px_-20px_rgba(27,27,27,0.28)] ring-1 ring-[#36B1A7]/10">
        {/* window bar */}
        <div className="bg-[#1B1B1B] px-4 py-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="text-white/90 text-[11px] font-semibold ml-3 tracking-wide">{seq.channel}</span>
          <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-[#36B1A7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36B1A7] animate-pulse" /> Slack
          </span>
        </div>

        {/* body — fixed min height to avoid reflow jump during loop */}
        <div className="p-4 min-h-[316px] flex flex-col gap-3 bg-[linear-gradient(180deg,#FBFEFE_0%,#FFFFFF_60%)]">
          <AnimatePresence mode="popLayout">
            {shown.map((m, i) => (
              <motion.div
                key={`${step >= 5 ? "r" : "m"}-${i}`}
                layout
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: m.agent ? "#7C3AED" : "#94A3B8" }}
                >
                  {m.agent ? <FlaskConical size={14} /> : <span className="text-[10px] font-bold">PM</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-[#1B1B1B] leading-none mb-1">{m.sender}</p>
                  <div
                    className={`inline-block rounded-xl px-3 py-2 text-[12.5px] leading-snug ${
                      m.agent ? "bg-[#F3EEFF] text-[#3B2A6B]" : "bg-[#EEF2F6] text-[#475569]"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {showTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white bg-[#7C3AED]">
                  <FlaskConical size={14} />
                </div>
                <div className="flex gap-1 rounded-xl bg-[#F3EEFF] px-3 py-2.5">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]/60"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.18 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {showResult && (
              <motion.div
                key="result"
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto rounded-2xl border border-[#36B1A7]/25 bg-[#F2FDFB] p-3"
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#36B1A7] flex items-center justify-center">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[11px] font-bold text-[#15867E]">{seq.resultLabel}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {seq.variants.map((v, i) => (
                    <motion.div
                      key={v.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.12 + i * 0.1 }}
                      className="relative"
                    >
                      <div
                        className={`relative aspect-[3/5] rounded-lg overflow-hidden border bg-white ${
                          v.win ? "border-[#36B1A7] ring-2 ring-[#36B1A7]/30" : "border-black/10"
                        }`}
                      >
                        <Image src={v.img} alt={v.label} fill sizes="120px" className="object-cover object-top" />
                        {v.win && (
                          <span className="absolute top-1 right-1 text-[8px] font-bold text-white bg-[#36B1A7] rounded px-1 py-0.5 leading-none">
                            WIN
                          </span>
                        )}
                      </div>
                      <p className="text-[9px] font-semibold text-center mt-1 text-[#626166] tracking-wide">{v.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
