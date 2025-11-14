import Link from "next/link";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

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
      "Comenzamos con una reunión inmersiva donde analizamos tus indicadores, estructura y desafíos para co-crear objetivos claros.",
    insight:
      "Mapeamos oportunidades de mejora con foco en eficiencia operativa, cumplimiento y crecimiento sostenible.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Diseñamos una solución a medida",
    description:
      "Activamos un equipo multidisciplinario para construir un plan con hitos, responsables y tecnología habilitante.",
    insight:
      "Priorizamos quick wins y automatizaciones que entregan visibilidad financiera desde el primer mes.",
    image:
      "https://images.unsplash.com/photo-1523952578875-bf77b7f1d7c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Implementamos y acompañamos",
    description:
      "Ejecutamos el roadmap con seguimiento cercano, tableros compartidos y revisión de métricas clave.",
    insight:
      "Nuestro squad permanece a tu lado para ajustar estrategias y asegurar resultados sostenidos.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceModes = [
  {
    title: "Externalización",
    description:
      "Delegá tus tareas administrativas y concéntrate en lo que realmente importa. Nuestro outsourcing optimiza tus recursos y te permite tomar decisiones con datos confiables.",
    highlight: "Automatización, tableros y soporte continuo",
  },
  {
    title: "Asesoría Permanente",
    description:
      "Conectamos con tu equipo para asegurar cumplimiento, visibilidad y acompañamiento diario. Construimos contigo una estrategia financiera sostenible y alineada a tus objetivos.",
    highlight: "Equipo dedicado, KPI financieros y roadmap trimestral",
  },
  {
    title: "Asesoría Esporádica",
    description:
      "¿Necesitás una opinión experta? Atendemos requerimientos puntuales con diagnósticos personalizados y soluciones accionables cuando más lo necesitás.",
    highlight: "Respuestas ágiles para decisiones clave",
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

        <section className="mt-28 space-y-16" aria-labelledby="proceso-heading">
          <div className="flex flex-col gap-6 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Nuestro proceso
            </div>
            <div className="space-y-4">
              <h2
                id="proceso-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Transparencia y resultados en cada etapa
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
                Sumamos metodología, data y acompañamiento continuo para que cada decisión financiera se tome con seguridad y visibilidad total.
              </p>
            </div>
          </div>

          <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:h-full before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-indigo-100 before:via-indigo-200/70 before:to-indigo-100 before:content-[''] md:space-y-16 md:before:left-12">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group relative grid gap-8 rounded-[2.2rem] border border-slate-100/80 bg-white/70 p-8 shadow-xl shadow-indigo-100/60 transition hover:-translate-y-1.5 hover:border-indigo-200/70 hover:shadow-2xl md:grid-cols-[auto_1fr] md:items-center"
              >
                <div className="relative flex items-center gap-4 md:flex-col md:items-start">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 text-2xl font-semibold text-white shadow-lg shadow-indigo-200/70">
                    {step.number}
                  </div>
                  <div className="hidden h-full w-px bg-gradient-to-b from-indigo-200 to-transparent md:block" />
                </div>
                <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                  <div className="space-y-4 text-left">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                    <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm font-medium text-indigo-700 shadow-inner">
                      {step.insight}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 shadow-md">
                    <div
                      className="h-48 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url('${step.image}')` }}
                    />
                  </div>
                </div>
                <div className="absolute left-8 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-indigo-200 to-transparent md:block" />
              </article>
            ))}
          </div>
        </section>

        <TestimonialsCarousel />

        <section
          id="modalidades"
          className="mt-28 grid gap-16 lg:grid-cols-[1fr_1.15fr]"
          aria-labelledby="modalidades-heading"
        >
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-xl shadow-indigo-100">
                <div
                  className="h-[520px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80')",
                  }}
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
                <p className="mt-1 text-xs text-slate-500">Clientes nos recomiendan por la flexibilidad del servicio.</p>
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
                  Adaptamos nuestro acompañamiento según el nivel de soporte que necesites, combinando tecnología, expertise y cercanía para impulsar tu negocio.
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
                      <h3 className="text-xl font-semibold text-slate-900">{mode.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{mode.description}</p>
                    </div>
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                      <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
                      {mode.highlight}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              Descubrí la modalidad ideal
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
