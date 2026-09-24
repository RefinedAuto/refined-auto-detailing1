import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { SERVICES, VEHICLE_LABELS, type Service } from "@/lib/services";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Mobile Auto Detailing Services & Prices | Snohomish County, WA" },
  description:
    "All mobile auto detailing services and prices in Snohomish County, WA: exterior wash, interior detail, full details, maintenance plans, paint correction, ceramic coating and add-ons.",
  alternates: { canonical: "/services" },
};

const CATEGORIES: { title: string; category: Service["category"]; blurb: string }[] = [
  {
    title: "Detailing Packages",
    category: "Detailing Package",
    blurb: "Inside, outside or both — performed at your home or office.",
  },
  {
    title: "Paint Correction & Protection",
    category: "Paint & Protection",
    blurb: "Restore gloss and protect your paint for the long term.",
  },
  {
    title: "Add-On Services",
    category: "Add-On",
    blurb: "Add these to any detail appointment.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const row = service.pricing?.[0];
  return (
    <li className="glass rounded-3xl p-8 border border-white/5 hover:border-gold-500/30 transition-all flex flex-col">
      <h3 className="text-2xl font-black text-white mb-2">
        <Link href={`/services/${service.slug}`} className="hover:text-gold-500 transition-colors">
          {service.name}
        </Link>
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-5">{service.intro}</p>
      <ul className="space-y-2 mb-6">
        {service.includes
          .flatMap((g) => g.items)
          .slice(0, 4)
          .map((item) => (
            <li key={item} className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={13} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
              {item}
            </li>
          ))}
      </ul>
      <div className="mt-auto">
        {row && service.pricing!.length === 1 ? (
          <dl className="glass rounded-2xl p-4 mb-5 space-y-1.5">
            {(["sedan", "suv", "large"] as const).map((size) => (
              <div key={size} className="flex justify-between text-sm">
                <dt className="text-white/60">{VEHICLE_LABELS[size]}</dt>
                <dd className="text-gold-500 font-bold">{row[size]}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-gold-500 font-bold mb-5">
            {service.lowPrice ? `From ${service.startingPrice}` : "Free quote after inspection"}
          </p>
        )}
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold py-3.5 rounded-xl transition-all"
        >
          View {service.name} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">Services & Pricing</p>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
              Mobile Auto Detailing Services in <span className="text-gradient-gold">Snohomish County, WA</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Every service is performed at your location. Prices are starting prices by vehicle size — the final
              price depends on the vehicle&apos;s condition and is confirmed before any work begins.
            </p>
          </div>

          {CATEGORIES.map(({ title, category, blurb }) => (
            <section key={category} aria-labelledby={`cat-${category}`} className="mb-16">
              <h2 id={`cat-${category}`} className="text-3xl font-black text-white mb-2">
                {title}
              </h2>
              <p className="text-white/60 mb-8">{blurb}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.filter((s) => s.category === category).map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </ul>
            </section>
          ))}

          <div className="glass-gold rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-black text-white mb-3">Not Sure Which Service You Need?</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Build an instant estimate or call us — we&apos;ll recommend the right package for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="glass border border-white/10 hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all"
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
