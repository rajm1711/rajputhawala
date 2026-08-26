"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/resumeData";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section className="py-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Education Block */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-2xl p-5 sm:p-7 border border-border shadow-lg gradient-border"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading text-foreground">
                  Academic Education
                </h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Degrees & University</p>
              </div>
            </div>

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-cyan-500/40">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 mb-0.5 font-medium">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                  <h4 className="text-base font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-normal">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mt-1.5 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-lg inline-block font-normal">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-2xl p-5 sm:p-7 border border-border shadow-lg gradient-border"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading text-foreground">
                  Certifications & Training
                </h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Specialized Training</p>
              </div>
            </div>

            <div className="space-y-5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-purple-500/40">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 flex items-center gap-1 mb-0.5 font-medium">
                    <Calendar size={11} />
                    {cert.period}
                  </span>
                  <h4 className="text-base font-semibold text-foreground">
                    {cert.degree}
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-normal">
                    {cert.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}



