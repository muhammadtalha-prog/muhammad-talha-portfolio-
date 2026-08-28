"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu, X, ChevronDown,
  Search, Briefcase, Award, GraduationCap, Cpu, Phone, ZoomIn, FileText, Send
} from "lucide-react";

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dpModalOpen, setDpModalOpen] = useState(false);

  // SECTION TARGETS NOW SCROLL DIRECTLY TO HEADING POSITION (SKIPPING TOP BANNER IMAGES)
  const sectionsList = [
    { label: "Professional Summary", target: "#summary-heading", icon: FileText },
    { label: "Research & Technical Projects", target: "#research-heading", icon: Search },
    { label: "Internship & Work Experience", target: "#internship-heading", icon: Briefcase },
    { label: "Skills & Technical Toolkit", target: "#skills-heading", icon: Cpu },
    { label: "Academic Education", target: "#education-heading", icon: GraduationCap },
    { label: "Certifications & Achievements", target: "#certifications-heading", icon: Award },
    { label: "Personal Information", target: "#personal-info-heading", icon: Phone },
    { label: "Contact Us Form", target: "#contact-us-form", icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (targetId) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);

    const idClean = targetId.replace("#", "");
    let el = document.getElementById(idClean);

    // Precise Heading Fallback Logic
    if (!el && (idClean === "summary" || idClean === "summary-heading" || idClean === "professional-summary")) {
      el = document.getElementById("summary-heading") || document.getElementById("professional-summary");
    }
    if (!el && (idClean === "research" || idClean === "research-projects")) {
      el = document.getElementById("research-heading") || document.getElementById("research-projects");
    }
    if (!el && (idClean === "internship" || idClean === "internship-experience")) {
      el = document.getElementById("internship-heading") || document.getElementById("internship-experience");
    }
    if (!el && (idClean === "skills" || idClean === "skills-capabilities")) {
      el = document.getElementById("skills-heading") || document.getElementById("skills-capabilities");
    }
    if (!el && (idClean === "education" || idClean === "academic-education")) {
      el = document.getElementById("education-heading") || document.getElementById("education");
    }
    if (!el && (idClean === "certifications" || idClean === "certifications-achievements")) {
      el = document.getElementById("certifications-heading") || document.getElementById("certifications");
    }
    if (!el && (idClean === "personal" || idClean === "personal-information")) {
      el = document.getElementById("personal-info-heading") || document.getElementById("personal-information");
    }
    if (!el && (idClean === "contact" || idClean === "contact-us" || idClean === "contact-us-form")) {
      el = document.getElementById("contact-us-form");
    }
    if (!el && (idClean === "home" || idClean === "hero")) {
      el = document.getElementById("hero");
    }

    if (el) {
      const navOffset = 90; // offset for fixed header
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#0b1329]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl shadow-black/40"
            : "bg-[#0b1329]/90 backdrop-blur-sm py-5.5 border-b border-white/10"
          }`}
      >
        <div className="w-full px-6 sm:px-12 grid grid-cols-12 items-center">

          {/* Left Side (Col 3): WhatsApp-style Clickable DP Circle + Name */}
          <div className="col-span-8 lg:col-span-3 flex items-center gap-3">
            <div className="flex items-center gap-3.5 group shrink-0">
              {/* WhatsApp Clickable DP Circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDpModalOpen(true)}
                className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00e5ff] shadow-lg shadow-[#00e5ff]/20 group-hover:border-[#10b981] transition-all shrink-0 cursor-pointer bg-slate-900"
                title="Click to view Profile Picture (WhatsApp Style)"
              >
                <Image
                  src="/certs/muhammad-talha-dp-cropped.jpg"
                  alt="Muhammad Talha Profile Picture"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              <span
                onClick={() => scrollTo("#hero")}
                className="font-heading font-extrabold text-base sm:text-xl text-white tracking-tight hover:text-[#00e5ff] transition-colors cursor-pointer whitespace-nowrap"
              >
                MUHAMMAD TALHA
              </span>
            </div>
          </div>

          {/* Center (Col 6): 3 Page Sections (HOME, NAVIGATION, CONTACT US) aligned DEAD-CENTER */}
          <div className="hidden lg:flex col-span-6 justify-center items-center">
            <nav className="flex items-center gap-10">
              {/* 1. HOME */}
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#hero")}
                className="text-sm font-extrabold uppercase tracking-widest text-slate-200 hover:text-[#00e5ff] transition-colors py-1 relative group cursor-pointer"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#00e5ff] transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.button>

              {/* 2. NAVIGATION (Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-widest text-slate-200 hover:text-[#00e5ff] transition-colors py-1 group cursor-pointer"
                >
                  <span>NAVIGATION</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#00e5ff]" : ""}`} />
                </motion.button>

                {/* Navigation Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0e1938] border border-white/15 rounded-2xl shadow-2xl p-3 z-50 space-y-1 backdrop-blur-xl"
                    >
                      {sectionsList.map((sec, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ x: 5, backgroundColor: "rgba(0, 229, 255, 0.12)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollTo(sec.target)}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-200 hover:text-[#00e5ff] text-xs font-bold text-left transition-all cursor-pointer"
                        >
                          <sec.icon className="w-4 h-4 text-[#00e5ff] shrink-0" />
                          <span>{sec.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. CONTACT US (Scrolls directly to Contact Us Form Header) */}
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#contact-us-form")}
                className="text-sm font-extrabold uppercase tracking-widest text-slate-200 hover:text-[#00e5ff] transition-colors py-1 relative group cursor-pointer"
              >
                CONTACT US
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#00e5ff] transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.button>
            </nav>
          </div>

          {/* Right Side (Col 3): Icons with generous RIGHT MARGIN for border spacing */}
          <div className="col-span-4 lg:col-span-3 flex justify-end items-center gap-4 pr-6 sm:pr-12">
            {/* 1. LinkedIn Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2, rotate: -4 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-[#0070f3]/20 text-slate-300 hover:text-[#00e5ff] border border-white/10 hover:border-[#00e5ff] transition-all flex items-center justify-center shrink-0 shadow-md"
              title="LinkedIn Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </motion.a>

            {/* 2. GitHub Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2, rotate: 4 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-[#0070f3]/20 text-slate-300 hover:text-[#00e5ff] border border-white/10 hover:border-[#00e5ff] transition-all flex items-center justify-center shrink-0 shadow-md"
              title="GitHub Profile"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-300 hover:text-[#00e5ff] p-2 ml-1 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0b1329] border-b border-white/10 px-6 py-6 space-y-4 text-white"
            >
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => scrollTo("#hero")}
                  className="text-left py-2 font-bold text-slate-200 hover:text-[#00e5ff] border-b border-white/10 cursor-pointer"
                >
                  HOME
                </button>

                <div className="py-2 border-b border-white/10 space-y-2">
                  <span className="text-xs font-bold font-mono text-[#00e5ff] uppercase">NAVIGATION SECTIONS</span>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {sectionsList.map((sec, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(sec.target)}
                        className="flex items-center gap-2.5 text-left text-xs font-semibold text-slate-300 hover:text-[#00e5ff] py-1.5 cursor-pointer"
                      >
                        <sec.icon className="w-3.5 h-3.5 text-[#00e5ff]" />
                        <span>{sec.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollTo("#contact-us-form")}
                  className="text-left py-2 font-bold text-slate-200 hover:text-[#00e5ff] cursor-pointer"
                >
                  CONTACT US
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* WhatsApp-Style DP Photo Lightbox Modal with Prominent Cross Close Button */}
      <AnimatePresence>
        {dpModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setDpModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-[#0b1329] border border-white/20 p-5 sm:p-7 max-w-md w-full rounded-3xl relative space-y-4 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prominent Cross Close Button */}
              <button
                onClick={() => setDpModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#00e5ff] p-2.5 rounded-full bg-white/15 hover:bg-white/30 transition-all border border-white/20 shadow-lg z-20 flex items-center gap-1 text-xs font-bold cursor-pointer"
                aria-label="Close zoomed profile photo"
                title="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="space-y-1 text-left pr-14">
                <span className="text-xs font-mono text-[#00e5ff] uppercase font-bold tracking-wider">PROFILE PHOTO</span>
                <h3 className="font-heading font-extrabold text-xl text-white">MUHAMMAD TALHA</h3>
              </div>

              {/* Full DP Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
                <Image
                  src="/certs/muhammad-talha-dp-cropped.jpg"
                  alt="Muhammad Talha Profile Photo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="text-center text-xs font-mono text-slate-400 pt-1">
                AI Research &amp; ML Engineer · Superior University &amp; Air University (IAA)
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
