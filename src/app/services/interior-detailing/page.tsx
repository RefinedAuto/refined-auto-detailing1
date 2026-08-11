import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Basic Interior Detail | Mobile Detailing — Snohomish County WA",
  description:
    "Professional mobile interior detailing in Snohomish County & King County, WA. Deep vacuum, air blow-out, window cleaning, leather & plastic protection. Starting at $100. We come to you.",
};

export default function InteriorDetailingPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Interior Service</span>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                Basic Interior <span className="text-gradient-gold">Detail</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                A maintenance interior detail designed to keep your cabin clean and protected. Includes a deep vacuum with compressed air blow-out, interior window cleaning, and full cleaning and conditioning of all leather and plastics.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="glass-gold rounded-xl px-4 py-3">
                  <p className="text-gold-500 font-black text-xl">$100+</p>
                  <p className="text-white/40 text-xs mt-1">Sedan</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$120+</p>
                  <p className="text-white/40 text-xs mt-1">SUV</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$140+</p>
                  <p className="text-white/40 text-xs mt-1">Full-Size / Truck</p>
                </div>
              </div>
              <a
                href="https://refinedautodetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
              >
                Book Now <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/IMG_3373.JPG" alt="Interior car detailing" fill className="object-cover" priority />
            </div>
          </div>

          <div className="glass rounded-3xl p-10">
            <h2 className="text-3xl font-black text-white mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Deep vacuum — all surfaces & crevices",
                "Compressed air blow-out",
                "Interior windows cleaned",
                "Clean & protect leather",
                "Clean & protect all plastics & vinyl",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs italic">Heavy pet hair: subject to a $50 surcharge.</p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">Want interior + exterior together?</p>
            <Link href="/services/full-detail" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium transition-colors">
              See the Essential & Elite Full Detail packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
