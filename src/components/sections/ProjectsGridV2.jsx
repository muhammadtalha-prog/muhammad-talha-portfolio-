"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Hand, Terminal, Bot, Radio, CheckCircle2 } from "lucide-react";

export default function ProjectsGridV2() {
  const projects = [
    {
      id: "5a",
      title: "Electric Bicycle (PBL Project)",
      category: "PBL HARDWARE LEAD",
      image: "/images/electric-bike.svg",
      icon: Wrench,
      accent: "#047857",
      bullets: [
        "Led a team as Project Lead, managing hardware selection, design, and end-to-end build of a functional electric bicycle.",
        "Directed and supervised team members across mechanical assembly and system integration tasks.",
        "Owned hands-on hardware implementation, applying practical engineering and leadership skills.",
      ],
    },
    {
      id: "5b",
      title: "AI Hand-Gesture Volume Controller",
      category: "COMPUTER VISION (PYTHON)",
      image: "/images/hand-gesture.svg",
      icon: Hand,
      accent: "#0284c7",
      bullets: [
        "Engineered a computer vision application using Python to control system hardware (audio) via real-time finger gestures.",
        "Utilized camera-based tracking to map hand movements to device functions, reinforcing logic and signal processing skills.",
      ],
    },
    {
      id: "5c",
      title: "Systems Development (C++)",
      category: "STRUCTURED CLI APPLICATIONS",
      image: "/images/cpp-terminal.svg",
      icon: Terminal,
      accent: "#047857",
      bullets: [
        "Hospital & Library Management Systems: Built structured CLI applications demonstrating mastery of C++ fundamentals.",
        "Applied object-oriented architecture, custom data structures, and memory management optimization.",
      ],
    },
    {
      id: "5d",
      title: "AI Agent Developer Portfolio",
      category: "AUTONOMOUS MULTI-AGENTS",
      image: "/images/ai-agents.svg",
      icon: Bot,
      accent: "#059669",
      bullets: [
        "MATLAB Coding Agent: Generates, debugs, and iterates MATLAB code via natural language prompts.",
        "Local Multi-Agent Code Generator: Locally-run multi-agent system collaborating (planning, coding, reviewing) without cloud APIs.",
        "Multi-API Chatbot Agent: Deployed on Streamlit.app using Grok API for real-time AI conversations.",
        "Cross-Platform Context Bridge: Browser extension capturing history across ChatGPT, Gemini, & DeepSeek to transfer context seamlessly.",
      ],
    },
    {
      id: "5e",
      title: "Embedded Systems Knowledge & T/R Avionic",
      category: "EMBEDDED HARDWARE & SECURITY",
      image: "/images/embedded-fpga.svg",
      icon: Radio,
      accent: "#0284c7",
      bullets: [
        "Studied ADC/DAC, Digital Signal Processing (DSP), FPGA fundamentals, FEC, and modulation techniques.",
        "Explored end-to-end embedded system security including encryption/decryption workflows for data pipelines.",
        "Transmitter-Receiver Avionic System: Built a program modeling a T/R avionic system applying signal processing concepts.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs text-[#047857] uppercase tracking-widest font-bold">
            ENGINEERING &amp; AGENT DEVELOPMENT
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-slate-900">
            Projects Portfolio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hands-on hardware builds, computer vision tools, C++ systems, and autonomous multi-agent frameworks.
          </p>
        </div>

        {/* 3-Column / 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-clean flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden border-b border-slate-200">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-xs border border-slate-200 text-[10px] font-mono text-[#047857] font-bold uppercase shadow-xs">
                    {proj.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                      style={{ backgroundColor: proj.accent }}
                    >
                      <proj.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">{proj.title}</h3>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
