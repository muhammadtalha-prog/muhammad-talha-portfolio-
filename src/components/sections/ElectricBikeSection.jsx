"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Wrench, Users, ShieldCheck } from "lucide-react";

export default function ElectricBikeSection() {
  const points = [
    {
      title: "Project Lead & Hardware Selection",
      icon: Users,
      desc: "Led a team as Project Lead, managing hardware selection, design, and end-to-end build of a functional electric bicycle.",
      motionAnim: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }, // Slide-in from left
      variant: "amber",
    },
    {
      title: "Mechanical & System Assembly",
      icon: Wrench,
      desc: "Directed and supervised team members across mechanical assembly and system integration tasks.",
      motionAnim: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } }, // Glass snap-in
      variant: "cyan",
    },
    {
      title: "Hands-On Engineering & Leadership",
      icon: ShieldCheck,
      desc: "Owned hands-on hardware implementation, applying practical engineering and leadership skills.",
      motionAnim: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }, // Glow fade up
      variant: "amber",
    },
  ];

  return (
    <section className="min-h-[110vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full z-10 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffb700]/10 border border-[#ffb700]/40 text-[#ffb700] font-hud text-xs tracking-widest uppercase">
            <Wrench className="w-4 h-4" />
            <span>PBL HARDWARE PROJECT // SUPERIOR UNIVERSITY</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Electric Bicycle (PBL Project)
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            WORKSHOP ASSEMBLY · HARDWARE INTEGRATION · TEAM LEADERSHIP
          </p>
        </div>

        {/* 3 Bullets with distinct entrance effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={p.motionAnim.initial}
              whileInView={p.motionAnim.animate}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HudCard variant={p.variant} statusText={`VIEWPORT 0${idx + 1}`} title={p.title} className="h-full">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#ffb700]">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
