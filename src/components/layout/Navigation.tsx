"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn, COMPANY } from "@/lib/utils";

const services = [
  { name: "Interior Detailing", href: "/services/interior-detailing" },
  { name: "Exterior Detailing", href: "/services/exterior-detailing" },
  { name: "Full Detail Package", href: "/services/full-detail" },
  { name: "Paint Correction", href: "/services/paint-correction" },
  { name: "Ceramic Coating", href: "/services/ceramic-coating" },
];

const navLinks = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-white/80 hover:text-gold-500 text-sm font-medium tracking-wide transition-colors duration-200">
                      {link.name}
                      <ChevronDown
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 glass rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-5 py-3 text-sm text-white/70 hover:text-gold-500 hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
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
                    className="text-white/80 hover:text-gold-500 text-sm font-medium tracking-wide transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center gap-2 text-white/70 hover:text-gold-500 text-sm transition-colors"
              >
                <Phone size={14} />
                <span>{COMPANY.phone}</span>
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
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="flex items-center justify-between h-20 container-custom border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={24} />
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
                  <Phone size={18} className="text-gold-500" />
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
