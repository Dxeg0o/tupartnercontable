import { ReactNode } from "react";

interface Benefit {
  title: string;
  description: string;
  icon: ReactNode;
}

interface BenefitsGridProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
}

export function BenefitsGrid({ title, subtitle, description, benefits }: BenefitsGridProps) {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary-orange)]">{title}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--primary-blue)] lg:text-3xl">{subtitle}</h2>
        <p className="mt-4 text-base text-[var(--neutral-gray)]">{description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="group relative overflow-hidden rounded-3xl border border-[var(--neutral-light)] bg-[var(--neutral-white)] p-6 shadow-lg shadow-[rgba(53,113,223,0.18)] transition hover:-translate-y-1 hover:shadow-[rgba(244,98,29,0.2)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--neutral-white)]" style={{ background: "var(--official-gradient)" }}>
              {benefit.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--neutral-carbon)]">{benefit.title}</h3>
            <p className="mt-3 text-sm text-[var(--neutral-gray)]">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
