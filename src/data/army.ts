export interface Agent {
  id: string;
  name: string;
  category: string;
  funnelPhase: string;
  tagline: string;
  description: string;
  expertise: string;
  impactMetric: string;
  impactValue: string;
  color: string;
  lucideIcon: string;
  features: string[];
  heroLabel: string;
  heroH1: string;
  heroSub: string;
  trustCopy: string;
  problems: { title: string; body: string }[];
  steps: { title: string; description: string }[];
  results: { metric: string; before: string; after: string }[];
  relatedAgents: string[];
  demoUrl?: string;
}

export const agents: Agent[] = [
  {
    id: "geo-agent",
    name: "GEO Agent",
    category: "AI 검색 최적화",
    funnelPhase: "Discovery",
    tagline: "AI 검색에서 우리 브랜드가 먼저 나오게",
    description: "ChatGPT, Perplexity 등 AI 검색에서 브랜드 인용 1순위로 최적화",
    expertise: "250+ 컨설팅 노하우",
    impactMetric: "AI 추천 전환율",
    impactValue: "3.2배",
    color: "#06B6D4",
    lucideIcon: "Globe",
    features: [
      "Schema 자동 변환",
      "LLM 인용 극대화",
      "수만 페이지 자동 분석",
      "CDN 기반 딜리버리",
    ],
    heroLabel: "ARMY의 GEO Agent — Discovery",
    heroH1: "AI 검색에서 브랜드가 먼저 인용되게",
    heroSub: "ChatGPT, Perplexity, Gemini 등 AI 검색 엔진에서 브랜드 노출을 체계적으로 최적화합니다. 수만 페이지도 자동으로 분석하고 대응합니다.",
    trustCopy: "SEO에서 GEO로 — 검색의 패러다임이 바뀌고 있습니다. 마켓핏랩은 250개 이상의 디지털 마케팅 프로젝트에서 축적한 검색 최적화 노하우를 AI 검색 시대에 맞게 재설계했습니다.",
    problems: [
      { title: "기존 SEO만으로는 한계", body: "AI 검색 엔진은 기존 SEO 규칙과 다릅니다. 키워드 최적화만으로는 AI에게 선택받을 수 없습니다." },
      { title: "수만 페이지 수동 대응 불가", body: "대규모 사이트의 모든 페이지를 AI 검색에 최적화하려면 자동화가 필수입니다." },
      { title: "지속적 모니터링 필요", body: "AI 검색 알고리즘은 계속 변합니다. 실시간으로 추적하고 대응해야 경쟁력을 유지할 수 있습니다." },
    ],
    steps: [
      { title: "분석·진단", description: "현재 AI 검색 노출 현황을 자동 분석합니다." },
      { title: "콘텐츠 생성", description: "AI 검색에 최적화된 구조화 콘텐츠를 생성합니다." },
      { title: "수정·최적화", description: "Schema, 메타데이터 등을 자동으로 최적화합니다." },
      { title: "배포·모니터링", description: "CDN을 통해 배포하고 성과를 실시간 모니터링합니다." },
    ],
    results: [
      { metric: "AI 추천 전환율", before: "기존 대비", after: "3.2배 상승" },
      { metric: "페이지 분석 속도", before: "수동 작업", after: "자동화" },
    ],
    relatedAgents: ["lmf-agent", "cro-agent"],
  },
  {
    id: "lmf-agent",
    name: "LMF Agent",
    category: "광고 마케팅 자동화",
    funnelPhase: "Acquisition",
    tagline: "광고 소재부터 집행·최적화까지 자동화",
    description: "수십 개 프로젝트로 검증된 Language Market-Fit 프레임워크",
    expertise: "검증된 LMF 플레이북",
    impactMetric: "CTR / ROAS",
    impactValue: "+87% / 3배",
    color: "#EC4899",
    lucideIcon: "Megaphone",
    features: [
      "Slack 대화형 인터페이스",
      "AI 이미지/카피 생성",
      "Meta 캠페인 자동화",
      "성공 방정식 도출",
    ],
    heroLabel: "ARMY의 LMF Agent — Acquisition",
    heroH1: "알아서 광고 돌리고 최적화하는 에이전트팀",
    heroSub: "퍼소나 분석, 소구점 도출, 소재 생성, Meta 집행까지. 검증된 LMF 플레이북이 에이전트에 내장되어 있습니다.",
    trustCopy: "수십 개 프로젝트에서 검증된 LMF 플레이북이 에이전트의 기반입니다. 소구점 도출부터 캠페인 최적화까지, 마켓핏랩의 실전 프레임워크가 작동합니다.",
    problems: [
      { title: "감 기반 의존", body: "광고 소재를 감으로 만들고 있습니다. 체계적인 소구점 검증 프레임워크가 없습니다." },
      { title: "최소 3명 필요", body: "기획, 디자인, 미디어바잉까지 최소 3명이 필요합니다. 소규모 팀에서는 병목이 됩니다." },
      { title: "광고 라이브까지 10시간+", body: "아이디어에서 광고 집행까지 너무 오래 걸립니다. 경쟁사는 이미 돌리고 있습니다." },
    ],
    steps: [
      { title: "브랜드 리서치", description: "제품, 시장, 경쟁사를 자동으로 분석합니다." },
      { title: "퍼소나 생성", description: "데이터 기반 타겟 퍼소나를 생성합니다." },
      { title: "소구점 도출", description: "LMF 프레임워크로 Value Promise를 도출합니다." },
      { title: "소재 생성", description: "AI 카피 + 이미지를 자동 생성합니다." },
      { title: "캠페인 집행", description: "Meta 캠페인을 자동 세팅하고 집행합니다." },
      { title: "성과 분석", description: "실시간 성과를 분석하고 최적화합니다." },
    ],
    results: [
      { metric: "광고 CTR", before: "기존 대비", after: "+87% 성장" },
      { metric: "ROAS", before: "기존 대비", after: "최대 3배" },
      { metric: "소재 제작 시간", before: "10시간+", after: "1시간 이내" },
    ],
    relatedAgents: ["cro-agent", "geo-agent"],
  },
  {
    id: "cro-agent",
    name: "CRO Agent",
    category: "전환율 최적화",
    funnelPhase: "Conversion",
    tagline: "가설부터 실험 세팅까지, 혼자서 다 하는 CRO",
    description: "7년 3,000+회 AB 실험이 학습된 자율주행 CRO 머신",
    expertise: "7년 3,000회 AB 실험 데이터",
    impactMetric: "실험 속도",
    impactValue: "최대 21배",
    color: "#7C3AED",
    lucideIcon: "FlaskConical",
    features: [
      "5개 멀티 에이전트 협업",
      "브라우저 기반 자율 진단",
      "VWO 자동 세팅",
      "실험 설계서 자동 작성",
    ],
    heroLabel: "ARMY의 CRO Agent — Conversion",
    heroH1: "자율주행 CRO 실험, 가설부터 세팅까지",
    heroSub: "URL 하나면 진단부터 가설 도출, 실험 설계, VWO 세팅까지. 팀은 의사결정만 하면 됩니다.",
    trustCopy: "단순 AB 테스트 코드 생성기가 아닙니다. '무엇을, 왜 테스트해야 하는가'에 스스로 답하는 에이전트입니다.",
    problems: [
      { title: "실험 인력 부족", body: "AB 테스트를 돌리고 싶지만 전담 인력이 없습니다. 마케터가 기획부터 세팅까지 전부 해야 합니다." },
      { title: "개발팀 우선순위 밀림", body: "실험 세팅을 개발팀에 요청하면 2~3주 기다려야 합니다. 실험 속도가 조직 구조에 묶입니다." },
      { title: "1실험당 1~3주", body: "가설 수립부터 런칭까지 1~3주가 걸립니다. 한 달에 2~3개 실험이 한계입니다." },
    ],
    steps: [
      { title: "URL 제공", description: "테스트할 페이지 URL을 던집니다." },
      { title: "자율 진단", description: "에이전트가 페이지를 분석하고 문제를 진단합니다." },
      { title: "가설 도출", description: "ICE 스코어 기반 가설 10개를 도출합니다." },
      { title: "실험 설계", description: "선택한 가설의 실험 설계서를 자동 작성합니다." },
      { title: "세팅 & QA", description: "VWO에 실험을 직접 세팅하고 QA합니다." },
      { title: "런칭", description: "검수 후 실험을 런칭합니다." },
    ],
    results: [
      { metric: "실험 속도", before: "1~3주", after: "1일" },
      { metric: "가설 도출", before: "수동 브레인스토밍", after: "ICE 기반 10개/1초" },
    ],
    relatedAgents: ["lmf-agent", "lead-magnet-agent"],
  },
  {
    id: "lead-magnet-agent",
    name: "Lead Magnet Agent",
    category: "바이럴 루프",
    funnelPhase: "Engagement",
    tagline: "계산기, 추천 퀴즈, 진단 도구 — 리드를 모으는 인터랙티브 웹앱",
    description: "계산기, 추천 퀴즈, 진단 도구 — 리드를 모으는 인터랙티브 웹앱",
    expertise: "바이럴 루프 설계",
    impactMetric: "콘텐츠 제작",
    impactValue: "5배 단축",
    color: "#F59E0B",
    lucideIcon: "Magnet",
    features: [
      "Product Finder",
      "Fan Trivia / 퀴즈",
      "기획전 자동 생성",
      "SNS 바이럴 최적화",
    ],
    heroLabel: "ARMY의 Lead Magnet Agent — Engagement",
    heroH1: "방문자가 참여하고, 리드는 자동으로 쌓입니다",
    heroSub: "상품 카탈로그, 계산기, 진단 도구 — 대화 한 번으로 생성",
    trustCopy: "리드마그넷은 고객 정보를 얻기 위해 제공하는 참여형 도구입니다. 계산기, 퀴즈, 카탈로그처럼 방문자가 직접 사용하는 과정에서 리드 데이터가 자연스럽게 수집됩니다. 마켓핏랩의 CRO·LMF 프로젝트에서 검증된 전환 설계가 에이전트에 내장되어 있습니다.",
    problems: [
      { title: "기획/개발 리소스 부족", body: "인터랙티브 콘텐츠를 만들려면 기획, 디자인, 개발이 모두 필요합니다." },
      { title: "오가닉 트래픽 한계", body: "광고 의존도가 높고, 오가닉으로 유입을 만들 방법이 마땅치 않습니다." },
      { title: "고객 데이터 수집 어려움", body: "방문자 정보를 자연스럽게 수집할 수 있는 접점이 부족합니다." },
    ],
    steps: [
      { title: "목표 설정", description: "리드 수집 목표와 타겟을 정의합니다." },
      { title: "콘텐츠 기획", description: "바이럴 메커니즘이 설계된 콘텐츠를 기획합니다." },
      { title: "자동 생성", description: "퀴즈, 추천 등 인터랙티브 콘텐츠를 자동 생성합니다." },
      { title: "배포 & 바이럴", description: "SNS 최적화 배포로 바이럴 루프를 형성합니다." },
    ],
    results: [
      { metric: "콘텐츠 제작 시간", before: "2~3주", after: "5배 이상 단축" },
      { metric: "리드 전환", before: "일반 랜딩", after: "바이럴 루프 형성" },
    ],
    relatedAgents: ["cro-agent", "lmf-agent"],
    demoUrl: "https://pfinder.aicantalk.com/",
  },
  {
    id: "voice-agent",
    name: "Voice Agent",
    category: "AI 보이스 에이전트",
    funnelPhase: "Retention",
    tagline: "리드 들어오면 2분 내 AI가 전화합니다",
    description: "리드 유입 2분 내 즉시 콜, 24/7 AI 콜센터",
    expertise: "HMCA 등 실전 운영",
    impactMetric: "연결률",
    impactValue: "6.9배",
    color: "#4361EE",
    lucideIcon: "Phone",
    features: [
      "2분 이내 즉시 콜",
      "LQA + FUA 자동화",
      "컨텍스트 주입",
      "Zero Retention 보안",
    ],
    heroLabel: "ARMY의 Voice Agent — Retention",
    heroH1: "리드 유입 2분 내 즉시 콜, 24/7",
    heroSub: "폼 제출 즉시 AI가 전화합니다. 고객 맥락을 파악하고, 적합한 담당자에게 자동 연결. 연결률과 전환율을 동시에 끌어올립니다.",
    trustCopy: "글로벌 자동차 OEM의 AI 콜센터를 구축·운영한 실전 경험. 단순 자동응답이 아닌, 고객 맥락을 이해하고 비즈니스 성과로 연결하는 에이전트입니다.",
    problems: [
      { title: "8% 전화 연결률", body: "리드가 들어와도 전화가 연결되지 않습니다. 대부분의 리드가 응답 지연으로 이탈합니다." },
      { title: "Lead→Sales 1% 전환", body: "리드에서 실제 세일즈로 전환되는 비율이 극히 낮습니다." },
      { title: "응답 지연 수시간+", body: "리드 유입부터 첫 컨택까지 수시간이 걸립니다. 골든타임을 놓칩니다." },
    ],
    steps: [
      { title: "즉시 콜", description: "폼 제출 2분 이내 AI가 전화합니다." },
      { title: "스마트 라우팅", description: "고객 맥락을 파악하고 적합한 담당자에게 연결합니다." },
      { title: "리드 검증", description: "LQA로 리드 품질을 자동 검증합니다." },
      { title: "CRM 동기화", description: "통화 결과를 CRM에 자동 기록합니다." },
      { title: "관리 콘솔", description: "전체 통화 현황을 실시간 모니터링합니다." },
    ],
    results: [
      { metric: "전화 연결률", before: "8%", after: "54.8% (6.9배)" },
      { metric: "리드-세일즈 전환율", before: "기존 대비", after: "3.6배" },
    ],
    relatedAgents: ["lmf-agent", "cro-agent"],
    demoUrl: "https://demo.bringtalk.ai/",
  },
  {
    id: "mmm-agent",
    name: "MMM Agent",
    category: "마케팅 예산 최적화",
    funnelPhase: "Optimization",
    tagline: "채널별 기여도를 정밀 분석, 예산 배분 최적화",
    description: "최신 오픈소스 MMM 기반 채널 기여도 분석 + 예산 배분 시뮬레이션",
    expertise: "최신 MMM 모델 기반",
    impactMetric: "Global ROAS",
    impactValue: "극대화",
    color: "#10B981",
    lucideIcon: "PieChart",
    features: [
      "Meridian · Robyn 병용",
      "예산 시뮬레이션",
      "크로스 채널 분석",
      "실시간 대시보드",
    ],
    heroLabel: "ARMY의 MMM Agent — Optimization",
    heroH1: "예산, 감이 아니라 데이터로 배분합니다",
    heroSub: "Meta, Google, TikTok 등 채널별 기여도를 Google Meridian·Meta Robyn 등 최신 오픈소스 MMM으로 과학적으로 분석하고, 최적 예산 배분 시나리오를 시뮬레이션합니다.",
    trustCopy: "Last-click 어트리뷰션의 한계를 넘어, 상위 퍼널 채널의 기여도까지 정밀 분석합니다. 마켓핏랩이 250개 이상 프로젝트에서 쌓은 채널 분석 노하우와 Google Meridian·Meta Robyn 등 최신 오픈소스 MMM 기술을 결합했습니다.",
    problems: [
      { title: "채널별 기여도 불투명", body: "Meta, Google, TikTok 등 다채널 운영 중이지만 어떤 채널이 실제로 매출에 기여하는지 모릅니다." },
      { title: "감 기반 예산 배분", body: "마케팅 예산을 경험과 직감으로 배분하고, 과학적 근거 없는 의사결정이 반복됩니다." },
      { title: "크로스 채널 분석 한계", body: "Last-click 어트리뷰션에 의존하여 상위 퍼널 채널의 기여도가 과소 평가됩니다." },
    ],
    steps: [
      { title: "데이터 수집", description: "채널별 마케팅 지출 및 성과 데이터를 통합합니다." },
      { title: "모델링", description: "Meridian·Robyn 등 최신 MMM으로 Marketing Mix Modeling을 실행합니다." },
      { title: "기여도 분석", description: "채널별 실제 매출 기여도(Attribution)를 정밀 분석합니다." },
      { title: "예산 최적화", description: "최적 매체 조합과 예산 배분 시나리오를 시뮬레이션합니다." },
    ],
    results: [
      { metric: "예산 배분", before: "감 기반", after: "데이터 기반" },
      { metric: "채널 기여도", before: "Last-click", after: "전체 퍼널 분석" },
      { metric: "Global ROAS", before: "채널별 분산", after: "통합 최적화" },
    ],
    relatedAgents: ["lmf-agent", "voice-agent"],
  },
];

