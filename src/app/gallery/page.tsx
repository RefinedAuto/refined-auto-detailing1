import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Before & After Auto Detailing Photos — Snohomish County WA",
  description:
    "See real before and after photos from Refined Auto Detailing. Interior and exterior transformations on Teslas, BMWs, trucks, and more across Snohomish County, WA.",
};

const galleryItems = [
  { src: "/images/gs-5758.jpg", alt: "Professional auto detailing result", label: "Premium Full Detail", tag: "Full Detail" },
  { src: "/images/gs-5299.jpg", alt: "Exterior detailing transformation", label: "Exterior Transformation", tag: "Exterior" },
  { src: "/images/gs-5754.jpg", alt: "Interior deep cleaning result", label: "Interior Deep Clean", tag: "Interior" },
  { src: "/images/gs-5364.jpg", alt: "Paint correction and protection", label: "Paint Correction", tag: "Exterior" },
  { src: "/images/gs-5621.jpg", alt: "Vehicle detailing in progress", label: "Detailing in Progress", tag: "Full Detail" },
  { src: "/images/gs-5749.jpg", alt: "Professional auto detail finish", label: "Showroom Finish", tag: "Exterior" },
  { src: "/images/gs-5050.jpg", alt: "Interior cleaning and conditioning", label: "Interior Conditioning", tag: "Interior" },
  { src: "/images/gs-5094.jpg", alt: "Wheel and tire detailing", label: "Wheel & Tire Detail", tag: "Exterior" },
  { src: "/images/gs-5133.jpg", alt: "Ceramic coating application", label: "Ceramic Coating", tag: "Ceramic Coating" },
  { src: "/images/gs-5048.jpg", alt: "Full vehicle detail service", label: "Complete Detail Package", tag: "Full Detail" },
  { src: "/images/bmw-m3.jpg", alt: "BMW M3 exterior detailing", label: "BMW M3 — Full Detail", tag: "Exterior" },
  { src: "/images/detail-4.jpg", alt: "Vehicle detailing result", label: "Premium Finish", tag: "Full Detail" },
];

export default function GalleryPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
              Real Results. <br /><span className="text-gradient-gold">Real Vehicles.</span>
            </h1>
            <p className="text-white/50 text-lg">
              Every photo is from an actual Refined Auto Detailing client in Snohomish County, WA. No stock images.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Interior", "Exterior", "Full Detail", "Ceramic Coating"].map((tag) => (
              <button
                key={tag}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  tag === "All" ? "bg-gold-500 text-black" : "glass text-white/60 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-1 block">{item.tag}</span>
                  <p className="text-white font-semibold text-base">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
            >
              Get Your Vehicle Looking This Good <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
