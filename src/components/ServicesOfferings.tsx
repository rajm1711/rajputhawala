"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Server, ShoppingBag, ArrowUpRight, Sparkles } from "lucide-react";

export default function ServicesOfferings() {
  const offerings = [
    {
      num: "01",
      title: "Full Stack Next.js Systems",
      desc: "Building high-performance Next.js 15 App Router applications with Server Components, SSR, custom Tailwind CSS styling, and Redux/Zustand state management.",
      icon: <Code size={22} className="text-cyan-400" />,
      features: ["Next.js 15 App Router", "Server Components", "SEO Optimization", "Radix UI / Tailwind"],
    },
    {
      num: "02",
      title: "Real-Time WebSockets & AI Engines",
      desc: "Architecting real-time bi-directional streaming protocols (STOMP WebSockets) integrated with financial analytics, Hugging Face NLP models, and live market feeds.",
      icon: <Cpu size={22} className="text-purple-400" />,
      features: ["STOMP WebSockets", "Low-Latency Data", "Hugging Face NLP", "Live Streaming"],
    },
    {
      num: "03",
      title: "Dockerized Microservices & REST APIs",
      desc: "Designing secure, production Node.js & Express REST APIs deployed on Render Docker containers with JWT role authorization (RBAC) and MongoDB schemas.",
      icon: <Server size={22} className="text-pink-400" />,
      features: ["Docker Containers", "JWT RBAC Security", "Express / MongoDB", "Render Cloud"],
    },
    {
      num: "04",
      title: "Enterprise E-Commerce Platforms",
      desc: "Developing end-to-end payment-integrated commerce applications (Stripe) with inventory tracking, AG Grid enterprise tables, ApexCharts dashboards, and full-calendar dispatch.",
      icon: <ShoppingBag size={22} className="text-amber-400" />,
      features: ["Stripe Gateway", "AG Grid Enterprise", "ApexCharts Dashboards", "Role Access Control"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Sparkles size={13} />
            <span>ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Specialized <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-normal">
            Delivering robust end-to-end technical solutions built for scale, performance, and long-term maintainability.
          </p>
        </div>

        {/* Numbered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel rounded-3xl p-7 border border-border flex flex-col justify-between shadow-xl relative overflow-hidden group gradient-border transition-all duration-300 hover:border-cyan-500/40"
            >
              <div>
                {/* Top Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
                  <span className="text-3xl font-extrabold font-mono text-cyan-500/40 dark:text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                    {item.num}
                  </span>

                  <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-border group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 rounded-xl bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal shadow-sm"
                    >
                      {feat}
                    </span>
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
