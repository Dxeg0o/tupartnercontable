import Image from "next/image";
import type { Metadata } from "next";

import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Partner Accounting",
  description:
    "Conoce al equipo de Partner Accounting: liderazgo estratégico, cultura colaborativa y especialistas que impulsan resultados.",
};

const teamMembers = [
  {
    name: "Camila Vargas",
    role: "Head of Operations",
    quote: "Transformo procesos complejos en experiencias simples para nuestros clientes.",
    initials: "CV",
  },
  {
    name: "Luis Fernández",
    role: "Senior Tax Advisor",
    quote: "Me anticipo a la normativa para proteger la rentabilidad de cada negocio.",
    initials: "LF",
  },
  {
    name: "Valentina Silva",
    role: "People & Payroll Lead",
    quote: "Acompaño equipos para que el crecimiento sea sostenible y humano.",
    initials: "VS",
  },
  {
    name: "Ignacio Torres",
    role: "Financial Planning Analyst",
    quote: "Diseño tableros accionables que convierten datos en decisiones seguras.",
    initials: "IT",
  },
  {
    name: "Soledad Rojas",
    role: "Client Success Manager",
    quote: "Construyo relaciones cercanas basadas en transparencia y velocidad de respuesta.",
    initials: "SR",
  },
  {
    name: "Esteban Mella",
    role: "Automation Specialist",
    quote: "Integro tecnología para que la operación contable sea fluida y sin fricciones.",
    initials: "EM",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-12 lg:px-8">
        <section className="space-y-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3571DF] shadow-sm shadow-[0_10px_30px_rgba(53,113,223,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Capital Humano
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-[#1F1F1F] sm:text-4xl">
              Un equipo senior, estratégico y siempre cercano
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#5A5A5A]">
              Personas con visión financiera, mentalidad operativa y la calidez para acompañar a cada cliente en los momentos clave.
            </p>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-[#E6E6E6] bg-white/85 p-8 shadow-xl shadow-[0_18px_40px_rgba(53,113,223,0.18)] lg:grid-cols-[1.05fr,1.3fr] lg:p-12">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#3571DF] via-[#6A9AFA] to-[#F4621D] shadow-lg shadow-[0_16px_36px_rgba(53,113,223,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.18),transparent_30%)]" />
            <Image
              src="/andres-cabrera.webp"
              alt="Andrés Cabrera"
              width={720}
              height={900}
              className="relative h-full w-full object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-[#6A9AFA1A] px-5 py-2 text-sm font-semibold text-[#3571DF] ring-1 ring-[#E6E6E6]">
              Liderazgo Ejecutivo
            </div>
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.28em] text-[#F4621D]">Founder & CEO</p>
              <h2 className="text-3xl font-bold text-[#1F1F1F]">Andrés Cabrera</h2>
              <p className="text-base leading-relaxed text-[#4B5563]">
                Estratega financiero con más de 15 años liderando estructuras corporativas, integrando gobierno, riesgo y tecnología para acelerar el crecimiento rentable de empresas en expansión.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Ingeniero Comercial UAI", "Executive MBA en Finanzas"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3571DF] shadow-md shadow-[0_12px_26px_rgba(53,113,223,0.18)] ring-1 ring-[#E6E6E6]"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
                  {badge}
                </span>
              ))}
            </div>
            <div className="grid gap-4 rounded-2xl bg-[#F7F8FB] p-5 text-sm text-[#4B5563] shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3571DF]">Dirección estratégica</p>
                <p>
                  Conecta la visión de negocio con la disciplina financiera, habilitando estructuras robustas, reporting confiable y toma de decisiones basada en métricas.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3571DF]">Cercanía ejecutiva</p>
                <p>
                  Lidera equipos con comunicación clara, acompaña a los clientes en hitos críticos y asegura que cada entrega refleje excelencia y puntualidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-[#E6E6E6] bg-white/90 p-8 shadow-lg shadow-[0_18px_36px_rgba(53,113,223,0.15)] lg:grid-cols-[1.2fr,0.9fr] lg:p-12">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-r from-[#1F1F1F] via-[#2A2A2A] to-[#3B3B3B] shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(53,113,223,0.28),rgba(244,98,29,0.15)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-90"
              aria-hidden
            />
            <div className="relative flex h-full flex-col justify-between bg-gradient-to-t from-black/65 via-black/45 to-black/30 p-10 text-white">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.26em] text-white/70">Cultura y valores</p>
                <h3 className="text-2xl font-semibold leading-tight lg:text-3xl">
                  Una tribu que combina rigor técnico y humanidad
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-white/80">
                  Trabajamos como un solo equipo, con transparencia radical y obsesión por entregar excelencia. Nuestra cultura fomenta la colaboración, la curiosidad y la responsabilidad compartida.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Unidad", "Transparencia", "Excelencia", "Compromiso"].map((value) => (
                  <div
                    key={value}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-lg"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 rounded-[1.6rem] bg-[#F7F8FB] p-8 shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ring-1 ring-[#E6E6E6]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Pilares</p>
              <h4 className="text-xl font-semibold text-[#1F1F1F]">Cómo se vive nuestra cultura</h4>
              <p className="text-sm leading-relaxed text-[#4B5563]">
                Creamos un entorno que equilibra disciplina y cercanía, promoviendo decisiones con datos, conversaciones honestas y celebrando cada logro en conjunto.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Mentoría constante", "Rituales de transparencia", "Documentación rigurosa", "Celebramos el aprendizaje"].map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-start gap-3 rounded-xl border border-[#E6E6E6] bg-white px-4 py-3 text-sm text-[#4B5563] shadow-md shadow-[0_10px_28px_rgba(53,113,223,0.12)]"
                >
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#3571DF] to-[#F4621D]" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3571DF]">Equipo operativo</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-2xl font-semibold text-[#1F1F1F] sm:text-3xl">Talento que ejecuta y acompaña</h3>
              <p className="max-w-xl text-sm leading-relaxed text-[#5A5A5A]">
                Squads expertos que combinan compliance, automatización y asesoría diaria. Conectamos con tus equipos para que cada proceso fluya con elegancia y previsibilidad.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-[#E6E6E6] bg-white/90 p-5 shadow-lg shadow-[0_14px_30px_rgba(53,113,223,0.12)] transition hover:-translate-y-1 hover:border-[#3571DF]"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#3571DF] via-[#6A9AFA] to-[#F4621D] p-1 shadow-inner shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <div className="flex h-36 items-center justify-center rounded-[0.9rem] bg-white/85 text-3xl font-semibold text-[#3571DF]">
                    <span className="rounded-full bg-[#6A9AFA1A] px-4 py-2 text-[#1F1F1F] shadow-sm shadow-[0_10px_24px_rgba(53,113,223,0.18)]">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-[#1F1F1F]">{member.name}</h4>
                  <p className="text-sm font-medium text-[#3571DF]">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#4B5563]">{member.quote}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
