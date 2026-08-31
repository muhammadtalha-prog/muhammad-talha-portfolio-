"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw Motion Values for Immediate Tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring Physics for Trailing Outer Ring
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect Touch/Coarse Pointer Devices (Mobile / Tablets)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Global Hover Detection for Interactive Elements
    const handleOverInteractive = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("img") ||
        target.closest(".group")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleOverInteractive);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleOverInteractive);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render custom cursor on mobile or touch devices
  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. FAST CORE DOT (Direct Mouse Tracking) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full bg-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 12 : 8,
          height: isHovered ? 12 : 8,
          scale: isClicked ? 0.6 : 1,
          backgroundColor: isHovered ? "#34d399" : "#00e5ff",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* 2. TRAILING SMOOTH AURA RING (Spring Physics) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full border border-[#00e5ff]/60 bg-[#00e5ff]/10 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,229,255,0.35)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          scale: isClicked ? 0.8 : isHovered ? 1.25 : 1,
          borderColor: isHovered ? "rgba(52, 211, 153, 0.8)" : "rgba(0, 229, 255, 0.6)",
          backgroundColor: isHovered ? "rgba(52, 211, 153, 0.15)" : "rgba(0, 229, 255, 0.08)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* 3. CLICK SHOCKWAVE EFFECT */}
      {isClicked && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 rounded-full border-2 border-emerald-400"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ width: 10, height: 10, opacity: 1 }}
          animate={{ width: 60, height: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
