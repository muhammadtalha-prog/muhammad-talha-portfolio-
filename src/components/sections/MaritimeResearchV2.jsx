"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Anchor, CheckCircle2 } from "lucide-react";

export default function MaritimeResearchV2() {
  const points = [
    "Conducted the first published benchmark evaluation on the WUTDet Part A maritime dataset, training and systematically benchmarking five advanced YOLO-based architectures (YOLO11n, YOLO11s, YOLO11n-CBAM, WaveYOLO, and the proposed flagship YOLO11s-CBAM).",
    "Designed and implemented a domain-specific offline preprocessing pipeline combining LAB-space CLAHE contrast enhancement and probabilistic weather augmentations (fog, rain, Gaussian noise) to address adverse visual conditions.",
    "Developed WaveYOLO, a lightweight architecture replacing strided convolutions with Discrete Wavelet Transform (DWT) pooling, achieving a mAP@50 of 0.778 with 3.96M parameters and 2.9 ms latency for SWaP-constrained edge deployment.",
    "Proposed a high-resolution (1024×1024) attention-enhanced flagship model (YOLO11s-CBAM), achieving a state-of-the-art mAP@50 of 0.868 and a peak precision of 0.902, providing critical false-alarm suppression for military maritime surveillance.",
    "Preparing manuscript and experimental findings for journal submission.",
  ];

  return (
    <section className="py-24 bg-[#f0f9ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 text-[#047857] font-mono text-xs uppercase tracking-widest font-bold">
            <Anchor className="w-4 h-4 text-[#047857]" />
            <span>MARITIME SURVEILLANCE // NASTP / IAA RESEARCH IN PROGRESS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">
            Maritime Ship Detection using WUTDet Dataset Part A
          </h2>
        </div>

        {/* Storybook Pair: Text-Left + Image-Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text-Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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

          {/* Image-Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900"
          >
            <Image
              src="/images/maritime-ship.svg"
              alt="Maritime Ship Detection Model Visual Proof"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
