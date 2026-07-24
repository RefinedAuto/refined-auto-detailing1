"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  {
    city: "Marysville",
    state: "WA",
    description: "Our home base. Same-day service usually available.",
    href: "/service-areas/marysville",
    zip: "98270",
  },
  {
    city: "Everett",
    state: "WA",
    description: "Serving all Everett neighborhoods and the waterfront.",
    href: "/service-areas/everett",
    zip: "98201",
  },
  {
    city: "Lynnwood",
    state: "WA",
    description: "Premium mobile detailing throughout Lynnwood.",
    href: "/service-areas/lynnwood",
    zip: "98036",
  },
  {
    city: "Mukilteo",
    state: "WA",
    description: "Waterfront to the bluffs — we cover all of Mukilteo.",
    href: "/service-areas/mukilteo",
    zip: "98275",
  },
  {
    city: "Mill Creek",
    state: "WA",
    description: "Serving Mill Creek and surrounding neighborhoods.",
    href: "/service-areas/mill-creek",
    zip: "98012",
  },
  {
    city: "+ More Areas",
    state: "",
    description: "Don't see your city? Contact us — we likely service your area.",
    href: "/service-areas",
    zip: "",
  },
];

export default function ServiceAreas() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              Where We Serve
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              We Come to <span className="text-gradient-gold">You</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              No need to drive anywhere. We serve all of Snohomish County, WA — at your home, office, apartment complex, or anywhere else that works for you.
            </p>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-950 relative h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold-500 mx-auto mb-3" />
                  <p className="text-white/50 text-sm">Snohomish County, WA</p>
                  <p className="text-white/30 text-xs mt-1">Service radius: ~30 miles</p>
                </div>
              </div>
              {/* Stylized map dots */}
              {[
                { top: "30%", left: "45%", size: "large" },
                { top: "55%", left: "52%", size: "medium" },
                { top: "65%", left: "40%", size: "medium" },
                { top: "70%", left: "48%", size: "small" },
                { top: "45%", left: "38%", size: "small" },
              ].map((dot, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full bg-gold-500 animate-pulse`}
                  style={{
                    top: dot.top,
                    left: dot.left,
                    width: dot.size === "large" ? 12 : dot.size === "medium" ? 8 : 6,
                    height: dot.size === "large" ? 12 : dot.size === "medium" ? 8 : 6,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "linear-gradient(rgba(16,108,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,108,170,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>

          {/* Right — area list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, i) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={area.href}
                  className="group block glass rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-bold text-base">{area.city}</span>
                        {area.state && (
                          <span className="text-white/40 text-sm ml-1">{area.state}</span>
                        )}
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-white/30 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
                  {area.zip && (
                    <p className="text-white/20 text-xs mt-2 font-mono">{area.zip}</p>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
