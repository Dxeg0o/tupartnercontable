import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
      <div className="flex flex-col gap-10">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#E6E6E6] bg-[#6A9AFA1A] px-4 py-1 text-xs font-semibold text-[#3571DF]">
          <span className="h-2 w-2 rounded-full bg-[#F4621D]" />
          Santiago, Chile
        </div>
        <header className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#3571DF] sm:text-5xl">
            Asesoría y Consultoría
            <span className="block text-[#3571DF]">
              Contable, Financiera &amp; Tributaria
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#5A5A5A]">
            Simplificamos tu contabilidad y optimizamos tus impuestos para que enfoques en lo que realmente importa: tu negocio.
          </p>
        </header>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full bg-[#F4621D] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[0_10px_30px_rgba(244,98,29,0.25)] transition hover:bg-[#FF8750]"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="#modalidades"
            className="inline-flex items-center justify-center rounded-full border border-[#3571DF] px-8 py-3 text-sm font-semibold text-[#3571DF] transition hover:bg-[#3571DF]/20"
          >
            Modalidades
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-[#E6E6E6] bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[#1F1F1F]">98.9%</p>
            <p className="mt-2 text-sm font-medium text-[#5A5A5A]">Satisfacción de clientes</p>
            <p className="mt-4 text-sm text-[#5A5A5A]">
              Nuestro equipo acompaña a más de 120 empresas y pymes en Latinoamérica.
            </p>
          </div>
          <div className="rounded-3xl border border-[#E6E6E6] bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[#1F1F1F]">20.5%</p>
            <p className="mt-2 text-sm font-medium text-[#5A5A5A]">Promedio de ahorro tributario</p>
            <p className="mt-4 text-sm text-[#5A5A5A]">
              Identificamos oportunidades para optimizar cargas impositivas y mejorar el flujo de caja.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-[420px]">
          <div className="relative overflow-hidden rounded-[3rem] border border-[#E6E6E6] bg-[#E6E6E6] shadow-xl">
            <Image
              src="/Partner-Accounting-Home-01.jpg"
              alt="Equipo contable trabajando en una reunión en oficina moderna"
              width={420}
              height={520}
              className="h-[520px] w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -left-16 top-12 w-40 rounded-3xl border border-[#E6E6E6] bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5A5A5A]">Revenue Growth</p>
            <p className="mt-2 text-2xl font-bold text-[#1F1F1F]">+36%</p>
            <p className="mt-1 text-xs text-[#5A5A5A]">
              respecto al último trimestre.
            </p>
          </div>

          <div className="absolute -right-14 top-36 w-44 rounded-3xl border border-[#E6E6E6] bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5A5A5A]">Client Satisfaction</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#3571DF,#F4621D)]" />
              <div>
                <p className="text-xl font-bold text-[#1F1F1F]">98.8%</p>
                <p className="text-xs text-[#5A5A5A]">+4.1% vs. meta</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-10 bottom-10 w-48 rounded-3xl border border-[#E6E6E6] bg-[#3571DF] p-4 text-white shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Incidents</p>
            <p className="mt-2 text-2xl font-bold">-20.5%</p>
            <p className="mt-1 text-xs opacity-80">Seguimiento mensual</p>
          </div>
        </div>
      </div>
    </section>
  );
}
