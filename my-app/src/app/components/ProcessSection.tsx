interface ProcessStep {
  number: string;
  title: string;
  description: string;
  insight: string;
  image: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="mt-28 space-y-16" aria-labelledby="proceso-heading">
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--neutral-light)] bg-[rgba(106,154,250,0.15)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]">
          <span className="h-2 w-2 rounded-full bg-[var(--primary-orange)]" />
          Nuestro proceso
        </div>
        <div className="space-y-4">
          <h2 id="proceso-heading" className="text-3xl font-bold tracking-tight text-[var(--primary-blue)] sm:text-4xl">
            Transparencia y resultados en cada etapa
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--neutral-gray)]">
            Sumamos metodología, data y acompañamiento continuo para que cada decisión financiera se tome con seguridad y visibilidad total.
          </p>
        </div>
      </div>

      <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:h-full before:w-0.5 before:rounded-full before:bg-[var(--neutral-light)] before:content-[''] md:space-y-16 md:before:left-12">
        {steps.map((step) => (
          <article
            key={step.number}
            className="group relative grid gap-8 rounded-[2.2rem] border border-[var(--neutral-light)] bg-[var(--neutral-white)]/90 p-8 shadow-xl shadow-[rgba(53,113,223,0.18)] transition hover:-translate-y-1.5 hover:shadow-[rgba(244,98,29,0.2)] md:grid-cols-[auto_1fr] md:items-center"
          >
            <div className="relative flex items-center gap-4 md:flex-col md:items-start">
              <div
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-semibold text-[var(--neutral-white)] shadow-lg shadow-[rgba(53,113,223,0.18)]"
                style={{ background: "var(--official-gradient)" }}
              >
                {step.number}
              </div>
              <div className="hidden h-full w-px bg-[var(--neutral-light)] md:block" />
            </div>
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--neutral-carbon)]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--neutral-gray)]">{step.description}</p>
                <div className="rounded-2xl border border-[var(--neutral-light)] bg-[rgba(106,154,250,0.15)] p-4 text-sm font-medium text-[var(--primary-blue)] shadow-inner">
                  {step.insight}
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] border border-[var(--neutral-light)] shadow-md">
                <div
                  className="h-48 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
              </div>
            </div>
            <div className="absolute left-8 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-[var(--neutral-light)] md:block" />
          </article>
        ))}
      </div>
    </section>
  );
}
