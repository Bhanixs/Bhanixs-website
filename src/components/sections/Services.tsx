import { Eyebrow } from "@/components/ui/eyebrow";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Brain, Boxes, Glasses, ArrowRight } from "lucide-react";

const services = [
  {
    slug: "ai",
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    body: "Generative AI, LLM deployment, computer vision, NLP, predictive analytics, edge AI, and MLOps — product intelligence and decision systems built for production, not a demo.",
    chips: ["Generative AI", "LLM Deployment", "RAG", "MLOps"],
    mock: <ModelMock />,
  },
  {
    slug: "blockchain",
    icon: Boxes,
    title: "Blockchain & Distributed Ledger Technology",
    body: "Smart contracts, DeFi infrastructure, NFT architecture, DAO structures, and Web3 product development — trust infrastructure clients own outright.",
    chips: ["Smart Contracts", "DeFi", "DAO Structures", "Tokenisation"],
    mock: <ChainMock />,
  },
  {
    slug: "ar-vr",
    icon: Glasses,
    title: "Augmented & Virtual Reality",
    body: "Spatial computing, mixed reality, XR product development, and 3D environment engineering — training simulations, immersive commerce, and industrial AR.",
    chips: ["Spatial Computing", "Mixed Reality", "XR Product", "3D Engineering"],
    mock: <SpatialMock />,
  },
];

function ModelMock() {
  return (
    <div className="font-mono text-[10px] text-muted-foreground space-y-1.5">
      <div className="flex justify-between"><span>epoch 142 / 250</span><span className="text-primary-glow">loss 0.0142</span></div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className="h-full w-[57%] bg-gradient-to-r from-primary to-primary-glow animate-pulse-soft" />
      </div>
      <div className="flex justify-between"><span>val_acc</span><span className="text-foreground">0.948</span></div>
      <div className="flex justify-between"><span>tokens/sec</span><span className="text-foreground">28,412</span></div>
    </div>
  );
}

function ChainMock() {
  return (
    <div className="font-mono text-[10px] space-y-1.5">
      <div className="flex justify-between text-muted-foreground"><span>block</span><span className="text-foreground">#18,492,331</span></div>
      <div className="rounded-md border border-border bg-background/40 px-2.5 py-2 truncate text-primary-glow">
        0x4f46e5a7c9d3...e8b2
      </div>
      <div className="flex gap-1">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex-1 h-1 rounded-full bg-primary/40 animate-pulse-soft" style={{ animationDelay: `${i*0.15}s` }} />
        ))}
      </div>
    </div>
  );
}

function SpatialMock() {
  return (
    <div className="relative h-16 grid place-items-center">
      <div className="absolute size-12 rounded-lg border border-primary/40 rotate-45 animate-float" />
      <div className="absolute size-8 rounded-lg border border-primary-glow/60 -rotate-12" />
      <div className="size-3 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
              What we engineer.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-pretty">
            Three domains, one senior team. Every engagement ships proprietary,
            production code — not slide decks.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isWide = i === services.length - 1 && services.length % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={isWide ? "md:col-span-2" : ""}
              >
                <Link
                  to="/services/$domain"
                  params={{ domain: s.slug }}
                  className="group relative block rounded-3xl border border-border-strong bg-surface-card p-8 overflow-hidden hover:border-primary/40 transition-all hover:bg-surface-card-hover shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06),0_10px_40px_-20px_oklch(0_0_0_/_0.8)]"
                >
                  <div className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className={isWide ? "relative grid md:grid-cols-2 gap-8 items-center" : ""}>
                    <div className={`relative rounded-2xl border border-border-strong bg-background/80 p-5 ${isWide ? "md:order-2" : "mb-8"}`}>
                      {s.mock}
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
                        <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {s.chips.map((c) => (
                            <span key={c} className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground border border-border rounded-full px-2.5 py-1">
                              {c}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow">
                          Explore domain
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}