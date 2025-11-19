import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Asesoría Tributaria | Partner Accounting",
  description:
    "Detalle del servicio de asesoría tributaria integral de Partner Accounting: trámites ante el SII, declaraciones y acompañamiento experto.",
};

const benefits = [
  {
    title: "Optimización fiscal permanente",
    description:
      "Identificamos beneficios, créditos y franquicias para que solo pagues lo que corresponde y mantengas liquidez disponible para tu crecimiento.",
  },
  {
    title: "Cumplimiento normativo total",
    description:
      "Monitoreamos calendarios y cambios legales para presentar tus declaraciones a tiempo, sin multas ni observaciones del SII.",
  },
  {
    title: "Decisiones con información tributaria clara",
    description:
      "Convertimos los datos de tu negocio en reportes accionables que te permiten anticipar escenarios y tomar decisiones estratégicas.",
  },
  {
    title: "Defensa y representación experta",
    description:
      "Te acompañamos frente a fiscalizaciones y requerimientos, preparando documentación y argumentos sólidos para cada instancia.",
  },
];

const serviceCategories = [
  {
    title: "Trámites ante SII y otros organismos",
    intro:
      "Gestionamos las formalidades clave para operar sin contingencias y mantener tu estructura societaria al día.",
    items: [
      "Inicio de actividades.",
      "Obtención de Rol Único Tributario y patente municipal.",
      "Control de clientes, proveedores y estados de cobranza.",
      "Cambios y modificaciones societarias.",
      "Defensas tributarias.",
    ],
  },
  {
    title: "Declaraciones",
    intro: "Registro preciso de todas las transacciones.",
    items: [
      "Impuestos mensuales (IVA, PPM, retenciones).",
      "Impuesto adicional ley de la renta.",
      "Impuesto de timbres y estampillas.",
      "Impuestos anuales a la renta, etc.",
    ],
  },
  {
    title: "Contabilidad diaria",
    intro:
      "Registramos y monitoreamos cada movimiento con rigor para asegurar trazabilidad tributaria completa.",
    items: [
      "Registros tributarios: libros de compras y ventas, remuneraciones, retenciones, inventarios y FUT.",
      "Solicitudes al SII por devolución de IVA a exportadores y adquisiciones de activo fijo (Art. 27 bis).",
      "Cálculo de tasa variable de Pagos Provisionales Mensuales (PPM).",
      "Cambios y modificaciones societarias.",
      "Completo proceso de emisión de certificados y declaraciones juradas.",
      "Envío de libros electrónicos de compras y ventas al SII.",
    ],
  },
];

const managementHighlights = [
  "Planificación tributaria a la medida",
  "Monitoreo de obligaciones mensuales",
  "Alertas proactivas de cambios normativos",
  "Auditoría de registros contables",
  "Preparación de expedientes para fiscalizaciones",
  "Acompañamiento estratégico en decisiones de inversión",
];

export default function TaxAdvisoryPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8"
      >
        <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[640px] max-w-5xl rounded-full bg-gradient-to-br from-indigo-200 via-white to-sky-100 blur-3xl" />
        <div className="absolute -right-6 top-72 -z-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <section
          id="descripcion"
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-xl shadow-indigo-100/60"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-indigo-100">
                <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                Asesoría tributaria integral
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Optimiza tu carga tributaria y maximiza tus beneficios
                </h1>
                <p className="text-base leading-relaxed text-slate-600">
                  Diseñamos estrategias fiscales personalizadas, anticipamos cambios normativos y ejecutamos tus declaraciones con precisión. Nuestro equipo coordina trámites, reportes y defensas para resguardar liquidez y reputación.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  Hablar con un especialista
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-indigo-700"
                >
                  Conocer beneficios
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 p-6 text-white shadow-lg shadow-indigo-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Resumen ejecutivo</p>
              <p className="mt-3 text-lg font-semibold leading-tight">
                Controlamos cada hito tributario con visibilidad ejecutiva, anticipación de riesgos y documentación lista para fiscalizaciones.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/90">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Implementación</dt>
                  <dd className="mt-2 text-lg font-semibold">2-4 semanas</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Formato</dt>
                  <dd className="mt-2 text-lg font-semibold">Ejecución + estrategia</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Cobertura</dt>
                  <dd className="mt-2 text-lg font-semibold">Mensual y anual</dd>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <dt className="text-xs uppercase tracking-[0.25em] text-white/60">Soporte</dt>
                  <dd className="mt-2 text-lg font-semibold">Defensa SII</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Un partner tributario que combina estrategia y ejecución</h2>
              <p className="max-w-3xl text-base text-slate-600">
                Liberamos a tu equipo de tareas operativas, reducimos riesgos y convertimos la gestión tributaria en un impulso directo para tu negocio.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">Gobernanza fiscal</p>
                  <p className="mt-2 text-sm text-slate-600">Comités periódicos, políticas y matrices de riesgo alineadas a tu directorio.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500">Visibilidad en tiempo real</p>
                  <p className="mt-2 text-sm text-slate-600">Alertas y tableros con vencimientos, tasas y proyecciones de flujo.</p>
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
              Tramitación, declaraciones y control diario en un mismo servicio
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Abarcamos desde los trámites iniciales ante el SII hasta la operación diaria, asegurando que cada obligación esté respaldada
              por registros consistentes y una estrategia fiscal sólida.
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Gestiones recurrentes</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {managementHighlights.map((highlight) => (
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
              <h2 className="text-2xl font-semibold text-slate-900 lg:text-3xl">Rigurosidad técnica y acompañamiento ejecutivo</h2>
              <p className="text-base text-slate-600">
                Combinamos revisión preventiva, operación mensual y defensa frente a requerimientos. Cada fase deja evidencia lista para auditorías y directorio.
              </p>
              <div className="flex flex-wrap gap-2">
                {managementHighlights.map((highlight) => (
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
              {["Diagnóstico tributario", "Ejecución mensual", "Cierre anual y DJ", "Defensa y mejoras"].map((step, index) => (
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
                    {index === 0 && "Levantamiento de estructura societaria, riesgos y oportunidades fiscales."}
                    {index === 1 && "Declaraciones mensuales, control de créditos y seguimiento de vencimientos."}
                    {index === 2 && "Preparación de declaraciones juradas, renta y expedientes de respaldo."}
                    {index === 3 && "Gestión de respuestas al SII y roadmap de optimización continua."}
                  </p>
                </li>
              ))}
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
