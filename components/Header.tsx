"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { mainNav } from "@/lib/nav";
import { business } from "@/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition hover:bg-white ${
                    active ? "text-ocean" : "text-navy"
                  }`}
                >
                  {item.label}
                  <svg
                    className="h-3.5 w-3.5 transition group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-xl border border-navy/10 bg-white p-2 shadow-lift">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-cream"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition hover:bg-white ${
                  active ? "text-ocean" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {business.phoneHref ? (
            <a
              href={`tel:${business.phoneHref}`}
              className="text-sm font-semibold text-navy hover:text-ocean"
            >
              {business.phone}
            </a>
          ) : (
            <span className="text-sm font-semibold text-navy/70">{business.phone}</span>
          )}
          <Link href="/contact" className="btn-primary !px-5 !py-2 text-sm">
            Free Bill Review
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-cream lg:hidden"
        >
          <ul className="container-page space-y-1 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-navy hover:bg-white"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="ml-3 border-l border-navy/10 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Free Bill Review
              </Link>
            </li>
            <li className="pt-1 text-center">
              {business.phoneHref ? (
                <a href={`tel:${business.phoneHref}`} className="text-sm font-semibold text-navy">
                  Call {business.phone}
                </a>
              ) : (
                <span className="text-sm font-semibold text-navy/70">{business.phone}</span>
              )}
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
