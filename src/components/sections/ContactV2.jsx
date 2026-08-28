"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Quote, User, Send, CheckCircle2, ExternalLink } from "lucide-react";

export default function ContactV2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:su72-bscsm-f22-068@superior.edu.pk?subject=${encodeURIComponent(
      form.subject || `Inquiry from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <>
      {/* 20px Solid Black Separation Bar */}
      <div className="w-full h-[20px] bg-slate-950 relative z-20" />

      {/* Section Wrapper Matching Site Theme Background */}
      <section 
        id="personal-information" 
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
        <div className="absolute -top-40 -right-24 w-[650px] h-[450px] bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 w-[650px] h-[450px] bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">

          {/* ========================================================= */}
          {/* DANTE ALIGHIERI QUOTE BANNER WITH SCROLL MOTION           */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-gradient-to-r from-amber-100/95 via-yellow-50/90 to-amber-100/95 text-slate-900 rounded-none border-4 border-amber-400/80 shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-8 sm:p-12 relative overflow-hidden font-['Times_New_Roman',_Times,_serif] flex flex-col items-center justify-center text-center"
          >
            {/* Decorative Quote Icon Accent */}
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="flex items-center justify-center w-full pb-4"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-900 shadow-sm mx-auto">
                <Quote className="w-8 h-8 text-amber-800" />
              </div>
            </motion.div>

            {/* Italian Quote Text - Center Aligned */}
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-2xl sm:text-3xl md:text-4xl italic font-extrabold text-slate-950 leading-relaxed font-['Times_New_Roman',_Times,_serif] max-w-4xl mx-auto text-center w-full"
            >
              &ldquo;Considerate la vostra semenza:<br />
              fatti non foste a viver come bruti,<br />
              ma per seguir virtute e canoscenza.&rdquo;
            </motion.blockquote>

            {/* Poet Name & Context - Center Aligned */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="pt-6 space-y-1 text-center w-full flex flex-col items-center justify-center"
            >
              <p className="text-xl sm:text-2xl font-bold text-amber-950 font-['Times_New_Roman',_Times,_serif] text-center">
                — Dante Alighieri
              </p>
              <p className="text-base sm:text-lg font-mono font-bold text-amber-800 tracking-wider text-center">
                The Divine Comedy (Inferno, Canto XXVI)
              </p>
            </motion.div>

            {/* English Translation - Center Aligned */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              className="mt-6 pt-6 border-t border-amber-300/80 max-w-3xl mx-auto text-center w-full flex flex-col items-center justify-center"
            >
              <p className="text-slate-900 text-lg sm:text-xl leading-relaxed font-bold font-['Times_New_Roman',_Times,_serif] text-center">
                <strong className="text-slate-950 font-extrabold">Translation:</strong> &ldquo;Consider your origin. You were not formed to live like brutes but to follow virtue and knowledge.&rdquo;
              </p>
            </motion.div>
          </motion.div>


          {/* ========================================================= */}
          {/* SECTION HEADER: PERSONAL INFORMATION WITH SCROLL MOTION   */}
          {/* ========================================================= */}
          <motion.div
            id="personal-info-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white/90 backdrop-blur-xl rounded-none border border-slate-200 shadow-xl text-center font-['Times_New_Roman',_Times,_serif] scroll-mt-28"
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginTop: "60px",
              marginBottom: "60px"
            }}
          >
            <div className="flex flex-col items-center justify-center text-center w-full space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-900 text-xs font-mono font-bold uppercase tracking-widest text-center shadow-sm">
                <User className="w-4 h-4 text-sky-700" />
                <span>Personal Portfolio Telemetry</span>
              </div>
              <h2 className="font-['Times_New_Roman',_Times,_serif] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight text-center w-full">
                Personal Information
              </h2>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* HORIZONTAL 2-SUBDIV PERSONAL CARD WITH SCROLL MOTION      */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.15 }}
            className="w-full bg-white/95 text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-8 sm:p-12 font-['Times_New_Roman',_Times,_serif]"
            style={{ padding: "50px 45px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
              
              {/* SUB-DIV 1 (LEFT): 200PX ROUND DP PIC & NAME UNDERNEATH (SCROLL MOTION) */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-6 lg:border-r lg:border-slate-200"
                style={{ paddingRight: "45px", paddingTop: "20px" }}
              >
                {/* 200px x 200px Round DP Image Cropped to Upper Section */}
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-slate-300 shadow-xl bg-slate-100 shrink-0 cursor-pointer"
                >
                  <Image
                    src="/certs/muhammad-talha-dp-cropped.jpg"
                    alt="Muhammad Talha"
                    width={200}
                    height={200}
                    style={{ width: "200px", height: "200px" }}
                    className="w-[200px] h-[200px] object-cover object-top rounded-full"
                  />
                </motion.div>

                {/* Name Mentioned Directly Under DP */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif] tracking-tight">
                  Muhammad Talha
                </h3>
              </motion.div>

              {/* SUB-DIV 2 (RIGHT): SIMPLE MAIL, PHONE, LOCATION & SOCIAL ICONS (SCROLL MOTION) */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="lg:col-span-7 flex flex-col justify-center space-y-10 sm:space-y-12 text-left font-['Times_New_Roman',_Times,_serif]"
                style={{ paddingLeft: "40px", paddingTop: "20px" }}
              >
                
                {/* Simple Mail Icon & Email with Line Spacing & Hover Motion */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-5 py-1 cursor-pointer"
                >
                  <Mail className="w-7 h-7 text-slate-800 shrink-0" />
                  <a 
                    href="mailto:su72-bscsm-f22-068@superior.edu.pk" 
                    className="text-slate-950 font-bold hover:text-sky-700 transition-colors text-lg sm:text-xl md:text-2xl font-['Times_New_Roman',_Times,_serif] break-all leading-relaxed"
                  >
                    su72-bscsm-f22-068@superior.edu.pk
                  </a>
                </motion.div>

                {/* Simple Phone Icon & Number with Line Spacing & Hover Motion */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-5 py-1 cursor-pointer"
                >
                  <Phone className="w-7 h-7 text-slate-800 shrink-0" />
                  <a 
                    href="tel:+923367508375" 
                    className="text-slate-950 font-bold hover:text-emerald-700 transition-colors text-lg sm:text-xl md:text-2xl font-['Times_New_Roman',_Times,_serif] leading-relaxed"
                  >
                    +92 336 7508375
                  </a>
                </motion.div>

                {/* Simple Location Icon & Address with Line Spacing & Hover Motion */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-5 py-1 cursor-pointer"
                >
                  <MapPin className="w-7 h-7 text-slate-800 shrink-0" />
                  <span className="text-slate-950 font-bold text-lg sm:text-xl md:text-2xl font-['Times_New_Roman',_Times,_serif] leading-relaxed">
                    G-9/4, Islamabad, Pakistan
                  </span>
                </motion.div>

                {/* ORIGINAL GITHUB & LINKEDIN BRAND ICONS IN COMPACT ROUND CIRCLES WITH SPRING MOTION */}
                <div 
                  className="border-t border-slate-200 flex items-center gap-6"
                  style={{ paddingTop: "20px" }}
                >
                  {/* Authentic GitHub Vector Icon in Compact Round Circle */}
                  <motion.a
                    whileHover={{ scale: 1.15, y: -4, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    href="https://github.com/muhammadtalha-prog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group/git text-slate-950 hover:text-sky-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-950 hover:bg-slate-800 text-white flex items-center justify-center shadow-md transition-colors shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold font-['Times_New_Roman',_Times,_serif]">GitHub</span>
                  </motion.a>

                  {/* Authentic LinkedIn Vector Icon in Compact Round Circle */}
                  <motion.a
                    whileHover={{ scale: 1.15, y: -4, rotate: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group/linkedin text-slate-950 hover:text-[#0a66c2] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0a66c2] hover:bg-[#004182] text-white flex items-center justify-center shadow-md transition-colors shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold font-['Times_New_Roman',_Times,_serif]">LinkedIn</span>
                  </motion.a>
                </div>

              </motion.div>

            </div>
          </motion.div>


          {/* ========================================================= */}
          {/* VERTICAL SINGLE-LINE CONTACT US FORM CARD                 */}
          {/* ========================================================= */}
          <motion.div
            id="contact-us-form"
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.15 }}
            className="w-full bg-white/95 text-slate-900 rounded-none border-none shadow-[0_25px_60px_rgba(0,0,0,0.12)] font-['Times_New_Roman',_Times,_serif] text-left scroll-mt-28"
            style={{ padding: "60px 55px", marginTop: "60px" }}
          >
            {/* Form Header Title */}
            <div className="border-b border-slate-200 pb-6 mb-10 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif]">
                Contact Us / Direct Message
              </h3>

              {/* Quick Action: Direct Mailto Button with Green & Gray Theme Gradient */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:su72-bscsm-f22-068@superior.edu.pk"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-300 hover:from-emerald-500 hover:to-slate-400 text-slate-950 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-md border border-emerald-300/60"
                style={{ padding: "14px 28px" }}
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Direct Mail Client</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </motion.a>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-12 text-center space-y-6 bg-emerald-50/80 border border-emerald-200/80 rounded-none"
                style={{ padding: "40px" }}
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Times_New_Roman',_Times,_serif]">
                  Message Dispatched to Mail Client
                </h4>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-['Times_New_Roman',_Times,_serif] font-bold">
                  Your default mail client has launched addressed to <span className="font-mono text-sm font-extrabold text-emerald-900">su72-bscsm-f22-068@superior.edu.pk</span>.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-300 hover:from-emerald-500 hover:to-slate-400 text-slate-950 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all shadow-md border border-emerald-300/60"
                  style={{ padding: "16px 36px" }}
                >
                  Write Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-10 w-full">
                
                {/* 1. Full Name - Vertical Baseline Input */}
                <div className="flex flex-col space-y-3 w-full">
                  <label className="block text-sm font-extrabold text-slate-950 uppercase font-mono tracking-wider pb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Example: Dr. Alexander Wright / AI Researcher..."
                    className="w-full bg-slate-50/50 border-b-2 border-t-0 border-l-0 border-r-0 border-slate-300 focus:border-emerald-600 focus:bg-emerald-50/20 rounded-none text-base sm:text-lg text-slate-950 font-bold focus:outline-none transition-all font-['Times_New_Roman',_Times,_serif]"
                    style={{ padding: "18px 20px" }}
                  />
                </div>

                {/* 2. Email Address - Vertical Baseline Input */}
                <div className="flex flex-col space-y-3 w-full">
                  <label className="block text-sm font-extrabold text-slate-950 uppercase font-mono tracking-wider pb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Example: alexander.wright@research-institute.org..."
                    className="w-full bg-slate-50/50 border-b-2 border-t-0 border-l-0 border-r-0 border-slate-300 focus:border-emerald-600 focus:bg-emerald-50/20 rounded-none text-base sm:text-lg text-slate-950 font-bold focus:outline-none transition-all font-['Times_New_Roman',_Times,_serif]"
                    style={{ padding: "18px 20px" }}
                  />
                </div>

                {/* 3. Subject / Topic - Vertical Baseline Input */}
                <div className="flex flex-col space-y-3 w-full">
                  <label className="block text-sm font-extrabold text-slate-950 uppercase font-mono tracking-wider pb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Example: Research Collaboration / Autonomous Agent Inquiry..."
                    className="w-full bg-slate-50/50 border-b-2 border-t-0 border-l-0 border-r-0 border-slate-300 focus:border-emerald-600 focus:bg-emerald-50/20 rounded-none text-base sm:text-lg text-slate-950 font-bold focus:outline-none transition-all font-['Times_New_Roman',_Times,_serif]"
                    style={{ padding: "18px 20px" }}
                  />
                </div>

                {/* 4. Message Box - Increased Height Baseline Textarea */}
                <div className="flex flex-col space-y-3 w-full">
                  <label className="block text-sm font-extrabold text-slate-950 uppercase font-mono tracking-wider pb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Example: Hello Muhammad, I would like to discuss a research collaboration opportunity..."
                    className="w-full bg-slate-50/50 border-b-2 border-t-0 border-l-0 border-r-0 border-slate-300 focus:border-emerald-600 focus:bg-emerald-50/20 rounded-none text-base sm:text-lg text-slate-950 font-bold focus:outline-none transition-all font-['Times_New_Roman',_Times,_serif] min-h-[160px] resize-y"
                    style={{ padding: "18px 20px" }}
                  />
                </div>

                {/* Form Action Buttons with Green & Gray Theme Gradient */}
                <div className="pt-10 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-600 uppercase">
                    DIRECT MAIL TO: <strong className="text-emerald-950">su72-bscsm-f22-068@superior.edu.pk</strong>
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-slate-300 hover:from-emerald-500 hover:to-slate-400 text-slate-950 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all shadow-lg border border-emerald-300/60 flex items-center gap-3"
                    style={{ padding: "18px 40px" }}
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Direct Email Message</span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </section>

      {/* Black Div with 20% Height (20vh) & 100% Viewport Width (100vw) */}
      <footer className="w-full min-h-[20vh] bg-slate-950 text-slate-100 flex items-center justify-center text-center px-6 py-8 relative z-20 border-t border-slate-800 shadow-2xl">
        <p className="font-mono text-sm sm:text-base md:text-lg font-extrabold tracking-widest text-slate-100 uppercase">
          © 2026 MUHAMMAD TALHA — ALL RIGHTS RESERVED.
        </p>
      </footer>
    </>
  );
}
