"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/announcements", label: "Announcements" },
  { href: "/follow_us", label: "Follow Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-[padding,box-shadow] duration-300 ${
        scrolled ? "py-2.5 shadow-sm" : "py-4"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/images/KC-logo-with-seal.png"
            alt="Key Club"
            width={120}
            height={30}
            className={`object-contain w-24 md:w-40 transition-all duration-300 ${scrolled ? "md:w-32" : ""}`}
          />
          <div className="border-l border-gray-200 pl-2 md:pl-3 hidden sm:block">
            <div className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">Montville</div>
            <div className="text-xs text-gray-400 leading-tight">New Jersey</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium py-1 transition-colors ${
                  active ? "text-[#003366]" : "text-gray-600 hover:text-blue-800"
                } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#003366] after:transition-all after:duration-300 ${
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="bg-[#003366] hover:bg-blue-900 text-white text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Member Login
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 shrink-0"
          >
            <span
              className={`block h-0.5 w-5 bg-[#003366] rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#003366] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#003366] rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                  active ? "bg-blue-50 text-[#003366]" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