export const armyOverview = {
  heroLabel: "Agents Running Marketing for You",
  heroH1: "ARMY",
  heroSub: "실험은 에이전트가. 판단은 사람이.",
  heroSubDetail:
    "7년간 3,000번의 실험에서 쌓인 노하우가, 5개 에이전트에 들어 있습니다. 리서치부터 가설, 실험, 분석까지 — 그로스 마케팅의 반복을 줄이고, 판단에 집중하게 합니다.",
  differentiators: [
    {
      number: "01",
      title: "5명 몫의 실행력을, 에이전트가 채웁니다",
      body: "소재 제작, 실험 세팅, 데이터 정리 — 사람이 반복하던 업무를 에이전트가 처리합니다. 적은 인원으로도 실험을 멈추지 않습니다.",
      bodyExtended:
        "마켓핏랩은 7년간 250개 이상의 프로젝트에서 3,000번이 넘는 AB 실험을 직접 수행했습니다. 이 실패와 성공의 패턴을 스킬(Skill) 단위로 에이전트에 학습시켰습니다. CRO Agent의 가설 생성, LMF Agent의 소구점 도출 프레임워크는 일반 GPT가 흉내 낼 수 없는 실전 자산입니다.",
    },
    {
      number: "02",
      title: "실행이 아니라,\n가설부터 책임집니다",
      body: "URL 하나를 주면 스스로 문제를 진단하고, 데이터 기반으로 가설을 세우고, 우선순위를 매깁니다. \"뭘 해야 하는지\"부터 답하는 에이전트입니다.",
      bodyExtended:
        '대부분의 AI 자동화는 "이것을 해줘"라는 명령에 반응합니다. ARMY의 에이전트는 다릅니다. URL 하나를 주면 스스로 문제를 진단하고, 데이터 기반으로 가설을 제안하고, 우선순위를 매깁니다. 단순 실행 자동화가 아닌, 가설 제안과 정교화의 컨설팅 영역까지 포함합니다.',
    },
    {
      number: "03",
      title: "노하우가 사람이 아니라, 시스템에 쌓입니다",
      body: "실험의 판단 기준과 맥락이 에이전트의 스킬로 축적됩니다. 사람이 바뀌어도 조직의 실험 역량은 유지됩니다.",
      bodyExtended:
        '그로스팀의 에너지는 \'노가다\'가 아니라 \'의사결정\'에 쓰여야 합니다. "이 가설이 우리 브랜드의 방향성과 맞는가?", "이 실험 결과를 통해 우리가 배운 본질은 무엇인가?" 휴먼은 루프 사이에서 directing하고 책임만 지면 됩니다.',
    },
  ],
  heritage: {
    stats: [
      { value: "7년", label: "그로스 마케팅 전문 운영" },
      { value: "3,000+", label: "AB 실험 레코드" },
      { value: "250+", label: "컨설팅 프로젝트" },
    ],
    quote: {
      text: "에이전트는 일을 대신 해주는 비서가 아니라, 우리가 문제를 다루는 방식을 축적하는 container다.",
    },
    clients: [
      "현대자동차",
      "LG전자",
      "SK네트웍스",
      "삼성전자",
      "LG CNS",
      "홈플러스",
      "클래스101",
      "카카오벤쳐스",
      "한국신용데이터",
      "코오롱",
    ],
  },
  problems: [
    {
      number: "01",
      title: "5명이 할 일, 2명이 하고 있습니다",
      body: "AB 테스트, 광고 소재, SEO를 동시에 돌리려면 최소 5명이 필요합니다. 대부분의 그로스팀은 그 절반도 안 됩니다.",
    },
    {
      number: "02",
      title: "도구는 넘치는데, 가설이 없습니다",
      body: '자동화 도구는 많습니다. 하지만 "무엇을, 왜 테스트해야 하는가"를 먼저 제안하는 도구는 없습니다.',
    },
    {
      number: "03",
      title: "시니어가 떠나면, 노하우도 사라집니다",
      body: "실험의 성패는 기록되지만, 판단의 맥락은 사람의 머릿속에만 있습니다. 조직이 아니라 개인에게 쌓이는 구조입니다.",
    },
  ],
  adoption: {
    headline: "도입이 막막하다면, 우리가 전부 도와드립니다",
    subheadline:
      "어디서부터 시작할지 고민할 필요 없습니다. 진단부터 설계, 구축, 운영까지 — 3,000번의 실험을 함께한 팀이 최전선에서 세팅합니다.",
    steps: [
      { title: "컨설팅 & 진단", description: "현재 과제와 퍼널 병목을 함께 진단하고, 도입 범위를 정합니다." },
      { title: "에이전트 설계", description: "임팩트가 큰 영역부터, 고객사에 최적화된 에이전트를 설계합니다." },
      { title: "구축 & 연동", description: "전용 워크스페이스에 배포하고, 기존 툴과 데이터를 연동합니다." },
      { title: "운영 & 고도화", description: "성과를 모니터링하며, 프롬프트와 스킬을 지속적으로 개선합니다." },
    ],
    options: [
      { name: "설치형", description: "에이전트 세팅 후 자체 운영" },
      { name: "코칭형", description: "마켓핏랩이 함께 운영하며 팀 역량 이전", recommended: true },
      { name: "풀서비스형", description: "마켓핏랩이 전담 운영" },
    ],
  },
  scenario: {
    headline: "실제로 이렇게 작동합니다",
    subheadline: "Slack에서 시작하고, 대시보드에서 관리합니다.",
    tabs: [
      {
        agent: "CRO Agent",
        channel: "# army-cro-channel",
        color: "#7C3AED",
        steps: [
          { role: "user", label: "마케터", text: 'PM이 "이 페이지 실험 가설 뽑아줘"라고 Slack에 URL을 던집니다.' },
          { role: "agent", label: "CRO Agent", text: "페이지를 자율 분석하고 가설 10개를 1초 만에 도출합니다." },
          { role: "user", label: "마케터", text: "PM이 가설을 선택하면, 에이전트가 AB 테스트를 직접 세팅하고 QA까지 완료합니다." },
          { role: "agent", label: "CRO Agent", text: "실험 결과가 나오면 다음 액션 인사이트까지 정리합니다." },
        ],
      },
      {
        agent: "LMF Agent",
        channel: "# army-lmf-channel",
        color: "#EC4899",
        steps: [
          { role: "user", label: "마케터", text: '"이 제품 광고 소재 만들어줘"라고 제품 URL을 공유합니다.' },
          { role: "agent", label: "LMF Agent", text: "브랜드·경쟁사를 자동 리서치하고 타겟 퍼소나와 소구점을 도출합니다." },
          { role: "user", label: "마케터", text: "소구점을 확인하면, AI가 카피와 이미지 소재를 자동 생성합니다." },
          { role: "agent", label: "LMF Agent", text: "Meta 캠페인을 자동 세팅하고 성과를 실시간 추적합니다." },
        ],
      },
      {
        agent: "Voice Agent",
        channel: "# army-voice-channel",
        color: "#4361EE",
        steps: [
          { role: "agent", label: "Voice Agent", text: "새 리드가 감지되었습니다. 2분 내 자동 콜을 시작합니다." },
          { role: "agent", label: "Voice Agent", text: "고객 맥락을 파악하고, 관심 제품에 맞춰 대화합니다." },
          { role: "agent", label: "Voice Agent", text: "리드 품질을 검증하고 적합한 담당자에게 자동 연결합니다." },
          { role: "agent", label: "Voice Agent", text: "통화 결과를 CRM에 자동 기록하고 후속 액션을 제안합니다." },
        ],
      },
    ],
  },
};

