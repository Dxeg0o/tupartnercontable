import React from "react";

interface ServiceCategory {
  title: string;
  intro: string;
  items: string[];
}

interface ServiceAccordionProps {
  eyebrow: string;
  title: string;
  intro: string;
  categories: ServiceCategory[];
  highlights?: string[];
}

export function ServiceAccordion({ eyebrow, title, intro, categories, highlights }: ServiceAccordionProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-white via-slate-50 to-white/70 p-8 shadow-inner shadow-white/60 ring-1 ring-slate-200">
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600">{intro}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <details
            key={category.title}
            className="group rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-left text-base font-semibold text-slate-900">
              <span>{category.title}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Ver</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{category.intro}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.5 7.75a.75.75 0 0 1-1.08-.02l-3.5-3.75a.75.75 0 1 1 1.1-1.02l2.95 3.162 6.96-7.19a.75.75 0 0 1 1.064-.008Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {highlights && highlights.length > 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-indigo-200 bg-white/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Gestiones recurrentes</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
