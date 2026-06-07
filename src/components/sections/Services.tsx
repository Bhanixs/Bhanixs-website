import { Eyebrow } from "@/components/ui/eyebrow";
import { motion } from "framer-motion";
import { Brain, Cpu, Boxes, Glasses } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    body: "Custom transformer training, RAG pipelines, computer vision, evals, and inference infra ready for production scale.",
    chips: ["LLM Fine-tuning", "Computer Vision", "RAG", "Evals"],
    mock: <ModelMock />,
  },
  {
    icon: Cpu,
    title: "Robotics & Embedded",
    body: "Real-time control, sensor fusion, ROS2 stacks, and edge inference — from prototype to fleet deployment.",
    chips: ["ROS2", "Sensor Fusion", "FPGA", "Edge AI"],
    mock: <TelemetryMock />,
  },
  {
    icon: Boxes,
    title: "Blockchain Architecture",
    body: "ZK-rollups, smart-contract audits, institutional-grade protocols and on-chain primitives that hold up.",
    chips: ["ZK Rollups", "Solidity", "Audits", "L2"],
    mock: <ChainMock />,
  },
  {
    icon: Glasses,
    title: "AR / VR & Spatial",
    body: "Industrial digital twins, immersive training simulations, and spatial computing interfaces for Vision Pro and Quest.",
    chips: ["Unreal 5", "WebXR", "Digital Twins", "VisionOS"],
    mock: <SpatialMock />,
  },
];

function ModelMock() {
  return (
    <div className="font-mono text-[10px] text-muted-foreground space-y-1.5">
      <div className="flex justify-between"><span>epoch 142 / 250</span><span className="text-primary-glow">loss 0.0142</span></div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className="h-full w-[57%] bg-gradient-to-r from-primary to-primary-glow animate-pulse-soft" />
      </div>
      <div className="flex justify-between"><span>val_acc</span><span className="text-foreground">0.948</span></div>
      <div className="flex justify-between"><span>tokens/sec</span><span className="text-foreground">28,412</span></div>
    </div>
  );
}

function TelemetryMock() {
  const bars = [40, 65, 55, 80, 45, 70, 60, 90, 50, 75];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-primary/30 to-primary-glow/80 rounded-sm"
          style={{ height: `${h}%`, animation: `pulse-soft 1.${i}s ease-in-out infinite` }}
        />
      ))}
    </div>
  );
}

function ChainMock() {
  return (
    <div className="font-mono text-[10px] space-y-1.5">
      <div className="flex justify-between text-muted-foreground"><span>block</span><span className="text-foreground">#18,492,331</span></div>
      <div className="rounded-md border border-border bg-background/40 px-2.5 py-2 truncate text-primary-glow">
        0x4f46e5a7c9d3...e8b2
      </div>
      <div className="flex gap-1">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex-1 h-1 rounded-full bg-primary/40 animate-pulse-soft" style={{ animationDelay: `${i*0.15}s` }} />
        ))}
      </div>
    </div>
  );
}

function SpatialMock() {
  return (
    <div className="relative h-16 grid place-items-center">
      <div className="absolute size-12 rounded-lg border border-primary/40 rotate-45 animate-float" />
      <div className="absolute size-8 rounded-lg border border-primary-glow/60 -rotate-12" />
      <div className="size-3 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 sm:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
              What we engineer.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-pretty">
            Four verticals, one senior team. Every engagement ships production
            code — not slide decks.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group relative rounded-3xl border border-border bg-card/40 p-8 overflow-hidden hover:border-primary/40 transition-all hover:bg-card/70"
              >
                <div className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative rounded-2xl border border-border bg-background/60 p-5 mb-8">
                  {s.mock}
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30 text-primary-glow">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.chips.map((c) => (
                        <span key={c} className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground border border-border rounded-full px-2.5 py-1">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}