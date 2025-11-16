import Link from "next/link";

const servicesLinks = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#tributaria" },
  { label: "Asesoría en Recursos Humanos", href: "#rrhh" },
  { label: "Modalidades de Servicio", href: "#modalidades" },
];

const companyLinks = [
  { label: "Nuestro Proceso", href: "#empresas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Términos y Condiciones", href: "#" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const renderLinks = (links: { label: string; href: string }[]) => (
    <ul className="space-y-3 text-sm text-slate-500">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="transition hover:text-indigo-600"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="w-full border-t border-slate-200 bg-white/95 text-slate-600 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 text-lg font-semibold text-white">
              PA
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">Partner Accounting</p>
              <p className="text-sm text-slate-500">
                Asesoría contable, financiera y tributaria con visión estratégica.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
            <span className="text-slate-400">Sede</span>
            <span className="text-slate-700">Región Metropolitana, Chile</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400">Teléfono</span>
            <Link href="tel:+56981592966" className="text-slate-900 transition hover:text-indigo-600">
              +56 9 8159 2966
            </Link>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400">Email</span>
            <Link
              href="mailto:supervisor@partner-accounting.cl"
              className="text-slate-900 transition hover:text-indigo-600"
            >
              supervisor@partner-accounting.cl
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Servicios</p>
            {renderLinks(servicesLinks)}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Empresa</p>
            {renderLinks(companyLinks)}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Legales</p>
            {renderLinks(legalLinks)}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Contáctanos</p>
            <p className="text-sm text-slate-500">
              Coordinamos reuniones remotas o presenciales con equipos directivos. Respuesta en menos de 24 horas hábiles.
            </p>
            <div className="space-y-2 text-sm">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:text-indigo-600"
              >
                LinkedIn
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="https://wa.me/56981592966"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-500"
              >
                WhatsApp
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Partner Accounting. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-400">Tiempo de respuesta</span>
            <span className="font-medium text-slate-700">&lt; 12 horas</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400">Atención</span>
            <span className="font-medium text-slate-700">Lun a Vie · 09:00 - 18:30</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
