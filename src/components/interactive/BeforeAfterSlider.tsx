"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Before/after photos are pre-aligned (same framing, scale and rotation) and
 * cropped to identical squares, so the vehicle stays put while dragging.
 * Regenerate them together if either photo in a pair changes.
 */
const transformations = [
  {
    label: "Interior Transformation",
    before: "/images/before-after/ba-interior-before.jpg",
    after: "/images/before-after/ba-interior-after.jpg",
    beforeAlt: "Volkswagen GTI interior before detailing, with dirt and debris covering the driver's floor",
    afterAlt: "The same Volkswagen GTI interior after detailing, with a clean floor and conditioned leather seats",
  },
  {
    label: "Exterior Transformation",
    before: "/images/before-after/ba-exterior-before.jpg",
    after: "/images/before-after/ba-exterior-after.jpg",
    beforeAlt: "Gray Infiniti Q50 before detailing, with dull, dirty paint",
    afterAlt: "The same Infiniti Q50 after detailing, with clean, glossy paint",
  },
];

const KEY_STEP = 5;

function Slider({ pair }: { pair: (typeof transformations)[number] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const position = useRef(50);
  const frame = useRef<number | null>(null);
  const dragging = useRef(false);
  // Only used for the accessible value; visual updates bypass React entirely.
  const [announced, setAnnounced] = useState(50);

  // Write straight to a CSS variable inside requestAnimationFrame — no React
  // re-render per pointer move, which is what made the old slider feel laggy.
  const paint = useCallback((pct: number, animate = false) => {
    position.current = Math.max(0, Math.min(100, pct));
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = containerRef.current;
      if (!el) return;
      el.dataset.animate = animate ? "true" : "false";
      el.style.setProperty("--pos", `${position.current}%`);
      handleRef.current?.setAttribute("aria-valuenow", String(Math.round(position.current)));
    });
  }, []);

  const pctFromClientX = (clientX: number) => {
    const rect = containerRef.current!.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    dragging.current = true;
    containerRef.current?.setPointerCapture(e.pointerId);
    // A tap/click glides to the spot; dragging then follows the finger exactly.
    paint(pctFromClientX(e.clientX), true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    paint(pctFromClientX(e.clientX));
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
    setAnnounced(Math.round(position.current));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowLeft: position.current - KEY_STEP,
      ArrowDown: position.current - KEY_STEP,
      ArrowRight: position.current + KEY_STEP,
      ArrowUp: position.current + KEY_STEP,
      PageDown: position.current - 25,
      PageUp: position.current + 25,
      Home: 0,
      End: 100,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    paint(moves[e.key], true);
    setAnnounced(Math.round(Math.max(0, Math.min(100, moves[e.key]))));
  };

  // Reset to the middle when switching pairs.
  useEffect(() => {
    paint(50);
    setAnnounced(50);
  }, [pair, paint]);

  useEffect(() => () => {
    if (frame.current) cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div
      ref={containerRef}
      data-animate="false"
      style={{ "--pos": "50%" } as React.CSSProperties}
      className="group/slider relative w-full aspect-square rounded-2xl overflow-hidden select-none cursor-ew-resize bg-dark-900 [touch-action:pan-y]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* After (full) */}
      <Image
        src={pair.after}
        alt={pair.afterAlt}
        fill
        sizes="(min-width: 768px) 672px, 100vw"
        className="object-cover pointer-events-none"
        draggable={false}
      />

      {/* Before (clipped to the left of the handle) */}
      <div
        className="absolute inset-0 will-change-[clip-path] [clip-path:inset(0_calc(100%_-_var(--pos))_0_0)] group-data-[animate=true]/slider:transition-[clip-path] group-data-[animate=true]/slider:duration-300 group-data-[animate=true]/slider:ease-out"
      >
        <Image
          src={pair.before}
          alt={pair.beforeAlt}
          fill
          sizes="(min-width: 768px) 672px, 100vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      <span className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase pointer-events-none">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 left-[var(--pos)] w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none will-change-[left] group-data-[animate=true]/slider:transition-[left] group-data-[animate=true]/slider:duration-300 group-data-[animate=true]/slider:ease-out"
      >
        <div
          ref={handleRef}
          role="slider"
          tabIndex={0}
          aria-label={`${pair.label}: compare before and after`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={announced}
          aria-valuetext={`${announced}% before, ${100 - announced}% after`}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl ring-4 ring-black/20 transition-transform duration-150 group-active/slider:scale-110 cursor-grab active:cursor-grabbing"
        >
          <ChevronLeft size={16} aria-hidden="true" className="-mr-1" />
          <ChevronRight size={16} aria-hidden="true" className="-ml-1" />
        </div>
      </div>
    </div>
  );
}

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
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Results</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            See the <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Drag the slider to compare — actual results from real Refined Auto Detailing clients.
          </p>
        </motion.div>

        <div role="group" aria-label="Choose a transformation" className="flex flex-wrap justify-center gap-3 mb-8">
          {transformations.map((t, i) => (
            <button
              key={t.label}
              type="button"
              aria-pressed={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                i === activeIndex ? "bg-gold-500 text-black" : "glass text-white/70 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Slider pair={transformations[activeIndex]} />
          <p className="text-center text-white/60 text-xs mt-4 tracking-wide">
            Drag, tap, or use arrow keys to compare
          </p>
        </motion.div>

        {/* Warm the cache for the other pair so switching tabs is instant. */}
        <div hidden className="relative w-px h-px overflow-hidden">
          {transformations
            .filter((_, i) => i !== activeIndex)
            .flatMap((t) => [t.before, t.after])
            .map((src) => (
              <Image key={src} src={src} alt="" fill sizes="(min-width: 768px) 672px, 100vw" loading="eager" />
            ))}
        </div>
      </div>
    </section>
  );
}
