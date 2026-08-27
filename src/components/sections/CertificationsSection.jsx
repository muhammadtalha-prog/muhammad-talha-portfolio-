"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      title: "AI Data Analysis Certificate",
      issuer: "Google",
      year: "2026",
      variant: "cyan",
      image: "/certs/google-ai-data-analysis.webp",
      desc: "Specialized certification in AI-assisted data cleaning, exploratory data analysis, and predictive modeling.",
    },
    {
      title: "Internship Completion Certificate",
      issuer: "Doxfen Company",
      year: "2026",
      variant: "amber",
      image: "/certs/doxfen-internship.webp",
      desc: "Frontend UI/UX web development completion for the Business Builder platform.",
    },
    {
      title: "Project-Based Learning (PBL) Certificate — Electric Bicycle",
      issuer: "Superior University",
      year: "2023",
      variant: "cyan",
      image: "/certs/superior-pbl-ebike.webp",
      desc: "Awarded for Project Leadership & hardware assembly of a functional electric bicycle.",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      year: "2026",
      variant: "amber",
      image: "/certs/ibm-ml-python.webp",
      desc: "Supervised and unsupervised learning, regression algorithms, and neural network fundamentals in Python.",
    },
  ];

  return (
    <section id="certifications" className="min-h-[110vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffb700]/10 border border-[#ffb700]/40 text-[#ffb700] font-hud text-xs tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Certifications & Credentials
          </h2>
        </div>

        {/* 4 Interactive Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <HudCard variant={c.variant} statusText={`${c.issuer} // ${c.year}`} title={c.title} className="h-full group cursor-pointer" onClick={() => setSelectedCert(c)}>
                <div className="space-y-4">
                  {/* Certificate Graphic Placeholder / Upload Slot */}
                  <div 
                    onClick={() => setSelectedCert(c)}
                    className="relative aspect-video rounded border border-white/10 bg-black/60 overflow-hidden flex flex-col items-center justify-center group-hover:border-[#00f0ff] transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    
                    {/* Visual Placeholder Graphic */}
                    <div className="text-center p-4 z-20 space-y-2">
                      <Award className="w-8 h-8 text-[#00f0ff] mx-auto group-hover:scale-110 transition-transform" />
                      <span className="font-hud text-xs text-white block uppercase font-bold">{c.title}</span>
                      <span className="font-mono text-[10px] text-[#ffb700] block">{c.issuer} ({c.year})</span>
                    </div>

                    <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1.5 rounded text-[#00f0ff]">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-panel p-8 max-w-2xl w-full rounded-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Award className="w-6 h-6 text-[#00f0ff]" />
                  <div>
                    <h3 className="font-hud text-lg text-white font-bold">{selectedCert.title}</h3>
                    <span className="font-mono text-xs text-[#ffb700]">{selectedCert.issuer} — {selectedCert.year}</span>
                  </div>
                </div>

                <div className="aspect-video rounded border border-[#00f0ff]/40 bg-black flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <Award className="w-12 h-12 text-[#00f0ff]" />
                  <span className="font-hud text-sm text-white font-bold">{selectedCert.title}</span>
                  <span className="font-mono text-xs text-slate-400">ISSUED BY {selectedCert.issuer.toUpperCase()}</span>
                  <span className="text-[11px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded border border-[#00f0ff]/30">
                    VERIFIED CERTIFICATE DOCUMENT SLOT
                  </span>
                </div>

                <p className="text-sm text-slate-300">{selectedCert.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
