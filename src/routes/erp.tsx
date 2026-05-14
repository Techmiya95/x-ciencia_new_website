import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse, GraduationCap, UserCog, Boxes, Receipt, Clock,
  Users, Cog, ArrowRight, CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/site/Motion";
import { PageHero, Section, SectionHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/erp")({
  head: () => ({
    meta: [
      { title: "ERP Solutions — X-Ciencia Technologies" },
      { name: "description", content: "Hospital ERP, College ERP, HRMS, Inventory, Billing, Attendance, CRM, and business automation by X-Ciencia." },
      { property: "og:title", content: "ERP Solutions — X-Ciencia" },
      { property: "og:description", content: "Modular ERPs for hospitals, colleges, and enterprises." },
      { property: "og:url", content: "/erp" },
    ],
    links: [{ rel: "canonical", href: "/erp" }],
  }),
  component: ErpPage,
});

const products = [
  { icon: HeartPulse, t: "Hospital ERP", d: "OPD, IPD, Pharmacy, Lab, Billing — one unified platform." },
  { icon: GraduationCap, t: "College ERP", d: "Admissions, attendance, exams, fees, faculty management." },
  { icon: UserCog, t: "HRMS", d: "Employees, payroll, leaves, performance — all in one." },
  { icon: Boxes, t: "Inventory Management", d: "Stock, vendors, purchase orders, warehouse tracking." },
  { icon: Receipt, t: "Billing Systems", d: "GST-ready invoicing, recurring billing, multi-currency." },
  { icon: Clock, t: "Attendance Management", d: "Biometric, RFID, mobile-based attendance tracking." },
  { icon: Users, t: "CRM Platforms", d: "Pipelines, automations, customer 360 dashboards." },
  { icon: Cog, t: "Business Automation", d: "Custom workflow engines and approval systems." },
];

const industries = ["Healthcare", "Education", "Manufacturing", "Retail", "Logistics", "Real Estate", "Hospitality", "Finance"];

function ErpPage() {
  return (
    <>
      <PageHero
        eyebrow="ERP Solutions"
        title={<>Run your operations on <span className="gradient-text">one intelligent platform</span>.</>}
        subtitle="Modular ERPs purpose-built for hospitals, colleges, and enterprises — deploy fast, customize deeply, scale infinitely."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-glow hover:scale-[1.03] transition-smooth">
          Request Demo <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      {/* Dashboard mockup */}
      <Section className="!pt-4">
        <FadeIn>
          <div className="glass-card rounded-3xl p-4 md:p-6 shadow-glow">
            <div className="rounded-2xl bg-gradient-to-br from-secondary to-background p-6 grid md:grid-cols-4 gap-4">
              {[
                { l: "Patients today", v: "284" },
                { l: "Revenue", v: "₹6.2L" },
                { l: "Occupancy", v: "82%" },
                { l: "Pending labs", v: "37" },
              ].map((s) => (
                <div key={s.l} className="bg-card rounded-xl p-4 shadow-soft">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                  <p className="text-2xl font-display font-bold gradient-text mt-1">{s.v}</p>
                </div>
              ))}
              <div className="md:col-span-4 bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-end gap-1.5 h-32">
                  {[60, 75, 50, 85, 70, 92, 80, 95, 88, 100, 78, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md gradient-primary opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Products */}
      <Section className="!pt-4">
        <SectionHeader eyebrow="Product suite" title="Eight modules. One source of truth." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <FadeIn key={p.t} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-smooth h-full">
                <span className="inline-flex w-11 h-11 rounded-xl gradient-primary items-center justify-center mb-3">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </span>
                <h3 className="font-display font-semibold">{p.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeader eyebrow="Benefits" title="Why teams switch to X-Ciencia ERP." />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "40% faster operations", d: "Replace spreadsheets with workflows that just work." },
            { t: "Real-time visibility", d: "Dashboards for every role — owners, managers, staff." },
            { t: "Future-proof architecture", d: "API-first, cloud-native, and easy to integrate." },
          ].map((b, i) => (
            <FadeIn key={b.t} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <CheckCircle2 className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-display font-semibold text-lg">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader eyebrow="Industries served" title="Built for the way your business runs." />
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="px-5 py-2.5 rounded-full glass-card text-sm font-medium hover:text-primary transition-smooth">
              {i}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
