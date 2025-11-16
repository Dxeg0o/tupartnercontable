import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Diferenciadores", href: "#diferenciales" },
  { label: "Contacto", href: "/#contacto" },
];

const serviceIncludes = [
  {
    title: "Contabilidad diaria",
    description: "Registro preciso de todas las transacciones para mantener tu operación bajo control.",
  },
  {
    title: "Análisis financiero",
    description: "Lectura de indicadores clave y tableros ejecutivos que anticipan escenarios.",
  },
  {
    title: "Cumplimiento tributario",
    description: "Alineamos tus obligaciones fiscales con procesos automáticos y alertas.",
  },
  {
    title: "Asesoramiento personalizado",
    description: "Equipo senior asignado que responde en minutos y prioriza tu roadmap.",
  },
];

const coverageList = [
  "Puesta al día en libros contables e informes normativos.",
  "Confección y revisión de estados financieros mensuales.",
  "Control de cuentas por pagar y por cobrar con seguimiento activo.",
  "Conciliaciones bancarias automatizadas y alertas tempranas.",
  "Implementación de ERPs, bancos en línea y workflows digitales.",
  "Diagnósticos, auditorías internas y reportes para directorio.",
];

const summaryList = [
  "Diagnóstico contable integral y definición de brechas prioritarias.",
  "Diseño de plan de acción, KPIs y tableros compartidos.",
  "Ejecución y seguimiento semanal con reportes ejecutivos.",
  "Acompañamiento en fiscalizaciones y relación con organismos.",
  "Entrenamiento a tu equipo para adoptar mejores prácticas.",
  "Evaluación trimestral para ajustar el roadmap financiero.",
];

const benefitItems = [
  {
    title: "Visibilidad total",
    description: "Información financiera actualizada al día y preparada para la toma de decisiones.",
    icon: "eye",
  },
  {
    title: "Menos riesgos",
    description: "Procedimientos documentados que reducen contingencias tributarias y laborales.",
    icon: "shield",
  },
  {
    title: "Mayor velocidad",
    description: "Automatizamos tareas repetitivas para que tu equipo enfoque en crecimiento.",
    icon: "bolt",
  },
  {
    title: "Acompañamiento permanente",
    description: "Squad multidisciplinario disponible vía Slack, email y sesiones ejecutivas.",
    icon: "users",
  },
];

const processPhases = [
  {
    number: "01",
    title: "Exploración y diagnóstico",
    description:
      "Revisamos estados financieros, procesos y plataformas para mapear riesgos y oportunidades.",
    deliverable: "Informe de brechas y quick wins priorizados.",
  },
  {
    number: "02",
    title: "Plan y habilitación",
    description:
      "Diseñamos el plan contable con responsables, calendario tributario y adopción tecnológica.",
    deliverable: "Roadmap trimestral con KPIs y tableros compartidos.",
  },
  {
    number: "03",
    title: "Operación continua",
    description:
      "Gestionamos tus libros, reportes y fiscalizaciones, midiendo resultados y optimizando.",
    deliverable: "Reportes ejecutivos y sesiones mensuales de performance.",
  },
];

const differentiators = [
  {
    title: "Equipo senior in-house",
    detail: "Contadores auditores, tributaristas y controllers dedicados a cada cuenta.",
  },
  {
    title: "Playbooks probados",
    detail: "Metodologías propias basadas en más de 120 implementaciones en la región.",
  },
  {
    title: "Tecnología integrada",
    detail: "Implementamos ERPs, RPA y tableros en Looker/Power BI como parte del servicio.",
  },
  {
    title: "Soporte 24/7",
    detail: "Canales abiertos para contingencias críticas, auditorías o cierres especiales.",
  },
];

