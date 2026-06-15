import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더에도 package-lock.json이 있어 Turbopack이 작업 루트를 잘못 추론하는 문제 방지.
  // 이 프로젝트(army) 폴더를 루트로 고정해 node_modules(tailwindcss 등) 해석을 바로잡는다.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
