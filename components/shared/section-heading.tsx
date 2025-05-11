"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimatedUnderline from "./animated-underline";

const SectionHeading = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mb-16 text-center text-4xl font-bold md:text-5xl ${className}`}
    >
      <span className="relative">
        {children}
        <AnimatedUnderline />
      </span>
    </motion.h2>
  );
};

export default SectionHeading;
