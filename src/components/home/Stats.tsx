"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Vehicles Detailed" },
  { value: 5, suffix: ".0", label: "Average Rating", prefix: "" },
  { value: 100, suffix: "+", label: "Five-Star Reviews" },
  { value: 3, suffix: " yrs", label: "In Business" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-black border-y border-white/5 py-12" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-gradient-gold mb-2 tracking-tight">
                {stat.prefix}
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={1800}
                />
              </div>
              <p className="text-white/50 text-sm tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
