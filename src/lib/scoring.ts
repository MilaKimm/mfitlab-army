import type { Choice, SolutionKey } from "@/data/diagnostic-quiz";
import { THEORETICAL_MAX, SOLUTION_KEY_TO_ID } from "@/data/diagnostic-quiz";
import { agents } from "@/data/army";

export interface Recommendation {
  solutionKey: SolutionKey;
  solutionId: string;
  normalizedScore: number;
  matchLabel: "Strong Match" | "Good Match" | "Potential Fit";
}

const ALL_KEYS: SolutionKey[] = ["geo", "lmf", "cro", "lead-magnet", "voice", "mmm"];

export function calculateRawScores(answers: Choice[]): Record<SolutionKey, number> {
  const raw: Record<SolutionKey, number> = { geo: 0, lmf: 0, cro: 0, "lead-magnet": 0, voice: 0, mmm: 0 };
  for (const answer of answers) {
    for (const sw of answer.scores) {
      raw[sw.solution] += sw.points;
    }
  }
  return raw;
}

export function normalizeScores(raw: Record<SolutionKey, number>): Record<SolutionKey, number> {
  const normalized = {} as Record<SolutionKey, number>;
  for (const key of ALL_KEYS) {
    normalized[key] = Math.round((raw[key] / THEORETICAL_MAX[key]) * 100);
  }
  return normalized;
}

export function getMatchLabel(score: number): "Strong Match" | "Good Match" | "Potential Fit" {
  if (score > 75) return "Strong Match";
  if (score >= 50) return "Good Match";
  return "Potential Fit";
}

export function getTopRecommendations(normalized: Record<SolutionKey, number>): Recommendation[] {
  const sorted = ALL_KEYS.map((key) => ({
    solutionKey: key,
    solutionId: SOLUTION_KEY_TO_ID[key],
    normalizedScore: normalized[key],
    matchLabel: getMatchLabel(normalized[key]),
  })).sort((a, b) => b.normalizedScore - a.normalizedScore) as Recommendation[];

  const top = sorted.slice(0, 3);
  if (top.length === 3 && top[2].normalizedScore < 25) {
    return top.slice(0, 2);
  }
  return top;
}

export function detectFullFunnel(recommendations: Recommendation[]): boolean {
  const phases = new Set<string>();
  for (const rec of recommendations) {
    const agent = agents.find((a) => a.id === rec.solutionId);
    if (agent?.funnelPhase) {
      phases.add(agent.funnelPhase);
    }
  }
  return phases.size >= 3;
}

export function getAllScoresSorted(normalized: Record<SolutionKey, number>): { solutionKey: SolutionKey; solutionId: string; score: number }[] {
  return ALL_KEYS.map((key) => ({
    solutionKey: key,
    solutionId: SOLUTION_KEY_TO_ID[key],
    score: normalized[key],
  })).sort((a, b) => b.score - a.score);
}
