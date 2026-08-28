"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Code, Database, Palette, Megaphone, Terminal, PenTool, Share2 } from "lucide-react";

export default function SkillsGridV2() {
  // STRICT DATA PROVIDED BY USER - NO EXTRA OR INFERRED ITEMS
  const skillCategories = [
    {
      id: "programming",
      title: "Programming",
      icon: Code,
      accentGradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-100/90 via-white to-indigo-100/90",
      borderColor: "border-blue-300",
      tagBorder: "border-blue-400/60 text-blue-950 bg-blue-50/90",
      skills: ["Python", "C++", "Java", "SQL"],
    },
    {
      id: "data-analysis",
      title: "Data Analysis & ML",
      icon: Database,
      accentGradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-100/90 via-white to-teal-100/90",
      borderColor: "border-emerald-300",
      tagBorder: "border-emerald-400/60 text-emerald-950 bg-emerald-50/90",
      skills: ["YOLO11 / IRSTD", "Google Sheets", "Data Cleaning", "Exploratory Analysis"],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: Palette,
      accentGradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-100/90 via-white to-pink-100/90",
      borderColor: "border-purple-300",
      tagBorder: "border-purple-400/60 text-purple-950 bg-purple-50/90",
      skills: ["Logo Design", "Poster Design", "Brand Identity", "Video Editing"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: Megaphone,
      accentGradient: "from-sky-600 to-cyan-600",
      bgGradient: "from-sky-100/90 via-white to-cyan-100/90",
      borderColor: "border-sky-300",
      tagBorder: "border-sky-400/60 text-sky-950 bg-sky-50/90",
      skills: ["Facebook Ads", "Instagram Growth", "TikTok Marketing"],
    },
    {
      id: "dev-tools",
      title: "Dev Tools",
      icon: Terminal,
      accentGradient: "from-slate-700 to-slate-900",
      bgGradient: "from-slate-100/90 via-white to-slate-200/90",
      borderColor: "border-slate-300",
      tagBorder: "border-slate-400/60 text-slate-950 bg-slate-50/90",
      skills: ["VS Code", "Google Colab", "Antigravity IDE", "Dev-C++", "Git / GitHub"],
    },
    {
      id: "design-tools",
      title: "Design Tools",
      icon: PenTool,
      accentGradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-100/90 via-white to-orange-100/90",
      borderColor: "border-amber-300",
      tagBorder: "border-amber-400/60 text-amber-950 bg-amber-50/90",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Figma"],
    },
    {
      id: "marketing-tools",
      title: "Marketing Tools",
      icon: Share2,
      accentGradient: "from-red-600 to-rose-600",
      bgGradient: "from-red-100/90 via-white to-rose-100/90",
      borderColor: "border-red-300",
      tagBorder: "border-red-400/60 text-red-950 bg-red-50/90",
      skills: ["Meta Business Suite", "TikTok Creative Center", "FB Ads Manager"],
    },
  ];

  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper Matching Site Theme Background */}
      <section 
        id="skills-capabilities" 
        className="w-full bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ffedd5] relative z-10 overflow-hidden text-center border-b border-sky-200/60"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px", 
          paddingLeft: "40px", 
          paddingRight: "40px", 
          marginTop: "0px", 
          marginBottom: "0px" 
        }}
      >
        {/* Soft Ambient Theme Blur Accents */}
        <div className="absolute -top-40 -right-24 w-[650px] h-[450px] bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 w-[650px] h-[450px] bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header Container */}
        <div id="skills-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white/90 backdrop-blur-xl rounded-none border border-slate-200 shadow-xl text-center font-['Times_New_Roman',_Times,_serif]"
            style={{
              paddingTop: "60px",
              paddingBottom: "60px",
              paddingLeft: "40px",
              paddingRight: "40px"
            }}
          >
            <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Wrench className="w-4 h-4 text-sky-600" />
                <span>Technical Matrix &amp; Toolkit</span>
              </div>
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Skills &amp; Capabilities
              </h2>
            </div>
          </motion.div>
        </div>

        {/* 7 SKILLS CARDS GRID CONTAINER */}
        <div 
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.15 }}
                style={{ padding: "45px 40px" }}
                className={`w-full bg-gradient-to-br ${cat.bgGradient} text-slate-900 rounded-none border-none shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.16)] p-10 sm:p-12 md:p-14 relative overflow-hidden group font-['Times_New_Roman',_Times,_serif] flex flex-col justify-between`}
              >
                <div className="space-y-8" style={{ padding: "10px" }}>
                  {/* Category Header with Icon & Padding */}
                  <div className="flex items-center gap-4 pb-2" style={{ paddingBottom: "10px" }}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${cat.accentGradient} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug font-['Times_New_Roman',_Times,_serif]">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Badges with Generous Padding and No Border */}
                  <div className="flex flex-wrap gap-3.5 pt-4" style={{ paddingTop: "15px" }}>
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 rounded-md border-none text-base sm:text-lg font-extrabold font-['Times_New_Roman',_Times,_serif] shadow-md bg-white/95 text-slate-950 transition-all duration-200 cursor-default"
                        style={{ padding: "12px 24px" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Subtitle Accent Bar */}
                <div className={`w-full h-1 mt-8 bg-gradient-to-r ${cat.accentGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
