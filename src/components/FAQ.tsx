"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Raj Puthawala?",
    answer:
      "Raj Puthawala is a Full-Stack MERN + Next.js Developer and Frontend Specialist with hands-on experience building modern, production-grade web applications for startups, agencies, and businesses.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js (14 & 15 App Router), TypeScript, Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, Supabase, Redux Toolkit, Zustand, React Hook Form, Tailwind CSS, Ant Design, Radix UI, JWT auth, and deployment across Vercel & Docker (Render/VPS).",
  },
  {
    question: "Can you build both frontend and backend for full-stack applications?",
    answer:
      "Yes. I build complete full-stack web applications: responsive, accessible frontends using Next.js/React alongside secure Node.js/Express REST APIs with MongoDB or PostgreSQL databases.",
  },
  {
    question: "Do you work with Next.js?",
    answer:
      "Yes, Next.js is one of my primary frontend frameworks. I build production Next.js applications using Server Components, Server-Side Rendering (SSR), API route handlers, and performance-optimized images.",
  },
  {
    question: "Can you build e-commerce platforms and SaaS applications?",
    answer:
      "Yes. I have built production e-commerce platforms (like Swan E-Commerce and Rhode Skin Clone) and SaaS/CRM platforms (like Assemble Teams community hub and Inbuildify real estate CRM).",
  },
  {
    question: "Do you work with international clients in US and European markets?",
    answer:
      "Yes. I am available for remote contracts and project engagements with startups, businesses, and agencies in the US, Europe, and globally, offering time-zone flexibility and clear async communication.",
  },
  {
    question: "Can you work with an existing codebase or legacy project?",
    answer:
      "Yes. I can audit existing React or Next.js codebases, refactor component structures, fix bugs, optimize performance, upgrade dependencies, or implement new features seamlessly.",
  },
  {
    question: "Can you build REST APIs and secure authentication systems?",
    answer:
      "Yes. I design REST APIs with Node.js and Express, incorporating JWT authentication, refresh token rotation, password hashing, and Role-Based Access Control (RBAC).",
  },
  {
    question: "How do you ensure web application performance and SEO?",
    answer:
      "I optimize for Core Web Vitals using Next.js Image caching, lazy loading, code splitting, clean semantic HTML hierarchy, and Schema.org structured JSON-LD data for search engine and answer engine (AEO) visibility.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-[11px] font-mono mb-3 shadow-sm font-medium">
            <HelpCircle size={13} />
            <span>ANSWER ENGINE & CLIENT FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal leading-relaxed max-w-xl mx-auto">
            Clear, factual answers regarding my specialization, tech stack, development approach, and client collaboration.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl border border-border overflow-hidden transition-colors shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-foreground hover:text-cyan-400 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal border-t border-border/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
