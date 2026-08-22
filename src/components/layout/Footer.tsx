import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "Production AI Systems" },
      { to: "/services", label: "Intelligent Automation" },
      { to: "/services", label: "Web3 & On-chain" },
      { to: "/services", label: "Spatial Computing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/brand/bhanixs-mark.png" alt="" className="size-8 object-contain" />
              <span className="font-display text-xl font-semibold">BHANIXS</span>
            </div>
            <p className="mt-6 text-pretty text-muted-foreground max-w-sm leading-relaxed">
              BHANIXS is the technology co-building entity of Bhanixs Group. We build
              proprietary AI, blockchain, and spatial computing technology as an
              embedded technical co-founder — not an external vendor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Bhanixs Group. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}