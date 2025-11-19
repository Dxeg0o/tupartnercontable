interface InsightProps {
  label: string;
  title: string;
  description: string;
}

interface InsightGridProps {
  insights: InsightProps[];
}

export function InsightGrid({ insights }: InsightGridProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {insights.map((insight) => (
        <article
          key={insight.title}
          className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-indigo-100/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">{insight.label}</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{insight.title}</h3>
          <p className="mt-3 text-sm text-slate-600">{insight.description}</p>
        </article>
      ))}
    </section>
  );
}
