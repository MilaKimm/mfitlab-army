"use client";

import { motion } from "framer-motion";

const figures = [
  { color1: "#06B6D4", color2: "#0891B2", height: 280, delay: 0 },
  { color1: "#EC4899", color2: "#DB2777", height: 300, delay: 0.08 },
  { color1: "#7C3AED", color2: "#6D28D9", height: 320, delay: 0.16 },
  { color1: "#4361EE", color2: "#3B51D3", height: 310, delay: 0.24 },
  { color1: "#F59E0B", color2: "#D97706", height: 290, delay: 0.32 },
  { color1: "#8B5CF6", color2: "#7C3AED", height: 305, delay: 0.4 },
  { color1: "#06B6D4", color2: "#4361EE", height: 295, delay: 0.48 },
];

function SilhouetteFigure({
  color1,
  color2,
  height,
  delay,
  index,
}: {
  color1: string;
  color2: string;
  height: number;
  delay: number;
  index: number;
}) {
  const gradientId = `silhouette-grad-${index}`;
  const glowId = `silhouette-glow-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
      className="relative"
      style={{ height, width: 90, marginLeft: index === 0 ? 0 : -20 }}
    >
      <svg
        viewBox="0 0 90 320"
        fill="none"
        className="absolute bottom-0 w-full"
        style={{ height }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={color1} stopOpacity="0.9" />
            <stop offset="50%" stopColor={color2} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color1} stopOpacity="0.1" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Head */}
        <ellipse
          cx="45"
          cy="35"
          rx="20"
          ry="24"
          fill={`url(#${gradientId})`}
          filter={`url(#${glowId})`}
        />
        {/* Neck */}
        <rect
          x="38"
          y="55"
          width="14"
          height="15"
          rx="7"
          fill={`url(#${gradientId})`}
          opacity="0.7"
        />
        {/* Body */}
        <path
          d="M10 320 L20 100 Q25 70 45 70 Q65 70 70 100 L80 320 Z"
          fill={`url(#${gradientId})`}
          filter={`url(#${glowId})`}
        />
        {/* Inner glow layers */}
        <path
          d="M18 320 L26 115 Q30 80 45 80 Q60 80 64 115 L72 320 Z"
          fill={color1}
          opacity="0.15"
        />
        <path
          d="M26 320 L32 130 Q35 95 45 95 Q55 95 58 130 L64 320 Z"
          fill={color2}
          opacity="0.1"
        />
      </svg>
    </motion.div>
  );
}

export default function HeroSilhouettes() {
  return (
    <div className="flex items-end justify-center">
      {figures.map((fig, i) => (
        <SilhouetteFigure key={i} {...fig} index={i} />
      ))}
    </div>
  );
}
