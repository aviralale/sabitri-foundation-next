"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedGradientBg from "./shared/animated-gradient-bg";
import AnimatedBadge from "./shared/animated-badge";
import ImageWithParallax from "./shared/image-with-parallax";
import StatsCounter from "./shared/stats-counter";
import { HOMEDATA } from "@/data/home.data";

export default function HeroSection() {
  const { hero } = HOMEDATA;

  return (
    <>
      <main className="relative overflow-x-hidden">
        <AnimatedGradientBg />

        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <AnimatedBadge>{hero.badge}</AnimatedBadge>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:mt-8 xl:text-7xl dark:from-primary dark:via-purple-400 dark:to-blue-400"
                >
                  {hero.title.firstPart}{" "}
                  <span className="relative text-primary inline-block">
                    {hero.title.highlight}
                    <motion.svg
                      width="100%"
                      height="8"
                      viewBox="0 0 200 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -bottom-2 left-0 w-full"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
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
                  </span>{" "}
                  {hero.title.lastPart}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
                >
                  {hero.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="mt-12 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group relative overflow-hidden px-8 py-6 text-base font-medium shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Link href={hero.buttons[0].href}>
                      <span className="relative z-10">
                        {hero.buttons[0].text}
                      </span>
                      <span className="absolute inset-0 -z-10 translate-y-[102%] bg-gradient-to-r from-primary/90 to-blue-600/90 transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="relative overflow-hidden border-2 border-primary/20 px-8 py-6 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
                  >
                    <Link href={hero.buttons[1].href} className="group">
                      <span className="text-nowrap bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-blue-600 dark:group-hover:from-primary dark:group-hover:to-blue-400">
                        {hero.buttons[1].text}
                      </span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="mt-16 flex w-full justify-between gap-4 rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md dark:bg-muted/10"
                >
                  {hero.stats.map((stat, index) => (
                    <StatsCounter
                      key={index}
                      number={stat.number}
                      label={stat.label}
                      delay={stat.delay}
                    />
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.23, 1.02, 0.34, 1],
                }}
                className="relative aspect-square w-full max-w-lg justify-self-center rounded-2xl bg-gradient-to-br from-background to-muted/30 p-2 shadow-2xl backdrop-blur-md lg:justify-self-end dark:from-muted/10 dark:to-muted/20"
              >
                <ImageWithParallax />

                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-8 -left-8 flex items-center gap-4 rounded-xl border border-muted bg-background/90 p-4 shadow-lg backdrop-blur-md dark:border-muted/20 dark:bg-muted/80"
                >
                  <div className="flex -space-x-2">
                    {hero.teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-gray-800 ring-2 ring-primary/10"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${member.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                          }}
                          title={member.name}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Join our team</p>
                    <p className="text-xs text-muted-foreground">
                      Work with us
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -right-8 -top-8 rounded-xl border border-muted bg-background/90 p-4 shadow-lg backdrop-blur-md dark:border-muted/20 dark:bg-muted/80"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 p-1.5 shadow-lg shadow-green-500/20">
                      <svg
                        className="h-full w-full text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">UN SDG Aligned</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
