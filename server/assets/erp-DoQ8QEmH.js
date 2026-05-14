import { W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { c as createLucideIcon, L as Link } from "./router-C-c2k0Kn.js";
import { P as PageHero, S as Section, F as FadeIn, a as SectionHeader } from "./Layout-CwvuX1HB.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import { H as HeartPulse, G as GraduationCap } from "./heart-pulse-x1dq_TgA.js";
import { B as Boxes, C as Cog } from "./cog-Dd710n37.js";
import { C as Clock } from "./clock-B3wnu4g2.js";
import { U as Users } from "./users-BRGe6F7w.js";
import { C as CircleCheck } from "./circle-check-KXmUBG6d.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("receipt", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }],
  ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }],
  ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }],
  ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }],
  ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }],
  ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }],
  ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }],
  ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }],
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCog = createLucideIcon("user-cog", __iconNode);
const products = [{
  icon: HeartPulse,
  t: "Hospital ERP",
  d: "OPD, IPD, Pharmacy, Lab, Billing — one unified platform."
}, {
  icon: GraduationCap,
  t: "College ERP",
  d: "Admissions, attendance, exams, fees, faculty management."
}, {
  icon: UserCog,
  t: "HRMS",
  d: "Employees, payroll, leaves, performance — all in one."
}, {
  icon: Boxes,
  t: "Inventory Management",
  d: "Stock, vendors, purchase orders, warehouse tracking."
}, {
  icon: Receipt,
  t: "Billing Systems",
  d: "GST-ready invoicing, recurring billing, multi-currency."
}, {
  icon: Clock,
  t: "Attendance Management",
  d: "Biometric, RFID, mobile-based attendance tracking."
}, {
  icon: Users,
  t: "CRM Platforms",
  d: "Pipelines, automations, customer 360 dashboards."
}, {
  icon: Cog,
  t: "Business Automation",
  d: "Custom workflow engines and approval systems."
}];
const industries = ["Healthcare", "Education", "Manufacturing", "Retail", "Logistics", "Real Estate", "Hospitality", "Finance"];
function ErpPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "ERP Solutions", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Run your operations on ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "one intelligent platform" }),
      "."
    ] }), subtitle: "Modular ERPs purpose-built for hospitals, colleges, and enterprises — deploy fast, customize deeply, scale infinitely.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth", children: [
      "Request Demo ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "!pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-3xl p-4 md:p-6 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-secondary to-background p-6 grid md:grid-cols-4 gap-4", children: [
      [{
        l: "Patients today",
        v: "284"
      }, {
        l: "Revenue",
        v: "₹6.2L"
      }, {
        l: "Occupancy",
        v: "82%"
      }, {
        l: "Pending labs",
        v: "37"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl p-4 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: s.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold gradient-text mt-1", children: s.v })
      ] }, s.l)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 bg-card rounded-xl p-5 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-32", children: [60, 75, 50, 85, 70, 92, 80, 95, 88, 100, 78, 90].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t-md gradient-primary opacity-80", style: {
        height: `${h}%`
      } }, i)) }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "!pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Product suite", title: "Eight modules. One source of truth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 hover:-translate-y-1 transition-smooth h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: p.d })
      ] }) }, p.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Benefits", title: "Why teams switch to X-Ciencia ERP." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: [{
        t: "40% faster operations",
        d: "Replace spreadsheets with workflows that just work."
      }, {
        t: "Real-time visibility",
        d: "Dashboards for every role — owners, managers, staff."
      }, {
        t: "Future-proof architecture",
        d: "API-first, cloud-native, and easy to integrate."
      }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-7 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.d })
      ] }) }, b.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Industries served", title: "Built for the way your business runs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: industries.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-5 py-2.5 rounded-full glass-card text-sm font-medium hover:text-primary transition-smooth", children: i }, i)) })
    ] })
  ] });
}
export {
  ErpPage as component
};
