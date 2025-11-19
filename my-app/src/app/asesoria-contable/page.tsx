import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Asesoría Contable | Partner Accounting",
  description:
    "Detalle del servicio de asesoría contable de Partner Accounting: beneficios, alcance y actividades incluidas.",
};

const benefits = [
  {
    title: "Registros confiables",
    description:
      "Mantenemos la contabilidad al día con procedimientos rigurosos para capturar, validar y clasificar cada movimiento.",
  },
  {
    title: "Visión financiera clara",
    description:
      "Elaboramos informes y estados financieros que te muestran de manera simple el flujo de caja, el balance y los resultados.",
  },
  {
    title: "Cumplimiento tributario",
    description:
      "Anticipamos obligaciones, ajustamos calendarios fiscales y presentamos declaraciones sin sobresaltos ni multas.",
  },
  {
    title: "Acompañamiento experto",
    description:
      "Respondemos dudas estratégicas y operativas para que cada decisión se base en datos y en la normativa vigente.",
  },
];

const includedServices = [
  "Planificación y puesta en marcha del sistema contable",
  "Regularización y actualización de contabilidades atrasadas",
  "Control de clientes, proveedores y estados de cobranza",
  "Ejecución o supervisión de inventarios y movimientos de mercaderías",
  "Control de activos fijos, corrección monetaria y depreciaciones",
  "Determinación de estructuras de costos estándar y análisis de variaciones",
  "Tratamiento de inventarios obsoletos y deudores incobrables",
  "Gestión de gastos diferidos y activos intangibles",
  "Conciliaciones bancarias y seguimiento de cuentas críticas",
  "Mantención de libros y registros obligatorios y auxiliares",
];

const serviceHighlights = [
  "Contabilidad computacional",
  "Registro de transacciones",
  "Análisis de cuentas",
  "Inventarios",
  "Corrección monetaria",
  "Depreciación",
  "Gastos diferidos",
  "Libros contables",
  "Estados financieros",
  "Outsourcing contable",
];

const heroHighlights = [
  "Equipo senior asignado a tu cuenta",
  "Reportes listos para directorios y socios",
  "Integración con tus sistemas actuales",
];

const deliverySteps = [
  {
    title: "Onboarding y diagnóstico",
    description:
      "Levantamos tu operación, revisamos libros y establecemos controles para evitar brechas de información.",
  },
  {
    title: "Operación mensual",
    description:
      "Registramos movimientos, conciliamos cuentas críticas y publicamos tableros de seguimiento semanales.",
  },
  {
    title: "Cierres y presentación",
    description:
      "Preparamos estados financieros, declaraciones y recomendaciones ejecutivas para tus decisiones.",
  },
];

export default function AccountingAdvisoryPage() {
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
                Asesoría Contable
              </p>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl">
                  Delega tu contabilidad y gana visibilidad financiera real
                </h1>
                <p className="text-base text-slate-600">
                  Administramos registros diarios, conciliaciones y reportes ejecutivos con metodologías probadas. Trabajamos con tu equipo, sin fricciones, y convertimos la contabilidad en información útil para decidir.
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
                  Coordinar una reunión
                </a>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  Reportes ejecutivos en menos de 15 días
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Cierres mensuales", "Control de costos", "Estados financieros", "Plan de acción"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-md shadow-slate-200/30 backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">Entrega</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item}</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Documentación clara y checklist de responsables para mantener la continuidad operativa.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Beneficios clave
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Más orden, control y criterio financiero en un mismo servicio
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Cada bloque de la asesoría está pensado para liberar tiempo
              operativo, reducir contingencias y convertir la contabilidad en
              una herramienta estratégica para la dirección del negocio.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-indigo-100/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="servicios-incluidos"
          className="rounded-3xl bg-gradient-to-r from-white via-slate-50 to-white/70 p-8 shadow-inner shadow-white/40"
        >
          <div className="border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Servicios incluidos
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Todo lo que necesitas para una contabilidad confiable
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Cubrimos la operación diaria y los análisis avanzados para que la
              información financiera llegue depurada, a tiempo y alineada a las
              normas contables vigentes.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {includedServices.slice(0, 5).map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3 ring-1 ring-slate-100">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {includedServices.slice(5).map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3 ring-1 ring-slate-100">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-indigo-200 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Resumen operativo
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {serviceHighlights.map((highlight) => (
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
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Ejecución coordinada y sin sobresaltos</h2>
              <p className="text-base text-slate-600">
                Operamos con un calendario compartido, responsables claros y espacios de revisión ejecutiva para que siempre sepas en qué etapa está tu información contable.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:border-indigo-300"
              >
                Revisar agenda de trabajo
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
