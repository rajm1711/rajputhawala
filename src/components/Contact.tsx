"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalDetails } from "@/data/resumeData";
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, ArrowUpRight, DollarSign, AlertCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedBudget, setSelectedBudget] = useState<string>("$1k - $5k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const budgets = ["<$1k", "$1k - $5k", "$5k - $10k", "$10k+"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        budget: selectedBudget,
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      <div className="ambient-glow-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Big Contact Callout Banner */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 text-[11px] font-mono mb-4 shadow-sm font-medium">
            <Mail size={13} />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-heading text-foreground tracking-tight leading-[1.08]">
            Great Systems <br />
            <span className="gradient-text">Start With Great Architecture</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3 font-normal max-w-xl mx-auto">
            Available for full stack engineering, Next.js architecture consulting, real-time WebSockets integration, and enterprise contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-border space-y-4 shadow-lg gradient-border">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <h3 className="text-base font-semibold font-heading text-foreground">
                  Direct Contact Details
                </h3>
                <span className="text-[10px] font-mono text-cyan-500">SURAT, IN</span>
              </div>

              {/* Email Link */}
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-border hover:border-cyan-500/30 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 font-normal">Email Address</p>
                  <p className="text-xs font-semibold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {personalDetails.email}
                  </p>
                </div>
              </a>

              {/* Phone Link */}
              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-border hover:border-emerald-500/30 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 font-normal">Phone Number</p>
                  <p className="text-xs font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {personalDetails.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-border">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 font-normal">Location & Timezone</p>
                  <p className="text-xs font-semibold text-foreground">
                    {personalDetails.location} • IST
                  </p>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-border hover:border-cyan-500/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={15} className="text-gray-700 dark:text-gray-300" />
                  <span className="text-xs font-semibold text-foreground">
                    GitHub Profile
                  </span>
                </div>
                <ArrowUpRight size={13} className="text-gray-400 group-hover:text-foreground group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-border relative shadow-lg gradient-border">
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 size={26} />
                  </div>

                  <h3 className="text-xl font-semibold font-heading text-foreground">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 max-w-sm font-normal leading-relaxed">
                    Thank you <span className="font-semibold text-foreground">{formData.name || "there"}</span>. Your message and estimated budget ({selectedBudget}) have been dispatched directly to <span className="text-cyan-500 font-mono font-medium">{personalDetails.email}</span>.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
                    <a
                      href={`mailto:${personalDetails.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0ABudget: ${encodeURIComponent(selectedBudget)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-medium shadow-md flex items-center gap-1.5"
                    >
                      <Mail size={13} />
                      Send Copy Via Email Client
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-xl glass-panel text-foreground text-xs font-mono border border-border font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <h3 className="text-base font-semibold font-heading text-foreground">
                      Send a Direct Message
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-500 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      LIVE NOTIFICATIONS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1 font-normal">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 rounded-xl glass-panel text-foreground placeholder-gray-400 text-xs focus:outline-none focus:border-cyan-500 transition-colors font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1 font-normal">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2 rounded-xl glass-panel text-foreground placeholder-gray-400 text-xs focus:outline-none focus:border-cyan-500 transition-colors font-normal"
                      />
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1.5 font-normal flex items-center gap-1">
                      <DollarSign size={11} className="text-cyan-500" />
                      Estimated Project Budget (USD)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-1.5 px-2 rounded-lg text-[10px] font-mono transition-all border ${
                            selectedBudget === b
                              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium border-cyan-400"
                              : "bg-black/5 dark:bg-white/5 border-border text-gray-600 dark:text-gray-400 hover:text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-1 font-normal">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3.5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, system scope, or collaboration..."
                      className="w-full px-3.5 py-2 rounded-xl glass-panel text-foreground placeholder-gray-400 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none font-normal"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-mono flex items-center gap-1.5">
                      <AlertCircle size={14} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-medium text-xs uppercase tracking-wider shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-1.5 active:scale-98 disabled:opacity-50 group"
                  >
                    {loading ? (
                      "Sending Email Notification..."
                    ) : (
                      <>
                        <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        Send Message to Raj Puthawala
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}





