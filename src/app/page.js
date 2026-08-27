"use client";
import dynamic from "next/dynamic";
import HudNavbar from "@/components/ui/HudNavbar";
import HeroSection from "@/components/sections/HeroSection";
import IrstdResearchSection from "@/components/sections/IrstdResearchSection";
import MaritimeResearchSection from "@/components/sections/MaritimeResearchSection";
import MatlabResearchSection from "@/components/sections/MatlabResearchSection";
import ElectricBikeSection from "@/components/sections/ElectricBikeSection";
import ProjectsGallerySection from "@/components/sections/ProjectsGallerySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

// Dynamically import WebGL 3D Master Canvas with SSR disabled
const MasterCanvas3D = dynamic(() => import("@/components/canvas/MasterCanvas3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06090e] text-slate-100 overflow-hidden">
      {/* Fixed 3D WebGL Canvas Background */}
      <MasterCanvas3D />

      {/* Fixed Glass HUD Navbar */}
      <HudNavbar />

      {/* Continuous DOM Sections with Scroll-Synced Camera Trajectory */}
      <div className="relative z-10">
        <HeroSection />
        <IrstdResearchSection />
        <MaritimeResearchSection />
        <MatlabResearchSection />
        <ElectricBikeSection />
        <ProjectsGallerySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
