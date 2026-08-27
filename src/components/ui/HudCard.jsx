"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HudCard({
  children,
  className = "",
  variant = "cyan", // cyan | amber | red
  statusText,
  title,
}) {
  const variantClasses = {
    cyan: "hud-panel border-[rgba(0,240,255,0.25)] text-slate-100",
    amber: "hud-panel-amber text-slate-100",
    red: "hud-panel-red text-slate-100",
  };

  const glowText = {
    cyan: "text-[#00f0ff] glow-cyan",
    amber: "text-[#ffb700] glow-amber",
    red: "text-[#ff2e55] glow-red",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`rounded-lg p-6 relative ${variantClasses[variant] || variantClasses.cyan} ${className}`}
    >
      {/* 4 HUD Corners */}
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      {/* Header Bar if title or status provided */}
      {(title || statusText) && (
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-hud text-xs tracking-wider">
          {title && <span className={`font-bold uppercase ${glowText[variant]}`}>{title}</span>}
          {statusText && (
            <div className="flex items-center gap-2 bg-black/40 px-2.5 py-1 rounded border border-white/10 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
              <span className="uppercase text-slate-300 font-mono">{statusText}</span>
            </div>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}
