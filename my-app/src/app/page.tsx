import Link from "next/link";

const navigation = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#tributaria" },
  { label: "Asesoría en Recursos Humanos", href: "#rrhh" },
  { label: "Empresas", href: "#empresas" },
];

const services = [
  {
    id: "servicios",
    label: "Asesoría Contable",
    description:
      "Nuestra asesoría contable te brinda tranquilidad de tener tus estados financieros al día y con información accionable.",
    highlights: [
      "Optimización de procesos",
      "Cumplimiento normativo",
      "Visión con datos informada",
      "Reducción de errores",
    ],
    href: "#contacto",
  },
  {
    id: "tributaria",
    label: "Asesoría Tributaria",
    description:
      "Reducimos tu carga tributaria con planes diseñados a la medida de tu negocio, anticipándonos a contingencias fiscales.",
    highlights: [
      "Planificación fiscal",
      "Estrategias de ahorro",
      "Defensa y representaciones",
      "Alertas proactivas",
    ],
    href: "#contacto",
  },
  {
    id: "rrhh",
    label: "Asesoría en Recursos Humanos",
    description:
      "Gestionamos talento, nómina y cumplimiento laboral con soluciones integrales que cuidan a tu equipo y tu operación.",
    highlights: [
      "Gestión del ciclo completo",
      "Digitalización de procesos",
      "Cumplimiento laboral",
      "Escalabilidad del servicio",
    ],
    href: "#contacto",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entendemos tus necesidades",
    description:
      "Iniciamos con una reunión de descubrimiento para mapear tus retos contables, financieros y tributarios.",
    detail:
      "Profundizamos en tus indicadores clave y en la cultura de tu organización para diseñar un plan accionable.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Diseñamos una solución a medida",
    description:
      "Construimos un plan integral que combina procesos, tecnología y acompañamiento experto.",
    detail:
      "Definimos hitos claros, tableros de control compartidos y responsables para asegurar visibilidad total.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Comenzamos a trabajar",
    description:
      "Implementamos el plan con seguimiento continuo, medición de resultados y comunicación transparente.",
    detail:
      "Nuestro equipo coordina sesiones quincenales, reportes ejecutivos y soporte inmediato ante contingencias.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
              PA
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
                Partner
              </span>
              <span className="text-lg font-semibold text-slate-900">Accounting</span>
            </div>
          </div>

          <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className="hidden rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-600 transition-all hover:border-indigo-300 hover:text-indigo-700 lg:inline-flex"
            >
              Contacto
            </Link>
            <button className="inline-flex h-10 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:text-indigo-600 lg:hidden">
              <span className="sr-only">Abrir menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        <main className="mt-16 grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col gap-10">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Santiago, Chile
            </div>
            <header className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Asesoría y Consultoría
                <span className="block text-indigo-600">
                  Contable, Financiera &amp; Tributaria
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Simplificamos tu contabilidad y optimizamos tus impuestos para
                que enfoques en lo que realmente importa: tu negocio.
              </p>
            </header>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Nuestros Servicios
              </Link>
              <Link
                href="#modalidades"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Modalidades
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">98.9%</p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Satisfacción de clientes
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Nuestro equipo acompaña a más de 120 empresas y pymes en
                  Latinoamérica.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-slate-900">20.5%</p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Promedio de ahorro tributario
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Identificamos oportunidades para optimizar cargas impositivas
                  y mejorar el flujo de caja.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-200 shadow-xl">
                <div
                  className="h-[520px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1529429617124-aee711a2bc95?auto=format&fit=crop&w=900&q=80')",
                  }}
                />
              </div>

              <div className="absolute -left-16 top-12 w-40 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Revenue Growth
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">+36%</p>
                <p className="mt-1 text-xs text-slate-500">
                  respecto al último trimestre.
                </p>
              </div>

              <div className="absolute -right-14 top-36 w-44 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Client Satisfaction
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400" />
                  <div>
                    <p className="text-xl font-bold text-slate-900">98.8%</p>
                    <p className="text-xs text-slate-500">+4.1% vs. meta</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 bottom-10 w-48 rounded-3xl border border-white bg-indigo-600/90 p-4 text-white shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                  Incidents
                </p>
                <p className="mt-2 text-2xl font-bold">-20.5%</p>
                <p className="mt-1 text-xs opacity-80">Seguimiento mensual</p>
              </div>
            </div>
          </div>
        </main>

        <section className="mt-24" aria-labelledby="servicios-heading">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white/80 p-10 shadow-xl shadow-indigo-100 backdrop-blur-sm">
            <div className="flex flex-col gap-6 text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Servicios integrales
              </div>
              <div className="space-y-4">
                <h2
                  id="servicios-heading"
                  className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                >
                  Tranquilidad contable en tus manos
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
                  Confía en nuestra experiencia para gestionar de forma eficiente tus finanzas, asegurando el cumplimiento puntual y estratégico de todas tus obligaciones fiscales.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 text-white shadow-lg shadow-indigo-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5l9-4.5 9 4.5-9 4.5-9-4.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5v9l9 4.5 9-4.5v-9"
                      />
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div
              id="empresas"
              className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 px-8 py-10 text-center text-white shadow-lg shadow-indigo-200 lg:flex-row lg:text-left"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
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
          </div>
        </section>

        <section className="mt-28" aria-labelledby="proceso-heading">
          <div className="rounded-[2.75rem] border border-slate-200 bg-white/90 p-10 shadow-2xl shadow-indigo-100 backdrop-blur">
            <div className="flex flex-col gap-6 text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Nuestro proceso
              </div>
              <div className="space-y-4">
                <h2
                  id="proceso-heading"
                  className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                >
                  Transparencia y resultados medibles
                </h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
                  Acompañamos cada fase con metodologías ágiles, tableros visuales y reportes de impacto para que tengas total visibilidad del avance.
                </p>
              </div>
            </div>

            <div className="relative mt-16 space-y-14 before:absolute before:left-[26px] before:top-2 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-gradient-to-b before:from-indigo-200 before:via-indigo-300/80 before:to-transparent before:content-[''] sm:before:left-[36px] lg:mt-20">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="relative grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-lg shadow-indigo-100 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl before:absolute before:left-[16px] before:top-8 before:hidden before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:border-4 before:border-white before:bg-indigo-400 before:shadow-md before:shadow-indigo-200 before:content-[''] sm:before:left-[24px] lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12 lg:p-8 lg:before:block"
                >
                  <div className="relative flex items-start gap-4 lg:flex-col lg:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 text-base font-semibold text-white shadow-lg shadow-indigo-200">
                      {step.number}
                    </div>
                    <div className="lg:mt-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">Paso {index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <span className="absolute left-[22px] top-14 h-3 w-3 rounded-full border-4 border-white bg-indigo-400 shadow-md shadow-indigo-200 sm:left-[32px] lg:hidden" />
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
                    <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                      <p className="text-base text-slate-700">{step.description}</p>
                      <p>{step.detail}</p>
                    </div>
                    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-inner">
                      <div
                        className="h-48 w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.03] sm:h-52"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </article>
              ))}

              <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-indigo-200 via-indigo-300/80 to-transparent lg:block" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
