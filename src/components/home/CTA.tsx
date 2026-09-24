"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden" ref={ref}>
      {/* Gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto glass border border-gold-500/20 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold-500/20 to-transparent rounded-3xl" />

          <div className="relative">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              Ready to Get Started?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Book Your Detail
              <br />
              <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Join hundreds of Snohomish County vehicle owners who trust Refined Auto Detailing for their car&apos;s best look.
            </p>

            {/* CTA options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link
                href="/quote"
                className="group flex flex-col items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-5 rounded-2xl transition-all duration-300 shadow-gold hover:shadow-gold-lg"
              >
                <Calendar size={22} />
                <span className="text-base">Book Online</span>
                <span className="text-xs font-normal opacity-70">Instant quote</span>
              </Link>

              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="group flex flex-col items-center gap-3 glass hover:border-gold-500/40 text-white hover:text-gold-500 px-6 py-5 rounded-2xl transition-all duration-300"
              >
                <Phone size={22} />
                <span className="text-base font-semibold">Call Us</span>
                <span className="text-xs text-white/60">{COMPANY.phone}</span>
              </a>

              <a
                href={`sms:${COMPANY.phoneHref}`}
                className="group flex flex-col items-center gap-3 glass hover:border-gold-500/40 text-white hover:text-gold-500 px-6 py-5 rounded-2xl transition-all duration-300"
              >
                <MessageSquare size={22} />
                <span className="text-base font-semibold">Text Us</span>
                <span className="text-xs text-white/60">Fast response</span>
              </a>
            </div>

            {/* Guarantee */}
            <p className="text-white/60 text-sm mt-10">
              Satisfaction guarantee · Upfront, size-based pricing · We come to you
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
