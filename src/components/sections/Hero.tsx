import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/pill-button";
import { ArrowRight } from "lucide-react";

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
    <>
      {/* ── Full-screen video hero ── */}
      <section className="relative h-screen overflow-hidden">
        <video
          src="/bg-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />

        {/* Minimal top strip — just enough for nav text, touches ~15% of screen */}
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent pointer-events-none"
          aria-hidden
        />

        {/* Bottom strip — tight gradient, video fully visible above this */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent pt-32 pb-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.93] tracking-tight"
              >
                Engineer the future.{" "}
                <span className="text-foreground/65">Ship the impossible.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-shrink-0 sm:pb-2"
              >
                <PillLink to="/contact" variant="primary" size="lg">
                  Book a Call <ArrowRight className="size-4" />
                </PillLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo marquee — sits right below the video, no label ── */}
      <div className="border-b border-border bg-background py-7">
        <div className="mx-auto max-w-7xl px-6">
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
    </>
  );
}
