import Link from "next/link";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  navigation: NavigationItem[];
}

export function Navigation({ navigation }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/80 shadow-[0_4px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3 text-slate-900 transition-colors hover:text-indigo-600">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-500 text-lg font-semibold text-white shadow-lg">
            PA
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">Partner</span>
            <span className="text-lg font-semibold">Accounting</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative transition-colors hover:text-slate-900"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-slate-900/90 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:translate-y-0.5 hover:bg-slate-900 lg:inline-flex"
          >
            Agenda una llamada
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:text-indigo-600 lg:hidden"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
