"use client";

import { useEffect, useMemo, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  company: string;
  avatar: {
    label: string;
    description: string;
    className: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Lee Soto",
    role: "Manager y Productor Musical de la Sonora de Tommy Rey",
    company: "La Sonora de Tommy Rey",
    quote:
      "Nos ayudaron a implementar una estructura tributaria que ha sido clave para el crecimiento de nuestras actividades culturales, aprovechando todos los beneficios fiscales disponibles. Hoy operamos de manera más eficiente y sin los obstáculos tributarios que antes enfrentábamos.",
    avatar: {
      label: "LS",
      description: "La Sonora",
      className:
        "bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 text-white",
    },
  },
  {
    name: "Roberto Lasen Suau",
    role: "CEO de Marley Coffee",
    company: "Marley Coffee",
    quote:
      "Gracias a su asesoría, hemos optimizado recursos, evitado contingencias tributarias y mejorado la productividad interna. Su conocimiento profundo del mercado y su atención dedicada nos hacen sentir seguros en cada paso.",
    avatar: {
      label: "MC",
      description: "Marley Coffee",
      className: "bg-amber-500 text-white",
    },
  },
  {
    name: "Roberto Álvarez",
    role: "Sostenedor de Grace College",
    company: "Grace College",
    quote:
      "El manejo financiero y contable de Grace College ha mejorado significativamente desde que comenzamos a trabajar con ellos. Su asesoría ha sido fundamental para llevar a cabo proyectos de expansión, con una planificación fiscal sólida y eficiente.",
    avatar: {
      label: "GC",
      description: "Grace College",
      className:
        "bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-500 text-white",
    },
  },
];

function useCircularInterval(length: number, delay = 8000) {
  const [index, setIndex] = useState(0);
  const maxIndex = useMemo(() => Math.max(length - 1, 0), [length]);

  useEffect(() => {
    if (!length) return;

    const interval = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, delay);

    return () => window.clearInterval(interval);
  }, [delay, length, maxIndex]);

  const goTo = (nextIndex: number) => {
    if (!length) return;
    if (nextIndex < 0) {
      setIndex(maxIndex);
      return;
    }

    setIndex(nextIndex > maxIndex ? 0 : nextIndex);
  };

  return { index, goTo } as const;
}

export default function TestimonialsCarousel() {
  const { index, goTo } = useCircularInterval(testimonials.length);
  const active = testimonials[index];

  return (
    <section aria-labelledby="testimonios-heading" className="mt-28">
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Historias Reales
        </div>
        <div className="space-y-4">
          <h2
            id="testimonios-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Confianza respaldada por nuestros clientes
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            Acompañamos a organizaciones creativas, educativas y de consumo masivo para que gestionen sus finanzas con claridad, visión y resultados.
          </p>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col items-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-[3rem] border border-indigo-100/70 bg-white/80 p-10 text-center shadow-xl shadow-indigo-100/60">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08)_0,_rgba(99,102,241,0)_60%)]" />
          <figure className="relative z-10 flex flex-col items-center gap-8">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full text-base font-semibold uppercase shadow-lg shadow-indigo-200/60 ${active.avatar.className}`}
              aria-label={active.avatar.description}
            >
              {active.avatar.label}
            </div>
            <blockquote className="max-w-3xl text-xl font-medium leading-relaxed text-slate-700">
              “{active.quote}”
            </blockquote>
            <figcaption className="space-y-1">
              <p className="text-base font-semibold text-slate-900">{active.name}</p>
              <p className="text-sm font-medium text-indigo-600">{active.role}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                {active.company}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 shadow-md transition hover:border-indigo-200 hover:text-indigo-700"
            aria-label="Testimonio anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, indicatorIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => goTo(indicatorIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  indicatorIndex === index
                    ? "w-8 bg-indigo-500"
                    : "w-2.5 bg-indigo-200/70 hover:bg-indigo-300"
                }`}
                aria-label={`Ver testimonio de ${testimonial.name}`}
                aria-current={indicatorIndex === index}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 shadow-md transition hover:border-indigo-200 hover:text-indigo-700"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
