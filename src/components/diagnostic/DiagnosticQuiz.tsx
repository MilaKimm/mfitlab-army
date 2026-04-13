"use client";

import { useReducer, useRef, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import type { Choice, SolutionKey } from "@/data/diagnostic-quiz";
import { questions, resultCopyTemplates, SOLUTION_KEY_TO_ID } from "@/data/diagnostic-quiz";
import { agents } from "@/data/army";
import {
  calculateRawScores,
  normalizeScores,
  getTopRecommendations,
  detectFullFunnel,
  getAllScoresSorted,
  type Recommendation,
} from "@/lib/scoring";

/* ── State ── */
type Phase = "hero" | "question" | "results";

interface QuizState {
  phase: Phase;
  currentQuestion: number;
  answers: (Choice | null)[];
  direction: "forward" | "back";
  recommendations: Recommendation[] | null;
  allScores: { solutionKey: SolutionKey; solutionId: string; score: number }[] | null;
  isFullFunnel: boolean;
}

type QuizAction =
  | { type: "START" }
  | { type: "SELECT_ANSWER"; choice: Choice }
  | { type: "ADVANCE" }
  | { type: "GO_BACK" }
  | { type: "RESET" };

const initialState: QuizState = {
  phase: "hero",
  currentQuestion: 0,
  answers: Array(5).fill(null),
  direction: "forward",
  recommendations: null,
  allScores: null,
  isFullFunnel: false,
};

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return { ...state, phase: "question", currentQuestion: 0, answers: Array(5).fill(null), direction: "forward", recommendations: null, allScores: null, isFullFunnel: false };
    case "SELECT_ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = action.choice;
      return { ...state, answers: newAnswers, direction: "forward" };
    }
    case "ADVANCE": {
      const isLast = state.currentQuestion === questions.length - 1;
      if (isLast) {
        const validAnswers = state.answers.filter(Boolean) as Choice[];
        const raw = calculateRawScores(validAnswers);
        const normalized = normalizeScores(raw);
        const recommendations = getTopRecommendations(normalized);
        const isFullFunnel = detectFullFunnel(recommendations);
        const allScores = getAllScoresSorted(normalized);
        return { ...state, phase: "results", recommendations, allScores, isFullFunnel };
      }
      return { ...state, currentQuestion: state.currentQuestion + 1, direction: "forward" };
    }
    case "GO_BACK":
      if (state.currentQuestion <= 0) return state;
      return { ...state, currentQuestion: state.currentQuestion - 1, direction: "back" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

/* ── Slide variants ── */
const slideVariants = {
  enter: (direction: "forward" | "back") => ({ x: direction === "forward" ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: "forward" | "back") => ({ x: direction === "forward" ? -80 : 80, opacity: 0 }),
};

/* ── Badge style ── */
function getBadgeStyle(label: string) {
  switch (label) {
    case "Strong Match": return "bg-[#CCFFFC] text-[#15867E] border-[#A0EBE6]";
    case "Good Match": return "bg-blue-50 text-blue-700 border-blue-200";
    default: return "bg-gray-50 text-[#626166] border-[#E9E9E9]";
  }
}

/* ── Main Component ── */
export default function DiagnosticQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = useCallback((choice: Choice) => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    dispatch({ type: "SELECT_ANSWER", choice });
    timerRef.current = setTimeout(() => { dispatch({ type: "ADVANCE" }); timerRef.current = null; }, 400);
  }, []);

  const handleBack = useCallback(() => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    dispatch({ type: "GO_BACK" });
  }, []);

  const searchParams = useSearchParams();
  const autoStarted = useRef(false);
  useEffect(() => {
    if (searchParams.get("start") === "true" && state.phase === "hero" && !autoStarted.current) {
      autoStarted.current = true;
      dispatch({ type: "START" });
    }
  }, [searchParams, state.phase]);

  /* ── HERO ── */
  if (state.phase === "hero") {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-6 overflow-hidden bg-[#CCFFFC]/30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[60vw] h-[70vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gradient-to-b from-[#A0EBE6] via-[#65E3D0] to-[#CCFFFC] blur-[100px] opacity-20" />
          <div className="absolute left-[10%] top-[30%] w-[20vw] h-[30vh] rounded-full bg-[#DFF15D] opacity-8 blur-[120px]" />
          <div className="absolute right-[10%] bottom-[20%] w-[15vw] h-[25vh] rounded-full bg-[#BFE9EF] opacity-15 blur-[100px]" />
        </div>
        <div className="relative z-10">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block px-3 py-1 text-xs font-medium text-[#626166] bg-white/60 backdrop-blur-sm rounded-full mb-6">
            소요시간 2분
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-semibold text-[#1B1B1B] tracking-tight">
            우리 팀에 맞는<br />ARMY 에이전트 찾기
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-lg text-[#626166] max-w-md mx-auto">
            5개 질문, 2분이면 끝.<br />맞춤 에이전트를 추천합니다.
          </motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} whileTap={{ scale: 0.97 }} onClick={() => dispatch({ type: "START" })} className="mt-10 px-8 py-3.5 text-base font-semibold text-white bg-[#36B1A7] rounded-full hover:bg-[#15867E] transition-colors shadow-lg shadow-[#36B1A7]/20">
            진단 시작하기
          </motion.button>
        </div>
      </div>
    );
  }

  /* ── RESULTS ── */
  if (state.phase === "results" && state.recommendations && state.allScores) {
    return <QuizResultsView recommendations={state.recommendations} allScores={state.allScores} isFullFunnel={state.isFullFunnel} onReset={() => dispatch({ type: "RESET" })} />;
  }

  /* ── QUESTION ── */
  const currentQ = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] pt-8 pb-32">
      {/* Progress bar */}
      <div className="w-full max-w-lg mx-auto mb-8 px-6">
        <div className="flex justify-between text-xs text-[#9B9B9B] mb-2">
          <span>{state.currentQuestion + 1} / {questions.length}</span>
        </div>
        <div className="h-1.5 bg-[#F4F4F4] rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#36B1A7] rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: "easeOut" }} />
        </div>
      </div>

      {/* Question */}
      <div className="w-full max-w-lg mx-auto px-6">
        {state.currentQuestion > 0 && (
          <button onClick={handleBack} className="flex items-center gap-1 text-sm text-[#9B9B9B] hover:text-[#626166] transition-colors mb-6">
            <ArrowLeft size={14} /> 이전
          </button>
        )}
        <AnimatePresence mode="wait" custom={state.direction}>
          <motion.div key={currentQ.id} custom={state.direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: "easeOut" }}>
            <p className="text-xs font-medium text-[#9B9B9B] uppercase tracking-widest mb-2">Q{currentQ.id}. {currentQ.title}</p>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1B1B1B] mb-8">{currentQ.subtitle}</h2>
            <div className="space-y-3">
              {currentQ.choices.map((choice) => {
                const isSelected = state.answers[state.currentQuestion]?.id === choice.id;
                return (
                  <motion.button key={choice.id} whileTap={{ scale: 0.98 }} onClick={() => handleSelect(choice)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${isSelected ? "border-[#36B1A7] bg-[#36B1A7] text-white" : "border-[#E9E9E9] bg-white text-[#626166] hover:border-[#36B1A7]/40 hover:bg-[#F2FDFB]"}`}>
                    <span className="text-sm font-medium">{choice.text}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Results View ── */
function QuizResultsView({ recommendations, allScores, isFullFunnel, onReset }: {
  recommendations: Recommendation[];
  allScores: { solutionKey: SolutionKey; solutionId: string; score: number }[];
  isFullFunnel: boolean;
  onReset: () => void;
}) {
  const breakdownOpen = true;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#36B1A7] mb-3">진단 결과</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1B1B1B]">추천 ARMY 에이전트</h2>
      </motion.div>

      {/* Full-Funnel badge */}
      {isFullFunnel && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-center mb-8">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-[#CCFFFC]/50 text-[#15867E] border border-[#A0EBE6]">
            Full-Funnel Package 추천
          </span>
        </motion.div>
      )}

      {/* Recommendation cards */}
      <div className="space-y-4 mb-8">
        {recommendations.map((rec, i) => {
          const agent = agents.find((a) => a.id === rec.solutionId);
          if (!agent) return null;
          return (
            <motion.div key={rec.solutionKey} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }} className="rounded-2xl border border-[#E9E9E9] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${getBadgeStyle(rec.matchLabel)}`}>
                  {rec.matchLabel} — {rec.normalizedScore}%
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: agent.color }}>
                  {agent.funnelPhase}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#1B1B1B] mb-1">{agent.name}</h3>
              <p className="text-xs text-[#9B9B9B] mb-3">{agent.category}</p>
              <p className="text-sm text-[#626166] leading-relaxed mb-4">{resultCopyTemplates[rec.solutionKey]}</p>
              <Link href={`/army/${agent.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#36B1A7] hover:text-[#15867E] transition-colors">
                자세히 보기 <ArrowRight size={14} />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Score breakdown */}
      <div className="mt-8">
        <p className="text-sm font-medium text-[#9B9B9B] text-center">전체 에이전트 점수</p>
        <div className="mt-4 space-y-3 max-w-lg mx-auto">
          {allScores.map((item) => {
            const agent = agents.find((a) => a.id === item.solutionId);
            if (!agent) return null;
            return (
              <div key={item.solutionKey} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#626166] w-28 text-right shrink-0">{agent.name}</span>
                <div className="flex-1 h-2 bg-[#F4F4F4] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ backgroundColor: agent.color }} initial={{ width: 0 }} animate={{ width: `${item.score}%` }} transition={{ duration: 0.6, delay: 0.1 }} />
                </div>
                <span className="text-xs text-[#9B9B9B] w-10">{item.score}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTAs */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#36B1A7] rounded-full hover:bg-[#15867E] transition-colors shadow-lg shadow-[#36B1A7]/20">
          도입 상담 받기
        </Link>
        <button onClick={onReset} className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-semibold text-[#626166] border border-[#E9E9E9] rounded-full hover:bg-[#F4F4F4] transition-colors">
          <RotateCcw size={14} /> 다시 진단하기
        </button>
      </motion.div>
    </div>
  );
}

import React from "react";
