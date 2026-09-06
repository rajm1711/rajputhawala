export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  content: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: "mern-vs-nextjs-stack-choice",
    title: "MERN vs Next.js: Which Stack Should You Choose for a Modern Web Application?",
    excerpt:
      "A comprehensive technical comparison between traditional Single Page Application (SPA) MERN architecture and Next.js full-stack App Router architecture.",
    category: "Architecture & Next.js",
    readTime: "7 min read",
    publishDate: "August 2025",
    author: "Raj Puthawala",
    tags: ["MERN", "Next.js", "React", "Node.js", "Architecture"],
    content: `
When building web applications today, choosing between a traditional MERN stack (MongoDB, Express, React, Node.js) and a modern Next.js architecture is one of the most critical decisions a engineering team faces.

### Understanding Traditional MERN Architecture
In a standard MERN application, React operates strictly on the client side as a Single Page Application (SPA). The client fetches an initial HTML document with an empty \`<div id="root"></div>\` shell, downloads JavaScript bundles, hydrates the DOM, and executes client-side API requests to an Express.js server connected to MongoDB.

#### Advantages of Traditional MERN:
- Clear separation between client and server codebases.
- Dynamic interactive dashboards where SEO indexing is not a priority.
- Simple cross-origin deployment workflows (e.g., React on Vercel, Express API on Docker/Render).

#### Drawbacks:
- Poor initial PageSpeed and Core Web Vitals due to render-blocking JavaScript bundles.
- Poor Search Engine Optimization (SEO) because crawlers see an empty root container.
- Multiple network roundtrips required before data renders on screen.

---

### The Next.js Advantage
Next.js unifies client and server capabilities into a single cohesive framework. With the introduction of the App Router in Next.js 13+ (and refined in Next.js 14 & 15), React Server Components (RSC) render on the server by default.

#### Advantages of Next.js:
- **Server Side Rendering (SSR) & Static Site Generation (SSG)**: Crawlers receive fully populated HTML documents, delivering optimal SEO and Answer Engine (AEO) visibility.
- **Zero-Bundle-Size Server Components**: Dependencies used solely for data fetching on the server do not increase client JavaScript payload sizes.
- **Built-in Route Handlers**: API routes are co-located with page components without setting up a separate Express server for small-to-medium backends.

---

### Key Decision Matrix

| Requirement | Traditional MERN (React SPA) | Next.js App Router |
| :--- | :--- | :--- |
| **SEO & AEO Visibility** | Requires SSR workarounds | Built-in native support |
| **Initial Page Load Speed** | Slower (client bundle execution) | Fast (pre-rendered HTML) |
| **State Complexity** | Single client bundle | Server vs Client component balance |
| **Backend Isolation** | Fully decoupled Express server | Co-located Route Handlers or external API |

### My Recommended Approach
For public-facing applications, marketing portals, e-commerce storefronts, and SaaS applications targeting search indexing, **Next.js** is unequivocally the superior choice.

For internal enterprise portals, complex data grids (e.g. AG Grid management boards), or apps requiring standalone microservices, pairing a **Next.js frontend with a dedicated Node.js/Express REST backend** provides the ideal balance of performance, security, and architectural modularity.
`,
  },
  {
    slug: "secure-jwt-authentication-refresh-tokens",
    title: "Building Secure JWT Authentication with Refresh Tokens in Node.js",
    excerpt:
      "Learn how to implement a production-grade authentication pipeline using short-lived Access Tokens, HTTP-Only Refresh Cookies, and Role-Based Access Control (RBAC).",
    category: "Backend & Security",
    readTime: "8 min read",
    publishDate: "July 2025",
    author: "Raj Puthawala",
    tags: ["Node.js", "Express", "JWT", "Security", "Authentication"],
    content: `
Security is a foundational pillar of production web applications. A common mistake developers make is storing JSON Web Tokens (JWTs) in \`localStorage\` or \`sessionStorage\`. This exposes the application to Cross-Site Scripting (XSS) token theft.

### The Two-Token Authentication Pattern

To balance security and user experience, production systems utilize a two-token architecture:

1. **Access Token (Short-lived)**: Valid for 15 minutes. Transmitted in the HTTP \`Authorization: Bearer <token>\` header for rapid API verification.
2. **Refresh Token (Long-lived)**: Valid for 7–30 days. Stored inside a secure, \`httpOnly\`, \`SameSite=Strict\` cookie.

---

### Step 1: Generating Tokens in Express

\`\`\`typescript
import jwt from "jsonwebtoken";

export const generateTokens = (userId: string, role: string) => {
  const accessToken = jwt.sign(
    { userId, role },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};
\`\`\`

---

### Step 2: Setting HTTP-Only Refresh Cookies

When a user logs in, send the short-lived access token in the JSON response body while attaching the refresh token as a secure cookie:

\`\`\`typescript
res.cookie("refreshToken", refreshToken, {
  httpOnly: true, // Prevents client-side JS read access
  secure: process.env.NODE_ENV === "production", // Transmit over HTTPS only
  sameSite: "strict", // Prevents CSRF attacks
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});

res.status(200).json({
  success: true,
  accessToken,
  user: { id: user._id, email: user.email, role: user.role }
});
\`\`\`

---

### Step 3: Axios Silent Refresh Interceptor on Frontend

On the frontend, configure an Axios response interceptor to intercept \`401 Unauthorized\` errors and silently request a fresh access token using the \`/api/auth/refresh\` endpoint:

\`\`\`typescript
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post("/api/auth/refresh", {}, { withCredentials: true });
        setAccessToken(data.accessToken);
        originalRequest.headers["Authorization"] = \`Bearer \${data.accessToken}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Token expired or invalid -> redirect to login
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
\`\`\`

### Summary
By isolating long-lived credentials inside HTTP-only browser cookies and keeping short-lived access tokens strictly in memory, you eliminate XSS token theft vectors while preserving seamless user session persistence.
`,
  },
  {
    slug: "frontend-architecture-nextjs-15",
    title: "How I Approach Frontend Architecture in Next.js 15 Applications",
    excerpt:
      "A structured guide to component modularity, state division, server vs client component boundaries, and performance optimization in Next.js.",
    category: "Frontend Architecture",
    readTime: "6 min read",
    publishDate: "June 2025",
    author: "Raj Puthawala",
    tags: ["Next.js 15", "React 19", "Architecture", "TypeScript", "Performance"],
    content: `
Building clean, maintainable frontend applications requires clear design principles. In Next.js 15, the boundary between server components and client components dictates application velocity, bundle size, and runtime stability.

### Core Architectural Principles

#### 1. Server Components First
Default to Server Components (\`page.tsx\`, layout containers) for data fetching, SEO meta generation, and static markup. Only add the \`"use client"\` directive at the lowest possible sub-tree component level where user interaction occurs (forms, modals, interactive charts).

#### 2. Separation of State Management
- **Local Form State**: Managed via \`React Hook Form\` with Zod validation.
- **UI State (Modals, Sliders, Active Filters)**: Managed via light \`Zustand\` stores or local \`useState\`.
- **Global Server Cache**: Managed via Next.js \`fetch\` caching or React Query / Redux Toolkit Query.

#### 3. Structured Directory Blueprint

\`\`\`text
src/
├── app/                  # File-system router routes
│   ├── (auth)/           # Route group for auth pages
│   ├── projects/         # Case study pages
│   ├── layout.tsx        # Root layout with fonts & providers
│   └── page.tsx          # Homepage
├── components/           # UI components
│   ├── ui/               # Primitive components (Button, Input)
│   ├── modules/          # Feature-specific composite cards
│   └── shared/           # Header, Footer, Navbar
├── data/                 # Static datasets & content definitions
├── lib/                  # Utility functions & API clients
└── types/                # Shared TypeScript interface definitions
\`\`\`

### Conclusion
By keeping server components at the root of page hierarchies and pushing client interactivity down to isolated component leaf nodes, applications remain lightning fast, modular, and effortless to test.
`,
  },
];
