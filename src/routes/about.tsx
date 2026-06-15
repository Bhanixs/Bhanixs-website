import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhanix" },
      { name: "description", content: "Bhanix is a small studio of senior engineers building production deeptech systems for frontier teams." },
      { property: "og:title", content: "About — Bhanix" },
      { property: "og:description", content: "A small studio of senior engineers shipping production deeptech." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { k: "Senior only", v: "No juniors, no offshore. Every commit comes from a principal engineer." },
  { k: "Production first", v: "We ship to mainnet, to fleet, to App Store. Slide decks are not deliverables." },
  { k: "You own everything", v: "Full IP transfer from commit one. We are mercenaries, not landlords." },
  { k: "Calm under pressure", v: "We have shipped during outages, audits, and 4am pager calls. The work continues." },
];

const locations = ["London", "San Francisco", "Berlin", "Singapore"];

export default AboutPage;

function AboutPage() {
  return (
    <>
      <section className="relative pt-44 pb-24">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance max-w-4xl">
            A small studio for <span className="text-foreground/70">hard problems.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            Bhanix was founded by a group of engineers who had spent a decade
            shipping deeptech inside Boston Dynamics, DeepMind, Anduril, and
            Coinbase. We started Bhanix to do the same work without the
            corporate gravity — for teams that need to move fast and build
            things that haven&rsquo;t been built before.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Principles</Eyebrow>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.k} className="rounded-3xl border border-border-strong bg-surface-card p-8">
                <h3 className="font-display text-2xl tracking-tight">{p.k}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Eyebrow>Locations</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight">
              Distributed by design.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {locations.map((l) => (
              <span key={l} className="rounded-full border border-border-strong bg-surface-card px-5 py-2 font-mono text-xs tracking-widest uppercase">
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