export default function AccountingAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={navigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-16 pt-14 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1 text-xs font-semibold text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Ruta de servicio
            </div>
            <header className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Asesoría Contable</p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Detalle del servicio para empresas que necesitan precisión y claridad diaria.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Integramos contabilidad, impuestos y reporting ejecutivo en un modelo continuo. Nos ocupamos del trabajo técnico y te entregamos decisiones con datos confiables.
              </p>
            </header>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Agenda una reunión exploratoria
              </Link>
              <Link
                href="/#servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                Volver al inicio
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <dt className="text-sm font-semibold text-slate-500">Empresas acompañadas</dt>
                <dd className="mt-3 text-3xl font-bold text-slate-900">120+</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <dt className="text-sm font-semibold text-slate-500">Promedio de ahorro</dt>
                <dd className="mt-3 text-3xl font-bold text-slate-900">18.4%</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <dt className="text-sm font-semibold text-slate-500">Tiempo de respuesta</dt>
                <dd className="mt-3 text-3xl font-bold text-slate-900">&lt; 30 min</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-white shadow-xl">
              <Image
                src="/Partner-Accounting-Home-02.jpg"
                alt="Profesionales contables analizando tableros financieros"
                width={520}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-52 rounded-3xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">SLA operativo</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">99.4%</p>
              <p className="mt-1 text-xs text-slate-500">cierres entregados en la fecha comprometida.</p>
            </div>
          </div>
        </section>

        <section id="servicio" className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Cobertura del servicio</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">¿Qué incluye nuestra asesoría contable?</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Garantizamos contabilidad actualizada y precisa, implementando controles robustos y tableros accionables. Unimos la experiencia de contadores senior con tecnología que simplifica cada entrega.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceIncludes.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">Cobertura</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Ofrecemos un amplio abanico de servicios contables</h3>
            <p className="mt-4 text-sm text-slate-600">Configuramos un equipo dedicado según el tamaño y la complejidad de tu organización.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {coverageList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-900/95 p-8 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Ruta resumida</p>
            <h3 className="mt-3 text-2xl font-semibold">Resumen de la asesoría y servicios contables</h3>
            <p className="mt-4 text-sm text-white/80">Mantén visibilidad en cada etapa gracias a reportes y sesiones ejecutivas recurrentes.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {summaryList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="beneficios" className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Beneficios</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Resultados tangibles para tu negocio</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Nuestro modelo combina automatización, expertise y gobierno financiero. Así obtenés datos confiables, decisiones ágiles y un equipo que se adelanta a los cambios normativos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefitItems.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon name={benefit.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Proceso</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Así trabajamos junto a tu equipo</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Operamos como extensión de tu área financiera, compartiendo tableros en tiempo real y sesiones ejecutivas quincenales para mantener la estrategia alineada.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {processPhases.map((phase) => (
              <div key={phase.number} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Fase {phase.number}</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-4 text-sm text-slate-600">{phase.description}</p>
                <div className="mt-6 rounded-2xl bg-indigo-50 p-4 text-sm font-medium text-indigo-900">
                  {phase.deliverable}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="diferenciales" className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Diferenciadores</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Lo que nos distingue en cada acompañamiento</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-slate-900 p-10 text-white">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Listos para convertir tu contabilidad en un activo estratégico</h3>
              <p className="text-sm text-white/80">
                Coordinemos una reunión de descubrimiento para entender tu contexto y proponer un roadmap accionable en menos de 72 horas.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-slate-100"
                >
                  Quiero hablar con un experto
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Volver a la landing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    eye: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.7 2.255a.75.75 0 01.6 0l7.5 3.214a.75.75 0 01.45.69v5.306c0 5.014-3.235 9.582-8.1 11.18a.75.75 0 01-.5 0c-4.864-1.598-8.1-6.166-8.1-11.18V6.16a.75.75 0 01.45-.691l7.5-3.214z"
        />
      </svg>
    ),
    bolt: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 11.1l7.648-9.24A.75.75 0 0115 2.75V9.25h3.135a.75.75 0 01.592 1.23l-7.647 9.24A.75.75 0 0110 19.25V12.75H6.865a.75.75 0 01-.75-.75z" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  };

  return icons[name];
}
