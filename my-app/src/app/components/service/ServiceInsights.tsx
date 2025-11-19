import React from "react";

interface InsightCard {
  title: string;
  description: string;
}

interface ServiceInsightsProps {
  eyebrow: string;
  title: string;
  intro: string;
  insights: InsightCard[];
}

export function ServiceInsights({ eyebrow, title, intro, insights }: ServiceInsightsProps) {
  return (
    <section className="rounded-3xl border border-slate-100/80 bg-white/80 p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/70">
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">{eyebrow}</p>
        <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">{title}</h2>
        <p className="max-w-3xl text-base text-slate-600">{intro}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {insights.map((insight) => (
          <article
            key={insight.title}
            className="flex h-full flex-col gap-3 rounded-3xl bg-slate-50/70 p-6 shadow-inner shadow-white/60"
          >
            <h3 className="text-base font-semibold text-slate-900">{insight.title}</h3>
            <p className="text-sm text-slate-600">{insight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
