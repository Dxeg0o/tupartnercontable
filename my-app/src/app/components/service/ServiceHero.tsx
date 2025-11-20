import Image from "next/image";
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
    <section className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#3571DF,#F4621D)] px-6 pb-14 pt-12 shadow-2xl shadow-[0_24px_60px_rgba(53,113,223,0.28)] ring-1 ring-[#6A9AFA] lg:px-12 lg:pt-14">
      <div className="absolute right-6 top-6 h-10 w-auto transition-opacity hover:opacity-100 lg:right-10 lg:top-10 lg:h-14">
        <Image
          src="/logo_white.png"
          alt="Tu Partner Contable logo"
          width={500}
          height={500}
          className="h-12 md:h-20 w-auto object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),_radial-gradient(circle_at_80%_0%,rgba(255,135,80,0.28),transparent_25%)]" aria-hidden />
      <div className="relative max-w-4xl text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">{title}</h1>
        <p className="mt-3 text-lg font-medium text-white/90 lg:text-xl">{subtitle}</p>
        <p className="mt-4 max-w-3xl text-base text-white/85 lg:text-lg">{description}</p>

        {highlights?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/30"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
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
