"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

const hotspots = [
  {
    id: "seats",
    label: "Seats",
    position: { top: "45%", left: "40%" },
    emoji: "🪑",
    what: "Complete seat cleaning & conditioning",
    tools: ["Steam cleaner", "Leather conditioner", "Fabric extractor", "Soft bristle brush"],
    process: "We pre-treat all stains, steam clean or hot-water extract, then condition leather or fabric protect cloth seats.",
    result: "Stain-free, supple, protected seating that looks and feels showroom-new.",
  },
  {
    id: "carpet",
    label: "Carpet & Floor",
    position: { top: "70%", left: "45%" },
    emoji: "🧹",
    what: "Deep carpet extraction & mat cleaning",
    tools: ["Hot water extractor", "Agitation brush", "All-surface cleaner", "Odor eliminator"],
    process: "Pre-spray, agitate, extract with 200°F hot water extraction pulling out embedded dirt, allergens, and bacteria.",
    result: "Bright, fresh-smelling carpet free of stains, odors, and debris down to the fiber.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    position: { top: "35%", left: "55%" },
    emoji: "🎛️",
    what: "Dashboard & trim deep clean",
    tools: ["Detail brushes", "Interior cleaner", "UV protectant", "Microfiber towels"],
    process: "Every vent, button, and crevice is detailed with appropriate brushes. Then UV-protective dressing applied to all plastics.",
    result: "Dust-free, vibrant dashboard that won't crack or fade from UV exposure.",
  },
  {
    id: "wheels",
    label: "Wheels & Tires",
    position: { top: "75%", left: "20%" },
    emoji: "⚙️",
    what: "Complete wheel & tire detailing",
    tools: ["Iron remover", "Wheel brush", "Tire dressing", "Pressure washer"],
    process: "Chemical iron decontamination dissolves brake dust, followed by agitation cleaning and tire dressing application.",
    result: "Gleaming wheels free of brake dust and corrosion, with deep-black tire finish.",
  },
  {
    id: "paint",
    label: "Paint",
    position: { top: "30%", left: "25%" },
    emoji: "✨",
    what: "Paint cleaning, correction & protection",
    tools: ["Clay bar", "Machine polisher", "Paint sealant", "Detail spray"],
    process: "Decontaminate with clay bar, correct surface defects with machine polish, seal with premium paint sealant.",
    result: "Smooth, swirl-free paint with depth and gloss that lasts months.",
  },
];

