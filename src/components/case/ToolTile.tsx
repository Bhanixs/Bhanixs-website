import { icons, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ToolTile({ name, icon }: { name: string; icon: string }) {
  const Icon = ((icons as unknown as Record<string, LucideIcon>)[icon] ?? Box) as LucideIcon;
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative grid size-20 place-items-center rounded-2xl overflow-hidden border border-border-strong bg-surface-card shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/5" />
        <Icon className="relative size-9 text-primary-glow" strokeWidth={1.6} />
      </div>
      <div className="text-sm text-foreground/85">{name}</div>
    </div>
  );
}