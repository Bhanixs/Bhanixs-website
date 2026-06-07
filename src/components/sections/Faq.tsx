import { Eyebrow } from "@/components/ui/eyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "What does an engagement look like?",
    a: "We start with a 1-week discovery (free for qualified teams), then move into focused sprints. You get a senior squad, weekly demos, and full IP transfer.",
  },
  {
    q: "Who owns the IP and the code?",
    a: "You own everything from commit one. No vendor lock-in, no shared repos, no licensing games.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We run a Sprint tier specifically for pre-seed and seed teams who need to validate hard technical bets fast.",
  },
  {
    q: "What stacks do you cover?",
    a: "Python / PyTorch / Triton, Rust, TypeScript, ROS2, Solidity, Cairo, Unreal 5, Swift / VisionOS. We pick the right tool for the job.",
  },
  {
    q: "Can you sign NDA and security agreements?",
    a: "We sign mutual NDA on day one. We hold SOC2-compatible practices and can work inside your security perimeter.",
  },
  {
    q: "How fast can you start?",
    a: "Typically within 2 weeks. For urgent engagements we have surge capacity available — get on a call.",
  },
];

export function Faq() {
  return (
    <section className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Eyebrow className="justify-center">FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
            Common questions.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-16 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card/40 px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left font-display text-lg tracking-tight hover:no-underline py-5">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}