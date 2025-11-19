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

const heroHighlights = [
  "Nóminas sin reprocesos ni atrasos",
  "Compliance laboral respaldado",
  "Soporte confidencial y cercano",
];

const deliverySteps = [
  {
    title: "Levantamiento y migración",
    description:
      "Revisamos contratos, beneficios y formatos de nómina para diseñar un aterrizaje sin interrupciones.",
  },
  {
    title: "Ciclos mensuales",
    description:
      "Liquidamos sueldos, validamos variaciones y publicamos reportes ejecutivos con indicadores accionables.",
  },
  {
    title: "Soporte continuo",
    description:
      "Respondemos consultas laborales, preparamos documentación y acompañamos inspecciones o auditorías.",
  },
];

export default function HumanResourcesAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8"
      >
        <section
          id="descripcion"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-10 shadow-2xl shadow-indigo-100/50 ring-1 ring-slate-100 lg:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_35%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 ring-1 ring-indigo-100">
                Asesoría en Recursos Humanos
              </p>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl">
                  Optimiza la nómina, protege a tu equipo y cumple sin sobresaltos
                </h1>
                <p className="text-base text-slate-600">
                  Gestionamos remuneraciones, contratos y obligaciones laborales con precisión y confidencialidad. Nuestro acompañamiento libera a tu equipo de reprocesos y asegura una experiencia impecable para cada colaborador.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    <span aria-hidden className="text-indigo-500">●</span>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Coordinar una llamada
                </a>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  Protocolos de nómina listos desde el primer ciclo
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Liquidación mensual", "Gestión contractual", "Asesoría laboral", "Analítica de personas"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-md shadow-slate-200/30 backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">Entrega</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item}</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Checklist compartido, responsables definidos y trazabilidad de cada documento.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Una gestión de personas que combina precisión y cercanía
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Diseñamos la asesoría para que tus líderes dispongan de información confiable, tus colaboradores tengan respuestas rápidas y
              la empresa mantenga el control normativo en todo momento.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-indigo-100/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500" />
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
              </article>
            ))}
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
              <article key={category.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-slate-200/40">
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
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-700"
                >
                  <span aria-hidden className="text-indigo-500">◆</span>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white/90 p-8 shadow-xl shadow-indigo-50 ring-1 ring-slate-100">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Metodología</p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Operación continua, con foco en la experiencia</h2>
              <p className="text-base text-slate-600">
                Definimos un calendario compartido con cut-off claros, responsables por área y controles automáticos que permiten detectar inconsistencias antes de cerrar cada ciclo de nómina.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-300"
              >
                Revisa nuestro plan de acción
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {deliverySteps.map((step) => (
                <div
                  key={step.title}
                  className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-slate-50 to-white p-4 shadow-lg shadow-slate-100"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">{step.title}</p>
                  <p className="mt-2 text-xs text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
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
