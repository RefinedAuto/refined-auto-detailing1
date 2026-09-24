"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn, COMPANY } from "@/lib/utils";
import { DETAIL_PACKAGES_HUB, PRIMARY_SERVICES } from "@/lib/services";

// The Essential and Elite packages are reached through one "Detail Packages" hub item.
const services = [
  ...PRIMARY_SERVICES.filter((s) => !s.parent).flatMap((s, i) => {
    const item = { name: s.name, href: `/services/${s.slug}` };
    // Hub sits right after Paint Correction (the second primary service).
    return i === 1 ? [item, { name: DETAIL_PACKAGES_HUB.name, href: DETAIL_PACKAGES_HUB.path }] : [item];
  }),
  { name: "All Services & Add-Ons", href: "/services" },
];

const navLinks = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Refined Auto Detailing"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-semibold text-sm tracking-widest uppercase">
                  Refined Auto
                </p>
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-light">
                  Detailing
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setServicesOpen(false);
                    }}
                    onBlur={(e) => {
                      // Close once keyboard focus leaves the menu entirely.
                      if (!dropdownRef.current?.contains(e.relatedTarget as Node)) setServicesOpen(false);
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={(e) => {
                        // Hover already opened it for mouse users, so a click
                        // (detail > 0) keeps it open; keyboard presses (detail 0) toggle.
                        setServicesOpen((o) => (e.detail > 0 ? true : !o));
                      }}
                      className="flex items-center gap-1 text-white/80 hover:text-gold-500 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
                    >
                      {link.name}
                      <ChevronDown
                        aria-hidden="true"
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="services-menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-dark-950 rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-white/15"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-5 py-3 text-sm text-white/85 hover:text-gold-500 hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-gold-500 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center gap-2 text-white/70 hover:text-gold-500 text-sm transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                <span className="sr-only xl:not-sr-only">
                  <span className="sr-only">Call </span>
                  {COMPANY.phone}
                </span>
              </a>
              <Link
                href="/quote"
                className="bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-gold tracking-wide"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="flex items-center justify-between h-20 container-custom border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/logo.png"
                  alt="Refined Auto Detailing — home"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <button
                type="button"
                autoFocus
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto container-custom py-8">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-2xl font-light text-white/80 hover:text-gold-500 py-4 border-b border-white/5 transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ul className="grid grid-cols-2 gap-x-4 py-3 border-b border-white/5">
                        {services.slice(0, -1).map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-white/70 hover:text-gold-500"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-4"
              >
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 text-white/60 text-lg"
                >
                  <Phone size={18} className="text-gold-500" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-gold-500 text-black font-bold text-center py-4 rounded-xl text-lg tracking-wide"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
