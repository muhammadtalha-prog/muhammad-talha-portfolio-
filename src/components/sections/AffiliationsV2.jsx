"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Landmark } from "lucide-react";

export default function AffiliationsV2() {
  const logos = [
    {
      name: "Fazaia Schools & Colleges",
      src: "/images/logos/fazaia-logo.png",
      glowColor: "rgba(245, 158, 11, 0.6)",
      borderColor: "hover:border-amber-400/60",
      dropShadow: "drop-shadow-[0_0_18px_rgba(245,158,11,0.5)] group-hover:drop-shadow-[0_0_28px_rgba(245,158,11,0.9)]",
    },
    {
      name: "The Superior College Lahore",
      src: "/images/logos/superior-logo.png",
      glowColor: "rgba(16, 185, 129, 0.6)",
      borderColor: "hover:border-emerald-400/60",
      dropShadow: "drop-shadow-[0_0_18px_rgba(16,185,129,0.5)] group-hover:drop-shadow-[0_0_28px_rgba(16,185,129,0.9)]",
    },
    {
      name: "Research Network",
      src: "/images/logos/purple-net-logo.png",
      glowColor: "rgba(168, 85, 247, 0.6)",
      borderColor: "hover:border-purple-400/60",
      dropShadow: "drop-shadow-[0_0_18px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_28px_rgba(168,85,247,0.9)]",
    },
    {
      name: "Air University",
      src: "/images/logos/air-university-logo.png",
      glowColor: "rgba(56, 189, 248, 0.6)",
      borderColor: "hover:border-sky-400/60",
      dropShadow: "drop-shadow-[0_0_18px_rgba(56,189,248,0.5)] group-hover:drop-shadow-[0_0_28px_rgba(56,189,248,0.9)]",
    },
  ];

  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper with Dark Background & Ample Padding/Margin */}
      <section
        id="affiliations"
        className="w-full bg-[#070c1b] relative z-10 overflow-hidden text-center"
        style={{
          paddingTop: "90px",
          paddingBottom: "90px",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        {/* Neon Ambient Blur Glow Accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00e5ff]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Inner Content Container */}
        <div
          className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center space-y-10"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >

          {/* Header Badge & Main Heading Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-400 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-center shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <Landmark className="w-4 h-4 text-sky-400 animate-bounce" />
              <span>ALUMNI OF INSTITUTIONS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Academic Institutions &amp; Research Affiliations
            </h2>
          </motion.div>

          {/* 4 Logos Wrap-Around Dark Glass Grid with Border-Free Styling & Generous Padding */}
          <div
            className="w-full bg-[#0b1329]/90 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-10 sm:p-16 md:p-20 flex flex-wrap items-center justify-around gap-10 sm:gap-14 md:gap-16 relative overflow-hidden"
            style={{ marginTop: "30px", marginBottom: "20px" }}
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{
                  scale: 1.12,
                  y: -8,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className={`relative group p-8 sm:p-10 md:p-12 rounded-2xl bg-slate-900/80 shadow-2xl ${logo.borderColor} border border-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer min-w-[180px] sm:min-w-[220px] md:min-w-[240px] min-h-[180px] sm:min-h-[220px]`}
                style={{
                  boxShadow: `0 0 25px ${logo.glowColor}`
                }}
              >
                {/* Glowing Aura Radial Background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-25 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${logo.glowColor} 0%, transparent 75%)` }}
                />

                {/* Animated Logo Image Container with Generous Padding */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.4
                  }}
                  className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center p-3 sm:p-4 z-10"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                    className={`object-contain max-h-full max-w-full p-1 filter ${logo.dropShadow} transition-all duration-300`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
