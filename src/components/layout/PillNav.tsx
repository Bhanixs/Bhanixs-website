import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PillLink } from "@/components/ui/pill-button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
];

export function PillNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "pt-3" : "pt-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-2xl bg-card/70 backdrop-blur-xl border border-border px-3.5 py-2.5 shadow-[var(--shadow-card)]"
          >
            <span className="grid size-7 place-items-center rounded-md bg-primary shadow-[var(--shadow-glow)]">
              <span className="block size-3 rounded-sm bg-primary-foreground/90" />
            </span>
            <span className="font-display font-semibold tracking-tight">Axon</span>
          </Link>

          <nav className="hidden md:flex items-center rounded-full bg-card/70 backdrop-blur-xl border border-border px-2 py-2 shadow-[var(--shadow-card)]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground rounded-full transition-colors hover:bg-secondary/60"
                activeProps={{ className: "text-foreground bg-secondary/80" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <PillLink to="/contact" variant="white" size="sm" className="hidden sm:inline-flex">
              Book a Call
            </PillLink>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden grid size-11 place-items-center rounded-full bg-card/70 border border-border backdrop-blur-xl"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-in fade-in">
          <div className="flex items-center justify-between px-6 pt-6">
            <Link to="/" onClick={() => setOpen(false)} className="font-display font-semibold text-lg">
              Axon
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-border"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-16 flex flex-col items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-3xl font-display tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-3xl font-display tracking-tight text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}