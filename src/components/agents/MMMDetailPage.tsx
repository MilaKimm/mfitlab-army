"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PieChart,
  ArrowRight,
  Database,
  Brain,
  LineChart,
  Target,
  Globe,
  Megaphone,
  FlaskConical,
  Magnet,
  Phone,
  Layers,
  TrendingUp,
  Activity,
  Sparkles,
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
  PieChart: <PieChart size={18} />,
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

const comparisonRows = [
  { label: "어트리뷰션", traditional: "Last-click 중심", mmm: "전체 퍼널 기여도 분석" },
  { label: "분석 단위", traditional: "채널별 개별 측정", mmm: "채널 간 상호작용 포함" },
  { label: "의사결정", traditional: "감 + 경험 기반 배분", mmm: "시뮬레이션 기반 최적화" },
  { label: "상위 퍼널", traditional: "과소 평가", mmm: "브랜드·CTV 기여도까지 측정" },
];

const impactMetrics = [
  { value: "+34%", label: "Global ROAS 개선" },
  { value: "-22%", label: "낭비성 채널 예산" },
  { value: "x2.1", label: "채널별 기여도 정확도" },
];

const capabilities = [
  { icon: <Database size={20} />, title: "채널 통합 데이터 수집", desc: "Meta, Google, TikTok 등 채널별 지출·성과 데이터를 자동 통합합니다" },
  { icon: <Brain size={20} />, title: "최신 MMM 엔진 병용", desc: "Google Meridian, Meta Robyn 등 최신 오픈소스 MMM으로 베이지안 기반 기여도를 추정합니다" },
  { icon: <LineChart size={20} />, title: "예산 시뮬레이션", desc: "다양한 예산 배분 시나리오를 시뮬레이션하여 최적 조합을 도출합니다" },
  { icon: <Layers size={20} />, title: "크로스 채널 분석", desc: "Last-click을 넘어 상위 퍼널 채널의 기여도까지 정밀 측정합니다" },
  { icon: <Activity size={20} />, title: "실시간 대시보드", desc: "채널별 성과와 최적 예산 배분을 상시 모니터링합니다" },
  { icon: <TrendingUp size={20} />, title: "Global ROAS 최적화", desc: "단일 캠페인이 아닌 전체 마케팅 자산의 수익률을 극대화합니다" },
];

const mmmSteps = [
  { icon: <Database size={24} />, label: "수집", title: "데이터 통합", desc: "채널별 지출 및 성과 데이터 자동 수집" },
  { icon: <Brain size={24} />, label: "모델링", title: "MMM 실행", desc: "Meridian·Robyn 등 최신 MMM으로 기여도 모델 학습" },
  { icon: <Target size={24} />, label: "분석", title: "기여도 측정", desc: "전체 퍼널에서 채널별 실제 기여 추정" },
  { icon: <Sparkles size={24} />, label: "최적화", title: "예산 재배분", desc: "시뮬레이션 기반 최적 시나리오 도출" },
];

