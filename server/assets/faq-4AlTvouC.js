import { W as jsxRuntimeExports, r as reactExports } from "./server-CCiMbsqM.js";
import { c as createLucideIcon, L as Link } from "./router-C-c2k0Kn.js";
import { P as PageHero, S as Section, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode);
const groups = [{
  cat: "Internships",
  items: [{
    q: "Is the internship really free?",
    a: "Yes — our internship program is 100% free. We invest in students because we believe in giving back."
  }, {
    q: "Will I get a certificate?",
    a: "Yes, every successful intern receives an internship completion certificate plus letter of recommendation."
  }, {
    q: "Do you offer placement assistance?",
    a: "Yes. We help shortlisted interns with placements at X-Ciencia or partner companies."
  }]
}, {
  cat: "Software Services",
  items: [{
    q: "What's a typical engagement?",
    a: "Most projects start with a 2-week discovery, followed by iterative 2-week sprints with weekly demos."
  }, {
    q: "Do you sign NDAs?",
    a: "Yes, mutual NDAs are standard before any commercial discussion."
  }, {
    q: "Where do you build?",
    a: "Our teams are based in Bengaluru with hybrid and remote-friendly engagements."
  }]
}, {
  cat: "ERP Solutions",
  items: [{
    q: "Can your ERP be customized?",
    a: "Yes. Our ERPs are modular and we deeply customize for hospitals, colleges, and enterprises."
  }, {
    q: "How long does deployment take?",
    a: "Typical deployment ranges from 4 to 12 weeks depending on scope and integrations."
  }, {
    q: "Do you provide training and support?",
    a: "Yes — onboarding, training sessions, documentation, and tiered support are included."
  }]
}, {
  cat: "Hiring & Consultation",
  items: [{
    q: "How do I apply for a role?",
    a: "Visit the Careers page and submit the application form. We respond within a week."
  }, {
    q: "Do you offer free consultations?",
    a: "Yes — schedule a 30-min discovery call from the Contact page. No obligation."
  }]
}];
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full px-6 py-5 flex items-center justify-between gap-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-5 text-sm text-muted-foreground leading-relaxed", children: a }) }) })
  ] });
}
function FaqPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "FAQ", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Questions, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "answered" }),
      "."
    ] }), subtitle: "If you can't find what you're looking for, drop us a message — we'll get back within 48 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "!pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-12", children: [
      groups.map((g, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: gi * 0.05, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-2xl mb-4", children: g.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { ...it }, it.q)) })
      ] }, g.cat)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl", children: "Still have questions?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Our team is ready to help." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth", children: [
          "Contact us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  FaqPage as component
};
