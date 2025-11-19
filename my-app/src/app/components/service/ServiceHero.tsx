import { ReactNode } from "react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  actions?: ReactNode;
}

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  description,
  highlights,
  actions,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-6 pb-14 pt-12 shadow-2xl shadow-indigo-900/20 ring-1 ring-indigo-500/20 lg:px-12 lg:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),_radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.2),transparent_25%)]" aria-hidden />
      <div className="relative max-w-4xl text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-200">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight lg:text-4xl">{title}</h1>
        <p className="mt-3 text-lg font-medium text-indigo-50/90 lg:text-xl">{subtitle}</p>
        <p className="mt-4 max-w-3xl text-base text-indigo-50/80 lg:text-lg">{description}</p>

        {highlights?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-indigo-50 ring-1 ring-white/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
