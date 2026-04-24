import Link from "next/link";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import type { Locale } from "@/i18n/dictionaries";
import { localePrefix } from "@/i18n/dictionaries";

export default function ReplitSolutionPage({ locale = "ko" }: { locale?: Locale } = {}) {
  const en = locale === "en";
  const t = {
    kicker: "AI Transformation > Replit",
    pullQuote: en
      ? "“When your team needs to launch it themselves.”"
      : "“우리 팀도 직접 만들 수 있게 하고 싶다면”",
    heroTitle: en ? "Replit Vibe Coding Workshop" : "Replit 바이브 코딩 워크샵",
    heroSub: en
      ? "Non-technical teams launch an MVP in 4 hours. Build in natural language, deploy in one click."
      : "비개발 조직이 4시간 만에 MVP를 만드는 바이브 코딩 워크샵. 자연어로 대화하듯 개발하고, 원클릭으로 배포합니다.",
    primaryCta: en ? "Get in Touch" : "도입 문의",
    whyTitle: en ? "Why Vibe Coding" : "왜 바이브 코딩인가",
    problems: en
      ? [
          { title: "Dev capacity is always short", body: "An internal PoC still takes $30K–50K and 6 months." },
          { title: "Shadow IT risk", body: "Non-engineers using unvetted tools expose the company to security risk." },
          { title: "Idea-to-validation lag", body: "Good ideas sit in the dev queue while the window closes." },
        ]
      : [
          { title: "개발 리소스 만성 부족", body: "사내 PoC를 만들려면 3~5천만원과 6개월이 필요합니다." },
          { title: "Shadow IT 보안 리스크", body: "비개발자가 외부 도구를 무분별하게 사용하면 보안 위험이 생깁니다." },
          { title: "아이디어→검증 속도", body: "좋은 아이디어가 있어도 개발 대기열에 묶여 검증이 늦어집니다." },
        ],
    resultsTitle: en ? "Results" : "성과",
    stats: en
      ? [
          { value: "100%", label: "MVP completion" },
          { value: "4 hours", label: "Workshop length" },
          { value: "4.67 / 5.0", label: "Participant rating" },
          { value: "SOC 2", label: "Enterprise security" },
        ]
      : [
          { value: "100%", label: "MVP 완성률" },
          { value: "4시간", label: "워크샵 소요 시간" },
          { value: "4.67/5.0", label: "참가자 만족도" },
          { value: "SOC2", label: "엔터프라이즈 보안" },
        ],
    relatedHeader: en ? "Different problem?" : "다른 과제라면",
    relatedArmy: en
      ? "Need growth marketing AI? → See ARMY"
      : "그로스 마케팅 AI가 필요하다면 → ARMY 보기",
    relatedArticul8: en
      ? "Need enterprise AI infrastructure? → See Articul8"
      : "엔터프라이즈 AI 인프라가 필요하다면 → Articul8 보기",
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white" style={{ borderTopWidth: 4, borderTopColor: "#F26522", borderTopStyle: "solid" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((s, i) => (
              <FadeInOnScroll key={i} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{s.value}</p>
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
              <Link href={localePrefix("/solutions/articul8", locale)} className="text-sm text-blue-600 hover:underline">{t.relatedArticul8}</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