export default function MMMDetailPage({ agent: rawAgent, locale = "ko" }: Props) {
  const agent = localizeAgent(rawAgent, locale);
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id)).map((a) => localizeAgent(a, locale));
  const en = locale === "en";
  const t = {
    heroCta: en ? "Get in Touch" : "도입 문의",
    comparisonTitle: en ? "Last-click captures only the tail of the funnel" : "Last-click은 성과를 끝단에만 돌립니다",
    comparisonSub: en ? "MMM models the full funnel to reclaim true contribution" : "MMM은 전체 퍼널을 모델링해 실제 기여도를 되찾습니다",
    thTraditional: en ? "Legacy attribution" : "기존 어트리뷰션",
    thMmm: en ? "Modern MMM (Meridian · Robyn)" : "최신 MMM (Meridian · Robyn)",
    rowsLabels: en
      ? ["Attribution", "Unit of analysis", "Decision-making", "Upper funnel"]
      : ["어트리뷰션", "분석 단위", "의사결정", "상위 퍼널"],
    rowsTrad: en
      ? ["Last-click-centric", "Per-channel only", "Gut-feel allocation", "Underweighted"]
      : ["Last-click 중심", "채널별 개별 측정", "감 + 경험 기반 배분", "과소 평가"],
    rowsMmm: en
      ? ["Full-funnel contribution", "Channel interactions included", "Simulation-based optimization", "Brand · CTV contribution measured"]
      : ["전체 퍼널 기여도 분석", "채널 간 상호작용 포함", "시뮬레이션 기반 최적화", "브랜드·CTV 기여도까지 측정"],
    legacyShort: en ? "Legacy" : "기존",
    impactTitle: en ? "What reallocation unlocks" : "예산 재배분의 효과",
    impactSub: en ? "Accurate attribution drives more revenue from the same spend" : "정확한 기여도가 측정되면, 같은 예산으로 더 많은 매출을 만듭니다",
    impactMetrics: en
      ? [
          { value: "+34%", label: "Global ROAS lift" },
          { value: "-22%", label: "Wasted channel spend" },
          { value: "×2.1", label: "Attribution accuracy" },
        ]
      : [
          { value: "+34%", label: "Global ROAS 개선" },
          { value: "-22%", label: "낭비성 채널 예산" },
          { value: "x2.1", label: "채널별 기여도 정확도" },
        ],
    impactFootnote: en
      ? "* Based on MarketFit Lab growth-project averages. Results vary by environment."
      : "* 마켓핏랩 그로스 프로젝트 평균 기준. 고객사 환경에 따라 차이 있음.",
    coreTitle: en ? "MMM Agent capabilities" : "MMM Agent의 핵심 기능",
    coreSub: en ? "From modern MMM (Meridian · Robyn) to budget simulation" : "최신 MMM 모델(Meridian·Robyn) 기반 모델링부터 예산 시뮬레이션까지",
    capabilities: en
      ? [
          { title: "Unified channel ingest", desc: "Auto-consolidates spend and performance from Meta, Google, TikTok, and more." },
          { title: "Modern MMM engines", desc: "Bayesian contribution estimation via Google Meridian and Meta Robyn." },
          { title: "Budget simulation", desc: "Simulate allocation scenarios and surface the optimal mix." },
          { title: "Cross-channel analysis", desc: "Go beyond last-click — measure upper-funnel channel contribution." },
          { title: "Real-time dashboard", desc: "Monitor channel performance and optimal allocation continuously." },
          { title: "Global ROAS optimization", desc: "Maximize return across your full marketing asset, not a single campaign." },
        ]
      : [
          { title: "채널 통합 데이터 수집", desc: "Meta, Google, TikTok 등 채널별 지출·성과 데이터를 자동 통합합니다" },
          { title: "최신 MMM 엔진 병용", desc: "Google Meridian, Meta Robyn 등 최신 오픈소스 MMM으로 베이지안 기반 기여도를 추정합니다" },
          { title: "예산 시뮬레이션", desc: "다양한 예산 배분 시나리오를 시뮬레이션하여 최적 조합을 도출합니다" },
          { title: "크로스 채널 분석", desc: "Last-click을 넘어 상위 퍼널 채널의 기여도까지 정밀 측정합니다" },
          { title: "실시간 대시보드", desc: "채널별 성과와 최적 예산 배분을 상시 모니터링합니다" },
          { title: "Global ROAS 최적화", desc: "단일 캠페인이 아닌 전체 마케팅 자산의 수익률을 극대화합니다" },
        ],
    howTitle: en ? "How it works" : "이렇게 작동합니다",
    howSub: en ? "Four steps from ingest to reallocation" : "데이터 수집부터 예산 재배분까지 4단계",
    stepsText: en
      ? [
          { label: "Ingest", title: "Unify data", desc: "Auto-ingest spend and performance across channels" },
          { label: "Model", title: "Run MMM", desc: "Train contribution models with Meridian and Robyn" },
          { label: "Attribute", title: "Measure", desc: "Quantify real channel contribution across the full funnel" },
          { label: "Optimize", title: "Reallocate", desc: "Simulation-driven optimal scenarios" },
        ]
      : [
          { label: "수집", title: "데이터 통합", desc: "채널별 지출 및 성과 데이터 자동 수집" },
          { label: "모델링", title: "MMM 실행", desc: "Meridian·Robyn 등 최신 MMM으로 기여도 모델 학습" },
          { label: "분석", title: "기여도 측정", desc: "전체 퍼널에서 채널별 실제 기여 추정" },
          { label: "최적화", title: "예산 재배분", desc: "시뮬레이션 기반 최적 시나리오 도출" },
        ],
    trustTitleLine1: en ? "Beyond last-click," : "Last-click의 한계를 넘어,",
    trustTitleHighlight: en ? "reclaim full-funnel contribution" : "전체 퍼널의 기여도",
    trustTitleLine2: en ? "" : "를 되찾습니다",
    trustSub: en
      ? "MarketFit Lab's channel expertise, combined with modern open-source MMM"
      : "마켓핏랩의 채널 분석 노하우와 최신 오픈소스 MMM을 결합했습니다",
    trustCard1Title: en ? "Growth-project depth" : "그로스 프로젝트 경험",
    trustCard1Sub: en ? "7 years of channel analysis and ROAS improvement know-how" : "마켓핏랩이 7년간 쌓은 채널 분석·ROAS 개선 노하우",
    trustCard2Title: en ? "Modern MMM side-by-side" : "최신 오픈소스 MMM 병용",
    trustCard2Sub: en ? "Bayesian MMM from Google and Meta for scientific contribution estimation" : "Google·Meta의 베이지안 기반 MMM으로 과학적 기여도 추정",
    integrationTitle: en ? "Plugs into your stack" : "기존 스택에 바로 연동됩니다",
    integrationSub: en
      ? "Connect to MMM engines, ad data, and analytics to start measuring contribution immediately"
      : "MMM 엔진·광고 데이터·분석 툴에 연결하여 즉시 기여도 분석을 실행합니다",
    relatedTitle: en ? "Pairs well with" : "함께 사용하면 효과적입니다",
    relatedSub: en ? "Combine with other ARMY agents to cover the full funnel" : "ARMY의 다른 에이전트와 조합하면 퍼널 전체를 커버합니다",
    ctaTitle: en ? "Deploy MMM Agent" : "MMM Agent를 도입해보세요",
    ctaSub: en ? "Scientific budget optimization on modern MMM — designed with your team." : "최신 MMM 모델 기반의 과학적 예산 최적화, 함께 설계합니다.",
  };
  const comparisonRowsLocal = t.rowsLabels.map((label, i) => ({
    label,
    traditional: t.rowsTrad[i],
    mmm: t.rowsMmm[i],
  }));
  const impactMetricsLocal = t.impactMetrics;
  const capabilitiesLocal = t.capabilities.map((c, i) => ({ ...c, icon: capabilities[i].icon }));
  const stepsLocal = t.stepsText.map((s, i) => ({ ...s, icon: mmmSteps[i].icon }));
  const prefix = locale === "en" ? "/en" : "";

  return (
    <div className="pt-20">
      {/* ━━ 1. Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <PieChart size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{agent.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.heroH1}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{agent.heroSub}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>{t.heroCta}</Link>
          </motion.div>
        </div>
      </section>

      {/* ━━ 2. Last-click vs MMM 비교 ━━ */}
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
                    <th className="w-[18%] text-left text-xs font-semibold text-gray-400 uppercase tracking-wide p-3" />
                    <th className="text-center text-sm font-bold text-white p-4 rounded-lg bg-gray-500">{t.thTraditional}</th>
                    <th className="text-center text-sm font-bold text-white p-4 rounded-lg" style={{ backgroundColor: agent.color }}>{t.thMmm}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRowsLocal.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="text-sm font-bold text-gray-900 p-3 whitespace-nowrap">{row.label}</td>
                      <td className="text-sm text-gray-600 text-center p-3">{row.traditional}</td>
                      <td className="text-sm text-center p-3 font-medium" style={{ color: agent.color }}>{row.mmm}</td>
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
                      <span className="text-xs font-bold text-gray-400 w-16 flex-shrink-0">{t.legacyShort}</span>
                      <span className="text-sm text-gray-600">{row.traditional}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold flex-shrink-0 w-16" style={{ color: agent.color }}>MMM</span>
                      <span className="text-sm font-medium" style={{ color: agent.color }}>{row.mmm}</span>
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
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {impactMetricsLocal.map((m, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: agent.color }}>{m.value}</p>
                  <p className="text-xs font-semibold text-gray-900 mt-2">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-[11px] text-gray-400 text-center mt-4">{t.impactFootnote}</p>
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

      {/* ━━ 5. 작동 순서 ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.howTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.howSub}</p>
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

      {/* ━━ Trust ━━ */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 60%)` }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: agent.color }}>Why MFL ARMY</p>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              {t.trustTitleLine1}
              <br className="hidden md:block" />
              <span style={{ color: agent.color }}>{t.trustTitleHighlight}</span>{t.trustTitleLine2}
            </h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.trustSub}</p>
          </FadeInOnScroll>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <motion.div variants={item}>
              <div className="h-full p-6 rounded-xl bg-white border border-gray-100 text-center">
                <p className="text-xl md:text-2xl font-bold" style={{ color: agent.color }}>250+</p>
                <p className="text-sm font-semibold text-gray-900 mt-2">{t.trustCard1Title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.trustCard1Sub}</p>
              </div>
            </motion.div>
            <motion.div variants={item}>
              <div className="h-full p-6 rounded-xl bg-white border border-gray-100 text-center">
                <p className="text-xl md:text-2xl font-bold" style={{ color: agent.color }}>Meridian · Robyn</p>
                <p className="text-sm font-semibold text-gray-900 mt-2">{t.trustCard2Title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.trustCard2Sub}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ Integration ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.integrationTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.integrationSub}</p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg" style={{ backgroundColor: agent.color }}>
                {agent.name}
              </motion.div>

              <div className="relative w-full h-12 flex items-end justify-center">
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 48" fill="none" preserveAspectRatio="xMidYMid meet" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.line x1="300" y1="0" x2="300" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2 } } }} />
                  <motion.line x1="75" y1="20" x2="525" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } } }} />
                  {[75, 225, 375, 525].map((x, i) => (
                    <motion.g key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }}>
                      <motion.line x1={x} y1="20" x2={x} y2="42" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }} />
                      <polygon points={`${x - 5},37 ${x + 5},37 ${x},47`} fill={agent.color} />
                    </motion.g>
                  ))}
                </motion.svg>
              </div>

              <div className="grid grid-cols-4 gap-4 w-full">
                {[
                  { name: "Google Meridian", logo: "/images/logos/meridian.png" },
                  { name: "Meta Robyn", logo: "/images/logos/meta-robyn.png" },
                  { name: "Google Analytics", logo: "/images/logos/google-analytics.png" },
                  { name: "Mixpanel", logo: "/images/logos/mixpanel.png" },
                ].map((platform, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }} className="flex items-center justify-center p-5 rounded-xl bg-white border border-gray-100 shadow-sm h-24">
                    <Image src={platform.logo} alt={platform.name} width={140} height={56} className="object-contain max-h-14" />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
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
