import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SpotlightBackground from "@/components/SpotlightBackground";

export const metadata: Metadata = {
  title: "Contact Raj Puthawala | Full-Stack Web Development Inquiry",
  description:
    "Get in touch with Raj Puthawala for full-stack Next.js and MERN contract development, architecture consulting, and remote projects for US and European clients.",
  keywords: [
    "Contact Raj Puthawala",
    "Hire Next.js Developer",
    "Hire MERN Developer",
    "Full-Stack Web Development Contract",
    "Remote Developer",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Raj Puthawala | Full-Stack Web Development Inquiry",
    description: "Available for remote contracts, Next.js frontend consulting, and full-stack web applications.",
    url: "https://rajputhawala.vercel.app/contact",
  },
};

export default function DedicatedContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-12">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
