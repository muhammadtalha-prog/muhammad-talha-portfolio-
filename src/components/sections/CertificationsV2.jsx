"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, ZoomIn, X, ExternalLink, ShieldCheck, Star } from "lucide-react";

export default function CertificationsV2() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: "google-ai",
      title: "AI Data Analysis Certificate | Google — 2026",
      issuer: "Google / Coursera",
      date: "2026",
      image: "/images/certificates/google-ai-data-analysis-cert.png",
      verifyUrl: "https://coursera.org/verify/U260ZZ5F9EFR",
      sealText: "GOOGLE CERTIFIED AI ANALYST",
      gradientBg: "from-[#f0f9ff] via-[#ffffff] to-[#e0f2fe]/80",
    },
    {
      id: "doxfen-internship",
      title: "Internship Completion Certificate | Doxfen Company — 2026",
      issuer: "Doxfen Company",
      date: "2026",
      image: "/images/certificates/doxfen-internship-cert.jpg",
      sealText: "DOXFEN INTERNSHIP VERIFIED",
      gradientBg: "from-[#fdf4ff] via-[#ffffff] to-[#fae8ff]/80",
    },
    {
      id: "superior-pbl",
      title: "Project-Based Learning (PBL) Certificate — Electric Bicycle Project | Superior University — 2023",
      issuer: "Superior University (Sargodha Campus)",
      date: "2023",
      image: "/images/certificates/superior-pbl-electric-bike-cert.jpg",
      sealText: "SUPERIOR UNIV PBL 2.0 EXCELLENCE",
      gradientBg: "from-[#fffbeb] via-[#ffffff] to-[#fef3c7]/80",
    },
    {
      id: "ibm-ml",
      title: "Machine Learning with Python | IBM Certification — 2026",
      issuer: "IBM / Coursera",
      date: "2026",
      image: "/images/certificates/ibm-machine-learning-cert.png",
      verifyUrl: "https://coursera.org/verify/TME57NL6BCEA",
      sealText: "IBM MACHINE LEARNING CERTIFIED",
      gradientBg: "from-[#f0fdf4] via-[#ffffff] to-[#dcfce7]/80",
    },
  ];

  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper Matching Site Theme Background */}
      <section 
        id="certifications" 
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
        <div className="absolute -top-40 -left-24 w-[650px] h-[450px] bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-24 w-[650px] h-[450px] bg-[#ea580c]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header Container */}
        <div id="certifications-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center scroll-mt-28">
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-900 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Professional Qualifications &amp; Accreditations</span>
              </div>
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Certifications
              </h2>
            </div>
          </motion.div>
        </div>

        {/* 4 CERTIFICATION CARDS CONTAINER WITH 40PX GAP */}
        <div 
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-left flex flex-col gap-[40px] pb-16"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          {certs.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ padding: "45px 40px", marginBottom: idx < certs.length - 1 ? "40px" : "0px" }}
              className={`w-full bg-gradient-to-r ${c.gradientBg} text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] relative overflow-hidden group font-['Times_New_Roman',_Times,_serif]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10">
                
                {/* LEFT SUB-DIV: TITLE, ISSUER BADGE & DETAILS (lg:col-span-7) */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left"
                  style={{ paddingLeft: "10px" }}
                >
                  <div>
                    {/* Issuer Badge Top Left */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mb-3 bg-white/90 border border-slate-300 text-slate-900 text-xs font-mono font-extrabold uppercase tracking-wider rounded shadow-xs">
                      <Award className="w-3.5 h-3.5 text-sky-600" />
                      <span>{c.issuer}</span>
                    </div>

                    {/* Certification Title */}
                    <h3 
                      className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif]"
                      style={{ paddingBottom: "10px" }}
                    >
                      {c.title}
                    </h3>
                  </div>

                  {/* Online Verification Link if available */}
                  {c.verifyUrl && (
                    <div className="pt-2">
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
                      >
                        <span>Verify Certificate Online</span>
                        <ExternalLink className="w-4 h-4 text-sky-400" />
                      </a>
                    </div>
                  )}

                  {/* Golden Certification Stamp on Bottom Right of Card Text */}
                  <div className="pt-6 flex items-center gap-4">
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-800 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        GOLDEN CERTIFICATION
                      </span>
                      <span className="text-sm font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif]">
                        {c.sealText}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT SUB-DIV: DATE BADGE ON TOP RIGHT & INTERACTIVE CERTIFICATE IMAGE PREVIEW (lg:col-span-5) */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="lg:col-span-5 flex flex-col justify-between items-center lg:items-end h-full pt-1 pb-2 space-y-6"
                >
                  {/* Date Badge Top Right */}
                  <div className="w-full flex justify-center lg:justify-end">
                    <div className="inline-flex items-center px-4 py-1.5 bg-slate-900 text-white font-mono text-sm sm:text-base font-extrabold tracking-wider shadow-sm rounded-none">
                      <span>Completed: {c.date}</span>
                    </div>
                  </div>

                  {/* High-Res Certificate Image Thumbnail with Hover Lightbox Click */}
                  <div 
                    onClick={() => setSelectedCert(c)}
                    className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-950 border-2 border-slate-300 group-hover:border-sky-500 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-extrabold text-sm backdrop-blur-xs">
                      <ZoomIn className="w-8 h-8 text-sky-400 animate-bounce" />
                      <span>Click to View Full Certificate</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* LIGHTBOX ZOOM MODAL VIEWER FOR FULL CERTIFICATE INSPECTION */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border-2 border-slate-300 p-5 sm:p-8 max-w-5xl w-full rounded-2xl relative shadow-2xl font-['Times_New_Roman',_Times,_serif] my-auto space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-slate-700 hover:text-slate-950 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-md z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="pr-12 text-left space-y-1">
                <span className="text-xs sm:text-sm font-mono text-sky-700 font-extrabold uppercase tracking-wider block">
                  {selectedCert.issuer} — Completed: {selectedCert.date}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif]">
                  {selectedCert.title}
                </h3>
              </div>

              {/* Modal Full Image Preview Container (Zoomed High-Res Uncropped View) */}
              <div className="w-full bg-slate-950 border border-slate-300 shadow-inner rounded-xl p-2 sm:p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-md shadow-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2 text-amber-800 font-mono text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{selectedCert.sealText}</span>
                </div>
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-md"
                  >
                    <span>Verify Online Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
