import { Eyebrow } from "@/components/ui/eyebrow";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/case/CaseStudyCard";

export function CaseStudies() {
  return (
    <section className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <Eyebrow>More Case Studies</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
              More Success Stories.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground border-b border-primary/40 pb-1 self-center md:self-end"
          >
            See all case studies <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-5 sm:gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 4).map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
