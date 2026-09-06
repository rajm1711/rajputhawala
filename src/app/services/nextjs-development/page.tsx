import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { Code, CheckCircle2, ArrowLeft, ArrowRight, Cpu, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Development Services | Raj Puthawala",
  description:
    "Custom Next.js 14 & 15 App Router development services, Server Components, SSR, performance tuning, and Vercel deployments by Raj Puthawala.",
  keywords: [
    "Next.js Development Services",
    "Next.js App Router",
    "Server Components",
    "Next.js Developer",
    "Raj Puthawala",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/services/nextjs-development",
  },
};

export default function NextjsDevelopmentPage() {
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
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Code size={20} />
            </div>
            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">Specialized Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4">
            Next.js Development Services
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            Building fast, production-ready web applications using Next.js 14/15 App Router, React Server Components (RSC), and modern frontend architecture.
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-8 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">What I Build</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Full-stack Next.js applications, marketing portals, web products, and custom digital platforms engineered with TypeScript, Tailwind CSS, and optimized server-side rendering.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Who It Is For</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Startups, SaaS platforms, e-commerce merchants, and digital agencies requiring fast initial page loads, Core Web Vitals optimization, and high search indexing.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Typical Problems Solved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Slow initial load times on traditional SPA bundles.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Poor SEO indexing on client-side React apps.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Unoptimized client JavaScript bundle overhead.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Complex image caching and responsive image layout shifts.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h3 className="text-xl font-bold font-heading text-foreground">
            Ready to build a Next.js application?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Discuss your project requirements, timeline, and technical architecture.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Start Next.js Project
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
