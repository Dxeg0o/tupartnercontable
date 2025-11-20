import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full border-b border-[var(--neutral-light)] bg-[var(--neutral-white)]/90 shadow-[0_4px_30px_rgba(31,31,31,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[var(--neutral-carbon)] transition-colors hover:text-[var(--primary-blue)]">
          <Image
            src="/logo_icon.png"
            alt="Partner Accounting Logo"
            width={500}
            height={500}
            className="h-24 w-24 rounded-2xl"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary-blue)]">Partner</span>
            <span className="text-lg font-semibold">Accounting</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--neutral-gray)] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative transition-colors hover:text-[var(--neutral-carbon)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(135deg,#3571DF,#F4621D)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-[var(--primary-orange)] px-6 py-2 text-sm font-semibold text-[var(--neutral-white)] shadow-[0_8px_24px_rgba(244,98,29,0.25)] transition-all hover:translate-y-0.5 hover:bg-[var(--secondary-orange)] lg:inline-flex"
          >
            Conversemos
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--neutral-light)] text-[var(--neutral-gray)] transition-colors hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] lg:hidden"
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
