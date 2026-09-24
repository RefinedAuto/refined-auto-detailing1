"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Only claims that are true today. If you want real numbers back here
 * (vehicles detailed, Google rating, review count), use figures you can
 * prove — the FTC treats inflated stats and ratings as deceptive advertising.
 */
const stats = [
  { value: "Mobile", label: "We come to you" },
  { value: "7 Days", label: "A week, 7 AM – 8 PM" },
  { value: "100%", label: "Satisfaction guarantee" },
  { value: "Pro-Grade", label: "Products & tools" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section aria-label="Why Refined Auto Detailing" className="bg-black border-y border-white/5 py-12" ref={ref}>
      <div className="container-custom">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-black text-gradient-gold mb-2 tracking-tight">{stat.value}</p>
              <p className="text-white/60 text-sm tracking-wide uppercase">{stat.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
