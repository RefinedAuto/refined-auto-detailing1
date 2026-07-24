"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    vehicle: "2023 Tesla Model 3",
    location: "Marysville, WA",
    rating: 5,
    text: "Nazar showed up on time, worked for 4 hours, and my Tesla looks better than the day I picked it up from the dealership. The interior is spotless — every nook and cranny. 10/10 would absolutely book again.",
    service: "Full Detail Package",
  },
  {
    name: "Jennifer K.",
    vehicle: "2021 BMW X5",
    location: "Everett, WA",
    rating: 5,
    text: "I've tried 3 different detailers in the area and Refined Auto is on a completely different level. The attention to detail is unreal. My leather seats look brand new. Worth every penny.",
    service: "Interior Detailing",
  },
  {
    name: "David R.",
    vehicle: "2022 Ford F-150",
    location: "Lynnwood, WA",
    rating: 5,
    text: "Had coffee stains, dog hair, and mud caked into the carpet from camping. I was skeptical anything could fix it. Came out looking factory fresh. I'll never go to a car wash again.",
    service: "Full Detail Package",
  },
  {
    name: "Sarah M.",
    vehicle: "2020 Audi Q5",
    location: "Mukilteo, WA",
    rating: 5,
    text: "The ceramic coating is incredible. Water just beads right off. Three months later and the car still looks like it was just waxed. The paint correction beforehand was a bonus I didn't expect.",
    service: "Ceramic Coating",
  },
  {
    name: "Chris P.",
    vehicle: "2019 Dodge Ram 3500",
    location: "Mill Creek, WA",
    rating: 5,
    text: "Work truck gets destroyed on job sites. Refined Auto made it look professional again. Booked for a monthly service now — it's the best investment for maintaining the truck's value.",
    service: "Exterior Detailing",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
            Client Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Don&apos;t Take Our <span className="text-gradient-gold">Word for It</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 relative">
            <Quote size={48} className="text-gold-500/20 absolute top-8 left-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#106caa] text-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-xl sm:text-2xl font-light leading-relaxed mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[current].vehicle} · {testimonials[current].location}</p>
                  </div>
                  <span className="glass-gold text-gold-500 text-xs font-medium px-4 py-2 rounded-full border border-gold-500/20">
                    {testimonials[current].service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? "w-8 h-2 bg-gold-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/30 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini review grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`glass rounded-xl p-4 text-left transition-all duration-200 ${
                i === current ? "border-gold-500/40 bg-gold-500/5" : "hover:border-white/20"
              }`}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={10} className="fill-[#106caa] text-gold-500" />
                ))}
              </div>
              <p className="text-white font-semibold text-xs">{t.name}</p>
              <p className="text-white/40 text-xs">{t.vehicle}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
