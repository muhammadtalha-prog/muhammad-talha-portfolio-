"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { GraduationCap, Award, Building2 } from "lucide-react";

export default function EducationSection() {
  const credentials = [
    {
      degree: "BS Computer Science",
      institution: "Superior University, Sargodha Campus",
      period: "Completed Degree",
      details: "Focus on Computer Vision, Data Structures, OOP, Software Engineering, and Embedded Systems.",
      badge: "SUPERIOR UNIV",
    },
    {
      degree: "AI Research & ML Engineering Internship",
      institution: "Institute of Avionics and Aeronautics (IAA), Air University / NASTP",
      period: "Jun 2026 – Aug 2026",
      details: "Leading aerospace computer vision research (YOLO11, WaveYOLO, IRSTD) at NASTP Islamabad.",
      badge: "AIR UNIV / NASTP",
    },
  ];

  return (
    <section className="min-h-[90vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC & RESEARCH CREDENTIALS</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Education & Institutions
          </h2>
        </div>

        {/* 2 Main Institutional Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HudCard variant={idx === 0 ? "cyan" : "amber"} statusText={c.badge} title={c.degree} className="h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded border border-white/20 bg-black/50 flex items-center justify-center text-[#00f0ff]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-hud text-sm text-white font-bold">{c.institution}</h3>
                      <span className="font-mono text-xs text-[#00f0ff]">{c.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{c.details}</p>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
