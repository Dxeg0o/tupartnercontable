import React from "react";

interface BenefitCard {
  title: string;
  description: string;
}

interface BenefitsGridProps {
  eyebrow: string;
  title: string;
  intro: string;
  benefits: BenefitCard[];
}

export function BenefitsGrid({ eyebrow, title, intro, benefits }: BenefitsGridProps) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600">{intro}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-lg shadow-indigo-100/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12.75 9.5 18 20 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
            </div>
            <p className="text-sm text-slate-600">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
