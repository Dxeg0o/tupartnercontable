import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { ContactSection } from "../components/ContactSection";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Asesoría en Recursos Humanos | Partner Accounting",
  description:
    "Servicio integral de recursos humanos, nóminas y cumplimiento laboral brindado por Partner Accounting.",
};

const benefitHighlights = [
  {
    title: "Procesos de nómina precisos",
    description:
      "Automatizamos cálculos y validamos cada liquidación para que los pagos se ejecuten puntualmente y sin diferencias.",
  },
  {
    title: "Cumplimiento laboral al día",
    description:
      "Supervisamos contratos, actualizaciones normativas y obligaciones previsionales para que tu empresa evite multas.",
  },
  {
    title: "Acompañamiento permanente",
    description:
      "Disponemos de un equipo especializado que responde consultas y guía decisiones laborales sensibles con absoluta confidencialidad.",
  },
  {
    title: "Optimización de costos",
    description:
      "Diseñamos estrategias tributarias y de beneficios que reducen la carga laboral sin descuidar la experiencia del colaborador.",
  },
];

const serviceCategories = [
  {
    title: "Gestión de remuneraciones",
    description:
      "Administramos la nómina de inicio a fin para liberar a tu equipo de tareas operativas repetitivas.",
    accent: "bg-indigo-500",
    items: [
      "Liquidación de sueldos",
      "Cálculo de beneficios sociales",
      "Afiliaciones a seguridad social",
      "Gestión de finiquitos",
      "Registro de remuneraciones",
    ],
  },
  {
    title: "Asesoría laboral",
    description:
      "Te acompañamos en la gestión del ciclo laboral completo, desde la contratación hasta el término del vínculo.",
    accent: "bg-purple-500",
    items: [
      "Contratos de trabajo",
      "Gestión de altas y bajas",
      "Protección a la maternidad y fuero laboral",
      "Causales de término de contrato",
      "Defensa laboral",
    ],
  },
  {
    title: "Planificación tributaria laboral",
    description:
      "Integramos beneficios y ahorros previsionales a tu estrategia de compensaciones.",
    accent: "bg-teal-500",
    items: [
      "Optimización de la carga tributaria de los trabajadores",
      "Asesoramiento en ahorro previsional voluntario",
      "Gestión de beneficios tributarios",
    ],
  },
];

export default function HumanResourcesAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-rose-50">
      <Navigation navigation={landingNavigation} />

      <main
        id="inicio"
        className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8"
      >
        <section
          id="descripcion"
          className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-rose-100/60 ring-1 ring-slate-100"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            Asesoría en Recursos Humanos
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Optimiza tus procesos de nómina y cumple con la normativa laboral
          </h1>
          <p className="mt-6 text-base text-slate-600">
            En Partner-Accounting te ofrecemos un servicio integral de gestión de remuneraciones y asesoría laboral, diseñado
            para ayudarte a cumplir con tus obligaciones legales, optimizar tus costos laborales y mejorar la relación con tus
            empleados. Nuestro equipo de expertos te acompañará en cada paso del proceso, garantizando la precisión y
            confidencialidad de toda la información.
          </p>
          <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Enfoque integral</p>
              <p className="mt-2 text-sm text-slate-600">
                Cubrimos todas las etapas del ciclo laboral: incorporación, desarrollo, control y desvinculación, con procesos
                documentados y auditables.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Confidencialidad asegurada</p>
              <p className="mt-2 text-sm text-slate-600">
                Mantenemos canales seguros para resguardar datos sensibles, accesos restringidos y protocolos de respaldo
                continuo.
              </p>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Un equipo de RR. HH. que opera como extensión de tu empresa
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Nuestras asesorías abarcan todo el ciclo de vida laboral de tus colaboradores. Nos enfocamos en entregar exactitud,
              visibilidad y acompañamiento constante para que tomes decisiones estratégicas con seguridad.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefitHighlights.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg shadow-rose-100/50"
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
              ¿Qué incluye nuestra Asesoría en Recursos Humanos?
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Servicios que cubren la nómina y el cumplimiento laboral de principio a fin
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Te brindamos un servicio integral que contempla la gestión de nóminas, la administración de las obligaciones
              laborales y previsionales, y el asesoramiento en relaciones laborales para optimizar procesos y cuidar el bienestar
              de tu equipo.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-slate-100 bg-white/80 p-6">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${category.accent}`} aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{category.title}</p>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-rose-200 bg-white/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Soluciones a la medida</p>
            <p className="mt-3 text-sm text-slate-600">
              Adaptamos flujos, reportes y niveles de servicio a la madurez de tu organización. Ya sea que necesites apoyo puntual
              o una externalización completa del área de RR. HH., nos integramos a tus plataformas y equipos para entregar
              resultados medibles.
            </p>
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
