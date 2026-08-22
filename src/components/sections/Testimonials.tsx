import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logoUrl: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We had 200+ artisans and no way to get them online. BHANIXS didn't just build us a storefront — they gave us a supply chain dashboard that tracks every piece from workshop to doorstep. Eight weeks from kickoff to MVP, and we were live.",
    name: "Vignesh",
    role: "Founder & CEO",
    company: "Vivium",
    logoUrl: "/logo%27s/Copy%20of%20vivium%20logo.jpg.jpeg",
  },
  {
    quote:
      "Most technology partners give you a deck. BHANIXS gave us DAO governance, a working carbon credit market, and live IoT sensor data — all shipped, all in production, all ours. That's the difference between a vendor and a co-builder.",
    name: "Ramachandran KP",
    role: "Founder & CEO",
    company: "Erthaloka",
    logoUrl: "/logo%27s/Copy%20of%20Erthaloka%20Green%20Logo.png",
  },
  {
    quote:
      "We needed AR and VR that worked on phones people already own, not a lab demo. BHANIXS took our BIM files and got them into AR in under five minutes, and shipped three production apps across iOS, Android, and Quest on one shared pipeline.",
    name: "Prapull TM",
    role: "Founder & CEO",
    company: "Arteco",
    logoUrl: "/logo%27s/arteco.png",
  },
];

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
            What founders say.
          </h2>
        </div>

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface-card shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06),0_20px_60px_-30px_oklch(0_0_0_/_0.8)]">
            <Quote className="pointer-events-none absolute right-8 top-8 size-24 text-primary/10" />
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative px-8 py-12 sm:px-16 sm:py-16"
            >
              <p className="max-w-3xl font-display text-xl sm:text-2xl lg:text-3xl tracking-tight leading-snug text-foreground/95 text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-white p-2 shadow-[0_4px_16px_-4px_oklch(0_0_0_/_0.6)]">
                  <img
                    src={t.logoUrl}
                    alt={`${t.company} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-base tracking-tight">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => go(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-1.5 bg-border-strong hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="grid size-10 place-items-center rounded-full border border-border-strong text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="grid size-10 place-items-center rounded-full border border-border-strong text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
