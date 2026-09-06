import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { Server, CheckCircle2, ArrowLeft, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "MERN Stack Development Services | Raj Puthawala",
  description:
    "Full-stack MERN (MongoDB, Express, React, Node.js) development services, REST APIs, and production backend systems by Raj Puthawala.",
  keywords: [
    "MERN Stack Development Services",
    "MongoDB Express React Node",
    "REST API Development",
    "MERN Developer",
    "Raj Puthawala",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/services/mern-development",
  },
};

export default function MernDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Services</span>
        </Link>

        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Server size={20} />
            </div>
            <span className="text-xs font-mono uppercase text-purple-400 font-semibold">Full-Stack Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4">
            MERN Stack Development Services
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            Building end-to-end full-stack applications with MongoDB databases, Express.js server frameworks, React frontends, and Node.js backend services.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">What I Build</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Custom full-stack web applications, REST APIs, database schemas, secure authentication systems (JWT/Refresh tokens), and client dashboards.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Who It Is For</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Startups and businesses looking for unified JavaScript/TypeScript full-stack development across client and server layers.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Typical Problems Solved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Disjointed tech stacks between client and server.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Unsecure endpoint access and unhandled auth sessions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Lack of structured database query performance.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Complex multi-role permissions (RBAC).</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h3 className="text-xl font-bold font-heading text-foreground">
            Looking for a MERN Stack Developer?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Get in touch to discuss your full-stack web application development requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Start MERN Project
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
