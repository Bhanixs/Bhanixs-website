import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: Pick<CaseStudy, "company" | "tone" | "logoUrl" | "screenshots">;
  variant?: "card" | "hero";
  className?: string;
};

export function CompanyLogoTile({ study, variant = "card", className = "" }: Props) {
  const isHero = variant === "hero";
  const cover = study.screenshots?.[0];
  const monogram = study.company
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-strong ${
        isHero ? "aspect-[16/8] sm:aspect-[16/7]" : "aspect-[16/10]"
      } ${className}`}
    >
      {cover ? (
        <>
          <img
            src={cover.src}
            alt={cover.label}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </>
      ) : study.logoUrl ? (
        <div className="absolute inset-0 bg-surface-card" />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${study.tone} opacity-90`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0_0_0_/_0.35)_0%,transparent_60%)]" />
        </>
      )}

      {cover ? (
        study.logoUrl && (
          <div
            className={`absolute left-3 top-3 z-10 flex items-center justify-center rounded-lg bg-white shadow-[0_4px_16px_-4px_oklch(0_0_0_/_0.6)] ${
              isHero ? "h-10 w-32 px-3" : "h-7 w-20 px-2"
            }`}
          >
            <img
              src={study.logoUrl}
              alt={`${study.company} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )
      ) : (
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          {study.logoUrl ? (
            <div
              className={`flex items-center justify-center rounded-xl bg-white ${
                isHero ? "h-16 w-48 px-5" : "h-11 w-32 px-4"
              }`}
            >
              <img
                src={study.logoUrl}
                alt={`${study.company} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : (
            <div
              className={`font-display tracking-tight text-foreground/95 drop-shadow-[0_2px_30px_oklch(0_0_0_/_0.5)] ${
                isHero ? "text-6xl sm:text-7xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {study.company.length <= 14 ? study.company : monogram}
            </div>
          )}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.12)]" />
    </div>
  );
}
