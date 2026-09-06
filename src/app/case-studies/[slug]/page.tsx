import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { longFormCaseStudies } from "@/data/longFormCaseStudiesData";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Cpu,
  Server,
  Database,
  Lock,
  Zap,
  Sparkles,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return longFormCaseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cs = longFormCaseStudies.find((item) => item.slug === slug);

  if (!cs) {
    return {
      title: "Case Study Not Found | Raj Puthawala",
    };
  }

  return {
    title: `${cs.fullTitle} | Raj Puthawala Case Studies`,
    description: cs.tagline,
    keywords: [...cs.technologies, "Engineering Case Study", "Raj Puthawala", "Architecture"],
    openGraph: {
      title: cs.fullTitle,
      description: cs.tagline,
      type: "article",
      url: `https://rajputhawala.vercel.app/case-studies/${cs.slug}`,
    },
    alternates: {
      canonical: `https://rajputhawala.vercel.app/case-studies/${cs.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = longFormCaseStudies.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  // Schema.org TechArticle JSON-LD
  const csJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: cs.fullTitle,
    description: cs.tagline,
    author: {
      "@type": "Person",
      name: "Raj Puthawala",
      url: "https://rajputhawala.vercel.app",
    },
    dependencies: cs.technologies.join(", "),
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(csJsonLd) }}
      />

      <SpotlightBackground />
      <Navbar />

      <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-medium">
              {cs.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {cs.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4">
            {cs.fullTitle}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            {cs.tagline}
          </p>
        </div>

        {/* Overview & Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
              <Sparkles size={13} />
              Overview
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {cs.overview}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-purple-400 font-semibold flex items-center gap-1.5">
              <Layers size={13} />
              The Problem
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {cs.problem}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              The Solution
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Architectural System Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Cpu size={15} />
                <span>Frontend Architecture</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {cs.architecture.frontend}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                <Server size={15} />
                <span>Backend Services</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {cs.architecture.backend}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                <Database size={15} />
                <span>Database & Data Modeling</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {cs.architecture.database}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <Lock size={15} />
                <span>Authentication & Authorization</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {cs.architecture.authentication}
              </p>
            </div>
          </div>
        </div>

        {/* Key Engineering Decisions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Key Technical Decisions
          </h2>
          <div className="space-y-3">
            {cs.keyDecisions.map((kd, idx) => (
              <div
                key={idx}
                className="glass-panel p-4.5 rounded-xl border border-border flex items-start gap-3 text-xs text-gray-700 dark:text-gray-200"
              >
                <Code2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{kd}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measured Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Verified Results & Outcome
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.results.map((res, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-border flex items-start gap-3 text-xs text-gray-700 dark:text-gray-200"
              >
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h3 className="text-xl font-bold font-heading text-foreground">
            Looking for similar technical architecture on your product?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Contact Raj Puthawala to discuss engineering scope, frontend architecture, and full-stack timelines.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </article>

      <Footer />
    </main>
  );
}
