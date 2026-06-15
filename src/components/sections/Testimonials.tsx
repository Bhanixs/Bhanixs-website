import { Eyebrow } from "@/components/ui/eyebrow";

const items = [
  {
    quote:
      "Bhanix shipped a production RAG pipeline in 6 weeks that our last vendor quoted us 9 months for. Senior team, zero hand-holding.",
    name: "David M.",
    role: "VP Engineering, Vertex Solutions",
  },
  {
    quote:
      "Our robotics fleet was bleeding latency. Their squad rewrote the control loop and we are now 12x faster. They actually understand silicon.",
    name: "Sarah L.",
    role: "CTO, BrightPath Robotics",
  },
  {
    quote:
      "From audited smart contracts to a custom prover, they delivered our L2 to mainnet in 11 weeks. Calm under pressure.",
    name: "Leo V.",
    role: "Founder, FluxGrid",
  },
  {
    quote:
      "Spatial computing felt like a black box until Bhanix. They built our Vision Pro training simulator and our surgeons love it.",
    name: "Clara D.",
    role: "Head of Product, NovaPath Health",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
            What teams say.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border-strong bg-surface-card p-8 hover:border-primary/40 hover:bg-surface-card-hover transition-colors shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06)]"
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight text-balance">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="grid size-10 place-items-center rounded-full bg-primary/20 text-primary-glow font-mono text-sm">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}