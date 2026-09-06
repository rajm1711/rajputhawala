import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import { ShoppingBag, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Raj Puthawala",
  description:
    "Custom Next.js & MERN e-commerce storefront development, Stripe integration, cart state sync, and custom DTC store builds by Raj Puthawala.",
  keywords: [
    "E-Commerce Development Services",
    "Next.js E-Commerce",
    "Shopify Migration Custom Next.js",
    "Stripe Checkout Integration",
    "Raj Puthawala",
  ],
  alternates: {
    canonical: "https://rajputhawala.vercel.app/services/ecommerce-development",
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <SpotlightBackground />
      <Navbar />

      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Services</span>
        </Link>

        <div className="mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xs font-mono uppercase text-pink-400 font-semibold">Storefront Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight mb-4">
            E-Commerce Development Services
          </h1>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
            Building custom full-stack e-commerce web storefronts with dynamic product catalogs, inventory grids, cart drawers, Stripe checkout, and mobile-optimized layouts.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">What I Build</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Custom Next.js & MERN e-commerce platforms, luxury beauty storefronts (Rhode Skin Clone style), product catalog query backends, and custom Next.js storefront migrations from Shopify.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Who It Is For</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Direct-to-Consumer (DTC) brands, online retailers, and merchants wanting full control over frontend branding, checkout workflows, and page speed.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-border space-y-3">
            <h2 className="text-lg font-bold font-heading text-foreground">Typical Problems Solved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                <span>Shopify template speed and design layout constraints.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                <span>High platform transaction fees and bloat.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                <span>Sluggish mobile shopping cart interaction.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                <span>Synchronizing guest vs logged-in user cart sessions.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-4 gradient-border">
          <h3 className="text-xl font-bold font-heading text-foreground">
            Building an E-Commerce Platform?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Discuss your e-commerce platform migration or custom storefront project.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
            >
              Start E-Commerce Project
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
