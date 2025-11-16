import Link from "next/link";

const footerColumns = [
  {
    title: "Servicios",
    links: [
      { label: "Asesoría Contable", href: "#servicios" },
      { label: "Asesoría Tributaria", href: "#tributaria" },
      { label: "Recursos Humanos", href: "#rrhh" },
      { label: "Modalidades", href: "#empresas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nuestro proceso", href: "#empresas" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legales",
    links: [
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Política de Cookies", href: "/cookies" },
      { label: "Defensa del Consumidor", href: "#contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:px-8">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
              PA
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">Partner</span>
              <span className="text-lg font-semibold text-slate-900">Accounting</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Acompañamos a empresas que desean claridad financiera, cumplimiento y un equipo experto a su lado en cada decisión
            relevante de negocio.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18" />
              </svg>
              supervisor@partner-accounting.cl
            </span>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 10h10l3-7H8" />
              </svg>
              Región Metropolitana
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 8l10-6 10 6v8l-10 6-10-6V8z" />
              </svg>
              +56 9 8195 2968
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-10">
          {footerColumns.map((column) => (
            <div key={column.title} className="min-w-[160px] flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{column.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-indigo-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Partner Accounting. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.7v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.4c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.5h-4z" />
              </svg>
              LinkedIn
            </Link>
            <Link href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500">
              <span>Contáctanos</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
