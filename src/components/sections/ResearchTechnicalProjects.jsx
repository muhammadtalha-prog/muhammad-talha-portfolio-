"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Workflow, Target, Anchor, Cpu, Zap, Volume2, Code2, Bot, Radio } from "lucide-react";

export default function ResearchTechnicalProjects() {
  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper */}
      <section 
        id="research-projects" 
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
        <div className="absolute -top-40 -left-24 w-[650px] h-[450px] bg-[#38bdf8]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-24 w-[650px] h-[450px] bg-[#f97316]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header Container */}
        <div id="research-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center scroll-mt-28">
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
            <div className="flex flex-col items-center justify-center text-center w-full">
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Research &amp; Technical Projects
              </h2>
            </div>
          </motion.div>
        </div>

        {/* PROJECT CARDS CONTAINER WITH 120PX MARGIN BETWEEN CARDS AND GENEROUS BOTTOM SEPARATION */}
        <div 
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-left space-y-[120px] pb-16"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          
          {/* ========================================================= */}
          {/* CARD 1: IRSTD RESEARCH PAPER CARD WITH IMAGE              */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 1: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Activity className="w-4 h-4 text-sky-600" />
                <span>Research paper</span>
              </div>

              {/* Card Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Real-Time Infrared Small Target Detection (IRSTD)
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: IMAGE FROM LEFT (x: -100), TEXT FROM RIGHT (x: 100) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: IMAGE CONTAINER (SLIDES IN FROM LEFT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[4/3] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/irstd-radar-system.png"
                  alt="Real-Time Infrared Small Target Detection (IRSTD)"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

              {/* DIV 2: TEXT CONTENT CONTAINER (SLIDES IN FROM RIGHT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
              >
                {/* Paragraph Copy Body */}
                <p className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]">
                  Engineered a highly optimized <strong className="text-slate-950 font-bold underline decoration-sky-600 decoration-2 underline-offset-4">YOLO11-Nano framework</strong> designed specifically for SWaP-constrained edge computing environments like FPGAs and DSPs. By integrating <strong className="text-slate-950 font-bold">C3k2 feature extraction</strong> and <strong className="text-slate-950 font-bold">C2PSA spatial attention</strong>, the model effectively detects dim signals within complex clutter. Ultimately, the framework exceeded military standards by 2.8x—achieving an <strong className="text-emerald-700 font-bold">88.9 mAP</strong> at an ultra-low latency of <strong className="text-sky-700 font-bold">11.84 ms (84.4 FPS)</strong>—and was packaged into a lightweight <strong className="text-amber-700 font-bold">10.2 MB ONNX binary</strong> for deployment on hardware with strictly limited flash memory.
                </p>
              </motion.div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* CARD 2: IRSTD PREPROCESSING & ARCHITECTURE PIPELINE CARD  */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 2: CENTER-ALIGNED HEADING SECTION WITH AMPLE HEADROOM */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Workflow className="w-4 h-4 text-sky-600" />
                <span>Preprocessing &amp; Neural Architecture</span>
              </div>

              {/* Card 2 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                IRSTD Preprocessing &amp; YOLO11-Nano Neural Architecture Pipeline
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER (SLIDES IN ON SCROLL) */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-6xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-white relative p-2">
                <Image 
                  src="/images/irstd-pipeline-architecture.png"
                  alt="IRSTD Preprocessing Pipeline and YOLO11-Nano Architecture"
                  width={1400}
                  height={600}
                  className="w-full h-auto object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* CARD 3: IRSTD TARGET TRACKING GRID CARD (AUTO FIT IMAGE)  */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 3: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Target className="w-4 h-4 text-sky-600" />
                <span>Real-Time Target Tracking &amp; Thermal Detection</span>
              </div>

              {/* Card 3 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Infrared Target Tracking &amp; FLIR Bounding Box Output Grid
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER WITH AUTO FIT */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-5xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 p-2 relative flex items-center justify-center">
                <Image 
                  src="/images/irstd-tracking-grid.png"
                  alt="Infrared Target Tracking and FLIR Bounding Box Output Grid"
                  width={1200}
                  height={675}
                  className="w-full h-auto max-h-[600px] object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* CARD 4: MARITIME SHIP DETECTION (WUTDet Part A) CARD      */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 4: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Anchor className="w-4 h-4 text-emerald-600" />
                <span>Research Work</span>
              </div>

              {/* Card Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Research Work : Maritime Ship Detection using WUTDet Dataset Part A
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: PARA ON LEFT (col-span-7), IMAGE ON RIGHT (col-span-5) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: TEXT CONTENT CONTAINER (PARA ON LEFT - SLIDES IN FROM LEFT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Spearheaded the first published benchmark evaluation on the <strong className="text-slate-950 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4">WUTDet Part A maritime dataset</strong>, supported by a custom image preprocessing pipeline designed to mitigate complex weather conditions. This research introduces two major architectural advancements: <strong className="text-slate-950 font-bold">WaveYOLO</strong>, a highly efficient framework leveraging DWT pooling for edge-constrained hardware, and an attention-enhanced <strong className="text-slate-950 font-bold">YOLO11s-CBAM flagship model</strong>. By achieving a state-of-the-art <strong className="text-emerald-700 font-bold">0.868 mAP@50</strong> and peak precision of <strong className="text-sky-700 font-bold">0.902</strong>, the flagship model provides vital false-alarm suppression for military surveillance. The experimental findings and methodologies are currently being prepared for journal submission.
                </p>
              </motion.div>

              {/* DIV 2: IMAGE CONTAINER (IMAGE ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[16/9] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/maritime-ship-wutdet.png"
                  alt="Research Work : Maritime Ship Detection using WUTDet Dataset Part A"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* CARD 5: MARITIME SHIP DETECTION OUTPUT GRID (CENTER AUTO FIT) */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 5: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Anchor className="w-4 h-4 text-emerald-600" />
                <span>Maritime Detection Output &amp; Bounding Box Verification</span>
              </div>

              {/* Card 5 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                WUTDet Part A Real-Time Maritime Ship Detection Visual Output
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER WITH AUTO FIT */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-5xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 p-2 relative flex items-center justify-center">
                <Image 
                  src="/images/maritime-ship-detection-bbox.jpg"
                  alt="WUTDet Part A Real-Time Maritime Ship Detection Visual Output"
                  width={1200}
                  height={675}
                  className="w-full h-auto max-h-[600px] object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* CARD 6: MATLAB/SIMULINK & VERILOG FIXED-POINT ALGORITHM   */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 6: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Cpu className="w-4 h-4 text-sky-600" />
                <span>Fixed-Point Algorithm &amp; FPGA Hardware RTL</span>
              </div>

              {/* Card 6 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Infrared Small Target Detection: Fixed-Point Algorithm Design &amp; Simulation | MATLAB/Simulink, Verilog (draft)
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: IMAGE ON LEFT (col-span-5), PARA ON RIGHT (col-span-7) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: IMAGE CONTAINER (IMAGE ON LEFT - SLIDES IN FROM LEFT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[4/3] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/simulink-radar-dish.png"
                  alt="Infrared Small Target Detection: Fixed-Point Algorithm Design & Simulation | MATLAB/Simulink, Verilog (draft)"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

              {/* DIV 2: TEXT CONTENT CONTAINER (PARA ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Designed and simulated an <strong className="text-slate-950 font-bold underline decoration-sky-600 decoration-2 underline-offset-4">infrared small target detection (IRSTD)</strong> processing pipeline in Simulink optimized for hardware deployment. After structuring the spatial filtering and bias correction, I converted the pipeline into a <strong className="text-slate-950 font-bold">16-bit fixed-point (Q8.8) architecture</strong> and validated its numerical behavior to meet an <strong className="text-emerald-700 font-bold">84.4 FPS research benchmark</strong>. When automated HDL toolchains proved unavailable, I took a self-directed approach to FPGA design by independently drafting the <strong className="text-slate-950 font-bold">Verilog RTL and testbenches</strong> to successfully translate the fixed-point logic into hardware description language.
                </p>
              </motion.div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* CARD 7: SIMULINK RADAR SIMULATION & ADPCA SIGNAL OUTPUT   */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 7: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Cpu className="w-4 h-4 text-sky-600" />
                <span>Simulink Fixed-Point</span>
              </div>

              {/* Card 7 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Simulink Radar Example &amp; Simulink Fixed-Point
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER WITH AUTO FIT */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-5xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-white p-2 relative flex items-center justify-center">
                <Image 
                  src="/images/simulink-radar-simulation.png"
                  alt="Simulink Radar Example and Fixed-Point ADPCA Target Canceller Signal Plots"
                  width={1200}
                  height={675}
                  className="w-full h-auto max-h-[600px] object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* CARD 8: ELECTRIC BICYCLE (PBL PROJECT) CARD               */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 8: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Problem-Based Learning (PBL) Hardware Project</span>
              </div>

              {/* Card 8 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Electric Bicycle (PBL Project)
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: PARA ON LEFT (col-span-7), IMAGE ON RIGHT (col-span-5) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: TEXT CONTENT CONTAINER (PARA ON LEFT - SLIDES IN FROM LEFT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Spearheaded the end-to-end development of a <strong className="text-slate-950 font-bold underline decoration-amber-600 decoration-2 underline-offset-4">functional electric bicycle</strong> as <strong className="text-slate-950 font-bold">Project Lead</strong>, managing everything from initial hardware selection to final system design. In addition to directing and supervising the team across <strong className="text-slate-950 font-bold">mechanical assembly and integration</strong> tasks, I maintained a hands-on approach to the hardware implementation, applying a strong blend of practical engineering expertise and project leadership to deliver a <strong className="text-emerald-700 font-bold">fully functional vehicle</strong>.
                </p>
              </motion.div>

              {/* DIV 2: IMAGE CONTAINER (IMAGE ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[4/3] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-white flex items-center justify-center p-4"
              >
                <Image
                  src="/images/electric-bicycle.png"
                  alt="Electric Bicycle (PBL Project)"
                  fill
                  className="object-contain object-center transition-transform duration-700 hover:scale-105 p-2"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* CARD 9: AI HAND-GESTURE VOLUME CONTROLLER (PYTHON) CARD   */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 9: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-300 text-purple-900 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Volume2 className="w-4 h-4 text-purple-600" />
                <span>Computer Vision &amp; HCI Interface</span>
              </div>

              {/* Card 9 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                AI Hand-Gesture Volume Controller (Python)
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: IMAGE ON LEFT (col-span-5), PARA ON RIGHT (col-span-7) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: IMAGE CONTAINER (IMAGE ON LEFT - SLIDES IN FROM LEFT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[16/9] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/gesture-volume-control.png"
                  alt="AI Hand-Gesture Volume Controller (Python)"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

              {/* DIV 2: TEXT CONTENT CONTAINER (PARA ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Developed a <strong className="text-slate-950 font-bold underline decoration-purple-600 decoration-2 underline-offset-4">computer vision application using Python</strong> designed to control system audio hardware entirely through <strong className="text-slate-950 font-bold">real-time finger gestures</strong>. The project utilized <strong className="text-slate-950 font-bold">camera-based tracking</strong> to seamlessly map hand movements to specific device functions, reinforcing my practical skills in <strong className="text-emerald-700 font-bold">logic design and signal processing</strong> for interactive hardware control.
                </p>
              </motion.div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* CARD 10: SYSTEMS DEVELOPMENT (C++) CARD                    */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 10: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Code2 className="w-4 h-4 text-sky-600" />
                <span>Object-Oriented C++ Architecture</span>
              </div>

              {/* Card 10 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Systems Development (C++)
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: PARA ON LEFT (col-span-7), IMAGE ON RIGHT (col-span-5) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: TEXT CONTENT CONTAINER (PARA ON LEFT - SLIDES IN FROM LEFT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Designed and implemented structured <strong className="text-slate-950 font-bold underline decoration-sky-600 decoration-2 underline-offset-4">Command Line Interface (CLI) applications</strong> tailored for both <strong className="text-slate-950 font-bold">Hospital and Library Management Systems</strong>. Building these systems served to solidify and practically demonstrate a comprehensive <strong className="text-[#0284c7] font-bold">mastery of C++ fundamentals</strong>, focusing on clean architecture, <strong className="text-emerald-700 font-bold">object-oriented design principles</strong>, and reliable application logic.
                </p>
              </motion.div>

              {/* DIV 2: IMAGE CONTAINER (IMAGE ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[16/9] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/cpp-systems-development.png"
                  alt="Systems Development (C++)"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* CARD 11: AI AGENT DEVELOPMENT CARD                         */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 11: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Multi-Agent Systems &amp; Autonomous AI Workflows</span>
              </div>

              {/* Card 11 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                AI Agent Development
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: IMAGE ON LEFT (col-span-5), PARA ON RIGHT (col-span-7) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: IMAGE CONTAINER (IMAGE ON LEFT - SLIDES IN FROM LEFT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[16/9] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/ai-agent-development.png"
                  alt="AI Agent Development"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

              {/* DIV 2: TEXT CONTENT CONTAINER (PARA ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Developed a diverse <strong className="text-slate-950 font-bold underline decoration-sky-600 decoration-2 underline-offset-4">portfolio of AI agent architectures</strong> focused on workflow automation and cross-platform synergy. Key projects include a <strong className="text-slate-950 font-bold">specialized MATLAB coding agent</strong> that generates and debugs scripts via natural language, alongside a <strong className="text-emerald-700 font-bold">locally hosted multi-agent system</strong> designed to plan, write, and review code autonomously without relying on cloud APIs. To further enhance AI accessibility and user experience, I deployed a real-time <strong className="text-slate-950 font-bold">Grok-powered chatbot on Streamlit</strong> and built a custom browser extension. This extension serves as an intelligent context bridge, seamlessly transferring conversation history across <strong className="text-[#0284c7] font-bold">ChatGPT, Gemini, and DeepSeek</strong> to maintain continuous context across different AI ecosystems.
                </p>
              </motion.div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* CARD 12: AUTONOMOUS MULTI-AGENT SYSTEM ARCHITECTURE       */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 12: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Multi-Agent Swarm &amp; Autonomous Workflows</span>
              </div>

              {/* Card 12 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Autonomous Multi-Agent System Architecture &amp; Ecosystem Visual Output
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER WITH AUTO FIT */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-5xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-slate-950 p-2 relative flex items-center justify-center">
                <Image 
                  src="/images/ai-agents-lineup.png"
                  alt="Autonomous Multi-Agent System Architecture & Ecosystem Visual Output"
                  width={1200}
                  height={675}
                  className="w-full h-auto max-h-[600px] object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* CARD 13: EMBEDDED SYSTEMS KNOWLEDGE CARD                   */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 13: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Radio className="w-4 h-4 text-emerald-600" />
                <span>Embedded Hardware &amp; Avionics Architectures</span>
              </div>

              {/* Card 13 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Embedded Systems Knowledge
              </h3>
            </motion.div>

            {/* 2. TWO INNER DIVS: IMAGE ON LEFT (col-span-5), PARA ON RIGHT (col-span-7) */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10"
              style={{ paddingTop: "40px", paddingBottom: "40px" }}
            >
              
              {/* DIV 1: IMAGE CONTAINER (IMAGE ON LEFT - SLIDES IN FROM LEFT ON SCROLL) */}
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 relative w-full aspect-[16/9] rounded-none overflow-hidden border border-slate-200 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center"
              >
                <Image
                  src="/images/embedded-avionics-systems.png"
                  alt="Embedded Systems Knowledge"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>

              {/* DIV 2: TEXT CONTENT CONTAINER (PARA ON RIGHT - SLIDES IN FROM RIGHT ON SCROLL WITH 15PX LEFT PADDING) */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Paragraph Copy Body */}
                <p 
                  className="text-slate-800 text-lg md:text-xl leading-relaxed tracking-wide font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingLeft: "15px" }}
                >
                  Developed a comprehensive understanding of <strong className="text-slate-950 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4">embedded systems and avionics hardware architectures</strong>. My studies focused heavily on signal processing and data integrity, covering <strong className="text-slate-950 font-bold">ADC/DAC, DSP, FPGA fundamentals</strong>, <strong className="text-slate-950 font-bold">Forward Error Correction (FEC)</strong>, and secure encryption workflows for embedded data pipelines. To put these theoretical concepts into practice, I engineered a software model of a <strong className="text-sky-700 font-bold">Transmitter-Receiver (T/R) avionic system</strong>, effectively bridging abstract communication protocols with applied signal-processing methodologies.
                </p>
              </motion.div>

            </div>

          </div>


          {/* ========================================================= */}
          {/* CARD 14: END-TO-END T/R EMBEDDED SYSTEM SIMULATION        */}
          {/* ========================================================= */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-none p-8 sm:p-10 md:p-12 border border-slate-200 shadow-xl shadow-sky-900/10 text-slate-900 relative group overflow-hidden font-['Times_New_Roman',_Times,_serif]">
            
            {/* 1. TOP OF CARD 14: CENTER-ALIGNED HEADING SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full mb-8 pt-4 pb-6 border-b border-slate-200 relative z-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Radio className="w-4 h-4 text-emerald-600" />
                <span>Transmitter-Receiver (T/R) Signal Simulation</span>
              </div>

              {/* Card 14 Main Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif] text-center w-full">
                Figure 1: End-to-End T/R Embedded System Signal Processing Plot
              </h3>
            </motion.div>

            {/* 2. CENTER IMAGE CONTAINER WITH AUTO FIT */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full flex flex-col items-center justify-center text-center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="w-full max-w-5xl rounded-none overflow-hidden border border-slate-200 shadow-2xl bg-white p-2 relative flex items-center justify-center">
                <Image 
                  src="/images/tr-embedded-system-simulation.png"
                  alt="Figure 1: End-to-End T/R Embedded System Signal Processing Plot"
                  width={1200}
                  height={675}
                  className="w-full h-auto max-h-[600px] object-contain mx-auto block transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
