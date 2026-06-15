import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBand } from "@/components/sections/CtaBand";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/case/CaseStudyCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bhanix" },
      { name: "description", content: "Every system Bhanix has shipped — across Web3, AR/VR, Agentic AI, Cloud, EdTech, Travel, and E-commerce." },
      { property: "og:title", content: "Projects — Bhanix" },
      { property: "og:description", content: "Every system Bhanix has shipped — across deeptech verticals." },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", ...Array.from(new Set(caseStudies.map((c) => c.category)))];

function ProjectsPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active)),
    [active]
  );

  return (
    <>
      <section className="relative pt-44 pb-16">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance mx-auto max-w-4xl">
            Every system we&rsquo;ve shipped.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Filter by domain. Each project covers multiple services — tap any card for the full breakdown.
          </p>
        </div>
      </section>

      <section className="relative py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-mono tracking-wide transition-all ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border-strong bg-surface-card text-muted-foreground hover:text-foreground hover:bg-surface-card-hover"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
            {filtered.map((c, i) => (
              <CaseStudyCard key={c.slug} study={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
