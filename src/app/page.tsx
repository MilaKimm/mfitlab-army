"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Megaphone,
  FlaskConical,
  Magnet,
  Phone,
  PieChart,
  ArrowRight,
  ArrowUpRight,
  Check,
  Send,
  Zap,
  Target,
  Database,
  Search,
  PenTool,
  Rocket,
  BarChart3,
} from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import {
  GeoGraphic,
  LmfGraphic,
  CroGraphic,
  LeadMagnetGraphic,
  VoiceGraphic,
  MmmGraphic,
} from "@/components/home/AgentCardGraphics";
import AgentDemo from "@/components/home/AgentDemo";
import DashboardGraphic from "@/components/home/DashboardGraphic";
import { agents, armyOverview, axSolutions } from "@/data/army";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  Megaphone: <Megaphone size={20} />,
  FlaskConical: <FlaskConical size={20} />,
  Magnet: <Magnet size={20} />,
  Phone: <Phone size={20} />,
  PieChart: <PieChart size={20} />,
};
const graphicMap: Record<string, React.ReactNode> = {
  "geo-agent": <GeoGraphic />,
  "lmf-agent": <LmfGraphic />,
  "cro-agent": <CroGraphic />,
  "lead-magnet-agent": <LeadMagnetGraphic />,
  "voice-agent": <VoiceGraphic />,
  "mmm-agent": <MmmGraphic />,
};
const gradientMap: Record<string, string> = {
  "geo-agent": "from-cyan-50 via-cyan-50/40 to-white",
  "lmf-agent": "from-pink-50 via-pink-50/40 to-white",
  "cro-agent": "from-purple-50 via-purple-50/40 to-white",
  "lead-magnet-agent": "from-amber-50 via-amber-50/40 to-white",
  "voice-agent": "from-indigo-50 via-indigo-50/40 to-white",
  "mmm-agent": "from-emerald-50 via-emerald-50/40 to-white",
};
const solutionIcons = [<Zap key="z" size={24} />, <Target key="t" size={24} />, <Database key="d" size={24} />];
const adoptionIcons = [<Search key="s" size={20} />, <PenTool key="p" size={20} />, <Rocket key="r" size={20} />, <BarChart3 key="b" size={20} />];

const clientLogos = [
  { name: "현대자동차", file: "현대.png" },
  { name: "삼성전자", file: "삼성.png" },
  { name: "LG전자", file: "엘지전자.png" },
  { name: "LG유플러스", file: "엘지유플러스.png" },
  { name: "SK네트웍스", file: "SK네트웍스.png" },
  { name: "한샘", file: "한샘.png" },
  { name: "클래스101", file: "클래스101.png" },
];

