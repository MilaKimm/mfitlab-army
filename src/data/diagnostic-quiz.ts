export type SolutionKey = "geo" | "lmf" | "cro" | "lead-magnet" | "voice" | "mmm";

export interface ScoreWeight {
  solution: SolutionKey;
  points: number;
}

export interface Choice {
  id: string;
  text: string;
  scores: ScoreWeight[];
  en?: { text: string };
}

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  choices: Choice[];
  en?: { title: string; subtitle: string };
}

export const SOLUTION_KEY_TO_ID: Record<SolutionKey, string> = {
  geo: "geo-agent",
  lmf: "lmf-agent",
  cro: "cro-agent",
  "lead-magnet": "lead-magnet-agent",
  voice: "voice-agent",
  mmm: "mmm-agent",
};

export const THEORETICAL_MAX: Record<SolutionKey, number> = {
  geo: 15,
  lmf: 13,
  cro: 24,
  "lead-magnet": 13,
  voice: 20,
  mmm: 16,
};

export const questions: Question[] = [
  {
    id: 1,
    title: "가장 큰 마케팅 과제",
    subtitle: "지금 팀에서 가장 급한 마케팅 과제는?",
    en: { title: "Biggest marketing gap", subtitle: "What's the most urgent issue on your team right now?" },
    choices: [
      { id: "a", text: "AI 검색(ChatGPT, Perplexity)에서 우리 브랜드가 안 나옴", scores: [{ solution: "geo", points: 5 }, { solution: "lmf", points: 1 }], en: { text: "Our brand doesn't surface in AI search (ChatGPT, Perplexity)." } },
      { id: "b", text: "광고 소재 제작이 느려서 캠페인 타이밍을 놓침", scores: [{ solution: "lmf", points: 5 }], en: { text: "Ad creative production is too slow — we miss campaign windows." } },
      { id: "c", text: "트래픽은 오는데 전환율이 낮음", scores: [{ solution: "cro", points: 5 }, { solution: "lead-magnet", points: 2 }], en: { text: "Traffic comes in, but conversion stays low." } },
      { id: "d", text: "인바운드 리드 응대가 느려서 이탈이 많음", scores: [{ solution: "voice", points: 5 }, { solution: "cro", points: 1 }], en: { text: "Slow lead response burns too many inbound leads." } },
    ],
  },
  {
    id: 2,
    title: "운영 병목",
    subtitle: "마케팅 운영에서 가장 답답한 부분은?",
    en: { title: "Operational bottleneck", subtitle: "What frustrates your marketing ops most?" },
    choices: [
      { id: "a", text: "감으로 예산 배분 — 채널별 ROI를 모름", scores: [{ solution: "mmm", points: 5 }, { solution: "lmf", points: 2 }, { solution: "cro", points: 1 }], en: { text: "Budget split by gut — we don't know per-channel ROI." } },
      { id: "b", text: "개발팀 우선순위에 밀려 실험을 못 돌림", scores: [{ solution: "cro", points: 5 }, { solution: "lead-magnet", points: 1 }], en: { text: "Dev queue blocks our experiments." } },
      { id: "c", text: "다국어/다시장 콘텐츠 제작이 안 따라감", scores: [{ solution: "lmf", points: 5 }, { solution: "geo", points: 2 }], en: { text: "Multi-market, multi-language content can't keep up." } },
      { id: "d", text: "고객 전화 응대에 인력이 너무 많이 들어감", scores: [{ solution: "voice", points: 5 }], en: { text: "Customer phone handling eats too much headcount." } },
    ],
  },
  {
    id: 3,
    title: "현재 역량",
    subtitle: "지금 가장 하고 싶지만 못 하고 있는 건?",
    en: { title: "Current capability", subtitle: "What do you want to do but can't today?" },
    choices: [
      { id: "a", text: "A/B 테스트를 하고 싶은데 리소스가 없음", scores: [{ solution: "cro", points: 5 }], en: { text: "Run A/B tests — but no resources to do it." } },
      { id: "b", text: "채널별 기여도를 정확히 측정하고 싶음", scores: [{ solution: "mmm", points: 5 }, { solution: "lmf", points: 2 }], en: { text: "Measure true per-channel contribution." } },
      { id: "c", text: "바이럴 콘텐츠를 만들고 싶은데 방법을 모름", scores: [{ solution: "lead-magnet", points: 5 }, { solution: "geo", points: 3 }], en: { text: "Ship viral content — don't know the playbook." } },
      { id: "d", text: "리드 응대를 자동화하고 싶음", scores: [{ solution: "voice", points: 5 }, { solution: "cro", points: 1 }], en: { text: "Automate lead response." } },
    ],
  },
  {
    id: 4,
    title: "AI 활용 희망 영역",
    subtitle: "AI가 가장 도움이 될 영역은?",
    en: { title: "Where AI helps most", subtitle: "Where would AI make the biggest difference?" },
    choices: [
      { id: "a", text: "오가닉 발견 — AI가 우리를 추천하게 만들기", scores: [{ solution: "geo", points: 5 }, { solution: "lead-magnet", points: 2 }], en: { text: "Organic discovery — get AI to recommend us." } },
      { id: "b", text: "퍼포먼스 마케팅 — 광고 소재를 빠르게, 많이", scores: [{ solution: "lmf", points: 5 }, { solution: "mmm", points: 2 }], en: { text: "Performance — more creative, faster." } },
      { id: "c", text: "온사이트 전환 — 방문자를 고객으로 바꾸기", scores: [{ solution: "cro", points: 5 }, { solution: "lead-magnet", points: 2 }], en: { text: "On-site conversion — turn visitors into customers." } },
      { id: "d", text: "고객 리텐션 — 콜, 해피콜, 재방문 유도", scores: [{ solution: "voice", points: 5 }], en: { text: "Retention — calls, follow-ups, win-back." } },
    ],
  },
  {
    id: 5,
    title: "팀 구성",
    subtitle: "팀 구성이 어떻게 되나요?",
    en: { title: "Team shape", subtitle: "What does your team look like?" },
    choices: [
      { id: "a", text: "마케팅팀만 있고 전담 개발자 없음", scores: [{ solution: "lead-magnet", points: 3 }, { solution: "lmf", points: 2 }], en: { text: "Marketing team only, no dedicated engineers." } },
      { id: "b", text: "그로스팀이 3개+ 채널을 운영 중", scores: [{ solution: "mmm", points: 4 }, { solution: "lmf", points: 3 }, { solution: "geo", points: 2 }], en: { text: "Growth team running 3+ channels." } },
      { id: "c", text: "이커머스팀이 전환 지표에 집중", scores: [{ solution: "cro", points: 5 }, { solution: "lead-magnet", points: 2 }], en: { text: "E-commerce team focused on conversion metrics." } },
      { id: "d", text: "세일즈/CS팀이 전화 응대 볼륨이 많음", scores: [{ solution: "voice", points: 5 }], en: { text: "Sales/CS team handling heavy call volume." } },
    ],
  },
];

