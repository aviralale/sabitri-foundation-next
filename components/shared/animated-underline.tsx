"use client";
import { motion } from "framer-motion";

const AnimatedUnderline = () => {
  return (
    <motion.svg
      width="100%"
      height="8"
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-2 left-0 w-full"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <path
        d="M1 5.5C32 1.5 62.5 1 97 1C131.5 1 168 5 199 1.5"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1"
          y1="1"
          x2="199"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default AnimatedUnderline;
