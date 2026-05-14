import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Lightbulb, Users, TrendingUp, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section, SectionHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — X-Ciencia Technologies" },
      { name: "description", content: "Founded in 2017 in Bengaluru, X-Ciencia Technologies builds ERP, AI, and SaaS solutions guided by the vision Science for All." },
      { property: "og:title", content: "About X-Ciencia Technologies" },
      { property: "og:description", content: "Bengaluru-based software company since 2017." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2017", title: "Founded in Bengaluru", desc: "Started as a small team with a vision: Science for All." },
  { year: "2019", title: "First ERP product", desc: "Shipped Hospital ERP across 3 hospitals." },
  { year: "2021", title: "AI division launched", desc: "Began building ML and generative AI products." },
  { year: "2023", title: "100+ projects delivered", desc: "Crossed a major milestone in client projects." },
  { year: "2025", title: "Pan-India presence", desc: "Three offices in Bengaluru and growing teams." },
];

const team = [
  { name: "Md Akram", role: "Director", initials: "MA" },
  { name: "Md Yasin", role: "CEO and Founder", initials: "MY" },
  { name: "Arshiya", role: "Head of Human Resource", initials: "AR" },
  { name: "Benilan", role: "Senior Software Engineer", initials: "BS" },

];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>We engineer software with <span className="gradient-text">science and craft</span>.</>}
        subtitle="Founded in 2017, X-Ciencia Technologies is a Bengaluru-based software company building ERP, AI, SaaS, and enterprise solutions for clients across industries."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Our Vision", body: "Science for All — making advanced technology accessible to every business, school, and hospital." },
            { icon: Target, title: "Our Mission", body: "Build scalable, intelligent software that creates measurable business impact and uplifts the people who use it." },
            { icon: Award, title: "Our Values", body: "Curiosity, craftsmanship, transparency, and care for the long-term success of our clients and team." },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <span className="inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </span>
                <h3 className="font-display font-semibold text-xl">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Why choose us" title="Six reasons teams pick X-Ciencia." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Lightbulb, t: "Innovation-first", d: "We bring research-backed ideas to production-grade products." },
            { icon: Users, t: "Senior teams", d: "Architects and senior engineers lead every engagement." },
            { icon: TrendingUp, t: "Outcome-driven", d: "We measure success by your business KPIs, not lines of code." },
            { icon: Award, t: "Proven track record", d: "100+ projects across hospitals, colleges, startups, enterprises." },
            { icon: Target, t: "Domain depth", d: "Deep expertise in healthcare, education, fintech, and SaaS." },
            { icon: Eye, t: "Transparent process", d: "Weekly demos, open Slack, no surprises." },
          ].map((r, i) => (
            <FadeIn key={r.t} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-smooth h-full">
                <r.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-semibold">{r.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader eyebrow="Our process" title="How we deliver — predictable, transparent, on time." />
        <div className="grid md:grid-cols-4 gap-5">
          {["Discover", "Design", "Develop", "Deliver"].map((step, i) => (
            <FadeIn key={step} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6">
                <span className="text-3xl font-display font-bold gradient-text">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {[
                    "We map your goals, users, and constraints in detail.",
                    "Wireframes, system design, and prototypes you can feel.",
                    "Iterative builds with weekly demos and client feedback.",
                    "Production launch, training, and continuous improvement.",
                  ][i]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader eyebrow="Our journey" title="Eight years of building together." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 0.08}>
                <div className={`relative flex md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-primary shadow-glow" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass-card rounded-2xl p-5">
                      <p className="text-xs font-semibold tracking-widest text-primary">{t.year}</p>
                      <h3 className="mt-1 font-display font-semibold">{t.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader eyebrow="Leadership" title="The people behind the science." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center text-2xl font-display font-bold text-primary-foreground shadow-glow">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Join our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
