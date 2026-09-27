"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 h-20 z-50 text-[#6e4479] bg-[#dccce1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand */}
            <Link href="/" className="tracking-tight hover:opacity-90">
              <div className="h-20 w-40 overflow-hidden">
                <img src="/images/wics-text-logo.png" alt="WiCS UCSB" className="h-full w-full object-cover" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 text-xl font-medium">
              {["About", "Team", "Events", "Engage"].map((item) => {
                const href = `/${item.toLowerCase()}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`px-4 py-2 transition hover:bg-white/15 hover:backdrop-blur-sm ${
                      isActive ? "border-b-2 border-[#6e4479] font-semibold" : ""
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 transition hover:bg-white/10"
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden bg-[#dccce1] border-t border-[#6e4479]/20">
            {["About", "Team", "Events", "Engage"].map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-lg font-medium hover:bg-white/20 ${
                    isActive ? "border-l-4 border-[#6e4479] font-semibold pl-5" : ""
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}