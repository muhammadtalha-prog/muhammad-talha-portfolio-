"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUp, Globe, Share2, BookOpen } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 2.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="min-h-screen relative flex flex-col justify-center px-6 py-24 space-y-16">
      <div className="max-w-5xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Telemetry Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <Mail className="w-4 h-4" />
            <span>TRANSMISSION CHANNEL // DIRECT CONTACT</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Initiate Contact
          </h2>

          <p className="text-slate-400 font-mono text-sm">
            Open for AI Agent engineering, computer vision research, and technical collaboration.
          </p>

          <div className="space-y-4 pt-2 font-mono text-sm">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="w-8 h-8 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">INSTITUTION EMAIL</span>
                <a href="mailto:su72-bscsm-f22-068@superior.edu.pk" className="hover:text-[#00f0ff] transition-colors">
                  su72-bscsm-f22-068@superior.edu.pk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <div className="w-8 h-8 rounded bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center text-[#ffb700]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">PHONE / WHATSAPP</span>
                <a href="tel:+923367508375" className="hover:text-[#ffb700] transition-colors">
                  +92 336 7508375
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-200">
              <div className="w-8 h-8 rounded bg-[#ff2e55]/10 border border-[#ff2e55]/30 flex items-center justify-center text-[#ff2e55]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">LOCATION</span>
                <span>G-9/4, Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-4">
            <a href="https://github.com/muhammadtalha-prog" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded bg-[#0c121e] border border-white/10 hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-colors" title="GitHub">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammadtalha-prog" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded bg-[#0c121e] border border-white/10 hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-colors" title="LinkedIn">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded bg-[#0c121e] border border-white/10 hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-colors" title="Medium">
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7">
          <HudCard variant="cyan" statusText="TRANSMITTER // READY" title="ENCRYPTED TRANSMISSION FORM">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#00f0ff] mx-auto animate-bounce" />
                <h3 className="font-hud text-lg text-white font-bold">TRANSMISSION RECEIVED</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been logged into the queue and Muhammad Talha will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#00f0ff]/20 border border-[#00f0ff] text-[#00f0ff] font-hud text-xs tracking-widest uppercase rounded hover:bg-[#00f0ff] hover:text-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-hud text-xs text-slate-300 mb-1 uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full bg-[#06090e] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f0ff] font-mono"
                  />
                </div>

                <div>
                  <label className="block font-hud text-xs text-slate-300 mb-1 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#06090e] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f0ff] font-mono"
                  />
                </div>

                <div>
                  <label className="block font-hud text-xs text-slate-300 mb-1 uppercase">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Type your message or project inquiry..."
                    className="w-full bg-[#06090e] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f0ff] font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#00f0ff] text-black font-hud text-xs font-bold tracking-widest uppercase rounded flex items-center justify-center gap-2 hover:bg-[#ffb700] transition-colors shadow-lg shadow-[#00f0ff]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Encrypted Message</span>
                </button>
              </form>
            )}
          </HudCard>
        </div>

      </div>

      {/* Infinite Loop Rewind Return Button */}
      <div className="text-center pt-12 z-10">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0c121e] border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all"
        >
          <ArrowUp className="w-4 h-4 animate-bounce" />
          <span>REVERSE FLY-BACK TO HERO (LOOP JOURNEY)</span>
        </button>
      </div>
    </section>
  );
}
