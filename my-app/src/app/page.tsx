import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { ModalidadesSection } from "./components/ModalidadesSection";
import { Navigation } from "./components/Navigation";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";

const navigation = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#tributaria" },
  { label: "Asesoría en Recursos Humanos", href: "#rrhh" },
  { label: "Empresas", href: "#empresas" },
  { label: "Preguntas", href: "#faq" },
];

const services = [
  {
    id: "servicios",
    label: "Asesoría Contable",
    description:
      "Nuestra asesoría contable te brinda tranquilidad de tener tus estados financieros al día y con información accionable.",
    highlights: [
      "Optimización de procesos",
      "Cumplimiento normativo",
      "Visión con datos informada",
      "Reducción de errores",
    ],
    href: "#contacto",
  },
  {
    id: "tributaria",
    label: "Asesoría Tributaria",
    description:
      "Reducimos tu carga tributaria con planes diseñados a la medida de tu negocio, anticipándonos a contingencias fiscales.",
    highlights: [
      "Planificación fiscal",
      "Estrategias de ahorro",
      "Defensa y representaciones",
      "Alertas proactivas",
    ],
    href: "#contacto",
  },
  {
    id: "rrhh",
    label: "Asesoría en Recursos Humanos",
    description:
      "Gestionamos talento, nómina y cumplimiento laboral con soluciones integrales que cuidan a tu equipo y tu operación.",
    highlights: [
      "Gestión del ciclo completo",
      "Digitalización de procesos",
      "Cumplimiento laboral",
      "Escalabilidad del servicio",
    ],
    href: "#contacto",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entendemos tus necesidades",
    description:
      "Comenzamos con una reunión inmersiva donde analizamos tus indicadores, estructura y desafíos para co-crear objetivos claros.",
    insight:
      "Mapeamos oportunidades de mejora con foco en eficiencia operativa, cumplimiento y crecimiento sostenible.",
    image: "/IT-Business-Process-Image-1.webp",
  },
  {
    number: "02",
    title: "Diseñamos una solución a medida",
    description:
      "Activamos un equipo multidisciplinario para construir un plan con hitos, responsables y tecnología habilitante.",
    insight:
      "Priorizamos quick wins y automatizaciones que entregan visibilidad financiera desde el primer mes.",
    image: "/IT-Business-Process-Image-2.webp",
  },
  {
    number: "03",
    title: "Implementamos y acompañamos",
    description:
      "Ejecutamos el roadmap con seguimiento cercano, tableros compartidos y revisión de métricas clave.",
    insight:
      "Nuestro squad permanece a tu lado para ajustar estrategias y asegurar resultados sostenidos.",
    image: "/IT-Business-Process-Image-3.webp",
  },
];

const serviceModes = [
  {
    title: "Externalización",
    description:
      "Delegá tus tareas administrativas y concéntrate en lo que realmente importa. Nuestro outsourcing optimiza tus recursos y te permite tomar decisiones con datos confiables.",
    highlight: "Automatización, tableros y soporte continuo",
  },
  {
    title: "Asesoría Permanente",
    description:
      "Conectamos con tu equipo para asegurar cumplimiento, visibilidad y acompañamiento diario. Construimos contigo una estrategia financiera sostenible y alineada a tus objetivos.",
    highlight: "Equipo dedicado, KPI financieros y roadmap trimestral",
  },
  {
    title: "Asesoría Esporádica",
    description:
      "¿Necesitás una opinión experta? Atendemos requerimientos puntuales con diagnósticos personalizados y soluciones accionables cuando más lo necesitás.",
    highlight: "Respuestas ágiles para decisiones clave",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 lg:px-8">
        <Navigation navigation={navigation} />

        <HeroSection />

        <ServicesSection services={services} />

        <TestimonialsCarousel />

        <ProcessSection steps={processSteps} />

        <FAQSection />

        <ModalidadesSection serviceModes={serviceModes} />

        <ContactSection />
      </div>
    </div>
  );
}
