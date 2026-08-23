import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Target,
  Workflow,
  Brain,
  Lock,
  Eye,
  Handshake,
  FileCheck,
  Infinity as InfinityIcon,
  MapPin,
  Linkedin,
} from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureRows } from "@/components/case/FeatureRows";
import { FannedCardStack } from "@/components/case/FannedCardStack";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BHANIXS" },
      { name: "description", content: "BHANIXS is the technology co-building entity of Bhanixs Group — a senior team building proprietary AI, blockchain, and spatial computing technology as an embedded technical co-founder." },
      { property: "og:title", content: "About — BHANIXS" },
      { property: "og:description", content: "A senior team co-building proprietary technology, aligned by equity rather than by invoice." },
    ],
  }),
  component: AboutPage,
});

const whatWeAre = [
  {
    k: "Who",
    icon: Building2,
    v: "BHANIXS — the technology co-building entity of Bhanixs Group. The Group's primary revenue engine and client-facing front door for every technology mandate.",
  },
  {
    k: "What",
    icon: Hammer,
    v: "We don't deliver reports, recommendations, or generic frameworks. We build — embedding ourselves in your technology journey with proprietary tools and a team that has scaled ventures from zero to one, and one to N.",
  },
  {
    k: "Why",
    icon: Target,
    v: "Not a vendor executing a spec. Not a consultancy that stops at a slide deck. We go deep in three domains — AI, blockchain, spatial computing — instead of wide across everything.",
  },
  {
    k: "How",
    icon: Workflow,
    v: "As your advisors — direction on what to build and when. As your build team — 0-to-1 delivery aligned to your business. As your co-builder — embedded long-term, for equity.",
  },
];

const principles = [
  { k: "Business thinking, not just technical thinking", v: "We build technology that serves your business model, not technology that showcases ours.", icon: Brain },
  { k: "Proprietary by design", v: "Every solution we build contains something your competitors cannot buy off a shelf.", icon: Lock },
  { k: "Honest about what we are", v: "We are a small, senior, high-conviction firm. We take fewer engagements than we could. We go deeper than anyone else will.", icon: Eye },
  { k: "Co-builders, not contractors", v: "We hold equity in what we build. Our success is yours.", icon: Handshake },
];

const locations = ["Bengaluru"];

const team = [
  {
    name: "Surya Prakash",
    role: "Founder & CEO",
    img: "/team/surya.png",
    linkedin: "https://www.linkedin.com/in/surya-bhandari23/",
  },
  {
    name: "Nuthan B",
    role: "CTO",
    img: "/team/team-nuthan-b.jpg",
    linkedin: "https://www.linkedin.com/in/nuthanb/",
  },
  {
    name: "K Vigneshwar",
    role: "CMO",
    img: "/team/vignesh.png",
    linkedin: "https://www.linkedin.com/in/k-vigneshwar-692531149/",
  },
];

const models = [
  {
    k: "Technology Co-Build",
    icon: Hammer,
    what: "We embed in your business and build the technology alongside your team.",
    who: "Ventures and enterprises needing proprietary technology built from zero.",
    comp: "Project fees + equity stake.",
  },
  {
    k: "Patent-for-Equity Partnership",
    icon: FileCheck,
    what: "We co-build patent-eligible technology. You own the domain application and the patent that covers it. Bhanixs retains the underlying architectural methods and takes equity.",
    who: "Founders who want institutional-grade technology without burning runway on salaries.",
    comp: "Equity stake, commensurate with our technology contribution — no cash owed for the IP itself.",
  },
  {
    k: "Strategic Technology Partner",
    icon: InfinityIcon,
    what: "Long-term embedded partnership. Bhanixs functions as your technology institution.",
    who: "Enterprises that need a permanent co-builder, not a rotating vendor.",
    comp: "Retainer + equity in technology created.",
  },
];

export default AboutPage;

function AboutPage() {
  return (
    <>
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance max-w-4xl">
              Built to build <span className="text-foreground/70">institutions.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
              BHANIXS was founded as Xenveda Technologies in 2023 in Bengaluru,
              on a simple belief: the best technology is built by people who
              understand the business it serves. We rebranded as BHANIXS — the
              Bhandari Experimentation Studio — to reflect what we had become:
              not a service provider, but a technology institution focused
              squarely on deep tech, working at the advanced and cutting edge
              of the frontier.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block h-96 rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.8)]"
          >
            {/* Photo by Vishnu Mohanan on Unsplash — Unsplash License (free for commercial use) */}
            <img
              src="/brand/about-hero-pcb.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>What Bhanixs Is</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance max-w-2xl">
            Not a typical agency.
          </h2>

          {/* Previous copy — Group/Labs structure, parked for now, not deleted:
          <p>
            Bhanixs is a subsidiary of Bhanixs Group and an operating
            component of the Bhanixs Labs umbrella — the entry point for
            clients whose primary requirement is technology. Clients
            needing services beyond technology are cross-referred to
            Bhanixs Labs for the appropriate venture studio or
            multi-service engagement. It keeps us narrow by design:
            depth over breadth, in AI, blockchain, and spatial computing.
          </p>
          */}

          <FeatureRows items={whatWeAre} />
        </div>
      </section>

      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Principles</Eyebrow>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.k} className="rounded-3xl border border-border-strong bg-surface-card p-8">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">{p.k}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.v}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="engagement-models" className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Engagement Models</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance">
              Three ways to work with us.
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
              No published rates, no hourly calculators — the right model
              depends on what you&rsquo;re building and how you want to fund it.
            </p>
          </div>
          <div className="mt-16">
            <FannedCardStack items={models} />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Eyebrow>IP &amp; Patents</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance">
              Co-creation, layered ownership.
            </h2>
            <img
              src="/brand/bhanixs-mark.png"
              alt=""
              aria-hidden
              className="mt-12 h-32 w-auto opacity-15 hidden lg:block"
            />
          </div>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>
              Every engagement produces two kinds of intellectual property:
              your domain-specific application — how your business problem
              gets solved — and the underlying architectural method that makes
              it work. We keep these separate on purpose.
            </p>
            <p>
              You own your application, your product, and your data outright.
              Where the work is patent-eligible, you own the application
              patent — the one investors and acquirers care about. Bhanixs
              retains the proprietary methods, frameworks, and architectural
              patterns behind it as our own IP, licensed into your product for
              as long as we&rsquo;re your technology partner.
            </p>
            <p className="text-base text-muted-foreground/80">
              This is a co-creation model, not a transactional handoff —
              exact terms are set per engagement with proper IP counsel, not
              boilerplate.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>The Team</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-balance">
              Real people. Real work.
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
              We show real names and real roles — never AI-generated avatars
              or unverifiable pedigree claims.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-3xl border border-primary/30 bg-surface-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary-glow hover:text-primary transition-colors"
                  >
                    <Linkedin className="size-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Eyebrow>Location</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight">
              Based in Bengaluru.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {locations.map((l) => (
              <span key={l} className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-card px-5 py-2 font-mono text-xs tracking-widest uppercase">
                <MapPin className="size-3.5 text-primary-glow" />
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}