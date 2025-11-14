"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative mt-28 overflow-hidden rounded-[3rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/60 to-slate-50 px-8 py-16 shadow-xl"
    >
      <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-indigo-100 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-5xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Preguntas Frecuentes
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              ¿Tienes alguna pregunta? <span className="text-indigo-600">¡Tenemos las respuestas!</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              ¿No encuentras la información que necesitas? Nuestro equipo está listo para asistirte y diseñar una solución a medida para tu negocio.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex w-fit items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-indigo-700"
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
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition ${
                      isOpen ? "bg-indigo-600 text-white border-indigo-500" : "bg-white"
                    }`}
                    aria-hidden
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/70 px-6 pb-6 pt-2 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
