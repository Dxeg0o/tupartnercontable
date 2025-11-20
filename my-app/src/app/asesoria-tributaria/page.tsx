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
  title: "Asesoría Tributaria | Partner Accounting",
  description:
    "Detalle del servicio de asesoría tributaria integral de Partner Accounting: trámites ante el SII, declaraciones y acompañamiento experto.",
};

const heroHighlights = [
  "Optimización fiscal permanente",
  "Cumplimiento normativo total",
  "Acompañamiento estratégico continuo",
];

const insights = [
  {
    label: "Nuestro enfoque",
    title: "Estrategia tributaria a medida",
    description:
      "Analizamos tu operación, tus contratos y proyecciones para diseñar una hoja de ruta fiscal que reduzca la carga impositiva sin descuidar el cumplimiento.",
  },
  {
    label: "Resultados",
    title: "Declaraciones impecables y documentación lista",
    description:
      "Cada obligación llega a tiempo, respaldada por registros consistentes, expedientes para fiscalizaciones y claridad sobre el impacto de los impuestos en tu rentabilidad.",
  },
];

const benefits = [
  {
    title: "Optimización fiscal permanente",
    description:
      "Identificamos beneficios, créditos y franquicias para que solo pagues lo que corresponde y mantengas liquidez disponible para tu crecimiento.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M4 7l8-4 8 4v5.5c0 4.5-3.1 8.6-7.5 9.5C7.1 21.1 4 17 4 12.5V7z"
          fill="currentColor"
          className="text-[#3571DF]"
        />
      </svg>
    ),
  },
  {
    title: "Cumplimiento normativo total",
    description:
      "Monitoreamos calendarios y cambios legales para presentar tus declaraciones a tiempo, sin multas ni observaciones del SII.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M9 11l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#3571DF]"
        />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          ry="2"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6A9AFA]"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Decisiones con información clara",
    description:
      "Convertimos los datos de tu negocio en reportes accionables que te permiten anticipar escenarios y tomar decisiones estratégicas.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M4 19h16M6 16v-5m4 5V8m4 8v-3m4 3V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#3571DF]"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Defensa y representación experta",
    description:
      "Te acompañamos frente a fiscalizaciones y requerimientos, preparando documentación y argumentos sólidos para cada instancia.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M12 3l7 4v5c0 4-3 7.5-7 8-4-0.5-7-4-7-8V7l7-4z"
          fill="currentColor"
          className="text-[#3571DF]"
        />
        <path
          d="M10 11l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Alertas proactivas de cambios normativos",
    description:
      "Mantenemos tu operación informada y preparada ante actualizaciones legales, ajustando calendarios y obligaciones de inmediato.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M12 9v4m0 4h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#3571DF]"
        />
        <path
          d="M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L12.71 3.86a1 1 0 00-1.72 0z"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6A9AFA]"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Monitoreo continuo de obligaciones",
    description:
      "Consolidados mensuales, checklists y recordatorios garantizan que cada declaración llegue con respaldo y sin contingencias.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          d="M8 6h8M8 10h8M8 14h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-[#3571DF]"
          fill="none"
        />
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          className="text-[#6A9AFA]"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

const serviceCategories = [
  {
    title: "Trámites ante SII y otros organismos",
    intro: "Gestionamos las formalidades clave para operar sin contingencias y mantener tu estructura societaria al día.",
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
    intro: "Registramos y monitoreamos cada movimiento con rigor para asegurar trazabilidad tributaria completa.",
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

export default function TaxAdvisoryPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main id="inicio" className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <ServiceHero
          eyebrow="Servicios"
          title="Asesoría Tributaria"
          subtitle="Optimiza tu carga tributaria y maximiza tus beneficios"
          description="En Partner-Accounting te ofrecemos un servicio de asesoría tributaria integral, diseñado para ayudarte a cumplir con tus obligaciones fiscales, optimizar tu carga tributaria y tomar decisiones financieras estratégicas. Te acompañamos en cada paso con estrategias claras, ejecución rigurosa y documentación lista para cada fiscalización."
          highlights={heroHighlights}
        />

        <InsightGrid insights={insights} />

        <BenefitsGrid
          title="Beneficios clave"
          subtitle="Un partner tributario que combina estrategia y ejecución"
          description="Cada beneficio está pensado para liberar a tu equipo de tareas operativas, reducir riesgos y transformar la gestión tributaria en un impulso directo para tu negocio."
          benefits={benefits}
        />

        <ServiceAccordion
          eyebrow="¿Qué incluye nuestra asesoría?"
          title="Tramitación, declaraciones y control diario en un mismo servicio"
          description="Abarcamos desde los trámites iniciales ante el SII hasta la operación diaria, asegurando que cada obligación esté respaldada por registros consistentes y una estrategia fiscal sólida."
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
