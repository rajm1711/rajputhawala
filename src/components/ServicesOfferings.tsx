"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Server,
  ShoppingBag,
  Sparkles,
  LayoutDashboard,
  RefreshCw,
  Layers,
  Database,
} from "lucide-react";

export default function ServicesOfferings() {
  const services = [
    {
      title: "Next.js Development",
      icon: <Code size={20} className="text-cyan-400" />,
      whatIBuild: "High-performance web applications, marketing sites, and full-stack products using Next.js (App Router, Server Components, SSR, SSG).",
      whoItIsFor: "Startups, SaaS platforms, e-commerce brands, and businesses needing fast load times, Core Web Vitals optimization, and top search ranking.",
      problemsSolved: "Slow initial page loads, poor SEO indexing on SPA applications, high client JavaScript bundle overhead.",
      tech: ["Next.js 14/15", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      title: "React Frontend Development",
      icon: <Cpu size={20} className="text-purple-400" />,
      whatIBuild: "Modern, dynamic, and responsive user interfaces with modular component architecture, smooth state management, and accessible UI controls.",
      whoItIsFor: "Agencies, product teams, and businesses requiring pixel-perfect implementation of UI/UX design systems.",
      problemsSolved: "UI bugs, sluggish client interactions, unmaintainable component code, poor mobile responsiveness.",
      tech: ["React 18/19", "TypeScript", "Redux Toolkit", "Zustand", "Radix UI", "Ant Design"],
    },
    {
      title: "MERN Stack Development",
      icon: <Layers size={20} className="text-pink-400" />,
      whatIBuild: "End-to-end full-stack applications with MongoDB databases, Express.js servers, React frontends, and Node.js backend services.",
      whoItIsFor: "Startups and enterprises wanting a unified JavaScript/TypeScript codebase across client and server.",
      problemsSolved: "Disjointed technology stacks, difficult data synchronization, unstandardized API responses.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    },
    {
      title: "Full-Stack Web Application Development",
      icon: <Server size={20} className="text-emerald-400" />,
      whatIBuild: "Custom Web Applications with database schemas, secure authentication, client dashboards, background workflows, and payment integration.",
      whoItIsFor: "Businesses building proprietary digital products, workflow management platforms, or community portals.",
      problemsSolved: "Fragmented software tools, security vulnerabilities, lack of role permissions, data management bottlenecks.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Stripe", "JWT"],
    },
    {
      title: "E-Commerce Development",
      icon: <ShoppingBag size={20} className="text-amber-400" />,
      whatIBuild: "Custom full-stack e-commerce storefronts with dynamic product catalogs, inventory grids, cart drawers, checkout integration, and order management.",
      whoItIsFor: "DTC brands, online retailers, and merchants wanting custom e-commerce web storefronts with full brand control.",
      problemsSolved: "Shopify template speed constraints, high platform transaction fees, limited custom checkout workflows.",
      tech: ["Next.js", "React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "SaaS & Admin Dashboard Development",
      icon: <LayoutDashboard size={20} className="text-cyan-400" />,
      whatIBuild: "Enterprise CRM dashboards, analytics portals, property inventory management grids, and scheduling tools.",
      whoItIsFor: "B2B SaaS companies, real estate firms, financial services, and operations managers.",
      problemsSolved: "Slow rendering on large datasets, unorganized lead tracking, lack of visual analytics metrics.",
      tech: ["AG Grid Enterprise", "ApexCharts", "FullCalendar", "Redux Persist", "TypeScript"],
    },
    {
      title: "REST API & Backend Development",
      icon: <Database size={20} className="text-purple-400" />,
      whatIBuild: "Secure, containerized RESTful API services with token authentication, route validation, database ORM queries, and Docker deployment.",
      whoItIsFor: "Web and mobile frontends needing reliable server API backends.",
      problemsSolved: "Unsafe endpoint access, slow database queries, lack of environment container consistency.",
      tech: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "Render"],
    },
    {
      title: "Existing Application Modernization",
      icon: <RefreshCw size={20} className="text-pink-400" />,
      whatIBuild: "Refactoring legacy React codebases, migrating from older CRA/Next.js versions, fixing performance issues, and upgrading dependencies.",
      whoItIsFor: "Companies with legacy web apps facing technical debt, bugs, or slow performance.",
      problemsSolved: "Outdated dependencies, unhandled state bugs, slow rendering, unmaintainable spaghetti code.",
      tech: ["React Refactoring", "TypeScript Migration", "Next.js Upgrade", "Performance Audit"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <Sparkles size={13} />
            <span>SERVICES & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Specialized <span className="gradient-text">Services & Engineering</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Professional web development services tailored for startups, agencies, and businesses in international US and European markets.
          </p>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-panel rounded-3xl p-6 border border-border flex flex-col justify-between shadow-xl relative overflow-hidden group gradient-border transition-all duration-300 hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                  <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-border group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-medium">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                  {service.title}
                </h3>

                <div className="space-y-2 mb-4 text-xs font-normal text-gray-600 dark:text-gray-300 leading-relaxed">
                  <div>
                    <span className="font-semibold text-foreground text-[11px] block text-cyan-500 dark:text-cyan-400">What I Build:</span>
                    <span>{service.whatIBuild}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-[11px] block text-purple-500 dark:text-purple-400">Target Audience:</span>
                    <span>{service.whoItIsFor}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 pt-3 border-t border-border">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-border text-[9px] font-mono text-gray-700 dark:text-gray-300"
                    >
                      {t}
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
