import { r as reactExports, W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { P as PageHero, S as Section, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { c as createLucideIcon } from "./router-C-c2k0Kn.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const categories = ["All", "ERP", "AI", "SaaS", "Mobile", "CRM"];
const projects = [{
  t: "MediCore Hospital ERP",
  c: "ERP",
  d: "End-to-end hospital management for a 300-bed facility.",
  tech: ["React", "Node.js", "PostgreSQL"],
  hue: 220
}, {
  t: "EduSphere College ERP",
  c: "ERP",
  d: "Admissions, attendance, exams for 12 colleges.",
  tech: ["Next.js", "Django", "Postgres"],
  hue: 200
}, {
  t: "PulseAI Diagnostics",
  c: "AI",
  d: "ML-powered diagnostic assistant for radiologists.",
  tech: ["Python", "PyTorch", "FastAPI"],
  hue: 250
}, {
  t: "FinSpark SaaS",
  c: "SaaS",
  d: "Subscription billing platform for fintech startups.",
  tech: ["TypeScript", "Stripe", "AWS"],
  hue: 230
}, {
  t: "RetailWave CRM",
  c: "CRM",
  d: "Omnichannel CRM for a retail chain across 40 stores.",
  tech: ["React", "GraphQL", "MongoDB"],
  hue: 210
}, {
  t: "FieldOps Mobile",
  c: "Mobile",
  d: "Field service app for technicians, offline-first.",
  tech: ["Flutter", "Firebase"],
  hue: 240
}, {
  t: "InsightOps Dashboard",
  c: "SaaS",
  d: "Real-time business intelligence for ops teams.",
  tech: ["React", "ClickHouse"],
  hue: 215
}, {
  t: "GenChat Studio",
  c: "AI",
  d: "Custom GPT studio for enterprise knowledge bases.",
  tech: ["Next.js", "OpenAI", "pgvector"],
  hue: 260
}, {
  t: "CarePulse mHealth",
  c: "Mobile",
  d: "Patient companion app with appointments and records.",
  tech: ["React Native", "Supabase"],
  hue: 225
}];
function PortfolioPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.c === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Portfolio", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Selected work, built with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "care and craft" }),
      "."
    ] }), subtitle: "A glimpse of the products we've shipped — from hospital ERPs to AI platforms." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "!pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-10", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: `px-5 py-2 rounded-full text-sm font-medium transition-smooth ${filter === c ? "gradient-primary text-primary-foreground shadow-glow" : "glass-card hover:text-primary"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-smooth h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative overflow-hidden", style: {
          background: `linear-gradient(135deg, oklch(0.75 0.12 ${p.hue}), oklch(0.55 0.16 ${p.hue + 15}))`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-mesh opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-3xl text-white/90 tracking-tight", children: p.t.split(" ")[0] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/80 text-primary backdrop-blur", children: p.c })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: p.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: p.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md text-[10px] bg-secondary font-medium", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all", children: [
            "Live preview ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }) }, p.t)) })
    ] })
  ] });
}
export {
  PortfolioPage as component
};
