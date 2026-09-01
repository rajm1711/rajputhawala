"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalDetails, projects, experiences, skillCategories } from "@/data/resumeData";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, X, Maximize2, Minimize2, Play } from "lucide-react";

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function TerminalConsole() {
  const [inputVal, setInputVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init",
      command: "welcome",
      output: (
        <div className="space-y-1 text-cyan-400">
          <p className="font-semibold text-emerald-400">⚡ RAJ PUTHAWALA CLI ENGINE v2.5.0 (x86_64-node)</p>
          <p className="text-gray-400">Type <span className="text-pink-400 font-bold">help</span> or click quick command buttons below to interact with the systems portfolio.</p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputContent: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputContent = (
          <div className="space-y-1.5 text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold mb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
              <p><span className="text-pink-400">about</span> - Brief professional statement</p>
              <p><span className="text-pink-400">skills</span> - Core technical stack & capabilities</p>
              <p><span className="text-pink-400">projects</span> - Production applications & live URLs</p>
              <p><span className="text-pink-400">experience</span> - Career timeline & office achievements</p>
              <p><span className="text-pink-400">contact</span> - Email, phone & Surat location</p>
              <p><span className="text-pink-400">hire</span> - Collaboration & availability status</p>
              <p><span className="text-pink-400">clear</span> - Clear output screen</p>
            </div>
          </div>
        );
        break;

      case "about":
        outputContent = (
          <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
            <p className="text-cyan-400 font-semibold">{personalDetails.name} — {personalDetails.title}</p>
            <p>{personalDetails.summary}</p>
            <div className="pt-1 flex flex-wrap gap-1">
              {personalDetails.highlights.map((h, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px]">
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        outputContent = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <span className="text-purple-400 font-semibold">[{cat.title}]:</span>{" "}
                <span className="text-gray-300">{cat.skills.map((s) => s.name).join(" • ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-semibold">FEATURED PRODUCTION SYSTEMS ({projects.length}):</p>
            {projects.slice(0, 5).map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2">
                <p className="text-cyan-300 font-medium">{p.title} <span className="text-gray-400 text-[10px]">({p.tagline})</span></p>
                <p className="text-gray-400 text-[11px]">{p.description}</p>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline text-[10px]">
                    ↳ {p.liveUrl}
                  </a>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        outputContent = (
          <div className="space-y-2 text-xs">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <p className="text-amber-400 font-semibold">{exp.role} @ {exp.company}</p>
                <p className="text-gray-400 text-[10px]">{exp.period} | {exp.location}</p>
                <p className="text-gray-300 text-[11px] mt-1">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className="space-y-1 text-xs text-gray-300">
            <p><span className="text-cyan-400 font-semibold">Email:</span> {personalDetails.email}</p>
            <p><span className="text-cyan-400 font-semibold">Phone:</span> {personalDetails.phone}</p>
            <p><span className="text-cyan-400 font-semibold">Location:</span> {personalDetails.location} (IST)</p>
            <p><span className="text-cyan-400 font-semibold">GitHub:</span> {personalDetails.github}</p>
          </div>
        );
        break;

      case "hire":
        outputContent = (
          <div className="space-y-1 text-xs text-emerald-400">
            <p className="font-semibold">🚀 STATUS: OPEN FOR ARCHITECTURE & FULL STACK CONTRACTS</p>
            <p className="text-gray-300">Available for Next.js App Router engineering, WebSockets integration, and enterprise MERN development.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputContent = (
          <p className="text-rose-400 text-xs">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="underline font-bold">help</span> for command list.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: outputContent,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputVal("");
  };

  const quickCmds = ["help", "about", "skills", "projects", "experience", "contact", "hire", "clear"];

  return (
    <>
      {/* Floating CLI Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0d0f17]/90 dark:bg-[#0d0f17]/95 text-cyan-400 border border-cyan-500/40 shadow-2xl backdrop-blur-xl group hover:border-cyan-400 transition-all"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <TerminalIcon size={16} />
          <span className="text-xs font-mono font-medium tracking-wide">Interactive CLI</span>
          <Sparkles size={13} className="text-purple-400 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>

      {/* Terminal Window Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`fixed z-50 shadow-2xl border border-cyan-500/30 rounded-2xl overflow-hidden glass-panel bg-[#07090e]/95 backdrop-blur-2xl transition-all duration-300 ${
              isMinimized
                ? "bottom-20 right-6 w-80 h-12 p-2"
                : "bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[580px] max-h-[500px] h-[460px] flex flex-col"
            }`}
          >
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-amber-500 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)} />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                  <TerminalIcon size={12} className="text-cyan-400" />
                  raj-puthawala-cli — zsh
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-rose-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Terminal Body */}
                <div className="p-4 overflow-y-auto flex-1 font-mono text-xs space-y-3 scrollbar-thin scrollbar-thumb-gray-700">
                  {history.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-emerald-400">visitor@rajputhawala:~ $</span>
                        <span className="text-white font-semibold">{item.command}</span>
                        <span className="text-[9px] text-gray-500 ml-auto">{item.timestamp}</span>
                      </div>
                      <div className="pl-4 border-l border-white/10">{item.output}</div>
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Preset Command Quick Pills */}
                <div className="px-3 py-1.5 bg-black/30 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  <span className="text-[10px] font-mono text-gray-500 shrink-0">Try:</span>
                  {quickCmds.map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleCommand(cmd)}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-white/10 hover:border-cyan-400/40 transition-colors shrink-0 flex items-center gap-1"
                    >
                      <Play size={8} className="text-cyan-400" />
                      {cmd}
                    </button>
                  ))}
                </div>

                {/* Interactive Command Input Line */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(inputVal);
                  }}
                  className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2 shrink-0"
                >
                  <span className="text-emerald-400 font-mono text-xs">visitor@rajputhawala:~ $</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type a command (e.g. help, projects, hire)..."
                    className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-gray-600"
                    autoFocus
                  />
                  <button type="submit" className="p-1 rounded text-cyan-400 hover:text-cyan-300">
                    <CornerDownLeft size={14} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
