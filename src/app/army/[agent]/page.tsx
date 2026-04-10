"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import { agents } from "@/data/army";

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params.agent as string;
  const agent = agents.find((a) => a.id === agentId);

  if (!agent) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          에이전트를 찾을 수 없습니다
        </h1>
        <Link href="/army" className="text-purple-600 mt-4 inline-block">
          ARMY로 돌아가기
        </Link>
      </div>
    );
  }

  const relatedAgents = agents.filter((a) =>
    agent.relatedAgents.includes(a.id)
  );

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        style={{
          borderTopWidth: 4,
          borderTopColor: agent.color,
          borderTopStyle: "solid",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/army"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition mb-8"
          >
            <ArrowLeft size={14} />
            ARMY
          </Link>

          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: agent.color }}
          >
            {agent.heroLabel}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {agent.heroH1}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            {agent.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="h-12 px-6 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              ARMY 도입 상담
            </Link>
            {agent.demoUrl && (
              <a
                href={agent.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 flex items-center justify-center gap-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                데모 보기 <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Trust Copy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-base text-gray-600 leading-relaxed border-l-4 pl-6" style={{ borderColor: agent.color }}>
              {agent.trustCopy}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              기존 방식의 한계
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {agent.problems.map((p, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 h-full">
                  <span className="text-5xl font-bold text-gray-100 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
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

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              이렇게 작동합니다
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.steps.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: agent.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              숫자가 말해줍니다
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.results.map((r, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="text-sm text-gray-500 mb-2">{r.metric}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 line-through">
                      {r.before}
                    </span>
                    <ArrowRight size={14} className="text-gray-300" />
                    <span
                      className="text-xl font-bold"
                      style={{ color: agent.color }}
                    >
                      {r.after}
                    </span>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              핵심 기능
            </h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 gap-4">
            {agent.features.map((f, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">
                  <Check size={18} style={{ color: agent.color }} />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              맞춤형 ARMY 에이전트를 파견합니다
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              고객사의 제품, 업계, 고객 여정에 맞춰 에이전트의 프롬프트, 스킬,
              데이터를 최적화합니다. 에이전트가 정교해질수록 실험 적중률이
              올라가고, 같은 예산으로 더 큰 성과를 만듭니다.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-12 px-8 items-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              ARMY 도입 상담
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Related Agents */}
      {relatedAgents.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                함께 쓰면 좋은 ARMY 에이전트
              </h2>
            </FadeInOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedAgents.map((ra, i) => (
                <FadeInOnScroll key={ra.id} delay={i * 0.1}>
                  <Link href={`/army/${ra.id}`} className="block group">
                    <div
                      className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition"
                      style={{ borderLeftColor: ra.color, borderLeftWidth: 4 }}
                    >
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {ra.funnelPhase}
                      </p>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition mb-2">
                        {ra.name}
                      </h3>
                      <p className="text-sm text-gray-600">{ra.tagline}</p>
                    </div>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
