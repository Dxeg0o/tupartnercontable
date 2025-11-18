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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8"
      >
        <section
          id="descripcion"
          className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Asesoría Tributaria
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Optimiza tu carga tributaria y maximiza tus beneficios
          </h1>
          <p className="mt-6 text-base text-slate-600">
            En Partner-Accounting te ofrecemos un servicio de asesoría tributaria integral, diseñado para ayudarte a cumplir con tus
            obligaciones fiscales, optimizar tu carga tributaria y tomar decisiones financieras estratégicas. Nuestro equipo te acompaña
            en cada paso, garantizando el cumplimiento normativo y brindándote la información necesaria para decidir con confianza.
          </p>
          <p className="mt-4 text-base text-slate-600">
            Nuestras asesorías tributarias te brindan la tranquilidad de cumplir con todas tus obligaciones de manera eficiente y oportuna.
            Te guiamos desde la planificación hasta la presentación de tus declaraciones, asegurándonos de que estés al día con las
            últimas normativas y aproveches al máximo las oportunidades de optimización fiscal.
          </p>
          <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Nuestro enfoque</p>
              <p className="mt-2 text-sm text-slate-600">
                Analizamos tu operación, tus contratos y proyecciones para diseñar una estrategia tributaria personalizada que reduzca la
                carga impositiva sin descuidar el cumplimiento.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Resultados esperados</p>
              <p className="mt-2 text-sm text-slate-600">
                Declaraciones impecables, documentación lista para fiscalizaciones y claridad total sobre cómo afectan los impuestos a tu
                rentabilidad.
              </p>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Un partner tributario que combina estrategia y ejecución
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Cada beneficio está pensado para liberar a tu equipo de tareas operativas, reducir riesgos y transformar la gestión
              tributaria en un impulso directo para tu negocio.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-indigo-100/40"
              >
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
