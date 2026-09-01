import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ServicesOfferings from "@/components/ServicesOfferings";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import TerminalConsole from "@/components/TerminalConsole";
import CinematicEffects from "@/components/CinematicEffects";
import InteractiveParticleMesh from "@/components/InteractiveParticleMesh";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <InteractiveParticleMesh />
      <CinematicEffects />
      <SpotlightBackground />
      <Navbar />
      
      <Hero />
      
      <div className="cinematic-divider my-4" />
      <Philosophy />
      
      <div className="cinematic-divider my-4" />
      <ServicesOfferings />
      
      <div className="cinematic-divider my-4" />
      <Projects />
      
      <div className="cinematic-divider my-4" />
      <Experience />
      
      <div className="cinematic-divider my-4" />
      <Skills />
      
      <div className="cinematic-divider my-4" />
      <EducationCertifications />
      
      <div className="cinematic-divider my-4" />
      <Contact />
      
      <Footer />
      <TerminalConsole />
    </main>
  );
}
