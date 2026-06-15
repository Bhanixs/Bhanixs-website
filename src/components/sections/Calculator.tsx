import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-button";
import { Slider } from "@/components/ui/slider";

export function Calculator() {
  const [team, setTeam] = useState(12);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(80);

  const { monthlyHours, monthlyCost, savings } = useMemo(() => {
    const monthlyHours = team * hours * 4;
    const monthlyCost = monthlyHours * rate;
    const savings = Math.round(monthlyCost * 0.75);
    return { monthlyHours, monthlyCost, savings };
  }, [team, hours, rate]);

  return (
    <section className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border-strong bg-surface-card p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Calculator</Eyebrow>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
                What is manual work costing you?
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                Move the sliders. We will show you the monthly hours and dollars
                your team is spending on work a Bhanix system could absorb.
              </p>

              <div className="mt-10 space-y-8">
                <Row label="Engineering team size" value={team}>
                  <Slider value={[team]} onValueChange={(v) => setTeam(v[0])} min={2} max={80} step={1} />
                </Row>
                <Row label="Weekly hours per engineer on repetitive work" value={`${hours} h`}>
                  <Slider value={[hours]} onValueChange={(v) => setHours(v[0])} min={1} max={40} step={1} />
                </Row>
                <Row label="Loaded hourly cost" value={`$${rate}`}>
                  <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={20} max={250} step={5} />
                </Row>
              </div>
            </div>

            <div className="rounded-2xl border border-border-strong bg-background/80 p-8">
              <div className="eyebrow">Monthly impact</div>
              <div className="mt-4 font-display text-5xl sm:text-6xl tracking-tight">
                ${savings.toLocaleString()}
              </div>
              <p className="mt-2 text-muted-foreground">
                Potential monthly savings with a Bhanix engagement.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Stat k={`${monthlyHours.toLocaleString()} h`} v="Lost to manual work" />
                <Stat k={`$${monthlyCost.toLocaleString()}`} v="Monthly drain" />
              </div>
              <PillLink to="/contact" variant="primary" className="mt-8 w-full">
                Get a custom engineering plan
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, children }: { label: string; value: string | number; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-mono text-sm text-foreground">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-4">
      <div className="font-display text-xl">{k}</div>
      <div className="mt-1 text-xs text-muted-foreground">{v}</div>
    </div>
  );
}