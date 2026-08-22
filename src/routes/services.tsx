import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProofCollage } from "@/components/case/ProofCollage";
import { ClientLogoStrip } from "@/components/case/ClientLogoStrip";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BHANIXS" },
      { name: "description", content: "AI & Machine Learning, Blockchain & Decentralised Infrastructure, and AR/VR engineering — shipped by a senior team." },
      { property: "og:title", content: "Services — BHANIXS" },
      { property: "og:description", content: "AI, blockchain, and spatial computing engineering services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance max-w-4xl">
              Three domains. <span className="text-foreground/70">Infinite defensibility.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              Each engagement is led by a principal engineer and ships
              proprietary, production code on a weekly cadence.
            </p>

            <div className="mt-16">
              <ClientLogoStrip />
            </div>
          </div>
          <ProofCollage className="h-96" />
        </div>
      </section>
      <Services />
      <Process />
      <CtaBand />
    </>
  );
}