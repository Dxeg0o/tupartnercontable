import Link from "next/link";

interface Service {
  id: string;
  label: string;
  description: string;
  highlights: string[];
  href: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const whatsappLink =
    "https://wa.me/56981592966?text=" +
    encodeURIComponent(
      "Hola Tu Partner Contable, me gustaría coordinar una reunión para conversar sobre asesoría contable."
    );

  return (
    <section className="mt-24" aria-labelledby="servicios-heading">
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">
          <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
          Servicios integrales
        </div>
        <div className="space-y-4">
          <h2 id="servicios-heading" className="text-3xl font-bold tracking-tight text-[#3571DF] sm:text-4xl">
            Tranquilidad contable en tus manos
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
            Confía en nuestra experiencia para gestionar de forma eficiente tus finanzas, asegurando el cumplimiento puntual y estratégico de todas tus obligaciones fiscales.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="group flex h-full flex-col gap-6 rounded-[2rem] border border-[#E6E6E6] bg-white/80 p-8 text-left shadow-lg shadow-[0_10px_30px_rgba(53,113,223,0.12)] transition hover:-translate-y-1 hover:border-[#6A9AFA] hover:shadow-[0_16px_40px_rgba(244,98,29,0.2)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-white shadow-lg shadow-[0_10px_24px_rgba(53,113,223,0.25)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l9-4.5 9 4.5-9 4.5-9-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5v9l9 4.5 9-4.5v-9" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#092961]">{service.label}</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">{service.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[#5A5A5A]">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#3571DF] px-5 py-2 text-sm font-semibold text-[#3571DF] transition hover:bg-[#3571DF]/20"
              >
                Saber más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-10 rounded-[2.5rem] border border-[#E6E6E6] bg-[linear-gradient(135deg,#3571DF,#F4621D)] px-10 py-12 text-center text-white shadow-xl shadow-[0_20px_50px_rgba(53,113,223,0.35)] lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-4" id="empresas">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Respaldo Profesional
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            El equipo financiero que tu empresa merece
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-white/90">
            Más que contadores, somos tus socios estratégicos. Acompañamiento continuo y diseño de planes a la medida de tus desafíos.
          </p>
        </div>
        <Link
          href={whatsappLink}
          className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#3571DF] shadow-lg shadow-[0_16px_30px_rgba(255,255,255,0.35)] transition hover:bg-white"
          target="_blank"
          rel="noreferrer"
        >
          Hablar por Whatsapp
        </Link>
      </div>
    </section>
  );
}
