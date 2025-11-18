import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { serviceNavigation } from "../navigation.data";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Asesoría en Recursos Humanos | Partner Accounting",
  description:
    "Servicio integral de remuneraciones, cumplimiento laboral y planificación tributaria para potenciar tus equipos.",
};

const benefits = [
  {
    title: "Procesos de nómina impecables",
    description:
      "Automatizamos cálculos, registros y validaciones para que tus liquidaciones se emitan a tiempo y sin diferencias.",
  },
  {
    title: "Cumplimiento normativo permanente",
    description:
      "Monitoreamos cambios legales, actualizamos contratos y resguardamos la documentación respaldatoria de cada colaborador.",
  },
  {
    title: "Acompañamiento en relaciones laborales",
    description:
      "Guiamos la gestión de altas, bajas, fueros y desvinculaciones, cuidando la experiencia del trabajador y la empresa.",
  },
  {
    title: "Optimización de la carga tributaria",
    description:
      "Diseñamos estrategias de ahorro previsional y beneficios tributarios que mejoran la retribución total de tu equipo.",
  },
];

const includedServices = [
  "Liquidación de sueldos",
  "Cálculo de beneficios sociales",
  "Afiliaciones y actualizaciones en seguridad social",
  "Gestión integral de finiquitos",
  "Registro y control de remuneraciones",
  "Redacción y administración de contratos de trabajo",
  "Gestión de altas y bajas ante los organismos correspondientes",
  "Protección a la maternidad y fuero laboral",
  "Determinación de causales y procesos de término de contrato",
  "Defensa y representación laboral",
  "Optimización de la carga tributaria de los trabajadores",
  "Asesoramiento en ahorro previsional voluntario",
  "Gestión de beneficios y créditos tributarios",
];

const serviceHighlights = [
  "Gestión de remuneraciones",
  "Asesoría laboral",
  "Planificación tributaria laboral",
  "Soluciones a la medida",
];

export default function HumanResourcesAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={serviceNavigation} />

      <main
        id="inicio"
        className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8"
      >
        <section
          id="descripcion"
          className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Asesoría en Recursos Humanos
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Optimiza tus procesos de nómina y cumple con la normativa laboral
          </h1>
          <p className="mt-6 text-base text-slate-600">
            En Partner Accounting te ofrecemos un servicio integral de gestión de remuneraciones y asesoría laboral.
            Nos encargamos de cada hito del ciclo de vida laboral de tus colaboradores, asegurando precisión,
            confidencialidad y una comunicación fluida con tu equipo para que puedas enfocarte en el crecimiento del negocio.
          </p>
          <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Cómo trabajamos</p>
              <p className="mt-2 text-sm text-slate-600">
                Integramos nuestros flujos con tus plataformas para capturar altas, novedades y aprobaciones en tiempo real,
                evitando reprocesos y respaldando cada movimiento.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Resultados esperados</p>
              <p className="mt-2 text-sm text-slate-600">
                Alcanzarás nóminas libres de errores, reportes laborales oportunos y colaboradores informados sobre sus
                beneficios y obligaciones.
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
              Acompañamiento experto durante todo el ciclo laboral
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Desde la contratación hasta la desvinculación, te apoyamos con procedimientos claros, indicadores confiables y
              asesoría estratégica para fortalecer la relación con tus empleados.
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              ¿Qué incluye nuestra asesoría?
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Cobertura integral de remuneraciones y asesoría laboral
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Administramos documentos, cálculos y obligaciones previsionales, al mismo tiempo que asesoramos a tu equipo en
              temas contractuales, tributarios y de bienestar laboral.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {includedServices.slice(0, 7).map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {includedServices.slice(7).map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                  <p className="text-sm text-slate-600">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-indigo-200 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Soluciones a la medida</p>
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
