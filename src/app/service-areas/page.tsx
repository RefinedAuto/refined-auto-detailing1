import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mobile Detailing Service Areas | Snohomish County WA",
  description:
    "Refined Auto Detailing serves all of Snohomish County, WA including Marysville, Everett, Lynnwood, Mukilteo, Mill Creek, and more. Mobile detailing at your location.",
};

const areas = [
  {
    city: "Marysville",
    state: "WA",
    description: "Our home base. We serve all Marysville neighborhoods with same-day availability most days. From Grove Street to Smokey Point, we bring premium detailing to your driveway.",
    keywords: "mobile detailing Marysville WA, car detailing Marysville",
    href: "/service-areas/marysville",
    zip: "98270",
  },
  {
    city: "Everett",
    state: "WA",
    description: "Serving all of Everett — Bayside, Riverside, Port Gardner, and beyond. Navy personnel, professionals, and luxury vehicle owners trust us for exceptional results.",
    keywords: "mobile detailing Everett WA, auto detailing Everett",
    href: "/service-areas/everett",
    zip: "98201",
  },
  {
    city: "Lynnwood",
    state: "WA",
    description: "Premium mobile detailing throughout Lynnwood and Mountlake Terrace. Convenient scheduling around your busy lifestyle in South Snohomish County.",
    keywords: "mobile detailing Lynnwood WA, car detailing Lynnwood",
    href: "/service-areas/lynnwood",
    zip: "98036",
  },
  {
    city: "Mukilteo",
    state: "WA",
    description: "Waterfront to the bluffs, we serve all of Mukilteo. Perfect for professionals commuting to Boeing who want their vehicle looking sharp.",
    keywords: "mobile detailing Mukilteo WA, auto detailing Mukilteo",
    href: "/service-areas/mukilteo",
    zip: "98275",
  },
  {
    city: "Mill Creek",
    state: "WA",
    description: "Mill Creek's #1 mobile detailing service. We serve all Mill Creek neighborhoods including Town Center, Arbor Pointe, and Penny Creek.",
    keywords: "mobile detailing Mill Creek WA, car detailing Mill Creek",
    href: "/service-areas/mill-creek",
    zip: "98012",
  },
  {
    city: "Bothell",
    state: "WA",
    description: "Serving North Bothell, Canyon Park, and Country Village. Premium mobile detailing for Bothell's growing community of professionals and families.",
    keywords: "mobile detailing Bothell WA",
    href: "/service-areas/marysville",
    zip: "98011",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Service Areas</span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
              Snohomish County, <span className="text-gradient-gold">Covered</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              We bring premium mobile detailing throughout Snohomish County, WA. We come to you — your home, office, or anywhere convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="group glass rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={16} className="text-gold-500" />
                  <h2 className="text-white font-black text-xl">
                    {area.city}{area.state && <span className="text-white/40 font-normal text-base ml-1">, {area.state}</span>}
                  </h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/20 font-mono text-xs">{area.zip}</span>
                  <span className="flex items-center gap-1 text-gold-500/70 group-hover:text-gold-500 text-xs font-medium transition-colors">
                    Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Not on the list CTA */}
          <div className="glass border border-gold-500/20 rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-3">Don&apos;t See Your City?</h2>
            <p className="text-white/50 mb-6">
              We service a ~30 mile radius and may be able to accommodate your location. Reach out and ask — we love covering new areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all">
                <Phone size={16} /> Call Us
              </a>
              <Link href="/quote" className="flex items-center justify-center gap-2 glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
