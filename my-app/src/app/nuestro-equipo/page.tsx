import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Tu Partner Contable",
  description:
    "Conoce al equipo de Tu Partner Contable: liderazgo estratégico y especialistas que acompañan cada decisión financiera.",
};

const teamMembers = [
  {
    name: "Valentina Rojas",
    role: "Gerente de Operaciones",
    bio: "Orquesta procesos y metodologías para que cada servicio llegue con puntualidad, control y una experiencia impecable.",
  },
  {
    name: "Felipe Morales",
    role: "Líder Tributario",
    bio: "Diseña estrategias fiscales preventivas, anticipando contingencias y optimizando la carga tributaria de nuestros clientes.",
  },
  {
    name: "Camila Torres",
    role: "Consultora de Personas y Payroll",
    bio: "Integra prácticas laborales y nómina digital para fortalecer culturas de alto desempeño y cumplimiento normativo.",
  },
  {
    name: "Diego Pérez",
    role: "Analista FP&A",
    bio: "Convierte datos financieros en tableros accionables para sostener decisiones con visibilidad y proyecciones claras.",
  },
  {
    name: "Javiera Silva",
    role: "Especialista en Implementaciones",
    bio: "Lidera migraciones y automatizaciones cuidando la integridad de la información y la adopción tecnológica del equipo.",
  },
  {
    name: "Martín Herrera",
    role: "Customer Success Manager",
    bio: "Acompaña a cada cliente con seguimiento cercano, asegurando resultados sostenibles y una relación de confianza.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <section className="grid gap-10 rounded-3xl border border-[#E6E6E6] bg-white/70 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:grid-cols-2 lg:p-12">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit rounded-full bg-[#3571DF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#3571DF]">
              Nuestro equipo
            </span>
            <h1 className="text-3xl font-semibold text-[#1F1F1F] sm:text-4xl lg:text-5xl">
              El talento que respalda decisiones financieras con confianza
            </h1>
            <p className="text-lg leading-7 text-[#4A4A4A] lg:text-xl">
              Contamos con líderes y especialistas que combinan visión estratégica, dominio normativo y acompañamiento cercano.
              Cada proyecto se ejecuta con la precisión y el criterio que esperan las empresas que buscan crecer sin sobresaltos.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-[#3571DF]/10 to-[#F4621D]/10 p-4 shadow-inner">
                <p className="text-sm font-semibold text-[#1F1F1F]">Visión Estratégica</p>
                <p className="text-sm text-[#4A4A4A]">Dirección ejecutiva que prioriza foco y resultados sostenibles.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#3571DF]/10 to-[#6A9AFA]/10 p-4 shadow-inner">
                <p className="text-sm font-semibold text-[#1F1F1F]">Ejecución Metódica</p>
                <p className="text-sm text-[#4A4A4A]">Equipos interdisciplinarios con procesos robustos y medibles.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3571DF] to-[#F4621D] p-[1px]">
            <div className="h-full rounded-[1.4rem] bg-white/90 p-8 backdrop-blur">
              <div className="relative mb-6 h-28 w-28 rounded-2xl bg-gradient-to-br from-[#3571DF]/90 to-[#F4621D]/80 shadow-[0_20px_50px_rgba(53,113,223,0.25)]" />
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#3571DF]">Founder / CEO</p>
                <h2 className="text-2xl font-semibold text-[#1F1F1F]">Andrés Cabrera</h2>
                <p className="text-sm font-medium text-[#4A4A4A]">
                  Ingeniero Comercial, Universidad Adolfo Ibáñez — Executive MBA en Finanzas.
                </p>
                <p className="text-base leading-7 text-[#2F2F2F]">
                  Lidera la visión estratégica de la firma, uniendo su experiencia financiera y enfoque ejecutivo para construir
                  soluciones que fortalecen la gobernanza de nuestros clientes. Su trayectoria impulsando equipos de alto
                  rendimiento garantiza decisiones con rigor, anticipación y confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#3571DF]">Equipo multidisciplinario</p>
            <h3 className="text-2xl font-semibold text-[#1F1F1F] sm:text-3xl">
              Especialistas que operan y acompañan de principio a fin
            </h3>
            <p className="text-base leading-7 text-[#4A4A4A] sm:text-lg">
              Nuestro squad combina contabilidad, tributación, personas y data financiera para responder con rapidez y precisión
              a cada etapa de tu negocio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#3571DF]/80 to-[#6A9AFA]/70 text-lg font-semibold text-white shadow-[0_12px_30px_rgba(53,113,223,0.35)]">
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3571DF]">{member.role}</p>
                    <h4 className="text-lg font-semibold text-[#1F1F1F]">{member.name}</h4>
                  </div>
                </div>
                <p className="text-sm leading-6 text-[#4A4A4A]">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
