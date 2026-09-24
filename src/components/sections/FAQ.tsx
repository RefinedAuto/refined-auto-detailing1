"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { COMPANY } from "@/lib/utils";

const faqs = [
  {
    q: "What is mobile auto detailing?",
    a: "Mobile auto detailing means we bring our professional equipment directly to your location — your home, office, or anywhere convenient — so you never have to drop your car off at a shop.",
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
    a: "We serve Snohomish County and north King County, WA — including Lynnwood, Everett, Marysville, Mukilteo, Mill Creek, Edmonds, Lake Stevens, Arlington, Snohomish, Bothell, Shoreline, Lake Forest Park, Kirkland and Redmond. Our service radius is about 30 miles; if you're unsure, just reach out.",
  },
  {
    q: "How much does detailing cost?",
    a: "Pricing depends on vehicle size, the service selected and the vehicle's condition. The Premium Exterior Wash starts at $80, the Basic Interior Detail at $100, the Essential Full Detail at $175 and the Elite Full Detail at $300. Use our quote builder for an estimate for your vehicle.",
  },
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A car wash removes surface dirt. A detail is a much more thorough process — cleaning, decontaminating and protecting surfaces inside and out with professional-grade tools and products.",
  },
  {
    q: "Do you offer ceramic coating?",
    a: "Yes. We offer 1-year, 3-year and 4-year ceramic coatings starting from $600, with each package quoted for your vehicle. Every package includes a decontamination wash and a paint enhancement polish before the coating is applied. Vehicles with heavy swirls or scratches may need paint correction first, quoted separately.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for at least 24 hours' notice for cancellations and rescheduling. Late cancellations and no-shows may be subject to a fee — see our Terms of Service for details.",
  },
  {
    q: "Do you detail Tesla and EV vehicles?",
    a: "Yes. We detail Teslas and other EVs, using products that are safe for synthetic (vegan) leather, large touchscreens and piano-black trim.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. If you're not happy with any part of your detail, contact us within 24 hours and we'll come back to correct the issue at no additional charge. See our Terms of Service for the full guarantee.",
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
            <p className="text-white/60 text-sm">
              Still have questions?{" "}
              <a href={`tel:${COMPANY.phoneHref}`} className="text-gold-500 hover:text-gold-400 underline underline-offset-4">
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
                <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full glass rounded-xl p-5 text-left flex items-center justify-between gap-4 transition-all duration-200 ${
                    openIndex === i ? "border-gold-500/30" : "hover:border-white/20"
                  }`}
                >
                  <span className={`font-semibold text-base ${openIndex === i ? "text-gold-500" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <span aria-hidden="true" className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                    openIndex === i ? "border-gold-500 bg-gold-500/10" : "border-white/20"
                  }`}>
                    {openIndex === i ? (
                      <Minus size={12} className="text-gold-500" />
                    ) : (
                      <Plus size={12} className="text-white/60" />
                    )}
                  </span>
                </button>
                </h3>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
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

      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}
