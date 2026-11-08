// Site-wide identity and settings. Every page, the structured data, the
// sitemap and llms.txt read from here, so change a fact once and rebuild.

export const site = {
  // Production URL with no trailing slash. Change this if you move to a custom domain.
  url: "https://ebenezerojeba.vercel.app",
  name: "Ebenezer Ojeba",
  locale: "en_NG",
  lang: "en",
  themeColor: "#1b1916",
  // Date the content was last reviewed. Used for sitemap <lastmod>.
  updated: "2026-11-08",
  // Paste the content value of Google's "HTML tag" verification method here,
  // e.g. "abc123...", then rebuild. Leave empty to omit the tag.
  googleSiteVerification: "",
  // Bing Webmaster Tools "msvalidate.01" value (optional).
  bingSiteVerification: "",
  defaultOgImage: "/assets/img/og-default.jpg",
};

export const person = {
  name: "Ebenezer Ojeba",
  givenName: "Ebenezer",
  familyName: "Ojeba",
  jobTitle: "Full-Stack Software Developer",
  location: { locality: "Lagos", country: "NG", countryName: "Nigeria" },
  image: "/assets/img/ebenezer-ojeba-portrait-800.jpg",
  alumniOf: "University of Lagos",
  cv: "/Ebenezer-Ojeba.pdf",
  summary:
    "Ebenezer Ojeba is a full-stack software developer based in Lagos, Nigeria, and the founder of OJ Tech Solution. He builds full-stack web applications, SaaS platforms, AI-powered applications, business management systems and e-commerce platforms with React, Next.js, Node.js, TypeScript, MongoDB and PostgreSQL.",
  knowsAbout: [
    "Full-stack web development",
    "SaaS development",
    "AI-powered applications",
    "Business management systems",
    "E-commerce development",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "REST APIs",
    "Paystack payment integration",
    "Web accessibility",
    "Technical SEO",
  ],
  // Optional public email. Leave empty to keep the address off the site;
  // the contact forms deliver to CONTACT_TO_EMAIL (a Vercel env var) instead.
  email: "",
  whatsapp: "https://wa.link/sg3frs",
};

// Profiles that belong to Ebenezer. These feed schema.org "sameAs", which is
// how search engines connect this site to his other profiles.
export const profiles = [
  { label: "GitHub", url: "https://github.com/ebenezerojeba", icon: "github", sameAs: true },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ebenezer-ojeba-12b3b2281", icon: "linkedin", sameAs: true },
  { label: "X (Twitter)", url: "https://x.com/Ebeneze92153397", icon: "x", sameAs: true },
  { label: "WhatsApp", url: "https://wa.link/sg3frs", icon: "whatsapp", sameAs: false },
  { label: "Instagram", url: "https://www.instagram.com/p/CNxIvTmjQ40/", icon: "instagram", sameAs: false },
];

export const organization = {
  name: "OJ Tech Solution",
  description:
    "OJ Tech Solution is the software development business of Ebenezer Ojeba. It designs and builds full-stack web applications, SaaS platforms, AI-powered applications, business management systems, e-commerce platforms and custom software.",
  logo: "/assets/img/logo-512.png",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "AEO Solicitors",
    place: "Yaba, Lagos",
    dates: "February 2024 – Present",
    points: [
      "Build responsive React interfaces for legal and client-facing applications.",
      "Develop backend services with Node.js and Express, with MongoDB for data storage.",
      "Work with designers and other teams to deliver applications tailored to the firm's needs.",
    ],
  },
  {
    role: "Full-Stack Developer (Contract)",
    org: "SkillLink",
    place: "Remote",
    dates: "November 2024",
    points: [
      "Designed and developed SkillLink, a platform that connects clients with skilled artisans, as the sole developer.",
      "Built the application on the MERN stack with RESTful APIs for user interactions, data management and security.",
    ],
  },
  {
    role: "Frontend Developer (Freelance)",
    org: "Upwork",
    place: "Remote",
    dates: "June 2023 – January 2024",
    points: [
      "Delivered responsive, user-friendly interfaces and supporting backend work for clients across several industries.",
    ],
  },
  {
    role: "Freelance Software Developer",
    org: "Fiverr",
    place: "Remote",
    dates: "November 2022 – May 2023",
    points: [
      "Designed and built responsive websites and Node.js / MongoDB backends to client requirements.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    org: "Ajayi Technical Company Ltd",
    place: "Gbagada, Lagos",
    dates: "March 2022 – October 2022",
    points: [
      "Contributed to building and maintaining web applications with a focus on responsive design.",
      "Worked with senior developers to debug and optimise code.",
    ],
  },
];

export const education = [
  { title: "B.A. Philosophy", org: "University of Lagos" },
  { title: "Meta Front-End Developer Professional Certificate", org: "Meta (Coursera)" },
  { title: "Programming with JavaScript", org: "Coursera" },
  { title: "JavaScript Mastery", org: "Udemy" },
];

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Server-Sent Events", "Socket.io", "Zod validation"] },
  { group: "Data", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Firebase / Firestore"] },
  { group: "Integrations", items: ["Paystack", "OpenAI API", "Cloudinary", "Resend / SMTP email", "WhatsApp Cloud API", "Calendly"] },
  { group: "Quality & delivery", items: ["Vitest", "Playwright", "Accessibility testing (axe)", "Git & GitHub", "Vercel", "Render"] },
];
