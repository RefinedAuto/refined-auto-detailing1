"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Sparkles, Shield, Zap, Droplets, Star, Wand2 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Ceramic Coating",
    description:
      "Professional ceramic coating with 1, 3, or 4-year protection tiers. Includes full decontamination wash and paint enhancement polish before every application.",
    features: ["1, 3, or 4-year tiers", "Full decontamination prep", "Paint enhancement included", "Window & wheel coating add-ons"],
    price: "From $600",
    href: "/services/ceramic-coating",
    accent: "from-gold-500/20 to-transparent",
  },
  {
    icon: Wand2,
    title: "Paint Correction",
    description:
      "Machine polishing that removes or reduces swirl marks, light scratches and oxidation to restore deep gloss — the ideal prep for a ceramic coating.",
    features: ["Swirl & scratch reduction", "Oxidation removal", "Full decontamination prep", "Quoted after inspection"],
    price: "Free quote",
    href: "/services/paint-correction",
    accent: "from-gold-500/20 to-transparent",
  },
  {
    icon: Droplets,
    title: "Premium Exterior Wash",
    description:
      "A proper hand wash that gives your car a bright, refreshed look. Wheels and inner rims cleaned, two-bucket wash, microfiber drying, tire dressing, and door jambs.",
    features: ["Two-bucket hand wash", "Wheels & inner rims", "Tire dressing", "Door edges & jambs"],
    price: "From $80",
    href: "/services/exterior-detailing",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: Sparkles,
    title: "Basic Interior Detail",
    description:
      "A thorough interior clean — steam cleaning, deep vacuuming with air blow-out, interior windows, and full cleaning and protection of leather and plastics. Pet hair or stains +$50 each.",
    features: ["Steam cleaning", "Deep vacuum & air blow-out", "Interior windows", "Leather & plastic protection"],
    price: "From $160",
    href: "/services/interior-detailing",
    accent: "from-gold-500/20 to-transparent",
  },
  {
    icon: Star,
    title: "Essential Detail Package",
    description:
      "A maintenance-focused full detail refreshing your vehicle inside and out. Great for keeping a clean car on a regular schedule.",
    features: ["Hand wash & tire dressing", "Wheel & rim cleaning", "Light vacuum", "Surface wipe-down & windows"],
    price: "From $175",
    href: "/services/full-detail",
    accent: "from-gold-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Elite Full Detail",
    description:
      "Our most thorough detail — extensive interior deep clean and full exterior decontamination with iron remover, clay bar, and ceramic sealant application.",
    features: ["Iron decontamination", "Clay bar treatment", "Ceramic sealant", "Plastic scrub & conditioning"],
    price: "From $300",
    href: "/services/elite-full-detail",
    featured: true,
    accent: "from-purple-500/10 to-transparent",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Every Detail, <span className="text-gradient-gold">Perfected</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From a quick refresh to a full transformation — we offer premium detailing services tailored to your vehicle and schedule.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative glass rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 ${
                  service.featured ? "border-gold-500/30" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                    Most Popular
                  </div>
                )}

                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-gold-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/60 text-xs">
                        <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-gold-500 font-bold text-lg">{service.price}</span>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-white/60 hover:text-gold-500 text-sm font-medium transition-colors group/link"
                    >
                      Learn more<span className="sr-only"> about {service.title}</span>
                      <ArrowRight size={14} aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/quote"
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-gold hover:shadow-gold-lg text-base tracking-wide"
          >
            Get Your Custom Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
