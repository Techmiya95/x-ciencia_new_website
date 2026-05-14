import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — X-Ciencia Technologies" },
      { name: "description", content: "Selected work: ERP systems, AI applications, hospital management, SaaS platforms, CRM, mobile apps, and dashboards." },
      { property: "og:title", content: "Portfolio — X-Ciencia" },
      { property: "og:description", content: "A selection of products we've built." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const categories = ["All", "ERP", "AI", "SaaS", "Mobile", "CRM"] as const;

const projects = [
  { t: "MediCore Hospital ERP", c: "ERP", d: "End-to-end hospital management for a 300-bed facility.", tech: ["React", "Node.js", "PostgreSQL"], hue: 220 },
  { t: "EduSphere College ERP", c: "ERP", d: "Admissions, attendance, exams for 12 colleges.", tech: ["Next.js", "Django", "Postgres"], hue: 200 },
  { t: "PulseAI Diagnostics", c: "AI", d: "ML-powered diagnostic assistant for radiologists.", tech: ["Python", "PyTorch", "FastAPI"], hue: 250 },
  { t: "FinSpark SaaS", c: "SaaS", d: "Subscription billing platform for fintech startups.", tech: ["TypeScript", "Stripe", "AWS"], hue: 230 },
  { t: "RetailWave CRM", c: "CRM", d: "Omnichannel CRM for a retail chain across 40 stores.", tech: ["React", "GraphQL", "MongoDB"], hue: 210 },
  { t: "FieldOps Mobile", c: "Mobile", d: "Field service app for technicians, offline-first.", tech: ["Flutter", "Firebase"], hue: 240 },
  { t: "InsightOps Dashboard", c: "SaaS", d: "Real-time business intelligence for ops teams.", tech: ["React", "ClickHouse"], hue: 215 },
  { t: "GenChat Studio", c: "AI", d: "Custom GPT studio for enterprise knowledge bases.", tech: ["Next.js", "OpenAI", "pgvector"], hue: 260 },
  { t: "CarePulse mHealth", c: "Mobile", d: "Patient companion app with appointments and records.", tech: ["React Native", "Supabase"], hue: 225 },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.c === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected work, built with <span className="gradient-text">care and craft</span>.</>}
        subtitle="A glimpse of the products we've shipped — from hospital ERPs to AI platforms."
      />

      <Section className="!pt-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                filter === c
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "glass-card hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <FadeIn key={p.t} delay={i * 0.05}>
              <div className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-smooth h-full">
                <div
                  className="h-44 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.75 0.12 ${p.hue}), oklch(0.55 0.16 ${p.hue + 15}))`,
                  }}
                >
                  <div className="absolute inset-0 gradient-mesh opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-white/90 tracking-tight">
                      {p.t.split(" ")[0]}
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/80 text-primary backdrop-blur">
                    {p.c}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[10px] bg-secondary font-medium">{t}</span>
                    ))}
                  </div>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Live preview <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
