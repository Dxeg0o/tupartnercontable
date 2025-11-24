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
      "Libera tiempo y recursos internos mientras un equipo especializado mantiene tus libros al día, entrega reportes claros y te acompaña en decisiones financieras clave.",
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
  const whatsappLink =
    "https://wa.me/56981592966?text=" +
    encodeURIComponent(
      "Hola Tu Partner Contable, me gustaría coordinar una reunión para conversar sobre asesoría contable."
    );

  return (
    <section
      id="faq"
      className="relative mt-28 overflow-hidden rounded-[3rem] border border-[#E6E6E6] bg-[radial-gradient(circle_at_top_left,#6A9AFA33,transparent),radial-gradient(circle_at_bottom_right,#FF875033,transparent),linear-gradient(180deg,#FFFFFF,#E6E6E6)] px-6 py-16 shadow-[0_25px_60px_rgba(53,113,223,0.18)] sm:px-8"
    >
      <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[#6A9AFA33] blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-[#FF875033] blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#3571DF] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Preguntas Frecuentes
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-[#3571DF]">
              ¿Tienes alguna pregunta? <span className="text-[#3571DF]">¡Tenemos las respuestas!</span>
            </h2>
            <p className="text-lg leading-relaxed text-[#5A5A5A]">
              ¿No encuentras la información que necesitas? Nuestro equipo está listo para asistirte y diseñar una solución a medida para tu negocio.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#F4621D] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[0_12px_30px_rgba(244,98,29,0.25)] transition hover:-translate-y-0.5 hover:bg-[#FF8750]"
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
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-[#6A9AFA] bg-white shadow-md" : "border-[#E6E6E6] bg-white/90"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-lg font-semibold leading-tight text-[#3571DF]">{faq.question}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E6E6E6] text-[#5A5A5A] transition-all duration-300 ${
                      isOpen ? "bg-[#3571DF] text-white border-[#3571DF] rotate-180" : "bg-white rotate-0"
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="h-4 w-4"
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
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-base leading-relaxed text-[#5A5A5A]">
                      {faq.answer}
                    </div>
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
