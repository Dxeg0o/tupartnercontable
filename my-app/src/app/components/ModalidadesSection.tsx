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
          <div className="overflow-hidden rounded-[3rem] border border-[#E6E6E6] bg-white shadow-xl shadow-[0_18px_46px_rgba(53,113,223,0.16)]">
            <Image
              src="/women.png"
              alt="Profesionales analizando indicadores financieros en una tablet"
              width={420}
              height={520}
              className="h-[520px] w-full object-contain"
            />
          </div>

          <div className="absolute -top-10 right-12 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] shadow-xl shadow-[0_18px_34px_rgba(53,113,223,0.25)]">
            <Image
              src='/logo_white.png'
              className="h-14 w-14 text-white"               
              alt="Isotipo Tu Partner Contador"
              width={420}
              height={520}           
              />
          </div>

          <div className="absolute -bottom-10 left-6 w-52 rounded-3xl border border-[#E6E6E6] bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5A5A5A]">
              Satisfacción promedio
            </p>
            <p className="mt-2 text-2xl font-bold text-[#092961]">98.9%</p>
            <p className="mt-1 text-xs text-[#5A5A5A]">
              Clientes nos recomiendan por la flexibilidad del servicio.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#3571DF]">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Soluciones a la Medida
          </div>
          <div className="space-y-4">
            <h2
              id="modalidades-heading"
              className="text-3xl font-bold tracking-tight text-[#3571DF] sm:text-4xl"
            >
              Nuestras Modalidades de Servicio
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
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
              className="group flex items-start gap-5 rounded-3xl border border-[#E6E6E6] bg-white/80 p-6 shadow-lg shadow-[0_14px_36px_rgba(53,113,223,0.14)] transition hover:-translate-y-1 hover:border-[#6A9AFA] hover:shadow-[0_18px_44px_rgba(244,98,29,0.2)]"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-white shadow-lg shadow-[0_10px_24px_rgba(53,113,223,0.25)]">
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
                  <h3 className="text-xl font-semibold text-[#092961]">
                    {mode.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">
                    {mode.description}
                  </p>
                </div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-[#3571DF]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)]" />
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
