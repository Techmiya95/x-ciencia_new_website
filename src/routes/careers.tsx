import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Coffee, Sparkles, Users, Mail } from "lucide-react";
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
  {
    role: "Python Developer",
    type: "Full-time",
    level: "Mid–Senior",
    loc: "Bengaluru / Hybrid",
    description: "We are looking for a high-performance Python Developer to architect and build scalable backends, high-throughput data pipelines, and robust APIs for our mission-critical ERP and AI platforms. You will handle complex concurrency, optimization, and architectural decisions.",
    requirements: [
      "4+ years of professional experience with Python 3.10+ and frameworks like FastAPI or Django.",
      "Expert knowledge of asynchronous programming (asyncio) and distributed systems architecture.",
      "Hands-on experience with PostgreSQL optimization, Redis caching, and Celery/RabbitMQ.",
      "Proficiency in Kubernetes, Docker, and CI/CD pipelines (GitHub Actions/Jenkins).",
      "Ability to write clean, maintainable, and highly documented code following SOLID principles.",
      "Experience with GraphQL, WebSockets, and OAuth2/OpenID Connect is a significant plus."
    ]
  },
  {
    role: "Full Stack Developer",
    type: "Full-time",
    level: "Mid",
    loc: "Bengaluru",
    description: "Engineer end-to-end features for our enterprise-grade SaaS products. You will be responsible for building responsive, high-performance user interfaces and the robust services that power them.",
    requirements: [
      "Proficiency in the T3 stack (Next.js, TypeScript, Tailwind, Prisma) or similar modern stacks.",
      "Experience architecting complex state management in React (Zustand, Redux, or TanStack Query).",
      "Deep understanding of Node.js, Express/NestJS, and RESTful API design.",
      "Experience with relational databases (PostgreSQL/MySQL) and NoSQL (MongoDB/DynamoDB).",
      "Commitment to unit and integration testing (Jest, Cypress, or Playwright).",
      "Familiarity with serverless architectures and edge computing is highly desirable."
    ]
  },
  {
    role: "AI Engineer",
    type: "Full-time",
    level: "Senior",
    loc: "Bengaluru / Remote",
    description: "Lead the design and deployment of advanced machine learning models, LLM-powered agents, and computer vision pipelines. You will bridge the gap between research and production-grade AI.",
    requirements: [
      "Masters or PhD in CS, Mathematics, or AI (or 5+ years of intensive research/production experience).",
      "Deep expertise in NLP, Computer Vision, and Generative AI (LLMs, Diffusion Models).",
      "Mastery of PyTorch or TensorFlow, and experience with NVIDIA Triton or ONNX Runtime.",
      "Strong experience with Vector Databases (Pinecone, Weaviate, or Milvus) and LangChain/LlamaIndex.",
      "Knowledge of MLOps practices, model quantization, and fine-tuning techniques (LoRA/QLoRA).",
      "Ability to translate complex business problems into viable machine learning solutions."
    ]
  },
  {
    role: "React Developer",
    type: "Full-time",
    level: "Junior–Mid",
    loc: "Bengaluru",
    description: "Craft pixel-perfect, accessible, and high-performance user interfaces. You will work closely with designers to build complex dashboards that thousands of users rely on daily.",
    requirements: [
      "3+ years of intensive React development experience with a strong JS/TS foundation.",
      "Expertise in modern CSS techniques: Tailwind, CSS Modules, and Framer Motion for micro-interactions.",
      "Deep understanding of React internals, performance profiling, and optimization techniques.",
      "Experience with TanStack Table, TanStack Query, and complex form handling (React Hook Form/Zod).",
      "Strong sense of design, typography, and web accessibility standards (WCAG 2.1).",
      "Portfolio demonstrating clean UI/UX implementation and high-quality code."
    ]
  },
  {
    role: "UI/UX Designer",
    type: "Full-time",
    level: "Mid",
    loc: "Bengaluru",
    description: "Design the future of enterprise software. You will transform complex data and workflows into intuitive, beautiful, and highly functional interfaces that drive productivity.",
    requirements: [
      "4+ years of experience designing complex B2B SaaS or Enterprise platforms.",
      "Advanced mastery of Figma, including advanced prototyping, auto-layout, and design system management.",
      "Proven ability to conduct user research, create journey maps, and iterate based on data.",
      "Strong understanding of information architecture, usability heuristics, and platform-specific guidelines.",
      "Experience working in an Agile environment and handing off perfect specs to engineers.",
      "Strong visual design skills with a focus on typography, color theory, and layout."
    ]
  },
  {
    role: "Software Engineer",
    type: "Full-time",
    level: "Fresher",
    loc: "Bengaluru",
    description: "An intensive, high-impact role for exceptional graduates. You will be part of an elite team building large-scale systems and will be expected to learn and contribute at an accelerated pace.",
    requirements: [
      "Exceptional problem-solving skills and mastery of Data Structures and Algorithms.",
      "Proficiency in at least one systems language (C++, Rust, Go) or a high-level language (Python, JS).",
      "Bachelor's/Master's degree in Computer Science from a premier institution (IIT/NIT/BITS or equivalent).",
      "Demonstrated passion for tech through open-source contributions, hackathons, or personal projects.",
      "Fast learner with the ability to work independently in a fast-paced environment.",
      "Strong foundation in computer science fundamentals: OS, Networking, and Databases."
    ]
  },
  {
    role: "Business Development Executive",
    type: "Full-time",
    level: "Mid",
    loc: "Bengaluru",
    description: "Accelerate X-Ciencia's growth by identifying high-value opportunities and building strategic relationships with enterprise leaders in EdTech, HealthTech, and Fintech.",
    requirements: [
      "3+ years of experience in B2B Tech Sales or Business Development.",
      "Deep understanding of the SaaS and Enterprise Software landscape in India and abroad.",
      "Exceptional communication, storytelling, and negotiation skills.",
      "Ability to understand technical requirements and map them to X-Ciencia's capabilities.",
      "Experience with consultative selling, lead generation, and CRM management (HubSpot/Salesforce).",
      "Self-motivated with a track record of meeting or exceeding aggressive growth targets."
    ]
  },
];

