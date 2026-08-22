import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Boxes, Glasses, type LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-button";
import { CtaBand } from "@/components/sections/CtaBand";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/case/CaseStudyCard";
import { patterns } from "@/components/case/FeatureRows";

// Icons are resolved client-side by slug — kept out of loader data because
// React components can't be serialized into the SSR dehydration payload.
const domainIcons: Record<string, LucideIcon> = {
  ai: Brain,
  blockchain: Boxes,
  "ar-vr": Glasses,
};

type Domain = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: string[];
  icp: string;
  caseCategory: string;
  patternIndex: number;
};

const domains: Record<string, Domain> = {
  ai: {
    slug: "ai",
    eyebrow: "Domain 01",
    title: "AI & Intelligent Systems",
    intro:
      "Generative AI, LLMs, computer vision, NLP, predictive analytics, edge AI, and MLOps — product intelligence and decision systems built for production, not a demo.",
    capabilities: [
      "Agentic AI that runs your most complex workflows without human intervention",
      "LLM deployment that is private, auditable, and impossible to replicate from a generic API",
      "Computer vision systems that see what your competitors cannot",
      "RAG pipelines that turn your proprietary data into competitive intelligence",
      "MLOps and inference infrastructure that keeps your AI improving while competitors stand still",
      "Predictive analytics and decision systems tuned to your actual business metrics",
    ],
    icp: "Founders and CXOs who need product intelligence, automation, or AI-native product development — not a chatbot bolted onto an existing product.",
    caseCategory: "Agentic AI",
    patternIndex: 0,
  },
  blockchain: {
    slug: "blockchain",
    eyebrow: "Domain 02",
    title: "Blockchain & Decentralised Infrastructure",
    intro:
      "Smart contracts, DeFi infrastructure, NFT architecture, DAO structures, and Web3 product development — trust infrastructure clients own outright.",
    capabilities: [
      "Smart contract systems that enforce your rules without intermediaries",
      "DeFi infrastructure — lending, staking, and treasury systems built to audit standard",
      "NFT and tokenisation architecture with real provenance, not a mint page",
      "DAO structures and on-chain governance for token-holder-run organisations",
      "On-chain supply-chain provenance that makes your claims unfakeable",
      "Web3 product development end-to-end — contracts, indexing, and the front end users touch",
    ],
    icp: "Ventures building trust infrastructure, tokenisation, or decentralised systems who need protocols that hold up to an audit, not a hackathon demo.",
    caseCategory: "Web3",
    patternIndex: 3,
  },
  "ar-vr": {
    slug: "ar-vr",
    eyebrow: "Domain 03",
    title: "Spatial Computing & AR/VR",
    intro:
      "Spatial computing, mixed reality, XR product development, and 3D environment engineering — training simulations, immersive commerce, and industrial AR.",
    capabilities: [
      "Digital twins of physical operations that competitors would need years to replicate",
      "Industrial training simulations that make your team the most capable in your sector",
      "Spatial AI interfaces that change how customers experience your product",
      "AR/VR systems — from AR menus to VR walkthroughs — deployed on devices people already own",
      "Metaverse and 3D environment engineering across iOS, Android, and headset platforms",
      "One shared asset and build pipeline, so new spatial products ship in weeks, not quarters",
    ],
    icp: "Teams in retail, construction, education, or enterprise training who need spatial experiences that ship on real devices, not a six-month R&D cycle.",
    caseCategory: "AR/VR",
    patternIndex: 2,
  },
};

export const Route = createFileRoute("/services_/$domain")({
  loader: ({ params }) => {
    const domain = domains[params.domain];
    if (!domain) throw notFound();
    const related = caseStudies.filter((c) => c.category === domain.caseCategory && !c.parentSlug);
    return { domain, related };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.domain;
    if (!d) return { meta: [{ title: "Domain not found — BHANIXS" }] };
    return {
      meta: [
        { title: `${d.title} — BHANIXS` },
        { name: "description", content: d.intro },
        { property: "og:title", content: `${d.title} — BHANIXS` },
        { property: "og:description", content: d.intro },
      ],
    };
  },
  component: DomainDetail,
  notFoundComponent: NotFoundDomain,
});

function NotFoundDomain() {
  return (
    <section className="pt-44 pb-32 mx-auto max-w-3xl px-6 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-display text-4xl">Domain not found.</h1>
      <div className="mt-8">
        <PillLink to="/services">See all services</PillLink>
      </div>
    </section>
  );
}

function DomainDetail() {
  const { domain, related } = Route.useLoaderData();
  const Icon = domainIcons[domain.slug];

  return (
    <>
      <section className="relative pt-44 pb-16">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid size-14 place-items-center rounded-2xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
              <Icon className="size-7" />
            </div>
            <Eyebrow>{domain.eyebrow}</Eyebrow>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance max-w-4xl"
          >
            {domain.title}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            {domain.intro}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mt-12 aspect-[16/6] w-full overflow-hidden rounded-2xl border border-border bg-surface-card shadow-[0_10px_40px_-20px_oklch(0_0_0_/_0.6)]"
          >
            <div className="absolute inset-0" style={patterns[domain.patternIndex]} aria-hidden />
            <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
            <div className="relative flex h-full items-center justify-center">
              <div className="grid size-20 place-items-center rounded-3xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow shadow-[var(--shadow-glow)]">
                <Icon className="size-9" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>What we make defensible</Eyebrow>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {domain.capabilities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="flex gap-3 rounded-2xl border border-border-strong bg-surface-card p-6"
              >
                <span className="text-primary-glow font-display">—</span>
                <p className="text-muted-foreground leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Who this is for</Eyebrow>
          <p className="mt-6 max-w-2xl text-xl font-display tracking-tight leading-snug text-balance">
            {domain.icp}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Proof, Not Promises</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance">
              What we&rsquo;ve shipped in {domain.title.split("&")[0].trim()}.
            </h2>
            <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
              {related.map((study, i) => (
                <CaseStudyCard key={study.slug} study={study} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
