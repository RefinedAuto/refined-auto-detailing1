import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import Process from "@/components/home/Process";
import VehicleExplorer from "@/components/interactive/VehicleExplorer";
import QuoteBuilder from "@/components/interactive/QuoteBuilder";
import Reviews from "@/components/home/Reviews";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: { absolute: "Mobile Car Detailing & Ceramic Coating | Snohomish & King County, WA" },
  description:
    "5.0★ mobile car detailing in Lynnwood, Everett, Marysville, Edmonds, Shoreline, Kirkland & Redmond, WA. Ceramic coating, paint correction, interior & exterior detailing at your home. Free quote.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <BeforeAfterSlider />
      <Process />
      <VehicleExplorer />
      <QuoteBuilder />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  );
}
