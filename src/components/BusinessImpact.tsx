"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "%", label: "Revision Reduction" },
  { value: 30, suffix: "%", label: "Time Saved via Automation" },
  { value: 100, suffix: "%", label: "UAT Compliance Sign-off" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={elementRef} className="flex items-baseline justify-center">
      <span className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
        {count}
      </span>
      <span className="text-4xl md:text-6xl font-bold text-[var(--color-primary)]">
        {suffix}
      </span>
    </div>
  );
}

export default function BusinessImpact() {
  return (
    <section className="py-20 relative bg-background border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5 dark:divide-white/5">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-[var(--color-foreground)] font-semibold text-sm md:text-base uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
