import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Exterior Wash | Mobile Detailing — Snohomish County WA",
  description:
    "Professional mobile exterior wash in Snohomish County & King County, WA. Two-bucket hand wash, wheel cleaning, tire dressing & more. Starting at $80. We come to you.",
};

export default function ExteriorDetailingPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Exterior Service</span>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                Premium Exterior <span className="text-gradient-gold">Wash</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                A thorough hand wash that gives your car a bright, refreshed appearance. We clean every wheel and inner rim, dress the tires, and wipe down door edges and jambs — not just a rinse and dry.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="glass-gold rounded-xl px-4 py-3">
                  <p className="text-gold-500 font-black text-xl">$80+</p>
                  <p className="text-white/40 text-xs mt-1">Sedan</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$100+</p>
                  <p className="text-white/40 text-xs mt-1">SUV</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$120+</p>
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
              <Image src="/images/GS0A5263.jpeg" alt="Exterior car detailing" fill className="object-cover" priority />
            </div>
          </div>
          <div className="glass rounded-3xl p-10">
            <h2 className="text-3xl font-black text-white mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Wheels, tires & inner rims cleaned",
                "Two-bucket hand wash method",
                "Soft microfiber towel drying",
                "Tire dressing (deep black finish)",
                "Door edges & jambs wiped down",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs italic">Note: This service focuses on appearance refresh and does not treat embedded paint contaminants like tree sap or road tar. For full decontamination, see our Elite Full Detail.</p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm mb-4">Need a deeper clean?</p>
            <Link href="/services" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium transition-colors">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
