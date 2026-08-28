"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, CheckCircle2 } from "lucide-react";

export default function MatlabResearchV2() {
  const points = [
    "Modeled an infrared small target detection (IRSTD) processing pipeline in Simulink, structuring spatial filtering (3×3) and bias correction (1×3) for hardware-oriented deployment.",
    "Converted the pipeline from floating-point to 16-bit fixed-point (Q8.8, sfix16_En8) data types and validated numerical behavior under simulation, informed by a research benchmark target of 84.4 FPS.",
    "Independently drafted Verilog RTL and a testbench, translating the fixed-point logic into HDL syntax as a self-directed exploration of FPGA-oriented design, after automated HDL toolchains were unavailable under the active license.",
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 text-[#0284c7] font-mono text-xs uppercase tracking-widest font-bold">
            <Cpu className="w-4 h-4 text-[#047857]" />
            <span>SIMULATION &amp; HARDWARE DESIGN // MATLAB, SIMULINK, VERILOG</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Infrared Small Target Detection: Fixed-Point Design &amp; Simulation
          </h2>
        </div>

        {/* Storybook Pair: Image-Left + Text-Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image-Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900"
          >
            <Image
              src="/images/simulink-diagram.svg"
              alt="MATLAB Simulink Fixed-Point Block Diagram"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text-Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{p}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
