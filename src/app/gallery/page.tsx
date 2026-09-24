import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Car Detailing Before & After Photos",
  description:
    "See real before and after photos from Refined Auto Detailing. Interior and exterior transformations across Snohomish County, WA.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  { src: "/images/work/bmw-m3-mobile-detail-front.jpg", alt: "White BMW M3 in a home driveway after a full mobile detail by Refined Auto Detailing", label: "BMW M3 — Full Detail", tag: "Full Detail" },
  { src: "/images/work/bmw-m3-elite-detail-side.jpg", alt: "Side profile of a white BMW M3 with glossy paint after an exterior detail", label: "BMW M3 — Side Profile", tag: "Exterior" },
  { src: "/images/work/bmw-m3-detail-rear.jpg", alt: "Rear view of a white BMW M3 after an exterior hand wash and detail", label: "BMW M3 — Rear Detail", tag: "Exterior" },
  { src: "/images/work/bmw-m3-wheel-detail.jpg", alt: "Close-up of a cleaned BMW M3 wheel and brake caliper after wheel detailing", label: "Wheel & Brake Detail", tag: "Exterior" },
  { src: "/images/work/bmw-m3-foam-hand-wash.jpg", alt: "White BMW M3 covered in foam during a mobile hand car wash", label: "Foam Wash in Progress", tag: "Exterior" },
  { src: "/images/work/bmw-m3-hand-drying.jpg", alt: "BMW M3 being hand dried after a mobile hand wash", label: "Hand Drying Process", tag: "Exterior" },
  { src: "/images/work/audi-q3-interior-detail.jpg", alt: "Clean Audi Q3 front interior after a mobile interior detail", label: "Audi Q3 — Interior Clean", tag: "Interior" },
  { src: "/images/work/audi-q3-rear-seats-interior-detail.jpg", alt: "Clean rear seats of an Audi Q3 after an interior detail", label: "Audi Q3 — Rear Seats", tag: "Interior" },
  { src: "/images/work/audi-q3-leather-seats-detail.jpg", alt: "Audi Q3 front leather seats cleaned and conditioned during an interior detail", label: "Audi Q3 — Leather Seats", tag: "Interior" },
  { src: "/images/work/audi-q3-ceramic-coating.jpg", alt: "Gray Audi Q3 with glossy paint after a ceramic coating", label: "Audi Q3 — Exterior", tag: "Ceramic Coating" },
  { src: "/images/work/audi-q3-paint-polish-rear.jpg", alt: "Rear three-quarter view of an Audi Q3 showing glossy, polished and coated paint", label: "Audi Q3 — Rear Angle", tag: "Ceramic Coating" },
  { src: "/images/work/audi-q3-wheel-cleaning.jpg", alt: "Audi Q3 wheel after a deep wheel and tire cleaning", label: "Audi Q3 — Wheel Detail", tag: "Exterior" },
  { src: "/images/work/vw-gti-interior-detail.jpg", alt: "Volkswagen GTI interior after an interior detail, with clean floors and leather seats", label: "VW GTI — Interior After", tag: "Interior" },
  { src: "/images/work/vw-gti-rear-seats-detail.jpg", alt: "Clean Volkswagen GTI rear seats after interior detailing", label: "VW GTI — Rear Seats", tag: "Interior" },
  { src: "/images/work/vw-gti-dashboard-detail.jpg", alt: "Volkswagen GTI dashboard and center console after interior detailing", label: "VW GTI — Dashboard", tag: "Interior" },
  { src: "/images/work/vw-gti-engine-bay-detail.jpg", alt: "Volkswagen GTI engine bay after an engine bay detail", label: "Engine Bay Detail", tag: "Full Detail" },
  { src: "/images/work/infiniti-q50-exterior-detail.jpg", alt: "Gray Infiniti Q50 with clean, glossy paint after a full exterior detail", label: "Infiniti Q50 — After", tag: "Full Detail" },
  { src: "/images/work/honda-pilot-interior-detail.jpg", alt: "Honda Pilot interior with clean gray leather seats and carpets after an interior detail", label: "Honda Pilot — Interior", tag: "Interior" },
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
              Every photo is from an actual Refined Auto Detailing client — no stock images. Browse real interior detailing, exterior hand washes, full detail packages and ceramic coating results from vehicles we&apos;ve detailed at our clients&apos; homes and workplaces across Snohomish and King County.
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
