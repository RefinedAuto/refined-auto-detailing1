import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Essential & Elite Full Detail | Mobile Detailing — Snohomish County WA",
  description:
    "Full detail packages for Snohomish County & King County, WA. Essential Full Detail from $175 or Elite Full Detail from $300 — complete interior & exterior service. Mobile, we come to you.",
};

export default function FullDetailPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">

          {/* Essential Full Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6">
                <Star size={12} className="text-gold-500 fill-[#106caa]" />
                <span className="text-gold-500 text-xs font-bold tracking-wide">Most Popular</span>
              </div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Full Detail</span>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                Essential <span className="text-gradient-gold">Full Detail</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                A maintenance-focused full detail designed to refresh your vehicle inside and out. Great for keeping a well-maintained vehicle looking its best on a regular schedule.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="glass-gold rounded-xl px-4 py-3">
                  <p className="text-gold-500 font-black text-xl">$175+</p>
                  <p className="text-white/40 text-xs mt-1">Sedan</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$210+</p>
                  <p className="text-white/40 text-xs mt-1">SUV</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$250+</p>
                  <p className="text-white/40 text-xs mt-1">Full-Size / Truck</p>
                </div>
              </div>
              <a
                href="https://refinedautodetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
              >
                Book Essential Detail <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/GS0A5621.jpeg" alt="Essential full detailing" fill className="object-cover" priority />
            </div>
          </div>

          <div className="glass rounded-3xl p-10 mb-16">
            <h2 className="text-3xl font-black text-white mb-8">Essential Detail — What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-5">Exterior</h3>
                <div className="space-y-3">
                  {["Wheels, tires & inner rims cleaned", "Two-bucket hand wash", "Soft microfiber towel drying", "Tire dressing", "Door edges & jambs wiped down"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-sm"><CheckCircle size={14} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-5">Interior</h3>
                <div className="space-y-3">
                  {["Light vacuum", "Surface wipe-down", "Windows & mirrors cleaned"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-sm"><CheckCircle size={14} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
                <p className="text-white/30 text-xs italic mt-4">Heavy pet hair: +$50. Does not treat embedded paint contaminants.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-16" />

          {/* Elite Full Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1">
              <Image src="/images/GS0A5749.jpeg" alt="Elite full detailing" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Full Detail</span>
              <h2 className="text-5xl font-black tracking-tight mb-6">
                Elite <span className="text-gradient-gold">Full Detail</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Our most thorough detail — an extensive deep clean that addresses every crack, crevice, and surface. Includes full exterior decontamination with iron remover and clay bar, plus ceramic sealant protection. Required as the first step for Maintenance Plan clients.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="glass-gold rounded-xl px-4 py-3">
                  <p className="text-gold-500 font-black text-xl">$300+</p>
                  <p className="text-white/40 text-xs mt-1">Sedan</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$350+</p>
                  <p className="text-white/40 text-xs mt-1">SUV</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-white font-black text-xl">$400+</p>
                  <p className="text-white/40 text-xs mt-1">Full-Size / Truck</p>
                </div>
              </div>
              <a
                href="https://refinedautodetailing.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
              >
                Book Elite Detail <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-10 mb-12">
            <h2 className="text-3xl font-black text-white mb-8">Elite Detail — What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-5">Exterior</h3>
                <div className="space-y-3">
                  {["Wheel, tire & inner rim cleaning", "Two-bucket hand wash + strip wash", "Iron decontamination spray", "Clay bar treatment", "Microfiber towel drying", "Ceramic sealant application", "Tire dressing", "Door jambs wiped down"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-sm"><CheckCircle size={14} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-5">Interior</h3>
                <div className="space-y-3">
                  {["Full vacuuming", "Plastic & vinyl scrubbing", "Plastic & vinyl conditioning", "Windows & mirrors cleaned"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-sm"><CheckCircle size={14} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
                <p className="text-white/30 text-xs italic mt-4">Heavy pet hair: +$50 surcharge.</p>
              </div>
            </div>
          </div>

          {/* Maintenance Plans CTA */}
          <div className="glass-gold rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Keep It Looking This Good</h3>
            <p className="text-white/50 mb-6 max-w-xl mx-auto">After your Elite Detail, enroll in our Maintenance Plan for discounted bi-weekly or monthly services. We keep your vehicle at its best year-round.</p>
            <Link href="/services" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-bold transition-colors">
              View Maintenance Plans <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
