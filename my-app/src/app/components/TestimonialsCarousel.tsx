"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Testimonial = {
  companyLogo: string;
  companyAlt: string;
  quote: string;
  author: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    companyLogo: "/testimonials/la-sonora.svg",
    companyAlt: "La Sonora",
    quote:
      "Nos ayudaron a implementar una estructura tributaria que ha sido clave para el crecimiento de nuestras actividades culturales, aprovechando todos los beneficios fiscales disponibles. Hoy operamos de manera más eficiente y sin los obstáculos tributarios que antes enfrentábamos.",
    author: "Leo Soto",
    role: "Manager & Productor Musical de La Sonora de Tommy Rey",
  },
  {
    companyLogo: "/testimonials/marley-coffee.svg",
    companyAlt: "Marley Coffee",
    quote:
      "Gracias a su asesoría, hemos optimizado recursos, evitado contingencias tributarias y mejorado la productividad interna. Su conocimiento profundo del mercado y su atención dedicada nos hacen sentir seguros en cada paso.",
    author: "Roberto Larsen Suau",
    role: "CEO de Marley Coffee",
  },
  {
    companyLogo: "/testimonials/grace-college.svg",
    companyAlt: "Grace College",
    quote:
      "El manejo financiero y contable de Grace College ha mejorado significativamente desde que comenzamos a trabajar con ellos. Su asesoría ha sido fundamental para llevar a cabo proyectos de expansión, con una planificación fiscal sólida y eficiente.",
    author: "Roberto Álvarez",
    role: "Sostenedor de Grace College",
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = useMemo(
    () => TESTIMONIALS[activeIndex],
    [activeIndex]
  );

  const goTo = (index: number) => {
    const normalized = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    setActiveIndex(normalized);
  };

  return (
    <section
      className="relative mt-28 flex flex-col items-center gap-10"
      aria-labelledby="testimonios-heading"
    >
      <div className="flex flex-col gap-4 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Testimonios reales
        </div>
        <div className="space-y-3">
          <h2
            id="testimonios-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Historias que impulsan nuestra asesoría
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
            Acompañamos a organizaciones creativas, retail y educación para que su gestión contable y tributaria sea un motor de crecimiento.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="rounded-[2.75rem] border border-slate-200/80 bg-white/80 p-10 text-center shadow-2xl shadow-indigo-100/60">
          <div className="flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
              <Image
                src={activeTestimonial.companyLogo}
                alt={activeTestimonial.companyAlt}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </span>
          </div>
          <blockquote className="mt-8 space-y-6">
            <p className="text-lg italic leading-relaxed text-slate-700">
              “{activeTestimonial.quote}”
            </p>
            <footer className="space-y-1">
              <p className="text-base font-semibold text-slate-900">
                {activeTestimonial.author}
              </p>
              <p className="text-sm text-slate-500">{activeTestimonial.role}</p>
            </footer>
          </blockquote>
        </div>

        <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-lg shadow-indigo-100/50 backdrop-blur">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
            aria-label="Anterior testimonio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-indigo-500"
                    : "w-2.5 bg-slate-300 hover:bg-indigo-300"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
            aria-label="Siguiente testimonio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
