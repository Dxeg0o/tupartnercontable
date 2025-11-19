import React from "react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  descriptions: string[];
}

export function ServiceHero({ eyebrow, title, subtitle, descriptions }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-800">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-slate-900 to-slate-900" aria-hidden />
      <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl" aria-hidden />
      <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden />
      <div className="relative grid gap-6 p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200/90">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">{title}</h1>
          <p className="max-w-3xl text-lg text-slate-100/90 lg:text-xl">{subtitle}</p>
          <div className="space-y-4 text-sm text-slate-100/80 lg:text-base">
            {descriptions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" aria-hidden />
          <div className="relative space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
              Compromiso senior
            </p>
            <p className="text-lg font-semibold text-white lg:text-xl">
              Equipo tributario dedicado, con comunicación directa y reportes accionables.
            </p>
            <ul className="space-y-3 text-sm text-slate-100/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  ✓
                </span>
                Respuesta a fiscalizaciones y requerimientos en 24-48 horas.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400/20 text-indigo-100">
                  ✓
                </span>
                Documentación digital organizada para auditorías y comités.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-300/20 text-sky-100">
                  ✓
                </span>
                Acompañamiento en decisiones de inversión y reorganizaciones.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
