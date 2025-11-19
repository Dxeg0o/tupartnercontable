import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Asesoría en Recursos Humanos | Partner Accounting",
  description:
    "Detalle del servicio de asesoría en recursos humanos de Partner Accounting: gestión de remuneraciones, asesoría laboral y planificación tributaria.",
};

const benefits = [
  {
    title: "Procesos de nómina precisos",
    description:
      "Optimiza cada ciclo de remuneraciones con controles que aseguran cálculos correctos, pagos puntuales y trazabilidad completa de la información.",
  },
  {
    title: "Cumplimiento laboral garantizado",
    description:
      "Aplicamos la normativa vigente, resguardamos la documentación requerida y te mantenemos al día frente a cambios legales o fiscalizaciones.",
  },
  {
    title: "Acompañamiento experto y confidencial",
    description:
      "Nuestro equipo se integra a tus procesos para resolver dudas laborales, proteger datos sensibles y responder rápidamente a contingencias.",
  },
  {
    title: "Mejor experiencia para tus colaboradores",
    description:
      "Diseñamos flujos claros desde la incorporación hasta el retiro, reduciendo fricciones y fortaleciendo la relación con tu equipo.",
  },
];

const serviceCategories = [
  {
    title: "Gestión de remuneraciones",
    intro:
      "Administramos de extremo a extremo la nómina para que mantengas la operación fluida y libre de reprocesos.",
    items: [
      "Liquidación de sueldos.",
      "Cálculo de beneficios sociales.",
      "Afiliaciones a seguridad social.",
      "Gestión de finiquitos.",
      "Registro de remuneraciones.",
    ],
  },
  {
    title: "Asesoría laboral",
    intro:
      "Te acompañamos en la gestión contractual y en la relación diaria con tus colaboradores.",
    items: [
      "Contratos de trabajo.",
      "Gestión de altas y bajas.",
      "Protección a la maternidad y fuero laboral.",
      "Causales de término de contrato.",
      "Defensa laboral.",
    ],
  },
  {
    title: "Planificación tributaria laboral",
    intro:
      "Integramos la dimensión tributaria a tu estrategia de personas para optimizar costos y beneficios.",
    items: [
      "Optimización de la carga tributaria de los trabajadores.",
      "Asesoramiento en ahorro previsional voluntario.",
      "Gestión de beneficios tributarios.",
    ],
  },
];

const hrHighlights = [
  "Soluciones a la medida",
  "Confidencialidad en todo el proceso",
  "Reportes ejecutivos de nómina",
  "Capacitación para tu equipo interno",
  "Soporte continuo frente a fiscalizaciones",
  "Integración con tus plataformas actuales",
];

export default function HumanResourcesAdvisoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8"
      >
        <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[640px] max-w-5xl rounded-full bg-gradient-to-br from-indigo-200 via-white to-sky-100 blur-3xl" />
        <div className="absolute right-0 top-72 -z-10 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

        <section
          id="descripcion"
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-xl shadow-indigo-100/60"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-indigo-100">
                <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                Asesoría en recursos humanos
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Nómina impecable, colaboradores informados y cumplimiento permanente
                </h1>
                <p className="text-base leading-relaxed text-slate-600">
                  Administramos remuneraciones, contratos y documentación laboral con precisión y confidencialidad. Diseñamos controles para que cada ciclo de pago sea predecible y alineado a la normativa vigente.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  Coordinar reunión
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-indigo-700"
                >
                  Explorar beneficios
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 p-6 text-white shadow-lg shadow-indigo-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Resumen ejecutivo</p>
              <p className="mt-3 text-lg font-semibold leading-tight">
                Equilibrio entre precisión operativa y cuidado de la experiencia de tus colaboradores.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/90">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Implementación</dt>
                  <dd className="mt-2 text-lg font-semibold">1-3 semanas</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Formato</dt>
                  <dd className="mt-2 text-lg font-semibold">Nómina + asesoría</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Cobertura</dt>
                  <dd className="mt-2 text-lg font-semibold">Ciclo laboral completo</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Soporte</dt>
                  <dd className="mt-2 text-lg font-semibold">Prioridad en fiscalizaciones</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Una gestión de personas que combina precisión y cercanía</h2>
              <p className="max-w-3xl text-base text-slate-600">
                Diseñamos la asesoría para que tus líderes dispongan de información confiable, tus colaboradores tengan respuestas rápidas y la empresa mantenga el control normativo en todo momento.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">Cultura de servicio</p>
                  <p className="mt-2 text-sm text-slate-600">Protocolos claros de comunicación con empleados y líderes de área.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">Trazabilidad total</p>
                  <p className="mt-2 text-sm text-slate-600">Bitácoras, respaldos documentales y evidencias listos para auditorías.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-indigo-100/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-lg text-indigo-600">
                      •
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicios-incluidos"
          className="rounded-3xl bg-gradient-to-r from-white via-slate-50 to-white/70 p-8 shadow-inner shadow-white/40"
        >
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">¿Qué incluye nuestra asesoría?</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Acompañamiento integral en recursos humanos
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Abarcamos la nómina, el marco legal y la planificación tributaria laboral para que puedas tomar decisiones con información
              completa y trazable.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <article key={category.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">{category.title}</p>
                <p className="mt-3 text-sm text-slate-600">{category.intro}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-indigo-200 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Soluciones a la medida</p>
            <p className="mt-4 text-sm text-slate-600">
              Diseñamos planes personalizados según el tamaño de tu equipo, la industria en la que operas y los sistemas que ya utilizas,
              integrando talleres de capacitación, protocolos de comunicación y tableros de seguimiento.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
                {hrHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {highlight}
                  </span>
                ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-xl shadow-indigo-100/60">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Metodología</p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Acompañamiento semanal con foco en personas</h2>
              <p className="text-base text-slate-600">
                Organizamos la operación de RR.HH. en sprints cortos, con responsables definidos y tableros de seguimiento que aseguran cumplimiento y experiencia de servicio.
              </p>
              <div className="flex flex-wrap gap-2">
                {hrHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {["Levantamiento y migración", "Configuración de nómina", "Ciclo mensual y controles", "Reporte a dirección"].map(
                (step, index) => (
                  <li
                    key={step}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Paso {index + 1}</p>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                        {index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{step}</p>
                    <p className="mt-2 text-sm text-slate-600">
                      {index === 0 && "Revisión de contratos, archivos maestros y respaldos requeridos."}
                      {index === 1 && "Parametrización de conceptos, beneficios y autorizaciones de pago."}
                      {index === 2 && "Ejecución de nómina, controles de validación y emisión de certificados."}
                      {index === 3 && "Resumen ejecutivo con riesgos, métricas de clima y próximos hitos legales."}
                    </p>
                  </li>
                ),
              )}
            </ol>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      <div className="sr-only" id="servicios" aria-hidden />
      <div className="sr-only" id="tributaria" aria-hidden />
      <div className="sr-only" id="rrhh" aria-hidden />
      <div className="sr-only" id="empresas" aria-hidden />
      <div className="sr-only" id="testimonios" aria-hidden />
      <div className="sr-only" id="faq" aria-hidden />
    </div>
  );
}
