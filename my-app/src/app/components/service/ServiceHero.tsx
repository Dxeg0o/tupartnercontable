import { ReactNode } from "react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  actions?: ReactNode;
}

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  description,
  highlights,
  actions,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,rgba(53,113,223,0.16),rgba(244,98,29,0.16))] px-6 pb-14 pt-12 shadow-2xl shadow-[rgba(53,113,223,0.18)] ring-1 ring-[var(--neutral-light)] lg:px-12 lg:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,113,223,0.18),transparent_35%),_radial-gradient(circle_at_80%_0%,rgba(244,98,29,0.18),transparent_25%)]" aria-hidden />
      <div className="relative max-w-4xl text-[var(--neutral-carbon)]">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--primary-orange)]">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--primary-blue)] lg:text-4xl">{title}</h1>
        <p className="mt-3 text-lg font-medium text-[var(--neutral-gray)] lg:text-xl">{subtitle}</p>
        <p className="mt-4 max-w-3xl text-base text-[var(--neutral-gray)] lg:text-lg">{description}</p>

        {highlights?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-blue)]/30 bg-[var(--neutral-white)] px-4 py-2 text-xs font-semibold text-[var(--primary-blue)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-orange)]" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
