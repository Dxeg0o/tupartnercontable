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
          className="rounded-2xl border border-[#E6E6E6] bg-white/90 p-6 shadow-lg shadow-[0_12px_30px_rgba(53,113,223,0.12)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3571DF]">{insight.label}</p>
          <h3 className="mt-3 text-lg font-semibold text-[#092961]">{insight.title}</h3>
          <p className="mt-3 text-sm text-[#5A5A5A]">{insight.description}</p>
        </article>
      ))}
    </section>
  );
}
