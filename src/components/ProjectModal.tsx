"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/resumeData";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Globe,
  Building2,
  Zap,
  Server,
  UserCheck,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const getTypeBadge = (type: Project["type"]) => {
    switch (type) {
      case "office":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-medium">
            <Building2 size={11} className="text-cyan-500" />
            Office Work
          </span>
        );
      case "personal":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium">
            <UserCheck size={11} className="text-purple-500" />
            Personal AI
          </span>
        );
      case "vercel":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300 border border-pink-500/30 flex items-center gap-1 font-medium">
            <Zap size={11} className="text-pink-500" />
            Vercel Deployed
          </span>
        );
      case "render":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 font-medium">
            <Server size={11} className="text-amber-500 animate-pulse" />
            Render Web Service
          </span>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* iOS Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-md"
        />

        {/* iOS Sheet Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl glass-panel bg-background/95 rounded-2xl border border-border shadow-2xl p-5 sm:p-7 z-10 my-6 overflow-hidden gradient-border"
        >
          {/* Top Sheet Pill Handle */}
          <div className="w-10 h-1 bg-cyan-500/30 rounded-full mx-auto mb-5" />

          {/* Header */}
          <div className="flex items-start justify-between gap-3 pb-4 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {getTypeBadge(project.type)}
                {project.status && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-border font-normal">
                    {project.status}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold font-heading text-foreground">
                {project.title}
              </h2>
              <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 font-normal">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-panel text-gray-500 hover:text-cyan-500 transition-colors border border-border"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Description */}
          <div className="py-4">
            <h3 className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
              Overview & Architecture
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="pb-4">
            <h3 className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
              <Cpu size={13} className="text-cyan-500" />
              Key System Deliverables & Engineering Accomplishments
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-border text-xs text-gray-800 dark:text-gray-200 font-normal"
                >
                  <CheckCircle2 size={14} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pb-5">
            <h3 className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
              <Layers size={13} className="text-purple-500" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md shadow-purple-500/20 hover:opacity-95 transition-all"
                >
                  <Globe size={13} />
                  Open Live Application
                  <ExternalLink size={12} />
                </a>
              )}

              <a
                href={project.githubUrl || "https://github.com/rajm1711"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl glass-panel text-foreground font-medium text-xs flex items-center gap-1.5 transition-all border border-border"
              >
                <Github size={13} />
                GitHub Repository
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl glass-panel text-gray-600 dark:text-gray-400 hover:text-foreground font-medium text-xs transition-all border border-border"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}




