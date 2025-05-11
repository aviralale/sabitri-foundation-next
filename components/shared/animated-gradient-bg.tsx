"use client";
import { motion, useScroll, useTransform } from "framer-motion";
const AnimatedGradientBg = () => {
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div style={{ opacity: backgroundOpacity }}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-green-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
          className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-red-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedGradientBg;
