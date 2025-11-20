import Image from "next/image";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { landingNavigation } from "../navigation.data";

export const metadata = {
  title: "Nuestro Equipo | Tu Partner Contable",
  description: "Conoce al equipo de expertos detrás de Tu Partner Contable. Liderazgo estratégico y talento comprometido con tu éxito financiero.",
};

export default function NuestroEquipo() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation navigation={landingNavigation} />

      <main className="mx-auto flex max-w-6xl flex-col px-6 pb-16 pt-24 lg:px-8">
        {/* Hero Section */}
        <section className="relative mb-16 overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-[linear-gradient(180deg,#FFFFFF,#F7FAFF)] px-6 py-14 text-center shadow-[0_18px_50px_rgba(0,0,0,0.04)] lg:px-12">
          <div className="absolute inset-y-0 left-12 hidden w-20 rounded-full bg-[#3571DF]/10 blur-3xl lg:block" />
          <div className="absolute inset-y-6 right-6 hidden w-24 rounded-full bg-[#F4621D]/10 blur-3xl lg:block" />

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF] mb-5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Capital Humano
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1F1F] mb-4">
            Expertos comprometidos con <br className="hidden lg:block" />
            <span className="text-[#3571DF]">tu crecimiento empresarial</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
            Combinamos experiencia financiera, visión estratégica y tecnología para ser el socio que tu empresa necesita.
          </p>
        </section>

        {/* CEO Profile Section */}
        <section className="mb-20">
          <div className="rounded-[2rem] border border-[#E6E6E6] bg-[#F8F9FA] p-8 shadow-[0_16px_44px_rgba(0,0,0,0.05)] lg:p-14">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
              <div className="relative w-full max-w-md aspect-[3/4] lg:w-1/2 lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3571DF] to-[#F4621D] rounded-3xl transform rotate-3 opacity-20"></div>
                <Image
                  src="/andres-cabrera.webp"
                  alt="Andrés Cabrera - CEO Tu Partner Contable"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
              <div className="w-full space-y-7 lg:w-1/2">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1F1F1F] mb-2">Andrés Cabrera</h2>
                  <p className="text-xl text-[#3571DF] font-medium">Founder & CEO</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-full text-sm font-semibold text-[#5A5A5A] shadow-sm">
                    Ingeniero Comercial UAI
                  </span>
                  <span className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-full text-sm font-semibold text-[#5A5A5A] shadow-sm">
                    Executive MBA en Finanzas
                  </span>
                </div>

                <div className="space-y-4 text-[#5A5A5A] leading-relaxed">
                  <p>
                    Con una trayectoria consolidada en la dirección financiera y estratégica, Andrés lidera Tu Partner Contable con una visión clara: transformar la contabilidad en una herramienta de valor real para las empresas.
                  </p>
                  <p>
                    Su enfoque combina la rigurosidad técnica con una comprensión profunda de los desafíos que enfrentan las empresas modernas, permitiendo ofrecer soluciones que van más allá del cumplimiento normativo y se centran en la rentabilidad y el crecimiento sostenible.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="inline-block border-l-4 border-[#F4621D] pl-6 py-1">
                    <p className="text-lg italic text-[#1F1F1F] font-medium">
                      &ldquo;No solo llevamos tus números, interpretamos tu negocio para impulsarlo al siguiente nivel.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="mb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F1F1F]">Nuestra Cultura</h2>
                <p className="text-[#5A5A5A] leading-relaxed">
                  Más que un equipo, somos un ecosistema de profesionales unidos por valores sólidos y un propósito común: la excelencia en el servicio.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Unidad",
                    desc: "Trabajamos cohesionados para ofrecer soluciones integrales.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Transparencia",
                    desc: "Claridad y honestidad en cada cifra y asesoría.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Excelencia",
                    desc: "Buscamos la perfección técnica en cada proceso.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  },
                  {
                    title: "Compromiso",
                    desc: "Tu éxito es nuestra prioridad absoluta.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )
                  }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 rounded-2xl border border-[#E6E6E6] bg-white/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#3571DF]/10 text-[#3571DF]">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F1F1F] mb-1">{value.title}</h3>
                      <p className="text-sm text-[#5A5A5A]">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 relative h-[420px] overflow-hidden rounded-[2rem] border border-[#E6E6E6] bg-[#F8F9FA] shadow-[0_18px_50px_rgba(0,0,0,0.06)] lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse text-gray-400">
                <span className="text-lg font-medium">Foto Grupal del Equipo</span>
              </div>
              {/* Placeholder for Group Photo - Replace with actual image when available */}
              {/* <Image src="/team-group.jpg" alt="Equipo Tu Partner Contable" fill className="object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F1F1F] mb-3">Nuestro Talento</h2>
            <p className="text-[#5A5A5A]">Profesionales dedicados a tu tranquilidad financiera</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-1">Nombre Apellido</h3>
                  <p className="text-[#3571DF] font-medium text-sm mb-3">Cargo / Especialidad</p>
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
