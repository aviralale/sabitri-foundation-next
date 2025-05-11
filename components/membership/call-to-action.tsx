import MEMBERSHIP_CONTENT from "@/data/membership.data";
import React from "react";
import { motion } from "framer-motion";
import AnimatedBadge from "../shared/animated-badge";
import { Button } from "../ui/button";

export default function CallToAction() {
  const { cta } = MEMBERSHIP_CONTENT;
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center backdrop-blur-md md:p-12 lg:p-16"
        >
          <AnimatedBadge>{cta.badge}</AnimatedBadge>
          <h2 className="mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {cta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-primary px-8 py-6 text-lg font-medium hover:bg-primary/90">
              {cta.buttonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
