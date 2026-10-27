import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MapPin, Phone, Shield, Star } from "lucide-react";
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
  const description = cityDescription(area.city, area.neighborhoods);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `Mobile car detailing in ${area.city}, WA` }],
    },
  };
}

/** Names the city's own neighborhoods so each page's search snippet is distinct, kept under ~160 chars. */
function cityDescription(city: string, neighborhoods: string[]) {
  const tail = `Interior, exterior & ceramic coating at your home. ${COMPANY.google.rating}★ on Google — free quote.`;
  // Neighborhood names that repeat the city ("Downtown Marysville") read awkwardly in a snippet.
  const local = neighborhoods.filter((n) => !n.includes(city));
  for (const count of [2, 1]) {
    if (local.length < count) continue;
    const text = `Mobile car detailing in ${city}, WA — ${local.slice(0, count).join(" & ")} and nearby. ${tail}`;
    if (text.length <= 160 || count === 1) return text;
  }
  return `Mobile car detailing in ${city}, WA. ${tail}`;
}

const HIGHLIGHTS = [
  "We come to your home",
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
      a: `Yes. We detail vehicles at homes throughout ${city} (${zips.join(", ")}), including ${neighborhoods
        .slice(0, 4)
        .join(", ")}. We bring the tools and products; you just need an outdoor water spigot and an electrical outlet we can reach.`,
    },
    {
      q: `How much does car detailing cost in ${city}?`,
      a: `Our Premium Exterior Wash starts at ${detail.startingPrice}, the Essential Detail Package starts at ${full.startingPrice}, and pricing depends on vehicle size and condition. Contact us to confirm availability and pricing for your address in ${city}.`,
    },
    {
      q: `Do you do ceramic coating and paint correction in ${city}?`,
      a: `Yes. We offer 1, 3 and 5-year ceramic coatings starting at ${ceramic.startingPrice}, applied at your location in ${city}. Paint correction is quoted after we inspect the paint.`,
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
  const nearby = area.nearby.map((slug) => getArea(slug)!);
  const faqs = cityFaqs(area.city, area.zips, area.neighborhoods);
  // Wikipedia's article for the city tells search engines exactly which place this page serves.
  const citySameAs = `https://en.wikipedia.org/wiki/${area.city.replace(/ /g, "_")},_Washington`;

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
            Mobile Auto Detailing in <span className="text-gradient-gold">{area.city}, WA</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-8">{area.intro}</p>

          <div className="flex flex-wrap gap-4 mb-6">
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
          <a
            href={COMPANY.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors mb-14"
          >
            <span className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
              ))}
            </span>
            <span>
              <strong className="text-white">{COMPANY.google.rating}</strong> on Google ·{" "}
              {COMPANY.google.reviewCount} reviews
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-14">
            <div className="md:col-span-3 space-y-4 text-white/70 text-lg leading-relaxed">
              {area.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="md:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={area.photo.src}
                alt={area.photo.alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
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
              Also Serving Near {area.city}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {nearby.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="block glass rounded-xl p-5 h-full hover:border-gold-500/30 transition-all"
                  >
                    <span className="block text-white font-semibold mb-1">Mobile Detailing in {a.city}, WA</span>
                    <span className="block text-white/60 text-sm leading-relaxed">{a.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-semibold transition-colors"
            >
              See all {AREAS.length} service areas <ArrowRight size={14} aria-hidden="true" />
            </Link>
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
            sameAs: citySameAs,
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
          mentions: { "@type": "City", name: `${area.city}, WA`, sameAs: citySameAs },
          primaryImageOfPage: `${SITE_URL}${area.photo.src}`,
        }}
      />
    </div>
  );
}
