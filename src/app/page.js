import NavbarV2 from "@/components/ui/NavbarV2";
import HeroV2 from "@/components/sections/HeroV2";
import AffiliationsV2 from "@/components/sections/AffiliationsV2";
import ProfessionalSummaryV2 from "@/components/sections/ProfessionalSummaryV2";
import ResearchTechnicalProjects from "@/components/sections/ResearchTechnicalProjects";
import InternshipExperience from "@/components/sections/InternshipExperience";
import SkillsGridV2 from "@/components/sections/SkillsGridV2";
import EducationV2 from "@/components/sections/EducationV2";
import CertificationsV2 from "@/components/sections/CertificationsV2";
import ContactV2 from "@/components/sections/ContactV2";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#047857] selection:text-white">
      <NavbarV2 />
      <HeroV2 />
      <AffiliationsV2 />
      <ProfessionalSummaryV2 />
      <ResearchTechnicalProjects />
      <InternshipExperience />
      <SkillsGridV2 />
      <EducationV2 />
      <CertificationsV2 />
      <ContactV2 />
    </main>
  );
}
