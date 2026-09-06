import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Puthawala | Full-Stack MERN + Next.js Developer",
  description:
    "Raj Puthawala is a Full-Stack MERN + Next.js Developer specializing in React, Next.js, Node.js and production-ready web applications for startups and businesses.",
  keywords: [
    "Raj Puthawala",
    "Full-Stack MERN + Next.js Developer",
    "Frontend Specialist",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Full-Stack Web Applications",
    "SaaS Developer",
    "E-Commerce Developer",
  ],
  authors: [{ name: "Raj Puthawala" }],
  creator: "Raj Puthawala",
  metadataBase: new URL("https://rajputhawala.vercel.app"),
  alternates: {
    canonical: "https://rajputhawala.vercel.app",
  },
  openGraph: {
    title: "Raj Puthawala | Full-Stack MERN + Next.js Developer",
    description:
      "Full-Stack MERN + Next.js Developer building production-ready web applications for modern startups, businesses, and international clients.",
    url: "https://rajputhawala.vercel.app",
    siteName: "Raj Puthawala Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Puthawala | Full-Stack MERN + Next.js Developer",
    description:
      "Full-Stack MERN + Next.js Developer specializing in React, Next.js, Node.js, and modern full-stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person & WebSite JSON-LD
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Puthawala",
    jobTitle: "Full-Stack MERN + Next.js Developer | Frontend Specialist",
    description:
      "Raj Puthawala is a Full-Stack MERN + Next.js Developer specializing in React, Next.js, Node.js, Express, and production-ready web applications for startups and businesses.",
    url: "https://rajputhawala.vercel.app",
    sameAs: [
      "https://github.com/rajm1711",
      "https://github.com/rajm1711", // LinkedIn profile link when available
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Redux Toolkit",
      "Zustand",
      "React Hook Form",
      "Tailwind CSS",
      "Ant Design",
      "Radix UI",
      "JWT Authentication",
      "Vercel",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Codelamda Technology",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Raj Puthawala Portfolio",
    url: "https://rajputhawala.vercel.app",
    author: {
      "@type": "Person",
      name: "Raj Puthawala",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
