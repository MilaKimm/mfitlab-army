"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mic,
  Brain,
  Volume2,
  Wrench,
  BookOpen,
  MapPin,
  ClipboardCheck,
  Database,
  Monitor,
  Heart,
  Search,
  MessageSquare,
  ArrowRight,
  Globe,
  FlaskConical,
  Megaphone,
  Magnet,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import type { Agent } from "@/data/army";
import { agents } from "@/data/army";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";

const smallIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={18} />,
  Megaphone: <Megaphone size={18} />,
  FlaskConical: <FlaskConical size={18} />,
  Magnet: <Magnet size={18} />,
  Phone: <Phone size={18} />,
};

interface Props {
  agent: Agent;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const chatBubbles = [
  "안녕하세요, 고객님이신가요?",
  "페이스북에서 신형 SUV 광고를 보고 문의 남겨주셨죠?",
  "시승 일정 도와드릴까요?",
];

const processSteps = [
  { icon: <Phone size={24} />, title: "Immediate Call", desc: "2분 이내 즉시 콜" },
  { icon: <MapPin size={24} />, title: "Smart Routing", desc: "위치 기반 담당자 배정" },
  { icon: <ClipboardCheck size={24} />, title: "Qualification", desc: "구매 의사 확인 (BANT)" },
  { icon: <Database size={24} />, title: "CRM Sync", desc: "CRM 자동 연동" },
  { icon: <Monitor size={24} />, title: "Admin Console", desc: "모니터링 & 튜닝" },
];

const barMetrics = [
  { label: "전화 연결률", before: "8%", after: "54.8%", badge: "x6.9배", beforePct: 15, afterPct: 100 },
  { label: "Lead → Sales 전환율", before: "~1%", after: "3.56%", badge: "x3.6배", beforePct: 28, afterPct: 100 },
];

const statMetrics = [
  { value: "2배+", label: "운영 비용 절감", sub: "BPO 대비 절반 이하" },
  { value: "< 2분", label: "응답 시간", sub: "기존 수 시간 → 즉시 연결" },
  { value: "24/7", label: "운영 시간", sub: "365일 무중단" },
];

const blocks = [
  { icon: <Mic size={24} />, label: "LISTENING", title: "STT", desc: "고객의 음성을 실시간으로 텍스트로 변환" },
  { icon: <Brain size={24} />, label: "THINKING", title: "LLM", desc: "대화의 맥락을 이해하고 적절한 응답 생성" },
  { icon: <Volume2 size={24} />, label: "SPEAKING", title: "TTS", desc: "생성된 텍스트를 자연스러운 음성으로 발화" },
  { icon: <Wrench size={24} />, label: "ACTING", title: "Tools", desc: "CRM, 예약 등 실제 행동 수행" },
  { icon: <BookOpen size={24} />, label: "REMEMBERING", title: "KB", desc: "제품 정보, FAQ, 정책 등 도메인 지식 참조" },
];

const industryTable = {
  headers: ["자동차 LQA", "병원 예약", "B2B 인바운드"],
  rows: [
    { label: "STT", values: ["다국어 특화 엔진", "의료 용어 특화", "전문 용어 학습"] },
    { label: "LLM", values: ["빠른 응답 (Low Latency)", "친절한 접수 전담", "복잡한 논리/추론"] },
    { label: "TTS", values: ["세일즈 톤 (High Energy)", "안정감 있는 톤", "전문적인 톤"] },
    { label: "Tools & KB", values: ["CRM, 딜러 배정", "EMR, 스케줄러", "Salesforce, 제품 DB"] },
  ],
};

export default function VoiceAgentDetailPage({ agent }: Props) {
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id));

  return (
    <div className="pt-20">
      {/* ━━ 1. Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <Phone size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{agent.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.tagline}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">리드 유입 즉시 전화 연결, 24/7 자동 응대</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 flex items-center justify-center gap-3">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>도입 문의</Link>
            {agent.demoUrl && (
              <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                데모 체험하기 <ArrowRight size={14} className="ml-1.5" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ━━ 2. Phone Call Demo ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">문의 접수 2분 이내에 AI가 직접 전화합니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">24시간 운영되는 AI 에이전트가 골든타임을 놓치지 않습니다</p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-shrink-0">
                <div className="rounded-3xl p-6 flex flex-col items-center justify-between max-w-[220px] w-[220px]" style={{ backgroundColor: "#1c1c1e", aspectRatio: "9/16" }}>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${agent.color}30` }}>
                      <Phone size={28} className="text-white" />
                    </div>
                    <p className="text-white text-lg font-semibold">Voice Agent</p>
                    <p className="text-gray-400 text-sm mt-1">휴대전화</p>
                  </div>
                  <div className="w-full mt-auto">
                    <div className="relative h-12 rounded-full bg-green-600/20 flex items-center overflow-hidden">
                      <motion.div className="absolute left-1 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center" animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                        <Phone size={18} className="text-white" />
                      </motion.div>
                      <span className="text-green-400 text-xs font-medium w-full text-center pl-8">밀어서 통화하기</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-4">
                {chatBubbles.map((text, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.2 }} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: agent.color }}>
                      <Phone size={14} />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 max-w-xs">
                      <p className="text-sm text-gray-700">{text}</p>
                    </div>
                  </motion.div>
                ))}
                {agent.demoUrl && (
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 }} className="mt-4">
                    <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border-2 transition-colors hover:bg-gray-50" style={{ borderColor: agent.color, color: agent.color }}>
                      <Phone size={14} /> 직접 체험해보세요
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ 3. 5단계 프로세스 ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">이렇게 작동합니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">Voice Agent가 전화하고, 검증하고, 배정합니다</p>
          </FadeInOnScroll>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="flex flex-col md:flex-row items-stretch gap-3">
            {processSteps.map((step, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-3 flex-1">
                <div className="flex-1 text-center p-5 rounded-xl bg-gray-50 border border-gray-100 h-full flex flex-col items-center">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{step.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && <ArrowRight size={16} className="text-gray-300 flex-shrink-0 hidden md:block" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ 4. Building Blocks + Industry ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">5개 핵심 블록으로 구성됩니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">산업과 목적에 맞게 블록을 조합합니다</p>
          </FadeInOnScroll>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {blocks.map((b, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-5 rounded-xl bg-white border border-gray-100 h-full">
                  <div className="w-11 h-11 rounded-lg mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{b.icon}</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{b.label}</p>
                  <h3 className="text-sm font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeInOnScroll>
            <p className="text-sm font-bold text-gray-900 text-center mb-4">산업별로 에이전트를 구성합니다</p>
            <div className="hidden md:block max-w-4xl mx-auto">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr>
                    <th className="w-[18%] text-left text-xs font-semibold text-gray-400 uppercase tracking-wide p-3" />
                    {industryTable.headers.map((h, i) => (
                      <th key={i} className="text-center text-xs font-bold text-white p-3 rounded-lg" style={{ backgroundColor: agent.color }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {industryTable.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="text-sm font-bold text-gray-900 p-3 whitespace-nowrap">{row.label}</td>
                      {row.values.map((v, vi) => (
                        <td key={vi} className="text-sm text-gray-600 text-center p-3">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-4">
              {industryTable.headers.map((header, hi) => (
                <div key={hi} className="rounded-xl bg-white border border-gray-100 p-4">
                  <p className="text-xs font-bold text-white px-2.5 py-1 rounded-lg inline-block mb-3" style={{ backgroundColor: agent.color }}>{header}</p>
                  <div className="space-y-2">
                    {industryTable.rows.map((row, ri) => (
                      <div key={ri} className="flex items-start gap-2">
                        <span className="text-xs font-bold text-gray-400 w-10 flex-shrink-0">{row.label}</span>
                        <span className="text-sm text-gray-600">{row.values[hi]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ LQA + FUA ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">리드 검증을 넘어, 고객 경험 관리까지</h2>
            <p className="text-sm text-gray-500 text-center mb-10">Voice Agent는 두 가지 모드로 운영됩니다</p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInOnScroll>
              <div className="rounded-2xl bg-white p-7 h-full border-2" style={{ borderColor: `${agent.color}40` }}>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>Standard</span>
                <h3 className="text-base font-bold text-gray-900 mt-4 mb-5">LQA — Lead Qualification Agent</h3>
                <div className="space-y-4">
                  {[
                    { icon: <PhoneCall size={18} />, title: "즉시 콜 (Instant Call)", desc: "리드 유입 2분 이내 아웃바운드" },
                    { icon: <ClipboardCheck size={18} />, title: "리드 검증 (Qualification)", desc: "구매 의도 및 기본 정보 확인" },
                    { icon: <MapPin size={18} />, title: "딜러 배정 (Assignment)", desc: "위치 기반 최적 딜러 연결" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{f.icon}</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{f.title}</p>
                        <p className="text-sm text-gray-600">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.1}>
              <div className="rounded-2xl bg-white p-7 h-full border-2" style={{ borderColor: `${agent.color}25` }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}10`, color: agent.color }}>Expansion</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: agent.color }}>NEW</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mt-4 mb-5">FUA — Follow-Up Automation Agent</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Heart size={18} />, title: "해피콜 (Happy Call)", desc: "딜러 배정 후 고객 경험 체크" },
                    { icon: <Search size={18} />, title: "딜러 오딧 (Dealer Audit)", desc: "딜러가 실제로 연락했는지 확인" },
                    { icon: <MessageSquare size={18} />, title: "공감 및 재확인 (Empathy)", desc: "불만 정리 및 관심도 재확인" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{f.icon}</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{f.title}</p>
                        <p className="text-sm text-gray-600">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ━━ Results ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">숫자가 말해줍니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">기존 BPO 대비, Voice Agent의 실제 운영 성과입니다</p>
          </FadeInOnScroll>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            {barMetrics.map((m, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="rounded-xl bg-white border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-gray-900">{m.label}</p>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{m.badge}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-gray-400 w-12 text-right flex-shrink-0">Before</span>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="h-8 bg-gray-200 rounded-lg flex items-center px-3" style={{ width: `${m.beforePct}%` }}>
                        <span className="text-[11px] font-bold text-gray-600 whitespace-nowrap">{m.before}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold w-12 text-right flex-shrink-0" style={{ color: agent.color }}>After</span>
                    <div className="flex-1 flex items-center gap-2">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.afterPct}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }} className="h-8 rounded-lg flex items-center px-3" style={{ backgroundColor: agent.color }}>
                        <span className="text-[11px] font-bold text-white whitespace-nowrap">{m.after}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {statMetrics.map((m, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-5 rounded-xl bg-white border border-gray-100">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: agent.color }}>{m.value}</p>
                  <p className="text-xs font-semibold text-gray-900 mt-2">{m.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <FadeInOnScroll>
            <p className="text-xs text-gray-400 text-center mt-6">자동차 산업 A사 실제 운영 데이터 기준</p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ Integration ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">기존 스택에 바로 연동됩니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">통신사·CRM·업무 자동화 도구에 연결하여 즉시 운영에 투입합니다</p>
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
                  { name: "Twilio", logo: "/images/logos/twilio.png" },
                  { name: "LG U+", logo: "/images/logos/lgu.png" },
                  { name: "Salesforce", logo: "/images/logos/salesforce.png" },
                  { name: "Zapier", logo: "/images/logos/zapier.png" },
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
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">함께 사용하면 효과적입니다</h2>
              <p className="text-sm text-gray-500 text-center mb-10">ARMY의 다른 에이전트와 조합하면 퍼널 전체를 커버합니다</p>
            </FadeInOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedAgents.map((rel) => (
                <FadeInOnScroll key={rel.id}>
                  <Link href={`/army/${rel.id}`} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
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
            <h2 className="text-2xl font-bold text-gray-900">30분 데모 통화로 시작해보세요</h2>
            <p className="text-sm text-gray-500 mt-3">Voice Agent의 실제 통화 품질을 직접 경험하실 수 있습니다.</p>
            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>도입 문의</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
