import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Marysville WA | Refined Auto Detailing",
  description:
    "Premium mobile auto detailing in Marysville, WA. We come to you — home, office, or anywhere in Marysville and surrounding areas. Interior, exterior, ceramic coating. Book online.",
  keywords: ["mobile detailing Marysville WA", "car detailing Marysville Washington", "auto detailing Marysville"],
};

export default function MarysvillePage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/service-areas" className="hover:text-gold-500">Service Areas</Link>
              <span>/</span>
              <span className="text-white">Marysville, WA</span>
            </div>

            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Marysville, WA</span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
              Mobile Detailing <br /><span className="text-gradient-gold">Marysville, WA</span>
            </h1>

            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Refined Auto Detailing is Marysville&apos;s premier mobile auto detailing service. We serve all of Marysville — from Downtown to Grove Street, Smokey Point to Soper Hill — bringing professional-grade detailing directly to your driveway.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/quote" className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold flex items-center gap-2">
                Book in Marysville <ArrowRight size={18} />
              </Link>
              <a href="tel:+14253865190" className="glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all">
                (425) 386-5190
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5">Why Marysville Clients Choose Refined</h2>
                <ul className="space-y-3">
                  {[
                    "Local — we know Marysville and surrounding areas",
                    "Same-day appointments frequently available",
                    "We come to your home, office, or any address",
                    "Professional-grade products, expert results",
                    "100% satisfaction guarantee",
                    "Fully insured and bonded",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5">Marysville Areas We Serve</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Downtown Marysville",
                    "Smokey Point",
                    "Grove Street",
                    "Soper Hill",
                    "Allen Creek",
                    "Lakewood",
                    "Ebey Island",
                    "Strawberry Fields",
                  ].map((neighborhood) => (
                    <li key={neighborhood} className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin size={10} className="text-gold-500 shrink-0" />
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services available */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-white mb-6">Services Available in Marysville</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Interior Detailing", price: "From $149", href: "/services/interior-detailing" },
                  { name: "Exterior Detailing", price: "From $129", href: "/services/exterior-detailing" },
                  { name: "Full Detail Package", price: "From $249", href: "/services/full-detail" },
                  { name: "Paint Correction", price: "From $349", href: "/services/paint-correction" },
                  { name: "Ceramic Coating", price: "From $799", href: "/services/ceramic-coating" },
                ].map(({ name, price, href }) => (
                  <Link key={name} href={href} className="flex items-center justify-between glass rounded-xl p-5 hover:border-gold-500/30 transition-all group">
                    <span className="text-white font-semibold">{name}</span>
                    <span className="text-gold-500 text-sm">{price}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/quote" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-10 py-5 rounded-full transition-all shadow-gold text-lg">
                Get a Free Quote in Marysville <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Refined Auto Detailing — Marysville",
            description: "Premium mobile auto detailing service in Marysville, WA. Interior detailing, exterior detailing, ceramic coating.",
            areaServed: { "@type": "City", name: "Marysville", addressRegion: "WA" },
            telephone: "(425) 386-5190",
            priceRange: "$$",
          }),
        }}
      />
    </div>
  );
}
