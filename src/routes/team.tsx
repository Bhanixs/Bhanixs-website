import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Axon Deeptech" },
      { name: "description", content: "The engineers, designers, and researchers behind Axon's frontier work." },
      { property: "og:title", content: "Team — Axon Deeptech" },
      { property: "og:description", content: "Meet the team shipping AI, robotics, blockchain, and spatial systems." },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  tone: string;
};

const team: Member[] = [
  { name: "Aarav Mehta", role: "Founder · Engineering", bio: "Systems architect across AI, blockchain, and spatial. 12+ years shipping production deeptech.", tone: "from-emerald-500/30 to-indigo-500/10" },
  { name: "Naomi Park", role: "Head of AI", bio: "Builds agentic systems and ML pipelines. Previously research engineering at a frontier lab.", tone: "from-purple-500/30 to-indigo-500/10" },
  { name: "Diego Alvarez", role: "Robotics Lead", bio: "Sensor mesh, firmware, and on-device inference for industrial robotics.", tone: "from-cyan-500/25 to-indigo-500/10" },
  { name: "Priya Raman", role: "Blockchain Lead", bio: "Audited Solidity contracts, NFT markets, and DAO governance in production.", tone: "from-pink-500/25 to-indigo-500/10" },
  { name: "Marcus Lee", role: "Cloud & DevOps", bio: "Multi-region infra, observability, and zero-downtime deploys at scale.", tone: "from-amber-500/25 to-indigo-500/10" },
  { name: "Sana Iqbal", role: "Design Engineering", bio: "Bridges product design and engineering — spatial UI, design systems, motion.", tone: "from-indigo-500/30 to-blue-500/10" },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-44 pb-16">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Team</Eyebrow>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl tracking-tight leading-[1] text-balance mx-auto max-w-4xl">
            Meet the team behind the systems.
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground text-pretty">
            Engineers, researchers, and designers shipping production deeptech for frontier teams.
          </p>
        </div>
      </section>
      <section className="pb-32 pt-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="group rounded-3xl border border-border-strong bg-surface-card p-5 hover:border-primary/50 hover:bg-surface-card-hover hover:-translate-y-0.5 transition-all duration-300 shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06)]"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border-strong aspect-[4/3]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.tone} opacity-90`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0_0_0_/_0.35)_0%,transparent_60%)]" />
                  <div className="relative z-10 grid h-full place-items-center">
                    <span className="font-display text-6xl text-foreground/95 drop-shadow-[0_2px_30px_oklch(0_0_0_/_0.5)]">
                      {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-display text-xl tracking-tight">{m.name}</h3>
                  <div className="mt-1 text-xs font-mono uppercase tracking-widest text-primary-glow">{m.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}