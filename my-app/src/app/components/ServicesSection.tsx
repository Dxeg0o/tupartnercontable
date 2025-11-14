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
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Servicios integrales
        </div>
        <div className="space-y-4">
          <h2 id="servicios-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tranquilidad contable en tus manos
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            Confía en nuestra experiencia para gestionar de forma eficiente tus finanzas, asegurando el cumplimiento puntual y estratégico de todas tus obligaciones fiscales.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="group flex h-full flex-col gap-6 rounded-[2rem] border border-slate-100/70 bg-white/60 p-8 text-left shadow-lg shadow-indigo-100/40 transition hover:-translate-y-1 hover:border-indigo-200/70 hover:shadow-indigo-200/70"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 text-white shadow-lg shadow-indigo-200/70">
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
              <h3 className="text-xl font-semibold text-slate-900">{service.label}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
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

      <div className="mt-20 flex flex-col gap-10 rounded-[2.5rem] border border-indigo-100/70 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 px-10 py-12 text-center text-white shadow-xl shadow-indigo-200/60 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-4" id="empresas">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">
            Modalidades para empresas
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            Diseñamos planes escalables para startups, pymes y corporativos
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-indigo-100">
            Integramos procesos, tecnología y acompañamiento continuo para consolidar una gestión financiera alineada a tus objetivos de negocio.
          </p>
        </div>
        <Link
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-300 transition hover:bg-white"
        >
          Agenda una consultoría
        </Link>
      </div>
    </section>
  );
}
