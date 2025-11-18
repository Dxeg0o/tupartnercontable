import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Asesoría en Recursos Humanos | Partner Accounting",
  description:
    "Detalle del servicio de asesoría en recursos humanos de Partner Accounting: gestión de remuneraciones, asesoría laboral y planificación tributaria.",
};

const benefits = [
  {
    title: "Procesos de nómina precisos",
    description:
      "Optimiza cada ciclo de remuneraciones con controles que aseguran cálculos correctos, pagos puntuales y trazabilidad completa de la información.",
  },
  {
    title: "Cumplimiento laboral garantizado",
    description:
      "Aplicamos la normativa vigente, resguardamos la documentación requerida y te mantenemos al día frente a cambios legales o fiscalizaciones.",
  },
  {
    title: "Acompañamiento experto y confidencial",
    description:
      "Nuestro equipo se integra a tus procesos para resolver dudas laborales, proteger datos sensibles y responder rápidamente a contingencias.",
  },
  {
    title: "Mejor experiencia para tus colaboradores",
    description:
      "Diseñamos flujos claros desde la incorporación hasta el retiro, reduciendo fricciones y fortaleciendo la relación con tu equipo.",
  },
];

const serviceCategories = [
  {
    title: "Gestión de remuneraciones",
    intro:
      "Administramos de extremo a extremo la nómina para que mantengas la operación fluida y libre de reprocesos.",
    items: [
      "Liquidación de sueldos.",
      "Cálculo de beneficios sociales.",
      "Afiliaciones a seguridad social.",
      "Gestión de finiquitos.",
      "Registro de remuneraciones.",
    ],
  },
  {
    title: "Asesoría laboral",
    intro:
      "Te acompañamos en la gestión contractual y en la relación diaria con tus colaboradores.",
    items: [
      "Contratos de trabajo.",
      "Gestión de altas y bajas.",
      "Protección a la maternidad y fuero laboral.",
      "Causales de término de contrato.",
      "Defensa laboral.",
    ],
  },
  {
    title: "Planificación tributaria laboral",
    intro:
      "Integramos la dimensión tributaria a tu estrategia de personas para optimizar costos y beneficios.",
    items: [
      "Optimización de la carga tributaria de los trabajadores.",
      "Asesoramiento en ahorro previsional voluntario.",
      "Gestión de beneficios tributarios.",
    ],
  },
];

const hrHighlights = [
  "Soluciones a la medida",
  "Confidencialidad en todo el proceso",
  "Reportes ejecutivos de nómina",
  "Capacitación para tu equipo interno",
  "Soporte continuo frente a fiscalizaciones",
  "Integración con tus plataformas actuales",
];

export default function HumanResourcesAdvisoryPage() {
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
            Asesoría en Recursos Humanos
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 lg:text-4xl">
            Optimiza tus procesos de nómina y cumple con la normativa laboral
          </h1>
          <p className="mt-6 text-base text-slate-600">
            En Partner-Accounting te ofrecemos un servicio integral de gestión de remuneraciones y asesoría laboral, diseñado para
            ayudarte a cumplir con tus obligaciones legales, optimizar tus costos laborales y mejorar la relación con tus empleados.
            Nuestro equipo de expertos te acompañará en cada paso del proceso, garantizando la precisión y confidencialidad de toda la
            información.
          </p>
          <p className="mt-4 text-base text-slate-600">
            Nuestras asesorías en recursos humanos abarcan todo el ciclo de vida laboral de tus empleados, desde su incorporación hasta
            su retiro. Te brindamos un servicio integral que incluye la gestión de nóminas, el cumplimiento de las obligaciones
            laborales y previsionales, y el asesoramiento en temas relacionados con relaciones laborales, con el objetivo de optimizar
            tus procesos y garantizar el bienestar de tu equipo.
          </p>
          <div className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Cómo trabajamos</p>
              <p className="mt-2 text-sm text-slate-600">
                Levantamos tus procesos actuales, definimos puntos de control y configuramos flujos digitales para asegurar un traspaso
                ordenado y sin interrupciones operativas.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-500">Resultados esperados</p>
              <p className="mt-2 text-sm text-slate-600">
                Nóminas confiables, colaboradores informados y una operación que cumple con cada hito legal sin sorpresas ni multas.
              </p>
            </div>
          </div>
        </section>

        <section id="beneficios" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Beneficios clave</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 lg:text-3xl">
              Una gestión de personas que combina precisión y cercanía
            </h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Diseñamos la asesoría para que tus líderes dispongan de información confiable, tus colaboradores tengan respuestas rápidas y
              la empresa mantenga el control normativo en todo momento.
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
              Acompañamiento integral en recursos humanos
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Abarcamos la nómina, el marco legal y la planificación tributaria laboral para que puedas tomar decisiones con información
              completa y trazable.
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Soluciones a la medida</p>
            <p className="mt-4 text-sm text-slate-600">
              Diseñamos planes personalizados según el tamaño de tu equipo, la industria en la que operas y los sistemas que ya utilizas,
              integrando talleres de capacitación, protocolos de comunicación y tableros de seguimiento.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {hrHighlights.map((highlight) => (
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
