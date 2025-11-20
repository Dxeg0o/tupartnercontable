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
      className="h-5 w-5 flex-none text-[var(--primary-orange)]"
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="rounded-3xl bg-[linear-gradient(135deg,rgba(106,154,250,0.12),rgba(255,135,80,0.12))] p-8 shadow-inner shadow-[rgba(31,31,31,0.05)]">
      <div className="border-b border-[var(--neutral-light)] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary-orange)]">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--primary-blue)] lg:text-3xl">{title}</h2>
        <p className="mt-4 text-base text-[var(--neutral-gray)]">{description}</p>
      </div>

      <div className="mt-6 space-y-3">
        {categories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={category.title}
              className="overflow-hidden rounded-2xl border border-[var(--neutral-light)] bg-[var(--neutral-white)]/95 backdrop-blur-sm transition hover:border-[var(--secondary-blue)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]">{category.title}</p>
                  <p className="text-base font-semibold text-[var(--neutral-carbon)] lg:text-lg">{category.intro}</p>
                </div>
                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[var(--primary-blue)] bg-[var(--neutral-white)] text-[var(--primary-blue)] shadow-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className={`px-5 transition-all duration-500 ease-out ${
                  isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pt-1">
                  <ul className="space-y-3 text-sm text-[var(--neutral-gray)] lg:text-base">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-[var(--neutral-light)] bg-[rgba(230,230,230,0.35)] p-3 shadow-sm"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {highlights?.length ? (
        <div className="mt-8 rounded-2xl border border-dashed border-[var(--secondary-blue)] bg-[var(--neutral-white)]/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-orange)]">Gestiones recurrentes</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-blue)]/30 bg-[var(--neutral-white)] px-4 py-1.5 text-xs font-semibold text-[var(--primary-blue)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-orange)]" aria-hidden />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
