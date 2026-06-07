import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110",
  ghost:
    "bg-secondary/60 text-foreground border border-border hover:bg-secondary",
  white:
    "bg-foreground text-background hover:bg-foreground/90",
};

type BaseProps = {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function PillButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function PillLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
}: BaseProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </Link>
  );
}