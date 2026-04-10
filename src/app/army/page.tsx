"use client";

import Link from "next/link";
import {
  Globe,
  Megaphone,
  FlaskConical,
  Magnet,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import { agents, armyOverview } from "@/data/army";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  Megaphone: <Megaphone size={24} />,
  FlaskConical: <FlaskConical size={24} />,
  Magnet: <Magnet size={24} />,
  Phone: <Phone size={24} />,
};

export default function ArmyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl" />
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-200/20 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
            {armyOverview.heroLabel}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {armyOverview.heroH1}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {armyOverview.heroSubDetail}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#contact"
              className="h-12 px-6 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              ARMY 도입 상담
            </Link>
            <a
              href="#dashboard"
              className="h-12 px-6 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              에이전트 시나리오 보기
            </a>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
              그로스팀이 겪는 현실
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {armyOverview.problems.map((p, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 p-8 h-full">
                  <span className="text-5xl font-bold text-gray-100 mb-4 block">
                    {p.number}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators (Extended) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
              ARMY가 다른 AI 자동화와 다른 이유
            </h2>
          </FadeInOnScroll>
          <div className="space-y-8">
            {armyOverview.differentiators.map((d, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-bold text-purple-100 shrink-0">
                      {d.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {d.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {d.bodyExtended}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Squad */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              ARMY 에이전트 군단
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              각 에이전트는 풀퍼널의 특정 단계를 담당하며, 마켓핏랩의 실전
              프레임워크가 내장되어 있습니다.
            </p>
          </FadeInOnScroll>

          <div className="space-y-6">
            {agents.map((agent, i) => (
              <FadeInOnScroll key={agent.id} delay={i * 0.08}>
                <Link
                  href={`/army/${agent.id}`}
                  className="block group"
                >
                  <div
                    className="rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition flex flex-col md:flex-row md:items-center gap-6"
                    style={{ borderLeftColor: agent.color, borderLeftWidth: 4 }}
                  >
                    <div className="flex items-center gap-3 md:w-48 shrink-0">
                      <span style={{ color: agent.color }}>
                        {iconMap[agent.lucideIcon]}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition">
                          {agent.name}
                        </p>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {agent.funnelPhase}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {agent.description}
                    </p>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <p className="text-xs text-gray-400">{agent.expertise}</p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: agent.color }}
                        >
                          {agent.impactValue}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-purple-500 transition" />
                    </div>
                  </div>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section id="dashboard" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
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
                  <div className="rounded-xl bg-white border border-gray-100 p-5 flex-1">
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

      {/* Adoption Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {armyOverview.adoption.headline}
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              {armyOverview.adoption.subheadline}
            </p>
          </FadeInOnScroll>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {armyOverview.adoption.steps.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-3 gap-6">
            {armyOverview.adoption.options.map((opt, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-6 text-center ${
                    opt.recommended
                      ? "border-2 border-purple-200 bg-purple-50/50"
                      : "border border-gray-100"
                  }`}
                >
                  {opt.recommended && (
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      추천
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
                    {opt.name}
                  </h3>
                  <p className="text-sm text-gray-600">{opt.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
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
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 italic leading-relaxed mb-3">
                &ldquo;{armyOverview.heritage.quote.text}&rdquo;
              </p>
              <cite className="text-sm text-gray-400 not-italic">
                — {armyOverview.heritage.quote.author}
              </cite>
            </blockquote>
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              나보다 꼼꼼하게 진단하고, 나보다 빠르게 세팅하는
              <br />
              에이전트 군단이 있다면 — 여러분의 제품은
              <br />
              얼마나 더 빠르게 성장할까요?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#contact"
                className="h-12 px-8 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                ARMY 도입 상담
              </Link>
              <Link
                href="/diagnostic"
                className="h-12 px-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-white transition"
              >
                2분 진단 시작
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
