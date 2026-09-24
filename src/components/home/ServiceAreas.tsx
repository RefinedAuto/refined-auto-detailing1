"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas";

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
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              No need to drive anywhere. We bring mobile car detailing, paint correction and ceramic coating to
              Snohomish County and north King County — at your home, office, apartment complex, or anywhere else
              that works for you.
            </p>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-950 relative h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold-500 mx-auto mb-3" aria-hidden="true" />
                  <p className="text-white/70 text-sm">Snohomish &amp; King County, WA</p>
                  <p className="text-white/60 text-xs mt-1">Service radius: ~30 miles</p>
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

          {/* Right — every city page, grouped by county */}
          <div className="space-y-10">
            {(["Snohomish", "King"] as const).map((county, ci) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15, duration: 0.5 }}
              >
                <h3 className="text-white font-bold text-lg mb-4">{county} County</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {AREAS.filter((a) => a.county === county).map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="group flex items-center justify-between gap-2 glass rounded-xl px-4 py-3 hover:border-gold-500/30 transition-all duration-300"
                      >
                        <span className="flex items-center gap-2 text-white text-sm font-semibold">
                          <MapPin size={13} className="text-gold-500 shrink-0" aria-hidden="true" />
                          {area.city}
                        </span>
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                          className="text-white/60 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-semibold text-sm"
            >
              Don&apos;t see your city? View all service areas <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
