export type CaseStudy = {
  slug: string;
  company: string;
  tag: string;
  category: string;
  title: string;
  summary: string;
  hero: { headline: string; sub: string };
  stats: { k: string; v: string }[];
  stack: string[];
  services: { name: string; description: string; deliverables: string[] }[];
  outcomes: string[];
  timeline: string;
  role: string;
  year: string;
  tone: string;
  industry: string;
  clientType: string;
  focusArea: string;
  domain: string;
  logoUrl?: string;
  challenge: string;
  solutionsIntro: string;
  solutions: { title: string; description: string }[];
  tools: { name: string; icon: string }[];
  feedback?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-agent-command-system",
    company: "Axon",
    tag: "Agentic AI · Automation",
    category: "Agentic AI",
    title: "replaced their leadership layer with 5 autonomous AI agents",
    summary:
      "Five specialised agents — ARIA, Tech Lead, Ops, Client, and Calendar — run on CrewAI + Claude Sonnet, handling standups, client sales, scheduling, and PR reviews autonomously for $30–55/month.",
    hero: {
      headline: "AI Agent Command System — five agents, zero repetition",
      sub: "An autonomous operating layer for founders and CTOs. Five agents handle team management, client sales, internal ops, scheduling, and code reviews — with a human only in the approval loop.",
    },
    stats: [
      { k: "5", v: "Specialised agents in production" },
      { k: "7 wks", v: "From zero to fully operational" },
      { k: "$30–55", v: "Total monthly run cost" },
    ],
    stack: ["CrewAI", "Claude Sonnet", "ChromaDB", "LlamaIndex", "n8n", "FastAPI", "Supabase", "WhatsApp API", "Slack API"],
    services: [
      {
        name: "ARIA — Command Center",
        description: "Orchestrates all agents, delivers morning briefings, manages the approval queue, and surfaces exactly what needs your attention right now.",
        deliverables: ["Morning briefing engine (8:30 AM)", "Approval queue with Approve / Edit / Reject", "Agent delegation layer"],
      },
      {
        name: "Tech Lead Agent",
        description: "Your PM, team lead, and CTO proxy. Handles interns, runs daily standups, generates architecture docs, and reviews PRs via GitHub webhook.",
        deliverables: ["Standup automation (10 AM)", "Architecture doc generator", "PR review via Claude Sonnet"],
      },
      {
        name: "Ops Agent",
        description: "Reads every internal Slack message, classifies as Lead / Action / Decision / FYI / Noise, summarises, and drafts your reply in your tone.",
        deliverables: ["Message classifier", "Reply drafter in your tone", "Decision logger to Supabase"],
      },
      {
        name: "Client Agent — WhatsApp",
        description: "Handles all WhatsApp client inquiries autonomously — new client pitch, FAQ handling, lead scoring, and automated follow-up sequences.",
        deliverables: ["New client qualification flow", "Lead scorer (1–10)", "48h → Day 3 → Day 7 follow-up sequence"],
      },
      {
        name: "Calendar Agent",
        description: "Watches all channels for scheduling signals, proposes slots based on preferred hours, gets your approval, books, and briefs you 30 minutes before every call.",
        deliverables: ["Scheduling intent detector", "Slot proposer + booking", "Pre-call brief engine"],
      },
    ],
    outcomes: [
      "Full team standup, PR review, and task assignment handled autonomously",
      "Client WhatsApp managed 24/7 — humans only approve technical sales",
      "Entire operating layer runs for $30–55/month on Claude + open-source infra",
    ],
    timeline: "7 weeks",
    role: "Internal build · AI/ML Engineering",
    year: "2025",
    tone: "from-orange-500/30 to-yellow-500/10",
    industry: "Founder Operations",
    clientType: "Internal Build",
    focusArea: "Agentic AI Systems",
    domain: "axon.dev/labs",
    challenge:
      "Founders and CTOs lose hours every day to standups, client messages, scheduling, and PR reviews — repetitive work that blocks deep thinking. We built a 5-agent system that owns all of it autonomously, with humans only in the approval loop.",
    solutionsIntro: "Five specialised agents, each with a defined channel and authority level, all coordinated by a central Personal Assistant:",
    solutions: [
      {
        title: "ARIA",
        description: "Command center. Morning briefings, approval queue, and the single interface between you and all five agents.",
      },
      {
        title: "Tech Lead Agent",
        description: "Handles the full tech team — standups, blocker detection, architecture docs, and PR reviews via GitHub webhook + Claude.",
      },
      {
        title: "Ops Agent",
        description: "Classifies every internal message, drafts your reply in your tone, and logs every decision to Supabase.",
      },
      {
        title: "Client + Calendar",
        description: "Client agent runs WhatsApp 24/7 with autonomous sales and lead scoring. Calendar agent books meetings across all channels.",
      },
    ],
    tools: [
      { name: "CrewAI", icon: "Bot" },
      { name: "Claude Sonnet", icon: "MessageSquare" },
      { name: "ChromaDB", icon: "Database" },
      { name: "n8n", icon: "Workflow" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Supabase", icon: "Server" },
    ],
  },
  {
    slug: "erthaloka",
    company: "Erthaloka",
    tag: "Web3 · IoT · AI . SaaS . Spatial Tech",
    category: "Web3",
    title: "A planetary-scale tech backbone for climate action",
    summary:
      "DAO governance, NFT carbon market, custom IoT sensor mesh, AI reporting and geospatial intelligence unified in one SaaS.",
    hero: {
      headline: "Erthaloka — a planetary-scale tech backbone",
      sub: "Four production modules unified under one platform: Web3 governance, NFT-based carbon credits, IoT sensor mesh, and AI-driven sustainability reporting.",
    },
    stats: [
      { k: "4", v: "Modules live in production" },
      { k: "60%", v: "Less manual reporting" },
      { k: "1", v: "Unified SaaS platform" },
    ],
    stack: ["Solidity", "Polygon", "TensorFlow", "Next.js", "AWS", "PostgreSQL", "MQTT"],
    services: [
      { name: "DAO governance contracts", description: "Token-weighted voting, treasury, and proposal lifecycle for community-led decisions.", deliverables: ["Solidity contracts", "Audit-ready test suite", "Snapshot integration"] },
      { name: "NFT marketplace", description: "Tokenized carbon credits with provenance, retirement, and on-chain settlement.", deliverables: ["ERC-721 credit tokens", "Marketplace UI", "Royalty + retirement flows"] },
      { name: "IoT sensor mesh", description: "Custom hardware + MQTT ingestion pipeline streaming environmental data to the cloud.", deliverables: ["Sensor firmware", "Edge gateway", "Time-series ingestion"] },
      { name: "AI reporting & geospatial intelligence", description: "ML models converting raw sensor + satellite data into auditable sustainability reports.", deliverables: ["TensorFlow models", "Geospatial dashboards", "PDF report generator"] },
    ],
    outcomes: [
      "Cut manual sustainability reporting by 60%",
      "Launched first NFT carbon credit market on Polygon",
      "Live IoT sensor mesh streaming environmental telemetry",
    ],
    timeline: "9 months",
    role: "End-to-end engineering",
    year: "2024",
    tone: "from-indigo-500/30 to-blue-500/10",
    industry: "Sustainability",
    clientType: "DAO / Climate Marketplace",
    focusArea: "Web3 + AI + IoT",
    domain: "erthaloka.org",
    challenge:
      "Erthaloka needed a single technology backbone for climate action — DAO governance, a tradable carbon market, live environmental telemetry, and audit-ready reporting — all running in production, not as a pitch deck.",
    solutionsIntro: "We built a unified SaaS platform that puts governance, markets, sensors, and reporting under one roof:",
    solutions: [
      { title: "DAO Governance", description: "Token-weighted voting, treasury, and proposal lifecycle shipped as audited Solidity contracts." },
      { title: "NFT Carbon Market", description: "Tokenized carbon credits with provenance, retirement, and on-chain settlement." },
      { title: "IoT Sensor Mesh", description: "Custom firmware + MQTT pipeline streaming environmental data from field to cloud." },
      { title: "AI Reporting", description: "ML models turn raw sensor and satellite data into auditable sustainability reports." },
    ],
    tools: [
      { name: "Solidity", icon: "FileCode2" },
      { name: "Polygon", icon: "Hexagon" },
      { name: "TensorFlow", icon: "BrainCircuit" },
      { name: "Next.js", icon: "Layers" },
      { name: "AWS", icon: "Cloud" },
      { name: "MQTT", icon: "Radio" },
    ],
    feedback: {
      quote: "Axon shipped what most teams only diagram — governance, market, sensors, and reporting, all live, all owned by us.",
      name: "Erthaloka Core Team",
      role: "Founders, Erthaloka",
    },
  },
  {
    slug: "arteco",
    company: "Arteco",
    tag: "AR / VR",
    category: "AR/VR",
    title: "AR & VRfor dining | Architecture | Construction | Education",
    summary: "AR menus, BIM-to-AR site overlays, and VR architecture walkthroughs shipped as three production apps.",
    hero: {
      headline: "Arteco — spatial computing across three verticals",
      sub: "Three production AR/VR apps — restaurant AR menus, BIM-to-AR construction overlays, and immersive VR architecture walkthroughs.",
    },
    stats: [
      { k: "3", v: "AR / VR apps shipped" },
      { k: "<5 min", v: "BIM → AR conversion" },
      { k: "iOS · Android · Quest", v: "Platforms" },
    ],
    stack: ["Unity", "Unreal Engine", "ARKit", "ARCore", "Three.js", "Autodesk Forge"],
    services: [
      { name: "AR restaurant menu app", description: "Photoreal 3D dishes anchored on the table with allergen + nutrition overlays.", deliverables: ["iOS + Android app", "3D dish pipeline", "Menu CMS"] },
      { name: "BIM-to-AR construction overlay", description: "Convert BIM models into mobile AR overlays site teams can walk through in minutes.", deliverables: ["Forge → USDZ/GLB pipeline", "Mobile AR viewer", "Issue annotation"] },
      { name: "VR architecture walkthroughs", description: "Quest-ready immersive walkthroughs for client presentations and design review.", deliverables: ["Unreal scene template", "Asset pipeline", "Quest build & deploy"] },
    ],
    outcomes: [
      "Reduced BIM-to-AR turnaround from days to under five minutes",
      "Three production apps live across iOS, Android, and Quest",
      "Adopted by F&B and AEC clients for sales and field use",
    ],
    timeline: "7 months",
    role: "AR/VR engineering",
    year: "2024",
    tone: "from-purple-500/30 to-indigo-500/10",
    industry: "AR / VR",
    clientType: "F&B + AEC Studios",
    focusArea: "Spatial Computing",
    domain: "arteco.studio",
    challenge:
      "Arteco's clients across restaurants and construction needed spatial experiences that worked on the devices people already own — without a six-month build cycle per project.",
    solutionsIntro: "We built three production spatial apps on a shared asset and tooling pipeline:",
    solutions: [
      { title: "AR Menus", description: "Photoreal 3D dishes anchored on the table with allergen and nutrition overlays." },
      { title: "BIM → AR", description: "Convert BIM models into mobile AR overlays site teams walk through in minutes." },
      { title: "VR Walkthroughs", description: "Quest-ready immersive walkthroughs for client presentations and design review." },
      { title: "Shared Pipeline", description: "One asset and build pipeline powering iOS, Android, and Quest from the same source." },
    ],
    tools: [
      { name: "Unity", icon: "Boxes" },
      { name: "Unreal", icon: "Gamepad2" },
      { name: "ARKit", icon: "Smartphone" },
      { name: "ARCore", icon: "Smartphone" },
      { name: "Three.js", icon: "Box" },
      { name: "Forge", icon: "Building2" },
    ],
  },
  {
    slug: "cravent",
    company: "Cravent",
    tag: "Agentic AI",
    category: "Agentic AI",
    title: "Autonomous marketing operations",
    summary: "A four-agent system runs research → creative → ops → analytics end-to-end across Meta and Google.",
    hero: {
      headline: "Cravent — a four-agent system for marketing ops",
      sub: "Research, creative, ops, and analytics agents coordinate end-to-end across Meta and Google, with humans in the loop only for approvals.",
    },
    stats: [
      { k: "70%", v: "Faster campaign setup" },
      { k: "3×", v: "More A/B tests run" },
      { k: "4", v: "Coordinated agents" },
    ],
    stack: ["CrewAI", "LangChain", "GPT-4", "Claude", "Make", "Meta Ads API", "Google Ads API"],
    services: [
      { name: "Research agent", description: "Pulls audience, competitor, and trend data into structured briefs.", deliverables: ["Audience research workflow", "Competitor scraper", "Brief generator"] },
      { name: "Creative agent", description: "Generates ad variants — copy, image prompts, and hooks — from briefs.", deliverables: ["Variant generator", "Brand voice tuning", "Creative QA loop"] },
      { name: "Ops agent", description: "Pushes approved creatives live to Meta and Google with budget guardrails.", deliverables: ["Meta Ads integration", "Google Ads integration", "Budget guardrails"] },
      { name: "Analytics agent", description: "Watches performance, flags winners and losers, recommends reallocations.", deliverables: ["Performance dashboards", "Anomaly alerts", "Reallocation suggestions"] },
    ],
    outcomes: [
      "70% faster campaign setup vs. manual baseline",
      "Tripled the number of A/B tests run per week",
      "Humans now spend time on strategy, not pixel-pushing",
    ],
    timeline: "5 months",
    role: "Agentic AI architecture",
    year: "2025",
    tone: "from-pink-500/25 to-indigo-500/10",
    industry: "Marketing / SaaS",
    clientType: "Performance Marketing",
    focusArea: "Agentic AI Systems",
    domain: "cravent.ai",
    challenge:
      "Cravent's team was drowning in manual campaign ops — briefs, creatives, launches, and reporting across two ad platforms — leaving no time for strategy.",
    solutionsIntro: "We built a four-agent system that owns the campaign lifecycle end-to-end:",
    solutions: [
      { title: "Research Agent", description: "Pulls audience, competitor, and trend data into structured briefs." },
      { title: "Creative Agent", description: "Generates ad variants — copy, image prompts, hooks — from briefs." },
      { title: "Ops Agent", description: "Pushes approved creatives live to Meta and Google with budget guardrails." },
      { title: "Analytics Agent", description: "Watches performance, flags winners and losers, recommends reallocations." },
    ],
    tools: [
      { name: "CrewAI", icon: "Bot" },
      { name: "LangChain", icon: "Link2" },
      { name: "GPT-4", icon: "Sparkles" },
      { name: "Claude", icon: "MessageSquare" },
      { name: "Make", icon: "Workflow" },
      { name: "Meta Ads", icon: "Megaphone" },
    ],
  },
  {
    slug: "travellers-triibe",
    company: "Travellers Triibe",
    tag: "Travel · AI",
    category: "Travel",
    title: "AI-personalized travel across web & mobile",
    summary: "Cross-platform app and web with AI recommendations and PCI-compliant multi-currency payments.",
    hero: {
      headline: "Travellers Triibe — AI travel across web & mobile",
      sub: "A cross-platform app and web product with AI-personalized itineraries and PCI-compliant multi-currency payments.",
    },
    stats: [
      { k: "2", v: "Platforms shipped" },
      { k: "Multi-CCY", v: "Payments live" },
      { k: "PCI", v: "Compliant flow" },
    ],
    stack: ["React Native", "Next.js", "TensorFlow", "Stripe", "AWS", "PostgreSQL"],
    services: [
      { name: "Cross-platform mobile app", description: "React Native iOS + Android app with offline-friendly trip data.", deliverables: ["iOS app", "Android app", "Push notifications"] },
      { name: "Web product", description: "Next.js web app sharing the same APIs and personalization layer.", deliverables: ["Next.js SSR app", "Shared design system", "SEO surfaces"] },
      { name: "AI recommendation engine", description: "Personalizes itineraries, stays, and experiences from traveller signals.", deliverables: ["Recommendation model", "Feedback loop", "Cold-start handling"] },
      { name: "Multi-currency payments", description: "PCI-compliant Stripe integration with FX handling and refunds.", deliverables: ["Stripe integration", "FX + tax logic", "Refund + dispute flows"] },
    ],
    outcomes: [
      "Shipped both platforms from one shared codebase",
      "Live multi-currency, PCI-compliant payments",
      "AI itineraries personalize per traveller in real time",
    ],
    timeline: "8 months",
    role: "Full product engineering",
    year: "2024",
    tone: "from-cyan-500/25 to-indigo-500/10",
    industry: "Travel",
    clientType: "Consumer Marketplace",
    focusArea: "Cross-platform + AI",
    domain: "travellerstriibe.com",
    challenge:
      "Travellers Triibe wanted a single product across web and mobile with personalized itineraries and real, multi-currency payments — not a brochure site.",
    solutionsIntro: "We shipped a full product on one shared engineering core:",
    solutions: [
      { title: "Mobile App", description: "React Native iOS + Android storefront with offline-friendly trip data." },
      { title: "Web Product", description: "Next.js web app sharing the same APIs and personalization layer." },
      { title: "AI Itineraries", description: "Recommendations personalize trips, stays, and experiences in real time." },
      { title: "Global Payments", description: "PCI-compliant Stripe flow with multi-currency, FX, and refunds." },
    ],
    tools: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Next.js", icon: "Layers" },
      { name: "TensorFlow", icon: "BrainCircuit" },
      { name: "Stripe", icon: "CreditCard" },
      { name: "AWS", icon: "Cloud" },
      { name: "Postgres", icon: "Database" },
    ],
  },
  {
    slug: "valonk",
    company: "Valonk",
    tag: "Cloud · DevOps",
    category: "Cloud",
    title: "E-commerce performance overhaul",
    summary: "Re-architected infra, CI/CD, and monitoring. Core Web Vitals all green, conversion lifted 18%.",
    hero: {
      headline: "Valonk — a full e-commerce performance rebuild",
      sub: "Re-architected infrastructure, CI/CD, and observability. Core Web Vitals all green, page load down from 4.2s to 1.1s.",
    },
    stats: [
      { k: "4.2s → 1.1s", v: "Page load" },
      { k: "99.9%", v: "Uptime" },
      { k: "+18%", v: "Conversion lift" },
    ],
    stack: ["AWS", "Cloudflare", "Docker", "Terraform", "Grafana", "GitHub Actions"],
    services: [
      { name: "Infra re-architecture", description: "Moved from a brittle single-region setup to a Cloudflare-fronted AWS stack.", deliverables: ["Terraform modules", "Multi-AZ deploy", "CDN + edge caching"] },
      { name: "CI/CD pipelines", description: "GitHub Actions pipelines with preview envs, tests, and zero-downtime deploys.", deliverables: ["Build + test pipeline", "Preview envs", "Blue/green deploy"] },
      { name: "Observability stack", description: "Grafana + Prometheus + log aggregation with paging on real symptoms.", deliverables: ["Dashboards", "SLO-based alerting", "On-call runbooks"] },
    ],
    outcomes: [
      "Page load 4.2s → 1.1s, all Core Web Vitals green",
      "99.9% uptime over the first quarter post-launch",
      "Conversion lifted 18% from performance work alone",
    ],
    timeline: "4 months",
    role: "Cloud & DevOps",
    year: "2024",
    tone: "from-emerald-500/25 to-indigo-500/10",
    industry: "E-commerce",
    clientType: "Mid-market Retail",
    focusArea: "Cloud + DevOps",
    domain: "valonk.com",
    challenge:
      "Valonk's storefront was buckling under traffic with 4+ second page loads, brittle deploys, and no real observability — directly costing them conversion.",
    solutionsIntro: "We rebuilt the platform foundations end-to-end:",
    solutions: [
      { title: "Infra Rebuild", description: "Moved from a brittle single-region setup to a Cloudflare-fronted AWS stack." },
      { title: "CI/CD Pipelines", description: "GitHub Actions with preview envs, tests, and zero-downtime deploys." },
      { title: "Observability", description: "Grafana + Prometheus + logs with paging on real user-impacting symptoms." },
      { title: "Perf Tuning", description: "Image, font, and bundle work taking Core Web Vitals all green." },
    ],
    tools: [
      { name: "AWS", icon: "Cloud" },
      { name: "Cloudflare", icon: "Globe" },
      { name: "Docker", icon: "Container" },
      { name: "Terraform", icon: "Boxes" },
      { name: "Grafana", icon: "Activity" },
      { name: "GH Actions", icon: "GitBranch" },
    ],
  },
  {
    slug: "xplored",
    company: "XplorED",
    tag: "EdTech · AI",
    category: "EdTech",
    title: "Idea to launched learning platform",
    summary: "Web + mobile + AI learning paths + real-time community, taken from founder vision to live product.",
    hero: {
      headline: "XplorED — from founder vision to live platform",
      sub: "Web, mobile, AI-personalized learning paths, and a real-time community layer, taken from idea to production.",
    },
    stats: [
      { k: "Idea → Product", v: "Full cycle" },
      { k: "Web + Mobile", v: "Shipped" },
      { k: "Real-time", v: "Community layer" },
    ],
    stack: ["Next.js", "React Native", "GPT-4", "MongoDB", "Firebase", "WebSockets"],
    services: [
      { name: "Web platform", description: "Next.js learner + instructor experience with SSR and SEO surfaces.", deliverables: ["Learner app", "Instructor console", "Public course pages"] },
      { name: "Mobile app", description: "React Native app with offline lesson caching and push.", deliverables: ["iOS + Android app", "Offline cache", "Notifications"] },
      { name: "AI learning paths", description: "Personalizes path, pace, and reinforcement per learner.", deliverables: ["Path generator", "Adaptive quizzes", "Progress signals"] },
      { name: "Real-time community", description: "Live chat, study rooms, and instructor Q&A via WebSockets.", deliverables: ["Chat service", "Study rooms", "Moderation tooling"] },
    ],
    outcomes: [
      "Went from concept to launched product in one cycle",
      "Personalized learning paths live for every student",
      "Active real-time community across web and mobile",
    ],
    timeline: "10 months",
    role: "Founding engineering team",
    year: "2024",
    tone: "from-amber-500/25 to-indigo-500/10",
    industry: "EdTech",
    clientType: "Early-stage Founder",
    focusArea: "Full Product Build",
    domain: "xplored.app",
    challenge:
      "XplorED's founder had a vision for AI-personalized learning with a live community — and needed an engineering team to turn it into a shipped product, not a prototype.",
    solutionsIntro: "We built the full product across surfaces, models, and real-time layers:",
    solutions: [
      { title: "Web Platform", description: "Next.js learner + instructor experience with SSR and SEO surfaces." },
      { title: "Mobile App", description: "React Native iOS + Android with offline lesson caching and push." },
      { title: "AI Paths", description: "Personalizes path, pace, and reinforcement per learner." },
      { title: "Live Community", description: "Real-time chat, study rooms, and instructor Q&A via WebSockets." },
    ],
    tools: [
      { name: "Next.js", icon: "Layers" },
      { name: "React Native", icon: "Smartphone" },
      { name: "GPT-4", icon: "Sparkles" },
      { name: "MongoDB", icon: "Database" },
      { name: "Firebase", icon: "Flame" },
      { name: "WebSockets", icon: "Radio" },
    ],
  },
  {
    slug: "vivium",
    company: "Vivium",
    tag: "E-commerce",
    category: "E-commerce",
    title: "Digitizing handicraft commerce",
    summary: "Mobile, web storefront, payments, and a supply-chain dashboard tracking 200+ artisans to doorstep.",
    hero: {
      headline: "Vivium — digitizing handicraft commerce",
      sub: "Mobile app, web storefront, payments, and a supply-chain dashboard tracking 200+ artisans from workshop to doorstep.",
    },
    stats: [
      { k: "200+", v: "Artisans onboarded" },
      { k: "8 wk", v: "To MVP" },
      { k: "Web + Mobile", v: "Storefronts" },
    ],
    stack: ["React Native", "Next.js", "Shopify", "Razorpay", "MongoDB", "Node.js"],
    services: [
      { name: "Mobile shopping app", description: "React Native iOS + Android storefront with localized payments.", deliverables: ["iOS + Android app", "Razorpay integration", "Wishlist + cart"] },
      { name: "Web storefront", description: "Next.js storefront tuned for SEO and rich product storytelling.", deliverables: ["Next.js storefront", "Product CMS", "SEO surfaces"] },
      { name: "Supply-chain dashboard", description: "Tracks 200+ artisans, inventory, and fulfilment to doorstep.", deliverables: ["Artisan onboarding", "Inventory tracking", "Fulfilment workflows"] },
    ],
    outcomes: [
      "200+ artisans onboarded and selling within 8 weeks",
      "Single dashboard from raw material to delivered order",
      "Live web + mobile storefronts with localized payments",
    ],
    timeline: "8 weeks to MVP",
    role: "Full product engineering",
    year: "2024",
    tone: "from-rose-500/25 to-indigo-500/10",
    industry: "Handicrafts / E-commerce",
    clientType: "Artisan Marketplace",
    focusArea: "Commerce + Supply Chain",
    domain: "vivium.shop",
    challenge:
      "Vivium needed to bring 200+ traditional artisans online with real storefronts, real payments, and a supply chain they could actually see — in weeks, not quarters.",
    solutionsIntro: "We shipped a full commerce stack with an artisan-first ops layer:",
    solutions: [
      { title: "Mobile Storefront", description: "React Native iOS + Android storefront with localized payments." },
      { title: "Web Storefront", description: "Next.js storefront tuned for SEO and rich product storytelling." },
      { title: "Supply-Chain", description: "Dashboard tracking 200+ artisans, inventory, and fulfilment to doorstep." },
    ],
    tools: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Next.js", icon: "Layers" },
      { name: "Shopify", icon: "ShoppingBag" },
      { name: "Razorpay", icon: "CreditCard" },
      { name: "MongoDB", icon: "Database" },
      { name: "Node.js", icon: "Server" },
    ],
  },
  {
    slug: "internal-rnd",
    company: "Internal R&D",
    tag: "Internal R&D",
    category: "R&D",
    title: "In-house deep-tech accelerators",
    summary: "AgentOps Console, AR Viewer Toolkit, Web3 Credential Verifier and DeployBot — built for us, productized for clients.",
    hero: {
      headline: "Internal R&D — our own deep-tech accelerators",
      sub: "Four in-house products we run our own ops on, then productize for client engagements.",
    },
    stats: [
      { k: "4", v: "Internal products live" },
      { k: "Battle-tested", v: "On our own ops" },
      { k: "Reused", v: "Across client work" },
    ],
    stack: ["CrewAI", "WebXR", "Polygon", "FastAPI", "Docker", "GitHub Actions"],
    services: [
      { name: "AgentOps Console", description: "Observability and control plane for multi-agent systems in production.", deliverables: ["Agent traces", "Cost dashboards", "Run replay"] },
      { name: "AR Viewer Toolkit", description: "Drop-in WebXR viewer + asset pipeline for AR product experiences.", deliverables: ["WebXR viewer", "Asset pipeline", "Analytics hooks"] },
      { name: "Web3 Credential Verifier", description: "Verifiable credentials on Polygon for on-chain proof of attendance/skills.", deliverables: ["Issuance flow", "Verifier app", "Wallet integration"] },
      { name: "DeployBot", description: "Internal CLI + bot that owns preview, staging, and prod deploys.", deliverables: ["Slack bot", "Preview envs", "Rollback flows"] },
    ],
    outcomes: [
      "Four internal products powering client engagements",
      "Battle-tested on our own ops before being sold",
      "Cuts weeks off every new client project",
    ],
    timeline: "Ongoing",
    role: "Internal product",
    year: "2024–2025",
    tone: "from-violet-500/30 to-indigo-500/10",
    industry: "Internal R&D",
    clientType: "Axon Labs",
    focusArea: "Deep-tech Accelerators",
    domain: "axon.dev/labs",
    challenge:
      "Every client engagement was re-solving the same hard problems — agent observability, AR delivery, credential proofs, deploy pipelines. We needed accelerators we owned.",
    solutionsIntro: "We built four internal products we run our own ops on, then reuse on client work:",
    solutions: [
      { title: "AgentOps Console", description: "Observability + control plane for multi-agent systems in production." },
      { title: "AR Viewer Toolkit", description: "Drop-in WebXR viewer + asset pipeline for AR product experiences." },
      { title: "Credential Verifier", description: "Verifiable credentials on Polygon for on-chain proof of attendance and skills." },
      { title: "DeployBot", description: "Internal CLI + bot that owns preview, staging, and prod deploys." },
    ],
    tools: [
      { name: "CrewAI", icon: "Bot" },
      { name: "WebXR", icon: "Box" },
      { name: "Polygon", icon: "Hexagon" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Docker", icon: "Container" },
      { name: "GH Actions", icon: "GitBranch" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getAdjacentCaseStudy = (slug: string) => {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return null;
  return caseStudies[(idx + 1) % caseStudies.length];
};
