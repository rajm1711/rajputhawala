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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <Philosophy />
      <ServicesOfferings />
      <Projects />
      <Experience />
      <Skills />
      <EducationCertifications />
      <Contact />
      <Footer />
    </main>
  );
}


