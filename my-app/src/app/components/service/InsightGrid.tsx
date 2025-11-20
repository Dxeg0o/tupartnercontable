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
          className="rounded-2xl border border-[var(--neutral-light)] bg-[var(--neutral-white)] p-6 shadow-lg shadow-[rgba(53,113,223,0.18)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary-orange)]">{insight.label}</p>
          <h3 className="mt-3 text-lg font-semibold text-[var(--primary-blue)]">{insight.title}</h3>
          <p className="mt-3 text-sm text-[var(--neutral-gray)]">{insight.description}</p>
        </article>
      ))}
    </section>
  );
}