export default function VehicleExplorer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const active = hotspots.find((h) => h.id === activeHotspot);

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
            Interactive Explorer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            What We <span className="text-gradient-gold">Actually Do</span>
          </h2>
          <p className="text-white/50">
            Tap each part of the vehicle to discover exactly what we clean, what tools we use, and what results you can expect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Vehicle silhouette with hotspots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Car silhouette */}
            <div className="relative w-full aspect-[16/9] bg-dark-950 rounded-2xl overflow-hidden border border-white/5">
              {/* Simple SVG car outline */}
              <svg viewBox="0 0 600 340" className="w-full h-full" style={{ padding: "20px" }}>
                {/* Car body */}
                <g opacity="0.6">
                  {/* Main body */}
                  <path
                    d="M80 220 L80 180 Q90 160 120 150 L200 130 Q240 110 300 108 Q360 110 400 130 L480 150 Q510 160 520 180 L520 220 Q510 235 490 240 L110 240 Q90 235 80 220 Z"
                    fill="none"
                    stroke="rgba(16,108,170,0.4)"
                    strokeWidth="2"
                  />
                  {/* Roof */}
                  <path
                    d="M170 150 Q200 115 250 105 L350 105 Q400 115 430 150"
                    fill="none"
                    stroke="rgba(16,108,170,0.4)"
                    strokeWidth="2"
                  />
                  {/* Windows */}
                  <path
                    d="M175 148 Q205 118 252 108 L300 107 L300 148 Z"
                    fill="rgba(100,150,200,0.1)"
                    stroke="rgba(16,108,170,0.2)"
                    strokeWidth="1"
                  />
                  <path
                    d="M425 148 Q395 118 348 108 L300 107 L300 148 Z"
                    fill="rgba(100,150,200,0.1)"
                    stroke="rgba(16,108,170,0.2)"
                    strokeWidth="1"
                  />
                  {/* Wheels */}
                  <circle cx="150" cy="240" r="40" fill="rgba(30,30,30,1)" stroke="rgba(16,108,170,0.5)" strokeWidth="2" />
                  <circle cx="150" cy="240" r="25" fill="none" stroke="rgba(16,108,170,0.3)" strokeWidth="2" />
                  <circle cx="450" cy="240" r="40" fill="rgba(30,30,30,1)" stroke="rgba(16,108,170,0.5)" strokeWidth="2" />
                  <circle cx="450" cy="240" r="25" fill="none" stroke="rgba(16,108,170,0.3)" strokeWidth="2" />
                  {/* Hood */}
                  <path d="M80 180 L180 165" stroke="rgba(16,108,170,0.2)" strokeWidth="1" />
                  <path d="M520 180 L420 165" stroke="rgba(16,108,170,0.2)" strokeWidth="1" />
                  {/* Door lines */}
                  <line x1="300" y1="148" x2="300" y2="238" stroke="rgba(16,108,170,0.2)" strokeWidth="1" />
                  <line x1="220" y1="148" x2="220" y2="238" stroke="rgba(16,108,170,0.2)" strokeWidth="1" />
                  <line x1="380" y1="148" x2="380" y2="238" stroke="rgba(16,108,170,0.2)" strokeWidth="1" />
                </g>
              </svg>

              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot.id === activeHotspot ? null : hotspot.id)}
                  aria-label={`Learn about ${hotspot.label} detailing`}
                  aria-pressed={activeHotspot === hotspot.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                    activeHotspot === hotspot.id ? "z-10" : "z-0"
                  }`}
                  style={{ top: hotspot.position.top, left: hotspot.position.left }}
                >
                  <div
                    className={`relative w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${
                      activeHotspot === hotspot.id
                        ? "bg-gold-500 shadow-gold scale-125"
                        : "bg-gold-500/20 border border-gold-500/50 hover:bg-gold-500/40 hover:scale-110"
                    }`}
                  >
                    {hotspot.emoji}
                    {/* Pulse ring */}
                    {activeHotspot !== hotspot.id && (
                      <div className="absolute inset-0 rounded-full border border-gold-500/40 animate-ping" />
                    )}
                  </div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-xs text-white/60 whitespace-nowrap font-medium">
                    {hotspot.label}
                  </span>
                </button>
              ))}

              {/* Tap instruction */}
              {!activeHotspot && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-wide animate-pulse">
                  Tap a hotspot to explore
                </div>
              )}
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {!active ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full glass rounded-2xl p-8 sm:p-12 text-center"
                >
                  <div className="text-5xl mb-4" aria-hidden="true">👆</div>
                  <p className="text-white/60 text-base">
                    Select any part of the vehicle to see our detailed process.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {hotspots.map((h) => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => setActiveHotspot(h.id)}
                        className="glass-gold text-gold-500 text-xs px-3 py-1.5 rounded-full border border-gold-500/20 hover:bg-gold-500/20 transition-colors"
                      >
                        {h.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass border border-gold-500/20 rounded-2xl p-5 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">{active.emoji}</span>
                      <h3 className="text-white font-black text-2xl">{active.label}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(null)}
                      aria-label={`Close ${active.label} details`}
                      className="text-white/60 hover:text-white p-1.5"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  </div>

                  <p className="text-gold-500 font-semibold text-base mb-4">{active.what}</p>

                  <div className="space-y-5">
                    <div>
                      <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Tools Used</p>
                      <div className="flex flex-wrap gap-2">
                        {active.tools.map((tool) => (
                          <span key={tool} className="glass text-white/70 text-xs px-3 py-1.5 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Our Process</p>
                      <p className="text-white/70 text-sm leading-relaxed">{active.process}</p>
                    </div>

                    <div className="glass-gold rounded-xl p-4">
                      <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Result</p>
                      <p className="text-gold-500 text-sm leading-relaxed">{active.result}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
