"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
const ValueCard = ({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col items-center rounded-xl border border-muted/20 bg-muted/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="mb-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 p-3">
        <div className="rounded-full bg-gradient-to-br from-primary to-blue-500 p-3">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};
export default ValueCard;
