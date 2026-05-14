import { W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { c as createLucideIcon, L as Link } from "./router-C-c2k0Kn.js";
import { P as PageHero, S as Section, F as FadeIn, a as SectionHeader } from "./Layout-CwvuX1HB.js";
import { U as Users } from "./users-BRGe6F7w.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const timeline = [{
  year: "2017",
  title: "Founded in Bengaluru",
  desc: "Started as a small team with a vision: Science for All."
}, {
  year: "2019",
  title: "First ERP product",
  desc: "Shipped Hospital ERP across 3 hospitals."
}, {
  year: "2021",
  title: "AI division launched",
  desc: "Began building ML and generative AI products."
}, {
  year: "2023",
  title: "100+ projects delivered",
  desc: "Crossed a major milestone in client projects."
}, {
  year: "2025",
  title: "Pan-India presence",
  desc: "Three offices in Bengaluru and growing teams."
}];
const team = [{
  name: "Md Akram",
  role: "Director",
  initials: "MA"
}, {
  name: "Md Yasin",
  role: "CEO and Founder",
  initials: "MY"
}, {
  name: "Arshiya",
  role: "Head of Human Resource",
  initials: "AR"
}, {
  name: "Benilan",
  role: "Senior Software Engineer",
  initials: "BS"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About us", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "We engineer software with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "science and craft" }),
      "."
    ] }), subtitle: "Founded in 2017, X-Ciencia Technologies is a Bengaluru-based software company building ERP, AI, SaaS, and enterprise solutions for clients across industries." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: [{
      icon: Eye,
      title: "Our Vision",
      body: "Science for All — making advanced technology accessible to every business, school, and hospital."
    }, {
      icon: Target,
      title: "Our Mission",
      body: "Build scalable, intelligent software that creates measurable business impact and uplifts the people who use it."
    }, {
      icon: Award,
      title: "Our Values",
      body: "Curiosity, craftsmanship, transparency, and care for the long-term success of our clients and team."
    }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-7 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: c.body })
    ] }) }, c.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why choose us", title: "Six reasons teams pick X-Ciencia." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: [{
        icon: Lightbulb,
        t: "Innovation-first",
        d: "We bring research-backed ideas to production-grade products."
      }, {
        icon: Users,
        t: "Senior teams",
        d: "Architects and senior engineers lead every engagement."
      }, {
        icon: TrendingUp,
        t: "Outcome-driven",
        d: "We measure success by your business KPIs, not lines of code."
      }, {
        icon: Award,
        t: "Proven track record",
        d: "100+ projects across hospitals, colleges, startups, enterprises."
      }, {
        icon: Target,
        t: "Domain depth",
        d: "Deep expertise in healthcare, education, fintech, and SaaS."
      }, {
        icon: Eye,
        t: "Transparent process",
        d: "Weekly demos, open Slack, no surprises."
      }].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 hover:-translate-y-1 transition-smooth h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "w-7 h-7 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: r.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: r.d })
      ] }) }, r.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our process", title: "How we deliver — predictable, transparent, on time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-5", children: ["Discover", "Design", "Develop", "Deliver"].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-bold gradient-text", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: ["We map your goals, users, and constraints in detail.", "Wireframes, system design, and prototypes you can feel.", "Iterative builds with weekly demos and client feedback.", "Production launch, training, and continuous improvement."][i] })
      ] }) }, step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our journey", title: "Eight years of building together." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block md:w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-primary shadow-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pl-12 md:pl-0 md:w-1/2 ${i % 2 ? "md:pr-12" : "md:pl-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-widest text-primary", children: t.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display font-semibold", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t.desc })
          ] }) })
        ] }) }, t.year)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Leadership", title: "The people behind the science." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center text-2xl font-display font-bold text-primary-foreground shadow-glow", children: m.initials }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: m.role })
      ] }) }, m.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/careers", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary", children: [
        "Join our team ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] })
  ] });
}
export {
  AboutPage as component
};
