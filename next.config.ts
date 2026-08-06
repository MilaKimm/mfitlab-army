import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더에도 package-lock.json이 있어 Turbopack이 작업 루트를 잘못 추론하는 문제 방지.
  // 이 프로젝트(army) 폴더를 루트로 고정해 node_modules(tailwindcss 등) 해석을 바로잡는다.
  turbopack: {
    root: __dirname,
  },
  // LMF Agent는 별도 사이트로 독립 운영. 직접 URL·북마크·검색 유입까지 커버하는 안전망.
  // 307(임시) — 브라우저가 캐시하지 않아 되돌리기 쉽다.
  async redirects() {
    return [
      { source: "/army/lmf-agent", destination: "https://lmf.aicantalk.com/", permanent: false },
      { source: "/en/army/lmf-agent", destination: "https://lmf.aicantalk.com/", permanent: false },
    ];
  },
};

export default nextConfig;
