import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MapPin, Phone, Shield } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { AREAS, getArea } from "@/lib/areas";
import FaqList from "@/components/sections/FaqList";
import { BUSINESS_ID, faqJsonLd } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { COMPANY, SITE_URL } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const area = getArea((await params).city);
  if (!area) return {};
  const path = `/service-areas/${area.slug}`;
  const title = `Mobile Car Detailing & Ceramic Coating in ${area.city}, WA`;
  const description = `Mobile car detailing in ${area.city}, WA (${area.zips.join(", ")}). Interior & exterior auto detailing, paint correction and ceramic coating at your home or office. ${COMPANY.google.rating}★ on Google. Call ${COMPANY.phone}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}

const HIGHLIGHTS = [
  "We come to your home, office or apartment",
  "Transparent, size-based pricing",
  "Professional-grade products and tools",
  "Satisfaction guarantee — tell us within 24 hours",
  `Open ${COMPANY.hours}`,
];

function cityFaqs(city: string, zips: string[], neighborhoods: string[]) {
  const detail = SERVICES.find((s) => s.slug === "exterior-detailing")!;
  const full = SERVICES.find((s) => s.slug === "full-detail")!;
  const ceramic = SERVICES.find((s) => s.slug === "ceramic-coating")!;
  return [
    {
      q: `Do you offer mobile car detailing in ${city}, WA?`,
      a: `Yes. We detail vehicles at homes and workplaces throughout ${city} (${zips.join(", ")}), including ${neighborhoods
        .slice(0, 4)
        .join(", ")}. We bring the equipment — you just tell us where the car is parked.`,
    },
    {
      q: `How much does car detailing cost in ${city}?`,
      a: `Our Premium Exterior Wash starts at ${detail.startingPrice}, the Essential Full Detail starts at ${full.startingPrice}, and pricing depends on vehicle size and condition. Contact us to confirm availability and pricing for your address in ${city}.`,
    },
    {
      q: `Do you do ceramic coating and paint correction in ${city}?`,
      a: `Yes. We offer 1, 3 and 4-year ceramic coatings starting at ${ceramic.startingPrice}, applied at your location in ${city}. Paint correction is quoted after we inspect the paint.`,
    },
    {
      q: `What are your hours in ${city}?`,
      a: `We schedule appointments ${COMPANY.hours}. We're closed on Sundays.`,
    },
  ];
}

export default async function AreaPage({ params }: { params: Promise<{ city: string }> }) {
  const area = getArea((await params).city);
  if (!area) notFound();
  const nearby = AREAS.filter((a) => a.slug !== area.slug);
  const faqs = cityFaqs(area.city, area.zips, area.neighborhoods);

  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Service Areas", path: "/service-areas" },
              { name: `${area.city}, WA`, path: `/service-areas/${area.slug}` },
            ]}
          />

          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {area.city}, WA · {area.county} County · {area.zips.join(", ")}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Mobile Car Detailing in <span className="text-gradient-gold">{area.city}, WA</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8">{area.intro}</p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/quote"
              className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold flex items-center gap-2"
            >
              Get a Free Quote in {area.city} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all flex items-center gap-2"
            >
              <Phone size={16} className="text-gold-500" aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </div>

          <div className="space-y-4 text-white/70 text-lg leading-relaxed mb-14 max-w-3xl">
            {area.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <section aria-labelledby="why" className="glass rounded-2xl p-8">
              <h2 id="why" className="text-white font-bold text-xl mb-5">
                Why {area.city} Drivers Choose Refined
              </h2>
              <ul className="space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="neighborhoods" className="glass rounded-2xl p-8">
              <h2 id="neighborhoods" className="text-white font-bold text-xl mb-5">
                {area.city} Neighborhoods We Serve
              </h2>
              <ul className="grid grid-cols-2 gap-2">
                {area.neighborhoods.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin size={10} className="text-gold-500 shrink-0" aria-hidden="true" />
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section aria-labelledby="protection" className="glass-gold rounded-3xl p-8 sm:p-10 mb-14">
            <h2 id="protection" className="flex items-center gap-3 text-2xl sm:text-3xl font-black text-white mb-4">
              <Shield size={24} className="text-gold-500 shrink-0" aria-hidden="true" />
              Ceramic Coating &amp; Paint Correction in {area.city}
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">{area.protection}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/ceramic-coating"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-3 rounded-full transition-all"
              >
                Ceramic Coating in {area.city} <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/services/paint-correction"
                className="inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-gold-500/40 text-white font-bold px-6 py-3 rounded-full transition-all"
              >
                Paint Correction in {area.city} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section aria-labelledby="services" className="mb-14">
            <h2 id="services" className="text-3xl font-black text-white mb-6">
              Detailing Services in {area.city}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between glass rounded-xl p-5 hover:border-gold-500/30 transition-all"
                  >
                    <span className="text-white font-semibold">{s.name}</span>
                    <span className="text-gold-500 text-sm">
                      {s.lowPrice ? `From ${s.startingPrice}` : "Free quote"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="city-faq" className="max-w-3xl mb-14">
            <h2 id="city-faq" className="text-3xl font-black text-white mb-6">
              {area.city} Car Detailing FAQ
            </h2>
            <FaqList faqs={faqs} />
          </section>

          <section aria-labelledby="nearby">
            <h2 id="nearby" className="text-2xl font-black text-white mb-4">
              Also Serving Nearby
            </h2>
            <ul className="flex flex-wrap gap-3">
              {nearby.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="inline-block glass rounded-full px-4 py-2 text-sm text-white/80 hover:text-gold-500 transition-colors"
                  >
                    {a.city}, WA
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Mobile Car Detailing in ${area.city}, WA`,
          serviceType: "Mobile auto detailing",
          provider: { "@id": BUSINESS_ID },
          areaServed: {
            "@type": "City",
            name: `${area.city}, WA`,
            containedInPlace: { "@type": "AdministrativeArea", name: `${area.county} County, WA` },
          },
          url: `${SITE_URL}/service-areas/${area.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/service-areas/${area.slug}`,
          name: `Mobile Car Detailing in ${area.city}, WA`,
          about: { "@id": BUSINESS_ID },
          mentions: { "@type": "City", name: `${area.city}, WA` },
        }}
      />
    </div>
  );
}
