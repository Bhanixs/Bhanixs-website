import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("eyebrow flex items-center gap-2", className)}>
      <span className="size-1.5 rounded-full bg-eyebrow animate-pulse-soft" />
      {children}
    </div>
  );
}