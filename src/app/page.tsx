import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import Process from "@/components/home/Process";
import VehicleExplorer from "@/components/interactive/VehicleExplorer";
import QuoteBuilder from "@/components/interactive/QuoteBuilder";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: { absolute: "Mobile Car Detailing in Snohomish County, WA | Refined Auto Detailing" },
  description:
    "Mobile car detailing in Marysville, Everett, Lynnwood & all of Snohomish County, WA. Interior & exterior detailing, paint correction and ceramic coating at your home or office. Free quote.",
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
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  );
}
