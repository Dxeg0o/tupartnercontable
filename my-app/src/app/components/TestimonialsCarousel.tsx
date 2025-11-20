"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  companyLogo: string;
  companyAlt: string;
  quote: string;
  author: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    companyLogo: "/carrousel/Tommy-Rey.jpg",
    companyAlt: "Leo Soto de La Sonora de Tommy Rey",
    quote:
      "Nos ayudaron a implementar una estructura tributaria que ha sido clave para el crecimiento de nuestras actividades culturales, aprovechando todos los beneficios fiscales disponibles. Hoy operamos de manera más eficiente y sin los obstáculos tributarios que antes enfrentábamos.",
    author: "Leo Soto",
    role: "Manager & Productor Musical de La Sonora de Tommy Rey",
  },
  {
    companyLogo: "/carrousel/Marley.jpg",
    companyAlt: "Roberto Larsen Suau de Marley Coffee",
    quote:
      "Gracias a su asesoría, hemos optimizado recursos, evitado contingencias tributarias y mejorado la productividad interna. Su conocimiento profundo del mercado y su atención dedicada nos hacen sentir seguros en cada paso.",
    author: "Roberto Larsen Suau",
    role: "CEO de Marley Coffee",
  },
  {
    companyLogo: "/carrousel/Greace-College.png",
    companyAlt: "Roberto Álvarez de Grace College",
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

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section
      className="relative mt-28 flex flex-col items-center gap-10"
      aria-labelledby="testimonios-heading"
    >
      <div className="flex flex-col gap-4 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">
          <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
          Testimonios reales
        </div>
        <div className="space-y-3">
          <h2
            id="testimonios-heading"
            className="text-3xl font-bold tracking-tight text-[#3571DF] sm:text-4xl"
          >
            Historias que impulsan nuestra asesoría
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
            Acompañamos a organizaciones creativas, retail y educación para que su gestión contable y tributaria sea un motor de crecimiento.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-[#E6E6E6] bg-white/85 p-10 text-center shadow-2xl shadow-[0_18px_46px_rgba(53,113,223,0.16)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white to-[#6A9AFA0D]" />

          <div key={activeIndex} className="relative space-y-8 animate-testimonial">
            <div className="flex justify-center">
              <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] shadow-[0_10px_30px_rgba(53,113,223,0.18)] animate-logo">
                <Image
                  src={activeTestimonial.companyLogo}
                  alt={activeTestimonial.companyAlt}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              </span>
            </div>
            <blockquote className="space-y-6">
              <p className="text-lg italic leading-relaxed text-[#5A5A5A]">
                “{activeTestimonial.quote}”
              </p>
              <footer className="space-y-1">
                <p className="text-base font-semibold text-[#1F1F1F]">
                  {activeTestimonial.author}
                </p>
                <p className="text-sm text-[#5A5A5A]">{activeTestimonial.role}</p>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-[#E6E6E6] bg-white/90 px-4 py-2 shadow-lg shadow-[0_12px_28px_rgba(53,113,223,0.14)] backdrop-blur">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] text-[#5A5A5A] transition hover:bg-[#3571DF]/20 hover:text-[#3571DF]"
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
                    ? "w-8 bg-[#F4621D]"
                    : "w-2.5 bg-[#E6E6E6] hover:bg-[#6A9AFA]"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] text-[#5A5A5A] transition hover:bg-[#3571DF]/20 hover:text-[#3571DF]"
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

      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
            filter: blur(4px);
          }
          60% {
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-testimonial {
          animation: fadeSlide 800ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .animate-logo {
          animation: logoReveal 750ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
