"use client";
import React from "react";
import { motion } from "framer-motion";
import HudCard from "@/components/ui/HudCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "AI Agent Developer & Research Engineer Intern",
      company: "Institute of Avionics and Aeronautics (IAA), Air University / NASTP",
      location: "Islamabad, Pakistan",
      period: "Jun 2026 – Aug 2026",
      variant: "cyan",
      bullets: [
        "Working on advanced AI agent development and applied research in computer vision for defense/aerospace applications.",
        "Leading research on maritime ship detection using deep learning, developing and benchmarking multiple YOLO-based architectures.",
      ],
    },
    {
      role: "Junior Web Developer Intern",
      company: "Doxfen Company",
      location: "Sargodha, Pakistan",
      period: "Dec 2025 – Feb 2026",
      variant: "amber",
      bullets: [
        "Frontend Development: Developed the user interface for the 'Business Builder' platform using HTML, CSS, and JavaScript.",
        "UI/UX Implementation: Translated design concepts into functional web components, ensuring a responsive experience.",
      ],
    },
    {
      role: "Graphic Designer & Digital Marketing Intern",
      company: "Digital Media Agency",
      location: "Sargodha, Pakistan",
      period: "Aug 2025 – Oct 2025",
      variant: "amber",
      bullets: [
        "Created visual assets, including logos, branding materials, and marketing posters, gaining hands-on experience in graphic design.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-[140vh] relative flex flex-col justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] font-hud text-xs tracking-widest uppercase">
            <Briefcase className="w-4 h-4" />
            <span>TIMELINE // CAREER & RESEARCH PATH</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight">
            Internship Experience
          </h2>
        </div>

        {/* Vertical Timeline Corridor Nodes */}
        <div className="relative border-l-2 border-[#00f0ff]/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Waypoint Node Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#06090e] border-2 border-[#00f0ff] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              </div>

              <HudCard variant={exp.variant} statusText={exp.period} title={exp.role}>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#00f0ff] gap-2">
                    <span className="font-bold">{exp.company}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </HudCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
