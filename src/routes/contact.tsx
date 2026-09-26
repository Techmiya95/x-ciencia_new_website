import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section } from "@/components/site/Layout";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — X-Ciencia Technologies" },
      { name: "description", content: "Get in touch with X-Ciencia Technologies in Bengaluru. Offices in Rajajinagar, Frazer Town, and Jayanagar." },
      { property: "og:title", content: "Contact X-Ciencia Technologies" },
      { property: "og:description", content: "Three Bengaluru offices and a 48-hour response promise." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { name: "Rajajinagar", addr: "Rajajinagar, Bengaluru" },
  { name: "Frazer Town", addr: "Frazer Town, Bengaluru" },
  { name: "Jayanagar", addr: "Jayanagar, Bengaluru – 560069" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 48 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">talk</span>.</>}
        subtitle="Tell us about your project, your team, or just say hello. We respond within 48 hours."
      />

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-3 gap-5 mb-10">
          {[
            { icon: Mail, t: "Email", lines: ["hr@xciencia.com"] },
            { icon: Phone, t: "Phone", lines: ["+91 9591745792",] },
            { icon: MessageCircle, t: "WhatsApp", lines: ["+91 9591745792", "Chat with us anytime"] },
          ].map((c, i) => (
            <FadeIn key={c.t} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <span className="inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </span>
                <h3 className="font-display font-semibold">{c.t}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <FadeIn>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display font-semibold text-xl mb-1">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">We'll get back within 48 hours.</p>
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">Full name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Subject</label>
                  <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Message</label>
                  <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Map + offices */}
          <FadeIn delay={0.1}>
            <div className="space-y-5 h-full flex flex-col">
              <div className="glass-card rounded-3xl overflow-hidden">
                <iframe
                  title="X-Ciencia Bengaluru office"
                  src="https://www.google.com/maps?q=Bengaluru&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>

              {offices.map((o) => (
                <div key={o.name} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                  <span className="inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h4 className="font-semibold">{o.name} Office</h4>
                    <p className="text-sm text-muted-foreground">{o.addr}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
