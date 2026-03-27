"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/fonctionnalites", label: "Fonctionnalités" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/demo", label: "Démo" },
    { href: "/blog", label: "Blog" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1c3829]/95 backdrop-blur-md shadow-lg"
          : "bg-[#1c3829]"
      } border-b border-white/[0.07]`}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 h-[58px] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline group"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="14" fill="#2D6A4A" />
            <path
              d="M16 10H31C37.6274 10 43 15.3726 43 22C43 28.6274 37.6274 34 31 34H22V46H16V10Z"
              fill="#ffffff"
            />
            <circle cx="31" cy="22" r="7" fill="#2D6A4A" />
          </svg>
          <span className="font-serif text-lg font-semibold tracking-[0.12em] uppercase text-white">
            Pauco
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] transition-colors duration-200 no-underline ${
                pathname === l.href
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://app.paucoandco.com"
            className="text-[13px] text-white/40 hover:text-white transition-colors duration-200 no-underline"
          >
            Se connecter
          </Link>
          <Link
            href="/contact"
            className="bg-[#6DBF85] text-[#1c3829] text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#7fcf97] hover:-translate-y-0.5 transition-all duration-200 no-underline whitespace-nowrap"
          >
            Devenir fondateur
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1c3829] border-t border-white/[0.07] px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm no-underline ${
                pathname === l.href ? "text-white" : "text-white/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://app.paucoandco.com"
            className="text-sm text-white/50 no-underline"
          >
            Se connecter
          </Link>
          <Link
            href="/contact"
            className="bg-[#6DBF85] text-[#1c3829] text-sm font-semibold px-5 py-3 rounded-lg text-center no-underline"
          >
            Devenir fondateur
          </Link>
        </div>
      )}
    </nav>
  );
}
