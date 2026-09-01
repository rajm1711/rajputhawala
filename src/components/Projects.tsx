"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { projects, Project } from "@/data/resumeData";
import ProjectModal from "./ProjectModal";
import TiltCard from "./TiltCard";
import {
  Github,
  ArrowRight,
  Code,
  Globe,
  Search,
  Building2,
  Zap,
  Server,
  UserCheck,
  Sparkles,
  Cpu,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 45, scale: 0.93 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Flagship Project
  const flagshipProject = projects.find((p) => p.id === "edge-iq");

  const categories = [
    { id: "All", label: "All Projects", count: projects.length },
    {
      id: "Office Projects",
      label: "Office Work",
      count: projects.filter((p) => p.type === "office").length,
    },
    {
      id: "Personal AI & Trading",
      label: "Personal AI",
      count: projects.filter((p) => p.type === "personal").length,
    },
    {
      id: "Vercel Deployments",
      label: "Vercel Live",
      count: projects.filter((p) => p.type === "vercel").length,
    },
    {
      id: "Backend & APIs",
      label: "Backend & Docker",
      count: projects.filter((p) => p.type === "render").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getTypeBadge = (type: Project["type"]) => {
    switch (type) {
      case "office":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-medium shadow-sm">
            <Building2 size={11} className="text-cyan-500" />
            Office Work
          </span>
        );
      case "personal":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium shadow-sm">
            <UserCheck size={11} className="text-purple-500" />
            Personal AI
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
            <Server size={11} className="text-amber-500 animate-pulse" />
            Render Docker API
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-2" />
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
              <Code size={13} />
              <span>DOCK & BENTO SHOWCASE ({projects.length})</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
              Featured <span className="gradient-text">Systems & Applications</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 max-w-xl font-normal leading-relaxed">
              Explore production enterprise systems, real-time WebSockets engines, Vercel edge applications, and Docker microservices.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search tech, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel text-foreground placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono shadow-sm"
            />
          </div>
        </motion.div>

        {/* Flagship Highlight Project Card (EdgeIQ) with Scroll Reveal */}
        {flagshipProject && activeCategory === "All" && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass-panel rounded-3xl p-6 sm:p-9 border border-border relative overflow-hidden mb-12 shadow-2xl gradient-border group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white flex items-center gap-1.5 shadow-md">
                    <Sparkles size={12} />
                    Flagship AI Platform
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Application
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 ml-auto">
                    PRJ/01
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors">
                  {flagshipProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-500 dark:text-cyan-400 mt-1 mb-4 font-normal">
                  {flagshipProject.tagline}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {flagshipProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {flagshipProject.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 font-normal">
                      <Cpu size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all group/link"
                    >
                      <Globe size={14} />
                      Launch Live App
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="px-5 py-3 rounded-xl glass-panel text-foreground hover:text-cyan-400 font-medium text-xs uppercase tracking-wider border border-border flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>System Architecture</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Code Terminal */}
              <div className="lg:w-80 p-4.5 rounded-2xl bg-[#080a0f] border border-white/10 text-cyan-400 font-mono text-[10px] hidden lg:flex flex-col gap-2.5 shadow-2xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gray-400 text-[9px]">
                  <span className="flex items-center gap-1">
                    <Terminal size={11} className="text-cyan-400" />
                    edgeiq-streaming.ts
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>
                <div className="space-y-1.5 text-[10px] font-normal leading-normal">
                  <p className="text-purple-400">[SYSTEM]: Real-time Market Streams Connected</p>
                  <p className="text-gray-300">[AI]: HuggingFace NLP Sentiment Engine Initialized</p>
                  <p className="text-cyan-300">[WEBSOCKET]: Finnhub & Yahoo Feed &lt; 35ms</p>
                  <p className="text-pink-400">[PORTFOLIO]: P&L journal auto-sync complete</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Segmented Control Tabs */}
        <div className="flex overflow-x-auto no-scrollbar p-1.5 glass-panel rounded-2xl mb-9 gap-1.5 max-w-max shadow-md border border-border">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-2 ${
                  isActive ? "text-white font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 px-2 py-0.5 rounded-full text-[9px] font-mono ${
                    isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Staggered Scroll-Triggered Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const projectSerial = `PRJ/${String(index + 1).padStart(2, "0")}`;
              return (
                <TiltCard key={project.id} tiltAmount={12}>
                  <motion.div
                    variants={cardVariants}
                    className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-border relative overflow-hidden group shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition-all duration-300 h-full"
                  >
                  {/* Top Section */}
                  <div>
                    {/* Header Badge & Serial */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
                      {getTypeBadge(project.type)}
                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 group-hover:text-cyan-400 transition-colors">
                        {projectSerial}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono mb-3 font-medium">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400 font-normal">
                          <span className="text-cyan-400 font-mono font-medium shrink-0">›</span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Tech Pills Cloud */}
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-border">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-700 dark:text-gray-300 border border-border font-normal"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-500 dark:text-gray-400 font-normal">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white font-medium text-[11px] border border-cyan-400/30 transition-all flex items-center justify-center gap-1.5 group/link shadow-md"
                        >
                          <Globe size={13} />
                          <span>Visit App</span>
                          <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <a
                          href={project.githubUrl || "https://github.com/rajm1711"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 rounded-xl glass-panel text-foreground font-medium text-[11px] border border-border transition-all flex items-center justify-center gap-1.5"
                        >
                          <Github size={13} />
                          <span>Source</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="py-2 px-3 rounded-xl glass-panel text-gray-700 dark:text-gray-300 hover:text-cyan-400 font-medium text-[11px] border border-border hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 group/btn"
                      >
                        <span>Details</span>
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-14 glass-panel rounded-2xl border border-border my-6">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-mono font-normal">
              No projects found matching &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-medium shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
