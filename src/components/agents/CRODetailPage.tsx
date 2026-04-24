"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  ArrowRight,
  Check,
  Download,
  GraduationCap,
  Rocket,
  Monitor,
  Search,
  Code,
  Eye,
  MessageSquare,
  Shield,
  Zap,
  Users,
  Brain,
  Paintbrush,
  FileText,
  Megaphone,
  Magnet,
  Phone,
  Globe,
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

const agentTeam = [
  { icon: <Brain size={20} />, name: "PM 에이전트", role: "오케스트레이션, 업무 분배, 품질 관리" },
  { icon: <Search size={20} />, name: "분석 에이전트", role: "브라우저로 페이지를 직접 보고 문제점 진단" },
  { icon: <Paintbrush size={20} />, name: "디자인 에이전트", role: "실험 시안 자동 생성" },
  { icon: <Code size={20} />, name: "코딩 에이전트", role: "JavaScript 코드 생성 → VWO에 등록" },
  { icon: <Eye size={20} />, name: "리뷰 에이전트", role: "Preview를 열어 의도대로 구현됐는지 검증" },
];

const features = [
  { icon: <MessageSquare size={20} />, title: "Slack에서 대화로 실험", desc: "슬랙 채널에서 에이전트와 대화하며 실험을 설계하고 런칭합니다. Teams 등 다른 도구에도 설치 가능." },
  { icon: <Monitor size={20} />, title: "브라우저 기반 자율 진단", desc: "각 에이전트가 실제 브라우저를 열어 화면을 직접 보고 진단하고 검증합니다." },
  { icon: <Shield size={20} />, title: "프로덕션 안전", desc: "모든 실험은 VWO 런타임에서 실행됩니다. 프로덕션 사이트의 코드를 건드리지 않습니다." },
  { icon: <FileText size={20} />, title: "실험 설계서 자동 작성", desc: "Problem Validation, Solution Rationale, Variant 기획, 타겟/트리거, 지표, 기간까지 자동 작성." },
  { icon: <Zap size={20} />, title: "Level 4 Velocity", desc: "주 8개 이상 실험 동시 운영. 3명이 3주 걸리던 실험을 1명이 하루 만에." },
  { icon: <Users size={20} />, title: "후속 실험 자동 제안", desc: "런칭 후 데이터 분석 → 후속 가설 도출 → 재실험 사이클까지 자동화." },
];

const slackMessages = [
  { sender: "PM Kim", time: "10:02", isAgent: false, text: "이 페이지 실험 가설 뽑아줘: https://brand-a.com/product/detail" },
  { sender: "CRO Agent", time: "10:08", isAgent: true, text: "페이지 분석 완료! 5개 가설을 도출했습니다.", list: [{ score: "8.3", text: "할인 금액 강조 배지 추가" }, { score: "7.8", text: "CTA 버튼 색상 대비 강화" }, { score: "7.5", text: "리뷰 섹션 상단 이동" }] },
  { sender: "PM Kim", time: "10:10", isAgent: false, text: "1번으로 실험 설계하고 VWO에 세팅까지 해줘" },
  { sender: "CRO Agent", time: "10:42", isAgent: true, text: "완료! VWO에 3개 Variant 세팅 + QA 통과했습니다.", links: ["실험 설계서 보기", "VWO Preview 열기"] },
];

const experiments = [
  {
    tag: "모바일 PDP",
    tagColor: "bg-purple-50 text-purple-600",
    title: "상품 상세페이지 절약금액 배지 실험",
    images: [
      { src: "/cases/cro-mobile-control.png", label: "Control", w: 375, h: 812 },
      { src: "/cases/cro-mobile-variation.jpg", label: "Var 1: 절약 텍스트", w: 375, h: 812 },
      { src: "/cases/cro-mobile-variation2.jpg", label: "Var 2: 할인율 배지", w: 375, h: 812 },
    ],
    maxW: 280,
    mobile: true,
  },
];

