import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { personalDetails, experiences } from "@/data/resumeData";
import {
  User,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Raj Puthawala | Full-Stack MERN + Next.js Developer",
  description:
    "Learn about Raj Puthawala, a Full-Stack MERN + Next.js Developer specializing in React, Next.js 15, Node.js, Express, and building production web applications.",
  keywords: [
    "Raj Puthawala About",
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "Frontend Specialist",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <User size={13} />
            <span>DEVELOPER OVERVIEW</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            About <span className="gradient-text">Raj Puthawala</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Full-Stack MERN + Next.js Developer with strong frontend specialization, engineering modern, production-ready web applications for startups, businesses, and international clients.
          </p>
        </div>

        {/* Narrative & Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-7 rounded-3xl border border-border space-y-4 shadow-xl gradient-border">
            <h2 className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
              <Code2 className="text-cyan-400" size={18} />
              Who I Am & Specialization
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              I am a Full-Stack MERN + Next.js Developer based in Surat, India. I specialize in building modern, production-ready web applications using React, Next.js (App Router), TypeScript, Node.js, Express, and database solutions (MongoDB, PostgreSQL, Supabase).
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              My core strength lies in combining robust full-stack software architecture with high-craft frontend engineering, ensuring fast initial page loads, clean component state, responsive design, and accessible interfaces.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-3xl border border-border space-y-4 shadow-xl gradient-border">
            <h2 className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
              <Cpu className="text-purple-400" size={18} />
              My Development Approach
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              I prioritize clean code, performance, maintainability, and user experience over unnecessary complexity. When building applications, I focus on:
            </p>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Type safety and clean component boundaries using TypeScript.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Server-Side Rendering (SSR) and image optimization in Next.js.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Secure API authentication (JWT, refresh tokens, role-based access).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Containerized backend deployments using Docker on Render and Vercel.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What I Build */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
            What I Build
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "SaaS Applications",
                desc: "Multi-tenant dashboards, role permissions, payment workflows, and real-time features.",
              },
              {
                title: "E-Commerce Stores",
                desc: "Fast, responsive Next.js storefronts with cart management and product catalog filters.",
              },
              {
                title: "Real-Time Systems",
                desc: "Low-latency STOMP WebSocket messaging platforms and live market feeds.",
              },
              {
                title: "Business Dashboards",
                desc: "Complex data tables (AG Grid), interactive ApexCharts analytics, and task calendars.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-border space-y-2 text-left"
              >
                <h3 className="text-sm font-bold font-heading text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center justify-center gap-2">
            <Briefcase size={20} className="text-cyan-400" />
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-border space-y-3 gradient-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border">
                  <div>
                    <h3 className="text-base font-bold font-heading text-foreground">
                      {exp.role} — <span className="text-cyan-400">{exp.company}</span>
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">{exp.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                  {exp.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {exp.highlights.slice(0, 6).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="text-cyan-400 font-mono">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Collaboration & Call to Action */}
        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h2 className="text-2xl font-bold font-heading text-foreground">
            Available for International Remote Contracts
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-normal leading-relaxed">
            I am available for remote contracts, full-stack development, and Next.js frontend consulting with startups, agencies, and businesses across the US, Europe, and globally.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all flex items-center gap-2"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/#projects"
              className="px-6 py-3 rounded-xl glass-panel text-foreground font-medium text-xs uppercase tracking-wider border border-border shadow-sm hover:border-cyan-500/40 transition-all"
            >
              View Featured Work
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
