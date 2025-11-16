import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

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
            Asesoría Contable
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Delega tu contabilidad y concéntrate en hacer crecer tu negocio
          </h1>
          <p className="mt-6 text-base text-slate-600">
            Nuestro equipo se integra a tu operación para manejar el registro diario, la elaboración de reportes y el análisis
            financiero que sostiene decisiones informadas. Administramos transacciones, elaboramos informes y exponemos riesgos
            u oportunidades para que tengas claridad absoluta sobre la salud económica de tu empresa.
          </p>
          <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Cómo trabajamos</p>
              <p className="mt-2 text-sm text-slate-600">
                Diseñamos procedimientos personalizados, alineados a tus sistemas, para capturar información contable desde el
                primer día sin interrumpir tus flujos actuales.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Resultados esperados</p>
              <p className="mt-2 text-sm text-slate-600">
                Entregamos visibilidad constante con tableros, cierres periódicos y reuniones de seguimiento que permiten actuar
                sobre indicadores clave a tiempo.
              </p>
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
              Cada bloque de la asesoría está pensado para liberar tiempo operativo, reducir contingencias y convertir la
              contabilidad en una herramienta estratégica para la dirección del negocio.
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Servicios incluidos</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Todo lo que necesitas para una contabilidad confiable
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Cubrimos la operación diaria y los análisis avanzados para que la información financiera llegue depurada, a tiempo
              y alineada a las normas contables vigentes.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {includedServices.slice(0, 5).map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {includedServices.slice(5).map((service) => (
                <div key={service} className="flex items-start gap-3">
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
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="rounded-3xl border border-slate-200 bg-white/70 p-6">
          <p className="text-sm font-semibold text-slate-900">¿Necesitas hablar con un especialista?</p>
          <p className="mt-2 text-sm text-slate-600">
            Escríbenos a supervisor@partner-accounting.cl o agenda una llamada desde la página principal para coordinar una
            revisión detallada de tus requerimientos contables.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center rounded-full bg-slate-900/90 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
          >
            Volver a la landing principal
          </Link>
        </section>
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
