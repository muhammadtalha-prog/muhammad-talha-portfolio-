"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Cpu, Activity, Code2 } from "lucide-react";

export default function MatlabResearchSection() {
  const points = [
    {
      icon: Cpu,
      title: "Simulink Pipeline Modeling",
      detail:
        "Modeled an infrared small target detection (IRSTD) processing pipeline in Simulink, structuring spatial filtering (3×3) and bias correction (1×3) for hardware-oriented deployment.",
    },
    {
      icon: Activity,
      title: "16-Bit Fixed-Point (Q8.8) Conversion",
      detail:
        "Converted the pipeline from floating-point to 16-bit fixed-point (Q8.8, sfix16_En8) data types and validated numerical behavior under simulation, informed by a research benchmark target of 84.4 FPS.",
    },
    {
      icon: Code2,
      title: "Verilog RTL & Testbench Draft",
      detail:
        "Independently drafted Verilog RTL and a testbench, translating the fixed-point logic into HDL syntax as a self-directed exploration of FPGA-oriented design, after automated HDL toolchains were unavailable under the active license.",
    },
  ];

  return (
    <section className="min-h-[110vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full z-10 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/40 text-[#3b82f6] font-hud text-xs tracking-widest uppercase">
            <Cpu className="w-4 h-4" />
            <span>SIMULATION & RTL // HARDWARE DESIGN</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
            Infrared Small Target Detection: Fixed-Point Design & Simulation
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            MATLAB / Simulink · Fixed-Point Q8.8 Quantization · Verilog RTL (draft)
          </p>
        </div>

        {/* 3 Simulation Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HudCard variant="cyan" statusText={`SCREEN 0${idx + 1}`} title={p.title} className="h-full">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.detail}</p>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
