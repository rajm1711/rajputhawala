"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Server, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function ServicesOfferings() {
  const offerings = [
    {
      num: "01",
      title: "Full Stack Next.js Systems",
      desc: "Building high-performance Next.js 15 App Router applications with Server Components, SSR, and custom Tailwind styling.",
      icon: <Code size={20} className="text-cyan-500" />,
      features: ["Server Components", "SEO Optimization", "App Router"],
    },
    {
      num: "02",
      title: "Real-Time WebSockets & AI Engines",
      desc: "Architecting real-time bi-directional streaming protocols (STOMP WebSockets) integrated with financial & AI analytics.",
      icon: <Cpu size={20} className="text-purple-500" />,
      features: ["STOMP Protocol", "Low Latency Data", "AI Platform"],
    },
    {
      num: "03",
      title: "Dockerized Microservices & REST APIs",
      desc: "Designing secure, production Node.js & Express REST APIs deployed on Docker containers with JWT role security.",
      icon: <Server size={20} className="text-pink-500" />,
      features: ["Docker Containers", "JWT RBAC Security", "Render Cloud"],
    },
    {
      num: "04",
      title: "Enterprise E-Commerce Platforms",
      desc: "Developing end-to-end multi-currency, payment-integrated commerce applications with inventory tracking and dashboard control.",
      icon: <ShoppingBag size={20} className="text-amber-500" />,
      features: ["Stripe / Checkout", "Role Dashboards", "Order Management"],
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Cpu size={13} />
            <span>ARCHITECTURAL OFFERINGS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold font-heading text-foreground tracking-tight">
            Specialized <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1.5 font-normal">
            Delivering robust end-to-end technical solutions built for scale, performance, and long-term maintainability.
          </p>
        </div>

        {/* Numbered Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-border flex flex-col justify-between shadow-lg relative overflow-hidden group gradient-border transition-all"
            >
              <div>
                {/* Top Row: Serial Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                  <span className="text-2xl font-extrabold font-mono text-cyan-500/40 dark:text-cyan-400/30 group-hover:text-cyan-500 transition-colors">
                    {item.num}
                  </span>

                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-border group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold font-heading text-foreground group-hover:text-cyan-500 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300 font-normal"
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
