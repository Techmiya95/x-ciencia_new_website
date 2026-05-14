import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, Cpu, Sparkles, Code2, BarChart3, Smartphone, Globe, Database,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section, SectionHeader } from "@/components/site/Layout";
import { toast } from "sonner";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internship Programs — X-Ciencia Technologies" },
      { name: "description", content: "Free internships in AI, ML, Generative AI, Full-Stack, Python, Data Science, Web and Mobile Development. Live projects, mentorship, certificate, and placement assistance." },
      { property: "og:title", content: "Free AI Internship in Bengaluru — X-Ciencia" },
      { property: "og:description", content: "Live projects, mentorship, certificate, and placement assistance." },
      { property: "og:url", content: "/internships" },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
  component: InternshipsPage,
});

const domains = [
  { icon: Brain, t: "Artificial Intelligence" },
  { icon: Cpu, t: "Machine Learning" },
  { icon: Sparkles, t: "Generative AI" },
  { icon: Code2, t: "Full Stack Development" },
  { icon: Database, t: "Python Development" },
  { icon: BarChart3, t: "Data Science" },
  { icon: Smartphone, t: "Mobile App Development" },
  { icon: Globe, t: "Web Development" },
];

const benefits = [
  "100% Free Internship Program",
  "Live, real-world client projects",
  "Industry mentors with senior expertise",
  "Hands-on technical training",
  "Internship Completion Certificate",
  "Placement Assistance Support",
];

const testimonials = [
  { name: "Anika P.", role: "AI Intern → Engineer", quote: "I shipped a real ML model to production in 6 weeks. Best learning curve of my life." },
  { name: "Vikas R.", role: "Full-stack Intern", quote: "Mentorship was on point. Got placed at a startup right after my internship." },
  { name: "Sara M.", role: "Data Science Intern", quote: "Loved the project diversity. Worked on healthcare and fintech datasets." },
];

function InternshipsPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "", domain: "AI", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch within 48 hours.");
    setForm({ name: "", email: "", phone: "", college: "", domain: "AI", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Internships"
        title={<>Launch your career with <span className="gradient-text">real-world projects</span>.</>}
        subtitle="Join a free, industry-focused internship at X-Ciencia. Work on live products, learn from senior engineers, and earn a certificate plus placement support."
      />

      {/* Domains */}
      <Section>
        <SectionHeader eyebrow="Domains" title="Choose your specialization." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {domains.map((d, i) => (
            <FadeIn key={d.t} delay={i * 0.04}>
              <a
                href="https://forms.gle/bMq5RrHWdtp5YTMWA"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-smooth text-center h-full group"
              >
                <span className="inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center mb-3 group-hover:scale-110 transition-smooth">
                  <d.icon className="w-6 h-6 text-primary-foreground" />
                </span>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{d.t}</h3>
                <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Apply Now</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeader eyebrow="What you get" title="An internship that actually moves your career." />
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <FadeIn key={b} delay={i * 0.05}>
              <div className="glass-card rounded-xl p-5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{b}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section>
        <SectionHeader eyebrow="Training workflow" title="Six weeks. Three milestones. One real project." />
        <div className="grid md:grid-cols-4 gap-5">
          {["Apply", "Onboard", "Build", "Certify"].map((s, i) => (
            <FadeIn key={s} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6">
                <span className="text-3xl font-display font-bold gradient-text">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{s}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {[
                    "Submit the application form below.",
                    "Get matched with a mentor and team.",
                    "Work on live, client-facing features.",
                    "Receive a certificate and placement support.",
                  ][i]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader eyebrow="Student stories" title="From interns to engineers." />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full">
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

      {/* Application form */}
      <Section>
        <FadeIn>
          <div className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="Apply now"
              title="Internship application"
              subtitle="Fill out the form — our team will reach out within 48 hours."
              center={false}
            />
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
              <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
              <Field label="College / University" value={form.college} onChange={(v) => setForm({ ...form, college: v })} required />
              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1.5">Preferred domain</label>
                <select
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {domains.map((d) => <option key={d.t}>{d.t}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1.5">Why X-Ciencia?</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://forms.gle/bMq5RrHWdtp5YTMWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth"
                >
                  Apply via Google Form <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-muted-foreground text-sm">or</span>
                <a href="mailto:hr@xciencia.com" className="text-primary font-semibold hover:underline">
                  Mail us: hr@xciencia.com
                </a>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
