"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RadarScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Pulsing targeting reticle ring */}
        <div className="absolute inset-0 rounded-full border border-[#00f0ff]/40 animate-ping" />
        <div className="absolute inset-1 rounded-full border border-[#00f0ff] opacity-80" />
        {/* Center dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] glow-cyan" />
      </div>

      <span className="font-hud text-[10px] tracking-[0.25em] text-[#00f0ff]/80 uppercase">
        Scroll to Explore
      </span>

      {/* Downward line animation */}
      <div className="w-[1px] h-8 bg-gradient-to-b from-[#00f0ff] to-transparent animate-bounce" />
    </motion.div>
  );
}
