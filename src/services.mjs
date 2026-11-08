// Software development services. Each entry becomes /services/<slug>.
// "projects" lists case-study slugs from projects.mjs that show the service in practice.

export const services = [
  {
    slug: "web-application-development",
    name: "Full-Stack Web Application Development",
    short: "Web Applications",
    icon: "layers",
    title: "Full-Stack Web Application Development | Ebenezer Ojeba",
    description:
      "Ebenezer Ojeba builds full-stack web applications with React, Next.js, Node.js and MongoDB or PostgreSQL: secure accounts, dashboards, APIs and payments.",
    card: "Production web apps with accounts, dashboards, APIs, payments and an admin area, built end to end.",
    intro: [
      "A web application is more than a set of pages. It has users who sign in, data that has to stay correct, roles that see different things, and integrations that move money or send messages. I design and build the whole thing: the database, the API, the interface and the deployment.",
      "Most of my work uses React or Next.js on the frontend with Node.js, Express and MongoDB or PostgreSQL behind it. I choose the stack per project rather than forcing one shape onto every problem.",
    ],
    forWho: [
      "Founders who need a working product, not a prototype that has to be rebuilt.",
      "Businesses replacing spreadsheets, WhatsApp threads or paper forms with a proper system.",
      "Teams that need an extra full-stack developer to own a feature from database to UI.",
    ],
    includes: [
      "Requirements and data modelling before code, so the structure fits how the business works.",
      "Authentication, sessions and role-based access (for example customer, staff and admin).",
      "REST APIs with server-side validation of every input.",
      "Responsive, accessible interfaces that work on low-end phones and slow connections.",
      "Payment integration with Paystack, file uploads, email and notification flows.",
      "Admin dashboards, reports and CSV / Excel exports.",
      "Deployment to Vercel, Render or your own infrastructure, with environment and secrets set up properly.",
      "Automated tests on the parts where a bug would cost money or trust.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Paystack"],
    projects: ["homebase", "apc-lagos-digital-management-system", "skillink", "getconfident"],
    faqs: [
      {
        q: "Which technologies do you build web applications with?",
        a: "Usually React or Next.js with TypeScript on the frontend, and Node.js with Express or Next.js route handlers on the backend. For data I use MongoDB or PostgreSQL depending on how relational the data is. I'll explain the choice for your project before we start.",
      },
      {
        q: "Can you work on an existing codebase?",
        a: "Yes. I start by reading the code and running it locally, then agree with you on what to fix, extend or leave alone. I don't recommend a rewrite unless the existing code can't support what you need.",
      },
      {
        q: "How do you price a web application?",
        a: "After a short discovery conversation I send a written scope with the features, milestones and a fixed or estimated price. Price depends on scope, so I don't quote before understanding the project.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code lives in your repository and the deployment runs on accounts you control, unless we agree otherwise in writing.",
      },
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Platform Development",
    short: "SaaS Platforms",
    icon: "cloud",
    title: "SaaS Platform Development | Ebenezer Ojeba",
    description:
      "SaaS development by Ebenezer Ojeba: multi-user platforms with onboarding, subscriptions, dashboards, notifications and secure data, built with Next.js and Node.js.",
    card: "Multi-user software products with onboarding, user dashboards, notifications and per-account data security.",
    intro: [
      "A SaaS product has to work for many customers at once while keeping each customer's data separate. It needs onboarding that explains the product, an account area people return to, and background jobs that keep running when no one is watching.",
      "I've built SaaS-style products such as GetConfident, an AI speaking coach, and Homebase, a rental platform where landlords and tenants share one record. Both were built with security and data correctness as requirements from the first commit.",
    ],
    forWho: [
      "Founders validating a subscription or marketplace idea with real users.",
      "Businesses turning an internal tool into a product other companies can use.",
      "Products that need a solid MVP that can grow without being rewritten.",
    ],
    includes: [
      "Product scoping: the smallest version that tests the idea with real users.",
      "Sign-up, email verification, password reset and secure session handling.",
      "Per-account data isolation, so a user can never read another account's records.",
      "Onboarding flows, account settings and privacy self-service.",
      "Billing and payment flows with Paystack, including webhooks.",
      "Notifications by email, and where needed SMS or WhatsApp.",
      "Scheduled jobs (cron) for reminders, digests and clean-up.",
      "Analytics-ready events and an admin area to support customers.",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "MongoDB", "Zod", "Paystack", "Vercel"],
    projects: ["getconfident", "homebase"],
    faqs: [
      {
        q: "Can you build a SaaS MVP?",
        a: "Yes. I help you decide which features the first version needs, build those properly, and leave the rest for when real users tell you what matters.",
      },
      {
        q: "How do you keep each customer's data separate?",
        a: "Every request resolves the user from a server-side session, and every query is scoped to that user or organisation. A request for someone else's record returns 'not found'. I test these rules directly.",
      },
      {
        q: "Can you integrate subscriptions or payments?",
        a: "Yes. I've integrated Paystack for online payments, including webhook handling so payment status stays correct even if the user closes the browser.",
      },
    ],
  },
  {
    slug: "ai-application-development",
    name: "AI-Powered Application Development",
    short: "AI Applications",
    icon: "spark",
    title: "AI-Powered Application Development | Ebenezer Ojeba",
    description:
      "Ebenezer Ojeba builds AI-powered applications that use large language models for coaching, analysis and automation, with validated output and clear limits.",
    card: "Products that use large language models for analysis, feedback and automation, with output you can trust.",
    intro: [
      "Adding AI to a product is easy to demo and hard to make dependable. Model output can be malformed, wrong or confidently invented. I build AI features that treat model output as untrusted input: it is parsed, validated against a schema, and checked against measurements the application can calculate itself.",
      "GetConfident, an AI impromptu speaking coach, is an example. It transcribes a recorded answer, asks a model for structured coaching, and overrides pace, pause and filler-word scores with deterministic measurements so the feedback isn't left to guesswork.",
    ],
    forWho: [
      "Products that want AI feedback, summaries or classification as a core feature.",
      "Businesses automating document, text or support workflows.",
      "Teams that tried an AI prototype and need it production-ready.",
    ],
    includes: [
      "Choosing where AI helps and where ordinary code is more reliable.",
      "Integration with the OpenAI API or other providers, using structured (JSON schema) output.",
      "Validation of every model response before it reaches users or the database.",
      "Speech-to-text and media upload pipelines where the product needs them.",
      "Fallback behaviour when the model is slow, unavailable or returns something unusable.",
      "Rate limiting and cost controls on AI endpoints.",
      "A mock provider for development and tests, so the app works without spending on API calls.",
    ],
    stack: ["OpenAI API", "Next.js", "TypeScript", "Zod", "PostgreSQL", "Prisma", "Vitest", "Playwright"],
    projects: ["getconfident"],
    faqs: [
      {
        q: "Which AI models do you work with?",
        a: "I've built production features on the OpenAI API. The integration layer is written so the provider can be swapped, which matters as prices and model quality change.",
      },
      {
        q: "How do you stop the AI from making things up?",
        a: "You can't stop a model from being wrong, but you can stop wrong output from reaching users unchecked. I validate responses against a strict schema, compute anything measurable in code, and show 'unavailable' rather than inventing a value.",
      },
      {
        q: "Will AI features be expensive to run?",
        a: "It depends on usage and model choice. I add rate limits and keep prompts lean, and I can estimate cost per user once we know the expected volume.",
      },
    ],
  },
  {
    slug: "business-management-systems",
    name: "Business Management System Development",
    short: "Business Systems",
    icon: "grid",
    title: "Business Management System Development | Ebenezer Ojeba",
    description:
      "Custom business management systems by Ebenezer Ojeba: registrations, bookings, approvals, records, staff dashboards, audit logs and Excel/CSV reports.",
    card: "Registration, booking, approval and record-keeping systems with role-based dashboards and reports.",
    intro: [
      "Many organisations run on spreadsheets, paper forms and group chats until the volume makes mistakes expensive. A business management system gives every record one home, gives each person the view they need, and keeps a history of who changed what.",
      "I've built registration and approval systems with document uploads and audit logs, rent ledgers with receipts and reversals, and admin panels for orders, bookings and inventory.",
    ],
    forWho: [
      "Organisations collecting registrations, applications or documents at scale.",
      "Businesses managing bookings, rentals, orders or members.",
      "Teams that need approval workflows and reliable reports.",
    ],
    includes: [
      "Mapping your current process, then designing records and statuses around it.",
      "Multi-step, mobile-first forms with document and photo uploads.",
      "Role-based dashboards for staff, supervisors and administrators.",
      "Approval workflows with reasons, notes and email notifications.",
      "Search and filters across large record sets.",
      "Audit logs and masking of sensitive fields such as identity and bank details.",
      "Reports and exports to Excel and CSV.",
      "Data protection features, such as handling data requests under Nigeria's data protection rules.",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Zod", "JWT / secure sessions", "Excel & CSV export"],
    projects: ["apc-lagos-digital-management-system", "homebase", "paragon-hub"],
    faqs: [
      {
        q: "Can you replace our spreadsheet-based process?",
        a: "Yes. I start by learning how the spreadsheet is actually used, including the workarounds, then design a system that keeps what works and removes the manual steps.",
      },
      {
        q: "Can different staff see different data?",
        a: "Yes. Access is role-based and enforced on the server, so a user only receives the records their role allows. Sensitive fields can be masked and every reveal can be logged.",
      },
      {
        q: "Can we export our data?",
        a: "Yes. I usually include Excel and CSV exports for reports, and your data stays in a database you control.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Website & Platform Development",
    short: "E-commerce",
    icon: "cart",
    title: "E-commerce Website & Platform Development | Ebenezer Ojeba",
    description:
      "Custom e-commerce development by Ebenezer Ojeba: online stores with product catalogues, carts, Paystack checkout, order management and admin dashboards.",
    card: "Online stores with catalogues, carts, Paystack checkout and an admin panel for products and orders.",
    intro: [
      "An online store has two audiences: shoppers, who need a fast and trustworthy checkout, and the store team, who need to manage products, stock and orders without calling a developer.",
      "I build custom e-commerce platforms with a shopper-facing storefront and a separate admin panel. Paragon Hub, a men's clothing store, and Palatial, a food delivery and event platform, are examples.",
    ],
    forWho: [
      "Brands that have outgrown selling through social media DMs.",
      "Businesses that need custom ordering, delivery or booking rules a template store can't handle.",
      "Stores that want to own their platform and customer data.",
    ],
    includes: [
      "Product catalogue with categories, variants, images and search.",
      "Cart and checkout with Paystack, including payment verification on the server.",
      "Order tracking and customer notifications.",
      "Admin panel for products, stock, orders and customers.",
      "Delivery options and order status workflows.",
      "Mobile-first pages optimised for speed and product search visibility.",
      "Image hosting and optimisation, for example with Cloudinary.",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Paystack", "Cloudinary", "Tailwind CSS"],
    projects: ["paragon-hub", "palatial"],
    faqs: [
      {
        q: "Should I use Shopify or a custom store?",
        a: "If a hosted platform does what you need, it's usually cheaper to start there and I'll say so. A custom build makes sense when you need ordering, pricing, delivery or booking rules those platforms can't support, or you want full control of the code and data.",
      },
      {
        q: "Which payment providers do you integrate?",
        a: "I've integrated Paystack for Nigerian payments. Other providers with a documented API can be integrated too.",
      },
      {
        q: "Will my team be able to manage products themselves?",
        a: "Yes. Every store I build includes an admin panel for products, stock and orders.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    short: "Custom Software",
    icon: "code",
    title: "Custom Software Development | Ebenezer Ojeba",
    description:
      "Custom software development by Ebenezer Ojeba and OJ Tech Solution: websites, platforms, portals and internal tools designed around how your organisation works.",
    card: "Websites, portals, platforms and internal tools designed around how your organisation actually works.",
    intro: [
      "Some projects don't fit a category. An information platform for a political party, a marketplace connecting clients with artisans, an official website with its own content dashboard: each needed software shaped around one organisation's way of working.",
      "Custom software is my general practice under OJ Tech Solution. I start from the problem, propose the simplest system that solves it, and build it so that you or another developer can maintain it later.",
    ],
    forWho: [
      "Organisations with a process no off-the-shelf product handles well.",
      "Public-facing institutions that need an official website with content management.",
      "Anyone with an idea who wants an honest view of what it will take to build.",
    ],
    includes: [
      "Discovery: understanding the people, process and constraints.",
      "A written proposal with scope, milestones and trade-offs.",
      "UX and interface design, or implementation of your existing designs.",
      "Full-stack development, testing and deployment.",
      "Technical SEO foundations: metadata, sitemaps, structured data and fast pages.",
      "Documentation and handover, so the system isn't tied to one developer.",
      "Ongoing support and improvements when you need them.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Three.js", "Tailwind CSS"],
    projects: ["apc-lagos", "hon-cornelius-ojelabi-website", "skillink"],
    faqs: [
      {
        q: "What does a project with you look like?",
        a: "A discovery conversation, a written proposal, then development in milestones with working software you can review at each step. You can see the full process on the services page.",
      },
      {
        q: "Do you work with clients outside Nigeria?",
        a: "Yes. I'm based in Lagos and work remotely with clients in other locations, communicating in writing and by video call.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We can agree a support arrangement for fixes, updates and new features after launch.",
      },
    ],
  },
];

// How a project runs. Shown on /services and on each service page.
export const process = [
  { title: "Discover", text: "A conversation about your goals, users and constraints. I ask questions until I understand the problem, not just the feature list." },
  { title: "Propose", text: "A written scope with features, milestones, technology choices and price. You know what you're getting before work starts." },
  { title: "Build", text: "Development in milestones, with a working version you can click through and give feedback on at each step." },
  { title: "Launch", text: "Testing, deployment, domain and analytics setup, and search engine foundations such as metadata and sitemaps." },
  { title: "Support", text: "Fixes, improvements and new features after launch, under an arrangement that suits you." },
];
