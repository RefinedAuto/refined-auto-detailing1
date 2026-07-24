import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/utils";

const services = [
  { name: "Interior Detailing", href: "/services/interior-detailing" },
  { name: "Exterior Detailing", href: "/services/exterior-detailing" },
  { name: "Full Detail Package", href: "/services/full-detail" },
  { name: "Paint Correction", href: "/services/paint-correction" },
  { name: "Ceramic Coating", href: "/services/ceramic-coating" },
];

const serviceAreas = [
  { name: "Marysville, WA", href: "/service-areas/marysville" },
  { name: "Everett, WA", href: "/service-areas/everett" },
  { name: "Lynnwood, WA", href: "/service-areas/lynnwood" },
  { name: "Mukilteo, WA", href: "/service-areas/mukilteo" },
  { name: "Mill Creek, WA", href: "/service-areas/mill-creek" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="Refined Auto Detailing" width={44} height={44} className="object-contain" />
              <div>
                <p className="text-white font-semibold text-sm tracking-widest uppercase">Refined Auto</p>
                <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-light">Detailing</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium mobile auto detailing serving Snohomish County. We bring the detail shop to your driveway.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
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
            <ul className="space-y-3">
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
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-white/50 hover:text-gold-500 text-sm transition-colors">
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
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Refined Auto Detailing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
