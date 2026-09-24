import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Car Detailing Photos — Before & After in Snohomish County, WA",
  description:
    "See real before and after photos from Refined Auto Detailing. Interior and exterior transformations across Snohomish County, WA.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  { src: "/images/GS0A5754.jpeg", alt: "BMW M3 full detail front view", label: "BMW M3 — Full Detail", tag: "Full Detail" },
  { src: "/images/GS0A5749.jpeg", alt: "BMW M3 side profile after detail", label: "BMW M3 — Side Profile", tag: "Exterior" },
  { src: "/images/GS0A5668.jpeg", alt: "BMW M3 rear after detail", label: "BMW M3 — Rear Detail", tag: "Exterior" },
  { src: "/images/GS0A5609.jpeg", alt: "BMW M3 wheel detail close-up", label: "Wheel & Brake Detail", tag: "Exterior" },
  { src: "/images/GS0A5263.jpeg", alt: "BMW M3 being foam washed", label: "Foam Wash in Progress", tag: "Exterior" },
  { src: "/images/GS0A5621.jpeg", alt: "BMW M3 being dried after wash", label: "Hand Drying Process", tag: "Exterior" },
  { src: "/images/IMG_3373.JPG", alt: "Audi Q3 interior after detail", label: "Audi Q3 — Interior Clean", tag: "Interior" },
  { src: "/images/IMG_3377.JPG", alt: "Audi Q3 rear seats after detail", label: "Audi Q3 — Rear Seats", tag: "Interior" },
  { src: "/images/IMG_3378.JPG", alt: "Audi Q3 front seats after detail", label: "Audi Q3 — Leather Seats", tag: "Interior" },
  { src: "/images/IMG_3438.JPG", alt: "Audi Q3 exterior after detail", label: "Audi Q3 — Exterior", tag: "Ceramic Coating" },
  { src: "/images/IMG_3469.JPG", alt: "Audi Q3 rear angle after detail", label: "Audi Q3 — Rear Angle", tag: "Ceramic Coating" },
  { src: "/images/IMG_3450.JPG", alt: "Audi Q3 wheel after cleaning", label: "Audi Q3 — Wheel Detail", tag: "Exterior" },
  { src: "/images/IMG_3735.JPG", alt: "VW GTI interior after detail", label: "VW GTI — Interior After", tag: "Interior" },
  { src: "/images/IMG_3745.JPG", alt: "VW GTI rear seats after detail", label: "VW GTI — Rear Seats", tag: "Interior" },
  { src: "/images/IMG_3754.JPG", alt: "VW GTI dashboard after detail", label: "VW GTI — Dashboard", tag: "Interior" },
  { src: "/images/IMG_3725.JPG", alt: "VW GTI engine bay after clean", label: "Engine Bay Detail", tag: "Full Detail" },
  { src: "/images/infiniti-q50-clean.jpg", alt: "Infiniti Q50 after full detail", label: "Infiniti Q50 — After", tag: "Full Detail" },
  { src: "/images/IMG_4197.JPG", alt: "Clean interior detail result", label: "Interior Transformation", tag: "Interior" },
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
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
              Car Detailing Photos: <span className="text-gradient-gold">Real Snohomish County Results</span>
            </h1>
            <p className="text-white/70 text-lg">
              Every photo is from an actual Refined Auto Detailing client in Snohomish County, WA. No stock images.
            </p>
          </div>

          <GalleryGrid items={galleryItems} />

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
            >
              Get Your Vehicle Looking This Good <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
