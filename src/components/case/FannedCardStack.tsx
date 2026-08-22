import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type StackModel = {
  k: string;
  icon: LucideIcon;
  what: string;
  who: string;
  comp: string;
};

const slotStyle = [
  { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 30, opacity: 1, filter: "saturate(1) brightness(1)" },
  { x: 36, y: 18, rotate: 8, scale: 0.94, zIndex: 20, opacity: 0.7, filter: "saturate(0.4) brightness(0.85)" },
  { x: -36, y: 30, rotate: -8, scale: 0.9, zIndex: 10, opacity: 0.55, filter: "saturate(0.4) brightness(0.75)" },
];

function Card({
  item,
  slot,
  onActivate,
}: {
  item: StackModel;
  slot: number;
  onActivate: () => void;
}) {
  const Icon = item.icon;
  const isFront = slot === 0;
  const style = slotStyle[slot] ?? slotStyle[slotStyle.length - 1];

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Show details for ${item.k}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      animate={style}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.6 }}
      className={cn(
        "absolute left-1/2 top-0 w-[300px] -translate-x-1/2 rounded-3xl border p-7 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isFront
          ? "bg-surface-card-hover border-primary/40 shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.8)]"
          : "bg-surface-card border-border-strong"
      )}
    >
      <div className="grid size-11 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 font-display text-xl tracking-tight">{item.k}</h3>
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">What it is</dt>
          <dd className={cn("mt-1 text-sm text-muted-foreground leading-relaxed", !isFront && "line-clamp-2")}>
            {item.what}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Who it&rsquo;s for</dt>
          <dd className={cn("mt-1 text-sm text-muted-foreground leading-relaxed", !isFront && "line-clamp-2")}>
            {item.who}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Compensation</dt>
          <dd className={cn("mt-1 text-sm text-muted-foreground leading-relaxed", !isFront && "line-clamp-2")}>
            {item.comp}
          </dd>
        </div>
      </dl>
    </motion.div>
  );
}

export function FannedCardStack({ items }: { items: StackModel[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Desktop: interactive fanned stack */}
      <div className="hidden lg:block relative h-[440px]">
        {items.map((item, i) => {
          const slot = (i - activeIndex + items.length) % items.length;
          return <Card key={item.k} item={item} slot={slot} onActivate={() => setActiveIndex(i)} />;
        })}
      </div>

      {/* Mobile / tablet: plain accessible stacked list, no fan */}
      <div className="grid gap-5 lg:hidden">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.k} className="rounded-3xl border border-border-strong bg-surface-card p-8">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight">{item.k}</h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">What it is</dt>
                  <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.what}</dd>
                </div>
                <div>
                  <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Who it&rsquo;s for</dt>
                  <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.who}</dd>
                </div>
                <div>
                  <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Compensation</dt>
                  <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.comp}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
    </>
  );
}
