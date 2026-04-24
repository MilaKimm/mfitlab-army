"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FlaskConical } from "lucide-react";

const slackMessagesKo = [
  { sender: "PM Kim", isAgent: false, text: "이 페이지 실험 가설 뽑아줘: https://brand-a.com/product/detail" },
  { sender: "CRO Agent", isAgent: true, text: "페이지 분석 완료! 5개 가설을 도출했습니다.\n• [8.3] 할인 금액 강조 배지 추가\n• [7.8] CTA 버튼 색상 대비 강화\n• [7.5] 리뷰 섹션 상단 이동" },
  { sender: "PM Kim", isAgent: false, text: "1번으로 실험 설계하고 VWO에 세팅까지 해줘" },
  { sender: "CRO Agent", isAgent: true, text: "완료! VWO에 3개 Variant 세팅 + QA 통과했습니다." },
];

const slackMessagesEn = [
  { sender: "PM Kim", isAgent: false, text: "Pull experiment hypotheses for this page: https://brand-a.com/product/detail" },
  { sender: "CRO Agent", isAgent: true, text: "Page analyzed. 5 hypotheses ranked by ICE:\n• [8.3] Add discount amount badge\n• [7.8] Boost CTA color contrast\n• [7.5] Move reviews above the fold" },
  { sender: "PM Kim", isAgent: false, text: "Go with #1. Design the test and set it up in VWO." },
  { sender: "CRO Agent", isAgent: true, text: "Done. 3 variants configured in VWO, QA passed." },
];

const mobileScreens = [
  { label: "CONTROL", image: "/cases/cro-mobile-control.png" },
  { label: "VAR 1", image: "/cases/cro-mobile-variation.png" },
  { label: "VAR 2", image: "/cases/cro-mobile-variation2.png" },
];

export default function AgentDemo() {
  const pathname = usePathname() || "/";
  const en = pathname === "/en" || pathname.startsWith("/en/");
  const slackMessages = en ? slackMessagesEn : slackMessagesKo;
  const [phase, setPhase] = useState<"slack" | "mobile">("slack");
  const [visibleMessages, setVisibleMessages] = useState(0);

  const startCycle = useCallback(() => {
    setPhase("slack");
    setVisibleMessages(0);
  }, []);

  useEffect(() => {
    if (phase === "slack") {
      if (visibleMessages < slackMessages.length) {
        const timer = setTimeout(() => setVisibleMessages((v) => v + 1), 1200);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("mobile"), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => startCycle(), 5000);
      return () => clearTimeout(timer);
    }
  }, [phase, visibleMessages, startCycle]);

  return (
    <div className="min-h-[420px] flex items-center justify-center">
    <AnimatePresence mode="wait">
      {phase === "slack" ? (
        <motion.div
          key="slack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl overflow-hidden border border-[#E9E9E9] shadow-xl">
            <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-white text-xs font-medium ml-3"># cro-experiments</span>
            </div>
            <div className="bg-white p-5 space-y-3 min-h-[240px]">
              {slackMessages.slice(0, visibleMessages).map((msg, mi) => (
                <motion.div
                  key={mi}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: msg.isAgent ? "#7C3AED" : "#9CA3AF" }}
                  >
                    {msg.isAgent ? <FlaskConical size={14} /> : "U"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-[#1B1B1B]">{msg.sender}</span>
                    <p className="text-xs text-[#626166] mt-0.5 whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 overflow-x-auto pb-2"
        >
          {mobileScreens.map((screen, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.15, duration: 0.4 }}
              className="flex-shrink-0 w-[180px]"
            >
              <p className="text-[10px] font-semibold text-[#9B9B9B] text-center mb-2 uppercase tracking-wider">
                {screen.label}
              </p>
              <div className="rounded-2xl overflow-hidden border-2 border-[#E9E9E9] shadow-md bg-white">
                <Image
                  src={screen.image}
                  alt={screen.label}
                  width={180}
                  height={360}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
