import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { articles } from "@/data/articlesData";
import { ArrowLeft, Clock, Calendar, User, BookOpen, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Raj Puthawala",
    };
  }

  return {
    title: `${article.title} | Raj Puthawala`,
    description: article.excerpt,
    keywords: [...article.tags, "Raj Puthawala", "Web Development", "Software Architecture"],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://rajputhawala.vercel.app/articles/${article.slug}`,
      publishedTime: article.publishDate,
      authors: ["Raj Puthawala"],
    },
    alternates: {
      canonical: `https://rajputhawala.vercel.app/articles/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema.org Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: "Raj Puthawala",
      url: "https://rajputhawala.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Raj Puthawala",
    },
    datePublished: article.publishDate,
    keywords: article.tags.join(", "),
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <SpotlightBackground />
      <Navbar />

      <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Articles</span>
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 font-medium">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {article.publishDate}
            </span>
            <span className="flex items-center gap-1">
              <User size={12} />
              {article.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Content Render */}
        <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-gray-700 dark:text-gray-300 font-normal">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold font-heading text-foreground pt-4 mb-2">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("#### ")) {
              return (
                <h4 key={index} className="text-base font-bold font-heading text-foreground pt-2 mb-2">
                  {paragraph.replace("#### ", "")}
                </h4>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n- ");
              return (
                <ul key={index} className="list-disc pl-5 space-y-1.5 my-3">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-gray-500 flex items-center gap-1 mr-2">
            <Tag size={13} />
            Article Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-border text-xs font-mono text-gray-700 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Callout Box */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
            RP
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading text-foreground">
              Written by Raj Puthawala
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">
              Full-Stack MERN + Next.js Developer specializing in React, Next.js App Router, Node.js APIs, and performance engineering.
            </p>
          </div>
        </div>

      </article>

      <Footer />
    </main>
  );
}
