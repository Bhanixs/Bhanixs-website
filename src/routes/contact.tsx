import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_EMAIL = "contact@bhanixs.com";
const CONTACT_PHONE_DISPLAY = "+91 98805 43088";
const CONTACT_PHONE_HREF = "tel:+919880543088";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BHANIXS" },
      { name: "description", content: "Tell us about the challenge you are building through. We come back with a focused perspective within 48 hours." },
      { property: "og:title", content: "Contact — BHANIXS" },
      { property: "og:description", content: "Start a conversation with BHANIXS." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const budget = String(data.get("budget") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New inquiry from ${name}${company ? ` (${company})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      project && `Project type: ${project}`,
      budget && `Budget: ${budget}`,
      "",
      "What they're building:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSending(false);
    toast.success("Opening your mail app", {
      description: `Send it through to finish — addressed to ${CONTACT_EMAIL}.`,
    });
  };

  return (
    <section className="relative pt-44 pb-32">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl tracking-tight leading-[1] text-balance">
              Tell us what you&rsquo;re <span className="text-foreground/70">building.</span>
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground text-pretty">
              Drop the details. A principal engineer reads every message and
              responds within 48 hours.
            </p>

            <div className="mt-12 space-y-5">
              <Channel icon={Mail} k="Email" v={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
              <Channel icon={Phone} k="Phone" v={CONTACT_PHONE_DISPLAY} href={CONTACT_PHONE_HREF} />
              <Channel icon={MapPin} k="HQ" v="Bengaluru · Dubai · Singapore · London" />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border-strong bg-surface-card backdrop-blur-xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name"><Input name="name" required placeholder="Ada Lovelace" /></Field>
              <Field label="Company"><Input name="company" required placeholder="Acme" /></Field>
            </div>
            <Field label="Work email"><Input type="email" name="email" required placeholder="you@company.com" /></Field>
            <Field label="Project type">
              <Select name="project">
                <SelectTrigger><SelectValue placeholder="Pick a vertical" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">AI / ML Engineering</SelectItem>
                  <SelectItem value="robotics">Robotics & Embedded</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                  <SelectItem value="xr">AR / VR & Spatial</SelectItem>
                  <SelectItem value="other">Something else</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Budget">
              <Select name="budget">
                <SelectTrigger><SelectValue placeholder="Approximate range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="<50k">Under $50k</SelectItem>
                  <SelectItem value="50-150k">$50k – $150k</SelectItem>
                  <SelectItem value="150-500k">$150k – $500k</SelectItem>
                  <SelectItem value="500k+">$500k+</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="What are you building?">
              <Textarea name="message" required rows={5} placeholder="A few sentences on the system, constraints, and timeline." />
            </Field>
            <PillButton type="submit" disabled={sending} className="w-full">
              {sending ? "Sending..." : "Send message"}
            </PillButton>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Channel({
  icon: Icon,
  k,
  v,
  href,
  flag,
}: {
  icon: typeof Mail;
  k: string;
  v: string;
  href?: string;
  flag?: string;
}) {
  const content = (
    <>
      <div className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/30">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{k}</div>
        <div className="mt-1 font-display tracking-tight">
          {v}
          {flag && (
            <span className="ml-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] normal-case tracking-normal text-primary-glow align-middle">
              {flag}
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-4 rounded-2xl border border-border-strong bg-surface-card p-5 transition-colors hover:border-primary/50 hover:bg-surface-card-hover"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border-strong bg-surface-card p-5">
      {content}
    </div>
  );
}