import { W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { c as createLucideIcon, L as Link } from "./router-C-c2k0Kn.js";
import { P as PageHero, S as Section, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { C as Cog, B as Boxes } from "./cog-Dd710n37.js";
import { U as Users } from "./users-BRGe6F7w.js";
import { B as Brain, G as Globe, S as Smartphone } from "./smartphone-CTpUpd6T.js";
import { C as Cloud, S as ShieldCheck } from "./shield-check-DCScku5c.js";
import { C as CodeXml } from "./code-xml-CA72_rPh.js";
import { C as CircleCheck } from "./circle-check-KXmUBG6d.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", __iconNode);
const services = [{
  icon: Cog,
  title: "ERP Development",
  desc: "Modular ERPs tailored to your operations.",
  features: ["Hospital & College ERP", "HRMS & Payroll", "Inventory & Billing"]
}, {
  icon: Users,
  title: "CRM Systems",
  desc: "Customer engagement engines that drive revenue.",
  features: ["Sales pipelines", "Marketing automation", "Customer 360"]
}, {
  icon: Brain,
  title: "AI Solutions",
  desc: "Generative AI, ML pipelines, and intelligent agents.",
  features: ["LLM apps", "Predictive analytics", "Computer vision"]
}, {
  icon: Boxes,
  title: "SaaS Products",
  desc: "Multi-tenant SaaS architecture engineered to scale.",
  features: ["Subscription billing", "Role-based access", "Usage analytics"]
}, {
  icon: Globe,
  title: "Web Development",
  desc: "Performant, SEO-optimized websites and web apps.",
  features: ["Next.js / TanStack", "Headless CMS", "Edge deployment"]
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  desc: "Native and cross-platform apps with delightful UX.",
  features: ["React Native", "Flutter", "iOS & Android native"]
}, {
  icon: Cloud,
  title: "Cloud Solutions",
  desc: "Cloud migrations, DevOps, and serverless architecture.",
  features: ["AWS / Azure / GCP", "Kubernetes", "CI/CD pipelines"]
}, {
  icon: Workflow,
  title: "Enterprise Automation",
  desc: "Workflow and process automation across teams.",
  features: ["RPA", "Workflow engines", "Integrations"]
}, {
  icon: ShieldCheck,
  title: "IT Consulting",
  desc: "Strategy, architecture, and digital transformation.",
  features: ["Tech audits", "Roadmaps", "Team augmentation"]
}, {
  icon: CodeXml,
  title: "Custom Software",
  desc: "Bespoke software engineered to your exact needs.",
  features: ["Discovery & MVP", "Long-term partnership", "Production support"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Services", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Software services for the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "next chapter" }),
      " of your business."
    ] }), subtitle: "Pick a single service or a long-term partnership — either way, you get senior-led teams and outcome-driven engineering." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass-card rounded-2xl p-7 hover:shadow-glow hover:-translate-y-1 transition-smooth h-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.desc })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
        " ",
        f
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all", children: [
        "Discuss this service ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }, s.title)) }) })
  ] });
}
export {
  ServicesPage as component
};
