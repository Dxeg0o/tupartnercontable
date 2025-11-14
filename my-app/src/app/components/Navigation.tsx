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
    <nav className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
          PA
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Partner
          </span>
          <span className="text-lg font-semibold text-slate-900">Accounting</span>
        </div>
      </div>

      <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 lg:flex">
        {navigation.map((item) => (
          <Link key={item.label} href={item.href} className="transition-colors hover:text-slate-900">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contacto"
          className="hidden rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-600 transition-all hover:border-indigo-300 hover:text-indigo-700 lg:inline-flex"
        >
          Contacto
        </Link>
        <button className="inline-flex h-10 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-200 hover:text-indigo-600 lg:hidden">
          <span className="sr-only">Abrir menú</span>
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
    </nav>
  );
}
