import { r as reactExports, W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { P as PageHero, S as Section, a as SectionHeader, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { c as createLucideIcon, t as toast } from "./router-C-c2k0Kn.js";
import { B as Brain, S as Smartphone, G as Globe } from "./smartphone-CTpUpd6T.js";
import { S as Sparkles } from "./sparkles-DObGVNMD.js";
import { C as CodeXml } from "./code-xml-CA72_rPh.js";
import { C as CircleCheck } from "./circle-check-KXmUBG6d.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
];
const Cpu = createLucideIcon("cpu", __iconNode$1);
const __iconNode = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode);
const domains = [{
  icon: Brain,
  t: "Artificial Intelligence"
}, {
  icon: Cpu,
  t: "Machine Learning"
}, {
  icon: Sparkles,
  t: "Generative AI"
}, {
  icon: CodeXml,
  t: "Full Stack Development"
}, {
  icon: Database,
  t: "Python Development"
}, {
  icon: ChartColumn,
  t: "Data Science"
}, {
  icon: Smartphone,
  t: "Mobile App Development"
}, {
  icon: Globe,
  t: "Web Development"
}];
const benefits = ["100% Free Internship Program", "Live, real-world client projects", "Industry mentors with senior expertise", "Hands-on technical training", "Internship Completion Certificate", "Placement Assistance Support"];
const testimonials = [{
  name: "Anika P.",
  role: "AI Intern → Engineer",
  quote: "I shipped a real ML model to production in 6 weeks. Best learning curve of my life."
}, {
  name: "Vikas R.",
  role: "Full-stack Intern",
  quote: "Mentorship was on point. Got placed at a startup right after my internship."
}, {
  name: "Sara M.",
  role: "Data Science Intern",
  quote: "Loved the project diversity. Worked on healthcare and fintech datasets."
}];
function InternshipsPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    domain: "AI",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch within 48 hours.");
    setForm({
      name: "",
      email: "",
      phone: "",
      college: "",
      domain: "AI",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Internships", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Launch your career with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "real-world projects" }),
      "."
    ] }), subtitle: "Join a free, industry-focused internship at X-Ciencia. Work on live products, learn from senior engineers, and earn a certificate plus placement support." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Domains", title: "Choose your specialization." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: domains.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 hover:-translate-y-1 transition-smooth text-center h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-12 h-12 rounded-xl gradient-primary items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: d.t })
      ] }) }, d.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What you get", title: "An internship that actually moves your career." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4 max-w-4xl mx-auto", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-xl p-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: b })
      ] }) }, b)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Training workflow", title: "Six weeks. Three milestones. One real project." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-5", children: ["Apply", "Onboard", "Build", "Certify"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-bold gradient-text", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: ["Submit the application form below.", "Get matched with a mentor and team.", "Work on live, client-facing features.", "Receive a certificate and placement support."][i] })
      ] }) }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Student stories", title: "From interns to engineers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Apply now", title: "Internship application", subtitle: "Fill out the form — our team will reach out within 48 hours.", center: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", value: form.name, onChange: (v) => setForm({
          ...form,
          name: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", value: form.email, onChange: (v) => setForm({
          ...form,
          email: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", value: form.phone, onChange: (v) => setForm({
          ...form,
          phone: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "College / University", value: form.college, onChange: (v) => setForm({
          ...form,
          college: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Preferred domain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.domain, onChange: (e) => setForm({
            ...form,
            domain: e.target.value
          }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary", children: domains.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: d.t }, d.t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Why X-Ciencia?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: form.message, onChange: (e) => setForm({
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
function Field({
  label,
  value,
  onChange,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required, value, onChange: (e) => onChange(e.target.value), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
  ] });
}
export {
  InternshipsPage as component
};
