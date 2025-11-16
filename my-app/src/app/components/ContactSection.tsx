import Image from "next/image";
import Link from "next/link";

const whatsappLink =
  "https://wa.me/56981592966?text=Hola%20Partner%20Accounting,%20quisiera%20coordinar%20una%20asesor%C3%ADa";

export function ContactSection() {
  return (
    <section id="contacto" className="mt-28" aria-labelledby="contacto-heading">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/30 bg-slate-900 text-white shadow-2xl">
        <Image
          src="/Partner-Accounting-Home-01.jpg"
          alt="Vista de Santiago de Chile con edificios corporativos"
          fill
          className="object-cover object-center opacity-40"
          sizes="(max-width: 768px) 100vw, 75vw"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-900/80 to-slate-900/70" />

        <div className="relative grid gap-10 px-8 py-16 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Agenda Directa
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-indigo-100">Preparados para trabajar contigo</p>
                <h2 id="contacto-heading" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Conversemos por WhatsApp y elevemos tu gestión financiera
                </h2>
                <p className="text-base text-indigo-100/80">
                  Nuestro equipo responde en minutos para ayudarte con planes de implementación, soporte tributario y cualquier consulta estratégica. No esperes al próximo comité, coordinemos ahora mismo.
                </p>
              </div>
            </div>

            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <dt className="text-sm uppercase tracking-[0.2em] text-indigo-200">Dirección</dt>
                <dd className="mt-2 text-lg font-semibold text-white">Los Militares 5620, Las Condes</dd>
                <p className="text-sm text-indigo-100/70">Región Metropolitana, Chile</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <dt className="text-sm uppercase tracking-[0.2em] text-indigo-200">Contacto directo</dt>
                <dd className="mt-2 space-y-2">
                  <Link href="mailto:supervisor@partner-accounting.cl" className="block text-lg font-semibold text-white underline-offset-2 hover:underline">
                    supervisor@partner-accounting.cl
                  </Link>
                  <Link href="tel:+56981592966" className="block text-lg font-semibold text-white/90 hover:text-white">
                    +56 9 8159 2966
                  </Link>
                </dd>
                <p className="text-sm text-indigo-100/70">Disponibles de lunes a viernes, 09:00 - 19:00 h.</p>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Canal prioritario</p>
              <p className="text-2xl font-semibold text-white">
                Reservá una conversación inmediata con un Partner Lead vía WhatsApp Business.
              </p>
              <p className="text-base text-indigo-100/70">
                Compartinos brevemente el contexto de tu organización y coordinaremos una reunión virtual en menos de 24 horas.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-500/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.719.45 3.332 1.237 4.732L2.25 21.75l5.187-1.155A9.708 9.708 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 1.5a8.25 8.25 0 018.25 8.25 8.25 8.25 0 01-12.219 7.2l-.34-.192-3.074.684.657-3.053-.204-.35A8.25 8.25 0 0112 3.75zm-3.318 4.5c-.214 0-.52.076-.793.388-.272.31-1.045 1.022-1.045 2.493 0 1.471 1.07 2.893 1.22 3.093.15.2 2.096 3.35 5.184 4.563 2.567 1.02 3.086.818 3.642.768.557-.05 1.798-.733 2.052-1.441.253-.709.253-1.317.177-1.441-.076-.124-.278-.2-.58-.35-.303-.149-1.798-.888-2.078-.988-.28-.1-.483-.149-.685.15-.203.3-.785.988-.962 1.191-.177.203-.354.228-.657.076-.303-.149-1.28-.472-2.438-1.506-.9-.802-1.507-1.79-1.684-2.09-.177-.3-.019-.462.13-.611.134-.134.3-.35.45-.525.15-.176.2-.3.3-.5.1-.203.05-.376-.025-.525-.076-.15-.685-1.651-.961-2.269-.253-.583-.514-.595-.666-.6z" />
                </svg>
                Conversar por WhatsApp
              </Link>
              <p className="text-center text-sm text-indigo-100/70">
                Tiempo de respuesta promedio: <span className="font-semibold text-white">menos de 10 minutos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
