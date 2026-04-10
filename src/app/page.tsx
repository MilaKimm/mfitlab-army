"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Megaphone,
  FlaskConical,
  Magnet,
  Phone,
  ArrowRight,
  Check,
  Send,
} from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import HeroSilhouettes from "@/components/home/HeroSilhouettes";
import {
  GeoGraphic,
  LmfGraphic,
  CroGraphic,
  LeadMagnetGraphic,
  VoiceGraphic,
} from "@/components/home/AgentCardGraphics";
import { agents, armyOverview, axSolutions, partners } from "@/data/army";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  Megaphone: <Megaphone size={20} />,
  FlaskConical: <FlaskConical size={20} />,
  Magnet: <Magnet size={20} />,
  Phone: <Phone size={20} />,
};

const graphicMap: Record<string, React.ReactNode> = {
  "geo-agent": <GeoGraphic />,
  "lmf-agent": <LmfGraphic />,
  "cro-agent": <CroGraphic />,
  "lead-magnet-agent": <LeadMagnetGraphic />,
  "voice-agent": <VoiceGraphic />,
};

const gradientMap: Record<string, string> = {
  "geo-agent": "from-cyan-50 via-cyan-50/40 to-white",
  "lmf-agent": "from-pink-50 via-pink-50/40 to-white",
  "cro-agent": "from-purple-50 via-purple-50/40 to-white",
  "lead-magnet-agent": "from-amber-50 via-amber-50/40 to-white",
  "voice-agent": "from-indigo-50 via-indigo-50/40 to-white",
};

