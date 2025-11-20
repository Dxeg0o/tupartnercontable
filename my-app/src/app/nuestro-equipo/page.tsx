import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Partner Accounting",
  description:
    "Conoce al equipo multidisciplinario de Partner Accounting y a su líder, Andrés Cabrera, ingeniero comercial y MBA executive en finanzas.",
};

const leadership = {
  name: "Andrés Cabrera",
  role: "Founder & CEO",
  summary:
    "Ingeniero Comercial de la UAI y MBA Executive en Finanzas. Andrés lidera Partner Accounting combinando visión estratégica, rigurosidad financiera y cercanía con los clientes.",
  highlights: [
    "15+ años acompañando empresas de alto crecimiento",
    "Especialista en eficiencia operativa y control financiero",
    "Mentor de equipos que buscan resultados medibles",
  ],
};

const squad = [
  {
    name: "Camila Ortega",
    role: "Líder de Operaciones Contables",
    focus:
      "Orquesta cierres mensuales, conciliaciones y automatizaciones para entregar reportes claros y accionables.",
  },
  {
    name: "Felipe Mella",
    role: "Head de Tributación",
    focus:
      "Diseña estrategias fiscales preventivas, gestiona fiscalizaciones y optimiza la carga tributaria sin riesgos.",
  },
  {
    name: "Javiera Pino",
    role: "People & Payroll Specialist",
    focus:
      "Garantiza nóminas impecables, cumplimiento laboral y procesos de onboarding fluidos para tu equipo.",
  },
  {
    name: "Rodrigo Álvarez",
    role: "Data & Reporting Lead",
    focus:
      "Convierte datos financieros en tableros y métricas que permiten decidir con anticipación y confianza.",
  },
];

const principles = [
  {
    title: "Equipo boutique, resultados corporativos",
    description:
      "Trabajamos en células pequeñas y expertas que se integran a tu operación con gobernanza y estándares de gran empresa.",
  },
  {
    title: "Acompañamiento cercano",
    description:
      "Respondemos rápido, proponemos mejoras y documentamos cada avance para que siempre sepas qué estamos haciendo y por qué.",
  },
  {
    title: "Obsesión por la precisión",
    description:
      "Nuestros procesos combinan tecnología y revisión humana para asegurar datos exactos y trazables desde el día uno.",
  },
  {
    title: "Confidencialidad y confianza",
    description:
      "Cuidamos tu información con protocolos de acceso, controles y cultura de responsabilidad compartida.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-12 lg:px-8 lg:pt-16">
        <section className="rounded-[32px] bg-white/80 p-8 shadow-[0_20px_60px_rgba(53,113,223,0.10)] ring-1 ring-[#E6E6E6] lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#3571DF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#3571DF]">
                Nuestro equipo
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
              </p>
              <h1 className="text-3xl font-bold leading-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl">
                Personas expertas, procesos claros y un liderazgo presente en cada proyecto
              </h1>
              <p className="text-lg text-[#4A4A4A] lg:text-xl">
                Detrás de Partner Accounting hay un equipo multidisciplinario que combina experiencia corporativa, tecnología y acompañamiento cercano para impulsar tus finanzas.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E6E6E6] bg-[#3571DF]/5 p-4">
                  <p className="text-sm font-semibold text-[#3571DF]">+120</p>
                  <p className="text-sm text-[#4A4A4A]">implementaciones y regularizaciones exitosas</p>
                </div>
                <div className="rounded-2xl border border-[#E6E6E6] bg-[#F4621D]/5 p-4">
                  <p className="text-sm font-semibold text-[#F4621D]">Equipo senior</p>
                  <p className="text-sm text-[#4A4A4A]">con trayectoria en empresas de alto crecimiento</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#3571DF]/20 to-[#F4621D]/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <Image
                  src="/Partner-Accounting-Home-01.jpg"
                  alt="Equipo de Partner Accounting"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[28px] bg-white/90 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] ring-1 ring-[#E6E6E6]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#F4621D]">Quién lidera</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1F1F1F] sm:text-3xl">El liderazgo de Andrés Cabrera</h2>
            <p className="mt-4 text-[#4A4A4A]">{leadership.summary}</p>
            <ul className="mt-6 space-y-3">
              {leadership.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1F1F1F]">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E6E6E6] bg-[#3571DF]/5 p-4">
                <p className="text-sm font-semibold text-[#3571DF]">Formación</p>
                <p className="text-sm text-[#1F1F1F]">Ingeniero Comercial UAI, MBA Executive en Finanzas</p>
              </div>
              <div className="rounded-2xl border border-[#E6E6E6] bg-[#F4621D]/5 p-4">
                <p className="text-sm font-semibold text-[#F4621D]">Rol</p>
                <p className="text-sm text-[#1F1F1F]">Mentor y sponsor en cada célula de servicio</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#E6E6E6] bg-white/90 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#3571DF] to-[#F4621D] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7 8c0-3.314 2.686-6 6-6h2c3.314 0 6 2.686 6 6v2H5v-2Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.06em] text-[#3571DF]">Equipo core</p>
                <h3 className="text-lg font-bold text-[#1F1F1F]">Especialistas que hacen que todo funcione</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {squad.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl border border-[#E6E6E6] bg-white/70 p-4 transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(53,113,223,0.12)]"
                >
                  <p className="text-sm font-semibold text-[#1F1F1F]">{member.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3571DF]">{member.role}</p>
                  <p className="mt-2 text-sm text-[#4A4A4A]">{member.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[28px] bg-white/90 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] ring-1 ring-[#E6E6E6] lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3571DF]">Cómo trabajamos</p>
              <h3 className="mt-2 text-2xl font-bold text-[#1F1F1F] sm:text-3xl">Principios que guían cada entrega</h3>
              <p className="mt-3 max-w-3xl text-[#4A4A4A]">
                Documentamos procesos, validamos información y mostramos avances en tableros compartidos. Esta disciplina nos permite mantener visibilidad total y prevenir sorpresas.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-[#3571DF]/10 px-4 py-2 text-sm font-semibold text-[#3571DF]">
              Seguimiento quincenal
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
              KPIs compartidos
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-[#E6E6E6] bg-white/70 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
              >
                <h4 className="text-base font-bold text-[#1F1F1F]">{principle.title}</h4>
                <p className="mt-2 text-sm text-[#4A4A4A]">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#E6E6E6] bg-white/90 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#F4621D]">A tu lado</p>
            <h3 className="mt-2 text-2xl font-bold text-[#1F1F1F] sm:text-3xl">Participamos en la operación, no solo en la estrategia</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Reuniones de seguimiento quincenales", "Reportes y tableros compartidos", "Protocolos documentados", "Alertas proactivas para decisiones críticas"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#3571DF]/5 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
                  <p className="text-sm text-[#1F1F1F]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(135deg,#3571DF,#F4621D)] p-8 text-white shadow-[0_16px_40px_rgba(53,113,223,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/80">Cercanía + expertise</p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Hablemos sobre el equipo que necesitas</h3>
            <p className="mt-3 text-white/90">
              Coordinemos una reunión con Andrés para mapear tus desafíos, definir el squad adecuado y acordar los hitos que moverán tus finanzas al siguiente nivel.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/56981592966?text=Hola%20Partner%20Accounting,%20quiero%20conocer%20a%20su%20equipo%20y%20evaluar%20un%20proyecto."
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3571DF] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-0.5"
              >
                Conversemos ahora
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12 6 6 9-13.5" />
                </svg>
              </a>
              <a
                href="mailto:acabrera@partneraccounting.cl?subject=Quiero%20conocer%20al%20equipo%20de%20Partner%20Accounting"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
