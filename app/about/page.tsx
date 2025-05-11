"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedBadge from "@/components/shared/animated-badge";
import AnimatedUnderline from "@/components/shared/animated-underline";
import SectionHeading from "@/components/shared/section-heading";
import ValueCard from "@/components/about/value-card";
import TimelineItem from "@/components/about/timeline-item";
import TeamMemberCard from "@/components/about/team-member-card";
import { ABOUTCONTENT } from "@/data/about.data";
import CallToAction from "@/components/about/call-to-action";

export default function AboutUsPage() {
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
              <AnimatedBadge>{ABOUTCONTENT.hero.badge}</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-primary dark:via-purple-400 dark:to-blue-400"
              >
                {ABOUTCONTENT.hero.title}{" "}
                <span className="relative text-primary inline-block">
                  {ABOUTCONTENT.hero.highlightedTitle}
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {ABOUTCONTENT.hero.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="rounded-2xl border border-muted/20 bg-muted/5 p-8 backdrop-blur-md dark:bg-muted/10"
              >
                <div className="mb-6 inline-flex rounded-full bg-blue-500/10 p-3">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  {ABOUTCONTENT.mission.title}
                </h2>
                <p className="text-muted-foreground">
                  {ABOUTCONTENT.mission.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="rounded-2xl border border-muted/20 bg-muted/5 p-8 backdrop-blur-md dark:bg-muted/10"
              >
                <div className="mb-6 inline-flex rounded-full bg-purple-500/10 p-3">
                  <svg
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  {ABOUTCONTENT.vision.title}
                </h2>
                <p className="text-muted-foreground">
                  {ABOUTCONTENT.vision.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{ABOUTCONTENT.values.title}</SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUTCONTENT.values.items.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our History Timeline Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{ABOUTCONTENT.history.title}</SectionHeading>
            <div className="relative mx-auto w-full">
              <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/80 to-blue-500/80 md:block" />

              <div className="space-y-0">
                {ABOUTCONTENT.history.timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLeft={item.isLeft}
                    delay={item.delay}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{ABOUTCONTENT.team.title}</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUTCONTENT.team.members.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{ABOUTCONTENT.approach.title}</SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid gap-12 md:grid-cols-2"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/30 p-2 shadow-2xl backdrop-blur-md dark:from-muted/10 dark:to-muted/20">
                <Image
                  fill
                  src="/api/placeholder/640/640"
                  alt="Collaborative Approach"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {ABOUTCONTENT.approach.framework.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {ABOUTCONTENT.approach.framework.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    {ABOUTCONTENT.approach.solutions.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {ABOUTCONTENT.approach.solutions.description}
                  </p>
                </div>

                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    {ABOUTCONTENT.approach.network.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {ABOUTCONTENT.approach.network.description}
                  </p>
                </div>

                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    {ABOUTCONTENT.approach.measurement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {ABOUTCONTENT.approach.measurement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SDG Alignment Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{ABOUTCONTENT.sdg.title}</SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-2xl border border-muted/20 bg-muted/5 p-8 backdrop-blur-md dark:bg-muted/10"
            >
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold">
                    {ABOUTCONTENT.sdg.heading}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {ABOUTCONTENT.sdg.description}
                  </p>
                  <ul className="space-y-3">
                    {ABOUTCONTENT.sdg.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {ABOUTCONTENT.sdg.goalNumbers.map((sdgNumber) => (
                      <motion.div
                        key={sdgNumber}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="aspect-square w-20 rounded-lg bg-gradient-to-br from-background to-muted/30 p-1 shadow-lg backdrop-blur-md dark:from-muted/10 dark:to-muted/20"
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/50 dark:bg-muted/30">
                          <span className="text-lg font-bold">{sdgNumber}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction />
      </main>
    </>
  );
}
