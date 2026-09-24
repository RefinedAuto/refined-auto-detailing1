import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { DETAIL_PACKAGES_HUB, getService, VEHICLE_LABELS, type Service } from "@/lib/services";
import { COMPANY, SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Car Detail Packages — Essential & Elite | Snohomish & King County, WA" },
  description:
    "Compare our mobile car detail packages: the Essential Detail Package from $175 and the Elite Full Detail from $300, performed at your home in Snohomish & King County, WA.",
  alternates: { canonical: DETAIL_PACKAGES_HUB.path },
};

const essential = getService("full-detail")!;
const elite = getService("elite-full-detail")!;
const PACKAGES: Service[] = [essential, elite];

type Cell = boolean | string;
const COMPARISON: { group: string; rows: { feature: string; essential: Cell; elite: Cell }[] }[] = [
  {
    group: "Exterior",
    rows: [
      { feature: "Wheels, tires & inner rims cleaned", essential: true, elite: true },
      { feature: "Two-bucket hand wash", essential: true, elite: true },
      { feature: "Strip wash", essential: false, elite: true },
      { feature: "Iron decontamination", essential: false, elite: true },
      { feature: "Clay bar treatment", essential: false, elite: true },
      { feature: "Ceramic sealant", essential: false, elite: true },
      { feature: "Microfiber drying & tire dressing", essential: true, elite: true },
      { feature: "Door jambs wiped down", essential: true, elite: true },
    ],
  },
  {
    group: "Interior",
    rows: [
      { feature: "Vacuum", essential: "Light", elite: "Full" },
      { feature: "Surface wipe-down", essential: true, elite: true },
      { feature: "Plastic & vinyl scrubbing", essential: false, elite: true },
      { feature: "Plastic & vinyl conditioning", essential: false, elite: true },
      { feature: "Windows & mirrors cleaned", essential: true, elite: true },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") return <span className="text-white font-semibold">{value}</span>;
  return value ? (
    <>
      <Check size={18} className="text-gold-500 mx-auto" aria-hidden="true" />
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <Minus size={18} className="text-white/50 mx-auto" aria-hidden="true" />
      <span className="sr-only">Not included</span>
    </>
  );
}

export default function DetailPackagesPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }, DETAIL_PACKAGES_HUB]} />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">Detail Packages</p>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
              Car Detail Packages in <span className="text-gradient-gold">Snohomish &amp; King County</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Complete inside-and-out detailing at your home or office. Choose the Essential Detail Package for regular
              upkeep, or the Elite Full Detail for our deepest clean with paint decontamination and protection.
            </p>
          </div>

          {/* Package cards */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
            {PACKAGES.map((pkg) => {
              const popular = pkg.slug === "elite-full-detail";
              const row = pkg.pricing![0];
              return (
                <li
                  key={pkg.slug}
                  className={`glass rounded-3xl p-8 sm:p-10 border relative flex flex-col ${
                    popular ? "border-gold-500/40" : "border-white/5"
                  }`}
                >
                  {popular && (
                    <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </p>
                  )}
                  <h2 className="text-3xl font-black text-white mb-3">{pkg.name}</h2>
                  <p className="text-white/70 leading-relaxed mb-6">{pkg.intro}</p>
                  <dl className="glass rounded-2xl p-5 mb-6 space-y-2">
                    {(["sedan", "suv", "large"] as const).map((size) => (
                      <div key={size} className="flex justify-between text-sm">
                        <dt className="text-white/70">{VEHICLE_LABELS[size]}</dt>
                        <dd className="text-gold-500 font-bold">{row[size]}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/services/${pkg.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-3.5 rounded-full transition-all"
                    >
                      View {pkg.name} <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <a
                      href={COMPANY.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center glass border border-white/10 hover:border-gold-500/40 text-white font-bold px-6 py-3.5 rounded-full transition-all"
                    >
                      Book Now<span className="sr-only"> — {pkg.name} (opens in a new tab)</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Comparison */}
          <section aria-labelledby="compare" className="max-w-4xl mx-auto mb-16">
            <h2 id="compare" className="text-3xl font-black text-white mb-8 text-center">
              Compare Packages
            </h2>
            <div className="glass rounded-3xl overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">Features included in the Essential Detail Package and Elite Full Detail</caption>
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left text-white/70 font-medium p-4 sm:p-5">
                      Feature
                    </th>
                    <th scope="col" className="text-white font-bold p-4 sm:p-5 w-28 sm:w-40">
                      Essential
                    </th>
                    <th scope="col" className="text-gold-500 font-bold p-4 sm:p-5 w-28 sm:w-40">
                      Elite
                    </th>
                  </tr>
                </thead>
                {COMPARISON.map(({ group, rows }) => (
                  <tbody key={group}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="text-left text-gold-500 text-xs tracking-widest uppercase font-bold px-4 sm:px-5 pt-6 pb-2"
                      >
                        {group}
                      </th>
                    </tr>
                    {rows.map((r) => (
                      <tr key={r.feature} className="border-t border-white/5">
                        <th scope="row" className="text-left text-white/80 font-normal p-4 sm:p-5">
                          {r.feature}
                        </th>
                        <td className="text-center p-4 sm:p-5">
                          <CellValue value={r.essential} />
                        </td>
                        <td className="text-center p-4 sm:p-5">
                          <CellValue value={r.elite} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
                <tbody>
                  <tr className="border-t border-white/10">
                    <th scope="row" className="text-left text-white font-bold p-4 sm:p-5">
                      Starting price
                    </th>
                    <td className="text-center text-white font-bold p-4 sm:p-5">From {essential.startingPrice}</td>
                    <td className="text-center text-gold-500 font-bold p-4 sm:p-5">From {elite.startingPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm mt-4 text-center">
              Heavy pet hair is a +$50 upcharge on either package. Final price depends on vehicle size and condition.
            </p>
          </section>

          {/* Maintenance plans tie-in */}
          <div className="glass-gold rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-3">Want It to Stay This Clean?</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Start with the Elite Full Detail, then keep your vehicle looking its best with a bi-weekly or monthly
              Maintenance Plan at a discounted recurring rate.
            </p>
            <Link
              href="/services/maintenance-plans"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-bold"
            >
              View Maintenance Plans <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Car Detail Packages",
          itemListElement: PACKAGES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/services/${p.slug}`,
            name: p.name,
          })),
        }}
      />
    </div>
  );
}
