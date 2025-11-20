import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { BenefitsGrid } from "../components/service/BenefitsGrid";
import { InsightGrid } from "../components/service/InsightGrid";
import { ServiceAccordion } from "../components/service/ServiceAccordion";
import { ServiceHero } from "../components/service/ServiceHero";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Asesoría en Recursos Humanos | Partner Accounting",
  description:
    "Detalle del servicio de asesoría en recursos humanos de Partner Accounting: gestión de remuneraciones, asesoría laboral y planificación tributaria.",
};

const heroHighlights = [
  "Soluciones a la medida",
  "Confidencialidad en todo el proceso",
  "Reportes ejecutivos de nómina",
  "Capacitación para tu equipo interno",
  "Soporte continuo frente a fiscalizaciones",
  "Integración con tus plataformas actuales",
];

const insights = [
  {
    label: "Nuestro enfoque",
    title: "Optimización de nómina sin fricciones",
    description:
      "Levantamos tus procesos actuales, definimos puntos de control y configuramos flujos digitales para asegurar un traspaso ordenado y sin interrupciones operativas.",
  },
  {
    label: "Resultados",
    title: "Cumplimiento laboral y colaboradores informados",
    description:
      "Nóminas confiables, colaboradores informados y una operación que cumple con cada hito legal sin sorpresas ni multas.",
  },
];

const benefits = [
  {
    title: "Procesos de nómina precisos",
    description:
      "Optimiza cada ciclo de remuneraciones con controles que aseguran cálculos correctos, pagos puntuales y trazabilidad completa de la información.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M5 5h14v14H5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6A9AFA]"
        />
        <path
          d="M8 12h8m-4-4v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#3571DF]"
        />
      </svg>
    ),
  },
  {
    title: "Cumplimiento laboral garantizado",
    description:
      "Aplicamos la normativa vigente, resguardamos la documentación requerida y te mantenemos al día frente a cambios legales o fiscalizaciones.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M12 3l7 4v5c0 4-3 7.5-7 8-4-.5-7-4-7-8V7l7-4z"
          fill="currentColor"
          className="text-[#3571DF]"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Acompañamiento experto y confidencial",
    description:
      "Nuestro equipo se integra a tus procesos para resolver dudas laborales, proteger datos sensibles y responder rápidamente a contingencias.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <circle cx="12" cy="7" r="4" className="text-[#6A9AFA]" fill="currentColor" />
        <path
          d="M4 20c1-4 4-6 8-6s7 2 8 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#3571DF]"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Mejor experiencia para tus colaboradores",
    description:
      "Diseñamos flujos claros desde la incorporación hasta el retiro, reduciendo fricciones y fortaleciendo la relación con tu equipo.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M6 12h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#3571DF]"
        />
        <path
          d="M4 7l8-4 8 4-8 4-8-4zM12 11v9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#6A9AFA]"
          fill="none"
        />
      </svg>
    ),
  },
];

const serviceCategories = [
  {
    title: "Gestión de remuneraciones",
    intro: "Administramos de extremo a extremo la nómina para que mantengas la operación fluida y libre de reprocesos.",
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
    intro: "Te acompañamos en la gestión contractual y en la relación diaria con tus colaboradores.",
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
    intro: "Integramos la dimensión tributaria a tu estrategia de personas para optimizar costos y beneficios.",
    items: [
      "Optimización de la carga tributaria de los trabajadores.",
      "Asesoramiento en ahorro previsional voluntario.",
      "Gestión de beneficios tributarios.",
    ],
  },
];

export default function HumanResourcesAdvisoryPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main id="inicio" className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <ServiceHero
          eyebrow="Servicios"
          title="Asesoría en Recursos Humanos"
          subtitle="Optimiza tus procesos de nómina y cumple con la normativa laboral"
          description="En Partner-Accounting te ofrecemos un servicio integral de gestión de remuneraciones y asesoría laboral, diseñado para ayudarte a cumplir con tus obligaciones legales, optimizar tus costos laborales y mejorar la relación con tus empleados."
          highlights={heroHighlights}
        />

        <InsightGrid insights={insights} />

        <BenefitsGrid
          title="Beneficios clave"
          subtitle="Una gestión de personas que combina precisión y cercanía"
          description="Diseñamos la asesoría para que tus líderes dispongan de información confiable, tus colaboradores tengan respuestas rápidas y la empresa mantenga el control normativo en todo momento."
          benefits={benefits}
        />

        <ServiceAccordion
          eyebrow="¿Qué incluye nuestra asesoría?"
          title="Acompañamiento integral en recursos humanos"
          description="Abarcamos la nómina, el marco legal y la planificación tributaria laboral para que puedas tomar decisiones con información completa y trazable."
          categories={serviceCategories}
          highlights={heroHighlights}
        />

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
