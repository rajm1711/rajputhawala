import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { articles } from "@/data/articlesData";
import { BookOpen, Clock, ArrowRight, Sparkles, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Articles & Engineering Insights | Raj Puthawala",
  description:
    "Technical articles on Next.js 15, React 19, MERN stack architecture, JWT authentication, state management, and web application performance by Raj Puthawala.",
  keywords: [
    "Raj Puthawala Articles",
    "Next.js vs MERN",
    "JWT Authentication Node.js",
    "Frontend Architecture",
    "React Performance",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/articles",
  },
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <BookOpen size={13} />
            <span>TECHNICAL KNOWLEDGE & ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Engineering <span className="gradient-text">Articles & Insights</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            In-depth technical guides, architectural comparisons, and best practices for modern web application development with React, Next.js, and Node.js.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="glass-panel p-6 rounded-3xl border border-border flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all duration-300 gradient-border group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border text-[10px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-base font-bold font-heading text-foreground group-hover:text-cyan-400 transition-colors leading-snug mb-3">
                  <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-5 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-gray-600 dark:text-gray-300 font-normal"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl glass-panel text-foreground hover:text-cyan-400 font-medium text-xs border border-border hover:border-cyan-500/40 transition-all flex items-center justify-between group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
