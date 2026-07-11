"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronDown, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
          <circle cx="24" cy="24" r="22" fill="#1e3a8a" />
          <circle cx="24" cy="24" r="16" stroke="#f97316" strokeWidth="3" fill="none" />
          <circle cx="24" cy="24" r="6" fill="#f97316" />
          <path
            d="M24 8v4M24 36v4M8 24h4M36 24h4M12.7 12.7l2.8 2.8M32.5 32.5l2.8 2.8M12.7 35.3l2.8-2.8M32.5 15.5l2.8-2.8"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M30 18l-10 10-4-4"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-[22px] font-extrabold tracking-tight text-navy-800">
          PRO<span className="text-orange-500">fix</span>
        </div>
        <div className="text-[9px] font-bold tracking-[0.25em] text-slate-500">
          {SITE.tagline}
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" && pathname === "/";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-0.5 rounded-md px-2.5 py-2 text-[13px] font-semibold transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-700 hover:text-navy-700"
                }`}
              >
                {link.label}
                {"hasDropdown" in link && link.hasDropdown && (
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-md bg-navy-800 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-navy-900"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <Link
            href="#book"
            className="flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-orange-600"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book a Repair
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-navy-800 hover:bg-slate-100 xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg bg-navy-800 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <Calendar className="h-4 w-4" />
              Book a Repair
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
