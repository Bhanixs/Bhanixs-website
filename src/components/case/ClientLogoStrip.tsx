export const clientLogos = [
  { name: "Erthaloka", src: "/logo%27s/Copy%20of%20Erthaloka%20Green%20Logo.png" },
  { name: "Arteco", src: "/logo%27s/arteco.png" },
  { name: "Cravent", src: "/logo%27s/cravent-logo-trimmed.png" },
  { name: "Travellers Triibe", src: "/logo%27s/Copy%20of%20Artboard%209%20transparent.png" },
  { name: "XplorED", src: "/logo%27s/Copy%20of%20Artboard%202.png" },
  { name: "Vivium", src: "/logo%27s/Copy%20of%20vivium%20logo.jpg.jpeg" },
];

export function ClientLogoStrip({ label = "Companies we have made defensible" }: { label?: string }) {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="flex h-40 w-72 shrink-0 items-center justify-center rounded-3xl border border-border-strong bg-white p-8 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-[1.03]"
            >
              <img src={l.src} alt={l.name} className="max-h-24 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
