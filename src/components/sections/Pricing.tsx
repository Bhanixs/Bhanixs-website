import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Sprint",
    monthly: 9800,
    yearly: 8800,
    desc: "Short, focused engagements. Prototype to validated POC.",
    features: [
      "Senior squad of 2 engineers",
      "4-week fixed scope",
      "Weekly demo cadence",
      "Working prototype handoff",
    ],
  },
  {
    name: "Production",
    monthly: 28000,
    yearly: 24000,
    desc: "Most teams pick this. Ship production systems.",
    featured: true,
    features: [
      "Senior squad of 4 engineers",
      "Quarterly engagement",
      "Architecture + delivery",
      "Observability & on-call",
      "Full IP transfer",
    ],
  },
  {
    name: "Embedded",
    monthly: null,
    desc: "Long-term partnerships with full embedded teams.",
    features: [
      "Custom squad composition",
      "Multi-quarter retainer",
      "Roadmap ownership",
      "Dedicated tech lead",
      "24/7 incident response",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
            Engagement models.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-pretty">
            Senior engineering at a fixed monthly rate. No agency markup, no
            offshore handoffs.
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-border bg-card/60 p-1">
            {[
              { v: false, label: "Monthly" },
              { v: true, label: "Yearly · save 12%" },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setYearly(opt.v)}
                className={cn(
                  "px-5 py-2 text-sm rounded-full transition-all",
                  yearly === opt.v
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "relative rounded-3xl border border-border bg-card/40 p-8 flex flex-col",
                t.featured && "border-primary/60 bg-card/70 shadow-[var(--shadow-glow)]"
              )}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-foreground">
                  Most picked
                </div>
              )}
              <div className="eyebrow">{t.name}</div>
              <div className="mt-6 flex items-baseline gap-2">
                {t.monthly === null ? (
                  <span className="font-display text-4xl">Let's talk</span>
                ) : (
                  <>
                    <span className="font-display text-5xl">
                      ${(yearly ? t.yearly! : t.monthly).toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/ month</span>
                  </>
                )}
              </div>
              <p className="mt-3 text-muted-foreground">{t.desc}</p>

              <PillLink
                to="/contact"
                variant={t.featured ? "primary" : "ghost"}
                className="mt-8 w-full"
              >
                {t.monthly === null ? "Talk to founders" : "Start engagement"}
              </PillLink>

              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="size-4 mt-0.5 text-primary-glow shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}