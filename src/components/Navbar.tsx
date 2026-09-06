"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { personalDetails } from "@/data/resumeData";
import { Menu, X, ArrowUpRight, Code2, Sun, Moon, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element && (window.location.pathname === "/" || window.location.pathname === "")) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-2.5 shadow-xl border-b border-border"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-base font-semibold font-heading tracking-tight"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300 p-0.5">
              <div className="w-full h-full bg-[#08090d] dark:bg-[#08090d] light:bg-white rounded-[10px] flex items-center justify-center text-cyan-400">
                <Code2 size={16} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground group-hover:text-cyan-500 transition-colors tracking-tight text-xs sm:text-sm">
                {personalDetails.name}
              </span>
              <span className="text-[9px] uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
                <Sparkles size={9} />
                Full-Stack MERN + Next.js
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-0.5 glass-panel px-3.5 py-1.5 rounded-full shadow-md border border-border">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-150"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-panel hover:scale-105 active:scale-95 transition-all text-gray-700 dark:text-gray-200 hover:text-cyan-500 border border-border shadow-sm"
              aria-label="Toggle Theme"
            >
              <motion.div
                key={resolvedTheme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {resolvedTheme === "dark" ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-purple-600" />}
              </motion.div>
            </button>
          )}

          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-[11px] uppercase font-mono tracking-wider font-medium text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl shadow-md shadow-purple-500/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95 hover:opacity-95 group"
          >
            GitHub
            <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-panel text-gray-700 dark:text-gray-200"
              aria-label="Toggle Theme Mobile"
            >
              {resolvedTheme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-purple-600" />}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-panel text-gray-700 dark:text-gray-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-panel border-b border-border px-5 py-4"
        >
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 py-1"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-md"
              >
                GitHub Profile
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
