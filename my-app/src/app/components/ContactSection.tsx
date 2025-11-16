"use client";

import Image from "next/image";

const contactDetails = [
  {
    label: "Oficina",
    value: "Los Militares 5620, Las Condes, Región Metropolitana",
  },
  {
    label: "Email",
    value: "supervisor@partner-accounting.cl",
    href: "mailto:supervisor@partner-accounting.cl",
  },
  {
    label: "Teléfono",
    value: "+56 9 8159 2966",
    href: "tel:+56981592966",
  },
];

export function ContactSection() {
  const whatsappLink =
    "https://wa.me/56981592966?text=" +
    encodeURIComponent(
      "Hola Partner Accounting, me gustaría coordinar una reunión para conversar sobre asesoría contable."
    );

  return (
    <section id="contacto" className="mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">
        <Image
          src="/Partner-Accounting-Home-01.jpg"
          alt="Vista panorámica de Santiago de Chile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-indigo-900/70" />
        <div className="relative grid gap-12 px-8 py-16 md:px-12 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Conversemos</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Preparados para trabajar en equipo
            </h2>
            <p className="mt-4 text-base text-slate-100">
              Nuestro equipo de expertos está listo para conectarse contigo, diseñar soluciones con impacto y acompañarte en cada etapa. Escríbenos para evaluar tu operación financiera, tributaria o de personas.
            </p>
            <dl className="mt-8 space-y-6 text-sm text-slate-100">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="border-l-2 border-white/30 pl-4">
                  <dt className="font-medium uppercase tracking-wide text-white/80">
                    {detail.label}
                  </dt>
                  {detail.href ? (
                    <dd>
                      <a
                        href={detail.href}
                        className="text-base font-semibold text-white transition hover:text-indigo-200"
                      >
                        {detail.value}
                      </a>
                    </dd>
                  ) : (
                    <dd className="text-base font-semibold text-white">{detail.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
                Agenda inmediata
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                Coordina una videollamada por WhatsApp
              </h3>
              <p className="mt-4 text-base text-slate-100">
                Resolvemos tus dudas en menos de 15 minutos y alineamos próximos pasos para iniciar el trabajo conjunto. Deja tu mensaje y te conectamos con un socio especialista.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400/90 px-6 py-4 text-center text-lg font-semibold text-slate-900 transition hover:bg-emerald-300"
                aria-label="Escribir al equipo por WhatsApp"
              >
                Conversar por WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-4 text-sm text-slate-200/80">
                Atención personalizada de lunes a viernes entre 9:00 y 18:30 hrs (GMT-3).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
