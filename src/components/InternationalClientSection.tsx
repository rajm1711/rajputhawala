"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Clock,
  MessageSquare,
  ShieldCheck,
  Code2,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export default function InternationalClientSection() {
  const pillars = [
    {
      icon: <Globe className="text-cyan-400" size={20} />,
      title: "Remote Collaboration",
      desc: "Experienced operating within remote team structures across US, European, and global time zones with seamless syncs.",
    },
    {
      icon: <MessageSquare className="text-purple-400" size={20} />,
      title: "Clear Communication",
      desc: "Proactive asynchronous updates, direct messaging via Slack/Teams, structured weekly reviews, and clear documentation.",
    },
    {
      icon: <Clock className="text-emerald-400" size={20} />,
      title: "Time-Zone Flexibility",
      desc: "Flexible work schedule accommodating overlap hours for daily standups, code reviews, and architectural alignment.",
    },
    {
      icon: <Code2 className="text-pink-400" size={20} />,
      title: "Production-Ready Delivery",
      desc: "Writing clean, type-safe, maintainable TypeScript & React code with automated linting, git workflows, and CI/CD pipelines.",
    },
    {
      icon: <FileText className="text-amber-400" size={20} />,
      title: "Comprehensive Documentation",
      desc: "Providing detailed API documentation, component storyboards, environment setup guides, and architectural diagrams.",
    },
    {
      icon: <ShieldCheck className="text-cyan-400" size={20} />,
      title: "Maintainability & Support",
      desc: "Building clean modular codebases that inside engineering teams can take over effortlessly, backed by post-delivery support.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Globe size={13} />
            <span>GLOBAL PARTNERSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Working With <span className="gradient-text">International Clients</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Available for remote contracts, full-stack development, and Next.js frontend consulting with startups, agencies, and businesses across US and European markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-panel p-6 rounded-3xl border border-border flex flex-col justify-between shadow-lg hover:border-cyan-500/40 transition-all duration-300 gradient-border group"
            >
              <div>
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-border w-fit mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>

                <h3 className="text-base font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-[10px] font-mono text-cyan-500 dark:text-cyan-400">
                <CheckCircle2 size={12} />
                <span>Verified Standards</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
