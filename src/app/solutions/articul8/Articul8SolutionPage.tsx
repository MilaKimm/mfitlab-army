import Link from "next/link";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import type { Locale } from "@/i18n/dictionaries";
import { localePrefix } from "@/i18n/dictionaries";

export default function Articul8SolutionPage({ locale = "ko" }: { locale?: Locale } = {}) {
  const en = locale === "en";
  const t = {
    kicker: "AI Transformation > Articul8",
    pullQuote: en
      ? "“When you need AI that runs on your own data.”"
      : "“사내 데이터로 AI를 돌리고 싶다면”",
    heroTitle: en
      ? "Articul8 — Enterprise GenAI Platform"
      : "Articul8 — 엔터프라이즈 GenAI 플랫폼",
    heroSub: en
      ? "Turn enterprise domain data into AI. Domain-Specific Models (DSMs) built by ex-Intel engineers cut TCO by 5×."
      : "엔터프라이즈의 도메인 데이터를 AI로 전환하는 맞춤형 GenAI 플랫폼. Intel 출신 팀이 만든 도메인 특화 모델(DSMs)로 TCO를 5배 절감합니다.",
    primaryCta: en ? "Get in Touch" : "도입 문의",
    whyTitle: en ? "Why Articul8" : "왜 Articul8인가",
    problems: en
      ? [
          {
            title: "Generic AI hits a wall",
            body: "General-purpose AI like ChatGPT doesn't know your domain. Hallucination risk stays high.",
          },
          {
            title: "Build costs are heavy",
            body: "Standing up your own AI stack takes 6–9 months and serious capex.",
          },
          {
            title: "Data security limits",
            body: "Many regulated environments can't send internal data to external AI.",
          },
        ]
      : [
          { title: "범용 AI의 한계", body: "ChatGPT 같은 범용 AI는 사내 도메인 지식을 모릅니다. 할루시네이션 리스크가 높습니다." },
          { title: "높은 도입 비용", body: "자체 AI 인프라 구축에 6~9개월, 대규모 투자가 필요합니다." },
          { title: "데이터 보안 우려", body: "사내 데이터를 외부 AI에 보낼 수 없는 규제 환경이 많습니다." },
        ],
    resultsTitle: en ? "Results" : "성과",
    stats: en
      ? [
          { value: "5×", label: "TCO reduction" },
          { value: "2 months", label: "ROI (vs. 6–9)" },
          { value: "10×", label: "Less headcount required" },
        ]
      : [
          { value: "5배", label: "TCO 절감" },
          { value: "2개월", label: "ROI 달성 (6~9개월→)" },
          { value: "10배", label: "적은 인력 필요" },
        ],
    relatedHeader: en ? "Different problem?" : "다른 과제라면",
    relatedArmy: en
      ? "Need growth marketing AI? → See ARMY"
      : "그로스 마케팅 AI가 필요하다면 → ARMY 보기",
    relatedReplit: en
      ? "Want to level up team AI skills? → See Replit"
      : "조직 AI 역량 강화가 필요하다면 → Replit 보기",
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white" style={{ borderTopWidth: 4, borderTopColor: "#1E3A5F", borderTopStyle: "solid" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
            {t.kicker}
          </p>
          <p className="text-sm text-gray-500 italic mb-3">
            {t.pullQuote}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            {t.heroSub}
          </p>
          <Link href="#contact" className="h-12 px-6 inline-flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            {t.primaryCta}
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">{t.whyTitle}</h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {t.problems.map((p, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 p-8 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.body}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">{t.resultsTitle}</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {t.stats.map((s, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInOnScroll>
            <p className="text-sm text-gray-500 mb-3">{t.relatedHeader}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={localePrefix("/army", locale)} className="text-sm text-purple-600 hover:underline">{t.relatedArmy}</Link>
              <Link href={localePrefix("/solutions/replit", locale)} className="text-sm text-orange-600 hover:underline">{t.relatedReplit}</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
