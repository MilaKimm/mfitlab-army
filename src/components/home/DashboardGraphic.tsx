"use client";

import { motion } from "framer-motion";

const kpiCards = [
  { label: "AI Search Visibility", value: "19.6%", before: "11.8%", change: "+66%", color: "#36B1A7" },
  { label: "Blended CAC", value: "₩361,000", before: "₩449,000", change: "-20%", color: "#36B1A7" },
  { label: "Landing CVR", value: "3.01%", before: "2.26%", change: "+33%", color: "#36B1A7" },
  { label: "Lead-to-Call", value: "52%", before: "38%", change: "+37%", color: "#7C3AED" },
  { label: "Call-to-Paid", value: "24%", before: "17%", change: "+41%", color: "#7C3AED" },
  { label: "90-day ROAS", value: "3.4", before: "2.1", change: "+62%", color: "#EC4899" },
];

const briefingItems = [
  "브랜드 검색 가시성 +18% (14일 기준)",
  "캠페인 메시지 분석: CAC 상승 신호",
  "랜딩 실험 Variant C: +21.4% 전환 우위",
  "무료 전환 리드 → 콜 연결 전 이탈 31%",
];

const barData = [
  { label: "GEO", heights: [40, 55, 70, 82], color: "#06B6D4" },
  { label: "LMF", heights: [30, 45, 52, 68], color: "#EC4899" },
  { label: "CRO", heights: [50, 60, 75, 90], color: "#7C3AED" },
  { label: "Lead", heights: [25, 40, 55, 65], color: "#F59E0B" },
  { label: "Voice", heights: [35, 50, 62, 78], color: "#4361EE" },
];

export default function DashboardGraphic() {
  return (
    <div className="rounded-2xl border border-[#E9E9E9] bg-white shadow-xl overflow-hidden">
      {/* Title bar */}
      <div className="bg-[#1B1B1B] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-gray-400 ml-2 font-mono">ARMY Dashboard</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[180px] bg-[#FAFAFA] border-r border-[#E9E9E9] p-3 hidden md:block">
          <div className="text-sm font-semibold text-[#1B1B1B] mb-1">ARMY</div>
          <div className="text-[10px] text-[#9B9B9B] mb-4">Your Growth Agent Army</div>

          <div className="space-y-0.5 mb-3">
            <div className="text-[10px] font-semibold text-[#36B1A7] bg-[#E8FBF9] rounded px-2 py-1.5">Growth Cockpit</div>
            <div className="text-[10px] text-[#9B9B9B] px-2 py-1">Command Center</div>
          </div>

          <div className="text-[9px] font-semibold text-[#9B9B9B] uppercase tracking-wider mb-2 px-2">Growth Agents</div>
          {[
            { name: "GEO", color: "#06B6D4", stat: "Visibility 19.6%" },
            { name: "LMF", color: "#EC4899", stat: "JP CAC ↓ 리뷰" },
            { name: "CRO", color: "#7C3AED", stat: "CVR +23.2%" },
            { name: "Lead Mag…", color: "#F59E0B", stat: "CPR ₩16,400" },
            { name: "Voice", color: "#4361EE", stat: "Hit율 31%" },
          ].map((agent) => (
            <div key={agent.name} className="flex items-center gap-1.5 px-2 py-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: agent.color }} />
              <span className="text-[10px] text-[#626166]">{agent.name}</span>
              <span className="text-[9px] text-[#C0C0C0] ml-auto">{agent.stat}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-5">
          {/* Briefing */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-[9px] text-[#36B1A7] font-semibold uppercase tracking-wider">Daily Briefing</p>
                <p className="text-sm font-semibold text-[#1B1B1B]">오늘의 Growth Briefing</p>
              </div>
              <span className="text-[10px] text-[#C0C0C0]">2026년 4월 4일</span>
            </div>
            <div className="space-y-1">
              {briefingItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className="flex items-start gap-1.5"
                >
                  <span className="text-[10px] text-[#36B1A7] mt-0.5">•</span>
                  <span className="text-[10px] text-[#626166]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-5">
            {kpiCards.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-[#FAFAFA] rounded-lg p-2.5 border border-[#E9E9E9]"
              >
                <p className="text-[8px] text-[#9B9B9B] mb-1 leading-tight">{kpi.label}</p>
                <motion.p
                  className="text-base font-semibold text-[#1B1B1B]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  {kpi.value}
                </motion.p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[8px] text-[#C0C0C0]">Before {kpi.before}</span>
                  <span className="text-[8px] font-semibold" style={{ color: kpi.color }}>
                    {kpi.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bar Chart — Agent Performance */}
          <div className="bg-[#FAFAFA] rounded-lg p-3 border border-[#E9E9E9]">
            <p className="text-[9px] font-semibold text-[#9B9B9B] uppercase tracking-wider mb-3">Agent Performance (4주)</p>
            <div className="flex items-end justify-around gap-3 h-[80px]">
              {barData.map((agent, ai) => (
                <div key={ai} className="flex flex-col items-center gap-1 flex-1">
                  <div className="flex items-end gap-[2px] h-[60px]">
                    {agent.heights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        className="w-[6px] md:w-[8px] rounded-t"
                        style={{ backgroundColor: agent.color, opacity: 0.4 + hi * 0.2 }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + ai * 0.1 + hi * 0.08, duration: 0.6, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  <span className="text-[8px] text-[#9B9B9B]">{agent.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