function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: jobs[0].role, exp: "", message: "" });
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

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
            <div key={c.t} className="glass-card rounded-2xl p-6 h-full">
              <c.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Jobs */}
      <Section>
        <SectionHeader eyebrow="Open roles" title="We're growing across engineering, design, and growth." />
        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((j) => (
            <div key={j.role} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
              <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{j.role}</h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {j.type}</span>
                      <span>{j.level}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.loc}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setExpandedRole(expandedRole === j.role ? null : j.role);
                    setForm((f) => ({ ...f, role: j.role }));
                  }}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary hover:scale-105 transition-smooth self-start md:self-center shadow-sm"
                >
                  {expandedRole === j.role ? "Close Details" : "View Details & Apply"}
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedRole === j.role ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Inline Job Description */}
              {expandedRole === j.role && (
                <div className="px-6 pb-8 pt-2 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2 uppercase tracking-wider text-[10px]">About the role</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{j.description}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-sm">Apply via Email</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Send your resume and portfolio to:
                          <a href="mailto:hr@xciencia.com" className="block mt-1 font-bold text-primary hover:underline">hr@xciencia.com</a>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2 uppercase tracking-wider text-[10px]">Key Requirements</h4>
                      <ul className="space-y-2.5">
                        {j.requirements.map((req, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2 text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Hiring process */}
      <Section>
        <SectionHeader eyebrow="Hiring process" title="Four steps. Respectful of your time." />
        <div className="grid md:grid-cols-4 gap-5">
          {["Apply", "Screen call", "Tech round", "Offer"].map((s, i) => (
            <div key={s} className="glass-card rounded-2xl p-6">
              <span className="text-3xl font-display font-bold gradient-text">0{i + 1}</span>
              <h3 className="mt-3 font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Application form */}
      <Section id="application-form">
        <div className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto border border-primary/20 shadow-glow">
          <SectionHeader
            eyebrow="Quick Apply"
            title="Send us your application"
            subtitle="Fill the form below OR mail us directly at hr@xciencia.com"
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
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-muted-foreground text-sm">or</span>
              <a href="mailto:hr@xciencia.com" className="text-primary font-semibold hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" /> hr@xciencia.com
              </a>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
