import Link from "next/link";
import { Brain } from "lucide-react";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";

export default function Articul8Page() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white" style={{ borderTopWidth: 4, borderTopColor: "#1E3A5F", borderTopStyle: "solid" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
            AI Transformation &gt; Articul8
          </p>
          <p className="text-sm text-gray-500 italic mb-3">
            &ldquo;사내 데이터로 AI를 돌리고 싶다면&rdquo;
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Articul8 — 엔터프라이즈 GenAI 플랫폼
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            엔터프라이즈의 도메인 데이터를 AI로 전환하는 맞춤형 GenAI 플랫폼. Intel 출신 팀이 만든 도메인 특화 모델(DSMs)로 TCO를 5배 절감합니다.
          </p>
          <Link href="#contact" className="h-12 px-6 inline-flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            도입 문의
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">왜 Articul8인가</h2>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "범용 AI의 한계", body: "ChatGPT 같은 범용 AI는 사내 도메인 지식을 모릅니다. 할루시네이션 리스크가 높습니다." },
              { title: "높은 도입 비용", body: "자체 AI 인프라 구축에 6~9개월, 대규모 투자가 필요합니다." },
              { title: "데이터 보안 우려", body: "사내 데이터를 외부 AI에 보낼 수 없는 규제 환경이 많습니다." },
            ].map((p, i) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">성과</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { value: "5배", label: "TCO 절감" },
              { value: "2개월", label: "ROI 달성 (6~9개월→)" },
              { value: "10배", label: "적은 인력 필요" },
            ].map((s, i) => (
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
            <p className="text-sm text-gray-500 mb-3">다른 과제라면</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/army" className="text-sm text-purple-600 hover:underline">그로스 마케팅 AI가 필요하다면 → ARMY 보기</Link>
              <Link href="/solutions/replit" className="text-sm text-orange-600 hover:underline">조직 AI 역량 강화가 필요하다면 → Replit 보기</Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
