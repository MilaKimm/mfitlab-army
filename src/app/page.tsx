"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Send,
  Check,
} from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import {
  GeoGraphic,
  LmfGraphic,
  CroGraphic,
  LeadMagnetGraphic,
  VoiceGraphic,
} from "@/components/home/AgentCardGraphics";
import { agents, armyOverview, axSolutions, partners } from "@/data/army";

const graphicMap: Record<string, React.ReactNode> = {
  "geo-agent": <GeoGraphic />,
  "lmf-agent": <LmfGraphic />,
  "cro-agent": <CroGraphic />,
  "lead-magnet-agent": <LeadMagnetGraphic />,
  "voice-agent": <VoiceGraphic />,
};

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#171e19] overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-[#b7c6c2] opacity-20 blur-[120px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#bbe2f5] opacity-20 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          {/* Main title */}
          <div className="pt-32 md:pt-0">
            <h1 className="font-display text-[18vw] md:text-[16vw] leading-[0.85] uppercase tracking-tighter text-white">
              ARMY
            </h1>
            <p className="font-display text-[8vw] md:text-[7vw] leading-[0.85] uppercase tracking-tighter text-outline mt-2">
              AGENTS
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex justify-between items-end mt-12 md:mt-16">
            <p className="text-[#9f8d8b] text-[11px] uppercase tracking-[0.2em] max-w-[320px] leading-relaxed font-body">
              리서치부터 실험까지, 풀퍼널을 자동화하는 마켓핏랩의 에이전트 군단
            </p>
            <a
              href="#heritage"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={18} className="text-white/60" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── HERITAGE ─── */}
      <section id="heritage" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeInOnScroll>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9f8d8b] mb-6 font-body">
              Heritage
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#171e19] leading-[0.9] mb-16">
              마켓핏랩의
              <br />
              <span className="text-[#9f8d8b]">핵심 노하우</span>를 담았습니다
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {armyOverview.heritage.stats.map((stat, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div>
                  <p className="font-display text-5xl md:text-6xl text-[#171e19] uppercase tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-[#9f8d8b] uppercase tracking-[0.15em] mt-2 font-body">
                    {stat.label}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <p className="text-[11px] text-[#9f8d8b] uppercase tracking-[0.2em] font-body">
              실패와 성공의 기록이 에이전트의 스킬이 됩니다
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 border-t border-[#171e19]/10 pt-8">
              {armyOverview.heritage.clients.map((client) => (
                <span
                  key={client}
                  className="text-[11px] text-[#171e19]/30 uppercase tracking-[0.15em] font-body"
                >
                  {client}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── WHY ARMY (Featured Asymmetric) ─── */}
      <section className="py-24 md:py-32 bg-[#171e19] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeInOnScroll>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b7c6c2] mb-6 font-body">
              Why ARMY
            </p>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white leading-[0.9] mb-16">
              일반 AI 자동화와는
              <br />
              <span className="text-outline">다릅니다</span>
            </h2>
          </FadeInOnScroll>

          <div className="space-y-16">
            {armyOverview.differentiators.map((d, i) => (
              <FadeInOnScroll key={i} delay={i * 0.15}>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="font-display text-6xl text-white/10 uppercase">
                      {d.number}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-4">
                      {d.title}
                    </h3>
                    <p className="text-[#9f8d8b] text-sm md:text-base leading-relaxed max-w-2xl font-body font-light">
                      {d.body}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AGENTS (Capabilities Style) ─── */}
      <AgentsCapabilities />

      {/* ─── SCENARIO (Testimonial-style) ─── */}
      <section className="py-24 md:py-32 bg-[#302b2f] relative overflow-hidden">
        {/* Decorative quote mark */}
        <div className="absolute top-12 left-8 font-display text-[30rem] text-[#171e19]/30 leading-none select-none pointer-events-none">
          &ldquo;
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeInOnScroll>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b7c6c2] mb-6 font-body">
              How It Works — CRO Agent 시나리오 예시
            </p>
          </FadeInOnScroll>

          <div className="space-y-10">
            {armyOverview.scenario.steps.map((step, i) => {
              const isUser = i === 0 || i === 2;
              return (
                <FadeInOnScroll key={i} delay={i * 0.12}>
                  <div className="flex gap-6 items-start">
                    <div
                      className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-[10px] font-display uppercase tracking-widest ${
                        isUser
                          ? "bg-[#9f8d8b] text-white"
                          : "bg-[#b7c6c2] text-[#171e19]"
                      }`}
                    >
                      {isUser ? "PM" : "AI"}
                    </div>
                    <p className="font-display text-xl md:text-2xl lg:text-3xl uppercase tracking-tight text-white/90 leading-snug">
                      {step}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── AX 3축 (Featured Asymmetric variation) ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeInOnScroll>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9f8d8b] mb-6 font-body">
              AI Transformation
            </p>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-[#171e19] leading-[0.9] mb-4">
              마케팅 자동화만이
              <br />
              <span className="text-[#9f8d8b]">아닙니다</span>
            </h2>
            <p className="text-sm text-[#9f8d8b] font-body font-light mb-16 max-w-xl">
              마켓핏랩이 AI로 성장을 만드는 3가지 방법 — 고객의 과제에 따라 다른 해법을 제안합니다.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-px bg-[#171e19]/10">
            {axSolutions.map((sol, i) => (
              <FadeInOnScroll key={sol.id} delay={i * 0.1}>
                <Link href={sol.href} className="block group">
                  <div className="bg-white p-8 md:p-10 h-full hover:bg-[#171e19] transition-colors duration-500">
                    <p className="text-[11px] text-[#9f8d8b] italic font-body mb-6">
                      &ldquo;{sol.question}&rdquo;
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-[#171e19] group-hover:text-white transition-colors duration-500 mb-4">
                      {sol.name}
                    </h3>
                    <p className="text-sm text-[#9f8d8b] font-body font-light mb-8 group-hover:text-white/60 transition-colors duration-500">
                      {sol.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#171e19]/10 group-hover:border-white/10 pt-4 transition-colors duration-500">
                      <span className="text-[12px] font-display uppercase tracking-wider text-[#171e19] group-hover:text-[#b7c6c2] transition-colors duration-500">
                        {sol.metric}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-[#171e19]/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <p className="text-[11px] text-[#9f8d8b]/60 uppercase tracking-[0.15em] mt-8 font-body">
              각 솔루션은 독립적인 전문 파트너와 함께 운영됩니다
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── DIAGNOSTIC CTA ─── */}
      <section className="py-24 bg-[#171e19] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#d5f4f9] opacity-10 blur-[120px] animate-float" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 text-center">
          <FadeInOnScroll>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter text-white leading-[0.9] mb-6">
              우리 팀에 맞는
              <br />
              ARMY 에이전트를 찾아보세요
            </h2>
            <p className="text-[#9f8d8b] font-body font-light mb-8">
              5개 질문 · 약 2분 소요
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white border border-white/50 px-8 py-4 hover:bg-white hover:text-[#171e19] transition-all duration-300"
            >
              진단 시작
              <ArrowRight size={14} />
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {partners.map((p) => (
                <div key={p.name} className="text-center">
                  <p className="text-[13px] font-body font-semibold text-[#171e19]/50">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <ContactSection />
    </>
  );
}

/* ─── AGENTS CAPABILITIES ─── */
function AgentsCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = agents[activeIdx];

  return (
    <section className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <FadeInOnScroll>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9f8d8b] mb-6 font-body">
            ARMY Agents
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: Agent list */}
          <div className="col-span-12 md:col-span-4">
            <div className="space-y-0">
              {agents.map((agent, i) => (
                <button
                  key={agent.id}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left py-4 flex items-center gap-4 border-b transition-all duration-300 group ${
                    i === activeIdx
                      ? "border-[#171e19]"
                      : "border-[#171e19]/10 hover:border-[#171e19]/30"
                  }`}
                >
                  <div
                    className={`h-px transition-all duration-500 bg-[#171e19] ${
                      i === activeIdx ? "w-16" : "w-10 group-hover:w-16"
                    }`}
                  />
                  <span
                    className={`font-display text-lg md:text-xl uppercase tracking-tight transition-colors duration-300 ${
                      i === activeIdx
                        ? "text-[#171e19]"
                        : "text-[#171e19]/30 group-hover:text-[#171e19]/60"
                    }`}
                  >
                    {agent.name}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-body transition-colors duration-300 ${
                      i === activeIdx ? "text-[#9f8d8b]" : "text-transparent"
                    }`}
                  >
                    {agent.funnelPhase}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active agent detail */}
          <div className="col-span-12 md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-[#171e19] leading-[0.9] mb-4">
                      {active.tagline}
                    </h3>
                    <p className="text-sm text-[#9f8d8b] font-body font-light leading-relaxed mb-6 max-w-lg">
                      {active.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-6">
                      <div>
                        <p className="font-display text-3xl text-[#171e19] uppercase tracking-tighter">
                          {active.impactValue}
                        </p>
                        <p className="text-[10px] text-[#9f8d8b] uppercase tracking-[0.15em] font-body mt-1">
                          {active.impactMetric}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] text-[#9f8d8b] uppercase tracking-[0.15em] font-body">
                          {active.expertise}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {active.features.map((f, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-[#171e19]/60 border border-[#171e19]/10 px-3 py-1 font-body"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/army/${active.id}`}
                      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#171e19] font-body group"
                    >
                      자세히 보기
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </Link>
                  </div>

                  {/* Graphic */}
                  <div className="w-full lg:w-[280px] h-[280px] rounded-2xl bg-white border border-[#171e19]/5 overflow-hidden shrink-0 relative">
                    {graphicMap[active.id]}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT SECTION ─── */
function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      solutions: selectedSolutions,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setFormState("sent");
    } catch {
      setFormState("idle");
    }
  };

  const armyAgents = agents.map((a) => ({ id: a.id, name: a.name }));
  const otherSolutions = [
    { id: "replit", name: "Replit" },
    { id: "articul8", name: "Articul8" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#171e19]">
      <div className="max-w-2xl mx-auto px-8 md:px-12">
        <FadeInOnScroll>
          <p className="text-[#9f8d8b] text-lg md:text-xl font-body font-light text-center mb-3 leading-relaxed">
            나보다 꼼꼼하게 진단하고, 나보다 빠르게 세팅하는
            <br className="hidden md:block" />
            에이전트 군단이 있다면 —
          </p>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-white text-center mb-12">
            Get in Touch
          </h2>
        </FadeInOnScroll>

        {formState === "sent" ? (
          <FadeInOnScroll>
            <div className="border border-[#b7c6c2]/30 p-8 text-center">
              <Check size={32} className="mx-auto text-[#b7c6c2] mb-3" />
              <p className="font-display text-xl uppercase tracking-wider text-white">
                문의가 접수되었습니다
              </p>
              <p className="text-[12px] text-[#9f8d8b] mt-2 font-body">
                영업일 기준 1~2일 내 연락드리겠습니다.
              </p>
            </div>
          </FadeInOnScroll>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="담당자명"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-[#b7c6c2] transition-colors"
              />
              <input
                name="company"
                type="text"
                placeholder="회사명"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-[#b7c6c2] transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="이메일"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-[#b7c6c2] transition-colors"
              />
              <input
                name="phone"
                type="tel"
                placeholder="전화번호"
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-[#b7c6c2] transition-colors"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f8d8b] mb-3 font-body">
                관심 솔루션
              </p>
              <div className="flex flex-wrap gap-2">
                {[...armyAgents, ...otherSolutions].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleSolution(s.id)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider border transition-all duration-300 font-body ${
                      selectedSolutions.includes(s.id)
                        ? "border-[#b7c6c2] text-[#b7c6c2] bg-[#b7c6c2]/10"
                        : "border-white/15 text-white/40 hover:border-white/30"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="문의 내용 (선택)"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border border-white/20 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-[#b7c6c2] transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full py-4 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#171e19] bg-white hover:bg-[#b7c6c2] transition-all duration-300 disabled:opacity-50 font-body"
            >
              <Send size={14} />
              {formState === "sending" ? "전송 중..." : "문의하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
