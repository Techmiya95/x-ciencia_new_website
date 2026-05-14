import { r as reactExports, W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { P as PageHero, S as Section, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { c as createLucideIcon, M as Mail, t as toast } from "./router-C-c2k0Kn.js";
import { C as Clock } from "./clock-B3wnu4g2.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const posts = [{
  cat: "AI",
  title: "How Generative AI is reshaping enterprise software",
  excerpt: "From copilots to autonomous agents — what's real today and what's still hype.",
  date: "Apr 24, 2026",
  read: "6 min",
  hue: 245
}, {
  cat: "ERP",
  title: "Choosing the right ERP for your hospital",
  excerpt: "A practical decision framework based on 30+ healthcare deployments.",
  date: "Apr 12, 2026",
  read: "8 min",
  hue: 215
}, {
  cat: "Engineering",
  title: "Multi-tenant SaaS: an architecture playbook",
  excerpt: "Patterns we use to keep tenants isolated, performant, and observable.",
  date: "Mar 30, 2026",
  read: "10 min",
  hue: 230
}, {
  cat: "Career",
  title: "Landing your first AI engineering role",
  excerpt: "Skills, projects, and interview prep that actually move the needle.",
  date: "Mar 15, 2026",
  read: "5 min",
  hue: 200
}, {
  cat: "Trends",
  title: "Edge AI: the next frontier for mobile apps",
  excerpt: "On-device inference, model quantization, and offline-first UX.",
  date: "Mar 02, 2026",
  read: "7 min",
  hue: 250
}, {
  cat: "ERP",
  title: "Why college ERPs fail (and how to fix them)",
  excerpt: "Lessons from rolling out modern ERPs to traditional institutions.",
  date: "Feb 18, 2026",
  read: "6 min",
  hue: 220
}];
function BlogPage() {
  const [email, setEmail] = reactExports.useState("");
  const subscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed! Check your inbox for confirmation.");
    setEmail("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Blog", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Insights from the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "X-Ciencia lab" }),
      "."
    ] }), subtitle: "Engineering deep-dives, AI explainers, ERP playbooks, and career guidance from our team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "!pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: posts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group glass-card rounded-2xl overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-smooth h-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 relative", style: {
        background: `linear-gradient(135deg, oklch(0.78 0.12 ${p.hue}), oklch(0.55 0.16 ${p.hue + 15}))`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-mesh opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/85 text-primary backdrop-blur", children: p.cat })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg leading-snug", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground flex-1", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
            " ",
            p.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            " ",
            p.read
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all", children: [
          "Read article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-10 text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-10 h-10 mx-auto text-primary mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-bold", children: "Stay in the loop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Monthly digest. No spam. Unsubscribe anytime." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: subscribe, className: "mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@company.com", className: "flex-1 px-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth", children: "Subscribe" })
      ] })
    ] }) }) })
  ] });
}
export {
  BlogPage as component
};
