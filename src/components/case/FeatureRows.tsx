import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  k: string;
  icon: LucideIcon;
  v: string;
};

export const primary = (alpha: number) => `oklch(0.6 0.26 232 / ${alpha})`;

// Four distinct abstract CSS-only backdrop patterns — no stock imagery,
// each echoing its card's icon (grid/structural, build lines, target rings,
// node path) at low opacity behind a centered glow + icon. Shared with
// services_.$domain.tsx so domain hero visuals use the same visual language.
export const patterns: CSSProperties[] = [
  {
    backgroundImage: `radial-gradient(${primary(0.35)} 1px, transparent 1.5px)`,
    backgroundSize: "16px 16px",
  },
  {
    backgroundImage: `repeating-linear-gradient(45deg, ${primary(0.22)} 0px, ${primary(0.22)} 1px, transparent 1px, transparent 12px)`,
  },
  {
    backgroundImage: `repeating-radial-gradient(circle, ${primary(0.16)} 0px, ${primary(0.16)} 1px, transparent 1px, transparent 22px)`,
  },
  {
    backgroundImage: `radial-gradient(${primary(0.3)} 1.5px, transparent 1.5px)`,
    backgroundSize: "30px 30px",
  },
];

function VisualPanel({ icon: Icon, index }: { icon: LucideIcon; index: number }) {
  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-border-strong bg-surface-card shadow-[0_20px_50px_-24px_oklch(0_0_0_/_0.8)]">
      <div className="absolute inset-0" style={patterns[index % patterns.length]} aria-hidden />
      <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="relative flex h-full items-center justify-center">
        <div className="grid size-20 place-items-center rounded-3xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow shadow-[var(--shadow-glow)]">
          <Icon className="size-9" />
        </div>
      </div>
    </div>
  );
}

export function FeatureRows({ items }: { items: FeatureItem[] }) {
  return (
    <div className="mt-16 space-y-16 lg:space-y-24">
      {items.map((item, i) => {
        const reversed = i % 2 === 1;
        return (
          <motion.div
            key={item.k}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              "flex flex-col items-center gap-8 lg:flex-row lg:gap-16",
              reversed && "lg:flex-row-reverse"
            )}
          >
            <div className="w-full lg:w-1/2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-glow">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight">{item.k}</h3>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">{item.v}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <VisualPanel icon={item.icon} index={i} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
