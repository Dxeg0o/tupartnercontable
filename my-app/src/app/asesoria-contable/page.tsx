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
  title: "Asesoría Contable",
  description:
    "Detalle del servicio de asesoría contable de Tu Partner Contador: beneficios, alcance y actividades incluidas.",
};

const heroHighlights = [
  "Contabilidad computacional",
  "Análisis de cuentas y conciliaciones",
  "Estados financieros listos para decisiones",
];

const insights = [
  {
    label: "Nuestro enfoque",
    title: "Delega la operación contable diaria",
    description:
      "Diseñamos procedimientos personalizados, alineados a tus sistemas, para capturar información desde el primer día sin interrumpir tus flujos actuales.",
  },
  {
    label: "Resultados",
    title: "Visibilidad constante con reportes accionables",
    description:
      "Entregamos tableros, cierres periódicos y reuniones de seguimiento que permiten actuar sobre indicadores clave a tiempo.",
  },
];

const benefits = [
  {
    title: "Registros confiables",
    description:
      "Mantenemos la contabilidad al día con procedimientos rigurosos para capturar, validar y clasificar cada movimiento.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <rect x="4" y="4" width="16" height="16" rx="2" className="text-[#6A9AFA]" fill="currentColor" />
        <path
          d="M8 10h8m-8 4h5"
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
    title: "Visión financiera clara",
    description:
      "Elaboramos informes y estados financieros que te muestran de manera simple el flujo de caja, el balance y los resultados.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M4 19h16M7 10v6m5-8v8m5-5v5"
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
    title: "Cumplimiento tributario",
    description:
      "Anticipamos obligaciones, ajustamos calendarios fiscales y presentamos declaraciones sin sobresaltos ni multas.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M12 3l7 4v5.5c0 4-3 7.5-7 8-4-.5-7-4-7-8V7l7-4z"
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
    title: "Acompañamiento experto",
    description:
      "Respondemos dudas estratégicas y operativas para que cada decisión se base en datos y en la normativa vigente.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <circle cx="12" cy="8" r="4" className="text-[#6A9AFA]" fill="currentColor" />
        <path
          d="M5 20c1.5-3.5 4-5.5 7-5.5s5.5 2 7 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#3571DF]"
          fill="none"
        />
      </svg>
    ),
  },
];

const serviceCategories = [
  {
    title: "Implementación y regularización",
    intro: "Planificamos el sistema contable, ordenamos rezagos y alineamos registros con tus operaciones actuales.",
    items: [
      "Planificación y puesta en marcha del sistema contable.",
      "Regularización y actualización de contabilidades atrasadas.",
      "Control de clientes, proveedores y estados de cobranza.",
      "Ejecución o supervisión de inventarios y movimientos de mercaderías.",
    ],
  },
  {
    title: "Gestión de activos y costos",
    intro: "Controlamos activos, costos y provisiones para asegurar balances precisos.",
    items: [
      "Control de activos fijos, corrección monetaria y depreciaciones.",
      "Determinación de estructuras de costos estándar y análisis de variaciones.",
      "Tratamiento de inventarios obsoletos y deudores incobrables.",
      "Gestión de gastos diferidos y activos intangibles.",
    ],
  },
  {
    title: "Control continuo y reportes",
    intro: "Seguimiento constante con conciliaciones, libros actualizados y reportes ejecutivos.",
    items: [
      "Conciliaciones bancarias y seguimiento de cuentas críticas.",
      "Mantención de libros y registros obligatorios y auxiliares.",
      "Contabilidad computacional con revisión permanente.",
      "Elaboración de estados financieros y reportes para la dirección.",
    ],
  },
];

export default function AccountingAdvisoryPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main id="inicio" className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <ServiceHero
          eyebrow="Servicios"
          title="Asesoría Contable"
          subtitle="Delega tu contabilidad y concéntrate en hacer crecer tu negocio"
          description="Nuestro equipo se integra a tu operación para manejar el registro diario, la elaboración de reportes y el análisis financiero que sostiene decisiones informadas. Administramos transacciones, elaboramos informes y exponemos riesgos u oportunidades para que tengas claridad absoluta sobre la salud económica de tu empresa."
          highlights={heroHighlights}
        />

        <InsightGrid insights={insights} />

        <BenefitsGrid
          title="Beneficios clave"
          subtitle="Más orden, control y criterio financiero en un mismo servicio"
          description="Cada bloque de la asesoría está pensado para liberar tiempo operativo, reducir contingencias y convertir la contabilidad en una herramienta estratégica para la dirección del negocio."
          benefits={benefits}
        />

        <ServiceAccordion
          eyebrow="Servicios incluidos"
          title="Todo lo que necesitas para una contabilidad confiable"
          description="Cubrimos la operación diaria y los análisis avanzados para que la información financiera llegue depurada, a tiempo y alineada a las normas contables vigentes."
          categories={serviceCategories}
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
