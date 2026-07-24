import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ceramic Coating | Mobile Auto Detailing — Snohomish County WA",
  description:
    "Professional ceramic coating in Snohomish County & King County, WA. 1-year, 3-year, and 4-year coating packages. Three-step decontamination + paint enhancement included. Starting at $400.",
};

const tiers = [
  {
    name: "1 Year Ceramic Coating",
    description: "Includes three-step decontamination wash and paint enhancement polish before coating application.",
    prices: { sedan: "$400", suv: "$500", large: "$600" },
  },
  {
    name: "3 Year Ceramic Coating",
    description: "Extended protection with the same thorough prep — decontamination wash and paint enhancement included.",
    prices: { sedan: "$700", suv: "$900", large: "$1,100" },
    popular: true,
  },
  {
    name: "4 Year Ceramic Coating",
    description: "Our premium long-term coating for maximum durability. Full decontamination and paint enhancement included.",
    prices: { sedan: "$1,000", suv: "$1,200", large: "$1,400" },
  },
];

const addons = [
  { name: "Window Coating — All Windows", price: "$300" },
  { name: "Window Coating — Windshield & Rear Only", price: "$125" },
  { name: "Wheel Face Coating (15–18\")", price: "$180" },
  { name: "Wheel Face Coating (19–22\")", price: "$240" },
  { name: "Wheel Face Coating (23\"+)", price: "$320" },
  { name: "Wheels Off Coating (15–18\")", price: "$480" },
  { name: "Wheels Off Coating (19–22\")", price: "$580" },
  { name: "Wheels Off Coating (23\"+)", price: "$640" },
  { name: "Leather Ceramic Coating — Sedan", price: "$250" },
  { name: "Leather Ceramic Coating — SUV", price: "$300" },
  { name: "Leather Ceramic Coating — Large SUV/Truck", price: "$350" },
];

export default function CeramicCoatingPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Ceramic Coating</span>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                Long-Term <span className="text-gradient-gold">Paint Protection</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Professional ceramic coating that bonds to your vehicle&apos;s paint for hydrophobic, UV-resistant protection that keeps your car looking new — for years. Every package includes a three-step decontamination wash and paint enhancement polish before application.
              </p>
              <div className="flex gap-4 flex-wrap mb-8">
                <div className="glass-gold rounded-xl px-5 py-3">
                  <p className="text-gold-500 font-black text-2xl">$400+</p>
                  <p className="text-white/40 text-xs mt-1">Starting price</p>
                </div>
                <div className="glass rounded-xl px-5 py-3">
                  <p className="text-white font-black text-2xl">1–4yr</p>
                  <p className="text-white/40 text-xs mt-1">Protection duration</p>
                </div>
              </div>
              <a
                href="https://refinedautodetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
              >
                Book Ceramic Coating <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/gs-5133.jpg" alt="Ceramic coating application" fill className="object-cover" priority />
            </div>
          </div>

          {/* What's always included */}
          <div className="glass rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-black text-white mb-6">Included With Every Coating</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Three-step decontamination wash",
                "Paint enhancement polish",
                "Iron decontamination & clay bar",
                "IPA surface wipe-down",
                "Professional ceramic coating application",
                "Full coat cure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle size={14} className="text-gold-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Coating tiers */}
          <h2 className="text-3xl font-black text-white mb-8">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass rounded-3xl p-8 border transition-all relative ${
                  tier.popular ? "border-gold-500/40" : "border-white/5 hover:border-gold-500/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-white font-black text-lg mb-2">{tier.name}</h3>
                <p className="text-white/50 text-sm mb-6">{tier.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Sedan / Hatchback</span>
                    <span className="text-gold-500 font-bold">{tier.prices.sedan}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">SUV</span>
                    <span className="text-gold-500 font-bold">{tier.prices.suv}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Large SUV / Truck</span>
                    <span className="text-gold-500 font-bold">{tier.prices.large}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="glass rounded-3xl p-10">
            <h2 className="text-3xl font-black text-white mb-2">Add-On Services</h2>
            <p className="text-white/40 text-sm mb-8">Extend protection to windows, wheels, and leather.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addons.map((addon) => (
                <div key={addon.name} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/70 text-sm">{addon.name}</span>
                  <span className="text-gold-500 font-bold text-sm shrink-0 ml-4">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
