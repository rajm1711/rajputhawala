import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { caseStudies, CaseStudy } from "@/data/caseStudiesData";
import {
  Globe,
  Github,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Server,
  Database,
  Lock,
  Zap,
  Sparkles,
  Layers,
  Building2,
  UserCheck,
  Code2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies.find((cs) => cs.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Raj Puthawala",
    };
  }

  return {
    title: `${project.fullTitle} | Raj Puthawala Portfolio`,
    description: project.description,
    keywords: [
      project.title,
      ...project.technologies,
      "Raj Puthawala",
      "Full-Stack Case Study",
      "Next.js Developer",
    ],
    openGraph: {
      title: project.fullTitle,
      description: project.description,
      type: "article",
      url: `https://rajputhawala.vercel.app/projects/${project.slug}`,
    },
    alternates: {
      canonical: `https://rajputhawala.vercel.app/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies.find((cs) => cs.slug === slug);

  if (!project) {
    notFound();
  }

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: "Raj Puthawala",
      jobTitle: "Full-Stack MERN + Next.js Developer",
      url: "https://rajputhawala.vercel.app",
    },
    codeRepository: project.githubUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rajputhawala.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://rajputhawala.vercel.app/#projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://rajputhawala.vercel.app/projects/${project.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Projects</span>
        </Link>

        {/* H1 Title & Subtitle */}
        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 font-medium">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-3">
            {project.fullTitle}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:opacity-95 transition-all"
              >
                <Globe size={14} />
                Launch Live App
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl glass-panel text-foreground font-medium text-xs uppercase tracking-wider border border-border flex items-center gap-2 shadow-sm hover:border-cyan-500/40 transition-all"
              >
                <Github size={14} />
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Overview & Problem & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
              <Sparkles size={13} />
              Project Overview
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-purple-400 font-semibold flex items-center gap-1.5">
              <Layers size={13} />
              The Problem
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h2 className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              The Solution
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Engineering Role */}
        <div className="glass-panel p-6 rounded-2xl border border-border mb-12 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
            <Code2 size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400">My Engineering Role</span>
            <p className="text-sm font-semibold text-foreground font-heading">
              {project.role}
            </p>
          </div>
        </div>

        {/* System Architecture Breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            System Architecture & Decisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Cpu size={15} />
                <span>Frontend Layer</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.architecture.frontend}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                <Server size={15} />
                <span>Backend Services</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.architecture.backend}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                <Database size={15} />
                <span>Database & Data Modeling</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.architecture.database}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-border space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <Lock size={15} />
                <span>Authentication & Authorization</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.architecture.authentication}
              </p>
            </div>
          </div>
        </div>

        {/* Core Features List */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Core Technical Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-border flex items-start gap-3 text-xs text-gray-700 dark:text-gray-200"
              >
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Engineering Challenges & Solutions
          </h2>
          <div className="space-y-3">
            {project.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="glass-panel p-4.5 rounded-xl border border-border flex items-start gap-3 text-xs text-gray-700 dark:text-gray-200"
              >
                <Zap size={15} className="text-purple-400 shrink-0 mt-0.5" />
                <span>{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Deployment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h3 className="text-xs font-mono uppercase text-cyan-400 font-semibold">
              Performance & Core Web Vitals
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.performance}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-2">
            <h3 className="text-xs font-mono uppercase text-pink-400 font-semibold">
              Deployment & Infrastructure
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.deployment}
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h3 className="text-xl font-bold font-heading text-foreground">
            Have a similar application in mind?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto font-normal">
            Let&apos;s discuss how to build a production-grade web application with Next.js, React, and modern backend architecture.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Start a Project
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
