"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Lock, ShieldCheck, Activity, Cpu } from "lucide-react";

export default function Philosophy() {
  const principles = [
    {
      tag: "SYS/01",
      title: "Clean Modular Architecture",
      icon: <Layers size={20} className="text-cyan-400" />,
      desc: "Building decoupled Next.js App Router and MERN backend modules. High code reusability with strict TypeScript typing, enforcing predictable data contracts.",
    },
    {
      tag: "SYS/02",
      title: "Low-Latency WebSocket Streaming",
      icon: <Zap size={20} className="text-purple-400" />,
      desc: "Specialized in real-time STOMP WebSockets and bi-directional message brokers. Ensuring instantaneous state updates for financial AI systems and live apps.",
    },
    {
      tag: "SYS/03",
      title: "Role-Based Cloud Security",
      icon: <Lock size={20} className="text-pink-400" />,
      desc: "Implementing JWT authentication, RBAC authorization flow, encrypted tokens, and secure CORS policies across Docker containerized microservices.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Activity size={13} />
            <span>ENGINEERING MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight leading-snug">
            I Don&apos;t Just Build Web Apps — <br />
            <span className="gradient-text">I Solve for Systems, at Scale.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-normal max-w-xl mx-auto">
            Engineering isn&apos;t just about writing code; it&apos;s about structural elegance, data flow resilience, and seamless user experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Narrative Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 glass-panel p-7 rounded-3xl border border-border flex flex-col justify-between shadow-2xl gradient-border transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-border mb-5">
                <span className="text-[10px] font-mono uppercase font-bold text-cyan-500 dark:text-cyan-400 flex items-center gap-1">
                  <Cpu size={12} />
                  STATEMENT // BLUEPRINT
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 font-medium">
                  SYSTEMS MINDSET
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-foreground mb-3.5">
                Minimalism, Precision & Resilience
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-4">
                As a Full Stack Engineer at <span className="font-semibold text-foreground">Codelamda Technology</span> and creator of <span className="font-semibold text-cyan-400">EdgeIQ AI Platform</span>, I deconstruct real-world workflows into clean system blueprints.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Every component serves a purpose: from low-overhead state containers to cloud-deployed Docker microservices on Render and edge routing on Vercel.
              </p>
            </div>

            <div className="pt-4 border-t border-border mt-6 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck size={14} />
                Strict Type Safety
              </span>
              <span>EST. 2024</span>
            </div>
          </motion.div>

          {/* 3 Principles Column Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {principles.map((item, idx) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-panel p-6 rounded-2xl border border-border flex items-start gap-4 shadow-lg hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-border shrink-0">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-base font-bold font-heading text-foreground">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono font-medium text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
