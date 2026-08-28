"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ChevronRight, ShieldCheck, Star } from "lucide-react";

export default function EducationV2() {
  const educationData = [
    {
      id: "bscs",
      title: "BS(Hons.) in Computer Science (BSCS) | Superior University, Sargodha",
      date: "Completed: 2026",
      points: [
        "8th semester completed",
        "CGPA: 3.43/4.0",
        "Grade: B+"
      ],
      sealText: "OFFICIAL BSCS DEGREE",
      gradientBg: "from-[#fffdf0] via-[#fefce8] to-[#fef3c7]/60",
    },
    {
      id: "fsc",
      title: "F.Sc. Pre-Engineering | Board of Intermediate and Secondary Education, Sargodha",
      date: "Completed: 2022",
      points: [
        "Grade: A"
      ],
      sealText: "PRE-ENGINEERING CERTIFIED",
      gradientBg: "from-[#f8fafc] via-[#fffdf0] to-[#fef9c3]/60",
    },
    {
      id: "matric",
      title: "Matriculation | Federal Board of Intermediate and Secondary Education",
      date: "Completed: 2020",
      points: [
        "Grade: A+"
      ],
      sealText: "FBISE MATRIC CERTIFIED",
      gradientBg: "from-[#f0fdf4] via-[#fffdf0] to-[#fef3c7]/60",
    },
  ];

  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper Matching Site Theme Background */}
      <section 
        id="education" 
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
        <div className="absolute -top-40 -left-24 w-[650px] h-[450px] bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-24 w-[650px] h-[450px] bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header Container */}
        <div id="education-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center scroll-mt-28">
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span>Academic Qualifications</span>
              </div>
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Education
              </h2>
            </div>
          </motion.div>
        </div>

        {/* 3 CERTIFICATE-STYLE CARDS CONTAINER WITH 40PX GAP */}
        <div 
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-left flex flex-col gap-[40px] pb-16"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ padding: "45px 40px", marginBottom: idx < educationData.length - 1 ? "40px" : "0px" }}
              className={`w-full bg-gradient-to-r ${edu.gradientBg} text-slate-900 rounded-none border-4 border-amber-400/80 shadow-[0_25px_60px_rgba(0,0,0,0.12)] relative overflow-hidden group font-['Times_New_Roman',_Times,_serif]`}
            >
              {/* Inner Decorative Certificate Double Border Frame */}
              <div className="absolute inset-3 border-2 border-dashed border-amber-500/40 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                
                {/* LEFT SUB-DIV: HEADING & BULLET POINTS (lg:col-span-7) */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left"
                  style={{ paddingLeft: "10px" }}
                >
                  {/* Top Left Heading */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mb-3 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider rounded">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      <span>OFFICIAL ACADEMIC CREDENTIAL</span>
                    </div>
                    <h3 
                      className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif]"
                      style={{ paddingBottom: "10px" }}
                    >
                      {edu.title}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-4 pt-2" style={{ paddingLeft: "10px" }}>
                    {edu.points.map((pt, pIdx) => (
                      <motion.div 
                        key={pIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + pIdx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                        <p className="text-slate-900 text-lg sm:text-xl md:text-2xl leading-relaxed font-bold font-['Times_New_Roman',_Times,_serif]">
                          {pt}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4" />
                </motion.div>

                {/* RIGHT SUB-DIV: DATE ON TOP RIGHT AND GOLDEN STAMP ON BOTTOM RIGHT (lg:col-span-5) */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="lg:col-span-5 flex flex-col justify-between items-center lg:items-end h-full pt-1 pb-2 space-y-8"
                >
                  {/* Date Badge Top Right */}
                  <div className="w-full flex justify-center lg:justify-end">
                    <div className="inline-flex items-center px-4 py-1.5 bg-amber-100/90 border border-amber-300 text-slate-950 font-mono text-sm sm:text-base font-extrabold tracking-wider shadow-sm rounded">
                      <span>{edu.date}</span>
                    </div>
                  </div>

                  {/* PERFECT CIRCULAR GOLDEN STAMP OF EDUCATION CERTIFICATION ON BOTTOM RIGHT */}
                  <div className="w-full flex justify-center lg:justify-end items-center gap-4 pt-4">
                    <div className="flex flex-col text-right hidden sm:flex">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-amber-800 flex items-center justify-end gap-1">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        GOLDEN CERTIFICATION
                      </span>
                      <span className="text-sm font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif]">
                        {edu.sealText}
                      </span>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-300 to-yellow-600 p-1 shadow-xl border-2 border-yellow-200 flex items-center justify-center shrink-0 cursor-pointer group/stamp"
                    >
                      {/* Outer Serrated Circular Medallion Ring */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700 p-1 flex items-center justify-center text-center">
                        <div className="w-full h-full rounded-full border-2 border-dashed border-amber-100 flex flex-col items-center justify-center p-1.5 bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-400 text-slate-950 shadow-inner">
                          <Star className="w-6 h-6 text-amber-950 fill-amber-950 animate-pulse" />
                          <span className="text-[9px] sm:text-[10px] font-black uppercase font-mono tracking-tighter leading-none text-amber-950 mt-1">
                            VERIFIED
                          </span>
                          <span className="text-[7.5px] sm:text-[8.5px] font-black uppercase font-mono tracking-tighter leading-none text-slate-900 mt-0.5">
                            ACADEMIC
                          </span>
                        </div>
                      </div>
                      
                      {/* Golden Ribbon Tails Hanging Below the Seal */}
                      <div className="absolute -bottom-3 left-3 w-5 h-7 bg-gradient-to-b from-amber-500 to-yellow-600 shadow-md -z-10 rotate-12" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }} />
                      <div className="absolute -bottom-3 right-3 w-5 h-7 bg-gradient-to-b from-yellow-500 to-amber-600 shadow-md -z-10 -rotate-12" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }} />
                    </motion.div>
                  </div>

                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
