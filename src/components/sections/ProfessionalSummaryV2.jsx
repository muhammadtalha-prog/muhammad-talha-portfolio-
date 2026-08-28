"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Award } from "lucide-react";

export default function ProfessionalSummaryV2() {
  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper with Guaranteed Inline Styles for Top/Bottom Padding & 40px Left/Right Padding */}
      <section 
        id="professional-summary"
        className="w-full bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ffedd5] relative z-10 overflow-hidden text-left border-b border-sky-200/60"
        style={{ paddingTop: "120px", paddingBottom: "120px", paddingLeft: "40px", paddingRight: "40px", marginTop: "40px", marginBottom: "40px" }}
      >
        
        {/* Ambient Blur Glow Accents */}
        <div className="absolute -top-40 -left-24 w-[650px] h-[450px] bg-[#38bdf8]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-24 w-[650px] h-[450px] bg-[#f97316]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Main Content Container with Explicit 40px Left Padding */}
        <div 
          className="w-full max-w-7xl mx-auto relative z-10"
          style={{ paddingLeft: "40px", paddingRight: "40px" }}
        >
          
          {/* 1. TOP BANNER IMAGE WITH ZOOM MOTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-full h-64 sm:h-80 md:h-[380px] lg:h-[440px] rounded-none overflow-hidden shadow-2xl border border-white/80 bg-slate-900 group"
            style={{ marginBottom: "60px" }}
          >
            <Image
              src="/images/ai-lightbulb-banner.png"
              alt="AI Technology Lightbulb Circuit Banner"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1500px) 100vw, 1500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

            {/* Banner Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5 px-4 py-2 bg-slate-950/80 backdrop-blur-md border border-amber-400/60 text-amber-300 font-mono text-xs font-bold rounded-none shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Avionics &amp; AI Research Leadership</span>
            </motion.div>
          </motion.div>

          {/* 2. HEADING SECTION WITH KINETIC UNDERLINE MOTION */}
          <motion.div
            id="summary-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex flex-col items-start justify-start text-left font-['Times_New_Roman',_Times,_serif] scroll-mt-28"
            style={{ marginTop: "40px", marginBottom: "50px" }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-sky-600 animate-pulse" />
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight text-left">
                Professional Summary
              </h2>
            </div>
            
            {/* Animated Underline Bar Matching Exact Text Width */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="h-1.5 sm:h-2 rounded-full bg-slate-950 mt-4"
            />
          </motion.div>

          {/* 3. PARAGRAPH SECTION WITH TEXT REVEAL MOTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full text-left font-['Times_New_Roman',_Times,_serif]"
            style={{ marginTop: "30px" }}
          >
            <p 
              className="font-['Times_New_Roman',_Times,_serif] text-slate-900 text-xl sm:text-2xl md:text-3xl text-left max-w-6xl leading-relaxed"
              style={{ lineHeight: "1.5" }}
            >
              Innovative <strong className="text-slate-950 font-bold underline decoration-sky-600 decoration-2 underline-offset-4">AI Agent Developer</strong> with a completed degree in <strong className="font-bold text-slate-950">BS Computer Science</strong>, 
              currently interning at the <strong className="font-bold text-[#0284c7]">Institute of Avionics and Aeronautics (IAA), Air University</strong>, 
              leading research on maritime ship detection using YOLO-based architectures. Also developed an optimized IRSTD framework using YOLO11-Nano 
              for military-grade edge hardware. Experienced in building and deploying AI agents, 
              focusing on SWaP-Constrained Edge AI and Deep Learning solutions.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
