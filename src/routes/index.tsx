import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Calculator } from "@/components/sections/Calculator";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhanix — Deeptech engineering for frontier teams" },
      { name: "description", content: "Senior squads shipping production AI, robotics, blockchain, and spatial systems. Book a call." },
      { property: "og:title", content: "Bhanix — Deeptech engineering for frontier teams" },
      { property: "og:description", content: "Senior squads shipping production AI, robotics, blockchain, and spatial systems." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Process />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Calculator />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