export default function CRODetailPage({ agent }: Props) {
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id));

  return (
    <div className="pt-20">
      {/* ━━ Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <FlaskConical size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{agent.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.tagline}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">A/B 테스트 설계부터 런칭까지 자동화</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>
              도입 문의
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ━━ Slack Demo ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">대화로 A/B 테스트를 설계하고 런칭합니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">Slack, Teams 등 협업 툴은 물론 전용 웹 인터페이스에서도 바로 사용할 수 있습니다</p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-gray-800 px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-white text-xs font-medium ml-3"># cro-experiments</span>
              </div>
              <div className="bg-white p-5 space-y-4">
                {slackMessages.map((msg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                    <div className="flex items-start gap-2.5">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${msg.isAgent ? "" : "bg-gray-500"}`} style={msg.isAgent ? { backgroundColor: agent.color } : undefined}>
                        {msg.isAgent ? <FlaskConical size={16} /> : "PM"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-bold text-gray-900">{msg.sender}</span>
                          <span className="text-[11px] text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-0.5">{msg.text}</p>
                        {msg.list && (
                          <div className="mt-2 space-y-1">
                            {msg.list.map((h, hi) => (
                              <div key={hi} className="flex items-center gap-2 text-sm">
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>ICE {h.score}</span>
                                <span className="text-gray-600">{hi + 1}. {h.text}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {msg.links && (
                          <div className="flex gap-2 mt-2">
                            {msg.links.map((link, li) => (
                              <span key={li} className="text-xs font-medium px-2.5 py-1 rounded-md border" style={{ borderColor: `${agent.color}40`, color: agent.color }}>{link}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ Experiment Cases ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">이렇게 실험이 만들어집니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">이커머스 A사 — CRO Agent가 설계하고 실행한 A/B 테스트</p>
          </FadeInOnScroll>

          <div className="space-y-8">
            {experiments.map((exp, expIdx) => (
              <FadeInOnScroll key={expIdx}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${exp.tagColor}`}>{exp.tag}</span>
                    <span className="text-sm text-gray-500">{exp.title}</span>
                  </div>
                  <div className={`grid gap-4 ${exp.mobile ? "grid-cols-3 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-3"}`}>
                    {exp.images.map((img, imgIdx) => {
                      const isControl = imgIdx === 0;
                      return (
                        <motion.div key={imgIdx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: imgIdx * 0.15, ease: "easeOut" }} className="relative">
                          <div className="text-xs font-semibold uppercase mb-2 text-center" style={{ color: isControl ? "#9CA3AF" : agent.color }}>{img.label}</div>
                          <div className={`relative rounded-2xl overflow-hidden shadow-sm bg-white ${isControl ? "border border-gray-200" : "border-2"}`} style={{ borderColor: isControl ? undefined : agent.color, maxWidth: exp.maxW, margin: exp.mobile ? "0 auto" : undefined }}>
                            <Image src={img.src} alt={img.label} width={img.w} height={img.h} className="w-full h-auto" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Features ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">이런 점이 다릅니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">코드 생성기가 아닌, 실험 전략까지 책임지는 에이전트입니다</p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <FadeInOnScroll key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-100">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{feature.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 5 Agents ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">5개 에이전트가 협업합니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">각 에이전트는 실제 브라우저를 열어 화면을 보고 작업합니다</p>
          </FadeInOnScroll>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-xs mx-auto mb-4">
            <div className="text-center p-5 rounded-xl bg-gray-50 border-2 shadow-sm" style={{ borderColor: agent.color }}>
              <div className="w-10 h-10 rounded-lg mx-auto flex items-center justify-center text-white mb-2" style={{ backgroundColor: agent.color }}>{agentTeam[0].icon}</div>
              <h3 className="text-sm font-bold text-gray-900">{agentTeam[0].name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{agentTeam[0].role}</p>
            </div>
          </motion.div>
          <div className="flex justify-center mb-4"><div className="w-px h-6 bg-gray-300" /></div>
          <div className="hidden md:flex justify-center mb-4 max-w-3xl mx-auto"><div className="flex-1 border-t-2 border-gray-200" /></div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {agentTeam.slice(1).map((a, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-5 rounded-xl bg-gray-50 border border-gray-100 h-full">
                  <div className="w-10 h-10 rounded-lg mx-auto flex items-center justify-center text-white mb-2" style={{ backgroundColor: agent.color }}>{a.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900">{a.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{a.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ Integration ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">기존 스택에 바로 연동됩니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">고객사 기존 스택에 연동하여, 배포 직전 초안(Draft) 단계까지 자동으로 세팅합니다</p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg" style={{ backgroundColor: agent.color }}>
                {agent.name}
              </motion.div>

              <div className="relative w-full h-12 flex items-end justify-center">
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 48" fill="none" preserveAspectRatio="xMidYMid meet" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.line x1="300" y1="0" x2="300" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2 } } }} />
                  <motion.line x1="100" y1="20" x2="500" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } } }} />
                  {[100, 300, 500].map((x, i) => (
                    <motion.g key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }}>
                      <motion.line x1={x} y1="20" x2={x} y2="42" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }} />
                      <polygon points={`${x - 5},37 ${x + 5},37 ${x},47`} fill={agent.color} />
                    </motion.g>
                  ))}
                </motion.svg>
              </div>

              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { name: "VWO", logo: "/images/logos/vwo.png" },
                  { name: "Optimizely", logo: "/images/logos/optimizely.png" },
                  { name: "GrowthBook", logo: "/images/logos/growthbook.png" },
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

      {/* ━━ Before / After ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              CRO 실험 사이클 2주 → <span style={{ color: agent.color }}>1시간</span>
            </h2>
            <p className="text-sm text-gray-500 text-center mb-10">같은 팀, 같은 예산으로 실험 속도가 달라집니다</p>
          </FadeInOnScroll>

          <div className="max-w-4xl mx-auto space-y-4 mb-10">
            <FadeInOnScroll>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">기존 수동 프로세스 (2주 소요)</p>
                <div className="flex items-center gap-1.5">
                  {["사이트 리서치(2-4h)", "가설 작성(1-2h)", "디자인/설계(2-3h)", "개발/VWO세팅(1-3일)"].map((label, i) => (
                    <div key={i} className="flex items-center gap-1.5 flex-1">
                      <div className="bg-gray-200 text-gray-600 text-[11px] font-medium px-3 py-2.5 rounded-lg whitespace-nowrap w-full text-center">{label}</div>
                      {i < 3 && <ArrowRight size={12} className="text-gray-300 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: agent.color }}>CRO Agent (1시간 이내 완료)</p>
                <div className="relative h-11 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gray-100 rounded-xl" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} className="absolute inset-y-0 left-0 rounded-xl flex items-center" style={{ background: `linear-gradient(90deg, ${agent.color} 0%, ${agent.color}CC 60%, ${agent.color}88 100%)` }}>
                    <div className="flex items-center gap-3 px-4 w-full">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}>
                          <ArrowRight size={14} className="text-white" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeInOnScroll>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Before — 기존 CRO 스쿼드</p>
                <div className="space-y-4">
                  {[
                    { label: "스쿼드 구성", value: "PM + UX + DA + 엔지니어" },
                    { label: "투입 인원", value: "4명" },
                    { label: "스프린트 사이클", value: "2~4주" },
                    { label: "스프린트당 런칭", value: "2~4개 실험" },
                    { label: "주간 실험 환산", value: "0.5~2개/주" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{row.label}</span>
                      <span className="text-sm font-bold text-gray-900">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.1}>
              <div className="rounded-2xl border-2 bg-white p-6" style={{ borderColor: `${agent.color}40` }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: agent.color }}>After — AI Agent 스쿼드</p>
                <div className="space-y-4">
                  {[
                    { label: "스쿼드 구성", value: "PM + Agent" },
                    { label: "투입 인원", value: "1명" },
                    { label: "스프린트 사이클", value: "2주" },
                    { label: "스프린트당 런칭", value: "6~10개 실험" },
                    { label: "Velocity 변화", value: "1.5~6x 향상", highlight: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{row.label}</span>
                      <span className="text-sm font-bold" style={{ color: row.highlight ? agent.color : "#111827" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ━━ Related Agents ━━ */}
      {relatedAgents.length > 0 && (
        <section className="py-16">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900">CRO Agent를 도입해보세요</h2>
            <p className="text-sm text-gray-500 mt-3">마켓핏랩이 도입부터 운영까지 함께합니다.</p>
            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>도입 문의</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
