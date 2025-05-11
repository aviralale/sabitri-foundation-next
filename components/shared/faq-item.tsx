"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FaqItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="overflow-hidden rounded-lg border border-muted/20 bg-muted/5 backdrop-blur-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-medium transition-all duration-200 hover:bg-muted/10"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
      </button>
      <motion.div
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        initial={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-muted/20"
      >
        <div className="p-4 text-sm text-muted-foreground">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

export default FaqItem;
