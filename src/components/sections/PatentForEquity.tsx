import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-button";

export function PatentForEquity() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface-card p-10 sm:p-16">
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
          <div className="absolute -left-24 -top-24 size-[360px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <Eyebrow>Co-Creation, Layered Ownership</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
                You own the application. We retain the method.
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                We co-build proprietary systems where you own the domain
                application and the product — patent-eligible, fundable, and
                fully yours. Bhanixs retains the underlying architectural
                methods that made it possible, and takes an equity stake
                commensurate with our contribution. A long-term technology
                partnership, not a transactional delivery.
              </p>
              <PillLink to="/about" hash="engagement-models" variant="ghost" size="md" className="mt-6">
                How our engagement models work
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
