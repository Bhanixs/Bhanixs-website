import { Eyebrow } from "@/components/ui/eyebrow";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { ArrowRight, Bot, Cpu, Database, Box, Sparkles, Zap, RotateCw } from "lucide-react";

type Step = {
  n: string;
  tag: string;
  title: string;
  body: string;
  mock: ReactNode;
};

/* ---------- Mock UI panels (one per step) ---------- */

function MockBrief() {
  const rows = [
    { label: "Vertical", value: "AI · Blockchain · AR/VR" },
    { label: "Model", value: "Patent-for-Equity" },
    { label: "Timeline", value: "1–2 week assessment" },
    { label: "NDA", value: "Signed day one" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse-soft" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            New brief · draft
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">NDA · signed</span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
            className="flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-card/60 px-3 py-2.5"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {r.label}
            </span>
            <span className="text-sm text-foreground/90 truncate">{r.value}</span>
          </motion.div>
        ))}
      </div>
      <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">
        Continue <ArrowRight className="size-3" />
      </button>
    </div>
  );
}

function MockEngineering() {
  const icons = [Bot, Cpu, Database, Box, Sparkles, Zap];
  return (
    <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          Build pipeline
        </span>
        <span className="font-mono text-[10px] text-primary-glow">live</span>
      </div>

      {/* Marquee row of stack icons */}
      <div className="relative mt-5 overflow-hidden">
        <div className="flex gap-3 whitespace-nowrap animate-marquee">
          {[...icons, ...icons, ...icons].map((Icon, i) => (
            <div
              key={i}
              className="shrink-0 grid place-items-center size-12 rounded-xl border border-border bg-card/60"
            >
              <Icon className="size-5 text-foreground/80" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent" />
      </div>

      {/* Progress bars */}
      <div className="mt-6 space-y-3">
        {[
          { l: "Architecture", p: 92 },
          { l: "Core services", p: 74 },
          { l: "Hardening", p: 41 },
        ].map((b) => (
          <div key={b.l}>
            <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <span>{b.l}</span>
              <span>{b.p}%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-border/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow animate-progress"
                style={{ ['--progress' as string]: `${b.p}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Spinning indicator */}
      <div className="mt-6 flex items-center justify-center">
        <div className="relative grid place-items-center size-16 rounded-full border border-primary/30">
          <RotateCw className="size-6 text-primary-glow animate-spin-slow" />
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
        </div>
      </div>
    </div>
  );
}

function MockLaunch() {
  return (
    <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          Production · p95 latency
        </span>
        <span className="text-[10px] font-mono text-emerald-400">↑ healthy</span>
      </div>

      {/* Sparkline / bars */}
      <div className="mt-5 flex items-end gap-1.5 h-28">
        {[40, 55, 38, 62, 48, 72, 58, 80, 65, 88, 74, 92].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            style={{ height: `${h}%`, transformOrigin: "bottom" }}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary-glow"
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { k: "99.98%", v: "Uptime" },
          { k: "42ms", v: "p95" },
          { k: "12x", v: "Throughput" },
        ].map((s) => (
          <div key={s.v} className="rounded-lg border border-border/60 bg-card/60 px-3 py-2.5">
            <div className="font-display text-lg leading-none">{s.k}</div>
            <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {s.v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-blink" />
        Deploy <span className="text-foreground/80">v4.12</span> rolling to edge…
      </div>
    </div>
  );
}

const steps: Step[] = [
  {
    n: "01",
    tag: "Assess",
    title: "Technology audit & strategic assessment.",
    body:
      "We understand your business before we touch the technology — vision, current state, market context. NDA on day one. The audit determines the exact architecture and proprietary assets required, in 1–2 weeks.",
    mock: <MockBrief />,
  },
  {
    n: "02",
    tag: "Co-Build",
    title: "Proprietary technology co-build.",
    body:
      "A senior squad ships architecture, prototypes, and production code in tight cycles — designed for defensibility from day one, not bolted on after. Weekly demos. You see everything.",
    mock: <MockEngineering />,
  },
  {
    n: "03",
    tag: "Scale",
    title: "Scale & strategic support.",
    body:
      "We stay embedded — supporting scaling, architecture evolution, and technical decision-making. This is where the engagement becomes a long-term partnership, not a handoff.",
    mock: <MockLaunch />,
  },
];

/* ---------- Sticky-stacked card ---------- */

function StickyCard({ step, index, total }: { step: Step; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle scale-down as next card overlaps
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.7]);
  const topOffset = 96 + index * 28; // staggered sticky stack

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${topOffset}px` }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-[var(--shadow-card)]"
      >
        {/* glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 size-72 rounded-full bg-primary-glow/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-full bg-primary text-primary-foreground font-display text-sm">
              {step.n}
            </span>
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-primary-glow">
              Step {index + 1} / {total} · {step.tag}
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
            {step.title}
          </h3>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
            {step.body}
          </p>
        </div>

        <div className="relative">{step.mock}</div>
      </motion.article>
    </div>
  );
}

export function Process() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight text-balance leading-[1.05]">
            How it works.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            A focused, senior team. Three deliberate phases. No bloat, no
            agency overhead.
          </p>
        </div>

        {/* Sticky stack — each card pins with a staggered top offset, the next slides up over it */}
        <div className="relative mt-20 space-y-6">
          {steps.map((s, i) => (
            <StickyCard key={s.n} step={s} index={i} total={steps.length} />
          ))}
          {/* trailing space so the last card has room to scroll into its pinned state */}
          <div className="h-[20vh]" aria-hidden />
        </div>
      </div>
    </section>
  );
}