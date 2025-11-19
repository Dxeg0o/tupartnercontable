"use client";

import { useState } from "react";

interface ServiceCategory {
  title: string;
  intro: string;
  items: string[];
}

interface ServiceAccordionProps {
  eyebrow: string;
  title: string;
  description: string;
  categories: ServiceCategory[];
  highlights?: string[];
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none text-emerald-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ServiceAccordion({
  eyebrow,
  title,
  description,
  categories,
  highlights,
}: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rounded-3xl bg-gradient-to-r from-white via-slate-50 to-white/70 p-8 shadow-inner shadow-white/40">
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">{title}</h2>
        <p className="mt-4 text-base text-slate-600">{description}</p>
      </div>

      <div className="mt-6 divide-y divide-slate-200">
        {categories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={category.title} className="py-4">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    {category.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{category.intro}</p>
                </div>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {isOpen ? (
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl bg-white/70 p-3 ring-1 ring-slate-100">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      {highlights?.length ? (
        <div className="mt-8 rounded-2xl border border-dashed border-indigo-200 bg-white/60 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Gestiones recurrentes</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
