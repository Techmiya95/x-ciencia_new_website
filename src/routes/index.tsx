import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, GraduationCap, Layers, Brain, Boxes, Smartphone, Globe,
  Cloud, Cog, ShieldCheck, Zap, Users, Building2, HeartPulse, Briefcase,
  Sparkles, CheckCircle2,
} from "lucide-react";
import { FadeIn, Counter } from "@/components/site/Motion";
import { Section, SectionHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X-Ciencia Technologies — Software, ERP & AI Solutions in Bengaluru" },
      { name: "description", content: "Premium ERP, AI, SaaS, mobile, and custom software development from Bengaluru. Science for All." },
      { property: "og:title", content: "X-Ciencia Technologies — Science for All" },
      { property: "og:description", content: "Intelligent ERP, AI, and SaaS solutions for startups, enterprises, hospitals, and educational institutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Cog, title: "ERP Development", desc: "Modular, scalable ERP for hospitals, colleges and enterprises." },
  { icon: Users, title: "CRM Systems", desc: "Customer-centric platforms that boost retention and revenue." },
  { icon: Brain, title: "AI Solutions", desc: "Generative AI, ML pipelines, and intelligent automation." },
  { icon: Boxes, title: "SaaS Products", desc: "Multi-tenant SaaS architecture engineered for scale." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps with delightful UX." },
  { icon: Globe, title: "Web Development", desc: "Performant, SEO-optimized websites and web apps." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud migrations, DevOps, and serverless architectures." },
  { icon: ShieldCheck, title: "IT Consulting", desc: "Strategy, architecture, and digital transformation." },
];

const audiences = [
  { icon: Briefcase, label: "Startups" },
  { icon: Building2, label: "Enterprises" },
  { icon: GraduationCap, label: "Colleges" },
  { icon: HeartPulse, label: "Hospitals" },
  { icon: Layers, label: "SaaS Teams" },
  { icon: Users, label: "Students" },
];

const stats = [
  { value: 20, suffix: "+", label: "Employees" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Students Mentored" },
];

const techBadges = ["React", "Next.js", "Python", "Node.js", "AWS", "Azure", "TensorFlow", "PostgreSQL", "Flutter", "Kubernetes"];

const testimonials = [
  { name: "Dr. Anitha R.", role: "CMO, City Hospital", quote: "Their hospital ERP transformed our workflows — patient turnaround dropped by 40%." },
  { name: "Rohit Mehta", role: "Founder, FinSpark", quote: "X-Ciencia shipped our SaaS MVP in 8 weeks. Architecture decisions are paying off today." },
  { name: "Prof. Suresh K.", role: "Dean, KVR College", quote: "The College ERP is intuitive, and the internship program is genuinely excellent." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass-card text-primary mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Bengaluru · Est. 2017 · Science for All
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Transforming businesses through{" "}
                <span className="gradient-text">intelligent software</span> solutions Company.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                X-Ciencia Technologies delivers innovative ERP systems, AI-powered software,
                SaaS platforms, and enterprise solutions designed to accelerate growth and
                digital transformation.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Link>
                <Link
                  to="/internships"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass-card hover:text-primary transition-smooth"
                >
                  Apply for Internship
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-widest">Trusted Stack</span>
                {techBadges.slice(0, 6).map((b) => (
                  <span key={b} className="font-medium">{b}</span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Hero Visual */}
          <FadeIn delay={0.3} className="lg:col-span-5">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-3xl p-6 shadow-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">xciencia.ai/dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Active", value: "1,284" },
                    { label: "MRR", value: "₹4.8L" },
                    { label: "Uptime", value: "99.9%" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-secondary/60 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                      <p className="text-lg font-display font-bold">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 p-4 h-40 flex items-end gap-2">
                  {[40, 65, 50, 80, 55, 90, 70, 95, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                      className="flex-1 rounded-md gradient-primary"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-card"
              >
                <span className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">AI Insights</p>
                  <p className="text-sm font-semibold">+32% efficiency</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 flex items-center gap-3"
              >
                <span className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Deploy</p>
                  <p className="text-sm font-semibold">2.1s</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <Section className="!py-12 md:!py-16">
        <div className="glass-card rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title={<>End-to-end software, designed to <span className="gradient-text">scale with you</span>.</>}
          subtitle="From idea to enterprise-grade product — our teams cover the full stack of modern software delivery."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <div className="group h-full glass-card rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-smooth">
                <span className="inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </span>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* AUDIENCES */}
      <Section className="!py-16">
        <SectionHeader eyebrow="Who we serve" title="Built for teams of every size and shape." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((a, i) => (
            <FadeIn key={a.label} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-6 text-center hover:text-primary transition-smooth">
                <a.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-semibold text-sm">{a.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Why X-Ciencia</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Engineering excellence, <span className="gradient-text">delivered with care</span>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We pair seasoned architects with curious engineers to ship products that
              outlast trends. Every project is shaped around your business outcomes — not
              ours.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Outcome-driven engagement, not hourly billing",
                "Senior-led teams with deep domain expertise",
                "Production-ready code with clean architecture",
                "Transparent process & weekly demo cadence",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "8 yrs", l: "of delivery" },
                { v: "12+", l: "industries served" },
                { v: "24/7", l: "client support" },
                { v: "ISO", l: "best practices" },
              ].map((c) => (
                <div key={c.l} className="glass-card rounded-2xl p-6">
                  <p className="text-3xl font-display font-bold gradient-text">{c.v}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.l}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Client love" title="Trusted by founders, hospitals, and educators." />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 gradient-primary text-primary-foreground text-center">
            <div className="absolute inset-0 opacity-30 gradient-mesh" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                Have an idea? Let's build something brilliant together.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Tell us about your goals — we'll come back with a roadmap within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-primary hover:scale-105 transition-smooth shadow-glow">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass text-primary-foreground border border-white/40">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
