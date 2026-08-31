"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Sparkles, Brain } from "lucide-react";

export default function HeroV2() {
  return (
    <section id="hero" className="relative pt-[76px] w-full flex flex-col bg-slate-950 overflow-hidden mb-12 sm:mb-16">
      {/* Banner Photo Container */}
      <div className="relative w-full min-h-[65vh] sm:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/superior-university-campus.jpg"
          alt="Superior University Campus Building with Fighter Jet Monument"
          fill
          className="object-cover object-top filter contrast-[1.08] saturate-[1.1]"
          priority
          sizes="100vw"
        />
        {/* Dark Vignette & Ambient Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b] via-slate-950/60 to-slate-950/40 pointer-events-none" />

        {/* Floating Kinetic Tech Accents */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-24 left-6 sm:left-16 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold shadow-lg"
        >
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>Edge AI &amp; YOLO Architecture</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-28 right-6 sm:right-16 z-20 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold shadow-lg"
        >
          <Brain className="w-4 h-4 text-emerald-400" />
          <span>Autonomous AI Agents</span>
        </motion.div>

        {/* Name & Title Sitting Directly ON TOP of the Banner Background with Motion */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6 py-20">
          
          {/* Main Name Signature Title Motion */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h1 className="font-signature text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 bg-clip-text text-transparent tracking-normal leading-snug text-center w-full drop-shadow-[0_4px_25px_rgba(255,215,0,0.45)] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)] hover:scale-[1.01] transition-transform duration-300 py-1">
              Muhammad Talha
            </h1>
          </motion.div>

          {/* Subtitle Motion Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse hidden sm:block" />
            <h2 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-[#00e5ff] tracking-widest uppercase text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Computer Vision Engineer &amp; AI Researcher
            </h2>
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse hidden sm:block" />
          </motion.div>
        </div>
      </div>

      {/* Parent Container After Banner with Spacing */}
      <div className="w-full bg-[#070c1b] pt-8 pb-14 px-4 flex items-center justify-center relative z-20">
        
        {/* 3D Terminal Card: 50% Viewport Width, Centered with Scroll Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="w-full sm:w-5/6 md:w-3/4 lg:w-[50vw] min-h-[180px] bg-[#0b1329]/95 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group border-l-4 border-l-[#00e5ff] z-30"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Ambient Glow Accent */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#047857]/20 rounded-full blur-2xl group-hover:bg-[#00e5ff]/25 transition-all duration-500 pointer-events-none" />

          {/* Heading: RESEARCH FOCUS & EXPERTISE */}
          <div className="flex items-center justify-center gap-2 text-[#00e5ff] font-mono text-xs uppercase tracking-widest font-bold">
            <ShieldCheck className="w-4 h-4 text-[#00e5ff]" />
            <span>RESEARCH FOCUS &amp; EXPERTISE</span>
          </div>

          {/* Research Focus Copy */}
          <p className="text-slate-200 font-heading font-medium text-xs sm:text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto">
            <strong className="text-white font-semibold">Computer Vision Researcher</strong> — YOLO-based Object Detection for Maritime &amp; IR Surveillance <span className="text-[#00e5ff] font-bold">|</span> <strong className="text-[#38bdf8] font-semibold">AI Agent Developer @ Air University IAA (NASTP)</strong> <span className="text-[#00e5ff] font-bold">|</span> <strong className="text-[#34d399] font-semibold">SWaP-Constrained Edge AI</strong> <span className="text-[#00e5ff] font-bold">|</span> Deep Learning
          </p>
        </motion.div>

      </div>
    </section>
  );
}
