import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Calculator } from "@/components/sections/Calculator";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Axon Deeptech" },
      { name: "description", content: "Senior engineering at fixed monthly rates. Sprint, Production, and Embedded engagement models." },
      { property: "og:title", content: "Pricing — Axon Deeptech" },
      { property: "og:description", content: "Sprint, Production, and Embedded engagement models." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="relative pt-44 pb-8">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance">
            Senior squads. <span className="text-foreground/70">Fixed rates.</span>
          </h1>
        </div>
      </section>
      <Pricing />
      <Calculator />
      <Faq />
      <CtaBand />
    </>
  );
}