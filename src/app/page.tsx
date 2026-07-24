import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import Process from "@/components/home/Process";
import VehicleExplorer from "@/components/interactive/VehicleExplorer";
import QuoteBuilder from "@/components/interactive/QuoteBuilder";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Refined Auto Detailing | Premium Mobile Detailing — Snohomish County, WA",
  description:
    "Premium mobile auto detailing serving Snohomish County, WA. Interior detailing, exterior detailing, ceramic coating & paint correction. We come to you. Book your free quote today.",
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
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  );
}
