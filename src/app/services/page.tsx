import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { Code, Cpu, Server, ShoppingBag, ArrowRight, Sparkles, LayoutDashboard, Database, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js & MERN Development Services | Raj Puthawala",
  description:
    "Professional Next.js, React frontend, MERN stack, and custom e-commerce web development services tailored for startups and businesses.",
  keywords: [
    "Raj Puthawala Services",
    "Next.js Development Services",
    "MERN Development Services",
    "E-Commerce Development",
    "Full-Stack Development",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/services",
  },
};

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Next.js Development",
      href: "/services/nextjs-development",
      icon: <Code size={22} className="text-cyan-400" />,
      desc: "Custom Next.js App Router applications, Server Components, SSR, SEO optimization, and Vercel edge deployments.",
    },
    {
      title: "MERN Stack Development",
      href: "/services/mern-development",
      icon: <Server size={22} className="text-purple-400" />,
      desc: "Full-stack web applications built with MongoDB, Express.js, React, and Node.js, featuring secure REST APIs and JWT RBAC.",
    },
    {
      title: "E-Commerce Development",
      href: "/services/ecommerce-development",
      icon: <ShoppingBag size={22} className="text-pink-400" />,
      desc: "Custom e-commerce storefronts, Shopify to custom Next.js migrations, payment gateway integration, and responsive cart UI.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <Sparkles size={13} />
            <span>COMMERCIAL CAPABILITIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Engineering & <span className="gradient-text">Development Services</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            High-craft technical solutions tailored for startups, agencies, and businesses across international markets.
          </p>
        </div>

        {/* Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {mainServices.map((svc) => (
            <div
              key={svc.title}
              className="glass-panel p-7 rounded-3xl border border-border flex flex-col justify-between shadow-xl gradient-border hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-border w-fit mb-5 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>

                <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-3">
                  {svc.title}
                </h2>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                  {svc.desc}
                </p>
              </div>

              <Link
                href={svc.href}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs flex items-center justify-between shadow-md hover:opacity-95 transition-all"
              >
                <span>Explore Service</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h2 className="text-2xl font-bold font-heading text-foreground">
            Have a custom requirement or legacy application to modernize?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Contact me to discuss architecture, scope, timelines, and technical implementation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
