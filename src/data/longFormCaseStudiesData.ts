export interface LongFormCaseStudy {
  slug: string;
  title: string;
  fullTitle: string;
  tagline: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    authentication: string;
  };
  keyDecisions: string[];
  features: string[];
  challenges: string[];
  results: string[];
  technologies: string[];
}

export const longFormCaseStudies: LongFormCaseStudy[] = [
  {
    slug: "nextjs-ecommerce",
    title: "Production E-Commerce Platform",
    fullTitle: "Building a Production E-Commerce Platform with Next.js and Node.js",
    tagline: "Architecture breakdown of full-stack storefronts built with Next.js App Router, SSR, and Node.js REST API",
    category: "Full-Stack E-Commerce",
    readTime: "10 min read",
    publishDate: "August 2025",
    author: "Raj Puthawala",
    overview:
      "A technical case study detailing the architectural design, performance tuning, and cart state synchronization when engineering custom e-commerce storefronts with Next.js App Router and containerized Node.js REST APIs.",
    problem:
      "Legacy e-commerce templates often suffer from client-side bundle bloat, sluggish mobile rendering, poor SEO indexing on dynamically filtered catalogs, and brittle cart state persistence across anonymous guest sessions.",
    solution:
      "Implemented a Server-Side Rendered (SSR) product catalog powered by Next.js App Router, combined with an optimized client drawer state (Zustand/Redux), image optimization via Next.js Image component, and a Node.js Express REST API backend with MongoDB.",
    role: "Full-Stack Developer & Frontend Architect",
    architecture: {
      frontend: "Next.js App Router, TypeScript, Tailwind CSS, Zustand client cart state, Framer Motion drawers.",
      backend: "Node.js REST API hosted on Render Cloud containerized via Docker.",
      database: "MongoDB Atlas with Mongoose schema indexing for categories, products, and variants.",
      authentication: "JWT access tokens paired with HTTP-only refresh cookies for registered buyer accounts.",
    },
    keyDecisions: [
      "Server-Side Rendering (SSR) for product listing pages to guarantee search engine crawlers index dynamic catalog filters.",
      "Isolating shopping bag drawer state inside a lightweight Zustand client store to avoid re-rendering product grids.",
      "Pre-fetching adjacent product detail routes on client hover to achieve instant sub-100ms page transitions.",
    ],
    features: [
      "Dynamic catalog filtering by price, category, and multi-attribute variants.",
      "Slide-out shopping bag drawer with animated quantity adjustments and total calculation.",
      "Stripe payment checkout workflow integration.",
      "RESTful API integration with automated error handling and request validation.",
    ],
    challenges: [
      "Preventing layout shifts during image loading on mobile viewports.",
      "Synchronizing guest shopping cart state seamlessly upon user login without losing cart contents.",
    ],
    results: [
      "Sub-1 second initial contentful paint across desktop and mobile devices.",
      "100% pre-rendered SEO HTML markup for catalog item pages.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    slug: "realtime-platform",
    title: "Real-Time Collaboration Platform",
    fullTitle: "Building a Real-Time Collaboration Platform with Next.js and WebSockets",
    tagline: "High-concurrency messaging and team engagement orchestration using STOMP WebSocket protocol",
    category: "Real-Time Systems",
    readTime: "12 min read",
    publishDate: "July 2025",
    author: "Raj Puthawala",
    overview:
      "An in-depth engineering breakdown of Assemble Teams, a full-stack community collaboration platform featuring STOMP WebSocket messaging channels, Google OAuth, and TipTap rich-text authoring.",
    problem:
      "Enterprise teams and professional communities require instantaneous messaging, event orchestration, and collaborative article authoring without latency spikes or WebSocket connection drops during network changes.",
    solution:
      "Designed a real-time messaging pipeline using WebSocket with STOMP protocol over Node.js, combined with Redux Toolkit for central channel message caching and TipTap editor for rich content creation.",
    role: "MERN Stack Developer at Codelamda Technology",
    architecture: {
      frontend: "Next.js 15, React 19, TypeScript, Redux Toolkit, Tailwind CSS, Ant Design, Radix UI.",
      backend: "Node.js REST API with WebSocket server brokers handling STOMP pub/sub topics.",
      database: "MongoDB storing users, community spaces, discussion channels, and audit logs.",
      authentication: "Google OAuth 2.0 and JWT token authentication supporting RBAC for Individual and Corporate accounts.",
    },
    keyDecisions: [
      "Utilizing STOMP protocol over WebSockets for structured message frame parsing (SUBSCRIBE, SEND, UNSUBSCRIBE).",
      "Implementing client-side message queue buffers in Redux Toolkit to prevent UI freezes during message spikes.",
      "Lazy-loading TipTap rich-text editor instances to keep initial bundle size minimal.",
    ],
    features: [
      "Real-time team chat and channel discussions using STOMP WebSockets.",
      "Rich-text article and documentation publishing with TipTap editor.",
      "Stripe integrated payment flows for community memberships.",
      "Role-Based Access Control (RBAC) separating Individual, Enterprise, and Admin permissions.",
    ],
    challenges: [
      "Managing WebSocket auto-reconnect logic without creating duplicate message listeners.",
      "Ensuring clean multi-role permissions across complex organization onboarding flows.",
    ],
    results: [
      "Sub-50ms message delivery across live WebSocket channels.",
      "35% reduction in initial client bundle size via dynamic imports.",
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "STOMP WebSockets", "Node.js", "MongoDB", "Redux Toolkit", "Stripe"],
  },
  {
    slug: "ai-stock-research",
    title: "AI-Powered Financial Platform",
    fullTitle: "Building an AI-Powered Stock Research Application",
    tagline: "Architecting low-latency financial quote streaming and Hugging Face NLP news sentiment analysis",
    category: "AI & Financial Tech",
    readTime: "11 min read",
    publishDate: "June 2025",
    author: "Raj Puthawala",
    overview:
      "A deep-dive technical case study of EdgeIQ, a personal financial intelligence platform built to stream live market feeds and execute AI sentiment scoring on financial news.",
    problem:
      "Traders face information overload analyzing disparate stock feeds, financial news articles, and trading journal entries across separate tools.",
    solution:
      "Built a Next.js application integrating WebSocket streaming from Finnhub and Yahoo Finance with Hugging Face NLP models to automate market sentiment scoring and P&L analytics.",
    role: "Full-Stack Developer & Frontend Architect",
    architecture: {
      frontend: "Next.js, TypeScript, React 19, Recharts financial graphics, Zustand state container.",
      backend: "Node.js REST service with WebSocket listeners fetching market quote tickers.",
      database: "MongoDB storing historical trading logs, sentiment analysis caches, and watchlists.",
      authentication: "JWT authentication with HTTP-only refresh tokens.",
    },
    keyDecisions: [
      "Zustand state caching for high-frequency market tick data to avoid unnecessary React re-renders.",
      "Client-side caching layer for Hugging Face NLP sentiment scores to minimize third-party API rate limits.",
    ],
    features: [
      "WebSocket live ticker feeds for equities, market indices, and commodities.",
      "Hugging Face NLP news sentiment scoring.",
      "Interactive trading journal with automated P&L analytics and win-rate charts.",
    ],
    challenges: [
      "Maintaining smooth 60fps chart rendering during high-frequency WebSocket updates.",
      "Normalizing disparate REST payloads from multiple market data providers.",
    ],
    results: [
      "Sub-35ms WebSocket tick streaming latency.",
      "Fluid 60fps UI performance under continuous live feed rendering.",
    ],
    technologies: ["Next.js", "TypeScript", "WebSockets", "Hugging Face NLP", "Finnhub API", "Zustand", "Recharts", "MongoDB"],
  },
];
