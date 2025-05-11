"use client";
import { motion } from "framer-motion";

const TimelineItem = ({
  year,
  title,
  description,
  isLeft = true,
  delay = 0,
}: {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={`relative flex w-full md:w-1/2 ${
        isLeft ? "md:ml-0" : "md:ml-auto"
      }`}
    >
      <div
        className={`absolute top-0 h-full w-1 bg-gradient-to-b from-primary/80 to-blue-500/80 ${
          isLeft ? "left-0 md:left-auto md:right-0" : "left-0"
        }`}
      />
      <div
        className={`relative mx-4 my-6 w-full rounded-xl border border-muted/20 bg-muted/5 p-6 shadow-lg backdrop-blur-md dark:bg-muted/10 ${
          isLeft ? "md:mr-12" : "md:ml-12"
        }`}
      >
        <span className="absolute -top-3 inline-flex h-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 px-3 text-xs font-medium text-white">
          {year}
        </span>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};
export default TimelineItem;
