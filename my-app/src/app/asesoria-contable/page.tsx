import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Preguntas", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

const inclusionItems = [
  "Estados financieros precisos y listos para la toma de decisiones.",
  "Actualización normativa continua y seguimiento de cambios regulatorios.",
  "Conciliaciones bancarias, control de gastos y proyección de flujo de caja.",
  "Tableros con indicadores críticos para tu negocio y reportes accionables.",
  "Acompañamiento personalizado de un equipo senior multidisciplinario.",
];

const benefits = [
  {
    title: "Contabilidad diaria",
    description: "Registro impecable de operaciones y cierres contables oportunos.",
  },
  {
    title: "Análisis financiero",
    description: "Lectura estratégica de datos para anticipar riesgos y oportunidades.",
  },
  {
    title: "Cumplimiento tributario",
    description: "Declaraciones presentadas en tiempo y forma, sin sobresaltos.",
  },
  {
    title: "Asesoramiento personalizado",
    description: "Planes hechos a medida con seguimiento continuo de expertos.",
  },
];

const processSteps = [
  {
    title: "Diagnóstico profundo",
    description:
      "Analizamos tu operación contable, los sistemas que utilizás y tus objetivos financieros para definir una línea base clara.",
  },
  {
    title: "Diseño de plan",
    description:
      "Co-creamos un roadmap con hitos, responsables y entregables por cada frente contable, tributario y de reporting.",
  },
  {
    title: "Implementación",
    description:
      "Automatizamos tareas, establecemos controles y configuramos tableros que entregan visibilidad desde el primer mes.",
  },
  {
    title: "Acompañamiento continuo",
    description:
      "Nos integramos a tu equipo para medir resultados, iterar mejoras y mantener una contabilidad sana y oportuna.",
  },
];

const differentiators = [
  {
    title: "Equipo senior",
    description: "Especialistas en contabilidad, impuestos y finanzas corporativas con experiencia multisectorial.",
  },
  {
    title: "Visibilidad 360°",
    description: "Reportes integrados, KPIs y alertas tempranas para tomar decisiones respaldadas con datos.",
  },
  {
    title: "Tecnología integrada",
    description: "Implementamos herramientas cloud, automatizaciones y workflows colaborativos.",
  },
  {
    title: "Modelo flexible",
    description: "Nos adaptamos a tu ritmo: acompañamiento permanente, proyectos específicos u outsourcing total.",
  },
];

const coverage = [
  {
    title: "Control documental",
    description: "Gestión de facturación, recibos y soportes listos para auditorías.",
  },
  {
    title: "Planificación de impuestos",
    description: "Escenarios y estrategias para optimizar tu carga fiscal.",
  },
  {
    title: "Conciliaciones",
    description: "Cruce de cuentas por cobrar, pagar y bancos con alertas tempranas.",
  },
  {
    title: "Reporting financiero",
    description: "Estados, dashboards y storytelling para directorios e inversores.",
  },
];

const contactDetails = [
  { label: "Oficina", value: "Los Militares 5620, Las Condes" },
  { label: "Email", value: "supervisor@partner-accounting.cl", href: "mailto:supervisor@partner-accounting.cl" },
  { label: "Teléfono", value: "+56 9 8159 2966", href: "tel:+56981592966" },
];

export default function AsesoriaContablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={navigation} />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-8 lg:px-8">
        <section className="grid gap-8 rounded-3xl bg-white/80 p-8 shadow-2xl shadow-indigo-100 ring-1 ring-slate-100 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Asesoría Contable especializada
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                Control total y claridad financiera para tu empresa
              </h1>
              <p className="text-lg text-slate-600">
                Nuestra célula contable combina procesos, tecnología y acompañamiento humano para que tu información financiera
                esté siempre lista, confiable y enfocada en la toma de decisiones estratégicas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700">
                Informes accionables
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
                Equipo dedicado
              </div>
              <div className="rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700">
                Cobertura integral
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-500 p-8 text-white shadow-lg">
            <p className="text-lg font-semibold">¿Qué incluye nuestra asesoría contable?</p>
            <ul className="mt-6 space-y-4 text-base font-light">
              {inclusionItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/80" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Beneficios</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Resultados visibles desde el primer mes</h2>
            <p className="mt-4 text-slate-600">
              Simplificamos la operación contable de tu empresa y convertimos los datos en decisiones accionables. Nuestro
              acompañamiento reduce el margen de error, agiliza cierres mensuales y te entrega visibilidad en tiempo real.
            </p>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Cobertura</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Todo lo que necesitás, en un mismo equipo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coverage.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Proceso</p>
              <h2 className="text-3xl font-semibold">Te acompañamos paso a paso</h2>
              <p className="mt-2 text-white/80">
                Conectamos estrategia y operación contable para que cada entrega tenga un impacto directo en tus resultados.
              </p>
            </div>
            <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">Implementación ágil en 30 días</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white/10 p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Paso {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Diferenciales</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Lo que nos hace distintos</h2>
          <p className="mt-4 text-slate-600">
            Construimos relaciones de largo plazo, priorizando claridad, comunicación y resultados. Nuestra asesoría contable se integra a tu cultura y objetivos, aportando metodología y visión estratégica.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Listos para ayudarte</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Conversemos sobre tu operación contable</h2>
              <p className="mt-4 text-slate-600">
                Coordinemos una reunión para entender tus necesidades y diseñar una propuesta a medida. Podemos acompañarte en auditorías, expansión regional o en la profesionalización de tu contabilidad interna.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                  Tiempo de respuesta &lt; 24 h
                </div>
                <div className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                  Sesión exploratoria sin costo
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Contactanos</p>
              <div className="mt-4 space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="rounded-xl border border-white/60 bg-white/70 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-lg font-semibold text-slate-900 transition hover:text-indigo-600">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-900">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/56981592966?text=Hola%20Partner%20Accounting,%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20para%20conversar%20sobre%20asesor%C3%ADa%20contable."
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-400/90 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-300"
              >
                Conversar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
