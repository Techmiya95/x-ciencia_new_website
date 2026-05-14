import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — X-Ciencia Technologies" },
      { name: "description", content: "Answers about internships, software services, ERP solutions, hiring, project development, and consultations at X-Ciencia." },
      { property: "og:title", content: "FAQ — X-Ciencia" },
      { property: "og:description", content: "Frequently asked questions about our work and programs." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

const groups = [
  {
    cat: "Internships",
    items: [
      { q: "Is the internship really free?", a: "Yes — our internship program is 100% free. We invest in students because we believe in giving back." },
      { q: "Will I get a certificate?", a: "Yes, every successful intern receives an internship completion certificate plus letter of recommendation." },
      { q: "Do you offer placement assistance?", a: "Yes. We help shortlisted interns with placements at X-Ciencia or partner companies." },
    ],
  },
  {
    cat: "Software Services",
    items: [
      { q: "What's a typical engagement?", a: "Most projects start with a 2-week discovery, followed by iterative 2-week sprints with weekly demos." },
      { q: "Do you sign NDAs?", a: "Yes, mutual NDAs are standard before any commercial discussion." },
      { q: "Where do you build?", a: "Our teams are based in Bengaluru with hybrid and remote-friendly engagements." },
    ],
  },
  {
    cat: "ERP Solutions",
    items: [
      { q: "Can your ERP be customized?", a: "Yes. Our ERPs are modular and we deeply customize for hospitals, colleges, and enterprises." },
      { q: "How long does deployment take?", a: "Typical deployment ranges from 4 to 12 weeks depending on scope and integrations." },
      { q: "Do you provide training and support?", a: "Yes — onboarding, training sessions, documentation, and tiered support are included." },
    ],
  },
  {
    cat: "Hiring & Consultation",
    items: [
      { q: "How do I apply for a role?", a: "Visit the Careers page and submit the application form. We respond within a week." },
      { q: "Do you offer free consultations?", a: "Yes — schedule a 30-min discovery call from the Contact page. No obligation." },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, <span className="gradient-text">answered</span>.</>}
        subtitle="If you can't find what you're looking for, drop us a message — we'll get back within 48 hours."
      />

      <Section className="!pt-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {groups.map((g, gi) => (
            <FadeIn key={g.cat} delay={gi * 0.05}>
              <h2 className="font-display font-semibold text-2xl mb-4">{g.cat}</h2>
              <div className="space-y-3">
                {g.items.map((it) => <FaqItem key={it.q} {...it} />)}
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display font-semibold text-xl">Still have questions?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our team is ready to help.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
