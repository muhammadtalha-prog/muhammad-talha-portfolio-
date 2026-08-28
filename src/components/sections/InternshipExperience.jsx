"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, ChevronRight } from "lucide-react";

export default function InternshipExperience() {
  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper Matching Site Theme Background */}
      <section 
        id="internship-experience" 
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
        <div id="internship-heading" className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center scroll-mt-28">
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-800 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <Briefcase className="w-4 h-4 text-sky-600" />
                <span>Professional Experience &amp; Industry Roles</span>
              </div>
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Internship Experience
              </h2>
            </div>
          </motion.div>
        </div>

        {/* INTERNSHIP CARDS CONTAINER WITH 40PX GAP */}
        <div 
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-left flex flex-col gap-[40px] pb-16"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          
          {/* ========================================================= */}
          {/* CARD 1: AIR UNIVERSITY / IAA (NASTP) INTERNSHIP CARD     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            style={{ marginBottom: "40px" }}
            className="w-full bg-gradient-to-r from-red-100/90 via-white to-yellow-100/90 text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-8 sm:p-10 md:p-12 relative overflow-hidden group font-['Times_New_Roman',_Times,_serif]"
          >
            {/* TWO SUB-DIVS: SUB-DIV 1 FOR LEFT TEXT, SUB-DIV 2 FOR RIGHT LOGO AND DATE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch relative z-10">
              
              {/* SUB-DIV 1: LEFT TEXT CONTENT (lg:col-span-7) - SLIDES IN FROM LEFT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Top Left Heading with Padding */}
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingBottom: "12px" }}
                >
                  AI Agent Developer &amp; Research Engineer | Institute of Avionics and Aeronautics (IAA), Air University, NASTP, Islamabad
                </h3>

                {/* Two Bullet Points Strictly as Given */}
                <div 
                  className="space-y-4 pt-2"
                  style={{ paddingLeft: "15px" }}
                >
                  {/* Point 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-['Times_New_Roman',_Times,_serif]">
                      Working on advanced <strong className="text-slate-950 font-bold underline decoration-red-600 decoration-2 underline-offset-4">AI agent development</strong> and applied research in <strong className="text-slate-950 font-bold">computer vision for defense/aerospace applications</strong>.
                    </p>
                  </motion.div>

                  {/* Point 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                    <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-['Times_New_Roman',_Times,_serif]">
                      Leading research on <strong className="text-slate-950 font-bold">maritime ship detection using deep learning</strong>, developing and benchmarking multiple <strong className="text-amber-700 font-bold">YOLO-based architectures</strong>.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* SUB-DIV 2: RIGHT SIDE FOR TRANSPARENT DATE BADGE AND CENTRALLY ALIGNED NASTP LOGO (lg:col-span-5) - SLIDES IN FROM RIGHT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 flex flex-col justify-between items-center h-full pt-1 pb-2"
              >
                
                {/* Transparent Date Badge with Black Text on Top Right (No Icon) */}
                <div className="w-full flex justify-center lg:justify-end">
                  <div className="inline-flex items-center px-3 py-1 bg-transparent text-slate-950 font-mono text-sm sm:text-base font-extrabold tracking-wider">
                    <span>Jun 2026 – Present</span>
                  </div>
                </div>

                {/* NASTP Logo Centered from Top, Bottom, and Sides with Hover Effects */}
                <div className="w-full flex-1 flex flex-col items-center justify-center my-auto py-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    viewport={{ once: false }}
                    className="relative flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/logos/nastp-logo-v2.png"
                      alt="NASTP Logo"
                      width={200}
                      height={200}
                      style={{ width: "200px", height: "200px" }}
                      className="w-[200px] h-[200px] max-w-[200px] max-h-[200px] object-contain filter drop-shadow-lg group-hover:drop-shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300"
                    />
                  </motion.div>
                </div>

              </motion.div>

            </div>

          </motion.div>


          {/* ========================================================= */}
          {/* CARD 2: DOXFEN COMPANY INTERNSHIP CARD                    */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            style={{ marginBottom: "40px" }}
            className="w-full bg-gradient-to-r from-purple-200 via-purple-100 to-slate-200 text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-8 sm:p-10 md:p-12 relative overflow-hidden group font-['Times_New_Roman',_Times,_serif]"
          >
            {/* TWO SUB-DIVS: SUB-DIV 1 FOR LEFT TEXT, SUB-DIV 2 FOR RIGHT LOGO AND DATE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch relative z-10">
              
              {/* SUB-DIV 1: LEFT TEXT CONTENT (lg:col-span-7) - SLIDES IN FROM LEFT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Top Left Heading with Padding */}
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingBottom: "12px" }}
                >
                  Junior Web Developer Intern | Doxfen Company
                </h3>

                {/* Two Bullet Points Strictly as Given */}
                <div 
                  className="space-y-4 pt-2"
                  style={{ paddingLeft: "15px" }}
                >
                  {/* Point 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-purple-700 shrink-0 mt-1" />
                    <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-['Times_New_Roman',_Times,_serif]">
                      <strong className="text-slate-950 font-bold underline decoration-purple-600 decoration-2 underline-offset-4">Frontend Development:</strong> Developed the user interface for the &quot;Business Builder&quot; platform using HTML, CSS, and JavaScript.
                    </p>
                  </motion.div>

                  {/* Point 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700 shrink-0 mt-1" />
                    <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-['Times_New_Roman',_Times,_serif]">
                      <strong className="text-slate-950 font-bold underline decoration-slate-600 decoration-2 underline-offset-4">UI/UX Implementation:</strong> Translated design concepts into functional web components, ensuring a responsive and user-friendly experience.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* SUB-DIV 2: RIGHT SIDE FOR TRANSPARENT DATE BADGE AND CENTRALLY ALIGNED DOXFEN LOGO (lg:col-span-5) - SLIDES IN FROM RIGHT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 flex flex-col justify-between items-center h-full pt-1 pb-2"
              >
                
                {/* Transparent Date Badge with Black Text on Top Right (No Icon) */}
                <div className="w-full flex justify-center lg:justify-end">
                  <div className="inline-flex items-center px-3 py-1 bg-transparent text-slate-950 font-mono text-sm sm:text-base font-extrabold tracking-wider">
                    <span>Dec 2025 – Feb 2026</span>
                  </div>
                </div>

                {/* Doxfen Swirl Logo Centered from Top, Bottom, and Sides with Hover Glow */}
                <div className="w-full flex-1 flex flex-col items-center justify-center my-auto py-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    viewport={{ once: false }}
                    className="relative flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/logos/doxfen-logo.png"
                      alt="Doxfen Company Logo"
                      width={200}
                      height={200}
                      style={{ width: "200px", height: "200px" }}
                      className="w-[200px] h-[200px] max-w-[200px] max-h-[200px] object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300"
                    />
                  </motion.div>
                </div>

              </motion.div>

            </div>

          </motion.div>


          {/* ========================================================= */}
          {/* CARD 3: ZAMEEN DOST GROUP OF COMPANIES CARD               */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-gradient-to-r from-emerald-100/95 via-amber-50/90 to-yellow-100/95 text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-8 sm:p-10 md:p-12 relative overflow-hidden group font-['Times_New_Roman',_Times,_serif]"
          >
            {/* TWO SUB-DIVS: SUB-DIV 1 FOR LEFT TEXT, SUB-DIV 2 FOR RIGHT LOGO AND DATE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch relative z-10">
              
              {/* SUB-DIV 1: LEFT TEXT CONTENT (lg:col-span-7) - SLIDES IN FROM LEFT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "15px" }}
              >
                {/* Top Left Heading with Padding */}
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight font-['Times_New_Roman',_Times,_serif]"
                  style={{ paddingBottom: "12px" }}
                >
                  Graphic Designer &amp; Digital Marketing Intern | Zameen Dost Group of Companies
                </h3>

                {/* Single Bullet Point Strictly as Given */}
                <div 
                  className="space-y-4 pt-2"
                  style={{ paddingLeft: "15px" }}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-['Times_New_Roman',_Times,_serif]">
                      Created visual assets, including <strong className="text-slate-950 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4">logos and posters</strong>, gaining hands-on experience in <strong className="text-amber-800 font-bold">professional graphic design</strong>.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* SUB-DIV 2: RIGHT SIDE FOR TRANSPARENT DATE BADGE AND CENTRALLY ALIGNED ZAMEEN DOST LOGO (lg:col-span-5) - SLIDES IN FROM RIGHT ON SCROLL */}
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-5 flex flex-col justify-between items-center h-full pt-1 pb-2"
              >
                
                {/* Transparent Date Badge with Black Text on Top Right (No Icon) */}
                <div className="w-full flex justify-center lg:justify-end">
                  <div className="inline-flex items-center px-3 py-1 bg-transparent text-slate-950 font-mono text-sm sm:text-base font-extrabold tracking-wider">
                    <span>Aug 2025 – Oct 2025</span>
                  </div>
                </div>

                {/* Zameen Dost Logo Centered from Top, Bottom, and Sides with Golden/Emerald Glow */}
                <div className="w-full flex-1 flex flex-col items-center justify-center my-auto py-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    viewport={{ once: false }}
                    className="relative flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src="/images/logos/zameendost-logo.png"
                      alt="Zameen Dost Group of Companies Logo"
                      width={200}
                      height={200}
                      style={{ width: "200px", height: "200px" }}
                      className="w-[200px] h-[200px] max-w-[200px] max-h-[200px] object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_30px_rgba(234,179,8,0.85)] transition-all duration-300"
                    />
                  </motion.div>
                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />
    </>
  );
}
