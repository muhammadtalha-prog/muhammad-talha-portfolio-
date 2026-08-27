"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Anchor, ShieldCheck, Eye, Layers, Compass } from "lucide-react";

export default function MaritimeResearchSection() {
  const highlights = [
    {
      title: "First Benchmark Evaluation",
      icon: Compass,
      desc: "Conducted the first published benchmark evaluation on the WUTDet Part A maritime dataset, training and systematically benchmarking five advanced YOLO-based architectures (YOLO11n, YOLO11s, YOLO11n-CBAM, WaveYOLO, and the proposed flagship YOLO11s-CBAM).",
    },
    {
      title: "Preprocessing & Augmentation Pipeline",
      icon: Layers,
      desc: "Designed and implemented a domain-specific offline preprocessing pipeline combining LAB-space CLAHE contrast enhancement and probabilistic weather augmentations (fog, rain, Gaussian noise) to address adverse visual conditions.",
    },
    {
      title: "WaveYOLO (DWT Pooling)",
      icon: Eye,
      desc: "Developed WaveYOLO, a novel lightweight architecture replacing strided convolutions with Discrete Wavelet Transform (DWT) pooling, achieving a mAP@50 of 0.778 with 3.96M parameters and 2.9 ms latency for SWaP-constrained edge deployment.",
    },
    {
      title: "Flagship YOLO11s-CBAM (SOTA 0.868 mAP)",
      icon: ShieldCheck,
      desc: "Proposed a high-resolution (1024×1024) attention-enhanced flagship model (YOLO11s-CBAM), achieving a state-of-the-art mAP@50 of 0.868 and a peak precision of 0.902, providing critical false-alarm suppression for military maritime surveillance.",
    },
    {
      title: "Journal Submission",
      icon: Anchor,
      desc: "Preparing manuscript and experimental findings for journal submission.",
    },
  ];

  return (
    <section className="min-h-[140vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <Anchor className="w-4 h-4" />
            <span>RESEARCH WORK (IN PROGRESS) // NASTP / IAA</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Maritime Ship Detection using WUTDet Dataset
          </h2>

          <p className="text-slate-300 font-mono text-sm sm:text-base">
            Training and benchmarking YOLO-based architectures for military maritime surveillance.
          </p>
        </div>

        {/* 5 Orbital Reveal Bullet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HudCard
                variant={idx === 3 ? "cyan" : "amber"}
                statusText={`ORBIT ANGLE 0${idx + 1}`}
                title={h.title}
                className="h-full flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                    <h.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
