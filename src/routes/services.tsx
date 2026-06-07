import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/eyebrow";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Axon Deeptech" },
      { name: "description", content: "AI / ML, robotics & embedded, blockchain, and AR/VR engineering — shipped by senior squads." },
      { property: "og:title", content: "Services — Axon Deeptech" },
      { property: "og:description", content: "AI / ML, robotics, blockchain, and spatial engineering services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-44 pb-16">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance max-w-4xl">
            Four verticals. <span className="text-foreground/70">One senior team.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            Each engagement is led by a principal engineer and ships
            production code on a weekly cadence.
          </p>
        </div>
      </section>
      <Services />
      <Process />
      <CtaBand />
    </>
  );
}