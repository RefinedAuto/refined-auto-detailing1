import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing | Refined Auto Detailing — Snohomish County WA",
  description: "Premium mobile auto detailing in Snohomish County, WA. We come to you. Interior, exterior, ceramic coating & more.",
};

export default function AreaPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="py-32">
        <div className="container-custom text-center">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Mobile Detailing</span>
          <h1 className="text-5xl font-black tracking-tight mb-6 text-white">
            Premium Mobile Detailing <span className="text-gradient-gold">Near You</span>
          </h1>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">We serve this area and bring professional detailing directly to your door.</p>
          <Link href="/quote" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
