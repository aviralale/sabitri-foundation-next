"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Reusable components from the original design
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

// Animated heading underline component
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

// Animated section heading component
const SectionHeading: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mb-16 text-center text-4xl font-bold md:text-5xl ${className}`}
    >
      <span className="relative">
        {children}
        <AnimatedUnderline />
      </span>
    </motion.h2>
  );
};

// Timeline component for history section
const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
  delay?: number;
}> = ({ year, title, description, isLeft = true, delay = 0 }) => {
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

// Team member card component
interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  index?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="aspect-square w-full">
          <Image
            fill
            src={image}
            alt={name}
            className="h-full w-full rounded-lg object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </motion.div>
  );
};

// Value card component
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col items-center rounded-xl border border-muted/20 bg-muted/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="mb-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 p-3">
        <div className="rounded-full bg-gradient-to-br from-primary to-blue-500 p-3">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

// Animated badge component
const AnimatedBadge: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

export default function AboutUsPage() {
  // Create scroll animation
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Team members data
  const teamMembers = [
    {
      name: "Aarav Sharma",
      role: "Founder & Executive Director",
      image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=random",
    },
    {
      name: "Luna Rai",
      role: "Director of Operations",
      image: "https://ui-avatars.com/api/?name=Luna+Rai&background=random",
    },
    {
      name: "Kabir Joshi",
      role: "Program Manager",
      image: "https://ui-avatars.com/api/?name=Kabir+Joshi&background=random",
    },
    {
      name: "Bishal Chaurasia",
      role: "Technology Lead",
      image: "https://bisaalchaurasia.com/images/image.jpeg",
    },
    {
      name: "Ananya Patel",
      role: "Partnerships Director",
      image: "https://ui-avatars.com/api/?name=Ananya+Patel&background=random",
    },
    {
      name: "Rohan Thapa",
      role: "Community Outreach",
      image: "https://ui-avatars.com/api/?name=Rohan+Thapa&background=random",
    },
  ];

  // Values data
  const values = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We believe in the power of partnerships and collective action to create sustainable impact.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "We are committed to transparency, accountability, and ethical practices in all our work.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "Global Perspective",
      description:
        "We embrace diversity and respect cultural contexts while working across borders.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We seek creative solutions and embrace new approaches to address complex challenges.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Sustainability",
      description:
        "We design programs with long-term impact in mind, focusing on self-sustaining solutions.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Adaptability",
      description:
        "We remain flexible and responsive to changing needs and emerging opportunities.",
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
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-24 lg:pb-32 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <AnimatedBadge>About Sabitri Foundation</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-primary dark:via-purple-400 dark:to-blue-400"
              >
                Our Story, Mission &{" "}
                <span className="relative inline-block">
                  Vision
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                Founded in December 2023, Sabitri Foundation was established
                with a simple yet powerful vision: to create a collaborative
                platform where NGOs worldwide can unite, share resources, and
                amplify their collective impact. We work across borders to
                address some of the most pressing social, environmental, and
                economic challenges of our time.
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
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To foster global collaboration among non-governmental
                  organizations, enabling them to share knowledge, pool
                  resources, and implement effective programs that create
                  lasting positive change in underserved communities. We strive
                  to bridge gaps, build capacity, and amplify the impact of
                  grassroots initiatives addressing critical social and
                  environmental needs.
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
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  A world where collaborative action transcends geographical,
                  cultural, and organizational boundaries, where NGOs work
                  together seamlessly to create inclusive, equitable, and
                  sustainable communities. We envision a future where every
                  individual has access to basic needs, opportunities for
                  growth, and the ability to participate fully in shaping a
                  better world for generations to come.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Our Core Values</SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
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
            <SectionHeading>Our Journey</SectionHeading>
            <div className="relative mx-auto w-full">
              {/* Center line for larger screens */}
              <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/80 to-blue-500/80 md:block" />

              <div className="space-y-0">
                <TimelineItem
                  year="Dec 2023"
                  title="Foundation Established"
                  description="Sabitri Foundation was founded with a mission to create a collaborative network of NGOs worldwide."
                  isLeft={true}
                  delay={0.1}
                />
                <TimelineItem
                  year="Jan 2024"
                  title="First Partnership"
                  description="Initiated our first collaborative project with local NGOs in Nepal, focusing on educational access."
                  isLeft={false}
                  delay={0.2}
                />
                <TimelineItem
                  year="Mar 2024"
                  title="Global Expansion"
                  description="Extended our network to include partner organizations across South Asia, connecting resources and expertise."
                  isLeft={true}
                  delay={0.3}
                />
                <TimelineItem
                  year="Jun 2024"
                  title="Innovation Lab Launch"
                  description="Established our digital collaboration platform to facilitate knowledge sharing among member organizations."
                  isLeft={false}
                  delay={0.4}
                />
                <TimelineItem
                  year="Sep 2024"
                  title="First Annual Summit"
                  description="Organized our inaugural Global Collaboration Summit, bringing together partners from 6 countries."
                  isLeft={true}
                  delay={0.5}
                />
                <TimelineItem
                  year="Dec 2024"
                  title="Impact Milestone"
                  description="Celebrated our first anniversary with 7 active programs and over 100 lives impacted through our collaborative initiatives."
                  isLeft={false}
                  delay={0.6}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Our Team</SectionHeading>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
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
            <SectionHeading>Our Approach</SectionHeading>
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
                    Collaborative Framework
                  </h3>
                  <p className="text-sm text-white/80">
                    Our unique methodology brings together diverse organizations
                    to create systemic change.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    Community-Driven Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    We believe that lasting change must be rooted in the needs
                    and aspirations of local communities. Our programs are
                    designed in collaboration with community members to ensure
                    relevance, ownership, and long-term sustainability.
                  </p>
                </div>

                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    Resource Sharing Network
                  </h3>
                  <p className="text-muted-foreground">
                    Through our innovative platform, member organizations can
                    share knowledge, best practices, expertise, and even
                    physical resources. This collaborative approach maximizes
                    efficiency and allows for greater impact with limited
                    resources.
                  </p>
                </div>

                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10">
                  <h3 className="mb-3 text-xl font-semibold">
                    Impact Measurement
                  </h3>
                  <p className="text-muted-foreground">
                    We are committed to rigorous evaluation and continuous
                    learning. Every initiative includes clear metrics and
                    evaluation frameworks to track progress, identify areas for
                    improvement, and demonstrate meaningful impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SDG Alignment Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>UN SDG Alignment</SectionHeading>
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
                    Committed to Global Goals
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Our work is aligned with the United Nations Sustainable
                    Development Goals (SDGs), a universal call to action to end
                    poverty, protect the planet, and ensure prosperity for all.
                    We specifically focus on these priority areas:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
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
                      <span>SDG 1: No Poverty</span>
                    </li>
                    <li className="flex items-start">
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
                      <span>SDG 4: Quality Education</span>
                    </li>
                    <li className="flex items-start">
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
                      <span>SDG 5: Gender Equality</span>
                    </li>
                    <li className="flex items-start">
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
                      <span>SDG 13: Climate Action</span>
                    </li>
                    <li className="flex items-start">
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
                      <span>SDG 17: Partnerships for the Goals</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 4, 5, 13, 17].map((sdgNumber) => (
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
                  Join Us in Making a Difference
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground dark:text-white/70">
                  Whether you&apos;re an NGO looking to collaborate, a volunteer
                  with skills to share, or a donor interested in supporting our
                  mission, there are many ways to get involved with Sabitri
                  Foundation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden px-8 py-6 text-base font-medium shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <span className="relative z-10">Partner With Us</span>
                    <span className="absolute inset-0 -z-10 translate-y-[102%] bg-gradient-to-r from-primary/90 to-blue-600/90 transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative overflow-hidden border-2 border-primary/20 px-8 py-6 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
                  >
                    <span className="text-nowrap bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-blue-600 dark:group-hover:from-primary dark:group-hover:to-blue-400">
                      Support Our Work
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
