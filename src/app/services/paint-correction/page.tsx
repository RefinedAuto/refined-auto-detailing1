import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Paint Decontamination & Correction | Refined Auto Detailing — Snohomish County WA",
  description:
    "Paint decontamination services in Snohomish County, WA. Iron decontamination, clay bar treatment, and ceramic sealant included in our Elite Full Detail and all ceramic coating packages.",
};

export default function PaintCorrectionPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mb-16">
            <Image src="/images/IMG_3469.JPG" alt="Audi Q3 paint decontamination result" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="max-w-3xl mx-auto">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Paint Care</span>
          <h1 className="text-5xl font-black tracking-tight mb-6">
            Paint <span className="text-gradient-gold">Decontamination</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Removing embedded contaminants — iron particles, tar, tree sap, and road grime — is the foundation of any lasting detail or coating. Our Elite Full Detail and all ceramic coating packages include a full paint decontamination process.
          </p>

          <div className="glass rounded-3xl p-10 mb-10">
            <h2 className="text-2xl font-black text-white mb-6">Included In These Services</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gold-500 font-bold mb-2">Elite Full Detail</p>
                <div className="space-y-2 ml-2">
                  {["Iron decontamination spray", "Clay bar treatment", "Ceramic sealant application"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle size={13} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-gold-500 font-bold mb-2">All Ceramic Coating Packages</p>
                <div className="space-y-2 ml-2">
                  {["Three-step decontamination wash", "Iron decontamination & clay bar", "Paint enhancement polish", "Professional ceramic coating"].map((i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle size={13} className="text-gold-500 shrink-0" />{i}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/full-detail" className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all">
              See Elite Full Detail <ArrowRight size={16} />
            </Link>
            <Link href="/services/ceramic-coating" className="flex-1 flex items-center justify-center gap-2 glass border border-white/10 hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all">
              See Ceramic Coating <ArrowRight size={16} />
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
