"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "¿Cómo pueden ayudarme a ahorrar dinero en impuestos?",
    answer:
      "Analizamos tus obligaciones tributarias, identificamos beneficios disponibles y diseñamos estrategias preventivas para optimizar tus pagos, siempre con foco en el cumplimiento normativo.",
  },
  {
    question: "¿Qué ventajas tiene externalizar mi contabilidad?",
    answer:
      "Liberás tiempo y recursos internos mientras un equipo especializado mantiene tus libros al día, entrega reportes claros y te acompaña en decisiones financieras clave.",
  },
  {
    question: "¿Ofrecen servicios de asesoría financiera?",
    answer:
      "Sí, integramos análisis financiero, proyecciones y tableros personalizados para ayudarte a anticipar escenarios y tomar decisiones estratégicas informadas.",
  },
  {
    question: "¿Qué tipos de empresas atienden?",
    answer:
      "Trabajamos con startups, pymes y empresas en crecimiento de diversas industrias, adaptando nuestros procesos y tecnología al ritmo de cada organización.",
  },
  {
    question: "¿Qué necesito para contratar sus servicios?",
    answer:
      "Solo agenda una reunión de diagnóstico. Revisaremos tus necesidades, definiremos objetivos y construiremos una propuesta alineada a tu contexto.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const paddingOffset = 32; // Account for vertical padding added when the accordion is open
    const updateHeights = () => {
      setContentHeights(
        contentRefs.current.map((ref) => (ref ? ref.scrollHeight + paddingOffset : 0))
      );
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <section
      id="faq"
      className="relative mt-28 overflow-hidden rounded-[3rem] border border-[var(--neutral-light)] bg-[linear-gradient(135deg,rgba(106,154,250,0.14),rgba(255,135,80,0.12))] px-6 py-16 shadow-[0_25px_60px_rgba(31,31,31,0.08)] sm:px-8"
    >
      <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[rgba(53,113,223,0.18)] blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-[rgba(244,98,29,0.18)] blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--neutral-light)] bg-[var(--neutral-white)]/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary-blue)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--primary-orange)]" />
            Preguntas Frecuentes
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--primary-blue)]">
              ¿Tienes alguna pregunta? <span className="text-[var(--primary-orange)]">¡Tenemos las respuestas!</span>
            </h2>
            <p className="text-lg leading-relaxed text-[var(--neutral-gray)]">
              ¿No encuentras la información que necesitas? Nuestro equipo está listo para asistirte y diseñar una solución a medida para tu negocio.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--primary-orange)] px-8 py-3 text-sm font-semibold text-[var(--neutral-white)] shadow-lg shadow-[rgba(244,98,29,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--secondary-orange)]"
          >
            Contáctanos
          </a>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[var(--neutral-light)] bg-[var(--neutral-white)]/95 shadow-[0_10px_30px_rgba(31,31,31,0.08)] transition hover:border-[var(--secondary-blue)]/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-lg font-semibold leading-tight text-[var(--neutral-carbon)]">{faq.question}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--primary-blue)] text-[var(--primary-blue)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "bg-[rgba(53,113,223,0.15)] shadow-inner" : "bg-[var(--neutral-white)]"
                    }`}
                    aria-hidden
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  style={{ maxHeight: isOpen ? `${contentHeights[index] ?? 0}px` : "0px" }}
                  className={`grid overflow-hidden border-t border-[var(--neutral-light)] bg-[rgba(230,230,230,0.35)] px-6 text-base text-[var(--neutral-gray)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 py-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
