import { CONTACTCONTENT } from "@/data/contact.data";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function NewsLetter() {
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
            {CONTACTCONTENT.newsletter.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {CONTACTCONTENT.newsletter.description}
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder={CONTACTCONTENT.newsletter.placeholder}
              className="flex-grow rounded-lg border border-muted/30 bg-white/20 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <Button className="whitespace-nowrap bg-primary font-medium hover:bg-primary/90">
              {CONTACTCONTENT.newsletter.buttonText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
