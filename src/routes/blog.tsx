import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section } from "@/components/site/Layout";
import { toast } from "sonner";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — X-Ciencia Technologies" },
      { name: "description", content: "Insights on AI, software development, ERP, technology trends, and career guidance from X-Ciencia." },
      { property: "og:title", content: "Blog — X-Ciencia" },
      { property: "og:description", content: "Engineering and AI insights from the X-Ciencia team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { cat: "AI", title: "How Generative AI is reshaping enterprise software", excerpt: "From copilots to autonomous agents — what's real today and what's still hype.", date: "Apr 24, 2026", read: "6 min", hue: 245 },
  { cat: "ERP", title: "Choosing the right ERP for your hospital", excerpt: "A practical decision framework based on 30+ healthcare deployments.", date: "Apr 12, 2026", read: "8 min", hue: 215 },
  { cat: "Engineering", title: "Multi-tenant SaaS: an architecture playbook", excerpt: "Patterns we use to keep tenants isolated, performant, and observable.", date: "Mar 30, 2026", read: "10 min", hue: 230 },
  { cat: "Career", title: "Landing your first AI engineering role", excerpt: "Skills, projects, and interview prep that actually move the needle.", date: "Mar 15, 2026", read: "5 min", hue: 200 },
  { cat: "Trends", title: "Edge AI: the next frontier for mobile apps", excerpt: "On-device inference, model quantization, and offline-first UX.", date: "Mar 02, 2026", read: "7 min", hue: 250 },
  { cat: "ERP", title: "Why college ERPs fail (and how to fix them)", excerpt: "Lessons from rolling out modern ERPs to traditional institutions.", date: "Feb 18, 2026", read: "6 min", hue: 220 },
];

function BlogPage() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! Check your inbox for confirmation.");
    setEmail("");
  };

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Insights from the <span className="gradient-text">X-Ciencia lab</span>.</>}
        subtitle="Engineering deep-dives, AI explainers, ERP playbooks, and career guidance from our team."
      />

      <Section className="!pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <article className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-smooth h-full flex flex-col">
                <div
                  className="h-44 relative"
                  style={{ background: `linear-gradient(135deg, oklch(0.78 0.12 ${p.hue}), oklch(0.55 0.16 ${p.hue + 15}))` }}
                >
                  <div className="absolute inset-0 gradient-mesh opacity-50" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/85 text-primary backdrop-blur">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {p.read}</span>
                  </div>
                  <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <FadeIn>
          <div className="glass-card rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <Mail className="w-10 h-10 mx-auto text-primary mb-3" />
            <h2 className="text-2xl md:text-3xl font-display font-bold">Stay in the loop</h2>
            <p className="mt-2 text-muted-foreground">Monthly digest. No spam. Unsubscribe anytime.</p>
            <form onSubmit={subscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
                Subscribe
              </button>
            </form>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
