import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { projects } from "@/data/resumeData";
import { caseStudies } from "@/data/caseStudiesData";
import { Code, Globe, Github, ArrowUpRight, Sparkles, Building2, UserCheck, Zap, Server, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Raj Puthawala — MERN & Next.js Developer",
  description:
    "Portfolio index of full-stack projects, Next.js web applications, e-commerce storefronts, and Dockerized REST APIs built by Raj Puthawala.",
  keywords: [
    "Raj Puthawala Projects",
    "Next.js Projects",
    "MERN Stack Projects",
    "Assemble Teams",
    "Inbuildify",
    "EdgeIQ",
    "Swan E-Commerce",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Raj Puthawala — MERN & Next.js Developer",
    description: "Explore enterprise collaboration platforms, AI trading intelligence dashboards, and production e-commerce applications.",
    url: "https://rajputhawala.vercel.app/projects",
  },
};

export default function ProjectsIndexPage() {
  const getCaseStudySlug = (id: string) => {
    const cs = caseStudies.find((c) => c.id === id || c.slug === id);
    return cs ? cs.slug : null;
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "office":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-medium shadow-sm">
            <Building2 size={11} className="text-cyan-500" />
            Office Production
          </span>
        );
      case "personal":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium shadow-sm">
            <UserCheck size={11} className="text-purple-500" />
            Personal Flagship
          </span>
        );
      case "vercel":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/30 flex items-center gap-1 font-medium shadow-sm">
            <Zap size={11} className="text-pink-500" />
            Vercel Deployed
          </span>
        );
      case "render":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 font-medium shadow-sm">
            <Server size={11} className="text-amber-500" />
            Docker REST API
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <Code size={13} />
            <span>PORTFOLIO INDEX ({projects.length} PROJECTS)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Full-stack web applications, real-time WebSocket platforms, e-commerce storefronts, and containerized Node.js REST API backends.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const csSlug = getCaseStudySlug(project.id);
            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-border relative overflow-hidden group shadow-xl hover:border-cyan-500/50 transition-all duration-300 gradient-border"
              >
                <div>
                  {/* Badge & Serial */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
                    {getTypeBadge(project.type)}
                    <span className="text-[10px] font-mono text-gray-400 font-medium">
                      PRJ/0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-1">
                    {project.title}
                  </h2>

                  <p className="text-xs text-cyan-500 font-mono mb-3 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3 font-normal">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                        <span className="text-cyan-400 font-mono font-medium">›</span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {csSlug ? (
                      <Link
                        href={`/projects/${csSlug}`}
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <FileText size={13} />
                        <span>Case Study</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    ) : (
                      <span className="py-2.5 px-3 rounded-xl glass-panel text-gray-400 text-xs flex items-center justify-center">
                        Built Project
                      </span>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl glass-panel text-foreground hover:text-cyan-400 font-medium text-xs border border-border flex items-center justify-center gap-1.5"
                      >
                        <Globe size={13} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl || "https://github.com/rajm1711"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl glass-panel text-foreground hover:text-cyan-400 font-medium text-xs border border-border flex items-center justify-center gap-1.5"
                      >
                        <Github size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <Footer />
    </main>
  );
}
