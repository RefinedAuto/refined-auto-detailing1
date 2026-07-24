import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Droplets, Star, CheckCircle, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Detailing Services | Refined Auto Detailing — Snohomish County WA",
  description:
    "View all mobile auto detailing services in Snohomish County & King County, WA. Premium exterior wash, basic detail, essential & elite full detail, maintenance plans, and ceramic coating. We come to you.",
};

const services = [
  {
    icon: Droplets,
    title: "Premium Exterior Wash",
    tagline: "Bright, refreshed appearance",
    description:
      "A thorough exterior clean that goes far beyond a drive-through car wash. We hand wash your entire vehicle using the two-bucket method, clean all wheels and inner rims, dress the tires, and wipe down all door edges and jambs.",
    includes: [
      "Wheels, tires & inner rims cleaned",
      "Two-bucket hand wash method",
      "Soft microfiber towel drying",
      "Tire dressing application",
      "Door edges & jambs wiped down",
    ],
    note: "Does not treat embedded contaminants (tree sap, tar) — see Elite Detail for full decontamination.",
    pricing: { sedan: "$80+", suv: "$100+", large: "$120+" },
    href: "/services/exterior-detailing",
  },
  {
    icon: Sparkles,
    title: "Basic Interior Detail",
    tagline: "Interior refresh & protection",
    description:
      "A focused interior service that leaves your cabin looking and smelling clean. We deep vacuum every surface, blow out all crevices with compressed air, clean interior windows, and clean & protect all leather and plastics.",
    includes: [
      "Deep vacuum — all surfaces & crevices",
      "Compressed air blow-out",
      "Interior windows cleaned",
      "Clean & protect leather & plastics",
    ],
    note: "Heavy pet hair: +$50 surcharge.",
    pricing: { sedan: "$100+", suv: "$120+", large: "$140+" },
    href: "/services/interior-detailing",
  },
  {
    icon: Star,
    title: "Essential Full Detail",
    tagline: "Maintenance-focused inside & out",
    description:
      "Our most popular maintenance package — a full refresh of your vehicle's interior and exterior. Perfect for keeping a well-maintained vehicle looking its best on a regular schedule.",
    includes: [
      "Wheels, tires & inner rims cleaned",
      "Two-bucket hand wash & microfiber dry",
      "Tire dressing & door jambs",
      "Light interior vacuum",
      "Surface wipe-down",
      "Windows & mirrors cleaned",
    ],
    note: "Heavy pet hair: +$50. Does not address embedded paint contaminants.",
    pricing: { sedan: "$175+", suv: "$210+", large: "$250+" },
    href: "/services/full-detail",
    featured: true,
  },
  {
    icon: Shield,
    title: "Elite Full Detail",
    tagline: "The most thorough detail we offer",
    description:
      "An extensive interior and exterior deep clean that addresses every crack, crevice, and surface on your vehicle. Includes full exterior decontamination with iron remover and clay bar, plus interior plastic scrubbing and conditioning — and a ceramic sealant to protect the finish.",
    includes: [
      "Wheel, tire & inner rim cleaning",
      "Two-bucket hand wash + strip wash",
      "Iron decontamination spray",
      "Clay bar treatment",
      "Ceramic sealant application",
      "Tire dressing & door jambs",
      "Full vacuum & plastic/vinyl scrub",
      "Plastic & vinyl conditioning",
      "Windows & mirrors cleaned",
    ],
    note: "Heavy pet hair: +$50. Required first step for Maintenance Plans.",
    pricing: { sedan: "$300+", suv: "$350+", large: "$400+" },
    href: "/services/full-detail",
  },
  {
    icon: RefreshCw,
    title: "Maintenance Plans",
    tagline: "Keep your vehicle looking its best year-round",
    description:
      "Stay on top of your vehicle's appearance with our bi-weekly or monthly maintenance service. Must complete the Elite Full Detail first to establish a clean baseline.",
    includes: [
      "Bi-weekly or monthly scheduling",
      "Essential Detail Package performed each visit",
      "Discounted recurring rates",
      "Elite Detail required to start (sets the baseline)",
    ],
    note: "Bi-weekly: Sedan $140+ / SUV $160+ / Large $210+   |   Monthly: Sedan $150+ / SUV $170+ / Large $220+",
    pricing: { sedan: "$140+", suv: "$160+", large: "$210+" },
    href: "/services/full-detail",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    tagline: "1–4 year paint protection",
    description:
      "Professional ceramic coating applied over a three-step decontamination wash and paint enhancement polish. Provides hydrophobic, UV-resistant protection that keeps your vehicle cleaner longer and looking showroom-fresh.",
    includes: [
      "Three-step decontamination wash",
      "Paint enhancement polish",
      "Professional ceramic coating application",
      "1-year, 3-year, or 4-year coating tiers",
      "Optional: window, wheel & leather coating",
    ],
    pricing: { sedan: "$400+", suv: "$500+", large: "$600+" },
    href: "/services/ceramic-coating",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Services</span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
              Every Detail, <span className="text-gradient-gold">Perfected</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Professional mobile auto detailing in Snohomish County & King County. All services performed at your location.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`glass rounded-3xl p-8 lg:p-12 relative overflow-hidden hover:border-gold-500/30 transition-all duration-300 border ${
                    service.featured ? "border-gold-500/30" : "border-white/5"
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-6 right-6 bg-gold-500 text-black text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-gold-500" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black text-white">{service.title}</h2>
                          <p className="text-gold-500/80 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      <p className="text-white/60 text-base leading-relaxed mb-6">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                            <CheckCircle size={13} className="text-gold-500 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      {service.note && (
                        <p className="text-white/30 text-xs italic">{service.note}</p>
                      )}
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="glass rounded-2xl p-5 mb-6">
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-medium">Starting Price</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">Sedan / Hatchback</span>
                            <span className="text-gold-500 font-bold">{service.pricing.sedan}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">SUV</span>
                            <span className="text-gold-500 font-bold">{service.pricing.suv}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">Full-Size SUV / Truck</span>
                            <span className="text-gold-500 font-bold">{service.pricing.large}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <a
                          href="https://refinedautodetailing.setmore.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl text-center transition-all"
                        >
                          Book This Service
                        </a>
                        <Link
                          href={service.href}
                          className="flex items-center justify-center gap-2 text-white/60 hover:text-gold-500 text-sm transition-colors"
                        >
                          Full service details <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
