"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import RadarScrollIndicator from "@/components/ui/RadarScrollIndicator";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center items-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* Subtitle / HUD Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span>RESEARCH INTERN // IAA, AIR UNIVERSITY // NASTP</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white glow-cyan"
        >
          MUHAMMAD TALHA
        </motion.h1>

        {/* Professional Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="font-hud text-xl sm:text-2xl md:text-3xl text-[#ffb700] tracking-widest uppercase"
        >
          AI Research & ML Engineer
        </motion.h2>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8 }}
          className="pt-4"
        >
          <HudCard variant="cyan" statusText="CLASSIFIED // PROFILE SUMMARY" className="text-left leading-relaxed text-slate-300">
            <p className="text-base sm:text-lg">
              Innovative <strong className="text-white">AI Agent Developer</strong> with a completed degree in <strong className="text-white">BS Computer Science</strong>, currently interning at the <strong className="text-[#00f0ff]">Institute of Avionics and Aeronautics (IAA), Air University</strong>, leading research on maritime ship detection using YOLO-based architectures. Also developed an optimized IRSTD framework using YOLO11-Nano for military-grade edge hardware. Experienced in building and deploying AI agents, with a background in C++, Python, data analysis, graphic design, and digital marketing.
            </p>
          </HudCard>
        </motion.div>
      </div>

      <RadarScrollIndicator />
    </section>
  );
}
