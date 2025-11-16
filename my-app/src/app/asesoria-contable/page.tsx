import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export const metadata: Metadata = {
  title: "Asesoría Contable | Partner Accounting",
  description:
    "Detalle del servicio de asesoría contable de Partner Accounting: contabilidad diaria, análisis financiero y acompañamiento estratégico para tu empresa.",
};

const navigation = [
  { label: "Resumen", href: "#resumen" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#alcance" },
  { label: "Contacto", href: "#contacto" },
  { label: "Inicio", href: "/" },
];

const heroStats = [
  {
    value: "100%",
    label: "Contabilidad al día",
    description:
      "Implementamos procedimientos rigurosos para registrar, procesar y analizar cada documento contable.",
  },
  {
    value: "3",
    label: "Estados financieros clave",
    description:
      "Flujo de efectivo, balance general y estado de resultados listos para presentar a socios y directorios.",
  },
  {
    value: "15+",
    label: "Expertos dedicados",
    description: "Equipo contable y tributario a cargo del seguimiento permanente de tu operación.",
  },
];

const advisoryHighlights = [
  {
    title: "Contabilidad diaria",
    description: "Registro preciso de todas las transacciones y control de soporte documental en tiempo real.",
  },
  {
    title: "Análisis financiero",
    description: "Elaboración de estados financieros claros, concisos y alineados a las normas vigentes.",
  },
  {
    title: "Cumplimiento tributario",
    description: "Alertamos obligaciones, preparamos declaraciones y aseguramos trazabilidad ante fiscalizaciones.",
  },
  {
    title: "Asesoramiento personalizado",
    description: "Resolvemos tus dudas y acompañamos decisiones estratégicas con datos oportunos.",
  },
];

const serviceCatalog = [
  {
    title: "Planificación contable",
    description: "Diseñamos e implementamos la contabilidad desde cero para nuevas unidades o empresas en expansión.",
  },
  {
    title: "Actualización de historiales",
    description: "Normalizamos contabilidades atrasadas e incorporamos periodos pendientes con conciliaciones completas.",
  },
  {
    title: "Control de clientes y proveedores",
    description: "Supervisamos cuentas por cobrar y pagar, además de los estados de cobranza para asegurar liquidez.",
  },
  {
    title: "Inventarios presenciales y remotos",
    description: "Podemos asistir en terreno o liderar inventarios, dejando evidencia fotográfica y actas verificadas.",
  },
  {
    title: "Movimientos y activos fijos",
    description: "Corrección monetaria, depreciación y control de movimientos para mantener el activo fijo en regla.",
  },
  {
    title: "Estructuras de costo",
    description: "Determinamos costos estándar, analizamos desviaciones y te ayudamos a fijar precios rentables.",
  },
  {
    title: "Inventarios obsoletos y incobrables",
    description: "Definimos políticas y respaldos para castigar inventarios y deudores conforme a normativa.",
  },
  {
    title: "Gastos diferidos e intangibles",
    description: "Controlamos activaciones, amortizaciones y documentación soporte para auditorías.",
  },
  {
    title: "Conciliaciones bancarias",
    description: "Análisis periódico de las cuentas representativas para detectar desviaciones a tiempo.",
  },
  {
    title: "Registros obligatorios",
    description: "Mantención de libros caja, banco, diario, mayor, inventarios y auxiliares equivalentes.",
  },
];

const summaryHighlights = [
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

export default function AccountingServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={navigation} homeHref="/" />
      <main className="mx-auto flex max-w-6xl flex-col px-6 pb-16 pt-8 lg:px-8">
        <section id="resumen" className="mt-16 grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Servicio destacado
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Asesoría contable integral
                <span className="block text-indigo-600">para empresas que necesitan claridad</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                ¿Cansado de preocuparte por la contabilidad de tu empresa? En Partner Accounting te ofrecemos la tranquilidad de un equipo experto que se encarga de todas las obligaciones contables, desde la gestión diaria de transacciones hasta informes financieros detallados. Obtén una visión clara de la salud financiera de tu negocio y toma decisiones informadas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Conoce el detalle
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Agenda una reunión
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
                  <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="mt-4 text-sm text-slate-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-200 shadow-xl">
                <Image
                  src="/Partner-Accounting-Home-01.jpg"
                  alt="Especialistas contables de Partner Accounting en reunión"
                  width={420}
                  height={520}
                  className="h-[520px] w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -left-14 top-10 w-44 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Control mensual</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">+35 KPIs</p>
                <p className="mt-1 text-xs text-slate-500">Finanzas, impuestos y gestión.</p>
              </div>
              <div className="absolute -right-14 bottom-12 w-48 rounded-3xl border border-white bg-indigo-600/90 p-4 text-white shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Soporte</p>
                <p className="mt-2 text-2xl font-bold">365 días</p>
                <p className="mt-1 text-xs opacity-80">Equipo asignado por industria.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="mt-24 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Qué incluye</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Acompañamiento contable que evoluciona con tu negocio</h2>
              <p className="mt-4 text-base text-slate-600">
                Garantizamos una contabilidad actualizada y precisa gracias a controles cruzados, automatizaciones y revisión humana. Elaboramos los estados financieros clave y construimos tableros que muestran tendencias para que tus decisiones estén basadas en datos confiables.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {advisoryHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                  <p className="text-base font-semibold text-slate-900">{highlight.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="mt-24">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Detalle del servicio</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl font-semibold text-slate-900">Operación contable, financiera y documental sin sobresaltos</h2>
              <p className="text-sm text-slate-500 lg:max-w-sm">
                Adaptamos cada componente a tu realidad: sector, tamaño de equipo y plataformas tecnológicas. Nuestro servicio puede ejecutarse completamente de forma remota o con visitas en terreno según lo requiera tu empresa.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {serviceCatalog.map((service) => (
                <article key={service.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="alcance" className="mt-24 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-slate-50 p-10 shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Resumen asesorías</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Servicios contables que puedes combinar</h2>
              <p className="mt-4 text-base text-slate-600">
                Actuamos como tu departamento contable o como un socio especializado para proyectos puntuales. Escoge lo que necesitas, desde outsourcing completo hasta revisiones específicas con entregables ejecutivos.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-white/80 p-6 text-sm text-slate-600 shadow-inner">
              <p>
                Complementamos la asesoría con procesos digitales, reportabilidad recurrente y un plan de acción con hitos claros. Nuestro compromiso es que cuentes con visibilidad inmediata del flujo de caja y de las obligaciones tributarias en curso.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {summaryHighlights.map((item) => (
              <span key={item} className="inline-flex items-center rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
