"use client";

import { motion } from "framer-motion";

/*
 * 7 translucent silhouette figures with layered gradients.
 * - Much larger than before, filling the hero width
 * - Shoulders overlap slightly, heights vary
 * - Bottom fades out with a gradient mask (no hard cut)
 * - Multiple translucent layers per figure for depth
 */

const figures = [
  { colors: ["#06B6D4", "#67E8F9", "#0E7490"], h: 420, xOff: 0, delay: 0 },
  { colors: ["#EC4899", "#F9A8D4", "#BE185D"], h: 460, xOff: 0, delay: 0.06 },
  { colors: ["#7C3AED", "#C4B5FD", "#5B21B6"], h: 500, xOff: 0, delay: 0.12 },
  { colors: ["#4361EE", "#93C5FD", "#1E3A8A"], h: 480, xOff: 0, delay: 0.18 },
  { colors: ["#F59E0B", "#FDE68A", "#B45309"], h: 440, xOff: 0, delay: 0.24 },
  { colors: ["#8B5CF6", "#DDD6FE", "#6D28D9"], h: 470, xOff: 0, delay: 0.30 },
  { colors: ["#06B6D4", "#A5F3FC", "#4361EE"], h: 450, xOff: 0, delay: 0.36 },
];

function Figure({
  colors,
  h,
  delay,
  index,
}: {
  colors: string[];
  h: number;
  delay: number;
  index: number;
}) {
  const [c1, c2, c3] = colors;
  const gId = `fig-g-${index}`;
  const gId2 = `fig-g2-${index}`;
  const gId3 = `fig-g3-${index}`;
  const blurId = `fig-blur-${index}`;
  const fadeId = `fig-fade-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeOut" }}
      className="relative shrink-0"
      style={{
        width: 140,
        height: h,
        marginLeft: index === 0 ? 0 : -30,
        zIndex: index === 3 ? 10 : 7 - Math.abs(index - 3),
      }}
    >
      <svg
        viewBox="0 0 140 500"
        fill="none"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Main gradient: top opaque, bottom transparent */}
          <linearGradient id={gId} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={c1} stopOpacity="0.85" />
            <stop offset="35%" stopColor={c2} stopOpacity="0.5" />
            <stop offset="70%" stopColor={c1} stopOpacity="0.25" />
            <stop offset="100%" stopColor={c2} stopOpacity="0" />
          </linearGradient>
          {/* Inner layer gradient */}
          <linearGradient id={gId2} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor={c2} stopOpacity="0.4" />
            <stop offset="50%" stopColor={c1} stopOpacity="0.15" />
            <stop offset="100%" stopColor={c3} stopOpacity="0" />
          </linearGradient>
          {/* Core highlight */}
          <linearGradient id={gId3} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="40%" stopColor={c2} stopOpacity="0.1" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </linearGradient>
          {/* Soft blur for glow */}
          <filter id={blurId}>
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Fade mask for bottom */}
          <linearGradient id={fadeId} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id={`fig-mask-${index}`}>
            <rect x="0" y="0" width="140" height="500" fill={`url(#${fadeId})`} />
          </mask>
        </defs>

        <g mask={`url(#fig-mask-${index})`}>
          {/* Outer body — widest, most transparent */}
          <path
            d="M5 500 L18 145 Q25 80 45 55 L50 45 Q55 35 70 35 Q85 35 90 45 L95 55 Q115 80 122 145 L135 500 Z"
            fill={`url(#${gId})`}
            filter={`url(#${blurId})`}
          />

          {/* Head — large ellipse with glow */}
          <ellipse
            cx="70"
            cy="52"
            rx="28"
            ry="34"
            fill={`url(#${gId})`}
            filter={`url(#${blurId})`}
          />

          {/* Middle body layer */}
          <path
            d="M20 500 L30 160 Q38 95 55 70 Q62 58 70 58 Q78 58 85 70 Q102 95 110 160 L120 500 Z"
            fill={`url(#${gId2})`}
          />

          {/* Inner highlight body */}
          <path
            d="M35 500 L42 175 Q48 110 60 85 Q65 72 70 72 Q75 72 80 85 Q92 110 98 175 L105 500 Z"
            fill={`url(#${gId3})`}
          />

          {/* Head inner glow */}
          <ellipse
            cx="70"
            cy="50"
            rx="18"
            ry="22"
            fill={c2}
            opacity="0.15"
          />

          {/* Neck area */}
          <ellipse
            cx="70"
            cy="78"
            rx="12"
            ry="10"
            fill={c1}
            opacity="0.2"
          />
        </g>
      </svg>
    </motion.div>
  );
}

export default function HeroSilhouettes() {
  return (
    <div className="flex items-end justify-center relative">
      {/* Extra bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      {figures.map((fig, i) => (
        <Figure key={i} {...fig} index={i} />
      ))}
    </div>
  );
}
