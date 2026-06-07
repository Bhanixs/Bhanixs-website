import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/pill-button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSphere = lazy(() =>
  import("@/components/three/HeroSphere").then((m) => ({ default: m.HeroSphere }))
);

const logos = [
  "ERTHALOKA",
  "ARTECO",
  "CRAVENT",
  "TRAVELLERS TRIIBE",
  "VALONK",
  "XPLORED",
  "VIVIUM",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44 pb-24">
      <div className="absolute inset-0 hero-gradient pointer-events-none" aria-hidden />

      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[680px] sm:size-[820px]"
        aria-hidden
      >
        <Suspense fallback={null}>
          <HeroSphere />
        </Suspense>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-xl px-3 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-primary-glow" />
          Q3 engagements open — limited capacity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance max-w-4xl"
        >
          Engineer the future.
          <br />
          <span className="text-foreground/70">Ship the impossible.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty leading-relaxed"
        >
          Axon is a deeptech engineering studio building production-grade AI,
          robotics, blockchain, and spatial systems for teams pushing the
          frontier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <PillLink to="/contact" variant="primary" size="lg">
            Book a Call <ArrowRight className="size-4" />
          </PillLink>
          <PillLink to="/services" variant="ghost" size="lg">
            Our Services
          </PillLink>
        </motion.div>

        <div className="mt-28 sm:mt-40">
          <div className="eyebrow mb-6">Trusted by 60+ frontier teams</div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 whitespace-nowrap animate-marquee">
              {[...logos, ...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-2xl tracking-[0.3em] text-muted-foreground/40"
                >
                  {l}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}