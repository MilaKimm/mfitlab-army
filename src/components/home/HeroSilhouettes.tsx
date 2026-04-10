"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSilhouettes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      className="relative w-full -mt-32 md:-mt-48 pointer-events-none select-none"
    >
      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white to-transparent z-10" />

      <Image
        src="/hero-silhouettes.png"
        alt="ARMY 에이전트 군단"
        width={1600}
        height={600}
        priority
        className="w-full h-auto object-cover"
        style={{ maxHeight: "500px", objectPosition: "center top" }}
      />
    </motion.div>
  );
}
