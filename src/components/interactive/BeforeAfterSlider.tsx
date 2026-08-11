"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
}

function SingleSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => { e.preventDefault(); isDragging.current = true; updatePosition(e.clientX); }}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt || "After"} fill className="object-cover pointer-events-none" />
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
          After
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt || "Before"} fill className="object-cover pointer-events-none" />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
          Before
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold-500 shadow-gold"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-gold">
          <GripVertical size={16} className="text-black" />
        </div>
      </div>
    </div>
  );
}

const transformations = [
  {
    before: "/images/IMG_3715.JPG",
    after: "/images/IMG_3735.JPG",
    label: "Interior Transformation",
  },
  {
    before: "/images/infiniti-q50-dirty.jpg",
    after: "/images/infiniti-q50-clean.jpg",
    label: "Exterior Transformation",
  },
];

export default function BeforeAfterSlider() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-black relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
            Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            See the <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Drag the slider to reveal the before and after — actual results from real Refined Auto Detailing clients.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-3 mb-8">
          {transformations.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                i === activeIndex
                  ? "bg-gold-500 text-black"
                  : "glass text-white/60 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <SingleSlider
            beforeSrc={transformations[activeIndex].before}
            afterSrc={transformations[activeIndex].after}
            beforeAlt="Before detailing"
            afterAlt="After detailing"
          />
          <p className="text-center text-white/30 text-xs mt-4 tracking-wide">
            ← Drag to compare before & after →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
