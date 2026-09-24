import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import { SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";

const services = SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}` }));

const serviceAreas = AREAS.map((a) => ({ name: `${a.city}, WA`, href: `/service-areas/${a.slug}` }));

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="" width={44} height={44} className="object-contain" />
              <div>
                <p className="text-white font-semibold text-sm tracking-widest uppercase">Refined Auto</p>
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-light">Detailing</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Mobile car detailing, ceramic coating and paint correction across Snohomish &amp; King County. We bring the detail shop to your driveway.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                aria-label="Refined Auto Detailing on Instagram (opens in a new tab)"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                aria-label="Refined Auto Detailing on Facebook (opens in a new tab)"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-white/50 hover:text-gold-500 text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {serviceAreas.map((a) => (
                <li key={a.name}>
                  <Link href={a.href} className="text-white/50 hover:text-gold-500 text-sm transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-3 text-white/50 hover:text-gold-500 text-sm transition-colors">
                  <Phone size={14} className="text-gold-500 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/50 hover:text-gold-500 text-sm transition-colors">
                  <Mail size={14} className="text-gold-500 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                {COMPANY.serviceArea}
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/quote"
                className="inline-block bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 tracking-wide"
              >
                Book a Detail
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Refined Auto Detailing. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="text-white/60 hover:text-white text-xs transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-white/60 hover:text-white text-xs transition-colors">Terms of Service</Link></li>
            <li><Link href="/accessibility" className="text-white/60 hover:text-white text-xs transition-colors">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
