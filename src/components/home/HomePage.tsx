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
import {
  agents,
  armyOverview,
  armyOverviewEn,
  axSolutions,
  localizeAgent,
  localizeSolution,
  type AxSolution,
} from "@/data/army";
import { getDictionary, localePrefix, type Locale } from "@/i18n/dictionaries";

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

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const diagnosticHref = localePrefix("/diagnostic?start=true", locale);
  const overview = locale === "en" ? armyOverviewEn : armyOverview;
  const heritageStats = overview.heritage.stats;
  const adoptionSteps = overview.adoption.steps;
  const differentiators = overview.differentiators;

  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section id="hero" className="relative overflow-hidden bg-[#CCFFFC]/30 min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[60vw] h-[70vh] rounded-[50%] bg-gradient-to-b from-[#A0EBE6] via-[#65E3D0] to-[#CCFFFC] blur-[100px] opacity-20" />
          <div className="absolute top-[5%] w-[50vw] h-[40vh] rounded-[50%] bg-gradient-to-b from-[#CCFFFC]/30 to-transparent blur-[120px]" />
          <div className="absolute bottom-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-br from-[#A0EBE6] to-[#52C0CE] opacity-15 blur-[60px]" />
          <div className="absolute left-[10%] top-[30%] w-[20vw] h-[30vh] rounded-full bg-[#DFF15D] opacity-8 blur-[120px]" />
          <div className="absolute right-[10%] top-[20%] w-[15vw] h-[25vh] rounded-full bg-[#BFE9EF] opacity-15 blur-[100px]" />
        </div>

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
            <p className="text-lg md:text-2xl font-bold text-[#36B1A7]">
              {dict.hero.tagline1}
            </p>
            <p className="text-lg md:text-2xl font-bold text-[#1B1B1B]/60">
              {dict.hero.tagline2}
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
              {dict.hero.primaryCta}
            </Link>
            <Link
              href={diagnosticHref}
              className="h-12 px-8 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm border border-white/50 text-[#1B1B1B] font-semibold hover:bg-white hover:border-[#36B1A7] hover:text-[#36B1A7] transition-all duration-300"
            >
              {dict.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Heritage + Clients ─── */}
      <section id="heritage" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3 text-center">{dict.heritage.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3 text-center">
              {dict.heritage.title}
            </h2>
            <p className="text-[17px] text-[#626166] text-center mb-12">
              {dict.heritage.subtitle}
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {heritageStats.map((stat, i) => (
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
                {dict.heritage.siteCta} <ArrowUpRight size={14} />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 3. Why ARMY ─── */}
      <section className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.why.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">
              {dict.why.title}
            </h2>
            <p className="text-[#626166] mb-12 max-w-2xl">{dict.why.subtitle}</p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
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
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.agentGrid.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">
              {dict.agentGrid.title}
            </h2>
            <p className="text-[#626166] mb-12 max-w-2xl">
              {dict.agentGrid.subtitleLine1}
              <br />{dict.agentGrid.subtitleLine2}
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((a) => {
              const agent = localizeAgent(a, locale);
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={localePrefix(`/army/${agent.id}`, locale)} className="block group">
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
                            {dict.agentGrid.detailCta}
                            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                          </span>
                          <span className="text-sm font-semibold" style={{ color: agent.color }}>{agent.impactValue}</span>
                        </div>
                      </div>
                      <div className="w-[45%] relative">{graphicMap[agent.id]}</div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. Showcase ─── */}
      <section id="showcase" className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.showcase.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">{dict.showcase.title}</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">{dict.showcase.subtitle}</p>
          </FadeInOnScroll>

          <div className="mb-20 text-center">
            <FadeInOnScroll>
              <p className="text-sm font-semibold text-[#1B1B1B] mb-4">{dict.showcase.agentDemoLabel}</p>
            </FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <AgentDemo />
            </div>
          </div>

          <div className="text-center">
            <FadeInOnScroll>
              <p className="text-sm font-semibold text-[#1B1B1B] mb-4">{dict.showcase.dashboardLabel}</p>
            </FadeInOnScroll>
            <DashboardGraphic />
          </div>
        </div>
      </section>

      {/* ─── 5.5 Integration ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.integration.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">{dict.integration.title}</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">{dict.integration.subtitle}</p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.1}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-0 items-stretch">
              {[
                { name: "Meta Ads", logo: "/images/logos/meta-ads.png" },
                { name: "Google Ads", logo: "/images/logos/google-ads.png" },
                { name: "TikTok Ads", logo: "/images/logos/tiktok-ads.png" },
                { name: "Figma", logo: "/images/logos/figma.png" },
                { name: "VWO", logo: "/images/logos/vwo.png" },
                { name: "Optimizely", logo: "/images/logos/optimizely.png" },
                { name: "GrowthBook", logo: "/images/logos/growthbook.png" },
                { name: "AEM", logo: "/images/logos/aem.png" },
                { name: "Salesforce", logo: "/images/logos/salesforce.png" },
                { name: "Shopify", logo: "/images/logos/shopify.png" },
                { name: "Cafe24", logo: "/images/logos/cafe24.png" },
                { name: "Twilio", logo: "/images/logos/twilio.png" },
                { name: "LG U+", logo: "/images/logos/lgu.png" },
                { name: "Zapier", logo: "/images/logos/zapier.png" },
                { name: "Google Meridian", logo: "/images/logos/meridian.png" },
                { name: "Meta Robyn", logo: "/images/logos/meta-robyn.png" },
                { name: "Google Analytics", logo: "/images/logos/google-analytics.png" },
                { name: "Mixpanel", logo: "/images/logos/mixpanel.png" },
              ].map((platform, i) => (
                <motion.div key={platform.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: Math.min(0.2 + i * 0.03, 0.8) }} className="aspect-[3/2] w-full flex items-center justify-center p-4">
                  <Image src={platform.logo} alt={platform.name} width={180} height={90} className="object-contain max-h-full max-w-full opacity-80 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 6. AX 솔루션 ─── */}
      <section className="py-24 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.ax.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">{dict.ax.title}</h2>
            <p className="text-[#626166] mb-12 max-w-2xl">{dict.ax.subtitle}</p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {axSolutions.map((s, i) => {
              const sol = localizeSolution(s, locale);
              return (
                <FadeInOnScroll key={sol.id} delay={i * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="rounded-2xl bg-white border border-[#E9E9E9] px-6 py-5 text-center w-full">
                      <p className="text-[15px] font-semibold text-[#1B1B1B]">&ldquo;{sol.question}&rdquo;</p>
                    </div>
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
                    {sol.href.startsWith("http") ? (
                      <a href={sol.href} target="_blank" rel="noopener noreferrer" className="block group w-full">
                        <SolutionCardInner sol={sol} detailLabel={dict.ax.detailCta} />
                      </a>
                    ) : (
                      <Link href={sol.href} className="block group w-full">
                        <SolutionCardInner sol={sol} detailLabel={dict.ax.detailCta} />
                      </Link>
                    )}
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>

          <FadeInOnScroll>
            <p className="text-center text-xs text-[#9B9B9B] mt-8">{dict.ax.partnerNote}</p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 7. Adoption ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">{dict.adoption.kicker}</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.5] mb-3">{dict.adoption.title}</h2>
            <p className="text-[#626166] mb-12 max-w-3xl">{dict.adoption.subtitleLine1}<br />{dict.adoption.subtitleLine2}</p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-4 gap-6">
            {adoptionSteps.map((step, i) => (
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
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white leading-[1.5] mb-3">{dict.diagnostic.cta.title}</h2>
            <p className="text-white/50 mb-8">{dict.diagnostic.cta.subtitle}</p>
            <Link href={diagnosticHref} className="inline-flex h-12 px-8 items-center rounded-full bg-[#DFF15D] text-[#1B1B1B] font-semibold hover:bg-[#EDF994] transition-all duration-300 shadow-lg shadow-[#DFF15D]/20">
              {dict.diagnostic.cta.button}
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ─── 9. Contact Form ─── */}
      <ContactSection locale={locale} />
    </>
  );
}

/* ─── Solution Card Inner ─── */
function SolutionCardInner({ sol, detailLabel }: { sol: AxSolution; detailLabel: string }) {
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
          {detailLabel} <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}

/* ─── Contact Section ─── */
function ContactSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
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
      locale,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setFormState("sent");
    } catch { setFormState("idle"); }
  };

  const solutionGroups = [
    { label: dict.contact.form.groupArmy, items: [{ id: "army-all", name: dict.contact.form.armyAll }, ...agents.map((a) => { const ag = localizeAgent(a, locale); return { id: ag.id, name: ag.name }; })] },
    { label: dict.contact.form.groupOther, items: [{ id: "replit", name: dict.contact.form.replit }, { id: "articul8", name: dict.contact.form.articul8 }] },
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
              <p className="text-lg text-[#626166] mb-4 leading-relaxed">{dict.contact.intro}</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B] mb-4 whitespace-pre-line">{dict.contact.title}</h2>
              <p className="text-[#626166]">{dict.contact.subtitle}</p>
            </div>
          </FadeInOnScroll>

          <div className="bg-white rounded-2xl border border-[#E9E9E9] p-8 shadow-sm">
            {formState === "sent" ? (
              <FadeInOnScroll>
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#CCFFFC] flex items-center justify-center mx-auto mb-4"><Check size={32} className="text-[#36B1A7]" /></div>
                  <p className="text-lg font-semibold text-[#1B1B1B]">{dict.contact.success.title}</p>
                  <p className="text-sm text-[#626166] mt-2">{dict.contact.success.note}</p>
                </div>
              </FadeInOnScroll>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input name="name" type="text" placeholder={dict.contact.form.name} required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                  <input name="company" type="text" placeholder={dict.contact.form.company} required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="email" type="email" placeholder={dict.contact.form.email} required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
                  <input name="phone" type="tel" placeholder={dict.contact.form.phone} required className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] transition-all" />
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
                <textarea name="message" placeholder={dict.contact.form.messagePlaceholder} rows={3} className="w-full px-4 py-3 rounded-lg border border-[#E9E9E9] text-sm focus:outline-none focus:ring-2 focus:ring-[#CCFFFC] focus:border-[#36B1A7] resize-none transition-all" />
                <button type="submit" disabled={formState === "sending"} className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#36B1A7] text-white font-semibold hover:bg-[#15867E] transition-all duration-300 disabled:opacity-50 shadow-lg shadow-[#36B1A7]/20">
                  <Send size={16} />
                  {formState === "sending" ? dict.contact.form.sending : dict.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
