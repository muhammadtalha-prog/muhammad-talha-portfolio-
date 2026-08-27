"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Hand, Terminal, Bot, Radio, Cpu, Network, Sparkles, Globe } from "lucide-react";

export default function ProjectsGallerySection() {
  return (
    <section id="projects" className="min-h-[160vh] relative flex flex-col justify-center px-6 py-24 space-y-16">
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        
        {/* Main Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            <span>ENGINEERING & AGENT DEVELOPMENT</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Projects & Agentic Systems Gallery
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            COMPUTER VISION · AUTONOMOUS AGENTS · C++ SYSTEMS · EMBEDDED AVIONICS
          </p>
        </div>

        {/* 6c. AI Agent Developer (Featured Large Section) */}
        <HudCard variant="cyan" statusText="FEATURED // AGENTIC SYSTEMS" title="AI AGENT DEVELOPER PORTFOLIO">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-[#06090e]/80 p-4 rounded border border-[#00f0ff]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#00f0ff] font-hud text-sm font-bold">
                <Bot className="w-4 h-4" />
                <span>MATLAB Coding Agent</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Built an AI coding agent for MATLAB, capable of generating, debugging, and iterating MATLAB code through natural language prompts.
              </p>
            </div>

            <div className="bg-[#06090e]/80 p-4 rounded border border-[#00f0ff]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#ffb700] font-hud text-sm font-bold">
                <Network className="w-4 h-4" />
                <span>Local Multi-Agent Code Generator</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Developed a locally-run, multi-agent system where specialized agents collaborate (planning, coding, reviewing) to generate and refine code end-to-end without relying on cloud APIs.
              </p>
            </div>

            <div className="bg-[#06090e]/80 p-4 rounded border border-[#00f0ff]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#3b82f6] font-hud text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Multi-API Chatbot Agent</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Deployed on Streamlit.app using the Grok API for real-time AI conversations.
              </p>
            </div>

            <div className="bg-[#06090e]/80 p-4 rounded border border-[#00f0ff]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#ff2e55] font-hud text-sm font-bold">
                <Globe className="w-4 h-4" />
                <span>Cross-Platform Context Bridge</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Browser extension that captures conversation history from ChatGPT, Gemini, and DeepSeek; summarizes context; and transfers it seamlessly to the next AI agent without re-explaining prompts.
              </p>
            </div>
          </div>
        </HudCard>

        {/* 6a, 6b, 6d Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 6a */}
          <HudCard variant="amber" statusText="CV SYSTEM" title="Hand-Gesture Volume Controller">
            <div className="space-y-3">
              <Hand className="w-6 h-6 text-[#ffb700]" />
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Engineered a computer vision app in Python to control audio via real-time finger gestures.</li>
                <li>Mapped camera hand tracking to device system functions.</li>
              </ul>
            </div>
          </HudCard>

          {/* 6b */}
          <HudCard variant="cyan" statusText="C++ CLI" title="Systems Development">
            <div className="space-y-3">
              <Terminal className="w-6 h-6 text-[#00f0ff]" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Hospital & Library Management Systems:</strong> Built structured C++ CLI applications demonstrating mastery of object-oriented programming, data structures, and memory management.
              </p>
            </div>
          </HudCard>

          {/* 6d */}
          <HudCard variant="red" statusText="EMBEDDED T/R" title="Embedded Systems Knowledge">
            <div className="space-y-3">
              <Radio className="w-6 h-6 text-[#ff2e55]" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Studied ADC/DAC, DSP, FPGA fundamentals, FEC, and embedded security. Built a program modeling a <strong>Transmitter-Receiver Avionic System</strong>.
              </p>
            </div>
          </HudCard>
        </div>

      </div>
    </section>
  );
}