export default function Home() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f3] via-[#f0eef8] to-white">
        {/* Warm-to-cool ambient light behind silhouettes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-25 blur-[150px] bg-[#fde68a]" />
          <div className="absolute top-[5%] left-[25%] w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] bg-[#f9a8d4]" />
          <div className="absolute top-[0%] right-[10%] w-[600px] h-[600px] rounded-full opacity-25 blur-[150px] bg-[#93c5fd]" />
          <div className="absolute bottom-[10%] left-[40%] w-[500px] h-[500px] rounded-full opacity-15 blur-[130px] bg-[#c4b5fd]" />
          <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] bg-[#a5f3fc]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4"
          >
            {armyOverview.heroLabel}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {armyOverview.heroH1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            {armyOverview.heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="#contact"
              className="h-12 px-6 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
            >
              ARMY 도입 상담
            </Link>
            <Link
              href="/army#dashboard"
              className="h-12 px-6 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-white/80 transition-all duration-300"
            >
              에이전트 작동 시나리오 보기
            </Link>
          </motion.div>

          {/* 7 Silhouettes */}
          <HeroSilhouettes />
        </div>
      </section>

      {/* ─── Section 2: Heritage (moved up) ─── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              마켓핏랩의 핵심 노하우를 담았습니다
            </h2>
          </FadeInOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {armyOverview.heritage.stats.map((stat, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          {/* Client logos */}
          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-6 border-t border-gray-100">
              {armyOverview.heritage.clients.map((client) => (
                <span
                  key={client}
                  className="text-xs text-gray-300 font-medium uppercase tracking-wider"
                >
                  {client}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── Section 3: Why ARMY ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
              Why ARMY
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
              일반 AI 자동화와는 다릅니다
            </h2>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {armyOverview.differentiators.map((d, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                    style={{
                      backgroundColor: ["#7C3AED", "#EC4899", "#4361EE"][i],
                    }}
                  />
                  <span className="text-6xl font-bold text-gray-100/80 mb-4 block">
                    {d.number}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {d.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Agent Grid (with graphics) ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
              ARMY Agents
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              5개 에이전트가 풀퍼널 그로스를 자동화합니다
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              각 에이전트에는 마켓핏랩의 프레임워크와 실전 노하우가 학습되어
              있습니다.
            </p>
          </FadeInOnScroll>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link href={`/army/${agent.id}`} className="block group">
                  <div
                    className={`rounded-2xl border border-gray-100/60 bg-gradient-to-br ${
                      gradientMap[agent.id]
                    } p-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[280px] flex overflow-hidden`}
                  >
                    {/* Left: content */}
                    <div className="flex flex-col justify-between p-6 w-[55%]">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              backgroundColor: agent.color + "15",
                              color: agent.color,
                            }}
                          >
                            {iconMap[agent.lucideIcon]}
                          </span>
                          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                            {agent.funnelPhase}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                          {agent.tagline}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-400">
                          {agent.expertise}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-bold"
                            style={{ color: agent.color }}
                          >
                            {agent.impactValue}
                          </span>
                          <span className="w-6 h-6 rounded-full bg-gray-900/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight size={12} className="text-gray-600" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: graphic */}
                    <div className="w-[45%] relative">
                      {graphicMap[agent.id]}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Section 5: Dashboard Showcase ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
              How ARMY Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {armyOverview.scenario.headline}
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              {armyOverview.scenario.subheadline}
            </p>
          </FadeInOnScroll>

          {/* Slack-style scenario */}
          <FadeInOnScroll>
            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                {/* Slack header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2 font-mono">
                    # army-cro-channel
                  </span>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4">
                  {armyOverview.scenario.steps.map((step, i) => {
                    const isUser = i === 0 || i === 2;
                    return (
                      <FadeInOnScroll key={i} delay={i * 0.15}>
                        <div className={`flex gap-3 ${isUser ? "" : ""}`}>
                          <div
                            className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-bold text-white ${
                              isUser ? "bg-gray-400" : "bg-purple-500"
                            }`}
                          >
                            {isUser ? "PM" : "AI"}
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] text-gray-400 mb-1">
                              {isUser ? "마케터" : "CRO Agent"}
                            </p>
                            <div
                              className={`rounded-xl px-4 py-3 text-sm ${
                                isUser
                                  ? "bg-gray-50 text-gray-700"
                                  : "bg-purple-50 text-purple-900"
                              }`}
                            >
                              {step}
                            </div>
                          </div>
                        </div>
                      </FadeInOnScroll>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── Section 6: AX 3축 ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
              AI Transformation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              마케팅 자동화만이 아닙니다.
              <br />
              조직의 AI 역량 자체를 바꿉니다.
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              마켓핏랩이 AI로 성장을 만드는 3가지 방법 — 고객의 과제에 따라 다른
              해법을 제안합니다.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {axSolutions.map((sol, i) => (
              <FadeInOnScroll key={sol.id} delay={i * 0.1}>
                <Link href={sol.href} className="block group">
                  <div
                    className={`rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                      sol.highlight
                        ? "border-2 border-purple-200 bg-gradient-to-br from-purple-50/80 to-white hover:shadow-xl"
                        : "border border-gray-100 bg-white hover:shadow-lg"
                    }`}
                  >
                    <p className="text-sm text-gray-500 italic mb-4">
                      &ldquo;{sol.question}&rdquo;
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {sol.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {sol.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span
                        className="text-sm font-bold"
                        style={{ color: sol.color }}
                      >
                        {sol.metric}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                        <ArrowRight
                          size={14}
                          className="text-gray-400 group-hover:text-purple-600 transition-colors"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <p className="text-center text-xs text-gray-400 mt-8">
              각 솔루션은 독립적인 전문 파트너(Replit Inc. / Intel 출신 Articul8
              팀)와 함께 운영됩니다.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── Section 7: Diagnostic CTA ─── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-indigo-50 to-cyan-50" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-200/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-cyan-200/20 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              우리 팀에 맞는 ARMY 에이전트, 2분 만에 찾아보세요
            </h2>
            <p className="text-gray-600 mb-8">
              5개 질문에 답하면, 팀 상황에 맞는 ARMY 에이전트를 추천해드립니다.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex h-12 px-8 items-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              진단 시작
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── Section 8: Partners ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="text-center rounded-xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <p className="text-sm font-semibold text-gray-700">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── Section 9: Contact Form ─── */}
      <ContactSection />
    </>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
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
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
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
    { id: "replit", name: "Replit 워크샵" },
    { id: "articul8", name: "Articul8" },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            ARMY 도입, 지금 바로 시작하고 싶다면?
          </h2>
          <p className="text-gray-600 text-center mb-10">
            마켓핏랩의 에이전트 군단으로 그로스 팀의 생산성을 극대화하세요.
          </p>
        </FadeInOnScroll>

        {formState === "sent" ? (
          <FadeInOnScroll>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <Check size={40} className="mx-auto text-green-500 mb-3" />
              <p className="text-lg font-semibold text-gray-900">
                문의가 접수되었습니다
              </p>
              <p className="text-sm text-gray-500 mt-2">
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              />
              <input
                name="company"
                type="text"
                placeholder="회사명"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="이메일"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              />
              <input
                name="phone"
                type="tel"
                placeholder="전화번호"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all"
              />
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                ARMY — 그로스 마케팅 AI
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {armyAgents.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleSolution(a.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                      selectedSolutions.includes(a.id)
                        ? "border-purple-400 bg-purple-50 text-purple-700 shadow-sm"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                기타 솔루션
              </p>
              <div className="flex flex-wrap gap-2">
                {otherSolutions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleSolution(s.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                      selectedSolutions.includes(s.id)
                        ? "border-purple-400 bg-purple-50 text-purple-700 shadow-sm"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 resize-none transition-all"
            />

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 hover:shadow-lg"
            >
              <Send size={16} />
              {formState === "sending" ? "전송 중..." : "문의하기"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
