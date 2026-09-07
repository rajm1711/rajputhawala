"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/data/resumeData";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Zap,
  CheckCircle2,
  Server,
  Building2,
  UserCheck,
  Terminal,
  Activity,
  Cpu,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center bg-grid-pattern transition-colors duration-300"
    >
      {/* Background Glow Mesh */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Editorial Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-[11px] font-mono mb-5 shadow-sm cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span className="font-medium tracking-wide flex items-center gap-1.5">
                <Sparkles size={12} className="text-cyan-400" />
                AVAILABLE FOR REMOTE PROJECTS & FULL-STACK CONTRACTS
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.12] mb-4"
            >
              <span className="block text-foreground">{personalDetails.shortName}</span>
              <span className="block gradient-text cinematic-glow-text py-1">
                Full-Stack MERN + Next.js Developer
              </span>
              <span className="block text-foreground/85 font-normal text-2xl sm:text-3xl lg:text-4xl mt-1">
                Frontend Specialist
              </span>
            </motion.h1>

            {/* Sub-headline Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-2xl mb-7"
            >
              Frontend Specialist building production-ready web applications with React, Next.js, Node.js and modern backend technologies. Strong focus on frontend architecture, performance, scalable APIs and production-ready systems.
            </motion.p>

            {/* Action Buttons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all flex items-center gap-2 group hover:opacity-95 active:scale-98"
              >
                View My Work
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl glass-panel text-foreground hover:text-cyan-400 font-medium text-xs uppercase tracking-wider border border-border transition-all flex items-center gap-2 shadow-sm hover:border-cyan-500/40 active:scale-98"
              >
                <Mail size={14} />
                Hire Me / Start a Project
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-400 border border-border transition-all shadow-sm hover:border-cyan-500/40"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-400 border border-border transition-all shadow-sm hover:border-cyan-500/40"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </motion.div>

            {/* Compact Technology Stack Bar Below Hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-border w-full max-w-2xl"
            >
              <p className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400 mb-2 font-medium">
                Primary Stack:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">React</span>
                <span className="text-gray-400">•</span>
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">Next.js</span>
                <span className="text-gray-400">•</span>
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">Node.js</span>
                <span className="text-gray-400">•</span>
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">Express</span>
                <span className="text-gray-400">•</span>
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">MongoDB</span>
                <span className="text-gray-400">•</span>
                <span className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border">PostgreSQL</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Console Widget */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-border relative overflow-hidden shadow-2xl gradient-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase font-medium tracking-wider text-cyan-500 dark:text-cyan-400 flex items-center gap-1.5">
                    <Terminal size={13} />
                    Developer Overview
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Activity size={9} className="animate-spin" />
                  Verified
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-[#080a0f] p-3.5 border border-white/10 font-mono text-[10px] text-gray-300 space-y-1.5 mb-5 shadow-inner">
                <div className="flex items-center justify-between text-gray-500 text-[9px] pb-1.5 border-b border-white/5">
                  <span>raj-puthawala-profile.ts</span>
                  <span className="text-cyan-400">TypeScript 5.7</span>
                </div>
                <p className="text-purple-400 font-medium">
                  const developer = {"{"}
                </p>
                <p className="pl-3 text-cyan-300">
                  name: <span className="text-emerald-300">&quot;Raj Puthawala&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  role: <span className="text-amber-300">&quot;Full-Stack MERN + Next.js Developer&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  specialization: <span className="text-pink-300">&quot;Frontend Architecture & React&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  currentCompany: <span className="text-cyan-300">&quot;Codelamda Technology&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  availability: <span className="text-emerald-300">&quot;Remote / International Projects&quot;</span>,
                </p>
                <p className="text-purple-400 font-medium">{"};"}</p>
              </div>

              {/* Core Deliverable Checkmarks */}
              <div className="space-y-2 mb-5">
                {[
                  "Full-stack MERN & Next.js production experience",
                  "STOMP WebSockets & low-latency messaging",
                  "TypeScript, Zustand & Redux Toolkit state management",
                  "Dockerized Node.js REST APIs deployed on Vercel & Render",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-gray-700 dark:text-gray-300 font-normal leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Cloud */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase font-medium flex items-center gap-1">
                    <Cpu size={11} className="text-purple-500" />
                    Core Ecosystem
                  </span>
                  <span className="text-[9px] text-cyan-400 font-mono font-medium">REST & WebSockets</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "Supabase",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
