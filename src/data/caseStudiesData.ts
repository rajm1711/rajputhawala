export interface CaseStudy {
  slug: string;
  id: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  tagline: string;
  category: string;
  type: "office" | "personal" | "vercel" | "render";
  status: string;
  description: string;
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
  features: string[];
  challenges: string[];
  performance: string;
  deployment: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "edge-iq",
    id: "edge-iq",
    title: "EdgeIQ",
    fullTitle: "EdgeIQ — AI-Powered Real-Time Trading Intelligence Platform",
    subtitle: "Financial intelligence & AI market sentiment dashboard",
    tagline: "AI-Powered Trading Intelligence Platform",
    category: "Personal AI & Trading",
    type: "personal",
    status: "In Progress",
    description:
      "Personal flagship financial intelligence platform featuring WebSocket live streaming for stocks, indices, and commodities, coupled with NLP-driven sentiment analysis and P&L analytics journal.",
    overview:
      "EdgeIQ is a high-concurrency real-time trading intelligence dashboard designed to aggregate live market data feeds, perform natural language processing (NLP) on financial news streams, and provide traders with dynamic P&L journal analytics.",
    problem:
      "Traders often struggle to synthesize fragmented market data, news streams, and trading performance metrics across multiple disconnected tools, leading to delayed decisions and lack of historical trade insights.",
    solution:
      "Built a unified Next.js web application integrating WebSocket feeds from Finnhub and Yahoo Finance for sub-50ms market updates, alongside Hugging Face sentiment analysis models that score incoming market news in real time.",
    role: "Full-Stack Developer & Frontend Architect (Personal Flagship)",
    architecture: {
      frontend: "Next.js App Router, TypeScript, React 19, Tailwind CSS, Recharts for financial visual charts.",
      backend: "Node.js REST API with WebSocket client listeners for real-time market quote streaming.",
      database: "MongoDB for storing user trading logs, historical trade entries, and sentiment history.",
      authentication: "JWT authentication with secure HTTP-only cookies and token refresh handlers.",
    },
    features: [
      "WebSocket live market streaming for equities, market indices, and commodities.",
      "NLP sentiment scoring of financial news articles powered by Hugging Face models.",
      "Interactive trading journal with automated P&L calculations and win-rate charts.",
      "Customizable watchlist and real-time price movement alerts.",
      "Responsive financial grid layouts optimized for desktop and mobile viewports.",
    ],
    challenges: [
      "Handling high-frequency WebSocket state updates in React without causing excessive component re-renders.",
      "Normalizing diverse payload formats from Finnhub and Yahoo Finance APIs into a unified internal data stream.",
      "Managing Hugging Face API rate limits gracefully with client-side caching and fallback scoring.",
    ],
    performance: "Optimized state management using Zustand and selective memoization to maintain fluid 60fps renders during continuous market feed updates.",
    deployment: "Deployed on Vercel with automated continuous deployment pipelines and edge runtime optimization.",
    liveUrl: "https://edge-rose.vercel.app",
    githubUrl: "https://github.com/rajm1711/edge",
    technologies: [
      "Next.js",
      "TypeScript",
      "React 19",
      "WebSockets",
      "Hugging Face NLP",
      "Finnhub API",
      "Yahoo Finance API",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    slug: "assemble-teams",
    id: "assemble-teams",
    title: "Assemble Teams",
    fullTitle: "Assemble Teams — Next.js Full-Stack Community Collaboration Platform",
    subtitle: "Enterprise collaboration & team engagement platform",
    tagline: "Community Collaboration Platform",
    category: "Office Projects",
    type: "office",
    status: "Office Production",
    description:
      "A feature-rich community collaboration platform developed at Codelamda Technology for seamless team engagement, real-time messaging, event orchestration, job boards, and TipTap rich-text content management.",
    overview:
      "Assemble Teams is a full-stack enterprise collaboration web application engineered at Codelamda Technology. It connects organizations, community groups, and individual professionals through discussion forums, job listings, event management, and real-time chat.",
    problem:
      "Organizations required an all-in-one community hub combining rich document authoring, real-time team channels, monetized events, and job postings without relying on disparate software tools.",
    solution:
      "Architected a Next.js 15 application featuring Google OAuth authentication, TipTap rich-text content authoring, Leaflet interactive location mapping, Stripe payment integration for premium memberships, and real-time messaging via STOMP WebSockets.",
    role: "MERN Stack Developer at Codelamda Technology",
    architecture: {
      frontend: "Next.js 15, React 19, TypeScript, Tailwind CSS, Ant Design, Radix UI, Redux Toolkit.",
      backend: "Node.js REST backend integrated with WebSockets via STOMP protocol for real-time channels.",
      database: "MongoDB with relational population for users, organizations, posts, and messaging logs.",
      authentication: "Google OAuth 2.0 and JWT authorization supporting RBAC for Individuals, Companies, and Admins.",
    },
    features: [
      "Real-time team chat and channel messaging using STOMP WebSocket protocol.",
      "Rich text article authoring and documentation with TipTap Editor and Markdown export.",
      "Integrated Stripe checkout flow for premium organization memberships and paid events.",
      "Role-Based Access Control (RBAC) separating Individual, Corporate, and Administrative roles.",
      "Interactive map location tagging for offline and online event listings using Leaflet.",
    ],
    challenges: [
      "Designing complex multi-role state logic across multi-step user onboarding and organization creation flows.",
      "Maintaining WebSocket connection stability and automatic reconnect logic over STOMP protocol.",
      "Optimizing heavy rich-text editor components to lazy-load without impeding initial page render time.",
    ],
    performance: "Reduced bundle size by 35% through dynamic imports of heavy modules (TipTap, Leaflet, Ant Design).",
    deployment: "Deployed and hosted on production cloud infrastructure with continuous deployment integration.",
    githubUrl: "https://github.com/rajm1711",
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
  },
  {
    slug: "inbuildify",
    id: "inbuildify",
    title: "Inbuildify",
    fullTitle: "Inbuildify — Real Estate & Construction CRM Platform",
    subtitle: "Enterprise real estate lead management & scheduling system",
    tagline: "Comprehensive Real Estate & Construction CRM",
    category: "Office Projects",
    type: "office",
    status: "Office Production",
    description:
      "Enterprise-grade CRM solution architected for real estate and construction firms, providing complex lead tracking, inventory grids, automated quotation contracts, and FullCalendar site dispatch.",
    overview:
      "Inbuildify is an enterprise CRM platform built to streamline operations for real estate developers and construction managers. It manages high-volume property lead pipelines, inventory grids, payment milestones, and dispatch schedules.",
    problem:
      "Real estate firms faced data bottlenecks managing thousands of property inquiries, inventory availability matrices, and site visit schedules across unstandardized spreadsheets.",
    solution:
      "Developed a Next.js 14 management platform leveraging AG Grid Enterprise for high-performance data tables, Redux Persist for state persistence across complex workflows, ApexCharts for sales analytics, and FullCalendar for site visit dispatching.",
    role: "MERN Stack Developer at Codelamda Technology",
    architecture: {
      frontend: "Next.js 14, React 18, TypeScript, AG Grid Enterprise, ApexCharts, FullCalendar, Redux Toolkit, Redux Persist.",
      backend: "Node.js REST API with structured endpoints for lead pipeline transitions and inventory locks.",
      database: "MongoDB storing lead pipelines, property inventory units, contract details, and schedule entries.",
      authentication: "JWT role-based authentication protecting sales executive, property manager, and admin routes.",
    },
    features: [
      "AG Grid Enterprise tables handling thousands of property leads with instant filtering and sorting.",
      "Interactive analytics dashboards built with ApexCharts for revenue trends and lead conversions.",
      "FullCalendar integration for site visit dispatching and agent calendar synchronization.",
      "Automated quotation generator generating contract breakdowns for buyers.",
      "Redux Persist workflow caching ensuring no lost form inputs during complex multi-step lead entries.",
    ],
    challenges: [
      "Configuring AG Grid Enterprise for smooth rendering and inline editing across large datasets.",
      "Syncing multi-user edits to property inventory units without concurrency conflicts.",
      "Structuring clean Redux slices for complex nested CRM lead state.",
    ],
    performance: "Leveraged server-side grid filtering and pagination to maintain fast 60fps interaction on 10,000+ lead rows.",
    deployment: "Production enterprise deployment with role-based routing and secure environment configuration.",
    githubUrl: "https://github.com/rajm1711",
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
  },
  {
    slug: "swan-ecommerce",
    id: "swan-ecom",
    title: "Swan E-Commerce",
    fullTitle: "Swan E-Commerce — Next.js Full-Stack E-Commerce Storefront",
    subtitle: "Modern full-stack e-commerce web storefront",
    tagline: "Modern E-Commerce Storefront",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "Full-stack e-commerce web application featuring dynamic catalog browsing, optimized product gallery, shopping cart state management, responsive UI, and backend service integration.",
    overview:
      "Swan E-Commerce is a full-stack online shopping platform designed to provide a fast, responsive mobile-first shopping experience with seamless catalog filtering and dynamic cart management.",
    problem:
      "Traditional e-commerce templates often load bloated JavaScript bundles resulting in slow page loads, poor mobile performance, and dropped customer conversion rates.",
    solution:
      "Built a Next.js application utilizing Server Side Rendering (SSR) for product pages, client-side cart state sync, optimized Next.js image loading, and responsive Tailwind CSS styling.",
    role: "Full-Stack Developer",
    architecture: {
      frontend: "Next.js, React, TypeScript, Tailwind CSS, Client State Management.",
      backend: "RESTful API services for product catalog queries, inventory status, and cart processing.",
      database: "MongoDB collection structure for product categories, variants, and customer cart sessions.",
      authentication: "Session-based and JWT token handling for registered customer accounts.",
    },
    features: [
      "Dynamic catalog browsing with multi-attribute filtering (category, price, popularity).",
      "Interactive shopping cart with instantaneous item count and total updates.",
      "Mobile-optimized image gallery slider and responsive product view.",
      "Clean RESTful API integration for product catalog retrieval.",
    ],
    challenges: [
      "Optimizing dynamic product image loads for mobile networks using Next.js Image caching.",
      "Managing persistent cart state between anonymous browser sessions and authenticated user accounts.",
    ],
    performance: "Achieved fast PageSpeed score via server-rendered product catalog pages and optimized images.",
    deployment: "Deployed live on Vercel Edge Network with automatic continuous integration.",
    liveUrl: "https://swan-ecom-one.vercel.app",
    githubUrl: "https://github.com/rajm1711/swan-ecom",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "State Management",
    ],
  },
  {
    slug: "ecombackend",
    id: "ecombackend",
    title: "E-Commerce API Service",
    fullTitle: "E-Commerce API Service — Production Dockerized Node.js REST API",
    subtitle: "Containerized Node.js & Express RESTful API backend",
    tagline: "Production Dockerized Node.js Web Service",
    category: "Backend & APIs",
    type: "render",
    status: "Render Live",
    description:
      "Production-grade Node.js & Express RESTful API backend hosted on Render as a containerized Docker web service. Powers e-commerce operations including JWT authentication, product CRUD, cart state, order processing, and MongoDB integration.",
    overview:
      "A containerized backend API service built with Node.js and Express to supply scalable REST endpoints for e-commerce platforms, including secure token authentication, product management, cart sync, and order workflows.",
    problem:
      "E-commerce frontends require a reliable, containerized REST API backend with consistent deployment environments, robust security middleware, and structured database queries.",
    solution:
      "Containerized a Node.js Express service using Docker, created modular route controllers for auth and product resources, configured JWT middleware with refresh tokens, and deployed as a live Docker web service on Render.",
    role: "Backend & Systems Developer",
    architecture: {
      frontend: "Consumable by any frontend application via structured REST JSON responses.",
      backend: "Node.js, Express.js, Docker Containerization, CORS middleware, Express Validator.",
      database: "MongoDB Atlas with Mongoose schema modeling for users, products, carts, and order history.",
      authentication: "JWT (JSON Web Token) authentication with role authorization middleware.",
    },
    features: [
      "Docker containerized setup ensuring identical development and production runtime.",
      "Secure JWT user signup, login, password encryption (bcrypt), and authorization.",
      "Full CRUD operations for product inventory, catalog categories, and cart state.",
      "Input validation and sanitization middleware preventing injection vulnerabilities.",
      "Live deployment on Render Cloud Platform with automated health checks.",
    ],
    challenges: [
      "Configuring Docker container builds to optimize image size and startup latency on Render.",
      "Designing clean Mongoose schemas with indexes for fast query execution.",
      "Implementing structured error handling middleware that returns consistent JSON error payloads.",
    ],
    performance: "Lightweight container footprint with fast endpoint responses under 60ms for database queries.",
    deployment: "Hosted as a live Docker Web Service on Render Cloud Platform.",
    liveUrl: "https://ecombackend-6zc3.onrender.com",
    githubUrl: "https://github.com/rajm1711/ecombackend",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "JWT Auth",
      "RESTful API",
      "Render Cloud",
    ],
  },
  {
    slug: "rhodeskin-clone",
    id: "rhodeskin-clone",
    title: "Rhode Skin Clone",
    fullTitle: "Rhode Skin Clone — Luxury Beauty E-Commerce Storefront",
    subtitle: "High-end luxury e-commerce storefront clone",
    tagline: "Luxury Beauty E-Commerce Storefront",
    category: "Vercel Deployments",
    type: "vercel",
    status: "Vercel Live",
    description:
      "High-end e-commerce store clone inspired by Rhode Skin, featuring sleek product showcase, fluid shopping bag drawer, smooth image sliders, and luxury branding UI.",
    overview:
      "Rhode Skin Clone is a high-craft frontend e-commerce showcase built to demonstrate premium visual typography, fluid micro-interactions, and slide-out shopping cart drawer workflows.",
    problem:
      "Luxury direct-to-consumer (DTC) brands demand ultra-refined typography, smooth layout transitions, and instant visual feedback without layout shift.",
    solution:
      "Crafted a Next.js storefront using custom Google Fonts, Framer Motion slide drawers, and Tailwind CSS responsive layouts.",
    role: "Frontend Developer & UI Specialist",
    architecture: {
      frontend: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion.",
      backend: "Client-side state management for cart drawers and product variants.",
      database: "Static product JSON matrix optimized for client hydration.",
      authentication: "Client guest checkout workflows.",
    },
    features: [
      "Slide-out shopping bag drawer with animated quantity controls.",
      "Interactive product gallery slider with mobile touch swipe support.",
      "Minimalist dark/light layout hierarchy inspired by modern DTC beauty brands.",
    ],
    challenges: [
      "Achieving fluid Framer Motion drawer transitions without triggering layout shifts.",
      "Ensuring crisp font display and responsive layout spacing on mobile screens.",
    ],
    performance: "Sub-1 second initial contentful paint (ICP) on Vercel Edge Network.",
    deployment: "Deployed live on Vercel.",
    liveUrl: "https://rhodeskin-clone.vercel.app",
    githubUrl: "https://github.com/rajm1711/rhodeskin-clone",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shopping Bag UI",
    ],
  },
];
