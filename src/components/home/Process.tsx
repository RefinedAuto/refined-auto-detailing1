"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Search, Droplets, Shield, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Vehicle Inspection",
    description:
      "We begin with a thorough inspection of your vehicle — documenting existing damage, identifying problem areas, and creating a custom plan tailored to your car's specific needs.",
    detail: "15–20 minutes",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Deep Cleaning",
    description:
      "Multi-stage wash and extraction process removes embedded dirt, grime, and contaminants from every surface — from carpet fibers to paint pores.",
    detail: "60–90 minutes",
  },
  {
    number: "03",
    icon: Shield,
    title: "Decontamination",
    description:
      "Chemical and physical decontamination removes iron particles, tar, and bonded contaminants that regular washing can't touch. Your paint is now truly clean.",
    detail: "30–45 minutes",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Protection & Polish",
    description:
      "Paint enhancement, dressing, and protection applied to every surface. Leather conditioned, plastics UV-protected, glass treated, and paint sealed.",
    detail: "45–60 minutes",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Final Inspection",
    description:
      "A complete walkthrough with you to ensure every detail meets our exacting standards. We don't consider the job done until you're completely satisfied.",
    detail: "10–15 minutes",
  },
];

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Side gradient accents */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Precision From <br />
              <span className="text-gradient-gold">Start to Finish</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Every Refined Auto Detailing service follows a proven, systematic process — no shortcuts, no guesswork. Just consistently exceptional results.
            </p>
            <div className="glass-gold rounded-xl p-6 border border-gold-500/20">
              <p className="text-gold-500 font-semibold text-sm mb-2">Our Promise</p>
              <p className="text-white/70 text-sm leading-relaxed">
                If you find anything we missed, let us know within 24 hours and we&apos;ll come back to fix it at no charge. That&apos;s the Refined guarantee.
              </p>
            </div>
          </motion.div>

          {/* Right — steps */}
          <div className="space-y-0 relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex gap-6 pb-8 last:pb-0 group"
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full glass border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/70 group-hover:bg-gold-500/10 transition-all duration-300 relative z-10 bg-black">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gold-500 text-xs font-mono">{step.number}</span>
                      <h3 className="text-white font-bold text-base">{step.title}</h3>
                      <span className="text-white/60 text-xs ml-auto">{step.detail}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
