"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedBadge = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-md dark:bg-primary/10"
    >
      <motion.span
        className="mr-2.5 inline-block h-2.5 w-2.5 rounded-full bg-primary"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {children}

      <motion.div
        className="absolute -inset-px -z-10 rounded-full opacity-50"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(124, 58, 237, 0)",
            "0 0 0 4px rgba(124, 58, 237, 0.3)",
            "0 0 0 0 rgba(124, 58, 237, 0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
};

export default AnimatedBadge;
