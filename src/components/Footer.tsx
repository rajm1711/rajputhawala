"use client";

import Link from "next/link";
import { personalDetails } from "@/data/resumeData";
import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-background relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs shadow-md">
              <Code2 size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground font-heading">
                {personalDetails.name}
              </p>
              <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 font-normal">
                Full-Stack MERN + Next.js Developer | Frontend Specialist
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-600 dark:text-gray-400 font-medium">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/articles" className="hover:text-cyan-400 transition-colors">
              Articles
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <p className="text-center sm:text-left font-normal">
            © {new Date().getFullYear()} Raj Puthawala. Built with Next.js 15, TypeScript & Tailwind CSS.
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors border border-border"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors border border-border"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2 rounded-lg glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors border border-border"
              aria-label="Email Contact"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 ml-1 shadow-md"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
