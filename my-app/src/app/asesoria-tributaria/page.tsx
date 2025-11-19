import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { BenefitsGrid } from "../components/service/BenefitsGrid";
import { ServiceAccordion } from "../components/service/ServiceAccordion";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceInsights } from "../components/service/ServiceInsights";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Asesoría Tributaria | Partner Accounting",
  description:
    "Detalle del servicio de asesoría tributaria integral de Partner Accounting: trámites ante el SII, declaraciones y acompañamiento experto.",
};

const benefits = [
  {
    title: "Optimización fiscal permanente",
    description:
      "Identificamos beneficios, créditos y franquicias para que solo pagues lo que corresponde y mantengas liquidez disponible para tu crecimiento.",
  },
  {
    title: "Cumplimiento normativo total",
    description:
      "Monitoreamos calendarios y cambios legales para presentar tus declaraciones a tiempo, sin multas ni observaciones del SII.",
  },
  {
    title: "Decisiones con información tributaria clara",
    description:
      "Convertimos los datos de tu negocio en reportes accionables que te permiten anticipar escenarios y tomar decisiones estratégicas.",
  },
  {
    title: "Defensa y representación experta",
    description:
      "Te acompañamos frente a fiscalizaciones y requerimientos, preparando documentación y argumentos sólidos para cada instancia.",
  },
];

const serviceCategories = [
  {
    title: "Trámites ante SII y otros organismos",
    intro:
      "Gestionamos las formalidades clave para operar sin contingencias y mantener tu estructura societaria al día.",
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
    intro:
      "Registramos y monitoreamos cada movimiento con rigor para asegurar trazabilidad tributaria completa.",
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

const managementHighlights = [
  "Planificación tributaria a la medida",
  "Monitoreo de obligaciones mensuales",
  "Alertas proactivas de cambios normativos",
  "Auditoría de registros contables",
  "Preparación de expedientes para fiscalizaciones",
  "Acompañamiento estratégico en decisiones de inversión",
];

export default function TaxAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation navigation={landingNavigation} />

      <main id="inicio" className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <ServiceHero
          eyebrow="Asesoría Tributaria"
          title="Optimiza tu carga tributaria y maximiza tus beneficios"
          subtitle="Cumplimiento impecable, planeación fiscal y acompañamiento experto para que tomes decisiones estratégicas con datos claros."
          descriptions={[
            "En Partner-Accounting te ofrecemos un servicio de asesoría tributaria integral, diseñado para ayudarte a cumplir con tus obligaciones fiscales, optimizar tu carga tributaria y tomar decisiones financieras estratégicas.",
            "Nuestro equipo te acompaña en cada paso, garantizando el cumplimiento normativo y brindándote la información necesaria para decidir con confianza.",
          ]}
        />

        <ServiceInsights
          eyebrow="Estrategia y resultados"
          title="Una metodología senior, enfocada en resultados medibles"
          intro="Combinamos planeación anticipada, control diario y comunicación ejecutiva para que cada hito tributario esté cubierto."
          insights={[
            {
              title: "Nuestro enfoque",
              description:
                "Analizamos tu operación, contratos y proyecciones para diseñar una estrategia tributaria personalizada que reduzca la carga impositiva sin descuidar el cumplimiento.",
            },
            {
              title: "Resultados",
              description:
                "Declaraciones impecables, documentación lista para fiscalizaciones y claridad total sobre cómo afectan los impuestos a tu rentabilidad.",
            },
          ]}
        />

        <BenefitsGrid
          eyebrow="Beneficios clave"
          title="Un partner tributario que combina estrategia y ejecución"
          intro="Cada beneficio está pensado para liberar a tu equipo de tareas operativas, reducir riesgos y transformar la gestión tributaria en un impulso directo para tu negocio."
          benefits={benefits}
        />

        <ServiceAccordion
          eyebrow="¿Qué incluye nuestra asesoría?"
          title="Tramitación, declaraciones y control diario en un mismo servicio"
          intro="Abarcamos desde los trámites iniciales ante el SII hasta la operación diaria, asegurando que cada obligación esté respaldada por registros consistentes y una estrategia fiscal sólida."
          categories={serviceCategories}
          highlights={managementHighlights}
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
