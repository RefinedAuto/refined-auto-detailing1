import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Everett WA | Refined Auto Detailing",
  description:
    "Premium mobile auto detailing in Everett, WA. We serve all Everett neighborhoods — Bayside, Riverside, North Everett & more. Interior, exterior, ceramic coating. Book today.",
  keywords: ["mobile detailing Everett WA", "auto detailing Everett Washington", "car detailing Everett"],
};

export default function EverettPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/service-areas" className="hover:text-gold-500">Service Areas</Link>
              <span>/</span>
              <span className="text-white">Everett, WA</span>
            </div>

            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Everett, WA</span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
              Mobile Detailing <br /><span className="text-gradient-gold">Everett, WA</span>
            </h1>

            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Serving all of Everett, WA — from the Port to the Navy Station, Bayside to the Foothills. Refined Auto Detailing brings premium mobile detailing to Everett residents and professionals who expect the best.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/quote" className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold flex items-center gap-2">
                Book in Everett <ArrowRight size={18} />
              </Link>
              <a href="tel:(425) 386-5190" className="glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all">
                Call (425) 386-5190
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5">Everett Service Details</h2>
                <ul className="space-y-3">
                  {[
                    "Full Snohomish County coverage",
                    "We serve Boeing employees & Navy personnel",
                    "Flexible early morning & weekend slots",
                    "Same-day booking when available",
                    "Fleet vehicle packages available",
                    "Satisfaction guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5">Everett Neighborhoods</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {["Bayside", "Riverside", "North Everett", "South Everett", "Port Gardner", "Pinehurst", "Westmont", "Forest Park"].map((n) => (
                    <li key={n} className="flex items-center gap-2 text-white/60 text-sm">
                      <MapPin size={10} className="text-gold-500 shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/quote" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-10 py-5 rounded-full transition-all shadow-gold text-lg">
                Book Your Everett Detail <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
