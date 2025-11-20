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
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3571DF]">{title}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[#3571DF] lg:text-3xl">{subtitle}</h2>
        <p className="mt-4 text-base text-[#5A5A5A]">{description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="group relative overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white/85 p-6 shadow-lg shadow-[0_14px_32px_rgba(53,113,223,0.14)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(244,98,29,0.2)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6A9AFA1A] text-[#3571DF] ring-1 ring-[#6A9AFA]">
              {benefit.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#092961]">{benefit.title}</h3>
            <p className="mt-3 text-sm text-[#5A5A5A]">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
