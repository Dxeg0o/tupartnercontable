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
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-[#6A9AFA] bg-white shadow-md"
                  : "border-[#E6E6E6] bg-white/90 hover:border-[#6A9AFA]"
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">
                    {category.title}
                  </p>
                  <p className="text-base font-semibold text-[#092961] lg:text-lg">
                    {category.intro}
                  </p>
                </div>
                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#E6E6E6] shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-[#3571DF] text-white border-[#3571DF]"
                      : "rotate-0 bg-white text-[#3571DF]"
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
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#E6E6E6] bg-[#F8FAFC] px-6 py-6">
                    <ul className="space-y-3 text-sm text-[#5A5A5A] lg:text-base">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-[#E6E6E6] bg-white p-4 shadow-sm transition hover:border-[#6A9AFA]/30"
                        >
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
