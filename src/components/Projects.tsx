"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/resumeData";
import ProjectModal from "./ProjectModal";
import {
  ExternalLink,
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
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Flagship Project
  const flagshipProject = projects.find((p) => p.id === "edgeiq");

  const categories = [
    { id: "All", label: "All Projects", count: projects.length },
    {
      id: "Office Projects",
      label: "Office Projects",
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
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-medium">
            <Building2 size={11} className="text-cyan-500" />
            Office Work
          </span>
        );
      case "personal":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium">
            <UserCheck size={11} className="text-purple-500" />
            Personal AI
          </span>
        );
      case "vercel":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/30 flex items-center gap-1 font-medium">
            <Zap size={11} className="text-pink-500" />
            Vercel Deployed
          </span>
        );
      case "render":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 font-medium">
            <Server size={11} className="text-amber-500 animate-pulse" />
            Render Web Service
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-2" />
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
              <Code size={13} />
              <span>SELECTED WORKS & DEPLOYMENTS ({projects.length})</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold font-heading text-foreground tracking-tight">
              Featured <span className="gradient-text">Systems & Applications</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1.5 max-w-xl font-normal leading-relaxed">
              Explore office production systems, personal AI trading engines, live Vercel web apps, and Dockerized Render API services.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search tech stack, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl glass-panel text-foreground placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono shadow-sm"
            />
          </div>
        </div>

        {/* Flagship Highlight Project Card (EdgeIQ) */}
        {flagshipProject && activeCategory === "All" && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-border relative overflow-hidden mb-10 shadow-xl gradient-border group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center gap-1 shadow-md">
                    <Sparkles size={11} />
                    Flagship AI Platform
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Application
                  </span>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 ml-auto">
                    PRJ/01
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-semibold font-heading text-foreground group-hover:text-cyan-500 transition-colors">
                  {flagshipProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 mb-3 font-normal">
                  {flagshipProject.tagline}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {flagshipProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {flagshipProject.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 font-normal">
                      <Cpu size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:opacity-95 transition-all group/link"
                    >
                      <Globe size={13} />
                      Launch Live App
                      <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="px-4 py-2.5 rounded-xl glass-panel text-foreground hover:text-cyan-500 font-medium text-[11px] uppercase tracking-wider border border-border flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>System Architecture</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* Right Decorative Graphic */}
              <div className="lg:w-1/3 p-4 rounded-xl bg-[#090b10] dark:bg-[#07090e] border border-white/10 text-cyan-400 font-mono text-[10px] hidden lg:flex flex-col gap-2 shadow-inner">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-gray-400 text-[9px]">
                  <span>edgeiq-core-engine.py</span>
                  <span className="text-emerald-400 font-semibold">STATUS: RUNNING</span>
                </div>
                <div className="space-y-1 text-[10px] font-normal">
                  <p className="text-purple-400">[SYSTEM]: Real-time Market Streams Connected</p>
                  <p className="text-gray-300">[AI]: Analyzing multi-asset market indicators...</p>
                  <p className="text-cyan-300">[WEBSOCKET]: Latency &lt; 40ms</p>
                  <p className="text-pink-400">[RISK ENGINE]: Optimal Sharpe Ratio Computed</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobbin Segmented Control Tabs */}
        <div className="flex overflow-x-auto no-scrollbar p-1 glass-panel rounded-xl mb-8 gap-1 max-w-max shadow-md border border-border">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  isActive ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 px-1.5 py-0.2 rounded-full text-[9px] font-mono ${
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filteredProjects.map((project, index) => {
              const projectSerial = `PRJ/${String(index + 1).padStart(2, "0")}`;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between border border-border relative overflow-hidden group shadow-lg"
                >
                  {/* Top Content */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {getTypeBadge(project.type)}

                      <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 group-hover:text-cyan-500 transition-colors">
                        {projectSerial}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-base sm:text-lg font-semibold font-heading text-foreground group-hover:text-cyan-500 transition-colors mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono mb-2.5 font-normal">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1 mb-4">
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400 font-normal">
                          <span className="text-cyan-500 font-mono font-medium shrink-0">›</span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 mb-4 pt-2.5 border-t border-border">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-700 dark:text-gray-300 border border-border font-normal"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-500 dark:text-gray-400 font-normal">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons Bar */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white font-medium text-[11px] border border-cyan-400/30 transition-all flex items-center justify-center gap-1 group/link shadow-sm"
                        >
                          <Globe size={12} />
                          <span>Visit App</span>
                          <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <a
                          href={project.githubUrl || "https://github.com/rajm1711"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-2.5 rounded-lg glass-panel text-foreground font-medium text-[11px] border border-border transition-all flex items-center justify-center gap-1"
                        >
                          <Github size={12} />
                          <span>Source</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="py-1.5 px-2.5 rounded-lg glass-panel text-gray-700 dark:text-gray-300 hover:text-cyan-500 font-medium text-[11px] border border-border hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1 group/btn"
                      >
                        <span>Architecture</span>
                        <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-border my-6">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-mono font-normal">
              No projects found matching &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-3.5 py-1.5 rounded-xl bg-cyan-500 text-white text-xs font-medium shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* iOS Sheet Style Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}





