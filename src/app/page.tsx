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
import { agents, armyOverview, axSolutions, partners } from "@/data/army";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  Megaphone: <Megaphone size={20} />,
  FlaskConical: <FlaskConical size={20} />,
  Magnet: <Magnet size={20} />,
  Phone: <Phone size={20} />,
};

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-pink-200/20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4"
          >
            {armyOverview.heroLabel}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            {armyOverview.heroH1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            {armyOverview.heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
          >
            <Link
              href="#contact"
              className="h-12 px-6 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              ARMY 도입 상담
            </Link>
            <Link
              href="/army#dashboard"
              className="h-12 px-6 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              에이전트 작동 시나리오 보기
            </Link>
          </motion.div>

          <HeroSilhouettes />
        </div>
      </section>

      {/* Section 2: Why ARMY */}
      <section className="py-24 bg-white">
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
                <div className="rounded-2xl border border-gray-100 p-8 hover:shadow-sm transition h-full">
                  <span className="text-5xl font-bold text-gray-100 mb-4 block">
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

      {/* Section 3: Agent Grid */}
      <section className="py-24 bg-gray-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <FadeInOnScroll key={agent.id} delay={i * 0.08}>
                <Link href={`/army/${agent.id}`} className="block group">
                  <div
                    className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md transition h-full"
                    style={{ borderTopColor: agent.color, borderTopWidth: 3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span style={{ color: agent.color }}>
                        {iconMap[agent.lucideIcon]}
                      </span>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {agent.funnelPhase}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{agent.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {agent.expertise}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: agent.color }}
                      >
                        {agent.impactValue}
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dashboard Showcase */}
      <section className="py-24 bg-white">
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

          <div className="space-y-6">
            {armyOverview.scenario.steps.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Heritage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
              Heritage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              에이전트의 뒤에는 7년의 그로스 노하우가 있습니다
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {armyOverview.heritage.stats.map((stat, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <blockquote className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-3">
                &ldquo;{armyOverview.heritage.quote.text}&rdquo;
              </p>
              <cite className="text-sm text-gray-400 not-italic">
                — {armyOverview.heritage.quote.author}
              </cite>
            </blockquote>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {armyOverview.heritage.clients.map((client) => (
                <span key={client} className="text-sm text-gray-400 font-medium">
                  {client}
                </span>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 6: AX 3축 */}
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
                    className={`rounded-2xl p-6 h-full transition ${
                      sol.highlight
                        ? "border-2 border-purple-200 bg-purple-50/50 hover:shadow-md"
                        : "border border-gray-100 bg-white hover:shadow-sm"
                    }`}
                  >
                    <p className="text-sm text-gray-500 italic mb-3">
                      &ldquo;{sol.question}&rdquo;
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                      {sol.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{sol.description}</p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: sol.color }}
                      >
                        {sol.metric}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-purple-600 transition"
                      />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <p className="text-center text-xs text-gray-400 mt-6">
              각 솔루션은 독립적인 전문 파트너(Replit Inc. / Intel 출신 Articul8
              팀)와 함께 운영됩니다.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 7: Diagnostic CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              우리 팀에 맞는 ARMY 에이전트, 2분 만에 찾아보세요
            </h2>
            <p className="text-gray-600 mb-6">
              5개 질문에 답하면, 팀 상황에 맞는 ARMY 에이전트를 추천해드립니다.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex h-12 px-8 items-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              진단 시작
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 8: Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="text-center rounded-xl border border-gray-100 p-4"
                >
                  <p className="text-sm font-semibold text-gray-700">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Section 9: Contact Form */}
      <ContactSection />
    </>
  );
}

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
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
              />
              <input
                name="company"
                type="text"
                placeholder="회사명"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="이메일"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
              />
              <input
                name="phone"
                type="tel"
                placeholder="전화번호"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
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
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      selectedSolutions.includes(a.id)
                        ? "border-purple-400 bg-purple-50 text-purple-700"
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
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      selectedSolutions.includes(s.id)
                        ? "border-purple-400 bg-purple-50 text-purple-700"
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
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 resize-none"
            />

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition disabled:opacity-50"
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
