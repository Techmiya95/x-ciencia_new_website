import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cog, Users, Brain, Boxes, Globe, Smartphone, Cloud, Workflow,
  ShieldCheck, Code2, ArrowRight, CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — X-Ciencia Technologies" },
      { name: "description", content: "ERP, CRM, AI, SaaS, web, mobile, cloud, and custom software development services from Bengaluru." },
      { property: "og:title", content: "Services — X-Ciencia Technologies" },
      { property: "og:description", content: "End-to-end software services for startups and enterprises." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Cog, title: "ERP Development", desc: "Modular ERPs tailored to your operations.", features: ["Hospital & College ERP", "HRMS & Payroll", "Inventory & Billing"] },
  { icon: Users, title: "CRM Systems", desc: "Customer engagement engines that drive revenue.", features: ["Sales pipelines", "Marketing automation", "Customer 360"] },
  { icon: Brain, title: "AI Solutions", desc: "Generative AI, ML pipelines, and intelligent agents.", features: ["LLM apps", "Predictive analytics", "Computer vision"] },
  { icon: Boxes, title: "SaaS Products", desc: "Multi-tenant SaaS architecture engineered to scale.", features: ["Subscription billing", "Role-based access", "Usage analytics"] },
  { icon: Globe, title: "Web Development", desc: "Performant, SEO-optimized websites and web apps.", features: ["Next.js / TanStack", "Headless CMS", "Edge deployment"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps with delightful UX.", features: ["React Native", "Flutter", "iOS & Android native"] },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud migrations, DevOps, and serverless architecture.", features: ["AWS / Azure / GCP", "Kubernetes", "CI/CD pipelines"] },
  { icon: Workflow, title: "Enterprise Automation", desc: "Workflow and process automation across teams.", features: ["RPA", "Workflow engines", "Integrations"] },
  { icon: ShieldCheck, title: "IT Consulting", desc: "Strategy, architecture, and digital transformation.", features: ["Tech audits", "Roadmaps", "Team augmentation"] },
  { icon: Code2, title: "Custom Software", desc: "Bespoke software engineered to your exact needs.", features: ["Discovery & MVP", "Long-term partnership", "Production support"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Software services for the <span className="gradient-text">next chapter</span> of your business.</>}
        subtitle="Pick a single service or a long-term partnership — either way, you get senior-led teams and outcome-driven engineering."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04}>
              <div className="group glass-card rounded-2xl p-7 hover:shadow-glow hover:-translate-y-1 transition-smooth h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <span className="inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                >
                  Discuss this service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
