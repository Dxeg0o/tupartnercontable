import Link from "next/link";

const serviceLinks = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#tributaria" },
  { label: "Recursos Humanos", href: "#rrhh" },
  { label: "Modalidades de Servicio", href: "#modalidades" },
];

const companyLinks = [
  { label: "Acerca Nuestro", href: "#hero" },
  { label: "Nuestro Proceso", href: "#proceso" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Términos y Condiciones", href: "#" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-3.368-4-3.115-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { label: "Instagram", href: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.616.074-3.063.35-4.258 1.546-1.195 1.195-1.471 2.642-1.546 4.258-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.616.35 3.063 1.546 4.258 1.195 1.195 2.642 1.471 4.258 1.546 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.616-.074 3.063-.35 4.258-1.546 1.195-1.195 1.471-2.642 1.546-4.258.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.616-.35-3.063-1.546-4.258-1.195-1.195-2.642-1.471-4.258-1.546-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-11.845c0 .796-.646 1.442-1.442 1.442s-1.442-.646-1.442-1.442.646-1.442 1.442-1.442 1.442.646 1.442 1.442z" },
  { label: "WhatsApp", href: "https://wa.me/56988552898", icon: "M20.52 3.48A11.77 11.77 0 0 0 12 .25C5.37.25.02 5.6.02 12.23a11.9 11.9 0 0 0 1.6 6l-1.65 5.5 5.64-1.48a12.12 12.12 0 0 0 5.42 1.33h.01c6.63 0 11.98-5.36 11.98-11.98a11.94 11.94 0 0 0-3.5-8.1zm-8.28 19.22h-.01a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-3.35.88.9-3.27-.24-.34a10.25 10.25 0 0 1-1.58-5.5c0-5.65 4.6-10.25 10.26-10.25 2.74 0 5.31 1.07 7.25 3.01a10.16 10.16 0 0 1 3 7.24c0 5.66-4.6 10.27-10.26 10.27zm5.63-7.66c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.19.21-.37.23-.68.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.37.46-.55.15-.18.2-.31.3-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.63 0 1.54 1.14 3.03 1.3 3.24.16.21 2.24 3.43 5.42 4.81.76.33 1.35.52 1.81.66.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.5.26-.73.26-1.35.18-1.5-.08-.15-.29-.24-.6-.39z" },
];

export function Footer() {
  return (
    <footer className="mt-20 overflow-hidden rounded-3xl bg-slate-900 text-slate-100 shadow-xl">
      <div className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-lg font-semibold text-white">
                PA
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Partner</p>
                <p className="text-xl font-semibold text-white">Accounting</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Asesoría y consultoría contable, financiera y tributaria para organizaciones que exigen precisión, claridad y un equipo comprometido con sus resultados.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/40 hover:text-white"
                >
                  <span className="sr-only">{item.label}</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Servicios</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Empresa</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Legales</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-b border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">¿Listo para una asesoría de alto nivel?</p>
            <p className="text-sm text-slate-300">Co-creemos una solución integral que acompañe el crecimiento de tu organización.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="mailto:supervisor@partner-accounting.cl"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              supervisor@partner-accounting.cl
            </Link>
            <Link
              href="https://wa.me/56988552898"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              WhatsApp +56 9 8855 2898
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Partner Accounting. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="flex items-center gap-2">
              <span className="text-slate-500">✉︎</span> supervisor@partner-accounting.cl
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slate-500">✆</span> +56 9 8855 2898
            </p>
            <p className="flex items-center gap-2">
              <span className="text-slate-500">📍</span> Región Metropolitana, Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
