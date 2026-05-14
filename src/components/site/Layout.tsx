import type { ReactNode } from "react";
import { FadeIn } from "./Motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <FadeIn>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium glass-card text-primary mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </FadeIn>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <FadeIn className={center ? "text-center max-w-3xl mx-auto mb-12" : "max-w-3xl mb-12"}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </FadeIn>
  );
}
