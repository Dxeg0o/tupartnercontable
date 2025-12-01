import Image from "next/image";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";

export const metadata = {
  title: "Nuestro Equipo | Tu Partner Contador",
  description: "Conoce al equipo de expertos detrás de Tu Partner Contador. Liderazgo estratégico y talento comprometido con tu éxito financiero.",
};

export default function NuestroEquipo() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF,#E6E6E6)]">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-4 text-center lg:gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF]">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Capital Humano
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#092961] sm:text-5xl lg:text-6xl">
            Expertos comprometidos con
            <br className="hidden lg:block" />
            <span className="text-[#3571DF]">tu crecimiento empresarial</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#5A5A5A] lg:text-xl">
            Combinamos experiencia financiera, visión estratégica y tecnología para ser el socio que tu empresa necesita.
          </p>
        </section>

        {/* CEO Profile Section */}
        <section className="rounded-[2rem] border border-[#E6E6E6] bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative mx-auto h-[380px] w-full max-w-md overflow-hidden rounded-3xl border border-[#E6E6E6] bg-gradient-to-tr from-[#3571DF]/15 via-white to-[#F4621D]/15 shadow-xl lg:h-[460px]">
              <Image
                src="/andres-cabrera.webp"
                alt="Andrés Cabrera - CEO Tu Partner Contador"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#092961] lg:text-4xl">Andrés Cabrera</h2>
                <p className="text-lg font-medium text-[#3571DF]">Founder & CEO</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-sm font-semibold text-[#5A5A5A] shadow-sm">
                  Ingeniero Comercial UAI
                </span>
                <span className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-sm font-semibold text-[#5A5A5A] shadow-sm">
                  Executive MBA en Finanzas
                </span>
                <span className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-sm font-semibold text-[#5A5A5A] shadow-sm">
                  Profesor Full Time Escuela de Negocios UAI
                </span>
              </div>

              <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                <p>
                  Con una trayectoria consolidada en la dirección financiera y estratégica, Andrés lidera Tu Partner Contador con una visión clara: transformar la contabilidad en una herramienta de valor real para las empresas.
                </p>
                <p>
                  Su enfoque combina la rigurosidad técnica con una comprensión profunda de los desafíos que enfrentan las empresas modernas, permitiendo ofrecer soluciones que van más allá del cumplimiento normativo y se centran en la rentabilidad y el crecimiento sostenible.
                </p>
              </div>

              <div className="inline-block border-l-4 border-[#F4621D] pl-5">
                <p className="text-lg font-medium italic text-[#092961]">
                  &ldquo;No solo llevamos tus números, interpretamos tu negocio para impulsarlo al siguiente nivel.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-[#092961] lg:text-4xl">Nuestra Cultura</h2>
              <p className="leading-relaxed text-[#5A5A5A]">
                Más que un equipo, somos un ecosistema de profesionales unidos por valores sólidos y un propósito común: la excelencia en el servicio.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Unidad",
                  desc: "Trabajamos cohesionados para ofrecer soluciones integrales.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Transparencia",
                  desc: "Claridad y honestidad en cada cifra y asesoría.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Excelencia",
                  desc: "Buscamos la perfección técnica en cada proceso.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: "Compromiso",
                  desc: "Tu éxito es nuestra prioridad absoluta.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
              ].map((value, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl border border-[#E6E6E6] bg-white/70 p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3571DF]/10 text-[#3571DF]">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-[#092961]">{value.title}</h3>
                    <p className="text-sm text-[#5A5A5A]">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] border border-[#E6E6E6] bg-white/70 shadow-[0_16px_40px_rgba(0,0,0,0.08)] lg:h-[440px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3571DF]/15 via-white to-[#F4621D]/15" />
            <div className="relative flex h-full items-center justify-center text-center text-[#5A5A5A]">
              <div className="rounded-2xl bg-white/80 px-6 py-4 shadow-md">
                <span className="text-base font-semibold text-[#092961]">Foto grupal del equipo</span>
                <p className="text-sm text-[#5A5A5A]">Próximamente</p>
              </div>
            </div>
            {/* <Image src="/team-group.jpg" alt="Equipo Tu Partner Contador" fill className="object-cover" /> */}
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-[#092961] lg:text-4xl">Nuestro Talento</h2>
            <p className="text-[#5A5A5A]">Profesionales dedicados a tu tranquilidad financiera</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 bg-gradient-to-br from-[#3571DF]/10 via-white to-[#F4621D]/10">
                  <div className="absolute inset-0 flex items-center justify-center text-[#9A9A9A]">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-3 px-7 py-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#092961]">Nombre Apellido</h3>
                    <p className="text-sm font-semibold text-[#3571DF]">Cargo / Especialidad</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">
                    &ldquo;Especialista en gestión tributaria con enfoque en optimización de procesos.&rdquo;
                  </p>
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
