"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Megaphone,
  ArrowRight,
  MessageSquare,
  ImageIcon,
  Target,
  BarChart3,
  Sparkles,
  Globe,
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

const featureIcons = [
  <MessageSquare key="0" size={20} />,
  <ImageIcon key="1" size={20} />,
  <Target key="2" size={20} />,
  <BarChart3 key="3" size={20} />,
  <Sparkles key="4" size={20} />,
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function LMFDetailPage({ agent: rawAgent, locale = "ko" }: Props) {
  const agent = localizeAgent(rawAgent, locale);
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id)).map((a) => localizeAgent(a, locale));
  const en = locale === "en";
  const prefix = locale === "en" ? "/en" : "";

  const t = {
    heroCategory: en ? "Language-Market Fit" : "Language-Market Fit",
    heroH1: en ? "One marketer runs the full ad pipeline" : "마케터 1명이 광고 전 과정을 자동화합니다",
    heroSub: en
      ? "LMF — find the language your market responds to"
      : "LMF(Language-Market Fit) — 시장이 반응하는 언어를 데이터로 찾는 프레임워크",
    heroCta: en ? "Get in Touch" : "도입 문의",
    slackTitle: en ? "Chat with the agent, launch a campaign" : "AI 에이전트와 대화하면 캠페인이 완성됩니다",
    slackSub: en
      ? "Use it from Slack, Teams, or the dedicated web interface"
      : "Slack, Teams 등 협업 툴은 물론 전용 웹 인터페이스에서도 바로 사용할 수 있습니다",
    slackMessages: en
      ? [
          { sender: "PM Kim", time: "14:30", isAgent: false, text: "@LMF Agent run brand research on Lifestyle Brand A" },
          { sender: "LMF Agent", time: "14:30", isAgent: true, text: "Starting brand research on Lifestyle Brand A.\nI'll analyze the site, pull customer reviews, scan competitors, and extract the design system automatically." },
          { sender: "LMF Agent", time: "14:35", isAgent: true, text: "[Done] Brand research complete.", list: ["Basics: Lifestyle Brand A — interior platform", "Competitors: Brand B, Brand C, others", "Reviews: 423 analyzed → 12 pain points extracted", "Design system: colors, fonts, component styles"] },
          { sender: "PM Kim", time: "14:36", isAgent: false, text: "Generate personas" },
          { sender: "LMF Agent", time: "14:45", isAgent: true, text: "Personas generated from the research data.", personas: [{ name: "Ji-eun (29, newlywed)", pain: "Doesn't know where to start with newlywed home decor" }, { name: "Hyun-jun (27, lives alone)", pain: "Small studio, not enough storage" }, { name: "Su-a (32, inspiration seeker)", pain: "Loves home tours but can't apply them" }] },
        ]
      : [
          { sender: "PM Kim", time: "14:30", isAgent: false, text: "@LMF Agent 라이프스타일 A사 브랜드 리서치해줘" },
          { sender: "LMF Agent", time: "14:30", isAgent: true, text: "라이프스타일 A사 브랜드 리서치를 시작합니다.\n홈페이지 분석, 고객 리뷰 수집, 경쟁사 조사, 디자인 시스템 추출까지 자동으로 진행하겠습니다." },
          { sender: "LMF Agent", time: "14:35", isAgent: true, text: "[완료] 브랜드 리서치 완료!", list: ["기본 정보: 라이프스타일 A사 — 인테리어 플랫폼", "경쟁사: B사, C사 등", "고객 리뷰: 423건 분석 → Pain Point 12개 추출", "디자인 시스템: 색상, 폰트, 컴포넌트 스타일"] },
          { sender: "PM Kim", time: "14:36", isAgent: false, text: "퍼소나 생성해줘" },
          { sender: "LMF Agent", time: "14:45", isAgent: true, text: "리서치 데이터를 바탕으로 페르소나를 생성했습니다.", personas: [{ name: "지은 (29세, 신혼부부)", pain: "신혼집 인테리어 어디서부터 시작할지 막막" }, { name: "현준 (27세, 자취생)", pain: "좁은 원룸, 수납 공간 부족" }, { name: "수아 (32세, 영감 탐색자)", pain: "예쁜 집 구경은 좋은데 적용을 못함" }] },
        ],
    creativeTitle: en ? "Ad creatives the AI generates" : "AI가 만든 광고 소재 예시",
    creativeSub: en ? "Creatives auto-generated to match your brand guidelines and personas" : "브랜드 가이드라인과 퍼소나를 반영한 소재를 자동 생성합니다",
    creativeExamples: en
      ? [
          { image: "/cases/lmf-ohouse-1.png", tag: "Same-size homes · Problem framing", headline: "Wondering what furniture size fits your place?", body: "Find the answer in home tours from the same square footage. Real interiors from comparable homes, collected for you." },
          { image: "/cases/lmf-ohouse-2.png", tag: "Same-size homes · Case study", headline: "A 26-pyeong newlywed home, styled like this", body: "Get ideas from 1,200 home tours at similar sizes. Copy is auto-generated per persona." },
        ]
      : [
          { image: "/cases/lmf-ohouse-1.png", tag: "같은평수집들이 · 문제제기형", headline: "우리 집에 맞는 가구 사이즈, 고민되셨죠?", body: "같은 평수 집들이에서 답을 찾아보세요. 비슷한 조건의 실제 인테리어 사례를 모았습니다." },
          { image: "/cases/lmf-ohouse-2.png", tag: "같은평수집들이 · 사례형", headline: "26평 신혼집, 이렇게 꾸몄어요", body: "비슷한 평수 집들이 1,200개에서 아이디어 얻어가세요. 퍼소나별 맞춤 카피를 자동 생성합니다." },
        ],
    impactTitle: en ? "The numbers speak" : "숫자가 말해줍니다",
    impactSub: en ? "Same team size, different ad performance" : "같은 인원으로 광고 성과가 달라집니다",
    timeRowTitle: en ? "Time to launch" : "광고 라이브까지 소요 시간",
    timeBadge: en ? "5× faster" : "5x 단축",
    timeBefore: en ? "10h+" : "10시간+",
    timeAfter: en ? "2h" : "2시간",
    statMetrics: en
      ? [
          { value: "+87%", label: "Ad CTR lift", sub: "vs. prior creative" },
          { value: "×3", label: "ROAS improvement", sub: "best-case" },
          { value: "1 person", label: "Ops headcount", sub: "from 3 to 1" },
        ]
      : [
          { value: "+87%", label: "광고 CTR 성장", sub: "기존 소재 대비" },
          { value: "3배", label: "ROAS 개선", sub: "최대 성과 기준" },
          { value: "1명", label: "운영 인원", sub: "기존 3명 → 1명" },
        ],
    featuresTitle: en ? "What makes it different" : "이런 점이 다릅니다",
    featuresSub: en ? "Design creative with data, not guesswork" : "감으로 만들던 소재를, 데이터로 설계합니다",
    features: en
      ? [
          { title: "Run experiments via Slack", desc: "Say \"do research\" and a 12-step process kicks off. Native in Slack (Teams integration on the roadmap)." },
          { title: "Generate images and copy for testing", desc: "Generate and grade ad images, copy, and video against your brand guidelines." },
          { title: "Meta campaign automation", desc: "Set target, budget, and duration — campaigns generate and go live automatically. Autopilot mode launches instantly." },
          { title: "Winning pattern extraction", desc: "Codify repeatable winners and losers from the data. Get next-experiment recommendations automatically." },
          { title: "Multilingual creative", desc: "Generate Korean and Japanese ads in one pass (English and Chinese coming). One marketer runs your global campaigns." },
        ]
      : [
          { title: "Slack에서 대화로 실험", desc: "\"리서치 해줘\" 한마디로 12단계 프로세스가 시작됩니다. Slack에서 바로 사용 (Teams 연동 로드맵)." },
          { title: "AI 이미지/카피 자동 생성", desc: "브랜드 가이드라인을 반영한 광고 이미지, 카피, 영상을 자동 생성하고 평가합니다." },
          { title: "Meta 캠페인 자동화", desc: "타겟/예산/기간 설정 후 캠페인 자동 생성 및 라이브. \"알아서 해줘\" 모드로 즉시 집행 가능." },
          { title: "성공 방정식 도출", desc: "반복 가능한 성공 공식과 지양할 실패 공식을 데이터로 정리. 다음 실험 액션까지 자동 제안." },
          { title: "다국어 소재 생성", desc: "한국어·일본어 광고 소재를 한 번에 생성 (영어·중국어 확장 예정). 글로벌 캠페인도 1명이 운영." },
        ],
    integrationTitle: en ? "Plugs into your stack" : "기존 스택에 바로 연동됩니다",
    integrationSub: en
      ? "Hooks into your existing stack and auto-builds everything up to a ready-to-launch draft"
      : "고객사 기존 스택에 연동하여, 배포 직전 초안(Draft) 단계까지 자동으로 세팅합니다",
    relatedTitle: en ? "Pairs well with" : "함께 사용하면 효과적입니다",
    relatedSub: en ? "Combine with other ARMY agents to cover the full funnel" : "ARMY의 다른 에이전트와 조합하면 퍼널 전체를 커버합니다",
    ctaTitle: en ? "Deploy LMF Agent" : "LMF Agent를 도입해보세요",
    ctaSub: en ? "MarketFit Lab partners with you from deployment through operations" : "마켓핏랩이 도입부터 운영까지 함께합니다.",
  };

  const featuresLocal = t.features.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="pt-20">
      {/* ━━ Hero ━━ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(ellipse at center, ${agent.color} 0%, transparent 70%)` }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white mb-6" style={{ backgroundColor: agent.color }}>
            <Megaphone size={32} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: agent.color }}>{t.heroCategory}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{agent.name}</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t.heroH1}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">{t.heroSub}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>{t.heroCta}</Link>
          </motion.div>
        </div>
      </section>

      {/* ━━ Slack Demo ━━ */}
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
                <span className="text-white text-xs font-medium ml-3"># lmf-campaigns</span>
              </div>
              <div className="bg-white p-5 space-y-4">
                {t.slackMessages.map((msg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                    <div className="flex items-start gap-2.5">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${msg.isAgent ? "" : "bg-gray-500"}`} style={msg.isAgent ? { backgroundColor: agent.color } : undefined}>
                        {msg.isAgent ? <Megaphone size={16} /> : "PM"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-bold text-gray-900">{msg.sender}</span>
                          <span className="text-[11px] text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-0.5 whitespace-pre-line">{msg.text}</p>
                        {msg.list && (
                          <div className="mt-2 space-y-1">
                            {msg.list.map((item, li) => (
                              <div key={li} className="flex items-start gap-2 text-sm">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span className="text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {msg.personas && (
                          <div className="mt-3 space-y-2">
                            {msg.personas.map((p, pi) => (
                              <div key={pi} className="rounded-lg p-3 border border-gray-100 bg-gray-50">
                                <p className="text-sm font-bold text-gray-900">{p.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{p.pain}</p>
                              </div>
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

      {/* ━━ Creative Examples ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.creativeTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.creativeSub}</p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.creativeExamples.map((ex, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
                  <div className="relative">
                    <Image src={ex.image} alt={ex.tag} width={800} height={600} className="w-full h-auto" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{ex.tag}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-3">{ex.headline}</h3>
                    <p className="text-sm text-gray-600 mt-1">{ex.body}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Impact ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.impactTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.impactSub}</p>
          </FadeInOnScroll>

          {/* Time savings */}
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <FadeInOnScroll>
              <div className="rounded-xl bg-white border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-gray-900">{t.timeRowTitle}</p>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>{t.timeBadge}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-400 w-12 text-right flex-shrink-0">Before</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="h-8 bg-gray-200 rounded-lg flex items-center px-3" style={{ width: "100%" }}>
                      <span className="text-[11px] font-bold text-gray-600 whitespace-nowrap">{t.timeBefore}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold w-12 text-right flex-shrink-0" style={{ color: agent.color }}>After</span>
                  <div className="flex-1 flex items-center gap-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="h-8 rounded-lg flex items-center px-3" style={{ backgroundColor: agent.color }}>
                      <span className="text-[11px] font-bold text-white whitespace-nowrap">{t.timeAfter}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Stat cards */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {t.statMetrics.map((m, i) => (
              <motion.div key={i} variants={item}>
                <div className="text-center p-5 rounded-xl bg-white border border-gray-100">
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: agent.color }}>{m.value}</p>
                  <p className="text-xs font-semibold text-gray-900 mt-2">{m.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{m.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━ Features ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{t.featuresTitle}</h2>
            <p className="text-sm text-gray-500 text-center mb-10">{t.featuresSub}</p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuresLocal.map((feature, i) => (
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

      {/* ━━ Integration ━━ */}
      <section className="py-16 bg-gray-50">
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
                  { name: "Meta Ads", logo: "/images/logos/meta-ads.png" },
                  { name: "Google Ads", logo: "/images/logos/google-ads.png" },
                  { name: "TikTok Ads", logo: "/images/logos/tiktok-ads.png" },
                  { name: "Figma", logo: "/images/logos/figma.png" },
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
        <section className="py-16">
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
      <section className="py-20 bg-gray-50">
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
