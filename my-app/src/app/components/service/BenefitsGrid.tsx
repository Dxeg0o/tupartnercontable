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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{title}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">{subtitle}</h2>
        <p className="mt-4 text-base text-slate-600">{description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-indigo-100/40 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-100/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              {benefit.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{benefit.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
