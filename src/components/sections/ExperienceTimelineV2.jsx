"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceTimelineV2() {
  const experiences = [
    {
      role: "AI Agent Developer & Research Engineer Intern",
      company: "Institute of Avionics and Aeronautics (IAA), Air University / NASTP",
      location: "Islamabad, Pakistan",
      period: "Jun 2026 – Aug 2026",
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
      bullets: [
        "Frontend Development: Developed the user interface for the 'Business Builder' platform using HTML, CSS, and JavaScript.",
        "UI/UX Implementation: Translated design concepts into functional web components, ensuring a responsive and user-friendly experience.",
      ],
    },
    {
      role: "Graphic Designer & Digital Marketing Intern",
      company: "Digital Media Agency",
      location: "Sargodha, Pakistan",
      period: "Aug 2025 – Oct 2025",
      bullets: [
        "Created visual assets, including logos and posters, gaining hands-on experience in professional graphic design.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs text-[#0284c7] uppercase tracking-widest font-bold">
            CAREER &amp; RESEARCH CHRONOLOGY
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-slate-900">
            Internship Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#047857] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#047857] flex items-center justify-center shadow-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-[#047857]" />
              </div>

              {/* Role Card */}
              <div className="card-clean p-6 sm:p-8 space-y-4 border-l-4 border-l-[#047857]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">{exp.role}</h3>
                    <span className="text-sm font-bold text-[#047857]">{exp.company}</span>
                  </div>
                  <div className="flex flex-col items-end text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-[#0284c7] font-bold">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-1 text-slate-600">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
