import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: Pick<CaseStudy, "company" | "tone" | "logoUrl">;
  variant?: "card" | "hero";
  className?: string;
};

export function CompanyLogoTile({ study, variant = "card", className = "" }: Props) {
  const isHero = variant === "hero";
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
      {study.logoUrl ? (
        <div className="absolute inset-0 bg-surface-card" />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${study.tone} opacity-90`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0_0_0_/_0.35)_0%,transparent_60%)]" />
        </>
      )}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        {study.logoUrl ? (
          <div className="bg-white rounded-xl px-5 py-2.5 flex items-center justify-center">
            <img
              src={study.logoUrl}
              alt={`${study.company} logo`}
              className={isHero ? "max-h-20 max-w-xs object-contain" : "max-h-12 max-w-[180px] object-contain"}
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
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.12)]" />
    </div>
  );
}