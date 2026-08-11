import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BusinessImpact from "@/components/BusinessImpact";
import DashboardShowcase from "@/components/DashboardShowcase";
import AboutMe from "@/components/AboutMe";
import SkillsCloud from "@/components/SkillsCloud";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsGallery from "@/components/ProjectsGallery";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <HeroSection />
      <BusinessImpact />
      <DashboardShowcase />
      <AboutMe />
      <SkillsCloud />
      <ExperienceTimeline />
      <ProjectsGallery />
      <EducationCertifications />
      <ContactSection />
      <Footer />
    </main>
  );
}
