import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CompanyLogoTile } from "./CompanyLogoTile";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ study, index = 0 }: { study: CaseStudy; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
    >
      <Link
        to="/case-studies/$slug"
        params={{ slug: study.slug }}
        className="group block rounded-3xl border border-border-strong bg-surface-card p-4 sm:p-5 hover:border-primary/50 hover:bg-surface-card-hover hover:-translate-y-0.5 transition-all duration-300 shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06),0_10px_40px_-20px_oklch(0_0_0_/_0.8)]"
      >
        <CompanyLogoTile study={study} />
        <div className="px-2 pt-5 pb-3">
          <div className="flex items-center justify-between gap-3">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {study.company} · <span className="text-foreground/70 normal-case tracking-normal">{study.domain}</span>
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <h3 className="mt-3 font-display text-xl sm:text-2xl tracking-tight leading-snug text-balance">
            How {study.company} {study.title.toLowerCase().startsWith("a ") ? study.title.slice(2) : study.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}