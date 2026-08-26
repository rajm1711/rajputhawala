"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/data/resumeData";
import {
  ArrowDown,
  Github,
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
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center bg-grid-pattern transition-colors duration-300"
    >
      {/* Animated Background Cyber Glow Mesh */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-glow-1"
      />
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-glow-2"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Editorial Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-[11px] font-mono mb-5 shadow-sm cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span className="font-medium tracking-wide flex items-center gap-1.5">
                <Sparkles size={11} />
                AVAILABLE FOR COLLABORATION & ARCHITECTURE
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-heading tracking-tight text-foreground leading-[1.12] mb-4"
            >
              Full Stack <br className="hidden sm:inline" />
              <span className="gradient-text">Systems Architect</span> & <br className="hidden sm:inline" />
              Web Specialist
            </motion.h1>

            {/* Editorial Focus Bullet Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-5 font-normal"
            >
              <span className="px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-border">/ Next.js 15 App Router</span>
              <span className="px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-border">/ STOMP WebSockets</span>
              <span className="px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-border">/ MERN & Docker Containers</span>
            </motion.div>

            {/* Sub-headline / Narrative Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl mb-7"
            >
              I design resilient, interactive interfaces and engineer scalable WebSockets & REST microservice architectures built for high concurrency, security, and performance.
            </motion.p>

            {/* Quick Metrics Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mb-7"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-panel p-2.5 rounded-xl border border-border flex items-center gap-2 shadow-sm hover:border-cyan-500/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Building2 size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">Office Work</p>
                  <p className="text-[11px] font-semibold text-foreground">Codelamda</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-panel p-2.5 rounded-xl border border-border flex items-center gap-2 shadow-sm hover:border-purple-500/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <UserCheck size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">Personal AI</p>
                  <p className="text-[11px] font-semibold text-foreground">EdgeIQ Engine</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-panel p-2.5 rounded-xl border border-border flex items-center gap-2 shadow-sm hover:border-emerald-500/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Zap size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">Vercel Live</p>
                  <p className="text-[11px] font-semibold text-foreground">5 Deployed</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-panel p-2.5 rounded-xl border border-border flex items-center gap-2 shadow-sm hover:border-pink-500/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
                  <Server size={14} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">Render Cloud</p>
                  <p className="text-[11px] font-semibold text-foreground">Docker API</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-[11px] uppercase tracking-wider shadow-lg shadow-purple-500/20 transition-all flex items-center gap-2 group"
              >
                Explore Works Grid
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-5 py-2.5 rounded-xl glass-panel text-foreground hover:text-cyan-500 font-medium text-[11px] uppercase tracking-wider border border-border transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail size={14} />
                Let&apos;s Connect
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06, rotate: 4 }}
                whileTap={{ scale: 0.94 }}
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 border border-border transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Cyber-Neo Developer Studio Live Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-border relative overflow-hidden shadow-xl gradient-border transition-all"
            >
              {/* Studio Live Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase font-medium tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <Terminal size={13} />
                    Developer Console
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Activity size={9} className="animate-spin" />
                  Live Sync
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-[#090b10] dark:bg-[#07090e] p-3.5 border border-white/10 font-mono text-[10px] text-gray-300 space-y-1.5 mb-5 shadow-inner">
                <div className="flex items-center justify-between text-gray-500 text-[9px] pb-1.5 border-b border-white/5">
                  <span>raj-puthawala-stack.ts</span>
                  <span className="text-cyan-400">TypeScript 5.7</span>
                </div>
                <p className="text-purple-400 font-medium">
                  const engineer = {"{"}
                </p>
                <p className="pl-3 text-cyan-300">
                  name: <span className="text-emerald-300">&quot;Raj Puthawala&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  role: <span className="text-emerald-300">&quot;MERN & Next.js Specialist&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  experience: <span className="text-amber-300">&quot;Codelamda Technology&quot;</span>,
                </p>
                <p className="pl-3 text-cyan-300">
                  cloudDeployments: [<span className="text-pink-300">&quot;Vercel Edge&quot;</span>, <span className="text-pink-300">&quot;Render Docker&quot;</span>],
                </p>
                <p className="text-purple-400 font-medium">{"};"}</p>
              </div>

              {/* Core Deliverable Checkmarks */}
              <div className="space-y-2 mb-5">
                {personalDetails.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 size={13} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-gray-700 dark:text-gray-300 font-normal leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Stack Pills Cloud */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase font-medium flex items-center gap-1">
                    <Cpu size={11} className="text-purple-500" />
                    Core Architecture
                  </span>
                  <span className="text-[9px] text-cyan-500 font-mono font-medium">STOMP & REST</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Node.js",
                    "Docker",
                    "WebSockets",
                    "Stripe",
                    "MongoDB",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 hover:border-cyan-500/50 transition-colors cursor-default font-normal"
                    >
                      {tech}
                    </motion.span>
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






