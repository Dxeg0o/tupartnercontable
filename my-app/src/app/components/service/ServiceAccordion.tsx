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
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none text-[#F4621D]"
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
}: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="rounded-3xl bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)] p-8 shadow-inner shadow-[0_12px_28px_rgba(53,113,223,0.12)]">
      <div className="border-b border-[#E6E6E6] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3571DF]">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[#3571DF] lg:text-3xl">{title}</h2>
        <p className="mt-4 text-base text-[#5A5A5A]">{description}</p>
      </div>

      <div className="mt-6 space-y-3">
        {categories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={category.title}
              className="overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white/90 backdrop-blur-sm transition hover:border-[#6A9AFA]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">{category.title}</p>
                  <p className="text-base font-semibold text-[#092961] lg:text-lg">{category.intro}</p>
                </div>
                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#E6E6E6] bg-white text-[#3571DF] shadow-sm transition-transform duration-300 ${
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
                  <ul className="space-y-3 text-sm text-[#5A5A5A] lg:text-base">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-[#E6E6E6] bg-[#E6E6E6]/40 p-3 shadow-sm"
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
    </section>
  );
}
