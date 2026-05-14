import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Coffee, Sparkles, Users } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section, SectionHeader } from "@/components/site/Layout";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — X-Ciencia Technologies" },
      { name: "description", content: "Join X-Ciencia. Open roles for Python, Full-Stack, AI Engineer, React, UI/UX, Software Engineer, and Business Development." },
      { property: "og:title", content: "Careers at X-Ciencia" },
      { property: "og:description", content: "Build meaningful software with a team that cares." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  { role: "Python Developer", type: "Full-time", level: "Mid–Senior", loc: "Bengaluru / Hybrid" },
  { role: "Full Stack Developer", type: "Full-time", level: "Mid", loc: "Bengaluru" },
  { role: "AI Engineer", type: "Full-time", level: "Senior", loc: "Bengaluru / Remote" },
  { role: "React Developer", type: "Full-time", level: "Junior–Mid", loc: "Bengaluru" },
  { role: "UI/UX Designer", type: "Full-time", level: "Mid", loc: "Bengaluru" },
  { role: "Software Engineer", type: "Full-time", level: "Fresher", loc: "Bengaluru" },
  { role: "Business Development Executive", type: "Full-time", level: "Mid", loc: "Bengaluru" },
];

function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: jobs[0].role, exp: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received. We'll review and get back to you soon.");
    setForm({ name: "", email: "", role: jobs[0].role, exp: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build software that <span className="gradient-text">matters</span>, with people who care.</>}
        subtitle="We're hiring engineers, designers, and operators who love their craft. Freshers and senior pros welcome."
      />

      {/* Culture */}
      <Section>
        <SectionHeader eyebrow="Culture" title="What it's like to work here." />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: Heart, t: "People-first", d: "Generous leave, mental health support, family vibes." },
            { icon: Sparkles, t: "Craft-first", d: "We invest in clean code, design reviews, and learning." },
            { icon: Users, t: "Senior-led teams", d: "Mentors who actually have time to mentor." },
            { icon: Coffee, t: "Hybrid Bengaluru", d: "Three offices, smart remote, no chaos." },
          ].map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <c.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-semibold">{c.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Jobs */}
      <Section>
        <SectionHeader eyebrow="Open roles" title="We're growing across engineering, design, and growth." />
        <div className="space-y-3 max-w-4xl mx-auto">
          {jobs.map((j, i) => (
            <FadeIn key={j.role} delay={i * 0.04}>
              <div className="glass-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <span className="inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{j.role}</h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {j.type}</span>
                      <span>{j.level}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.loc}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setForm((f) => ({ ...f, role: j.role }))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground gradient-primary hover:scale-105 transition-smooth self-start md:self-center"
                >
                  Apply <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Hiring process */}
      <Section>
        <SectionHeader eyebrow="Hiring process" title="Four steps. Respectful of your time." />
        <div className="grid md:grid-cols-4 gap-5">
          {["Apply", "Screen call", "Tech round", "Offer"].map((s, i) => (
            <FadeIn key={s} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6">
                <span className="text-3xl font-display font-bold gradient-text">0{i + 1}</span>
                <h3 className="mt-3 font-semibold">{s}</h3>
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
              eyebrow="Apply"
              title="Send us your application"
              subtitle="Attach your resume link in the message. We read every submission."
              center={false}
            />
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium block mb-1.5">Full name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Role</label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary">
                  {jobs.map((j) => <option key={j.role}>{j.role}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Years of experience</label>
                <input value={form.exp} onChange={(e) => setForm({ ...form, exp: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium block mb-1.5">Message + resume link</label>
                <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="md:col-span-2">
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
