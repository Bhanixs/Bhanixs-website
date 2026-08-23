import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { PatentForEquity } from "@/components/sections/PatentForEquity";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BHANIXS — Technology Firm" },
      { name: "description", content: "Proprietary technology co-building in AI, blockchain, and spatial computing. Patent-for-Equity alignment. Based in Bengaluru." },
      { property: "og:title", content: "BHANIXS — Technology Firm" },
      { property: "og:description", content: "Proprietary technology co-building in AI, blockchain, and spatial computing. Patent-for-Equity alignment." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Process />
      <PatentForEquity />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
