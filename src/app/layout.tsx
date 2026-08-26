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
  title: "Raj Puthawala | Full Stack MERN & Next.js Developer",
  description:
    "Portfolio of Raj Puthawala — Full Stack Developer specializing in Next.js, React 19, TypeScript, WebSockets, REST APIs, and production-level MERN architecture.",
  keywords: [
    "Raj Puthawala",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Surat Developer",
    "WebSockets",
    "React Developer",
  ],
  authors: [{ name: "Raj Puthawala" }],
  creator: "Raj Puthawala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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

