import Link from "next/link";

export function HeroSection() {
  return (
    <main className="mt-16 grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
      <div className="flex flex-col gap-10">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-600">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Santiago, Chile
        </div>
        <header className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Asesoría y Consultoría
            <span className="block text-indigo-600">
              Contable, Financiera &amp; Tributaria
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Simplificamos tu contabilidad y optimizamos tus impuestos para que enfoques en lo que realmente importa: tu negocio.
          </p>
        </header>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="#modalidades"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            Modalidades
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-slate-900">98.9%</p>
            <p className="mt-2 text-sm font-medium text-slate-500">Satisfacción de clientes</p>
            <p className="mt-4 text-sm text-slate-500">
              Nuestro equipo acompaña a más de 120 empresas y pymes en Latinoamérica.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-slate-900">20.5%</p>
            <p className="mt-2 text-sm font-medium text-slate-500">Promedio de ahorro tributario</p>
            <p className="mt-4 text-sm text-slate-500">
              Identificamos oportunidades para optimizar cargas impositivas y mejorar el flujo de caja.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-[420px]">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-200 shadow-xl">
            <div
              className="h-[520px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529429617124-aee711a2bc95?auto=format&fit=crop&w=900&q=80')",
              }}
            />
          </div>

          <div className="absolute -left-16 top-12 w-40 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Revenue Growth</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">+36%</p>
            <p className="mt-1 text-xs text-slate-500">respecto al último trimestre.</p>
          </div>

          <div className="absolute -right-14 top-36 w-44 rounded-3xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Client Satisfaction</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400" />
              <div>
                <p className="text-xl font-bold text-slate-900">98.8%</p>
                <p className="text-xs text-slate-500">+4.1% vs. meta</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-10 bottom-10 w-48 rounded-3xl border border-white bg-indigo-600/90 p-4 text-white shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Incidents</p>
            <p className="mt-2 text-2xl font-bold">-20.5%</p>
            <p className="mt-1 text-xs opacity-80">Seguimiento mensual</p>
          </div>
        </div>
      </div>
    </main>
  );
}
