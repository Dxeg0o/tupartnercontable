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

export default function AccountingAdvisoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8"
      >
        <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[640px] max-w-5xl rounded-full bg-gradient-to-br from-indigo-200 via-white to-sky-100 blur-3xl" />
        <div className="absolute -left-10 top-80 -z-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <section
          id="descripcion"
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-xl shadow-indigo-100/60"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-indigo-100">
                <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                Asesoría contable estratégica
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Delega tu contabilidad y concéntrate en hacer crecer tu negocio
                </h1>
                <p className="text-base leading-relaxed text-slate-600">
                  Nos integramos a tu operación para administrar el registro diario, preparar reportes y analizar el desempeño financiero con disciplina. Traducimos los números en decisiones accionables para sostener tu crecimiento.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  Agendar conversación
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-indigo-700"
                >
                  Ver beneficios
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 p-6 text-white shadow-lg shadow-indigo-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Resumen ejecutivo
              </p>
              <p className="mt-3 text-lg font-semibold leading-tight">
                Visibilidad diaria, cierres confiables y alertas oportunas para que tu contabilidad sostenga las decisiones estratégicas.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/90">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Implementación</dt>
                  <dd className="mt-2 text-lg font-semibold">2-4 semanas</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Formato</dt>
                  <dd className="mt-2 text-lg font-semibold">Outsourcing + PMO</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Reportes</dt>
                  <dd className="mt-2 text-lg font-semibold">Dashboards y cierres</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Industria</dt>
                  <dd className="mt-2 text-lg font-semibold">Multi-sector</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Beneficios clave
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Más orden, control y criterio financiero en un mismo servicio
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                Cada bloque está pensado para liberar tiempo operativo, reducir contingencias y convertir la contabilidad en una herramienta estratégica para la dirección.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                    Liderazgo financiero
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Participación de socios y gerentes contables en comités ejecutivos y sesiones de planificación.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">
                    Automatización
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Integración con tus sistemas de facturación y bancos para minimizar reprocesos y errores manuales.
                  </p>
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
                <div key={service} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full bg-indigo-500"
                    aria-hidden
                  />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {includedServices.slice(5).map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full bg-purple-500"
                    aria-hidden
                  />
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
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
                Acompañamiento semanal con foco en cierres impecables
              </h2>
              <p className="text-base text-slate-600">
                Combinamos sesiones tácticas y reportes ejecutivos para mantener un control permanente. Nuestro equipo asigna responsables por área y asegura trazabilidad total.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceHighlights.map((highlight) => (
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
              {["Diagnóstico y migración", "Diseño de controles", "Cierre mensual", "Reporte y comité"].map(
                (step, index) => (
                  <li
                    key={step}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Paso {index + 1}
                      </p>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                        {index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{step}</p>
                    <p className="mt-2 text-sm text-slate-600">
                      {index === 0 && "Revisión de políticas, orden de saldos iniciales y configuración de plan de cuentas optimizado."}
                      {index === 1 && "Mapeo de flujos, automatización de conciliaciones y protocolos de documentación."}
                      {index === 2 && "Proceso de cierre con checklist y evidencias, alineado a tus fechas de directorio."}
                      {index === 3 && "Entregables ejecutivos, métricas claves y agenda de mejoras continua junto a tu equipo."}
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
