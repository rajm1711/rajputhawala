"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resumeData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Briefcase size={13} />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold font-heading text-foreground tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1.5 font-normal">
            Building production-grade web applications with modern engineering practices.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-border relative overflow-hidden shadow-xl gradient-border"
            >
              <div className="absolute top-0 right-0 p-8 text-cyan-500/5 pointer-events-none">
                <Building2 size={150} />
              </div>

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/30 shadow-sm font-medium">
                      {exp.role}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-500 font-medium">
                      EXP/0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold font-heading text-foreground">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-[11px] font-mono text-gray-500 dark:text-gray-400 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                {exp.summary}
              </p>

              {/* Bullet Responsibilities Grid */}
              <h4 className="text-[10px] uppercase font-mono tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Key Engineering Responsibilities & Accomplishments
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {exp.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-border flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 hover:border-cyan-500/30 transition-colors font-normal"
                  >
                    <CheckCircle2 size={14} className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

