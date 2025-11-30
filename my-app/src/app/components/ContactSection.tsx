"use client";

import Image from "next/image";

const contactDetails = [

  {
    label: "Email",
    value: "andres.cabrera@tupartnercontador.cl",
    href: "mailto:andres.cabrera@tupartnercontador.cl",
  },
  {
    label: "Teléfono",
    value: "+56 9 4681 6949",
    href: "https://wa.me/56946816949?text=Hola%20Tu%20Partner%20Contable,%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20para%20conversar%20sobre%20asesor%C3%ADa%20contable.",
  },
];

export function ContactSection() {
  const whatsappLink =
    "https://wa.me/56946816949?text=" +
    encodeURIComponent(
      "Hola Tu Partner Contable, me gustaría coordinar una reunión para conversar sobre asesoría contable."
    );

  return (
    <section id="contacto" className="mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white shadow-2xl">
        <Image
          src="/tupartnercontable-imagen.png"
          alt="Vista panorámica de Santiago de Chile"
          fill
          className="object-cover opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#3571DF,#F4621D)] opacity-5" />
        <div className="relative grid gap-12 px-8 py-16 md:px-12 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#3571DF]">Conversemos</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#3571DF] md:text-4xl">
              Preparados para trabajar en equipo
            </h2>
            <p className="mt-4 text-base text-[#5A5A5A]">
              Nuestro equipo de expertos está listo para conectarse contigo, diseñar soluciones con impacto y acompañarte en cada etapa. Escríbenos para evaluar tu operación financiera, tributaria o de personas.
            </p>
            <dl className="mt-8 space-y-6 text-sm text-[#5A5A5A]">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="border-l-2 border-[#E6E6E6] pl-4">
                  <dt className="font-medium uppercase tracking-wide text-[#092961]">
                    {detail.label}
                  </dt>
                  {detail.href ? (
                    <dd>
                      <a
                        href={detail.href}
                        className="text-base font-semibold text-[#3571DF] transition hover:text-[#F4621D]"
                      >
                        {detail.value}
                      </a>
                    </dd>
                  ) : (
                    <dd className="text-base font-semibold text-[#3571DF]">{detail.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-[#E6E6E6] bg-white/90 p-8 shadow-[0_14px_32px_rgba(53,113,223,0.14)] backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-[#3571DF]">
                Contacto directo
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#3571DF]">
                Escríbenos directamente por WhatsApp
              </h3>
              <p className="mt-4 text-base text-[#5A5A5A]">
                Resolvemos tus dudas puntuales y te orientamos sobre el mejor servicio para tu empresa. Inicia el chat y te responderemos a la brevedad.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4621D] px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#FF8750]"
                aria-label="Escribir al equipo por WhatsApp"
              >
                Escribir por WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-4 text-sm text-[#5A5A5A]">
                Atención personalizada de lunes a viernes entre 9:00 y 18:30 hrs (GMT-3).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
