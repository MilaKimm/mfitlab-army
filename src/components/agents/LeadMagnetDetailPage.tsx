"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Magnet,
  ArrowRight,
  Search,
  FileText,
  Monitor,
  Globe,
  Megaphone,
  FlaskConical,
  Phone,
  ShoppingBag,
  ExternalLink,
  Target,
  Pencil,
  Sparkles,
  Rocket,
  BarChart3,
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

const processIcons = [
  <Target key="0" size={24} />,
  <Pencil key="1" size={24} />,
  <Sparkles key="2" size={24} />,
  <Rocket key="3" size={24} />,
  <BarChart3 key="4" size={24} />,
];

const typeIcons = [
  <Search key="0" size={24} />,
  <FileText key="1" size={24} />,
  <Monitor key="2" size={24} />,
  <Globe key="3" size={24} />,
  <ShoppingBag key="4" size={24} />,
  <FileText key="5" size={24} />,
];

export default function LeadMagnetDetailPage({ agent: rawAgent, locale = "ko" }: Props) {
  const agent = localizeAgent(rawAgent, locale);
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id)).map((a) => localizeAgent(a, locale));
  const en = locale === "en";
  const prefix = locale === "en" ? "/en" : "";

  const t = {
    heroCta: en ? "Get in Touch" : "도입 문의",
    demoCta: en ? "View Demo" : "데모 보기",
    slackTitle: en ? "Chat with the agent, ship a web app" : "AI 에이전트와 대화하면 웹앱이 완성됩니다",
    slackSub: en
      ? "Use it from Slack, Teams, or the dedicated web interface"
      : "Slack, Teams 등 협업 툴은 물론 전용 웹 인터페이스에서도 바로 사용할 수 있습니다",
    slackMessages: en
      ? [
          { sender: "PM Kim", time: "10:02", isAgent: false, text: "Build a Product Finder for e-commerce — ask about workout type and fit, then recommend matching products." },
          { sender: "Lead Magnet Agent", time: "10:05", isAgent: true, text: "Planning complete. Designed a 4-step question flow.", list: ["Q1. Which sports do you play? (5 options)", "Q2. Preferred fit? (3 options)", "Q3. Preferred colors? (4 options)", "→ Recommend 6 matching products"] },
          { sender: "PM Kim", time: "10:06", isAgent: false, text: "Good — apply our brand guide and build it." },
          { sender: "Lead Magnet Agent", time: "10:35", isAgent: true, text: "Done. Product Finder ready to ship.", links: ["View preview", "Deploy"] },
        ]
      : [
          { sender: "PM Kim", time: "10:02", isAgent: false, text: "이커머스 고객 대상 Product Finder 만들어줘. 운동 종류, 착용감 질문하고 맞춤 상품 추천하는 형태로." },
          { sender: "Lead Magnet Agent", time: "10:05", isAgent: true, text: "기획 완료! 4단계 질문 플로우로 설계했습니다.", list: ["Q1. 주로 어떤 운동을 하시나요? (5개 선택지)", "Q2. 선호하는 착용감은요? (3개 선택지)", "Q3. 선호하는 색상 계열은? (4개 선택지)", "→ 조건 매칭 상품 6개 추천"] },
          { sender: "PM Kim", time: "10:06", isAgent: false, text: "좋아, 브랜드 가이드 반영해서 바로 만들어줘" },
          { sender: "Lead Magnet Agent", time: "10:35", isAgent: true, text: "완료! Product Finder 배포 준비됐습니다.", links: ["프리뷰 보기", "배포하기"] },
        ],
    showcaseTitle: en ? "Here's how it ships" : "이렇게 만들어집니다",
    showcaseSub: en ? "Question-based recommendations drive conversion and capture first-party data at the same time" : "질문 기반 맞춤 추천으로 구매 전환과 데이터 수집을 동시에 합니다",
    showcaseImages: en
      ? [
          { src: "/cases/lm-pfinder-hero.png", label: "Landing", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-q1.png", label: "Q1 — Sport type", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-q2.png", label: "Q2 — Fit", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-result.png", label: "Matched results", w: 430, h: 932 },
        ]
      : [
          { src: "/cases/lm-pfinder-hero.png", label: "랜딩 화면", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-q1.png", label: "질문 1 — 운동 종류", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-q2.png", label: "질문 2 — 착용감", w: 430, h: 932 },
          { src: "/cases/lm-pfinder-result.png", label: "맞춤 추천 결과", w: 430, h: 932 },
        ],
    typeTitle: en ? "Generates many web-app formats" : "다양한 형태의 웹앱을 자동 생성합니다",
    typeSub: en ? "Pick the format that fits your industry and goal" : "업종과 목적에 맞는 웹앱 유형을 지원합니다",
    typeCards: en
      ? [
          { title: "Product Finder", desc: "Question-based product matching — lift conversion and capture preference data at the same time." },
          { title: "Diagnostic quiz", desc: "Fit checks and knowledge tests — interactive quizzes that capture leads and drive shares." },
          { title: "Calculator / simulator", desc: "TCO comparisons, tax simulations — hands-on tools customers run themselves convert better." },
          { title: "Interactive map", desc: "Charging stations, stores, service points — location-based discovery tools, designed and built for you." },
          { title: "Commerce pack", desc: "Product catalogs and detail pages, auto-generated and deployed on-brand." },
          { title: "Report / guide", desc: "Industry trend reports and how-to guides — the classic B2B lead magnet, auto-generated." },
        ]
      : [
          { title: "Product Finder", desc: "질문 기반 맞춤 상품 추천으로 구매 전환율 향상과 고객 취향 데이터 수집을 동시에" },
          { title: "진단 퀴즈", desc: "적합성 진단, 지식 테스트 등 참여형 도구로 자연스럽게 리드를 확보하고 공유 유도" },
          { title: "계산기 / 시뮬레이터", desc: "TCO 비교, 절세 시뮬레이션 등 고객이 직접 계산해보는 실용 도구로 전환율 향상" },
          { title: "인터랙티브 맵", desc: "충전소, 매장, 서비스 거점 등 위치 기반 탐색 서비스를 자동으로 기획하고 생성" },
          { title: "커머스 팩", desc: "상품 카탈로그, 상세페이지를 자동 생성하고 브랜드 가이드에 맞춰 배포" },
          { title: "리포트 / 가이드", desc: "업계 트렌드 리포트, 실무 가이드 등 B2B에서 가장 익숙한 리드마그넷 형태를 자동 생성" },
        ],
    howTitle: en ? "How it works" : "이렇게 작동합니다",
    howSub: en ? "From goal-setting to lead capture, the agent handles every step" : "목표 설정부터 리드 수집까지, 에이전트가 전 과정을 처리합니다",
    processSteps: en
      ? [
          { title: "Set goals", desc: "Define lead targets and audience" },
          { title: "Plan the tool", desc: "Design question flow and result logic" },
          { title: "Auto-generate", desc: "Build to your brand guidelines" },
          { title: "Deploy", desc: "Preview, then ship instantly" },
          { title: "Capture leads", desc: "Auto-collect and sync engagement data" },
        ]
      : [
          { title: "목표 설정", desc: "리드 수집 목표와 타겟 정의" },
          { title: "도구 기획", desc: "질문 플로우, 결과 로직 설계" },
          { title: "자동 생성", desc: "브랜드 가이드 반영 후 빌드" },
          { title: "배포", desc: "프리뷰 확인 후 즉시 배포" },
          { title: "리드 수집", desc: "참여 데이터 자동 수집·연동" },
        ],
    integrationTitle: en ? "Plugs into your stack" : "기존 스택에 바로 연동됩니다",
    integrationSub: en
      ? "Hooks into your existing stack and auto-builds everything up to a ready-to-ship draft"
      : "고객사 기존 스택에 연동하여, 배포 직전 초안(Draft) 단계까지 자동으로 세팅합니다",
    cycleTitleLeft: en ? "Web-app build: 2–3 weeks → " : "웹앱 제작 2~3주 → ",
    cycleTitleRight: en ? "30 min" : "30분",
    cycleSub: en ? "Web apps you used to outsource, now built instantly by an agent" : "외주에 맡기던 웹앱을, 에이전트가 즉시 만듭니다",
    legacyLabel: en ? "Legacy agency process (2–3 weeks)" : "기존 에이전시 프로세스 (2~3주)",
    legacySteps: en
      ? ["Briefing (1–2 days)", "Wireframe (3–5 days)", "Design (3–5 days)", "Dev/QA (5–7 days)"]
      : ["기획 브리핑(1~2일)", "와이어프레임(3~5일)", "디자인(3~5일)", "개발/QA(5~7일)"],
    agentLabel: en ? "Lead Magnet Agent (within 30 minutes)" : "Lead Magnet Agent (30분 이내)",
    relatedTitle: en ? "Pairs well with" : "함께 사용하면 효과적입니다",
    relatedSub: en ? "Combine with other ARMY agents to cover the full funnel" : "ARMY의 다른 에이전트와 조합하면 퍼널 전체를 커버합니다",
    ctaTitle: en ? "Deploy Lead Magnet Agent" : "Lead Magnet Agent를 도입해보세요",
    ctaSub: en ? "Ship viral tools that turn traffic into leads — in a single chat" : "트래픽을 리드로 전환하는 바이럴 도구, 대화 한 번으로 완성합니다.",
  };

  const showcaseImagesLocal = t.showcaseImages;
  const typeCardsLocal = t.typeCards.map((c, i) => ({ ...c, icon: typeIcons[i] }));
  const processStepsLocal = t.processSteps.map((s, i) => ({ ...s, icon: processIcons[i] }));

  return (
    <div className="pt-20">
      {/* ━━ Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <Magnet size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{agent.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.heroH1}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{agent.heroSub}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 flex items-center justify-center gap-3">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>{t.heroCta}</Link>
            {agent.demoUrl && (
              <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                {t.demoCta} <ArrowRight size={14} className="ml-1.5" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ━━ Slack/Chat Demo ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.slackTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.slackSub}</p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-gray-800 px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-white text-xs font-medium ml-3"># lead-magnet</span>
              </div>
              <div className="bg-white p-5 space-y-4">
                {t.slackMessages.map((msg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                    <div className="flex items-start gap-2.5">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${msg.isAgent ? "" : "bg-gray-500"}`} style={msg.isAgent ? { backgroundColor: agent.color } : undefined}>
                        {msg.isAgent ? <Magnet size={16} /> : "PM"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-bold text-gray-900">{msg.sender}</span>
                          <span className="text-[11px] text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-0.5">{msg.text}</p>
                        {msg.list && (
                          <div className="mt-2 space-y-1">
                            {msg.list.map((li, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span className="text-gray-600">{li}</span>
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

      {/* ━━ Product Showcase ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.showcaseTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.showcaseSub}</p>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {showcaseImagesLocal.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-xs font-semibold text-center mb-2" style={{ color: agent.color }}>{img.label}</div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ maxWidth: 200, margin: "0 auto" }}>
                  <Image src={img.src} alt={img.label} width={img.w} height={img.h} className="w-full h-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Type Cards ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.typeTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.typeSub}</p>
          </FadeInOnScroll>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {typeCardsLocal.map((card, i) => (
              <motion.div key={i} variants={item}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{card.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ 5단계 프로세스 ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.howTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.howSub}</p>
          </FadeInOnScroll>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="flex flex-col md:flex-row items-stretch gap-3">
            {processStepsLocal.map((step, i) => (
              <motion.div key={i} variants={item} className="flex items-center gap-3 flex-1">
                <div className="flex-1 text-center p-5 rounded-xl bg-gray-50 border border-gray-100 h-full flex flex-col items-center">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{step.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                </div>
                {i < processStepsLocal.length - 1 && <ArrowRight size={16} className="text-gray-300 flex-shrink-0 hidden md:block" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ Integration ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.integrationTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.integrationSub}</p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              {/* Lead Magnet Agent Box */}
              <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="px-8 py-4 rounded-2xl text-base font-bold text-white shadow-lg" style={{ backgroundColor: agent.color }}>
                Lead Magnet Agent
              </motion.div>

              {/* Connecting lines with animation */}
              <div className="relative w-full h-12 flex items-end justify-center">
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 48" fill="none" preserveAspectRatio="xMidYMid meet" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {/* Vertical line down from agent */}
                  <motion.line x1="300" y1="0" x2="300" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2 } } }} />
                  {/* Horizontal line */}
                  <motion.line x1="75" y1="20" x2="525" y2="20" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } } }} />
                  {/* Vertical lines down to each platform + arrows */}
                  {[75, 225, 375, 525].map((x, i) => (
                    <motion.g key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }}>
                      <motion.line x1={x} y1="20" x2={x} y2="42" stroke={agent.color} strokeWidth="2" variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.12 } } }} />
                      <polygon points={`${x - 5},37 ${x + 5},37 ${x},47`} fill={agent.color} />
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
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className="h-20 flex items-center justify-center">
                      <Image src={platform.logo} alt={platform.name} width={160} height={80} className="object-contain max-h-20" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ━━ Timeline Comparison ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              {t.cycleTitleLeft}<span style={{ color: agent.color }}>{t.cycleTitleRight}</span>
            </h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.cycleSub}</p>
          </FadeInOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            <FadeInOnScroll>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{t.legacyLabel}</p>
                <div className="flex items-center gap-1.5">
                  {t.legacySteps.map((label, i) => (
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
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: agent.color }}>{t.agentLabel}</p>
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
