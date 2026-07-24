"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Shield } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/gs-5758.jpg"
          alt="Premium auto detailing"
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16,108,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,108,170,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-8"
          >
            <MapPin size={12} className="text-gold-500" />
            <span className="text-gold-500 text-xs font-medium tracking-widest uppercase">
              Snohomish County, Washington
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8"
          >
            <span className="block text-white">Your Vehicle.</span>
            <span className="block text-white">Elevated to</span>
            <span className="block text-gradient-gold">Perfection.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
          >
            Premium mobile auto detailing — we come to your home, office, or anywhere convenient.
            Obsessive attention to detail. Dealer-quality results at your driveway.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="https://refinedautodetailing.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-gold hover:shadow-gold-lg text-base tracking-wide"
            >
              Book Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white text-base font-medium transition-colors border border-white/10 hover:border-white/30 px-8 py-4 rounded-full"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#106caa] text-gold-500" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                <strong className="text-white">5.0</strong> rating · 100+ reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Shield size={14} className="text-gold-500" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="text-white/60 text-sm">
              <strong className="text-white">Same-day</strong> availability
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500/60 to-transparent animate-pulse" />
      </motion.div>

      {/* Right side floating card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 glass border border-gold-500/20 rounded-2xl p-6 w-72"
      >
        <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Why Choose Us</p>
        <ul className="space-y-4">
          {[
            { icon: "🚗", text: "We come to you — zero commute" },
            { icon: "✨", text: "Professional-grade products only" },
            { icon: "🛡️", text: "Fully insured & bonded" },
            { icon: "⏱️", text: "Flexible scheduling, 7 days/week" },
          ].map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-white/70 text-sm">
              <span className="text-lg">{icon}</span>
              {text}
            </li>
          ))}
        </ul>
        <Link
          href="/quote"
          className="mt-6 block text-center bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 border border-gold-500/30 rounded-xl py-3 text-sm font-semibold transition-all duration-200"
        >
          Book Today →
        </Link>
      </motion.div>
    </section>
  );
}
