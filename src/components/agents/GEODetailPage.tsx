"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Search,
  GitBranch,
  Activity,
  Code,
  Brain,
  Eye,
  Database,
  User,
  FileCheck,
  Wrench,
  Quote,
  Megaphone,
  FlaskConical,
  Magnet,
  Phone,
} from "lucide-react";
import type { Agent } from "@/data/army";
import { agents, localizeAgent } from "@/data/army";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import type { Locale } from "@/i18n/dictionaries";

const smallIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={18} />,
  Megaphone: <Megaphone size={18} />,
  FlaskConical: <FlaskConical size={18} />,
  Magnet: <Magnet size={18} />,
  Phone: <Phone size={18} />,
};

interface Props {
  agent: Agent;
  locale?: Locale;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const capabilities = [
  { icon: <FileCheck size={20} /> },
  { icon: <Code size={20} /> },
  { icon: <Quote size={20} /> },
  { icon: <Wrench size={20} /> },
  { icon: <GitBranch size={20} /> },
  { icon: <Activity size={20} /> },
];

const cdnSteps = [
  { icon: <Eye size={24} /> },
  { icon: <Brain size={24} /> },
  { icon: <Database size={24} /> },
  { icon: <Globe size={24} /> },
  { icon: <User size={24} /> },
];

export default function GEODetailPage({ agent: rawAgent, locale = "ko" }: Props) {
  const agent = localizeAgent(rawAgent, locale);
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id)).map((a) => localizeAgent(a, locale));
  const en = locale === "en";
  const prefix = locale === "en" ? "/en" : "";

  const t = {
    heroSub: en ? "Optimize so AI can recommend your brand" : "AI가 추천하는 브랜드가 되도록 최적화합니다",
    heroCta: en ? "Get in Touch" : "도입 문의",
    comparisonTitle: en ? "SEO competes for rank. GEO competes for inclusion in AI answers." : "SEO는 순위 경쟁, GEO는 인용 경쟁입니다",
    comparisonSub: en
      ? "SEO helps search engines find you. GEO makes AI remember and recommend you."
      : "SEO가 검색 결과에서 발견되는 기술이라면, GEO는 AI가 기억하고 추천하는 기술입니다",
    thSeo: en ? "SEO (Search Engine Optimization)" : "SEO (검색 엔진 최적화)",
    thGeo: en ? "GEO (Generative Engine Optimization)" : "GEO (생성형 엔진 최적화)",
    rowsLabels: en ? ["Goal", "Target", "Method", "Outcome"] : ["목표", "대상", "방법", "성과"],
    rowsSeo: en
      ? [
          "Rank higher on SERPs",
          "Search algorithms (Google, Naver)",
          "Keywords, backlinks, meta tags",
          "Traffic, click-through rate",
        ]
      : [
          "검색 결과 페이지 순위 상승",
          "검색 알고리즘 (Google, Naver)",
          "키워드 반복, 백링크, 메타태그",
          "트래픽, 클릭률(CTR)",
        ],
    rowsGeo: en
      ? [
          "Get cited and recommended in AI answers",
          "Large language models (ChatGPT, Gemini)",
          "Structured data, context, fact-based writing",
          "Citation score, brand accuracy",
        ]
      : [
          "AI 답변 내 인용 및 추천 획득",
          "대규모 언어 모델 (ChatGPT, Gemini)",
          "구조화된 데이터, 맥락, 팩트 기반 문장",
          "인용 점수(Citation Score), 브랜드 정확도",
        ],
    impactTitle: en ? "What AI-search optimization delivers" : "AI 검색 최적화의 효과",
    impactSub: en ? "Brands that show up in AI search convert differently" : "AI 검색에서 발견되는 브랜드는 전환율이 다릅니다",
    impactMetrics: en
      ? [
          { value: "×3.2", label: "AI-recommended product conversion" },
          { value: "×2.8", label: "AI-search lead quality" },
          { value: "+47%", label: "Organic traffic to cited content" },
          { value: "+58%", label: "Brand trust in AI answers" },
        ]
      : [
          { value: "x3.2배", label: "AI 추천 제품 구매 전환율" },
          { value: "x2.8배", label: "AI 검색 기반 리드 품질" },
          { value: "+47%", label: "AI 인용 콘텐츠 Organic 트래픽" },
          { value: "+58%", label: "AI 답변 내 브랜드 신뢰도" },
        ],
    coreTitle: en ? "What GEO Agent helps you do" : "GEO Agent의 핵심 기능",
    coreSub: en ? "Make AI remember and recommend your brand" : "AI가 브랜드를 기억하고 추천하게 만듭니다",
    capabilities: en
      ? [
          { title: "AI visibility audit", desc: "Score content readability from an LLM's perspective (pass/fail)." },
          { title: "Automatic schema structuring", desc: "Convert FAQs and product info to JSON-LD machines can parse." },
          { title: "Citation-ready content generation", desc: "Auto-generate stats and definitions AI is likely to cite." },
          { title: "Self-healing system", desc: "Detect and repair broken links and missing metadata automatically." },
          { title: "Site structure optimization", desc: "Fix internal links and orphan pages to improve AI crawlability." },
          { title: "Citation tracking", desc: "Monitor brand citations across major LLMs 24/7 and alert on changes." },
        ]
      : [
          { title: "AI Readability 진단", desc: "LLM 관점에서 콘텐츠의 가독성을 진단하고 점수화합니다 (Pass/Fail)" },
          { title: "Schema 자동 구조화", desc: "JSON-LD로 FAQ, Product 정보를 기계가 이해할 수 있는 언어로 변환합니다" },
          { title: "인용 문장 자동 생성", desc: "AI가 답변에 인용하기 좋은 통계와 정의 형태의 문장을 자동 생성합니다" },
          { title: "Self-Healing 시스템", desc: "끊어진 링크나 누락된 메타데이터를 감지하고 자동으로 복구합니다" },
          { title: "사이트 구조 최적화", desc: "내부 링크와 고립 페이지를 해결하여 AI 크롤링 접근성을 높입니다" },
          { title: "인용 추적 모니터링", desc: "주요 LLM에서 브랜드 인용 현황을 24/7 추적하고 변화를 알립니다" },
        ],
    cdnTitle: en ? "Launch without touching your CMS" : "CMS를 건드리지 않고 배포합니다",
    cdnSub: en
      ? "CDN-based delivery serves optimized content without modifying your site"
      : "CDN 기반 딜리버리로 기존 사이트 수정 없이 최적화된 콘텐츠를 제공합니다",
    cdnFootnote: en ? "* Custom-built capability" : "* 커스텀 구축 기능",
    stepsText: en
      ? [
          { label: "Detect", title: "Spot change", desc: "Auto-detect search-rank shifts" },
          { label: "Generate", title: "Draft content", desc: "GEO Agent writes optimized content" },
          { label: "Review", title: "Queue for QA", desc: "Verify quality and approve to launch" },
          { label: "Deploy", title: "CDN push", desc: "Publish instantly without CMS edits" },
          { label: "Reach", title: "Serve to users", desc: "Optimized content goes live" },
        ]
      : [
          { label: "감지", title: "변화 감지", desc: "검색 순위 변동 자동 탐지" },
          { label: "생성", title: "콘텐츠 생성", desc: "GEO Agent가 최적화 콘텐츠 작성" },
          { label: "검수", title: "검수 대기", desc: "품질 확인 후 배포 승인" },
          { label: "배포", title: "CDN 배포", desc: "CMS 수정 없이 즉시 반영" },
          { label: "도달", title: "사용자 제공", desc: "최적화된 콘텐츠 노출" },
        ],
    relatedTitle: en ? "Pairs well with" : "함께 사용하면 효과적입니다",
    relatedSub: en ? "Combine with other ARMY agents to cover the full funnel" : "ARMY의 다른 에이전트와 조합하면 퍼널 전체를 커버합니다",
    ctaTitle: en ? "Deploy GEO Agent" : "GEO Agent를 도입해보세요",
    ctaSub: en ? "Design your brand presence for the AI-search era — together" : "AI 검색 시대, 브랜드 노출 전략을 함께 설계합니다.",
  };

  const comparisonRowsLocal = t.rowsLabels.map((label, i) => ({
    label,
    seo: t.rowsSeo[i],
    geo: t.rowsGeo[i],
  }));
  const capabilitiesLocal = t.capabilities.map((c, i) => ({ ...c, icon: capabilities[i].icon }));
  const stepsLocal = t.stepsText.map((s, i) => ({ ...s, icon: cdnSteps[i].icon }));

  return (
    <div className="pt-20">
      {/* ━━ 1. Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <Globe size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{agent.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.tagline}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{t.heroSub}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>{t.heroCta}</Link>
          </motion.div>
        </div>
      </section>

      {/* ━━ 2. SEO vs GEO ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.comparisonTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.comparisonSub}</p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="hidden md:block max-w-4xl mx-auto">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    <th className="w-[15%] text-left text-xs font-semibold text-gray-400 uppercase tracking-wide p-3" />
                    <th className="text-center text-sm font-bold text-white p-4 rounded-lg bg-gray-500">{t.thSeo}</th>
                    <th className="text-center text-sm font-bold text-white p-4 rounded-lg" style={{ backgroundColor: agent.color }}>{t.thGeo}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRowsLocal.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="text-sm font-bold text-gray-900 p-3 whitespace-nowrap">{row.label}</td>
                      <td className="text-sm text-gray-600 text-center p-3">{row.seo}</td>
                      <td className="text-sm text-center p-3 font-medium" style={{ color: agent.color }}>{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-4 max-w-sm mx-auto">
              {comparisonRowsLocal.map((row, ri) => (
                <div key={ri} className="rounded-xl bg-white border border-gray-100 p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">{row.label}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-gray-400 w-8 flex-shrink-0">SEO</span>
                      <span className="text-sm text-gray-600">{row.seo}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold flex-shrink-0 w-8" style={{ color: agent.color }}>GEO</span>
                      <span className="text-sm font-medium" style={{ color: agent.color }}>{row.geo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ 3. Impact Metrics ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.impactTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.impactSub}</p>
          </FadeInOnScroll>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.impactMetrics.map((m, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: agent.color }}>{m.value}</p>
                  <p className="text-xs font-semibold text-gray-900 mt-2">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ 4. Core Capabilities ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.coreTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.coreSub}</p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilitiesLocal.map((cap, i) => (
              <FadeInOnScroll key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-100">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{cap.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{cap.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{cap.desc}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 5. CDN Delivery ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.cdnTitle}</h2>
            <p className="text-sm text-gray-500 text-center">{t.cdnSub}</p>
            <p className="text-xs text-gray-400 text-center mt-1 mb-10">{t.cdnFootnote}</p>
          </FadeInOnScroll>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="flex flex-col md:flex-row items-stretch gap-3">
            {stepsLocal.map((step, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-3 flex-1">
                <div className="flex-1 text-center p-5 rounded-xl bg-gray-50 border border-gray-100 h-full flex flex-col items-center">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{step.icon}</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{step.label}</p>
                  <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                </div>
                {i < stepsLocal.length - 1 && <ArrowRight size={16} className="text-gray-300 flex-shrink-0 hidden md:block" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ Related Agents ━━ */}
      {relatedAgents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInOnScroll>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.relatedTitle}</h2>
              <p className="text-sm text-gray-500 text-center mb-10">{t.relatedSub}</p>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedAgents.map((rel) => (
                <FadeInOnScroll key={rel.id}>
                  <Link href={`${prefix}/army/${rel.id}`} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${rel.color}15`, color: rel.color }}>{smallIconMap[rel.lucideIcon]}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900">{rel.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{rel.tagline}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-400" />
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━ CTA ━━ */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900">{t.ctaTitle}</h2>
            <p className="text-sm text-gray-500 mt-3">{t.ctaSub}</p>
            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>{t.heroCta}</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
