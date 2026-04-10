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
      <div
        className="w-full"
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      >
        <Image
          src="/hero-silhouettes.png"
          alt="ARMY 에이전트 군단"
          width={1600}
          height={600}
          priority
          className="w-full h-auto object-cover"
          style={{ maxHeight: "500px", objectPosition: "center top" }}
        />
      </div>
    </motion.div>
  );
}
