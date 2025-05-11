import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface StatsCounterProps {
  number: string;
  label: string;
  delay?: number;
}

const StatsCounter = ({ number, label, delay = 0 }: StatsCounterProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-4xl font-bold text-transparent dark:from-primary dark:to-purple-400">
        {number}+
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
};

export default StatsCounter;
