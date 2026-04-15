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

const slackMessages = [
  { sender: "PM Kim", time: "10:02", isAgent: false, text: "이커머스 고객 대상 Product Finder 만들어줘. 운동 종류, 착용감 질문하고 맞춤 상품 추천하는 형태로." },
  { sender: "Lead Magnet Agent", time: "10:05", isAgent: true, text: "기획 완료! 4단계 질문 플로우로 설계했습니다.", list: ["Q1. 주로 어떤 운동을 하시나요? (5개 선택지)", "Q2. 선호하는 착용감은요? (3개 선택지)", "Q3. 선호하는 색상 계열은? (4개 선택지)", "→ 조건 매칭 상품 6개 추천"] },
  { sender: "PM Kim", time: "10:06", isAgent: false, text: "좋아, 브랜드 가이드 반영해서 바로 만들어줘" },
  { sender: "Lead Magnet Agent", time: "10:35", isAgent: true, text: "완료! Product Finder 배포 준비됐습니다.", links: ["프리뷰 보기", "배포하기"] },
];

const showcaseImages = [
  { src: "/cases/lm-pfinder-hero.png", label: "랜딩 화면", w: 430, h: 932 },
  { src: "/cases/lm-pfinder-q1.png", label: "질문 1 — 운동 종류", w: 430, h: 932 },
  { src: "/cases/lm-pfinder-q2.png", label: "질문 2 — 착용감", w: 430, h: 932 },
  { src: "/cases/lm-pfinder-result.png", label: "맞춤 추천 결과", w: 430, h: 932 },
];

const typeCards = [
  { icon: <Search size={24} />, title: "Product Finder", desc: "질문 기반 맞춤 상품 추천으로 구매 전환율 향상과 고객 취향 데이터 수집을 동시에" },
  { icon: <FileText size={24} />, title: "진단 퀴즈", desc: "적합성 진단, 지식 테스트 등 참여형 콘텐츠로 자연스럽게 리드를 확보하고 공유 유도" },
  { icon: <Monitor size={24} />, title: "계산기 / 시뮬레이터", desc: "TCO 비교, 절세 시뮬레이션 등 고객이 직접 계산해보는 실용 도구로 전환율 향상" },
  { icon: <Globe size={24} />, title: "인터랙티브 맵", desc: "충전소, 매장, 서비스 거점 등 위치 기반 탐색 서비스를 자동으로 기획하고 생성" },
  { icon: <ShoppingBag size={24} />, title: "커머스 팩", desc: "상품 카탈로그, 상세페이지를 자동 생성하고 브랜드 가이드에 맞춰 배포" },
  { icon: <FileText size={24} />, title: "리포트 / 가이드", desc: "업계 트렌드 리포트, 실무 가이드 등 B2B에서 가장 익숙한 리드마그넷 형태를 자동 생성" },
];

export default function LeadMagnetDetailPage({ agent }: Props) {
  const relatedAgents = agents.filter((a) => agent.relatedAgents.includes(a.id));

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
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{agent.tagline}</p>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">상품 카탈로그, 계산기, 진단 도구 — 대화 한 번으로 생성합니다</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 flex items-center justify-center gap-3">
            <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>도입 문의</Link>
            {agent.demoUrl && (
              <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                데모 보기 <ArrowRight size={14} className="ml-1.5" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ━━ Slack/Chat Demo ━━ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">AI 에이전트와 대화하면 콘텐츠가 완성됩니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">Slack, Teams 등 협업 툴은 물론 전용 웹 인터페이스에서도 바로 사용할 수 있습니다</p>
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
                {slackMessages.map((msg, i) => (
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
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">이렇게 만들어집니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">질문 기반 맞춤 추천으로 구매 전환과 데이터 수집을 동시에 합니다</p>
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {showcaseImages.map((img, i) => (
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
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">다양한 형태의 콘텐츠를 자동 생성합니다</h2>
            <p className="text-sm text-gray-500 text-center mb-10">업종과 목적에 맞는 콘텐츠 유형을 지원합니다</p>
          </FadeInOnScroll>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {typeCards.map((card, i) => (
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

      {/* ━━ Timeline Comparison ━━ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              콘텐츠 제작 2~3주 → <span style={{ color: agent.color }}>30분</span>
            </h2>
            <p className="text-sm text-gray-500 text-center mb-10">외주에 맡기던 콘텐츠를, 에이전트가 즉시 만듭니다</p>
          </FadeInOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            <FadeInOnScroll>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">기존 에이전시 프로세스 (2~3주)</p>
                <div className="flex items-center gap-1.5">
                  {["기획 브리핑(1~2일)", "와이어프레임(3~5일)", "디자인(3~5일)", "개발/QA(5~7일)"].map((label, i) => (
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
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: agent.color }}>Lead Magnet Agent (30분 이내)</p>
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
            <h2 className="text-2xl font-bold text-gray-900">Lead Magnet Agent를 도입해보세요</h2>
            <p className="text-sm text-gray-500 mt-3">트래픽을 리드로 전환하는 바이럴 콘텐츠, 대화 한 번으로 완성합니다.</p>
            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: agent.color }}>도입 문의</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
