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
    <section id="proceso" className="mt-28 space-y-16" aria-labelledby="proceso-heading">
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Nuestro proceso
        </div>
        <div className="space-y-4">
          <h2 id="proceso-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparencia y resultados en cada etapa
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            Sumamos metodología, data y acompañamiento continuo para que cada decisión financiera se tome con seguridad y visibilidad total.
          </p>
        </div>
      </div>

      <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:h-full before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-indigo-100 before:via-indigo-200/70 before:to-indigo-100 before:content-[''] md:space-y-16 md:before:left-12">
        {steps.map((step) => (
          <article
            key={step.number}
            className="group relative grid gap-8 rounded-[2.2rem] border border-slate-100/80 bg-white/70 p-8 shadow-xl shadow-indigo-100/60 transition hover:-translate-y-1.5 hover:border-indigo-200/70 hover:shadow-2xl md:grid-cols-[auto_1fr] md:items-center"
          >
            <div className="relative flex items-center gap-4 md:flex-col md:items-start">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 text-2xl font-semibold text-white shadow-lg shadow-indigo-200/70">
                {step.number}
              </div>
              <div className="hidden h-full w-px bg-gradient-to-b from-indigo-200 to-transparent md:block" />
            </div>
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm font-medium text-indigo-700 shadow-inner">
                  {step.insight}
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 shadow-md">
                <div
                  className="h-48 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
              </div>
            </div>
            <div className="absolute left-8 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-indigo-200 to-transparent md:block" />
          </article>
        ))}
      </div>
    </section>
  );
}
