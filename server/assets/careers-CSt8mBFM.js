import { r as reactExports, W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { P as PageHero, S as Section, a as SectionHeader, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { c as createLucideIcon, b as MapPin, t as toast } from "./router-C-c2k0Kn.js";
import { S as Sparkles } from "./sparkles-DObGVNMD.js";
import { U as Users } from "./users-BRGe6F7w.js";
import { B as Briefcase } from "./briefcase-BbgfC7g1.js";
import { C as Clock } from "./clock-B3wnu4g2.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
];
const Coffee = createLucideIcon("coffee", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const jobs = [{
  role: "Python Developer",
  type: "Full-time",
  level: "Mid–Senior",
  loc: "Bengaluru / Hybrid"
}, {
  role: "Full Stack Developer",
  type: "Full-time",
  level: "Mid",
  loc: "Bengaluru"
}, {
  role: "AI Engineer",
  type: "Full-time",
  level: "Senior",
  loc: "Bengaluru / Remote"
}, {
  role: "React Developer",
  type: "Full-time",
  level: "Junior–Mid",
  loc: "Bengaluru"
}, {
  role: "UI/UX Designer",
  type: "Full-time",
  level: "Mid",
  loc: "Bengaluru"
}, {
  role: "Software Engineer",
  type: "Full-time",
  level: "Fresher",
  loc: "Bengaluru"
}, {
  role: "Business Development Executive",
  type: "Full-time",
  level: "Mid",
  loc: "Bengaluru"
}];
function CareersPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    role: jobs[0].role,
    exp: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    toast.success("Application received. We'll review and get back to you soon.");
    setForm({
      name: "",
      email: "",
      role: jobs[0].role,
      exp: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Careers", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Build software that ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "matters" }),
      ", with people who care."
    ] }), subtitle: "We're hiring engineers, designers, and operators who love their craft. Freshers and senior pros welcome." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Culture", title: "What it's like to work here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-5", children: [{
        icon: Heart,
        t: "People-first",
        d: "Generous leave, mental health support, family vibes."
      }, {
        icon: Sparkles,
        t: "Craft-first",
        d: "We invest in clean code, design reviews, and learning."
      }, {
        icon: Users,
        t: "Senior-led teams",
        d: "Mentors who actually have time to mentor."
      }, {
        icon: Coffee,
        t: "Hybrid Bengaluru",
        d: "Three offices, smart remote, no chaos."
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-7 h-7 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: c.d })
      ] }) }, c.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Open roles", title: "We're growing across engineering, design, and growth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-4xl mx-auto", children: jobs.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:shadow-glow transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: j.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                " ",
                j.type
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: j.level }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                " ",
                j.loc
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setForm((f) => ({
          ...f,
          role: j.role
        })), className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground gradient-primary hover:scale-105 transition-smooth self-start md:self-center", children: [
          "Apply ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) }, j.role)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Hiring process", title: "Four steps. Respectful of your time." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-5", children: ["Apply", "Screen call", "Tech round", "Offer"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-bold gradient-text", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: s })
      ] }) }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Apply", title: "Send us your application", subtitle: "Attach your resume link in the message. We read every submission.", center: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.role, onChange: (e) => setForm({
            ...form,
            role: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary", children: jobs.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: j.role }, j.role)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Years of experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.exp, onChange: (e) => setForm({
            ...form,
            exp: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Message + resume link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, required: true, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth", children: [
          "Submit Application ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
export {
  CareersPage as component
};
