import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { ServiceHero } from "../components/service/ServiceHero";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Partner Accounting",
  description:
    "Conoce al equipo multidisciplinario liderado por Andrés Cabrera, Ingeniero Comercial UAI con MBA Executive en Finanzas.",
};

const teamCapabilities = [
  {
    title: "Contabilidad estratégica",
    description:
      "Squad especializado en ordenar registros, preparar reportes ejecutivos y anticipar riesgos para que las decisiones diarias tengan respaldo financiero.",
    highlight: "Procedimientos auditables, cierres puntuales y foco en visibilidad",
  },
  {
    title: "Tributaria y cumplimiento",
    description:
      "Equipo senior que diseña estrategias fiscales, previene contingencias y representa frente a organismos reguladores con criterio ejecutivo.",
    highlight: "Planificación, defensa y optimización permanente",
  },
  {
    title: "Personas y operaciones",
    description:
      "Consultores de RR.HH. que automatizan nómina, contratos y beneficios para asegurar orden laboral y experiencias consistentes para tu gente.",
    highlight: "Procesos digitales, métricas de bienestar y soporte continuo",
  },
];

const leadershipHighlights = [
  {
    label: "Formación",
    value: "Ingeniero Comercial UAI",
    detail: "Sólida base en estrategia y gestión financiera aplicada a empresas de alto crecimiento.",
  },
  {
    label: "Postgrado",
    value: "MBA Executive en Finanzas",
    detail: "Visión integral de inversiones, riesgos y gobierno corporativo para decisiones informadas.",
  },
  {
    label: "Rol",
    value: "CEO & Fundador",
    detail: "Lidera la metodología de Partner Accounting y acompaña directamente a clientes clave.",
  },
];

const collaborationPillars = [
  {
    title: "Equipo a tu medida",
    description:
      "Asignamos un lead estratégico, especialistas por disciplina y analistas de soporte para integrar nuestras células a tu operación.",
  },
  {
    title: "Ritmo ejecutivo",
    description:
      "Planificamos con OKR y tableros compartidos; reportamos hallazgos accionables y priorizamos quick wins cada trimestre.",
  },
  {
    title: "Confianza y transparencia",
    description:
      "Documentamos procesos, entregamos trazabilidad y respondemos con cercanía para que siempre sepas quién ejecuta y cómo.",
  },
  {
    title: "Tecnología habilitante",
    description:
      "Utilizamos flujos digitales, repositorios seguros y automatizaciones para reducir errores y acelerar la entrega de resultados.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <ServiceHero
          eyebrow="Quiénes somos"
          title="Nuestro equipo"
          subtitle="Expertos multidisciplinarios liderados por Andrés Cabrera"
          description="Combinamos experiencia contable, tributaria y de recursos humanos para acompañar a tu negocio con el mismo rigor de un equipo interno. Nos involucramos en la estrategia, anticipamos contingencias y te damos la tranquilidad de tener especialistas visibles y disponibles."
          highlights={[
            "Liderados por Andrés Cabrera, Ingeniero Comercial UAI",
            "MBA Executive en Finanzas y visión corporativa",
            "Células especializadas con acompañamiento ejecutivo",
          ]}
        />

        <section className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ring-1 ring-[#E6E6E6] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3571DF]">Equipo</p>
              <h2 className="text-3xl font-semibold text-[#1F1F1F] lg:text-4xl">Personas reales detrás de cada entrega</h2>
              <p className="text-lg text-[#4A4A4A]">
                Nuestro equipo mezcla perfiles financieros, tributarios y de personas para sostener la operación completa: desde la captura de datos hasta la toma de decisiones. Cada cliente cuenta con referentes identificables y un canal directo para resolver dudas sin esperas.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {teamCapabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#F7F9FF] p-5 ring-1 ring-[#E6E6E6] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(53,113,223,0.12)]"
                  >
                    <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] opacity-10 transition-opacity group-hover:opacity-20" />
                    <h3 className="text-lg font-semibold text-[#1F1F1F]">{capability.title}</h3>
                    <p className="mt-2 text-sm text-[#4A4A4A]">{capability.description}</p>
                    <p className="mt-3 inline-flex rounded-full bg-[#3571DF]/10 px-3 py-1 text-xs font-semibold text-[#3571DF]">
                      {capability.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[linear-gradient(135deg,#3571DF,#F4621D)] p-8 text-white shadow-[0_18px_50px_rgba(53,113,223,0.32)] ring-1 ring-[#6A9AFA]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">Liderazgo</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">Andrés Cabrera</h3>
              <p className="mt-1 text-base font-medium text-white/90">Ingeniero Comercial UAI · MBA Executive en Finanzas</p>
              <p className="mt-3 text-sm text-white/85">
                Andrés fundó Partner Accounting para conectar la rigurosidad contable con la mirada estratégica que las empresas necesitan para crecer. Acompaña personalmente las implementaciones críticas y facilita conversaciones de negocio con dirección y accionistas.
              </p>
              <div className="mt-5 grid gap-3">
                {leadershipHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold">{item.value}</p>
                    <p className="text-sm text-white/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ring-1 ring-[#E6E6E6] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#3571DF]">Forma de trabajo</p>
              <h2 className="text-3xl font-semibold text-[#1F1F1F] lg:text-4xl">Acompañamiento cercano con metodología clara</h2>
              <p className="text-lg text-[#4A4A4A]">
                Operamos con una estructura de project management que garantiza avances visibles. Documentamos acuerdos, medimos impacto y mantenemos a los líderes informados con reportes periódicos y tableros compartidos.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {collaborationPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-dashed border-[#E6E6E6] bg-[#F9FAFB] p-5 transition-all hover:border-[#3571DF]/40 hover:bg-white"
                  >
                    <h3 className="text-base font-semibold text-[#1F1F1F]">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-[#4A4A4A]">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[radial-gradient(circle_at_20%_20%,#EFF4FF,transparent_45%),_radial-gradient(circle_at_80%_20%,#FFE6D8,transparent_40%),_linear-gradient(180deg,#FFFFFF,#F7F9FF)] p-6 ring-1 ring-[#E6E6E6]">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-sm font-semibold text-white shadow-lg shadow-[0_12px_28px_rgba(53,113,223,0.22)]">
                    1
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1F1F1F]">Kickoff inmersivo</h4>
                    <p className="text-sm text-[#4A4A4A]">Revisamos indicadores, procesos y expectativas del directorio para definir objetivos claros y responsables.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-sm font-semibold text-white shadow-lg shadow-[0_12px_28px_rgba(53,113,223,0.22)]">
                    2
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1F1F1F]">Implementación guiada</h4>
                    <p className="text-sm text-[#4A4A4A]">Activamos células especializadas, digitalizamos flujos y acordamos un calendario de entregables con hitos mensuales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-sm font-semibold text-white shadow-lg shadow-[0_12px_28px_rgba(53,113,223,0.22)]">
                    3
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1F1F1F]">Seguimiento ejecutivo</h4>
                    <p className="text-sm text-[#4A4A4A]">Revisamos métricas, riesgos y oportunidades en sesiones con Andrés Cabrera y el equipo senior para ajustar la estrategia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
