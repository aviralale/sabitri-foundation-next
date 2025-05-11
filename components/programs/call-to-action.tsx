import { PROGRAMSCONTENT } from "@/data/programs.data";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-8 text-center backdrop-blur-md md:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {PROGRAMSCONTENT.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {PROGRAMSCONTENT.cta.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              className="bg-primary font-medium hover:bg-primary/90"
              asChild
            >
              <a href={PROGRAMSCONTENT.cta.primaryButton.link}>
                {PROGRAMSCONTENT.cta.primaryButton.text}
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/20 font-medium hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href={PROGRAMSCONTENT.cta.secondaryButton.link}>
                {PROGRAMSCONTENT.cta.secondaryButton.text}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
