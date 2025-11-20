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
    <header className="sticky top-0 z-50 w-full border-b border-[#E6E6E6] bg-white/90 shadow-[0_4px_30px_rgba(53,113,223,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center text-[#1F1F1F] transition-colors hover:text-[#3571DF] my-4">
          <Image
            src="/completo.png"
            alt="Partner Accounting Logo"
            width={500}
            height={500}
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#5A5A5A] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative transition-colors hover:text-[#3571DF]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(135deg,#3571DF,#F4621D)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-[#F4621D] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[0_10px_30px_rgba(244,98,29,0.25)] transition-all hover:translate-y-0.5 hover:bg-[#FF8750] lg:inline-flex"
          >
            Conversemos
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E6E6E6] text-[#5A5A5A] transition-colors hover:bg-[#3571DF]/20 hover:text-[#3571DF] lg:hidden"
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