export const axSolutions = [
  {
    id: "army",
    name: "MFL ARMY",
    question: "마케팅 실험을 더 빠르게 돌리고 싶다",
    description: "그로스 마케팅 AI 자동화 — 5개 에이전트가 풀퍼널을 자동화",
    metric: "실험 속도 최대 21배",
    href: "#hero",
    color: "#36B1A7",
    highlight: true,
    target: "그로스 마케팅팀",
    subtitle: "마켓핏랩 그로스 마케팅 에이전트 군단",
    useCase: "AB 실험, 광고 최적화, 리드 전환",
    delivery: "Slack 기반 에이전트 파견",
    timeline: "2~4주 세팅",
  },
  {
    id: "replit",
    name: "Replit 바이브 코딩",
    question: "우리 팀도 직접 만들 수 있게 하고 싶다",
    description: "비개발자도 4시간 만에 웹앱 완성 — 조직의 AI 역량을 무장",
    metric: "MVP 완성률 100%",
    href: "https://replit.mfitlab.com/",
    color: "#F26522",
    highlight: false,
    target: "비개발 직군 전체",
    subtitle: "비개발자도 쉽게 하는 바이브코딩",
    useCase: "4시간 해커톤, 엔터프라이즈 도입",
    delivery: "워크샵 (4시간~1일)",
    timeline: "당일 완성",
  },
  {
    id: "articul8",
    name: "Articul8",
    question: "사내 데이터로 AI를 돌리고 싶다",
    description: "엔터프라이즈 맞춤형 GenAI 플랫폼 — 도메인 특화 AI 인프라 구축",
    metric: "TCO 5배 절감",
    href: "https://www.mfitlab.com/articul8/articul8",
    color: "#1E3A5F",
    highlight: false,
    target: "IT/데이터팀, C-Level",
    subtitle: "우리 데이터로 작동하는 엔터프라이즈 AI",
    useCase: "사내 문서 AI, 도메인 특화 모델",
    delivery: "온프레미스/클라우드 구축",
    timeline: "4~8주 구축",
  },
];

export const partners = [
  { name: "Mixpanel", description: "프로덕트 데이터 분석" },
  { name: "AppsFlyer", description: "모바일 어트리뷰션" },
  { name: "VWO", description: "AB 테스트 플랫폼" },
  { name: "Delight.ai", description: "AI 보이스 솔루션" },
  { name: "Replit", description: "바이브 코딩 플랫폼" },
  { name: "Articul8", description: "엔터프라이즈 GenAI" },
];
