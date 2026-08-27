"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal, Cpu } from "lucide-react";

export default function HudNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", target: "#hero" },
    { label: "Research", target: "#research" },
    { label: "Projects", target: "#projects" },
    { label: "Experience", target: "#experience" },
    { label: "Skills", target: "#skills" },
    { label: "Certifications", target: "#certifications" },
    { label: "Contact", target: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element);
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#06090e]/80 backdrop-blur-md border-b border-[#00f0ff]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand HUD Badge */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("#hero")}>
            <div className="w-8 h-8 rounded border border-[#00f0ff]/60 bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] glow-cyan">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-hud font-bold text-sm tracking-wider text-white">M. TALHA</span>
              <span className="block font-mono text-[9px] text-[#00f0ff] tracking-widest uppercase">
                AI RESEARCH // ML
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.target)}
                className="font-hud text-xs uppercase tracking-wider text-slate-300 hover:text-[#00f0ff] transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Status Indicator & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-[#0b101b] px-3 py-1.5 rounded border border-[#00f0ff]/30 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span className="text-[#00f0ff]">SYS_ONLINE</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-200 hover:text-[#00f0ff] p-2"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Indicator Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-[#00f0ff] via-[#ffb700] to-[#ff2e55] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#06090e]/95 backdrop-blur-xl border-b border-[#00f0ff]/30 py-6 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.target)}
                  className="font-hud text-sm uppercase tracking-widest text-left text-slate-200 hover:text-[#00f0ff] py-2 border-b border-white/5"
                >
                  0{idx + 1} // {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
