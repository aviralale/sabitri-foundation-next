"use client";
import React from "react";
import { motion } from "framer-motion";

// Contact info card component
export const ContactInfoCard = ({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col items-center rounded-xl border border-muted/20 bg-muted/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </motion.div>
  );
};
