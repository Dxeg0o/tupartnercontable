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
  return (
    <section className="mt-24" aria-labelledby="servicios-heading">
      <div className="flex flex-col gap-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--neutral-light)] bg-[rgba(106,154,250,0.15)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]">
          <span className="h-2 w-2 rounded-full bg-[var(--primary-orange)]" />
          Servicios integrales
        </div>
        <div className="space-y-4">
          <h2 id="servicios-heading" className="text-3xl font-bold tracking-tight text-[var(--primary-blue)] sm:text-4xl">
            Tranquilidad contable en tus manos
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[var(--neutral-gray)]">
            Confía en nuestra experiencia para gestionar de forma eficiente tus finanzas, asegurando el cumplimiento puntual y estratégico de todas tus obligaciones fiscales.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="group flex h-full flex-col gap-6 rounded-[2rem] border border-[var(--neutral-light)] bg-[var(--neutral-white)]/90 p-8 text-left shadow-lg shadow-[rgba(53,113,223,0.15)] transition hover:-translate-y-1 hover:shadow-[rgba(244,98,29,0.2)]"
          >
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--neutral-white)] shadow-lg shadow-[rgba(53,113,223,0.18)]"
              style={{ background: "var(--official-gradient)" }}
            >
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
              <h3 className="text-xl font-semibold text-[var(--neutral-carbon)]">{service.label}</h3>
              <p className="text-sm leading-relaxed text-[var(--neutral-gray)]">{service.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[var(--neutral-gray)]">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    style={{ background: "var(--official-gradient)" }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-blue)] px-5 py-2 text-sm font-semibold text-[var(--primary-blue)] transition hover:bg-[rgba(53,113,223,0.2)]"
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

      <div
        className="mt-20 flex flex-col gap-10 rounded-[2.5rem] border border-[var(--neutral-light)] px-10 py-12 text-center text-[var(--neutral-white)] shadow-xl shadow-[rgba(53,113,223,0.2)] lg:flex-row lg:items-center lg:justify-between lg:text-left"
        style={{ background: "var(--official-gradient)" }}
      >
        <div className="space-y-4" id="empresas">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--neutral-white)]/80">
            Modalidades para empresas
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            Diseñamos planes escalables para startups, pymes y corporativos
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--neutral-white)]/90">
            Integramos procesos, tecnología y acompañamiento continuo para consolidar una gestión financiera alineada a tus objetivos de negocio.
          </p>
        </div>
        <Link
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full border border-[var(--neutral-white)] bg-[var(--neutral-white)] px-6 py-3 text-sm font-semibold text-[var(--primary-blue)] shadow-lg shadow-[rgba(255,255,255,0.25)] transition hover:bg-[rgba(255,255,255,0.9)]"
        >
          Agenda una consultoría
        </Link>
      </div>
    </section>
  );
}
