import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-button";
import { CtaBand } from "@/components/sections/CtaBand";
import { caseStudies, getCaseStudy, getChildCaseStudies, type CaseStudy } from "@/data/caseStudies";
import { CompanyLogoTile } from "@/components/case/CompanyLogoTile";
import { GradientNumber } from "@/components/case/GradientNumber";
import { CaseStudyCard } from "@/components/case/CaseStudyCard";
import { ToolTile } from "@/components/case/ToolTile";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    const children = getChildCaseStudies(params.slug);
    const parent = study.parentSlug ? (getCaseStudy(study.parentSlug) ?? null) : null;
    const more = caseStudies
      .filter((c) => c.slug !== study.slug && !study.childSlugs?.includes(c.slug) && c.parentSlug !== study.slug)
      .slice(0, 2);
    return { study, more, children, parent };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    if (!s) return { meta: [{ title: "Case study not found — Axon" }] };
    return {
      meta: [
        { title: `${s.company} — ${s.title} | Axon Case Study` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.company} — ${s.title}` },
        { property: "og:description", content: s.summary },
      ],
    };
  },
  component: CaseStudyDetail,
  notFoundComponent: NotFoundCase,
  errorComponent: CaseError,
});

function NotFoundCase() {
  const { slug } = Route.useParams();
  return (
    <section className="pt-44 pb-32 mx-auto max-w-3xl px-6 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-display text-4xl">Case study &ldquo;{slug}&rdquo; not found.</h1>
      <p className="mt-4 text-muted-foreground">It may have moved or been renamed.</p>
      <div className="mt-8">
        <PillLink to="/projects">See all projects</PillLink>
      </div>
    </section>
  );
}

function CaseError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <section className="pt-44 pb-32 mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
      <button
        onClick={() => { router.invalidate(); reset(); }}
        className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm text-primary-foreground"
      >
        Try again
      </button>
    </section>
  );
}

function CaseStudyDetail() {
  const { study, more, children, parent } = Route.useLoaderData() as {
    study: CaseStudy;
    more: CaseStudy[];
    children: CaseStudy[];
    parent: CaseStudy | null;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className={`absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b ${study.tone} blur-3xl opacity-50 pointer-events-none`} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <Link
              to="/case-studies"
              className="inline-grid size-11 place-items-center rounded-full border border-border-strong bg-surface-card text-foreground/80 hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Back to case studies"
            >
              <ArrowLeft className="size-4" />
            </Link>
            {parent && (
              <Link
                to="/case-studies/$slug"
                params={{ slug: parent.slug }}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="size-3" />
                Part of {parent.company}
              </Link>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mx-auto max-w-4xl"
          >
            {study.hero.headline}
          </motion.h1>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Meta label="Industry" value={study.industry} />
            <Meta label="Client Type" value={study.clientType} />
            <Meta label="Focus Area" value={study.focusArea} />
          </div>
          <div className="mt-14">
            <CompanyLogoTile study={study} variant="hero" />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow>Challenge</Eyebrow>
          <p className="mt-6 font-display text-2xl sm:text-3xl tracking-tight leading-snug text-foreground/95 text-balance">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-balance max-w-4xl">
            {study.solutionsIntro}
          </h2>
          <div className="mt-10 border-t border-border pt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {study.solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <GradientNumber n={i + 1} className="text-7xl sm:text-8xl" />
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Saving Time. Boosting Output.
          </h2>
          <div className="mt-10 border-t border-border pt-12 grid gap-10 sm:grid-cols-3">
            {study.stats.map((s) => (
              <div key={s.v}>
                <GradientNumber n={s.k} className="text-6xl sm:text-7xl" />
                <div className="mt-4 text-sm text-muted-foreground max-w-[16ch]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool stack */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Tool Stack</Eyebrow>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            What Powered the Build
          </h2>
          <div className="mt-10 border-t border-border pt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {study.tools.map((t) => (
              <ToolTile key={t.name} name={t.name} icon={t.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Products (children) */}
      {children.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Products</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              What We Built
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {children.map((c, i) => (
                <CaseStudyCard key={c.slug} study={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screenshots */}
      {study.screenshots && study.screenshots.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow>Screenshots</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Every Screen, Documented
            </h2>
            <div className="mt-10 border-t border-border pt-12 grid gap-5 sm:grid-cols-2">
              {study.screenshots.map((s) => (
                <motion.div
                  key={s.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden border border-border bg-surface-card shadow-[0_10px_40px_-20px_oklch(0_0_0_/_0.6)]"
                >
                  <img src={s.src} alt={s.label} className="w-full block" loading="lazy" />
                  <div className="px-4 py-3 border-t border-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {study.videos && study.videos.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-6xl px-6">
            <Eyebrow>Demo</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              See It in Action
            </h2>
            <div className="mt-10 border-t border-border pt-12 grid gap-5 sm:grid-cols-2">
              {study.videos.map((v) => (
                <motion.div
                  key={v.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden border border-border bg-surface-card shadow-[0_10px_40px_-20px_oklch(0_0_0_/_0.6)]"
                >
                  <video src={v.src} controls playsInline className="w-full block" />
                  <div className="px-4 py-3 border-t border-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{v.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client feedback */}
      {study.feedback && (
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.18_155_/_0.18)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Eyebrow>Client Feedback</Eyebrow>
            <p className="mt-8 font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug text-balance">
              &ldquo;{study.feedback.quote}&rdquo;
            </p>
            <div className="mt-10 inline-flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-display font-semibold">
                {study.feedback.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold">{study.feedback.name}</div>
                <div className="text-sm text-muted-foreground">{study.feedback.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* More */}
      {more.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <Eyebrow>More Case Studies</Eyebrow>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl tracking-tight">
                More Success Stories
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {more.map((c, i) => (
                <CaseStudyCard key={c.slug} study={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-foreground">{value}</div>
    </div>
  );
}