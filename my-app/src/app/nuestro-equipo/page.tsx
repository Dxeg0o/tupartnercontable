import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Partner Accounting",
  description:
    "Conoce al liderazgo y al equipo operativo de Partner Accounting. Experiencia financiera, precisión contable y cercanía en cada proyecto.",
};

const teamMembers = [
  {
    name: "Valentina Ortiz",
    role: "Head of Operations",
    bio: "Orienta procesos con dashboards en vivo y una cultura de entregables impecables.",
  },
  {
    name: "Matías Rivas",
    role: "Senior Tax Specialist",
    bio: "Especialista en optimización fiscal y compliance, anticipa riesgos con precisión.",
  },
  {
    name: "Carolina Paredes",
    role: "People & Payroll Lead",
    bio: "Cuida cada nómina y clima laboral con procesos claros y comunicación cercana.",
  },
  {
    name: "Felipe Navarro",
    role: "FP&A Manager",
    bio: "Convierte datos en rutas de crecimiento, conectando estrategia y liquidez.",
  },
  {
    name: "Ignacia López",
    role: "Client Success Partner",
    bio: "Acompaña a dirección con seguimiento ejecutivo y reportes accionables.",
  },
  {
    name: "Tomás Herrera",
    role: "Automation Engineer",
    bio: "Integra sistemas y elimina fricciones con flujos digitales y auditoría continua.",
  },
];

const values = [
  { label: "Unidad", description: "Trabajamos como un solo frente, integrando visión contable, fiscal y de personas." },
  { label: "Transparencia", description: "Tableros abiertos, trazabilidad total y conversaciones francas con clientes." },
  { label: "Excelencia", description: "Estandarizamos con protocolos senior y calidad medible en cada entrega." },
  { label: "Compromiso", description: "Respondemos con cercanía, urgencia y ownership sobre los resultados." },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <section className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5A5A5A]">Capital Humano</p>
          <h1 className="text-4xl font-bold leading-tight text-[#1F1F1F] sm:text-5xl">
            Equipo senior que combina disciplina financiera y cercanía ejecutiva
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
            Estrategas, contadores y especialistas tributarios que operan como un mismo squad para que las decisiones de negocio
            lleguen con claridad, datos y acompañamiento directo.
          </p>
        </section>

        <section className="grid items-center gap-10 rounded-[32px] border border-[#E6E6E6] bg-white/80 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.06)] lg:grid-cols-[1.05fr_1fr] lg:p-12">
          <div className="overflow-hidden rounded-[28px] bg-[#E6E6E6] shadow-lg">
            <Image
              src="/andres-cabrera.webp"
              alt="Retrato de Andrés Cabrera, Founder & CEO"
              width={720}
              height={820}
              className="h-full w-full max-h-[620px] object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3571DF]">Liderazgo</p>
              <h2 className="text-3xl font-bold text-[#1F1F1F] sm:text-4xl">Andrés Cabrera</h2>
              <p className="text-lg font-semibold text-[#5A5A5A]">Founder &amp; CEO</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Ingeniero Comercial UAI", "Executive MBA en Finanzas"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#F6F8FF] px-4 py-2 text-sm font-semibold text-[#3571DF] shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)]" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-base leading-relaxed text-[#5A5A5A]">
              <p>
                Diseña estrategias financieras integrales que conectan métricas de crecimiento, liquidez y gobierno corporativo.
                Su enfoque combina rigor analítico, lectura tributaria y una cultura de servicio cercana al directorio.
              </p>
              <p>
                Lidera equipos multidisciplinarios con metodologías ágiles, reportabilidad ejecutiva y controles que permiten
                tomar decisiones en tiempo real sin perder visión de largo plazo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E6E6E6] bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-[#5A5A5A]">Estrategia</p>
                <p className="mt-2 text-2xl font-bold text-[#1F1F1F]">+15 años</p>
                <p className="mt-1 text-sm text-[#5A5A5A]">Gestión financiera y consolidación de equipos de alto rendimiento.</p>
              </div>
              <div className="rounded-2xl border border-[#E6E6E6] bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-[#5A5A5A]">Resultados</p>
                <p className="mt-2 text-2xl font-bold text-[#1F1F1F]">120+ clientes</p>
                <p className="mt-1 text-sm text-[#5A5A5A]">Acompañados con planes financieros, tributarios y de eficiencia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-[#E6E6E6] bg-white/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] lg:grid-cols-[1.2fr_1fr] lg:p-12">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0F172A]">
            <Image
              src="/team-group.svg"
              alt="Foto grupal ilustrada del equipo"
              width={1200}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-transparent to-[#0F172A]/50" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/85 px-5 py-3 text-sm font-semibold text-[#1F1F1F] shadow-lg">
              Cultura y valores que se viven en cada entrega
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3571DF]">Cultura y Valores</p>
            <h3 className="text-3xl font-bold leading-tight text-[#1F1F1F] sm:text-4xl">
              Pilares que sostienen nuestra forma de trabajar
            </h3>
            <p className="text-base leading-relaxed text-[#5A5A5A]">
              Combinamos estándares senior con empatía operativa. Cada célula trabaja alineada a objetivos claros, métricas
              compartidas y un trato cercano que se refleja en la experiencia de nuestros clientes.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="group flex gap-3 rounded-2xl border border-[#E6E6E6] bg-white/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(53,113,223,0.12)]"
                >
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)] text-white shadow-md">
                    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
                      <path
                        d="M5 12.5 10 17l9-10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-[#1F1F1F]">{value.label}</p>
                    <p className="text-sm leading-relaxed text-[#5A5A5A]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3571DF]">Equipo Operativo</p>
            <h3 className="text-3xl font-bold text-[#1F1F1F] sm:text-4xl">Talento que ejecuta con precisión</h3>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
              Squads especialistas en contabilidad, impuestos, nómina y automatización, listos para integrarse a tu operación
              con criterio senior y velocidad de respuesta.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-4 rounded-[24px] border border-[#E6E6E6] bg-white/85 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(53,113,223,0.14)]"
              >
                <div className="overflow-hidden rounded-2xl bg-[#E6E6E6]">
                  <Image
                    src="/team-member-placeholder.svg"
                    alt={`Retrato de ${member.name}`}
                    width={480}
                    height={560}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-[#1F1F1F]">{member.name}</p>
                  <p className="text-sm font-semibold text-[#3571DF]">{member.role}</p>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{member.bio}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">
                  <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)]" />
                  Alto estándar operativo
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
