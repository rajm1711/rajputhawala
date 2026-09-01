"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, Film, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";

export default function CinematicEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [cinematicMode, setCinematicMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Top Cinematic Film Scrubber / Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-[100] shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Subtle Film Grain Noise Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-[40] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Anamorphic Horizontal Beam Flares */}
      <div className="pointer-events-none fixed top-1/4 -left-48 w-[600px] h-[1px] bg-cyan-400/40 blur-[2px] shadow-[0_0_50px_rgba(6,182,212,0.6)] rotate-[-12deg] z-0 opacity-60 animate-pulse" />
      <div className="pointer-events-none fixed bottom-1/3 -right-48 w-[700px] h-[1px] bg-purple-400/40 blur-[2px] shadow-[0_0_50px_rgba(168,85,247,0.6)] rotate-[15deg] z-0 opacity-60 animate-pulse" />

      {/* Letterbox Bars when Cinematic Mode active */}
      {cinematicMode && (
        <>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            exit={{ height: 0 }}
            className="fixed top-0 left-0 right-0 bg-black z-[90] border-b border-cyan-500/20 flex items-center justify-center pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400/80 flex items-center gap-2">
              <Film size={11} className="animate-spin" />
              CINEMATIC SCOPE // 2.39:1 ANAMORPHIC VIEW
            </span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            exit={{ height: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-black z-[90] border-t border-cyan-500/20 flex items-center justify-center pointer-events-none"
          >
            <span className="text-[9px] font-mono tracking-[0.25em] text-gray-500">
              DIRECTED BY RAJ PUTHAWALA • FULL STACK ARCHITECTURE
            </span>
          </motion.div>
        </>
      )}

      {/* Floating Cinematic Viewport Toggle */}
      {mounted && (
        <motion.button
          onClick={() => setCinematicMode(!cinematicMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed bottom-6 left-6 z-[80] px-3.5 py-2 rounded-full border text-[11px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-2xl backdrop-blur-md ${
            cinematicMode
              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              : "bg-black/40 dark:bg-black/60 border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/50"
          }`}
          title="Toggle Cinematic Anamorphic Scope Mode"
        >
          <Film size={13} className={cinematicMode ? "text-cyan-400 animate-pulse" : "text-gray-400"} />
          <span className="hidden sm:inline font-semibold">
            {cinematicMode ? "Scope Mode ON" : "Cinematic Mode"}
          </span>
        </motion.button>
      )}
    </>
  );
}
