import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqList from "@/components/sections/FaqList";
import JsonLd from "@/components/seo/JsonLd";
import { AREAS } from "@/lib/areas";
import { BUSINESS_ID, faqJsonLd } from "@/lib/seo";
import { getService, VEHICLE_LABELS, type Service } from "@/lib/services";
import { COMPANY, SITE_URL } from "@/lib/utils";

export default function ServicePage({ service }: { service: Service }) {
  const related = service.related.map(getService).filter((s): s is Service => Boolean(s));
  const url = `${SITE_URL}/services/${service.slug}`;

  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { name: "Services", path: "/services" },
              ...(service.parent ? [service.parent] : []),
              { name: service.name, path: `/services/${service.slug}` },
            ]}
          />

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">{service.eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">{service.h1}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{service.intro}</p>

              {service.pricing && service.pricing.length === 1 ? (
                <dl className="grid grid-cols-3 gap-3 mb-8">
                  {(["sedan", "suv", "large"] as const).map((size, i) => (
                    <div
                      key={size}
                      className={`${i === 0 ? "glass-gold" : "glass"} rounded-xl px-4 py-3 flex flex-col-reverse`}
                    >
                      <dt className="text-white/60 text-xs mt-1">{VEHICLE_LABELS[size]}</dt>
                      <dd className={`font-black text-xl ${i === 0 ? "text-gold-500" : "text-white"}`}>
                        {service.pricing![0][size]}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="glass-gold rounded-xl px-5 py-3 inline-block mb-8">
                  <p className="text-gold-500 font-black text-2xl">
                    {service.lowPrice ? `From ${service.startingPrice}` : "Free quote"}
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    {service.lowPrice ? "Starting price" : "Priced after inspection"}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <a
                  href={COMPANY.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
                >
                  Book {service.name}
                  <ArrowRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 glass border border-white/10 hover:border-gold-500/40 text-white px-8 py-4 rounded-full transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* What's included */}
          <section aria-labelledby="included" className="glass rounded-3xl p-8 sm:p-10 mb-12">
            <h2 id="included" className="text-3xl font-black text-white mb-8">
              What&apos;s Included
            </h2>
            <div className={`grid grid-cols-1 ${service.includes.length > 1 ? "md:grid-cols-2" : ""} gap-10`}>
              {service.includes.map((group, gi) => (
                <div key={group.title ?? gi}>
                  {group.title && (
                    <h3 className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-5">{group.title}</h3>
                  )}
                  <ul
                    className={`grid grid-cols-1 ${service.includes.length === 1 ? "sm:grid-cols-2" : ""} gap-3`}
                  >
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                        <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {service.note && <p className="text-white/60 text-sm mt-8">{service.note}</p>}
          </section>

          {/* Pricing */}
          {service.pricing && service.pricing.length > 1 && (
            <section aria-labelledby="pricing" className="mb-12">
              <h2 id="pricing" className="text-3xl font-black text-white mb-8">
                {service.pricingTitle ?? "Pricing"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.pricing.map((row) => (
                  <div
                    key={row.label}
                    className={`glass rounded-3xl p-8 border relative ${
                      row.popular ? "border-gold-500/40" : "border-white/5"
                    }`}
                  >
                    {row.popular && (
                      <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                        Most Popular
                      </p>
                    )}
                    <h3 className="text-white font-black text-lg mb-2">{row.label}</h3>
                    {row.description && <p className="text-white/60 text-sm mb-6">{row.description}</p>}
                    <dl className="space-y-2">
                      {(["sedan", "suv", "large"] as const).map((size) => (
                        <div key={size} className="flex justify-between text-sm">
                          <dt className="text-white/60">{VEHICLE_LABELS[size]}</dt>
                          <dd className="text-gold-500 font-bold">{row[size]}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quote-only packages */}
          {service.packages && (
            <section aria-labelledby="packages" className="mb-12">
              <h2 id="packages" className="text-3xl font-black text-white mb-2">
                {service.pricingTitle ?? "Packages"}
              </h2>
              <p className="text-white/70 mb-8">
                Starting from {service.startingPrice}. Every package is quoted for your vehicle&apos;s size and paint
                condition.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg) => (
                  <li
                    key={pkg.label}
                    className={`glass rounded-3xl p-8 border relative flex flex-col ${
                      pkg.popular ? "border-gold-500/40" : "border-white/5"
                    }`}
                  >
                    {pkg.popular && (
                      <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                        Most Popular
                      </p>
                    )}
                    <h3 className="text-white font-black text-lg mb-2">{pkg.label}</h3>
                    <p className="text-white/70 text-sm mb-6">{pkg.description}</p>
                    <Link
                      href="/quote"
                      className="mt-auto inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-bold text-sm"
                    >
                      Get a quote<span className="sr-only"> for the {pkg.label}</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Add-ons, grouped so each price table stays short */}
          {service.addons && (
            <section aria-labelledby="addons" className="mb-12">
              <h2 id="addons" className="text-3xl font-black text-white mb-2">
                Add-On Services
              </h2>
              <p className="text-white/70 mb-8">
                Optional extras you can add to any ceramic coating package.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {service.addons.map((group) => (
                  <section
                    key={group.title}
                    aria-labelledby={`addon-${group.title}`}
                    className="glass rounded-3xl p-6 sm:p-8 flex flex-col"
                  >
                    <h3 id={`addon-${group.title}`} className="text-xl font-black text-white mb-2">
                      {group.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">{group.description}</p>
                    <table className="w-full text-sm mt-auto">
                      <caption className="sr-only">{group.title} prices</caption>
                      <thead>
                        <tr className="border-b border-white/10">
                          <th scope="col" className="text-left font-medium text-white/60 pb-2">
                            Option
                          </th>
                          {group.columns.map((c) => (
                            <th key={c} scope="col" className="text-right font-medium text-white/60 pb-2 pl-3">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row) => (
                          <tr key={row.label} className="border-b border-white/5 last:border-0">
                            <th scope="row" className="text-left font-normal text-white/85 py-3">
                              {row.label}
                            </th>
                            {row.prices.map((price, i) => (
                              <td key={group.columns[i]} className="text-right text-gold-500 font-bold py-3 pl-3">
                                {price}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>
                ))}
              </div>
            </section>
          )}

          {/* About + ideal for */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            <section aria-labelledby="about-service" className="lg:col-span-2">
              <h2 id="about-service" className="text-3xl font-black text-white mb-6">
                {service.about.heading}
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                {service.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
            <aside aria-labelledby="ideal-for" className="glass rounded-2xl p-8 self-start">
              <h2 id="ideal-for" className="text-white font-bold text-xl mb-5">
                Ideal For
              </h2>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* FAQ */}
          <section aria-labelledby="service-faq" className="max-w-3xl mb-16">
            <h2 id="service-faq" className="text-3xl font-black text-white mb-6">
              {service.name} FAQ
            </h2>
            <FaqList faqs={service.faqs} />
          </section>

          {/* Service areas — internal links to every city page */}
          <section aria-labelledby="service-areas" className="mb-16">
            <h2 id="service-areas" className="text-3xl font-black text-white mb-3">
              Mobile {service.name} Near You
            </h2>
            <p className="text-white/70 mb-6">
              We perform {service.name.toLowerCase()} at your home or office throughout Snohomish and King County,
              including:
            </p>
            <ul className="flex flex-wrap gap-3">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-white/80 hover:text-gold-500 hover:border-gold-500/30 transition-colors"
                  >
                    <MapPin size={12} className="text-gold-500" aria-hidden="true" />
                    {area.city}, WA
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section aria-labelledby="related">
              <h2 id="related" className="text-3xl font-black text-white mb-6">
                Related Services
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="group flex h-full flex-col justify-between glass rounded-2xl p-6 hover:border-gold-500/30 transition-all"
                    >
                      <span className="text-white font-bold text-lg mb-2">{r.name}</span>
                      <span className="flex items-center justify-between text-sm">
                        <span className="text-gold-500 font-semibold">
                          {r.lowPrice ? `From ${r.startingPrice}` : "Free quote"}
                        </span>
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="text-white/60 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url,
          image: `${SITE_URL}${encodeURI(service.image.src)}`,
          provider: { "@id": BUSINESS_ID },
          areaServed: AREAS.map((a) => ({ "@type": "City", name: `${a.city}, WA` })),
          ...(service.lowPrice && {
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: service.lowPrice,
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: service.lowPrice,
                priceCurrency: "USD",
              },
            },
          }),
        }}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
    </div>
  );
}
