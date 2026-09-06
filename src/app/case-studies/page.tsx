import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { longFormCaseStudies } from "@/data/longFormCaseStudiesData";
import { FileText, Clock, ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Case Studies | Raj Puthawala",
  description:
    "Long-form engineering case studies covering production Next.js e-commerce platforms, STOMP WebSocket real-time applications, and AI stock research dashboards.",
  keywords: [
    "Raj Puthawala Case Studies",
    "Next.js E-Commerce Architecture",
    "STOMP WebSockets Architecture",
    "AI Financial Platform Case Study",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/case-studies",
  },
  openGraph: {
    title: "Engineering Case Studies | Raj Puthawala",
    description: "In-depth engineering breakdowns of full-stack web applications, state containers, and cloud architecture.",
    url: "https://rajputhawala.vercel.app/case-studies",
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <FileText size={13} />
            <span>ENGINEERING PROOF ({longFormCaseStudies.length} CASE STUDIES)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Detailed <span className="gradient-text">Engineering Case Studies</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            In-depth technical breakdowns demonstrating full-stack engineering capability, software decision-making, state management, and real-time performance.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {longFormCaseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="glass-panel p-7 rounded-3xl border border-border flex flex-col justify-between shadow-xl gradient-border hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-medium">
                    {cs.category}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock size={11} />
                    {cs.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                  <Link href={`/case-studies/${cs.slug}`}>{cs.title}</Link>
                </h2>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-5 line-clamp-3">
                  {cs.tagline}
                </p>

                <div className="space-y-1.5 mb-6">
                  {cs.keyDecisions.slice(0, 2).map((kd, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                      <span className="text-cyan-400 font-mono font-medium shrink-0">›</span>
                      <span className="line-clamp-2">{kd}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border">
                  {cs.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs flex items-center justify-between shadow-md hover:opacity-95 transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
