"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  navigation: NavigationItem[];
}

export function Navigation({ navigation }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6E6E6] bg-white/90 shadow-[0_4px_30px_rgba(53,113,223,0.08)] backdrop-blur-xl">
      <div className="relative z-[60] mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center text-[#092961] transition-colors hover:text-[#3571DF] my-4">
          <Image
            src="/logocompleto.png"
            alt="Tu Partner Contable logo"
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
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#3571DF] transition-all duration-300 ease-in-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://wa.me/56946816949?text=Hola%20Tu%20Partner%20Contable,%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20para%20conversar%20sobre%20asesor%C3%ADa%20contable."
            target="_blank"
            className="hidden rounded-full bg-[#F4621D] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[0_10px_30px_rgba(244,98,29,0.25)] transition-all hover:translate-y-0.5 hover:bg-[#FF8750] lg:inline-flex"
          >
            Conversemos
          </Link>
          <button
            onClick={toggleMenu}
            className="group relative z-50 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#E6E6E6] bg-white text-[#092961] shadow-sm transition-all hover:bg-[#F4F7FC] hover:text-[#3571DF] focus:outline-none active:scale-90 lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex h-4 w-6 flex-col justify-between items-end overflow-hidden">
              <span
                className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "w-full -translate-y-[7px] -rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 h-[100dvh] bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col divide-y divide-[#F0F0F0] p-4 pt-28 text-base font-medium text-[#092961]">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="group flex items-center justify-between py-3 transition-colors hover:text-[#3571DF]"
            >
              <span>{item.label}</span>
              <span className="h-2 w-2 rounded-full bg-[#3571DF] opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
          <Link
            href="https://wa.me/56946816949?text=Hola%20Tu%20Partner%20Contable,%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20para%20conversar%20sobre%20asesor%C3%ADa%20contable."
            target="_blank"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3571DF] to-[#F4621D] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[0_14px_35px_rgba(53,113,223,0.25)] transition-all hover:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M20.52 3.48C18.24 1.2 15.24 0 12 0 5.37 0 .01 5.37.01 12c0 2.11.55 4.18 1.59 6.01L0 24l6.11-1.57c1.76.96 3.74 1.46 5.89 1.46h.01c6.63 0 12-5.37 12-12 0-3.24-1.26-6.26-3.49-8.51ZM12 21.52c-1.82 0-3.58-.49-5.12-1.43l-.37-.22-3.62.93.97-3.53-.24-.36C3.64 15.22 3.1 13.64 3.1 12 3.1 6.48 7.88 1.7 13.4 1.7c2.36 0 4.58.92 6.25 2.59a8.766 8.766 0 0 1 2.59 6.25c0 5.52-4.78 10.28-10.24 10.28Zm5.65-7.73c-.31-.15-1.82-.9-2.1-1-.28-.11-.48-.15-.68.15-.2.31-.78 1-.95 1.2-.17.2-.35.22-.66.07-.31-.15-1.3-.48-2.48-1.52-.92-.82-1.54-1.83-1.72-2.13-.18-.31-.02-.48.13-.63.14-.14.31-.35.46-.52.15-.17.2-.31.31-.52.1-.2.05-.38-.03-.52-.08-.15-.68-1.62-.94-2.23-.25-.6-.5-.52-.68-.53-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.38-.28.31-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.82-.74 2.08-1.46.26-.71.26-1.31.18-1.46-.07-.14-.26-.22-.57-.37Z" />
            </svg>
            Conversemos
          </Link>
        </nav>
      </div>
    </header>
  );
}
