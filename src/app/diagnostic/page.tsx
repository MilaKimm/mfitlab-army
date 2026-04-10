"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

type AgentKey = "geo" | "lmf" | "cro" | "lead-magnet" | "voice";

const questions = [
  {
    question: "가장 큰 마케팅 과제는?",
    choices: [
      { text: "AI 검색(ChatGPT 등)에서 우리 브랜드가 안 나옴", scores: { geo: 5 } },
      { text: "광고 소재 제작·최적화가 너무 느림", scores: { lmf: 5 } },
      { text: "전환율 개선 실험을 돌릴 인력이 없음", scores: { cro: 5 } },
      { text: "리드는 들어오는데 응대가 늦음", scores: { voice: 5 } },
    ],
  },
  {
    question: "현재 가장 큰 운영 병목은?",
    choices: [
      { text: "마케팅 ROI 추적이 안 됨", scores: { lmf: 3, cro: 2 } },
      { text: "개발팀 우선순위에 실험이 밀림", scores: { cro: 5 } },
      { text: "콘텐츠 제작 리소스 부족", scores: { "lead-magnet": 5 } },
      { text: "고객 전화 연결률이 낮음", scores: { voice: 5 } },
    ],
  },
  {
    question: "현재 팀에서 가장 부족한 역량은?",
    choices: [
      { text: "A/B 테스트 설계·실행", scores: { cro: 5 } },
      { text: "채널별 기여도 분석", scores: { lmf: 3, geo: 2 } },
      { text: "바이럴 콘텐츠 기획", scores: { "lead-magnet": 5 } },
      { text: "데이터 기반 의사결정", scores: { cro: 2, lmf: 3 } },
    ],
  },
  {
    question: "AI를 가장 활용하고 싶은 영역은?",
    choices: [
      { text: "오가닉 발견·검색 최적화", scores: { geo: 5 } },
      { text: "광고 소재 자동 생성·집행", scores: { lmf: 5 } },
      { text: "온사이트 전환 실험", scores: { cro: 5 } },
      { text: "고객 리텐션·응대", scores: { voice: 5 } },
    ],
  },
  {
    question: "팀 구성은?",
    choices: [
      { text: "마케팅팀만 있고 개발자 없음", scores: { cro: 3, lmf: 2 } },
      { text: "멀티채널 마케팅 운영 중", scores: { lmf: 3, geo: 2 } },
      { text: "이커머스 중심 조직", scores: { cro: 3, "lead-magnet": 2 } },
      { text: "세일즈/CS 중심 조직", scores: { voice: 5 } },
    ],
  },
];

const resultCopy: Record<AgentKey, { text: string; href: string }> = {
  geo: {
    text: "AI 검색 노출이 과제라고 하셨죠. ARMY의 GEO Agent가 ChatGPT, Perplexity 등에서 브랜드 인용률을 높여드립니다.",
    href: "/army/geo-agent",
  },
  lmf: {
    text: "광고 소재 제작 속도가 병목이시군요. ARMY의 LMF Agent가 퍼소나 분석부터 소재 생성, 집행까지 자동화합니다.",
    href: "/army/lmf-agent",
  },
  cro: {
    text: "전환율 개선이 급하시군요. ARMY의 CRO Agent가 분석부터 가설, 실험, QA까지 자율 실행합니다.",
    href: "/army/cro-agent",
  },
  "lead-magnet": {
    text: "오가닉 참여와 바이럴이 필요하시군요. ARMY의 Lead Magnet Agent가 퀴즈, 기획전 등을 자동 생성합니다.",
    href: "/army/lead-magnet-agent",
  },
  voice: {
    text: "리드 응대 속도가 과제시군요. ARMY의 Voice Agent가 폼 제출 2분 내 즉시 콜, 24/7 대응합니다.",
    href: "/army/voice-agent",
  },
};

export default function DiagnosticPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<AgentKey, number>>({
    geo: 0,
    lmf: 0,
    cro: 0,
    "lead-magnet": 0,
    voice: 0,
  });
  const [done, setDone] = useState(false);

  const handleChoice = (choiceScores: Partial<Record<AgentKey, number>>) => {
    const newScores = { ...scores };
    for (const [key, val] of Object.entries(choiceScores)) {
      newScores[key as AgentKey] += val!;
    }
    setScores(newScores);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const topAgent = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as AgentKey;
  const result = resultCopy[topAgent];

  const reset = () => {
    setCurrentQ(0);
    setScores({ geo: 0, lmf: 0, cro: 0, "lead-magnet": 0, voice: 0 });
    setDone(false);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-xl mx-auto px-6 w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          우리 팀에 맞는 ARMY 에이전트를 찾아보세요
        </h1>
        <p className="text-gray-500 text-center mb-10 text-sm">
          5개 질문 · 약 2분 소요
        </p>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {currentQ + 1} / {questions.length}
                </span>
                <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all"
                    style={{
                      width: `${((currentQ + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQ].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQ].choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoice(choice.scores as Partial<Record<AgentKey, number>>)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition text-sm text-gray-700"
                  >
                    {choice.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
                추천 ARMY 에이전트
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {result.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={result.href}
                  className="h-12 px-6 flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                >
                  자세히 보기 <ArrowRight size={16} />
                </Link>
                <button
                  onClick={reset}
                  className="h-12 px-6 flex items-center justify-center gap-2 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition"
                >
                  <RotateCcw size={16} /> 다시 진단하기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
