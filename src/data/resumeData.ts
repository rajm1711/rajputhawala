export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  type: "office" | "personal" | "vercel" | "render";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const personalDetails = {
  name: "RAJ PUTHAWALA",
  shortName: "Raj Puthawala",
  title: "Full Stack Developer",
  subtitle: "MERN Stack & Next.js Specialist",
  email: "rmputhawala@gmail.com",
  phone: "+91 9376110969",
  location: "Surat, Gujarat, India",
  github: "https://github.com/rajm1711",
  linkedin: "https://github.com/rajm1711",
  summary:
    "Full Stack Developer specializing in the MERN stack with hands-on experience building scalable, production-level web applications. Proficient in Next.js, TypeScript, and modern frontend architectures, with strong backend expertise in API development, authentication systems, Docker containerization, and real-time communication. Deployed multiple full-stack applications across Vercel and Render.",
  highlights: [
    "1+ Years Professional MERN & Next.js Industry Experience",
    "Real-time Architectures (WebSockets & STOMP Protocol)",
    "AI Integration & NLP Trading Analytics (Hugging Face)",
    "Enterprise Solutions & Docker Cloud Services (Render & Vercel)",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Codelamda Technology",
    role: "MERN Stack Developer",
    period: "Feb 2025 – Present",
    location: "Surat, Gujarat, India",
    summary:
      "Developing production-grade, scalable web applications with React, Next.js, and TypeScript, engineering role-based access control, Stripe payment workflows, and WebSocket real-time systems.",
    highlights: [
      "Developed production-grade web applications using React.js, Next.js, and TypeScript.",
      "Built scalable and responsive UI components using Tailwind CSS, Radix UI, and Ant Design.",
      "Implemented secure authentication system including login, signup, password reset, and onboarding workflows.",
      "Designed role-based access control (RBAC) for Individual users, Company users, and Admin panel.",
      "Integrated Stripe payment gateway for secure online transactions.",
      "Developed real-time chat functionality using WebSocket (STOMP protocol).",
      "Managed global state using Redux Toolkit and Zustand for efficient data handling.",
      "Built optimized forms using React Hook Form with validation.",
      "Integrated RESTful APIs and maintained clean, scalable architecture.",
      "Identified and resolved UI bugs, performance issues, and enhanced application features.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "assemble-teams",
    title: "Assemble Teams",
    tagline: "Community Collaboration Platform",
    category: "Office Projects",
    type: "office",
    status: "Office Production",
    description:
      "A feature-rich community collaboration platform developed at Codelamda Technology for seamless team engagement, real-time messaging, event orchestration, job boards, and TipTap rich-text content management.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Google OAuth",
      "WebSockets (STOMP)",
      "Stripe",
      "TipTap Editor",
      "Leaflet",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Radix UI",
    ],
    highlights: [
      "Developed a full-stack collaboration platform using Next.js 15, React 19, and TypeScript.",
      "Implemented Google OAuth authentication supporting multi-user access.",
      "Built community features including discussions, blogs, events, and job boards.",
      "Designed real-time chat system using WebSocket (STOMP protocol).",
      "Integrated Stripe payment gateway for premium membership features.",
      "Developed rich content management using TipTap editor and Markdown support.",
    ],
    githubUrl: "https://github.com/rajm1711",
    featured: true,
  },
  {
    id: "inbuildify",
    title: "Inbuildify",
    tagline: "Comprehensive Real Estate & Construction CRM",
    category: "Office Projects",
    type: "office",
    status: "Office Production",
    description:
      "Enterprise-grade CRM solution architected for real estate and construction firms, providing complex lead tracking, inventory grids, automated quotation contracts, and FullCalendar site dispatch.",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "AG Grid Enterprise",
      "Redux Toolkit",
      "Redux Persist",
      "ApexCharts",
      "FullCalendar",
      "Tailwind CSS",
      "Ant Design",
    ],
    highlights: [
      "Architected and developed a highly scalable CRM platform tailored for real estate & construction using Next.js 14, React 18, and TypeScript.",
      "Built complex, high-performance data management interfaces utilizing AG Grid Enterprise for tracking leads, sales, and property inventory.",
      "Managed global application state and persistent storage across complex multi-stage workflows using Redux Toolkit and Redux Persist.",
      "Engineered dynamic reporting dashboards with ApexCharts, and integrated FullCalendar for advanced task scheduling.",
    ],
    githubUrl: "https://github.com/rajm1711",
    featured: true,
  },
  {
    id: "edge-iq",
    title: "EdgeIQ",
    tagline: "AI-Powered Trading Intelligence Platform",
    category: "Personal AI & Trading",
    type: "personal",
    status: "In Progress",
    description:
      "Personal flagship financial intelligence platform featuring WebSocket live streaming for stocks, indices, and commodities, coupled with NLP-driven sentiment analysis and P&L analytics journal.",
    technologies: [
      "Next.js",
      "TypeScript",
      "WebSockets",
      "Hugging Face NLP",
      "Finnhub API",
      "Yahoo Finance API",
      "Sentiment Analysis",
      "State Caching",
      "Tailwind CSS",
    ],
    highlights: [
      "Building a real-time trading intelligence platform using Next.js and TypeScript.",
      "Implementing WebSocket-based live market data streaming (stocks, indices, commodities).",
      "Integrating AI-powered analysis using NLP models (Hugging Face) for market insights.",
      "Developing sentiment analysis system using news and financial data sources.",
      "Implementing trading journal with P&L tracking and performance analytics.",
    ],
    githubUrl: "https://github.com/rajm1711/edge",
    liveUrl: "https://edge-rose.vercel.app",
    featured: true,
  },
  {
    id: "swan-ecom",
    title: "Swan E-Commerce",
    tagline: "Modern E-Commerce Storefront",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "Full-stack e-commerce web application featuring dynamic catalog browsing, optimized product gallery, shopping cart state management, responsive UI, and backend service integration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "State Management",
    ],
    highlights: [
      "Deployed live on Vercel with automated deployment pipelines.",
      "Built responsive product gallery and interactive shopping cart workflows.",
      "Integrated backend endpoints for catalog query and cart state sync.",
    ],
    githubUrl: "https://github.com/rajm1711/swan-ecom",
    liveUrl: "https://swan-ecom-one.vercel.app",
    featured: true,
  },
  {
    id: "nirva",
    title: "Nirva",
    tagline: "Minimalist Lifestyle & Wellness Web App",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "Serene lifestyle web application crafted for wellness tracking and content delivery. Engineered custom fixes for serverless image buffer handling on Vercel and implemented fluid visual aesthetics.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Buffer Optimization",
      "Framer Motion",
    ],
    highlights: [
      "Resolved serverless image buffer corruption issues on Vercel deployment.",
      "Crafted elegant glassmorphic UI with responsive dark/light components.",
      "Optimized page speed score and image rendering metrics.",
    ],
    githubUrl: "https://github.com/rajm1711/nirva",
    liveUrl: "https://nirva-lilac.vercel.app",
    featured: true,
  },
  {
    id: "sovereignlending",
    title: "Sovereign Lending",
    tagline: "Mortgage & Financial Calculator Suite",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "Fintech web application built for loan estimation, interactive interest rate comparison, dynamic repayment breakdown, and streamlined lead capture workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Financial Analytics",
      "Vercel Edge Network",
    ],
    highlights: [
      "Engineered real-time mortgage & interest repayment calculation algorithms.",
      "Designed sleek financial UI cards with micro-animations and form validation.",
      "Deployed and optimized for instant loading on Vercel Edge Network.",
    ],
    githubUrl: "https://github.com/rajm1711/sovereignlending",
    liveUrl: "https://sovereignlending.vercel.app",
    featured: true,
  },
  {
    id: "forma-studio",
    title: "Forma Studio",
    tagline: "Creative Digital Design Agency Showcase",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "High-craft digital design agency showcase featuring root layout global providers, custom Google typography, aesthetic gallery grids, and fluid layout animations.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Global Context Providers",
      "Framer Motion",
    ],
    highlights: [
      "Initialized root layout with global providers, fonts, and layout animations.",
      "Implemented custom agency portfolio showcases with smooth scroll interactions.",
      "Built responsive typography scales and modern dark-theme palette.",
    ],
    githubUrl: "https://github.com/rajm1711/forma-studio",
    liveUrl: "https://forma-studio-alpha.vercel.app",
    featured: true,
  },
  {
    id: "rhodeskin-clone",
    title: "Rhode Skin Clone",
    tagline: "Luxury Beauty E-Commerce Storefront",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "High-end e-commerce store clone inspired by Rhode Skin, featuring sleek product showcase, fluid shopping bag drawer, smooth image sliders, and luxury branding UI.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shopping Bag UI",
    ],
    highlights: [
      "Built luxury aesthetic product showcase with interactive image carousels.",
      "Implemented slide-out cart drawer and instant product variant pickers.",
      "Optimized mobile touch gestures and responsive layouts.",
    ],
    githubUrl: "https://github.com/rajm1711/rhodeskin-clone",
    liveUrl: "https://rhodeskin-clone.vercel.app",
    featured: true,
  },

  {
    id: "ecombackend",
    title: "E-Commerce API Service",
    tagline: "Production Dockerized Node.js Web Service",
    category: "Backend & APIs",
    type: "render",
    status: "Render Live",
    description:
      "Production-grade Node.js & Express RESTful API backend hosted on Render as a containerized Docker web service. Powers e-commerce operations including JWT authentication, product CRUD, cart state, order processing, and MongoDB integration.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "JWT Auth",
      "RESTful API",
      "Render Cloud",
    ],
    highlights: [
      "Containerized using Docker and deployed as a live Web Service on Render cloud.",
      "Engineered secure JWT authentication and role-based route protection.",
      "Implemented scalable MongoDB schemas for products, users, cart, and orders.",
    ],
    githubUrl: "https://github.com/rajm1711/ecombackend",
    liveUrl: "https://ecombackend-6zc3.onrender.com",
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js / React 19" },
      { name: "Next.js 14 / 15 (App Router)" },
      { name: "Tailwind CSS" },
      { name: "Radix UI" },
      { name: "Ant Design" },
      { name: "Redux Toolkit / Persist" },
      { name: "Zustand" },
      { name: "React Hook Form" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful API Design" },
      { name: "Docker Containerization" },
      { name: "WebSockets (STOMP Protocol)" },
      { name: "Authentication / OAuth 2.0" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Render PaaS (Docker)" },
      { name: "Vercel Edge Deployments" },
    ],
  },
  {
    title: "Tools & Integrations",
    skills: [
      { name: "Git / GitHub" },
      { name: "Stripe Payments" },
      { name: "AG Grid Enterprise" },
      { name: "ApexCharts" },
      { name: "TipTap & Markdown" },
      { name: "Leaflet Maps" },
      { name: "Hugging Face NLP" },
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "C.K. Pithawala College of Engineering (GTU)",
    degree: "Bachelor of Electronics & Communication",
    period: "July 2013 – Jan 2018",
    details: "Final CGPA: 7.3",
  },
];

export const certifications: EducationItem[] = [
  {
    institution: "Red & White Multimedia Education",
    degree: "Full-stack Web Development",
    period: "July 2023 – Dec 2024",
  },
];
