import { r as reactExports, W as jsxRuntimeExports } from "./server-CCiMbsqM.js";
import { P as PageHero, S as Section, F as FadeIn } from "./Layout-CwvuX1HB.js";
import { M as Mail, P as Phone, a as MessageCircle, b as MapPin, t as toast } from "./router-C-c2k0Kn.js";
import { A as ArrowRight } from "./arrow-right-BoZId6Qf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const offices = [{
  name: "Rajajinagar",
  addr: "Rajajinagar, Bengaluru"
}, {
  name: "Frazer Town",
  addr: "Frazer Town, Bengaluru"
}, {
  name: "Jayanagar",
  addr: "Jayanagar, Bengaluru – 560069"
}];
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 48 hours.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "talk" }),
      "."
    ] }), subtitle: "Tell us about your project, your team, or just say hello. We respond within 48 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "!pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-5 mb-10", children: [{
        icon: Mail,
        t: "Email",
        lines: ["hr@xciencia.com", "xcienciatechnologies@gmail.com"]
      }, {
        icon: Phone,
        t: "Phone",
        lines: ["+91 9591745792", "+91 8217679738"]
      }, {
        icon: MessageCircle,
        t: "WhatsApp",
        lines: ["+91 9591745792", "Chat with us anytime"]
      }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", children: c.t }),
        c.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: l }, l))
      ] }) }, c.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl mb-1", children: "Send us a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "We'll get back within 48 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.subject, onChange: (e) => setForm({
                ...form,
                subject: e.target.value
              }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, value: form.message, onChange: (e) => setForm({
                ...form,
                message: e.target.value
              }), className: "w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth", children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "X-Ciencia Bengaluru office", src: "https://www.google.com/maps?q=Bengaluru&output=embed", className: "w-full h-64 border-0", loading: "lazy" }) }),
          offices.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold", children: [
                o.name,
                " Office"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: o.addr })
            ] })
          ] }, o.name))
        ] }) })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
