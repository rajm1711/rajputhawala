"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Server, Database, ShieldCheck, Cloud, Layers } from "lucide-react";

export const structuredSkills = [
  {
    category: "Frontend Engineering",
    icon: <Cpu size={18} className="text-cyan-400" />,
    skills: ["React", "Next.js (App Router)", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Ant Design", "Radix UI"],
  },
  {
    category: "State Management & Forms",
    icon: <Layers size={18} className="text-purple-400" />,
    skills: ["Redux Toolkit", "Redux Persist", "Zustand", "React Hook Form", "Zod Validation"],
  },
  {
    category: "Backend Services & APIs",
    icon: <Server size={18} className="text-pink-400" />,
    skills: ["Node.js", "Express.js", "REST APIs", "STOMP WebSockets", "Microservices Architecture"],
  },
  {
    category: "Databases & Data Modeling",
    icon: <Database size={18} className="text-amber-400" />,
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Supabase"],
  },
  {
    category: "Authentication & Security",
    icon: <ShieldCheck size={18} className="text-emerald-400" />,
    skills: ["JWT Authentication", "Refresh Token Rotation", "Role-Based Access Control (RBAC)", "Google OAuth 2.0"],
  },
  {
    category: "Deployment & Infrastructure",
    icon: <Cloud size={18} className="text-cyan-400" />,
    skills: ["Vercel Edge Deployments", "VPS Hosting", "Docker Containers", "Render Cloud Platform"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Layers size={13} />
            <span>STRUCTURED TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
            Factual skills matrix categorized strictly by frontend architecture, backend services, databases, authentication, and deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structuredSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-panel rounded-3xl p-6 border border-border flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all duration-300 gradient-border group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-border">
                  <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-border group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                      {category.skills.length} core technologies
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.04 }}
                      className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-border hover:border-cyan-500/40 text-xs font-mono text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition-all duration-150 flex items-center gap-2 group/skill shadow-sm cursor-default font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/skill:scale-150 transition-transform" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
