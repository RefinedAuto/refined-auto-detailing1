"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is mobile auto detailing?",
    a: "Mobile auto detailing means we bring all of our professional equipment directly to your location — your home, office, or anywhere convenient. You get dealership-quality results without leaving your property. We carry everything we need in our fully-equipped vehicle.",
  },
  {
    q: "How long does a detail take?",
    a: "Service time depends on vehicle size and condition. Interior-only details take 2–4 hours, exterior details take 1.5–3 hours, and full details take 3–6 hours. We'll give you a specific time estimate when you book.",
  },
  {
    q: "Do you need water and electricity?",
    a: "For most services, no. We carry our own water tanks and battery-powered equipment. For certain services that require significant water (large SUVs, heavily soiled vehicles), having a standard outdoor hose available is helpful but not always required.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Snohomish County, WA including Marysville, Everett, Lynnwood, Mukilteo, Mill Creek, Bothell, Kenmore, and surrounding communities. If you're unsure if we service your area, just reach out — our service radius is about 30 miles.",
  },
  {
    q: "How much does detailing cost?",
    a: "Pricing depends on vehicle type, service selected, and current condition. Interior-only starts at $149, exterior-only starts at $129, and full details start at $249. Use our quote builder for an instant estimate tailored to your specific vehicle.",
  },
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A car wash removes surface dirt. A detail is a comprehensive restoration — we clean, decontaminate, protect, and restore every surface using professional-grade equipment and products. Think of a car wash as maintenance; a detail is a transformation.",
  },
  {
    q: "Do you offer ceramic coating?",
    a: "Yes. We offer professional-grade ceramic coating starting at $799 — this includes paint decontamination, paint correction (if needed), and application of a 9H-rated ceramic coating that provides 2–5 years of protection with hydrophobic, self-cleaning properties.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice for cancellations and rescheduling. Life happens — we understand, and we work with you to find a new time that works. Same-day cancellations may be subject to a small fee.",
  },
  {
    q: "Do you detail Tesla and EV vehicles?",
    a: "Absolutely. We love working on Teslas and EVs. We're trained on the specific requirements for electric vehicle interiors (vegan leather, touchscreen panels) and are careful around battery components. Tesla-specific packages are available.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes — 100% satisfaction guarantee. If there's anything you're not happy with after your detail, contact us within 24 hours and we will come back and make it right at no additional charge.",
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-dark-950 relative" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:sticky lg:top-32 self-start"
          >
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Questions <br />
              <span className="text-gradient-gold">Answered</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Everything you need to know before booking your first Refined Auto Detailing service.
            </p>
            <p className="text-white/40 text-sm">
              Still have questions?{" "}
              <a href="tel:+14253865190" className="text-gold-500 hover:text-gold-400">
                Call us directly
              </a>{" "}
              — we&apos;re happy to help.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full glass rounded-xl p-5 text-left flex items-center justify-between gap-4 transition-all duration-200 ${
                    openIndex === i ? "border-gold-500/30" : "hover:border-white/20"
                  }`}
                >
                  <span className={`font-semibold text-base ${openIndex === i ? "text-gold-500" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                    openIndex === i ? "border-gold-500 bg-gold-500/10" : "border-white/20"
                  }`}>
                    {openIndex === i ? (
                      <Minus size={12} className="text-gold-500" />
                    ) : (
                      <Plus size={12} className="text-white/60" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-3 text-white/60 text-sm leading-relaxed border-x border-b border-white/10 rounded-b-xl -mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Schema markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
}