export const resultCopyTemplates: Record<SolutionKey, string> = {
  geo: "AI 검색 노출이 과제라고 하셨죠. ARMY의 GEO Agent가 ChatGPT, Perplexity 등에서 브랜드 인용률을 높여드립니다.",
  lmf: "광고 소재 제작 속도가 병목이시군요. ARMY의 LMF Agent가 퍼소나 분석부터 소재 생성, 집행까지 자동화합니다.",
  cro: "전환율 개선이 급하시군요. ARMY의 CRO Agent가 분석→가설→실험→QA까지 자율 실행합니다.",
  "lead-magnet": "오가닉 참여와 바이럴이 필요하시군요. ARMY의 Lead Magnet Agent가 퀴즈, 기획전 등을 자동 생성합니다.",
  voice: "리드 응대 속도가 과제시군요. ARMY의 Voice Agent가 폼 제출 2분 내 즉시 콜, 24/7 대응합니다.",
  mmm: "채널별 예산 배분이 과제시군요. ARMY의 MMM Agent가 Meridian·Robyn 등 최신 오픈소스 MMM으로 기여도를 정밀 분석하고 최적 배분을 시뮬레이션합니다.",
};

export const resultCopyTemplatesEn: Record<SolutionKey, string> = {
  geo: "AI search visibility is your gap. ARMY's GEO Agent lifts brand citation across ChatGPT, Perplexity, and Gemini.",
  lmf: "Creative throughput is your bottleneck. ARMY's LMF Agent automates persona analysis, creative generation, and deployment.",
  cro: "Conversion is urgent. ARMY's CRO Agent runs analysis, hypotheses, experiments, and QA end to end.",
  "lead-magnet": "You need organic engagement and virality. ARMY's Lead Magnet Agent auto-generates quizzes, campaigns, and interactive assets.",
  voice: "Lead response time is the issue. ARMY's Voice Agent calls within 2 minutes of a form submit, 24/7.",
  mmm: "Budget allocation is the question. ARMY's MMM Agent uses Meridian, Robyn, and other modern MMM engines to measure contribution and simulate optimal spend.",
};
