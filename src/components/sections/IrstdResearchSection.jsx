"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Target, Zap, Cpu, HardDrive } from "lucide-react";

export default function IrstdResearchSection() {
  const stats = [
    { icon: Cpu, label: "Architecture", val: "YOLO11-Nano (C3k2 + C2PSA)" },
    { icon: Target, label: "Detection Accuracy", val: "88.9 mAP" },
    { icon: Zap, label: "Edge Latency / Speed", val: "11.84 ms (84.4 FPS)" },
    { icon: HardDrive, label: "ONNX Binary Size", val: "10.2 MB (SWaP Edge)" },
  ];

  const bullets = [
    "Developed an optimized YOLO11-Nano framework for SWaP-constrained edge hardware (FPGAs/DSPs).",
    "Integrated C3k2 feature extraction and C2PSA spatial attention to detect dim signals in complex clutter.",
    "Achieved 88.9 mAP with an ultra-low latency of 11.84 ms (84.4 FPS), exceeding military standards by 2.8x.",
    "Compressed the model into a 10.2 MB ONNX binary for deployment on hardware with limited flash memory.",
  ];

  return (
    <section id="research" className="min-h-[120vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Side Section Header & Telemetry */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff2e55]/10 border border-[#ff2e55]/40 text-[#ff2e55] font-hud text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff2e55] animate-ping" />
            <span>PROJECT 01 // SUBMITTED FOR PUBLICATION</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Real-Time Infrared Small Target Detection (IRSTD)
          </h2>

          <p className="text-slate-400 font-mono text-sm">
            MILITARY-GRADE DEFENSE RADAR & EDGE HARDWARE DEPLOYMENT // SWaP OPTIMIZED
          </p>

          {/* Telemetry Stat Badges Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-[#0c121e]/90 p-3 rounded border border-[#00f0ff]/20">
                <div className="flex items-center gap-2 text-[#00f0ff] mb-1">
                  <s.icon className="w-4 h-4" />
                  <span className="font-hud text-[10px] uppercase text-slate-400">{s.label}</span>
                </div>
                <div className="font-hud text-sm font-bold text-white">{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side HUD Mission Specs Panel */}
        <div className="lg:col-span-7">
          <HudCard variant="red" statusText="RADAR LOCK // MISSION TELEMETRY" title="IRSTD FRAMEWORK SPECIFICATIONS">
            <div className="space-y-4 text-slate-200 font-sans text-base">
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 border-l-2 border-[#ff2e55] pl-4 py-1"
                >
                  <span className="font-hud text-xs text-[#ff2e55] pt-0.5">0{i + 1}</span>
                  <p>{b}</p>
                </motion.div>
              ))}
            </div>
          </HudCard>
        </div>

      </div>
    </section>
  );
}
