"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resumeData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles, Layers } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Briefcase size={13} />
            <span>CAREER & INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-normal">
            Building production-grade web applications with modern engineering practices.
          </p>
        </div>

        {/* Vertical Timeline Track Container */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l-2 border-cyan-500/30 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Glowing Node Dot */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#080a0f] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-border relative overflow-hidden shadow-2xl gradient-border transition-all"
              >
                <div className="absolute top-0 right-0 p-8 text-cyan-500/5 pointer-events-none">
                  <Building2 size={160} />
                </div>

                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 shadow-sm">
                        {exp.role}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 font-medium">
                        EXP/0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-medium">
                        <Sparkles size={10} />
                        Active Industry Role
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-[11px] font-mono text-gray-500 dark:text-gray-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-500 dark:text-cyan-400 font-medium bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 px-2">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary Statement */}
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Accomplishments Grid */}
                <h4 className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                  <Layers size={13} className="text-purple-400" />
                  Key Engineering Responsibilities & Production Accomplishments
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-border flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-500/30 transition-colors font-normal shadow-sm"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