export default function Home() {
  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section id="hero" className="relative overflow-hidden bg-[#CCFFFC]/30 min-h-[85vh] flex items-center justify-center">
        {/* Abstract gradient graphic — MFL palette */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Main blob — primary green */}
          <div className="absolute w-[60vw] h-[70vh] rounded-[50%] bg-gradient-to-b from-[#A0EBE6] via-[#65E3D0] to-[#CCFFFC] blur-[100px] opacity-20" />
          {/* Top glow — primary light */}
          <div className="absolute top-[5%] w-[50vw] h-[40vh] rounded-[50%] bg-gradient-to-b from-[#CCFFFC]/30 to-transparent blur-[120px]" />
          {/* Bottom sphere — teal */}
          <div className="absolute bottom-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-br from-[#A0EBE6] to-[#52C0CE] opacity-15 blur-[60px]" />
          {/* Accent lime left */}
          <div className="absolute left-[10%] top-[30%] w-[20vw] h-[30vh] rounded-full bg-[#DFF15D] opacity-8 blur-[120px]" />
          {/* Accent teal right */}
          <div className="absolute right-[10%] top-[20%] w-[15vw] h-[25vh] rounded-full bg-[#BFE9EF] opacity-15 blur-[100px]" />
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-[0.9]"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            <span className="block text-[#15867E]">MFL</span>
            <span className="block text-[#1B1B1B]">ARMY</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-14"
          >
            <p className="text-xl md:text-2xl font-bold text-[#36B1A7]">
              마켓핏랩 그로스 마케팅 에이전트 군단
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#1B1B1B]/60">
              이제 실험은 에이전트가, 판단은 사람이.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="#contact"
              className="h-12 px-8 flex items-center justify-center rounded-full bg-[#36B1A7] text-white font-semibold hover:bg-[#15867E] transition-all duration-300 shadow-lg shadow-[#36B1A7]/20"
            >
              도입 상담하기
            </Link>
            <Link
              href="/diagnostic?start=true"
              className="h-12 px-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm border border-white/50 text-[#1B1B1B] font-semibold hover:bg-white hover:border-[#36B1A7] hover:text-[#36B1A7] transition-all duration-300"
            >
              2분 진단 시작
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Heritage + Clients ─── */}
      <section id="heritage" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3 text-center">Heritage</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3 text-center">
              마켓핏랩의 노하우를 담은 에이전트
            </h2>
            <p className="text-[17px] text-[#626166] text-center mb-12">
              실전 실험 데이터가 에이전트의 정교한 판단력이 됩니다.
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {armyOverview.heritage.stats.map((stat, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#36B1A7] mb-2">{stat.value}</p>
                  <p className="text-sm text-[#626166]">{stat.label}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-[#36B1A7]/15">
              {clientLogos.map((logo) => (
                <div key={logo.name} className="h-8 opacity-40 hover:opacity-70 transition-opacity grayscale">
                  <Image src={`/logos/${logo.file}`} alt={logo.name} width={120} height={32} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <a href="https://www.mfitlab.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold text-[#36B1A7] border border-[#36B1A7] rounded-full hover:bg-[#F2FDFB] transition-colors">
                마켓핏랩 홈페이지 <ArrowUpRight size={14} />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 3. 해법 (Why ARMY) ─── */}
      <section className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">Why MFL ARMY</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">
              단순 자동화가 아니라, 일하는 방식을 바꿉니다
            </h2>
            <p className="text-[#626166] mb-12 max-w-2xl">ARMY의 에이전트는 실행만 하지 않습니다. 가설을 세우고, 노하우를 축적하고, 팀의 실험 역량을 높입니다.</p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {armyOverview.differentiators.map((d, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-8 h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-[#36B1A7] bg-gradient-to-br from-[#F2FDFB] to-white">
                  <div className="w-10 h-10 rounded-xl bg-[#CCFFFC] text-[#36B1A7] flex items-center justify-center mb-5">
                    {solutionIcons[i]}
                  </div>
                  <h3 className="text-base font-semibold text-[#1B1B1B] mb-3 whitespace-pre-line">{d.title}</h3>
                  <p className="text-[15px] text-[#626166] leading-relaxed">{d.body}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Agent Grid ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">MFL ARMY Agents</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">
              퍼널 단계마다, 담당 에이전트가 있습니다
            </h2>
            <p className="text-[#626166] mb-12 max-w-2xl">
              각 에이전트에는 마켓핏랩의 프레임워크와 실전 데이터가 학습되어 있습니다.
              <br />독립 도입도, 조합 운영도 가능합니다.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/army/${agent.id}`} className="block group">
                  <div className={`rounded-2xl border border-[#E9E9E9] bg-gradient-to-br ${gradientMap[agent.id]} p-0 shadow-[0_8px_24px_-8px_rgba(27,27,27,0.12)] md:shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#36B1A7]/40 transition-all duration-300 h-[260px] flex overflow-hidden`}>
                    <div className="flex flex-col justify-between p-6 w-[55%]">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: agent.color + "15", color: agent.color }}>
                            {iconMap[agent.lucideIcon]}
                          </span>
                          <span className="text-xs font-medium text-[#9B9B9B] uppercase tracking-widest">{agent.funnelPhase}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[#1B1B1B] mb-1 group-hover:text-[#36B1A7] transition-colors">{agent.name}</h3>
                        <p className="text-sm text-[#626166] leading-relaxed line-clamp-2">{agent.tagline}</p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#36B1A7] group-hover:gap-2 transition-all">
                          자세히 보기
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                        </span>
                        <span className="text-sm font-semibold" style={{ color: agent.color }}>{agent.impactValue}</span>
                      </div>
                    </div>
                    <div className="w-[45%] relative">{graphicMap[agent.id]}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. 예시 화면 (Agent Demo + Dashboard, 상하 분리) ─── */}
      <section id="showcase" className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">How It Works</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">실제로 이렇게 작동합니다</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">Slack에서 지시하면 에이전트가 실행하고, 대시보드에서 전체 성과를 관리합니다.</p>
          </FadeInOnScroll>

          {/* Agent Demo — Slack → Mobile */}
          <div className="mb-20 text-center">
            <FadeInOnScroll>
              <p className="text-sm font-semibold text-[#1B1B1B] mb-4">에이전트 작동 예시 — CRO Agent (슬랙봇)</p>
            </FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <AgentDemo />
            </div>
          </div>

          {/* Dashboard */}
          <div className="text-center">
            <FadeInOnScroll>
              <p className="text-sm font-semibold text-[#1B1B1B] mb-4">ARMY 대시보드 예시 (웹)</p>
            </FadeInOnScroll>
            <DashboardGraphic />
          </div>
        </div>
      </section>

      {/* ─── 5.5 Integration ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">Enterprise Integration</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">기존 스택에 바로 연동됩니다</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">고객사 기존 스택에 연동하여, 배포 직전 초안(Draft) 단계까지 자동으로 세팅합니다</p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              {/* MFL ARMY Agent Box */}
              <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg bg-[#36B1A7]">
                MFL ARMY Agent
              </motion.div>

              {/* Connecting lines with animation */}
              <div className="relative w-full h-12 flex items-end justify-center">
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 48" fill="none" preserveAspectRatio="xMidYMid meet" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.line x1="300" y1="0" x2="300" y2="20" stroke="#36B1A7" strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2 } } }} />
                  <motion.line x1="75" y1="20" x2="525" y2="20" stroke="#36B1A7" strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } } }} />
                  {[75, 225, 375, 525].map((x, i) => (
                    <motion.g key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }}>
                      <motion.line x1={x} y1="20" x2={x} y2="42" stroke="#36B1A7" strokeWidth="2" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }} />
                      <polygon points={`${x - 5},37 ${x + 5},37 ${x},47`} fill="#36B1A7" />
                    </motion.g>
                  ))}
                </motion.svg>
              </div>

              {/* Platform logos */}
              <div className="grid grid-cols-4 gap-4 w-full">
                {[
                  { name: "AEM (Adobe)", logo: "/images/logos/aem.png" },
                  { name: "Salesforce", logo: "/images/logos/salesforce.png" },
                  { name: "Shopify", logo: "/images/logos/shopify.png" },
                  { name: "Cafe24", logo: "/images/logos/cafe24.png" },
                ].map((platform, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#F2FDFB] border border-[#CCFFFC] shadow-sm">
                    <div className="h-16 flex items-center justify-center">
                      <Image src={platform.logo} alt={platform.name} width={140} height={56} className="object-contain max-h-16" />
                    </div>
                    <span className="text-xs font-medium text-[#626166]">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 6. AX 솔루션 ─── */}
      <section className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">AI Transformation</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">우리 팀에 필요한 건 어떤 솔루션일까요?</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">과제가 다르면 해법도 다릅니다.</p>
          </FadeInOnScroll>

          {/* 고민 박스 → 화살표 → 솔루션 카드 */}
          <div className="grid md:grid-cols-3 gap-8">
            {axSolutions.map((sol, i) => (
              <FadeInOnScroll key={sol.id} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  {/* 고민 박스 */}
                  <div className="rounded-2xl bg-white border border-[#E9E9E9] px-6 py-5 text-center w-full">
                    <p className="text-[15px] font-semibold text-[#1B1B1B]">&ldquo;{sol.question}&rdquo;</p>
                  </div>

                  {/* 화살표 애니메이션 */}
                  <div className="flex flex-col items-center py-3">
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-px h-4 bg-[#36B1A7]" />
                      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-[#36B1A7]" />
                    </motion.div>
                  </div>

                  {/* 솔루션 카드 */}
                  {sol.href.startsWith("http") ? (
                    <a href={sol.href} target="_blank" rel="noopener noreferrer" className="block group w-full">
                      <SolutionCardInner sol={sol} />
                    </a>
                  ) : (
                    <Link href={sol.href} className="block group w-full">
                      <SolutionCardInner sol={sol} />
                    </Link>
                  )}
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <p className="text-center text-xs text-[#9B9B9B] mt-8">마켓핏랩은 Replit, Articul8의 공식 파트너사입니다.</p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 7. Adoption ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">Adoption</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">도입이 막막하다면, 시작부터 도와드립니다</h2>
            <p className="text-[#626166] mb-12 max-w-3xl">어디서부터 시작할지 고민할 필요 없습니다.<br />진단부터 설계, 구축, 운영까지 — 3,000번의 실험을 함께한 팀이 최전선에서 세팅합니다.</p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-4 gap-6">
            {armyOverview.adoption.steps.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CCFFFC] to-[#A0EBE6] text-[#15867E] flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {adoptionIcons[i]}
                  </div>
                  <h3 className="font-semibold text-[#1B1B1B] mb-2">{step.title}</h3>
                  <p className="text-[15px] text-[#626166]">{step.description}</p>
                  {i < 3 && <div className="hidden md:block absolute top-7 left-[calc(50%+44px)] w-[calc(100%-88px)] border-t-2 border-dashed border-[#A0EBE6]" />}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Diagnostic CTA ─── */}
      <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1B1B1B 0%, #083F54 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] bg-[#36B1A7]" />
          <div className="absolute bottom-0 left-[10%] w-[200px] h-[200px] rounded-full opacity-10 blur-[80px] bg-[#DFF15D]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white leading-[1.5] mb-3">우리 팀에 맞는 에이전트, 2분만에 진단해보세요</h2>
            <p className="text-white/50 mb-8">5개 질문에 답하면 팀 상황에 맞는 에이전트를 추천합니다.</p>
            <Link href="/diagnostic?start=true" className="inline-flex h-12 px-8 items-center rounded-full bg-[#DFF15D] text-[#1B1B1B] font-semibold hover:bg-[#EDF994] transition-all duration-300 shadow-lg shadow-[#DFF15D]/20">
              진단 시작
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 9. Contact Form ─── */}
      <ContactSection />
    </>
  );
}

/* ─── Solution Card Inner ─── */
function SolutionCardInner({ sol }: { sol: typeof axSolutions[number] }) {
  return (
    <div className="rounded-2xl border border-[#E9E9E9] bg-white p-6 group-hover:border-[#36B1A7] group-hover:shadow-lg transition-all duration-300 w-full">
      <div className="flex items-center justify-center h-[80px] mb-5">
        {sol.id === "army" ? (
          <Image src="/logos/mfl-army.png" alt="MFL ARMY" width={140} height={36} className="h-[80px] w-[300px] object-contain" />
        ) : sol.id === "replit" ? (
          <Image src="/logos/replit.png" alt="Replit" width={140} height={36} className="h-[80px] w-[300px] object-contain" />
        ) : (
          <Image src="/logos/articul8.png" alt="Articul8" width={140} height={36} className="h-[80px] w-[300px] object-contain" />
        )}
      </div>
      <p className="text-[13px] text-[#9B9B9B] text-center mb-2">{sol.subtitle}</p>
      <p className="text-[15px] text-[#626166] text-center mb-4 leading-relaxed">{sol.useCase}</p>
      <p className="text-center text-lg font-semibold mb-5" style={{ color: sol.color }}>{sol.metric}</p>
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300" style={{ backgroundColor: sol.color }}>
          자세히 보기 <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
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
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setFormState("sent");
    } catch { setFormState("idle"); }
  };

  const solutionGroups = [
    { label: "ARMY 에이전트", items: [{ id: "army-all", name: "ARMY 전체" }, ...agents.map((a) => ({ id: a.id, name: a.name }))] },
    { label: "기타 솔루션", items: [{ id: "replit", name: "Replit 워크샵" }, { id: "articul8", name: "Articul8" }] },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#F4F4F4]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] bg-[#CCFFFC]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeInOnScroll>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-[#626166] mb-4 leading-relaxed">반복은 줄이고, 실험은 더 자주.</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B] mb-4">도입 상담부터<br />시작하세요</h2>
              <p className="text-[#626166]">에이전트 설계부터 운영까지, 마켓핏랩이 함께합니다.</p>
            </div>
          </FadeInOnScroll>

          <div className="bg-white rounded-2xl border border-[#E9E9E9] p-8 shadow-sm">
            {formState === "sent" ? (
              <FadeInOnScroll>
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#CCFFFC] flex items-center justify-center mx-auto mb-4"><Check size={32} className="text-[#36B1A7]" /></div>
                  <p className="text-lg font-semibold text-[#1B1B1B]">문의가 접수되었습니다</p>
                  <p className="text-sm text-[#626166] mt-2">영업일 기준 1~2일 내 연락드리겠습니다.</p>
                </div>
              </FadeInOnScroll>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input name="name" type="text" placeholder="담당자명 *" required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                  <input name="company" type="text" placeholder="회사명 *" required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="email" type="email" placeholder="업무용 이메일 *" required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                  <input name="phone" type="tel" placeholder="전화번호 *" required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                </div>
                {solutionGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {group.items.map((item) => (
                        <button key={item.id} type="button" onClick={() => toggleSolution(item.id)} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${selectedSolutions.includes(item.id) ? "border-[#36B1A7] bg-[#CCFFFC] text-[#15867E]" : "border-[#E9E9E9] text-[#626166] hover:border-[#C0C0C0]"}`}>
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <textarea name="message" placeholder="문의 내용 (선택)" rows={3} className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] resize-none transition-all" />
                <button type="submit" disabled={formState === "sending"} className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#36B1A7] text-white font-semibold hover:bg-[#15867E] transition-all duration-300 disabled:opacity-50 shadow-lg shadow-[#36B1A7]/20">
                  <Send size={16} />
                  {formState === "sending" ? "전송 중..." : "문의하기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
