import Image from "next/image";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { landingNavigation } from "../navigation.data";

const values = [
  {
    title: "Unidad",
    description: "Operamos como un solo equipo, integrando disciplinas para decisiones acertadas y oportunas.",
  },
  {
    title: "Transparencia",
    description: "Priorizamos la claridad en procesos, costos y data para construir confianza con cada cliente.",
  },
  {
    title: "Excelencia",
    description: "Elevamos el estándar en cada entrega con control de calidad riguroso y visión estratégica.",
  },
  {
    title: "Compromiso",
    description: "Acompañamos de cerca los objetivos de negocio, respondiendo con agilidad y responsabilidad.",
  },
];

const teamMembers = [
  {
    name: "María Torres",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    phrase: "Diseña procesos escalables que aseguran cumplimiento y continuidad.",
  },
  {
    name: "Javier Ortiz",
    role: "Lead Tax Advisor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    phrase: "Anticipa contingencias fiscales y maximiza eficiencias tributarias.",
  },
  {
    name: "Camila Herrera",
    role: "Senior Payroll Specialist",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    phrase: "Orquesta nómina y beneficios con precisión y mirada humana.",
  },
  {
    name: "Felipe Navarro",
    role: "Business Intelligence Lead",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    phrase: "Convierte datos financieros en tableros accionables para directivos.",
  },
  {
    name: "Laura Pizarro",
    role: "Client Success Manager",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    phrase: "Cuida la experiencia de los clientes con comunicación clara y proactiva.",
  },
  {
    name: "Tomás Aguilera",
    role: "Technology & Automations",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    phrase: "Integra herramientas para eliminar fricción y acelerar cierres contables.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={[...landingNavigation, { label: "Nuestro Equipo", href: "/nuestro-equipo" }]} />

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 lg:px-8">
        <section className="space-y-4 pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Capital Humano</p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-[#1F1F1F] sm:text-5xl">
              Un equipo senior que combina
              <span className="block text-[#3571DF]">solidez financiera y cercanía ejecutiva</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#5A5A5A]">
              Nuestra estructura está diseñada para acompañar decisiones críticas con rigor técnico, comunicación clara y
              seguimiento constante.
            </p>
          </div>
        </section>

        <section className="mb-16 overflow-hidden rounded-[32px] border border-[#E6E6E6] bg-white shadow-[0_20px_80px_rgba(31,31,31,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#F2F5FC]">
              <Image
                src="/andres-cabrera.webp"
                alt="Retrato de Andrés Cabrera, Founder & CEO"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>
            <div className="flex flex-col gap-6 p-10 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-[#3571DF]">
                <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
                Liderazgo Ejecutivo
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-[#1F1F1F]">Andrés Cabrera</h2>
                <p className="text-lg font-semibold text-[#3571DF]">Founder & CEO</p>
                <div className="flex flex-wrap gap-3">
                  {["Ingeniero Comercial UAI", "Executive MBA en Finanzas"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#F7F9FF] px-4 py-2 text-xs font-semibold text-[#1F1F1F] shadow-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-[#5A5A5A]">
                Andrés lidera la arquitectura financiera de Partner Accounting y la relación estratégica con directorios. Con
                más de 15 años asesorando empresas de alto crecimiento, combina visión integral de riesgos con una ejecución
                pragmática orientada a resultados medibles y sostenibles.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Gobierno corporativo", "Planificación tributaria", "Optimización financiera"].map((pill) => (
                  <div
                    key={pill}
                    className="rounded-2xl border border-[#E6E6E6] bg-white px-4 py-3 text-sm font-semibold text-[#1F1F1F] shadow-sm"
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-8 overflow-hidden rounded-[32px] border border-[#E6E6E6] bg-white shadow-[0_18px_70px_rgba(53,113,223,0.08)] lg:grid-cols-2">
          <div className="relative h-full min-h-[320px] bg-[#F5F7FB]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
              alt="Foto grupal del equipo"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B3B]/60 via-[#0F1B3B]/20 to-transparent" />
          </div>
          <div className="flex flex-col gap-6 p-10 sm:p-12 lg:p-14">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-[#3571DF]">
              <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
              Cultura y Valores
            </div>
            <h3 className="text-3xl font-bold text-[#1F1F1F]">
              Una cultura colaborativa que impulsa la precisión y la confianza
            </h3>
            <p className="text-lg leading-relaxed text-[#5A5A5A]">
              Co-creamos soluciones con nuestros clientes, combinando metodologías ágiles, controles financieros y comunicación
              transparente. Cada proyecto se acompaña con rituales de seguimiento que mantienen alineados a equipos internos y
              sponsors.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-[#E6E6E6] bg-[#F9FBFF] p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3571DF]/15 to-[#F4621D]/20 text-[#3571DF]">
                    <span className="text-base font-bold">•</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-[#1F1F1F]">{value.title}</p>
                    <p className="text-sm text-[#5A5A5A]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3571DF]">Equipo Operativo</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-3xl font-bold text-[#1F1F1F]">Especialistas que ejecutan contigo</h3>
              <p className="max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
                Un squad multidisciplinario coordina implementaciones, automatizaciones y reporting para que tomes decisiones con
                información completa y a tiempo.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-white shadow-[0_14px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(53,113,223,0.15)]"
              >
                <div className="relative h-56 w-full bg-[#F0F4FF]">
                  <Image
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-[#1F1F1F]">{member.name}</p>
                    <p className="text-sm font-semibold text-[#3571DF]">{member.role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{member.phrase}</p>
                </div>
              </article>
            ))}
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
