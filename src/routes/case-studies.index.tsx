import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/case/CaseStudyCard";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Bhanix" },
      { name: "description", content: "Production deeptech systems Bhanix has shipped — robotics, AI, blockchain, and spatial." },
      { property: "og:title", content: "Case Studies — Bhanix" },
      { property: "og:description", content: "Selected work across robotics, AI, blockchain, and spatial systems." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-44 pb-16">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance mx-auto max-w-4xl">
            Systems we&rsquo;ve shipped.
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground text-pretty">
            Each company below trusted us with multiple engagements. Tap any card for the full breakdown.
          </p>
        </div>
      </section>
      <section className="relative pb-32 border-t border-border pt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {caseStudies.filter((c) => !c.parentSlug).map((c, i) => (
              <CaseStudyCard key={c.slug} study={c} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
