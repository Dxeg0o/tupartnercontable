import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

const leader = {
  name: "Andrés Cabrera",
  role: "Founder / CEO",
  credentials: [
    "Ingeniero Comercial, Universidad Adolfo Ibáñez",
    "Executive MBA en Finanzas",
  ],
  description:
    "Lidera la estrategia y la visión financiera de la firma, combinando pensamiento analítico con una mirada práctica sobre la ejecución de negocios. Andrés guía a los equipos para que cada proyecto se traduzca en resultados medibles y confianza duradera.",
};

const teamMembers = [
  {
    name: "María Torres",
    role: "Head de Operaciones",
    bio: "Especialista en optimizar flujos contables y coordinar equipos multidisciplinarios con foco en cumplimiento y eficiencia.",
  },
  {
    name: "Javier Rojas",
    role: "Líder Tributario",
    bio: "Diseña estrategias fiscales a la medida, anticipando riesgos y generando ahorros sostenidos para nuestros clientes.",
  },
  {
    name: "Camila Pérez",
    role: "Especialista en RR.HH.",
    bio: "Integra procesos laborales con herramientas digitales para cuidar la experiencia del colaborador y la trazabilidad legal.",
  },
  {
    name: "Felipe Hernández",
    role: "Controller Financiero",
    bio: "Consolida reportes ejecutivos, KPIs y tableros que permiten tomar decisiones con información clara y oportuna.",
  },
  {
    name: "Constanza Molina",
    role: "Consultora Senior",
    bio: "Acompaña a gerencias en proyectos de transformación financiera, asegurando gobernanza y adopción efectiva.",
  },
  {
    name: "Rodrigo Sáez",
    role: "Analista de Datos",
    bio: "Convierte registros contables en insights accionables mediante automatizaciones y visualizaciones precisas.",
  },
];

export const metadata: Metadata = {
  title: "Nuestro Equipo | Tu Partner Contable",
  description:
    "Conoce al equipo que impulsa las soluciones financieras y tributarias de Tu Partner Contable.",
};

function PlaceholderAvatar({ initials }: { initials: string }) {
  return (
    <div className="relative h-32 w-32 shrink-0 rounded-2xl bg-gradient-to-br from-[#3571DF] to-[#F4621D] text-white shadow-lg shadow-[0_16px_40px_rgba(53,113,223,0.25)]">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.2),transparent)]" />
      <span className="relative flex h-full items-center justify-center text-2xl font-semibold tracking-tight">
        {initials}
      </span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-12 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-[#E6E6E6] bg-white/90 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.06)] backdrop-blur lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Nuestro equipo</p>
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold leading-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl">
                Personas con criterio financiero, dedicadas a tu tranquilidad
              </h1>
              <p className="text-lg leading-relaxed text-[#5A5A5A]">
                Somos un equipo de especialistas que combina rigor técnico, visión estratégica y acompañamiento cercano. Cada proyecto se diseña con estándares corporativos y un enfoque humano que construye relaciones de largo plazo.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#E6E6E6] bg-gradient-to-br from-white via-white to-[#F8FBFF] p-6 shadow-[0_20px_60px_rgba(53,113,223,0.12)]">
              <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(53,113,223,0.08),transparent),radial-gradient(circle_at_80%_0%,rgba(244,98,29,0.08),transparent)]" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 rounded-full bg-gradient-to-b from-[#3571DF] to-[#F4621D]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Confianza & Liderazgo</p>
                    <p className="text-lg font-semibold text-[#1F1F1F]">Governance & Control</p>
                  </div>
                </div>
                <p className="text-[#5A5A5A]">Metodologías de calidad, reportabilidad clara y acompañamiento ejecutivo constante.</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-[#1F1F1F]">
                  <div className="rounded-2xl border border-[#E6E6E6] bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <p className="text-3xl font-semibold text-[#3571DF]">15+</p>
                    <p className="text-[#5A5A5A]">Años combinados de liderazgo ejecutivo</p>
                  </div>
                  <div className="rounded-2xl border border-[#E6E6E6] bg-white/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <p className="text-3xl font-semibold text-[#F4621D]">100%</p>
                    <p className="text-[#5A5A5A]">Compromiso con la continuidad operativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10">
          <div className="rounded-3xl border border-[#E6E6E6] bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
              <PlaceholderAvatar initials="AC" />
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#3571DF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3571DF]">
                    Líder
                  </span>
                  <span className="rounded-full bg-[#F4621D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F4621D]">
                    Dirección Ejecutiva
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#1F1F1F] sm:text-3xl">{leader.name}</h2>
                  <p className="text-lg font-medium text-[#3571DF]">{leader.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-[#1F1F1F]">
                  {leader.credentials.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E6E6E6] bg-[#F8FBFF] px-3 py-1 text-[#1F1F1F] shadow-[0_8px_20px_rgba(53,113,223,0.06)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed text-[#5A5A5A]">{leader.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Equipo senior</p>
              <h3 className="text-2xl font-semibold text-[#1F1F1F] sm:text-3xl">Especialistas que operan con estándares corporativos</h3>
              <p className="text-base text-[#5A5A5A]">
                Nuestros líderes de práctica trabajan coordinadamente para asegurar cumplimiento normativo, visión financiera y una experiencia de servicio cercana.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group relative overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_20%_20%,rgba(53,113,223,0.08),transparent),radial-gradient(circle_at_80%_0%,rgba(244,98,29,0.08),transparent)]" />
                  <div className="relative mb-4 flex items-center gap-4">
                    <PlaceholderAvatar initials={member.name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase()} />
                    <div>
                      <h4 className="text-xl font-semibold text-[#1F1F1F]">{member.name}</h4>
                      <p className="text-sm font-medium text-[#3571DF]">{member.role}</p>
                    </div>
                  </div>
                  <p className="relative text-sm leading-relaxed text-[#5A5A5A]">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
