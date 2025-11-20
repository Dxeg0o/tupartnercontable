import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Partner Accounting",
  description:
    "Conoce al equipo directivo y operativo de Partner Accounting. Experiencia ejecutiva, cultura sólida y compromiso con cada cliente.",
};

const teamMembers = [
  {
    name: "María Torres",
    role: "Head of Operations",
    phrase: "Orquesta procesos con precisión para que cada entrega sea impecable.",
  },
  {
    name: "Javier Ríos",
    role: "Líder Tributario",
    phrase: "Anticipa riesgos fiscales y asegura decisiones estratégicas con datos claros.",
  },
  {
    name: "Camila Fuentes",
    role: "People & Culture",
    phrase: "Construye equipos cohesionados con foco en confianza y desempeño sostenible.",
  },
  {
    name: "Felipe Sandoval",
    role: "Consultor Senior",
    phrase: "Transforma números en planes accionables para crecimiento rentable.",
  },
  {
    name: "Valentina Núñez",
    role: "Controller Financiera",
    phrase: "Vigila cada indicador para mantener visibilidad total del negocio.",
  },
  {
    name: "Tomás Ibáñez",
    role: "Especialista en Automatización",
    phrase: "Integra tecnología para que la gestión contable sea ágil y sin fricciones.",
  },
];

export default function NuestroEquipoPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 lg:px-8">
        <section className="space-y-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Nuestro equipo</p>
          <h1 className="text-3xl font-semibold leading-tight text-[#1F1F1F] sm:text-4xl lg:text-5xl">
            Capital humano que impulsa decisiones seguras y crecimiento sostenible.
          </h1>
          <p className="max-w-3xl text-lg text-[#4A4A4A]">
            Unimos liderazgo ejecutivo, visión financiera y cultura colaborativa para acompañar a cada cliente con proximidad y resultados medibles.
          </p>
        </section>

        <section className="grid gap-10 rounded-[28px] bg-white/80 p-6 shadow-[0_20px_60px_rgba(53,113,223,0.08)] ring-1 ring-[#E6E6E6] lg:grid-cols-[1fr,1.1fr] lg:p-10">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#EAF1FF] via-white to-[#F8F8F8] shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-[#EEF2F8]">
            <Image
              src="/andres-cabrera.webp"
              alt="Retrato de Andrés Cabrera"
              width={720}
              height={880}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-4 lg:pl-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(53,113,223,0.25)]">
              Liderazgo
            </div>
            <h2 className="text-3xl font-semibold text-[#1F1F1F] sm:text-4xl">Andrés Cabrera</h2>
            <p className="text-lg font-medium text-[#3571DF]">Founder &amp; CEO</p>
            <div className="flex flex-wrap gap-3">
              {["Ingeniero Comercial UAI", "Executive MBA en Finanzas"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-sm font-semibold text-[#1F1F1F] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#4A4A4A]">
              Estratega financiero con más de 15 años liderando transformaciones corporativas. Andrés combina visión de negocio, rigor analítico y cercanía con los clientes para diseñar modelos operativos que maximizan liquidez, control y crecimiento rentable.
            </p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F7FAFF] p-4 shadow-[0_10px_30px_rgba(53,113,223,0.08)] ring-1 ring-[#E3EBFF]">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#3571DF]">Enfoque</p>
                <p className="text-base text-[#1F1F1F]">Gobernanza financiera, diseño de KPIs y acompañamiento ejecutivo.</p>
              </div>
              <div className="rounded-2xl bg-[#FFF7F2] p-4 shadow-[0_10px_30px_rgba(244,98,29,0.08)] ring-1 ring-[#FFE3D6]">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#F4621D]">Resultados</p>
                <p className="text-base text-[#1F1F1F]">Planes a medida que reducen riesgos y elevan la claridad para decidir.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[28px] bg-white/80 p-6 shadow-[0_20px_60px_rgba(53,113,223,0.08)] ring-1 ring-[#E6E6E6] lg:grid-cols-[1.1fr,0.9fr] lg:p-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1F2937] to-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(53,113,223,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(244,98,29,0.25),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.1),transparent_45%)]" />
            <div className="relative flex min-h-[320px] items-end justify-between p-8 sm:p-10">
              <div className="max-w-xl space-y-3 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9CB7FF]">Cultura y valores</p>
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">Foto grupal del equipo</h3>
                <p className="text-base text-[#E6EAF2]">
                  Un equipo cohesionado que comparte metodologías, estándares y una mirada cercana al cliente. Nuestras rutinas combinan disciplina operativa y espacios de colaboración para mover negocios hacia adelante.
                </p>
              </div>
              <div className="hidden h-28 w-28 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white ring-1 ring-white/20 lg:flex">
                Placeholder
              </div>
            </div>
          </div>
          <div className="grid gap-4 self-center rounded-2xl bg-[#F8F9FB] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.05)] ring-1 ring-[#E6E6E6] sm:grid-cols-2">
            {[{
              title: "Unidad",
              description: "Trabajamos como un solo frente, integrando disciplinas para soluciones completas.",
            },
            {
              title: "Transparencia",
              description: "Comunicación directa y claridad en cada reporte, proceso y decisión.",
            },
            {
              title: "Excelencia",
              description: "Obsesión por los detalles, estándares altos y mejora continua en cada entrega.",
            },
            {
              title: "Compromiso",
              description: "Acompañamiento constante con foco en resultados sostenibles para nuestros clientes.",
            }].map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#EEF0F5]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3571DF]/15 to-[#F4621D]/10 text-[#1F1F1F]">
                    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-[#3571DF]">
                      <path
                        d="M12 4l2.09 4.24L19 9.27l-3.45 3.36L16.18 17 12 14.9 7.82 17l.63-4.37L5 9.27l4.91-1.03L12 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="text-lg font-semibold text-[#1F1F1F]">{value.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#4A4A4A]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Equipo operativo</p>
            <h3 className="text-3xl font-semibold text-[#1F1F1F] sm:text-4xl">Talento multidisciplinario a tu servicio</h3>
            <p className="max-w-3xl text-lg text-[#4A4A4A]">
              Especialistas en contabilidad, impuestos, personas y tecnología que mantienen cada operación en marcha con precisión y cercanía.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group flex flex-col gap-4 rounded-2xl bg-white/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] ring-1 ring-[#E6E6E6] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden rounded-xl bg-gradient-to-br from-[#EAF1FF] via-white to-[#FFF7F2] shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(53,113,223,0.25),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(244,98,29,0.22),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.08),transparent_45%)]" />
                  <div className="relative flex h-full items-center justify-center text-sm font-semibold uppercase tracking-wide text-[#1F1F1F]/60">
                    Foto
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-[#1F1F1F]">{member.name}</h4>
                  <p className="text-sm font-semibold text-[#3571DF]">{member.role}</p>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]">{member.phrase}</p>
                </div>
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
