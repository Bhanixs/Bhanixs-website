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
  screenshots?: { label: string; src: string }[];
  videos?: { label: string; src: string }[];
  parentSlug?: string;
  childSlugs?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "erthaloka",
    company: "Erthaloka",
    tag: "Web3 · IoT · AI . SaaS . Spatial Tech",
    category: "Web3",
    title: "built a planetary-scale tech backbone for climate action",
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
    logoUrl: "/logo%27s/Copy%20of%20Erthaloka%20Green%20Logo.png",
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
      quote: "BHANIXS shipped what most teams only diagram — governance, market, sensors, and reporting, all live, all owned by us.",
      name: "Erthaloka Core Team",
      role: "Founders, Erthaloka",
    },
    screenshots: [
      { label: "Home Page", src: "/DAO/Screenshot 2026-06-07 211748.png" },
      { label: "Dashboard — Overview", src: "/DAO/Screenshot 2026-06-07 211800.png" },
      { label: "Dashboard — Activity & Achievements", src: "/DAO/Screenshot 2026-06-07 211808.png" },
      { label: "Governance — Proposal Voting", src: "/DAO/Screenshot 2026-06-07 211819.png" },
      { label: "Treasury Dashboard", src: "/DAO/Screenshot 2026-06-07 211831.png" },
      { label: "Treasury — Cash Flow & Health", src: "/DAO/Screenshot 2026-06-07 211842.png" },
      { label: "Staking Dashboard", src: "/DAO/Screenshot 2026-06-07 211849.png" },
      { label: "Staking — History & Performance", src: "/DAO/Screenshot 2026-06-07 211856.png" },
      { label: "Community Action Pools", src: "/DAO/Screenshot 2026-06-07 211908.png" },
      { label: "Learning Center", src: "/DAO/Screenshot 2026-06-07 211917.png" },
      { label: "Ertha Wallet", src: "/DAO/Screenshot 2026-06-07 211925.png" },
      { label: "Wallet — QR & Monthly Summary", src: "/DAO/Screenshot 2026-06-07 211932.png" },
    ],
  },
  {
    slug: "erthas-exchange",
    company: "ErthaExchange",
    tag: "Web3 · Service Marketplace",
    category: "Web3",
    title: "A coin-powered service marketplace for the circular economy",
    summary:
      "A full-stack service marketplace where users buy real-world services — living spaces, travel, health, tech — using ErthaCOins, with digital wallets, verified organisations, and an admin control layer.",
    hero: {
      headline: "ErthaExchange — a coin-powered marketplace for circular services",
      sub: "Digital wallet system, service discovery, and user dashboard connecting 1000+ users to 500+ services from verified organizations.",
    },
    stats: [
      { k: "1000+", v: "Active users" },
      { k: "500+", v: "Listed services" },
      { k: "50k+", v: "Coins traded" },
    ],
    stack: ["Next.js", "Supabase", "JWT", "PostgreSQL", "Node.js", "Cloudflare"],
    services: [
      {
        name: "Digital Wallet",
        description: "Secure ErthaCOin wallet with top-up (₹100–₹2000), balance tracking, and transaction history.",
        deliverables: ["Wallet dashboard", "Quick top-up flow", "Transaction ledger"],
      },
      {
        name: "Service Marketplace",
        description: "Discover and book verified services across Lifestyle, Travel, Health, Technology, and Entertainment categories.",
        deliverables: ["Service listing engine", "Category filters", "Service detail + booking"],
      },
      {
        name: "User Dashboard",
        description: "Personalised dashboard showing wallet overview, bookings, and account status.",
        deliverables: ["My Services view", "Booking history", "Spending analytics"],
      },
      {
        name: "Admin Portal",
        description: "JWT-secured admin dashboard for managing organisations, services, and platform activity.",
        deliverables: ["Admin login + auth", "Organisation management", "Platform analytics"],
      },
    ],
    outcomes: [
      "Live marketplace with 1000+ users and 500+ verified services",
      "Full wallet system with coin top-up and real-time balance",
      "Secure admin portal with JWT authentication",
    ],
    timeline: "6 months",
    role: "Full product engineering",
    year: "2024",
    tone: "from-blue-500/30 to-cyan-500/10",
    industry: "Circular Economy",
    clientType: "Web3 Marketplace",
    focusArea: "Commerce + Web3",
    domain: "erthas.exchange",
    logoUrl: "/logo%27s/Copy%20of%20Erthaloka%20Green%20Logo.png",
    challenge:
      "The Erthaloka ecosystem needed a real marketplace where ErthaCOins could unlock tangible services — from co-living spaces to sustainable travel — with a trust layer of verified organizations and a seamless user experience.",
    solutionsIntro: "We built a full coin-powered marketplace with wallet, discovery, booking, and admin layers:",
    solutions: [
      { title: "Digital Wallet", description: "Secure ErthaCOin wallet with top-up, balance tracking, and full transaction history." },
      { title: "Service Marketplace", description: "Browse and book services across 10+ categories from verified organizations." },
      { title: "User Dashboard", description: "Personalised view of wallet, bookings, spending, and account status." },
      { title: "Admin Portal", description: "JWT-secured admin layer for managing the full platform ecosystem." },
    ],
    tools: [
      { name: "Next.js", icon: "Layers" },
      { name: "Supabase", icon: "Server" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "JWT Auth", icon: "Shield" },
      { name: "Node.js", icon: "Terminal" },
      { name: "Cloudflare", icon: "Globe" },
    ],
    screenshots: [
      { label: "Homepage — Exchange Value, Build Community", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 205917.png" },
      { label: "Our Services — Marketplace", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 205927.png" },
      { label: "Why Choose ErthaExchange", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 205935.png" },
      { label: "User Dashboard", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 211243.png" },
      { label: "Dashboard — Transaction History", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 211250.png" },
      { label: "Explore Services", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 211301.png" },
      { label: "My Services — Booked", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 211313.png" },
      { label: "Admin Portal", src: "/erthas-cryptowalletandexchange/Screenshot 2026-06-07 211338.png" },
    ],
  },
  {
    slug: "erthanomy",
    company: "Erthanomy",
    tag: "DeFi · Tokenomics · Web3",
    category: "Web3",
    title: "Blockchain tokenomics powering a circular economy",
    summary:
      "ERC-20 token (ERT) on Ethereum with DAO governance, DeFi lending, NFT marketplace, and DApp — a full tokenomics layer for the Erthaloka circular economy ecosystem.",
    hero: {
      headline: "Erthanomy — circular economy powered by blockchain",
      sub: "A complete on-chain economic layer: ERC-20 utility token, DAO governance, DeFi lending, NFT marketplace, and a DApp — all built for the Erthaloka ecosystem.",
    },
    stats: [
      { k: "ERC-20", v: "Token live on Ethereum" },
      { k: "5", v: "On-chain features" },
      { k: "100%", v: "Decentralised governance" },
    ],
    stack: ["Solidity", "Ethereum", "Web3.js", "Next.js", "IPFS", "Hardhat"],
    services: [
      {
        name: "Ertha Token (ERT)",
        description: "Utility and governance ERC-20 token with allocations for Public Sale, Staking Rewards, Treasury, Team, and Ecosystem Growth.",
        deliverables: ["ERC-20 token contract", "Token allocation model", "Exchange listing strategy"],
      },
      {
        name: "DAO Governance",
        description: "Decentralised decision-making via smart contracts — proposal creation, voting, and treasury management.",
        deliverables: ["Governance contracts", "Proposal + voting UI", "Treasury management"],
      },
      {
        name: "DeFi + DApp",
        description: "DeFi lending (microloans + borrowing) and a marketplace DApp covering payments, subscriptions, and NFT commerce.",
        deliverables: ["Lending protocol", "DApp marketplace", "NFT engine"],
      },
      {
        name: "Erthanomy Website",
        description: "Public-facing site explaining the token, ecosystem, and roadmap — with wallet connect integration.",
        deliverables: ["Token page", "Ecosystem overview", "Roadmap visualization"],
      },
    ],
    outcomes: [
      "ERC-20 token live on Ethereum with transparent allocation model",
      "Full DAO governance via smart contracts and token-holder voting",
      "DeFi lending and NFT marketplace integrated in one DApp",
    ],
    timeline: "8 months",
    role: "Blockchain engineering",
    year: "2024",
    tone: "from-green-500/30 to-emerald-500/10",
    industry: "DeFi / Circular Economy",
    clientType: "Web3 Protocol",
    focusArea: "Tokenomics + DeFi",
    domain: "erthanomy.io",
    logoUrl: "/logo%27s/Copy%20of%20Erthaloka%20Green%20Logo.png",
    challenge:
      "The Erthaloka circular economy needed a native token and decentralised economic infrastructure — payments, salaries, governance, and DeFi — all built transparently on-chain without relying on centralised intermediaries.",
    solutionsIntro: "We built the full on-chain economic layer for the Erthaloka ecosystem:",
    solutions: [
      { title: "ERT Token", description: "ERC-20 utility and governance token with a transparent allocation model on Ethereum." },
      { title: "DAO Governance", description: "Smart contract-based proposal and voting system for token-holder governance." },
      { title: "DeFi Protocol", description: "Microloan and borrowing protocol generating interest revenue on-chain." },
      { title: "DApp + NFT", description: "Marketplace DApp with payments, subscriptions, and an integrated NFT engine." },
    ],
    tools: [
      { name: "Solidity", icon: "FileCode2" },
      { name: "Ethereum", icon: "Hexagon" },
      { name: "Web3.js", icon: "Globe" },
      { name: "Next.js", icon: "Layers" },
      { name: "IPFS", icon: "Database" },
      { name: "Hardhat", icon: "Hammer" },
    ],
    screenshots: [
      { label: "Homepage — Circular Economy Powered by Blockchain", src: "/Cyptocurrencyown-erthasand circulareconomy/Screenshot 2026-06-07 210235.png" },
      { label: "What is Erthaloka? — Core Advantages", src: "/Cyptocurrencyown-erthasand circulareconomy/Screenshot 2026-06-07 210247.png" },
      { label: "Ertha Token (ERT) — Token Allocation", src: "/Cyptocurrencyown-erthasand circulareconomy/Screenshot 2026-06-07 210257.png" },
      { label: "Erthaloka Ecosystem — Feature Map", src: "/Cyptocurrencyown-erthasand circulareconomy/Screenshot 2026-06-07 210307.png" },
    ],
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
    logoUrl: "/logo%27s/arteco.png",
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
    childSlugs: ["arteco-ar-edu", "arteco-ar-menu", "arteco-vr-edu", "arteco-3d-architecture"],
    screenshots: [
      { label: "Homepage — AR/VR Learning Platform", src: "/arteco/Screenshot 2026-06-07 224102.png" },
      { label: "Smart Stationery Vending", src: "/arteco/Screenshot 2026-06-07 224111.png" },
      { label: "AR/VR Learning Experience", src: "/arteco/Screenshot 2026-06-07 224120.png" },
      { label: "Educational Tours", src: "/arteco/Screenshot 2026-06-07 224125.png" },
      { label: "About Arteco", src: "/arteco/Screenshot 2026-06-07 224133.png" },
      { label: "Platform Overview", src: "/arteco/Screenshot 2026-06-07 224139.png" },
    ],
  },
  {
    slug: "arteco-ar-edu",
    parentSlug: "arteco",
    company: "Arteco",
    tag: "AR · Education",
    category: "AR/VR",
    title: "AR education — 3D architectural elements in real space",
    summary: "Mobile AR app overlaying photorealistic 3D architectural elements — Ionic columns and structures — into real-world environments for immersive spatial education.",
    hero: {
      headline: "AR Education — architecture comes alive in real space",
      sub: "Point a phone at any surface and instantly overlay 3D architectural elements in true-to-scale AR.",
    },
    stats: [
      { k: "iOS + Android", v: "Cross-platform" },
      { k: "Real-time", v: "AR overlay" },
      { k: "<2s", v: "Model load time" },
    ],
    stack: ["Unity", "ARKit", "ARCore", "Three.js", "WebXR"],
    services: [
      {
        name: "AR mobile app",
        description: "Cross-platform AR app overlaying 3D architectural elements in real-world space.",
        deliverables: ["iOS build", "Android build", "3D model pipeline"],
      },
      {
        name: "3D asset pipeline",
        description: "Optimized USDZ/GLB pipeline for architectural models with real-time rendering.",
        deliverables: ["Asset optimization", "LOD pipeline", "AR anchoring"],
      },
    ],
    outcomes: [
      "Real-time 3D overlay of architectural elements on any surface",
      "Cross-platform iOS and Android deployment",
      "Used for educational walkthroughs and spatial visualization",
    ],
    timeline: "3 months",
    role: "AR engineering",
    year: "2024",
    tone: "from-purple-500/30 to-violet-500/10",
    industry: "AR / Education",
    clientType: "EdTech Studio",
    focusArea: "Augmented Reality",
    domain: "arteco.studio/ar-edu",
    logoUrl: "/logo%27s/arteco.png",
    challenge: "Architecture students and educators needed a way to experience real-scale 3D structures in physical space — without expensive hardware or dedicated rooms.",
    solutionsIntro: "We shipped a mobile AR app that brings architectural models into the real world:",
    solutions: [
      { title: "Mobile AR", description: "Cross-platform ARKit + ARCore app overlaying true-to-scale 3D models on any surface." },
      { title: "Asset Pipeline", description: "Optimized 3D model pipeline with real-time LOD and AR anchoring for fast load." },
    ],
    tools: [
      { name: "Unity", icon: "Boxes" },
      { name: "ARKit", icon: "Smartphone" },
      { name: "ARCore", icon: "Smartphone" },
      { name: "Three.js", icon: "Box" },
      { name: "WebXR", icon: "Globe" },
    ],
    screenshots: [
      { label: "AR Platform — Web", src: "/ar-edu/Screenshot 2026-06-07 224417.png" },
      { label: "AR in Action — Column 1", src: "/ar-edu/WhatsApp Image 2026-06-07 at 10.47.52 PM.jpeg" },
      { label: "AR in Action — Column 2", src: "/ar-edu/WhatsApp Image 2026-06-07 at 10.47.53 PM.jpeg" },
      { label: "AR in Action — Column 3", src: "/ar-edu/WhatsApp Image 2026-06-07 at 10.47.53 PM (1).jpeg" },
      { label: "AR in Action — Column 4", src: "/ar-edu/WhatsApp Image 2026-06-07 at 10.47.54 PM.jpeg" },
    ],
    videos: [
      { label: "AR Education — Live Demo", src: "/ar-edu/WhatsApp Video 2026-06-03 at 1.56.44 AM.mp4" },
    ],
  },
  {
    slug: "arteco-ar-menu",
    parentSlug: "arteco",
    company: "Arteco",
    tag: "AR · F&B",
    category: "AR/VR",
    title: "AR restaurant menu — 3D dishes on the table",
    summary: "iOS + Android AR app that anchors photoreal 3D dish models on any restaurant table — scan the menu, see the dish appear life-size in front of you.",
    hero: {
      headline: "AR Menu — your dish appears on the table before you order",
      sub: "Scan a QR code, point at the table, and see true-to-scale 3D food models anchored in your physical dining space.",
    },
    stats: [
      { k: "iOS + Android", v: "Cross-platform" },
      { k: "Photoreal", v: "3D dish models" },
      { k: "QR", v: "Scan to activate" },
    ],
    stack: ["Unity", "ARKit", "ARCore", "Blender"],
    services: [
      {
        name: "AR menu app",
        description: "Restaurant-ready AR app — scan a QR and 3D dishes anchor on the table, with allergen + nutrition overlays.",
        deliverables: ["iOS + Android app", "QR activation flow", "3D dish library"],
      },
      {
        name: "Menu CMS",
        description: "Restaurant staff update dishes, prices, and models without a developer.",
        deliverables: ["Menu CMS", "3D model upload", "Live sync"],
      },
    ],
    outcomes: [
      "QR-to-AR in under 3 seconds on any table surface",
      "Photoreal 3D dish models with allergen overlays",
      "Restaurant-managed menu CMS — no dev required to update",
    ],
    timeline: "3 months",
    role: "AR engineering",
    year: "2024",
    tone: "from-orange-500/30 to-red-500/10",
    industry: "AR / F&B",
    clientType: "Restaurant Chain",
    focusArea: "Augmented Reality",
    domain: "arteco.studio/ar-menu",
    logoUrl: "/logo%27s/arteco.png",
    challenge: "Restaurant clients wanted to let diners visualise dishes in 3D before ordering — without replacing physical menus or training staff on complex tech.",
    solutionsIntro: "We built a QR-activated AR menu that works on any phone, on any table:",
    solutions: [
      { title: "AR Dish Viewer", description: "Photoreal 3D dishes anchored on the table via QR activation — no app install required." },
      { title: "Menu CMS", description: "Restaurant staff manage dishes, models, and pricing without developer support." },
    ],
    tools: [
      { name: "Unity", icon: "Boxes" },
      { name: "ARKit", icon: "Smartphone" },
      { name: "ARCore", icon: "Smartphone" },
      { name: "Blender", icon: "Box" },
    ],
    screenshots: [
      { label: "AR Menu — 3D dish anchored on the table", src: "/ar-menu/Screenshot 2026-08-22 181029.png" },
    ],
    videos: [
      { label: "AR Menu — Live Demo", src: "/ar-menu/WhatsApp Video 2026-06-03 at 1.56.45 AM.mp4" },
    ],
  },
  {
    slug: "arteco-vr-edu",
    parentSlug: "arteco",
    company: "Arteco",
    tag: "VR · Education",
    category: "AR/VR",
    title: "VR education — immersive learning environments",
    summary: "WebXR and Quest-ready VR learning scenes placing students inside historical and architectural environments for experiential education.",
    hero: {
      headline: "VR Education — learn inside the environment, not about it",
      sub: "Students step inside historical spaces and architectural structures — immersive WebXR scenes accessible from browser or Quest headset.",
    },
    stats: [
      { k: "WebXR", v: "Browser + Quest" },
      { k: "Immersive", v: "360° environments" },
      { k: "No install", v: "Browser-native" },
    ],
    stack: ["WebXR", "Three.js", "Unity", "Unreal Engine"],
    services: [
      {
        name: "VR learning scenes",
        description: "Immersive environments placing students inside historical and architectural spaces.",
        deliverables: ["WebXR scenes", "Quest build", "Instructor controls"],
      },
      {
        name: "Cross-platform delivery",
        description: "Browser-native WebXR with Quest-optimised builds — no headset required for basic access.",
        deliverables: ["Browser fallback", "Quest packaging", "Scene manager"],
      },
    ],
    outcomes: [
      "Immersive VR scenes accessible from browser or Quest headset",
      "Students experience environments rather than reading about them",
      "Zero-install browser fallback for classrooms without headsets",
    ],
    timeline: "2 months",
    role: "VR engineering",
    year: "2024",
    tone: "from-violet-500/30 to-blue-500/10",
    industry: "VR / Education",
    clientType: "EdTech Studio",
    focusArea: "Virtual Reality",
    domain: "arteco.studio/vr-edu",
    logoUrl: "/logo%27s/arteco.png",
    challenge: "Educators needed immersive learning experiences accessible without expensive dedicated hardware — students should enter the scene from a classroom browser or a headset.",
    solutionsIntro: "We built WebXR-first VR scenes with a Quest-optimised build path:",
    solutions: [
      { title: "WebXR Scenes", description: "Browser-native immersive environments — no install, works on any device." },
      { title: "Quest Build", description: "Optimised Quest packaging for full 6DOF immersive experience." },
    ],
    tools: [
      { name: "WebXR", icon: "Globe" },
      { name: "Three.js", icon: "Box" },
      { name: "Unity", icon: "Boxes" },
      { name: "Unreal", icon: "Gamepad2" },
    ],
    screenshots: [
      { label: "VR Learning Scene", src: "/vr-edu/Screenshot 2026-06-07 224247.png" },
    ],
    videos: [
      { label: "VR Education — Demo", src: "/vr-edu/WhatsApp Video 2026-06-03 at 1.56.40 AM.mp4" },
    ],
  },
  {
    slug: "arteco-3d-architecture",
    parentSlug: "arteco",
    company: "Arteco",
    tag: "3D · Architecture · VR",
    category: "AR/VR",
    title: "3D virtual tours for construction & interior design",
    summary: "Interactive browser-based virtual tours of architectural projects — clients walk through photorealistic 3D renders before a single brick is laid.",
    hero: {
      headline: "3D Virtual Tour — walk through the building before it's built",
      sub: "Photorealistic interactive 3D tours of architectural projects delivered in-browser — for client presentations, sales, and design review before construction begins.",
    },
    stats: [
      { k: "Browser", v: "No app required" },
      { k: "Photoreal", v: "Architectural renders" },
      { k: "Interactive", v: "Full walkthrough" },
    ],
    stack: ["Three.js", "WebGL", "Unreal Engine", "Autodesk Forge", "Blender"],
    services: [
      {
        name: "Virtual tour engine",
        description: "Browser-based interactive 3D walkthrough with panoramic navigation and hotspot annotations.",
        deliverables: ["Virtual tour player", "Navigation controls", "Hotspot system"],
      },
      {
        name: "3D render pipeline",
        description: "From BIM/CAD models to photorealistic web-optimised 3D scenes.",
        deliverables: ["BIM → 3D pipeline", "Asset optimization", "Lighting + materials"],
      },
    ],
    outcomes: [
      "Clients walk through completed-looking projects before construction",
      "Browser-native — no plugin, no download required",
      "Used for pre-sales, client approval, and design sign-off",
    ],
    timeline: "2 months",
    role: "3D & WebGL engineering",
    year: "2024",
    tone: "from-slate-500/30 to-indigo-500/10",
    industry: "3D / Architecture / Construction",
    clientType: "AEC Studio",
    focusArea: "3D Visualization",
    domain: "arteco.studio/3d",
    logoUrl: "/logo%27s/arteco.png",
    challenge: "Architecture and interior design clients needed a way to show completed-looking spaces to buyers and stakeholders before construction — without expensive on-site mock-ups or static renders.",
    solutionsIntro: "We built a browser-native interactive 3D virtual tour platform:",
    solutions: [
      { title: "Virtual Tour Player", description: "Browser-native interactive walkthrough with panoramic navigation and annotation hotspots." },
      { title: "BIM Pipeline", description: "From BIM/CAD source to photorealistic web-optimised 3D scene in a structured pipeline." },
    ],
    tools: [
      { name: "Three.js", icon: "Box" },
      { name: "WebGL", icon: "Globe" },
      { name: "Unreal", icon: "Gamepad2" },
      { name: "Forge", icon: "Building2" },
      { name: "Blender", icon: "Layers" },
    ],
    screenshots: [
      { label: "Virtual Tour — Loading", src: "/3danimationvrfor construction and interiorandarchitecture/Screenshot 2026-06-07 225420.png" },
      { label: "3D Architectural Render — Angle 1", src: "/3danimationvrfor construction and interiorandarchitecture/Screenshot 2026-06-07 225516.png" },
      { label: "3D Architectural Render — Angle 2", src: "/3danimationvrfor construction and interiorandarchitecture/Screenshot 2026-06-07 225525.png" },
    ],
    videos: [
      { label: "3D Architecture — Walkthrough Demo", src: "/3danimationvrfor construction and interiorandarchitecture/Recording archi web.mp4" },
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
    logoUrl: "/logo%27s/cravent-logo-trimmed.png",
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
    screenshots: [
      { label: "Homepage — The X Factor for Business Growth", src: "/cravent/Screenshot 2026-06-07 231610.png" },
      { label: "Services — Design, Marketing, Strategy, Technology", src: "/cravent/Screenshot 2026-06-07 231624.png" },
      { label: "Client Portfolio — 50+ Brands", src: "/cravent/Screenshot 2026-06-07 231634.png" },
      { label: "Footer & Contact", src: "/cravent/Screenshot 2026-06-07 231645.png" },
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
    logoUrl: "/logo%27s/Copy%20of%20Artboard%209%20transparent.png",
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
    screenshots: [
      { label: "Homepage — Instant Discounts at Partner Merchants", src: "/travellerstribe/Screenshot 2026-08-22 190007.png" },
      { label: "How It Works — Merchant to Customer Flow", src: "/travellerstribe/Screenshot 2026-08-22 190024.png" },
      { label: "Customer Features — Discover, Scan & Pay, Track Savings", src: "/travellerstribe/Screenshot 2026-08-22 190032.png" },
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
    logoUrl: "/logo%27s/valonk-logo-trimmed.png",
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
    screenshots: [
      { label: "Homepage — EXPLORATION", src: "/valonk/Screenshot 2026-06-07 232135.png" },
      { label: "Product Collection", src: "/valonk/Screenshot 2026-06-07 232145.png" },
      { label: "Lookbook & Blog", src: "/valonk/Screenshot 2026-06-07 232154.png" },
      { label: "Footer Gallery", src: "/valonk/Screenshot 2026-06-07 232203.png" },
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
    logoUrl: "/logo%27s/Copy%20of%20Artboard%202.png",
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
    screenshots: [
      { label: "Homepage — Learning Expedition", src: "/xplored/Screenshot 2026-06-07 211414.png" },
      { label: "Programs & Features", src: "/xplored/Screenshot 2026-06-07 211422.png" },
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
    logoUrl: "/logo%27s/Copy%20of%20vivium%20logo.jpg.jpeg",
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
    screenshots: [
      { label: "Ecosystem Overview — Customer, Partner, Artisan & Investor Views", src: "/vivium/Screenshot 2026-08-10 235822.png" },
      { label: "Artisan Dashboard — AI Voice-to-Catalog", src: "/vivium/Screenshot 2026-08-11 000605.png" },
      { label: "Investor Hub — Ecosystem at a Glance", src: "/vivium/Screenshot 2026-08-11 000617.png" },
      { label: "Enterprise Partner Portal", src: "/vivium/Screenshot 2026-08-11 000900.png" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getChildCaseStudies = (slug: string) =>
  caseStudies.filter((c) => c.parentSlug === slug);

export const getAdjacentCaseStudy = (slug: string) => {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return null;
  return caseStudies[(idx + 1) % caseStudies.length];
};
