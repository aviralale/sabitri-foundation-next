"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedBadge from "@/components/shared/animated-badge";
import AnimatedUnderline from "@/components/shared/animated-underline";
import SectionHeading from "@/components/shared/section-heading";
import FilterButton from "@/components/programs/filter-button";
import WorkCard from "@/components/programs/work-card";
import { PROGRAMSCONTENT } from "@/data/programs.data";
import CallToAction from "@/components/programs/call-to-action";

export default function WorksPage() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredWorks, setFilteredWorks] = useState(PROGRAMSCONTENT.works);

  // Filter works based on active filter
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredWorks(PROGRAMSCONTENT.works);
    } else {
      setFilteredWorks(
        PROGRAMSCONTENT.works.filter((work) => work.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  return (
    <>
      <main className="relative overflow-x-hidden">
        <AnimatedGradientBg />

        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-24 lg:pb-32 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <AnimatedBadge>{PROGRAMSCONTENT.hero.badge}</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                {PROGRAMSCONTENT.hero.title.split(" Together")[0]}{" "}
                <span className="relative text-primary inline-block">
                  Together
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {PROGRAMSCONTENT.hero.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{PROGRAMSCONTENT.sectionTitle}</SectionHeading>

            {/* Filter buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex flex-wrap justify-center gap-3"
            >
              {PROGRAMSCONTENT.filters.map((filter) => (
                <FilterButton
                  key={filter.id}
                  active={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </FilterButton>
              ))}
            </motion.div>

            {/* Projects grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work, index) => (
                <WorkCard
                  key={work.id}
                  title={work.title}
                  category={work.category}
                  year={work.year}
                  image={work.image}
                  description={work.description}
                  outcomes={work.outcomes}
                  link={`/programs/${work.slug}`}
                  index={index}
                />
              ))}
            </div>

            {filteredWorks.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-10 rounded-lg border border-muted/20 bg-muted/5 p-8 text-center backdrop-blur-md"
              >
                <h3 className="mb-2 text-xl font-semibold">
                  {PROGRAMSCONTENT.emptyState.title}
                </h3>
                <p className="text-muted-foreground">
                  {PROGRAMSCONTENT.emptyState.description}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
      </main>
    </>
  );
}
