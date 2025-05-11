import { ABOUTCONTENT } from "@/data/about.data";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 p-12 backdrop-blur-md dark:from-primary/30 dark:to-blue-500/30"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-40 left-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2,
              }}
              className="absolute -bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {ABOUTCONTENT.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground dark:text-white/70">
              {ABOUTCONTENT.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden px-8 py-6 text-base font-medium shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="relative z-10">
                  {ABOUTCONTENT.cta.buttons.primary}
                </span>
                <span className="absolute inset-0 -z-10 translate-y-[102%] bg-gradient-to-r from-primary/90 to-blue-600/90 transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative overflow-hidden border-2 border-primary/20 px-8 py-6 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
              >
                <span className="text-nowrap bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-blue-600 dark:group-hover:from-primary dark:group-hover:to-blue-400">
                  {ABOUTCONTENT.cta.buttons.secondary}
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
