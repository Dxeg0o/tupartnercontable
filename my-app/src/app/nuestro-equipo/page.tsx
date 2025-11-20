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

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-12 mb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3571DF] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
            Capital Humano
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#1F1F1F] mb-6">
            Expertos comprometidos con <br className="hidden lg:block" />
            <span className="text-[#3571DF]">tu crecimiento empresarial</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#5A5A5A] leading-relaxed">
            Combinamos experiencia financiera, visión estratégica y tecnología para ser el socio que tu empresa necesita.
          </p>
        </section>

        {/* CEO Profile Section */}
        <section className="container mx-auto px-6 lg:px-12 mb-32">
          <div className="bg-[#F8F9FA] rounded-[2.5rem] p-8 lg:p-16 border border-[#E6E6E6]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="relative w-full lg:w-1/2 aspect-[3/4] lg:aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3571DF] to-[#F4621D] rounded-3xl transform rotate-3 opacity-20"></div>
                <Image
                  src="/andres-cabrera.webp"
                  alt="Andrés Cabrera - CEO Tu Partner Contable"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
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

                <div className="pt-4">
                  <div className="inline-block border-l-4 border-[#F4621D] pl-6 py-1">
                    <p className="text-lg italic text-[#1F1F1F] font-medium">
                      "No solo llevamos tus números, interpretamos tu negocio para impulsarlo al siguiente nivel."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="container mx-auto px-6 lg:px-12 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F1F1F]">Nuestra Cultura</h2>
                <p className="text-[#5A5A5A] leading-relaxed">
                  Más que un equipo, somos un ecosistema de profesionales unidos por valores sólidos y un propósito común: la excelencia en el servicio.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
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
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3571DF]/10 flex items-center justify-center text-[#3571DF]">
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
            <div className="order-1 lg:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
                <span className="text-lg font-medium">Foto Grupal del Equipo</span>
              </div>
              {/* Placeholder for Group Photo - Replace with actual image when available */}
              {/* <Image src="/team-group.jpg" alt="Equipo Tu Partner Contable" fill className="object-cover" /> */}
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1F1F1F] mb-4">Nuestro Talento</h2>
            <p className="text-[#5A5A5A]">Profesionales dedicados a tu tranquilidad financiera</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group bg-white rounded-3xl border border-[#E6E6E6] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-1">Nombre Apellido</h3>
                  <p className="text-[#3571DF] font-medium text-sm mb-4">Cargo / Especialidad</p>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">
                    "Especialista en gestión tributaria con enfoque en optimización de procesos."
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
