import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { AREAS, getArea } from "@/lib/areas";
import { BUSINESS_ID } from "@/lib/seo";
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
  const title = `Mobile Car Detailing in ${area.city}, WA`;
  const description = `Mobile car detailing in ${area.city}, WA — we come to your home or office. Interior & exterior detailing, full details, paint correction and ceramic coating. Call ${COMPANY.phone}.`;
  return {
    title: { absolute: `${title} | Refined Auto Detailing` },
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

export default async function AreaPage({ params }: { params: Promise<{ city: string }> }) {
  const area = getArea((await params).city);
  if (!area) notFound();
  const nearby = AREAS.filter((a) => a.slug !== area.slug);

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
            {area.city}, WA · {area.zips.join(", ")}
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
