import Image from "next/image";

interface ServiceMode {
  title: string;
  description: string;
  highlight: string;
}

interface ModalidadesSectionProps {
  serviceModes: ServiceMode[];
}

export function ModalidadesSection({ serviceModes }: ModalidadesSectionProps) {
  return (
    <section
      id="modalidades"
      className="mt-28 grid gap-16 lg:grid-cols-[1fr_1.15fr]"
      aria-labelledby="modalidades-heading"
    >
      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-[420px]">
          <div className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl shadow-indigo-100">
            <Image
              src="/IT-Business-Benefits-Image.webp"
              alt="Profesionales analizando indicadores financieros en una tablet"
              width={420}
              height={520}
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute -top-10 right-12 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 shadow-xl shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5"
              />
            </svg>
          </div>

          <div className="absolute -bottom-10 left-6 w-52 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Satisfacción promedio
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">98.9%</p>
            <p className="mt-1 text-xs text-slate-500">
              Clientes nos recomiendan por la flexibilidad del servicio.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Soluciones a la Medida
          </div>
          <div className="space-y-4">
            <h2
              id="modalidades-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Nuestras Modalidades de Servicio
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              Adaptamos nuestro acompañamiento según el nivel de soporte que
              necesites, combinando tecnología, expertise y cercanía para
              impulsar tu negocio.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {serviceModes.map((mode) => (
            <article
              key={mode.title}
              className="group flex items-start gap-5 rounded-3xl border border-slate-100/80 bg-white/70 p-6 shadow-lg shadow-indigo-100/60 transition hover:-translate-y-1 hover:border-indigo-200/70 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 text-white shadow-lg shadow-indigo-200/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 6.75h13.5M5.25 12h13.5m-13.5 5.25h9"
                  />
                </svg>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {mode.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {mode.description}
                  </p>
                </div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
                  {mode.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
