"use client";

import { personalDetails } from "@/data/resumeData";
import { ArrowUp, Github, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-border bg-background relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs shadow-md">
            <Code2 size={15} />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground font-heading">
              {personalDetails.name}
            </p>
            <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 font-normal">
              Full Stack Engineer • Surat, Gujarat, India
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-gray-500 font-mono text-center font-normal">
          © {new Date().getFullYear()} Raj Puthawala. All rights reserved. Built with Next.js 15, TypeScript & Tailwind CSS.
        </p>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors border border-border"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>

          <a
            href={`mailto:${personalDetails.email}`}
            className="p-2 rounded-lg glass-panel text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors border border-border"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 ml-1 shadow-md"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}



