"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Agent } from "@/data/army";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import type { Locale } from "@/i18n/dictionaries";

/**
 * 에이전트 상세 페이지용 케이스 스터디 블록.
 * caseStudy.gallery 가 있으면 소구점 갤러리(LMF형), metrics 면 정량 막대(Voice형)로 렌더.
 */
export default function CaseStudyBlock({ agent, locale = "ko" }: { agent: Agent; locale?: Locale }) {
  const cs = agent.caseStudy;
  if (!cs) return null;
  const en = locale === "en";
  const t = {
    kicker: en ? "Customer Success" : "고객사 성공 사례",
    challenge: en ? "Challenge" : "문제",
    approach: en ? "Approach" : "투입",
    galleryLabel: en ? "Auto-generated ads, one per angle" : "소구점별 자동 생성 광고",
  };

  return (
    <section
      className="py-16"
      style={{ background: `linear-gradient(180deg, ${agent.color}0A 0%, #ffffff 100%)` }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeInOnScroll>
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: agent.color }}>
            {t.kicker}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">{cs.headline || cs.outcome}</h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            {cs.clientLabel} · {cs.industry}
          </p>
        </FadeInOnScroll>

        {/* Challenge → Approach */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          <FadeInOnScroll>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 h-full">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">{t.challenge}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{cs.challenge}</p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <div className="rounded-2xl border-2 bg-white p-6 h-full" style={{ borderColor: `${agent.color}30` }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: agent.color }}>{t.approach}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{cs.approach}</p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* After — gallery (LMF) */}
        {cs.gallery && (
          <FadeInOnScroll>
            <p className="text-xs font-semibold text-gray-400 text-center mb-4">{t.galleryLabel}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {cs.gallery.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={g.image} alt={g.angle} fill sizes="(max-width: 768px) 45vw, 220px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold" style={{ color: agent.color }}>{g.target}</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-snug">{g.angle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInOnScroll>
        )}

        {/* After — metrics (Voice) */}
        {cs.metrics && (
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto space-y-4">
              {cs.metrics.map((m, i) => (
                <div key={i} className="rounded-xl bg-white border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-900">{m.label}</p>
                    {m.badge && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{m.badge}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 line-through decoration-gray-300">{m.before}</span>
                    <ArrowRight size={16} className="text-gray-300" />
                    <span className="text-xl font-bold" style={{ color: agent.color }}>{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        )}

        {/* Outcome + asset note */}
        <FadeInOnScroll>
          <div className="text-center mt-10">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-white" style={{ backgroundColor: agent.color }}>
              {cs.outcome}
            </span>
            {cs.assetNote && <p className="text-xs text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">{cs.assetNote}</p>}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
