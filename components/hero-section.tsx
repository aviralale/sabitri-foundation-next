"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Enhanced animated gradient background with more layers
const AnimatedGradientBg = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-green-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5,
        }}
        className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-red-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
      />
    </div>
  );
};

// Enhanced ImageWithParallax component with scroll effect
const ImageWithParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth - 0.5) * 30;
      const moveY = (clientY / innerHeight - 0.5) * 30;

      ref.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(20px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (ref.current) {
          ref.current.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
        }
      }}
    >
      <div
        ref={ref}
        className="h-full w-full transition-transform duration-300 ease-out"
      >
        <Image
          fill
          className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-110 dark:brightness-90"
          src="https://www.sabitrifoundation.org/img/images/Logo.svg"
          alt="Global Collaboration"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 opacity-60 mix-blend-overlay transition-opacity duration-300 hover:opacity-70 dark:from-blue-500/30 dark:to-purple-500/30 dark:mix-blend-color-dodge"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white opacity-70"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.7 + 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Stats counter component with animation
interface StatsCounterProps {
  number: string;
  label: string;
  delay?: number;
}

const StatsCounter = ({ number, label, delay = 0 }: StatsCounterProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-4xl font-bold text-transparent dark:from-primary dark:to-purple-400">
        {number}+
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
};

// Animated badge component
const AnimatedBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-md dark:bg-primary/10"
    >
      <motion.span
        className="mr-2.5 inline-block h-2.5 w-2.5 rounded-full bg-primary"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {children}

      <motion.div
        className="absolute -inset-px -z-10 rounded-full opacity-50"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(124, 58, 237, 0)",
            "0 0 0 4px rgba(124, 58, 237, 0.3)",
            "0 0 0 0 rgba(124, 58, 237, 0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
};

export default function HeroSection() {
  // Create scroll animation
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const teamMembers = [
    {
      name: "Aarav Sharma",
      image: "https://avatars.githubusercontent.com/u/121365480?v=4",
    },
    {
      name: "Luna Rai",
      image: "https://ui-avatars.com/api/?name=Luna+Rai&background=random",
    },
    {
      name: "Kabir Joshi",
      image: "https://ui-avatars.com/api/?name=Kabir+Joshi&background=random",
    },
    {
      name: "Bishal Chaurasia",
      image: "https://bisaalchaurasia.com/images/image.jpeg",
    },
  ];

  return (
    <>
      <main className="relative overflow-x-hidden">
        <motion.div style={{ opacity: backgroundOpacity }}>
          <AnimatedGradientBg />
        </motion.div>

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
                <AnimatedBadge>
                  Sabitri Foundation | Est. Dec. 2023
                </AnimatedBadge>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:mt-8 xl:text-7xl dark:from-primary dark:via-purple-400 dark:to-blue-400"
                >
                  Making a Difference,{" "}
                  <span className="relative text-primary inline-block">
                    One Life
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
                  at a Time
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
                >
                  Sabitri Foundation brings together non-governmental
                  organizations worldwide to collaborate, share resources, and
                  drive sustainable development initiatives that create
                  meaningful impact in communities that need it most.
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
                    <Link href="#join">
                      <span className="relative z-10">Join Our Network</span>
                      <span className="absolute inset-0 -z-10 translate-y-[102%] bg-gradient-to-r from-primary/90 to-blue-600/90 transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="relative overflow-hidden border-2 border-primary/20 px-8 py-6 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
                  >
                    <Link href="#donate" className="group">
                      <span className="text-nowrap bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-blue-600 dark:group-hover:from-primary dark:group-hover:to-blue-400">
                        Support Our Mission
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
                  <StatsCounter number="6" label="Countries" delay={0.9} />
                  <StatsCounter number="7" label="Programs" delay={1.0} />
                  <StatsCounter
                    number="1000"
                    label="Lives Impacted"
                    delay={1.1}
                  />
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
                    {teamMembers.map((member, index) => (
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
