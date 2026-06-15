import { PillLink } from "@/components/ui/pill-button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function CtaBand() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-surface-card p-10 sm:p-16 text-center">
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 size-[400px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          <div className="relative">
            <Eyebrow className="justify-center">Ready when you are</Eyebrow>
            <h2 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight leading-[1] text-balance">
              Engineer something <br className="hidden sm:inline" />
              the world hasn&rsquo;t seen.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-pretty">
              Tell us about the system you want to build. We&rsquo;ll come back with
              a focused plan within 48 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PillLink to="/contact" variant="primary" size="lg">
                Book a call
              </PillLink>
              <PillLink to="/case-studies" variant="ghost" size="lg">
                See our work
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}