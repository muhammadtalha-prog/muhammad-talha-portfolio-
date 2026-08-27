"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Code, Database, Palette, Megaphone, Terminal, PenTool, Share2 } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      variant: "cyan",
      skills: ["Python", "C++", "Java", "Verilog (Draft)", "SQL"],
    },
    {
      title: "Data Analysis & ML",
      icon: Database,
      variant: "amber",
      skills: ["YOLO11 / WaveYOLO", "LAB-Space CLAHE", "Exploratory Data Analysis", "Data Cleaning", "Google Sheets"],
    },
    {
      title: "Dev & AI Tools",
      icon: Terminal,
      variant: "cyan",
      skills: ["VS Code", "Google Colab", "Antigravity IDE", "Dev-C++", "Git / GitHub"],
    },
    {
      title: "Graphic Design",
      icon: Palette,
      variant: "amber",
      skills: ["Logo Design", "Poster Design", "Brand Identity", "UI/UX Components", "Video Editing"],
    },
    {
      title: "Design Software",
      icon: PenTool,
      variant: "cyan",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Figma"],
    },
    {
      title: "Digital Marketing & Tools",
      icon: Megaphone,
      variant: "amber",
      skills: ["Meta Business Suite", "TikTok Creative Center", "FB / IG Marketing", "TikTok Ads Manager"],
    },
  ];

  return (
    <section id="skills" className="min-h-[120vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <Code className="w-4 h-4" />
            <span>CAPABILITIES // TECHNICAL MATRIX</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Skills & Technical Toolkit
          </h2>
        </div>

        {/* 6 Categorized Glass HUD Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <HudCard variant={cat.variant} statusText={`MODULE 0${idx + 1}`} title={cat.title} className="h-full">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
