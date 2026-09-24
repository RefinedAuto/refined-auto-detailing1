import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { AREAS } from "@/lib/areas";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Mobile Detailing Service Areas | Snohomish & King County, WA" },
  description: `Mobile car detailing and ceramic coating in ${AREAS.length} cities across Snohomish & King County, WA — Lynnwood, Everett, Kirkland, Shoreline and more.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Service Areas", path: "/service-areas" }]} />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">Service Areas</p>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
              Mobile Detailing Service Areas in{" "}
              <span className="text-gradient-gold">Snohomish &amp; King County</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Based in south Snohomish County, we bring professional mobile detailing to homes and workplaces within about 30
              miles — your home, office, or anywhere convenient.
            </p>
          </div>

          {(["Snohomish", "King"] as const).map((county) => (
            <section key={county} aria-labelledby={`county-${county}`} className="mb-16">
              <h2 id={`county-${county}`} className="text-3xl font-black text-white mb-8">
                {county} County
              </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AREAS.filter((a) => a.county === county).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group block h-full glass rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300"
                  >
                    <h3 className="flex items-center gap-3 mb-4 text-white font-black text-xl">
                      <MapPin size={16} className="text-gold-500" aria-hidden="true" />
                      {area.city}
                      <span className="text-white/60 font-normal text-base -ml-2">, WA</span>
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{area.summary}</p>
                    <span className="flex items-center justify-between">
                      <span className="text-white/60 font-mono text-xs">{area.zips.join(" · ")}</span>
                      <span className="flex items-center gap-1 text-gold-500 text-xs font-medium">
                        Detailing in {area.city}
                        <ArrowRight size={12} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            </section>
          ))}

          <div className="glass border border-gold-500/20 rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-3">Don&apos;t See Your City?</h2>
            <p className="text-white/70 mb-6">
              We service roughly a 30-mile radius and may be able to reach your location. Reach out and ask.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all"
              >
                <Phone size={16} aria-hidden="true" /> Call {COMPANY.phone}
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
