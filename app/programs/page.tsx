"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Reusing components from the existing design
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
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl"
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
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
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
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
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
        className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
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
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-red-500/20 blur-3xl"
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

// Filter button component
const FilterButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-primary text-white shadow-md shadow-primary/20"
          : "bg-muted/20 text-muted-foreground hover:bg-muted/40"
      }`}
    >
      {children}
    </button>
  );
};

// Work Card component
const WorkCard: React.FC<{
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  outcomes: string[];
  link: string;
  index: number;
}> = ({ title, category, year, image, description, outcomes, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group overflow-hidden rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {category}
            </span>
            <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {year}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-primary">
            Key Outcomes:
          </h4>
          <ul className="space-y-1">
            {outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start text-xs">
                <svg
                  className="mr-2 mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/20 text-sm hover:bg-primary/10 hover:text-primary"
          onClick={() => window.open(link, "_blank")}
        >
          View Project Details
        </Button>
      </div>
    </motion.div>
  );
};

export default function WorksPage() {
  // Create scroll animation
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredWorks, setFilteredWorks] = useState<typeof works>([]);

  // Works data
  const works = React.useMemo(
    () => [
      {
        id: 1,
        title: "Rural Education Transformation Project",
        category: "Education",
        year: "2023-2024",
        image: "/api/placeholder/640/360",
        description:
          "A comprehensive project focused on improving educational outcomes in rural areas through digital integration, teacher training, and infrastructure improvements.",
        outcomes: [
          "15 rural schools modernized with digital facilities",
          "85% improvement in student digital literacy",
          "378 teachers trained in modern teaching methodologies",
        ],
        tags: ["education", "technology", "rural"],
        link: "#project-details",
      },
      {
        id: 2,
        title: "Women's Cooperative Development Initiative",
        category: "Economic Empowerment",
        year: "2022-2023",
        image: "/api/placeholder/640/360",
        description:
          "Created sustainable women-led businesses through cooperative models, focusing on traditional crafts with modern market access strategies.",
        outcomes: [
          "3 successful women's cooperatives established",
          "127 women gained financial independence",
          "42% average increase in household income",
        ],
        tags: ["women", "economic", "rural"],
        link: "#project-details",
      },
      {
        id: 3,
        title: "Clean Water Infrastructure Project",
        category: "Health",
        year: "2022-2023",
        image: "/api/placeholder/640/360",
        description:
          "Developed sustainable water purification and distribution systems in areas with contaminated groundwater, using locally maintainable technology.",
        outcomes: [
          "Clean water access for 12 villages",
          "75% reduction in waterborne illnesses",
          "Local maintenance teams trained in 8 communities",
        ],
        tags: ["health", "infrastructure", "water"],
        link: "#project-details",
      },
      {
        id: 4,
        title: "Youth Leadership & Social Innovation Camp",
        category: "Youth Development",
        year: "2023",
        image: "/api/placeholder/640/360",
        description:
          "An intensive residential program teaching leadership, social entrepreneurship, and collaborative problem-solving to youth from diverse backgrounds.",
        outcomes: [
          "150 youth trained from 5 countries",
          "32 social impact projects launched",
          "87% of participants report improved leadership abilities",
        ],
        tags: ["youth", "education", "leadership"],
        link: "#project-details",
      },
      {
        id: 5,
        title: "Climate-Resilient Farming Initiative",
        category: "Environment",
        year: "2021-2023",
        image: "/api/placeholder/640/360",
        description:
          "Introduced sustainable agricultural practices to smallholder farmers in regions facing climate challenges, focusing on water conservation and organic methods.",
        outcomes: [
          "312 farmers adopted climate-smart techniques",
          "26% increase in crop yields despite drought conditions",
          "Reduced chemical fertilizer usage by 68%",
        ],
        tags: ["environment", "agriculture", "rural"],
        link: "#project-details",
      },
      {
        id: 6,
        title: "Mobile Health Clinics Network",
        category: "Healthcare",
        year: "2022-2024",
        image: "/api/placeholder/640/360",
        description:
          "Established a network of mobile health clinics to provide essential medical services to remote communities with limited healthcare access.",
        outcomes: [
          "8 mobile clinics operating across 45 villages",
          "12,500+ patients received care",
          "Prenatal care access increased by 65% in service areas",
        ],
        tags: ["health", "rural", "infrastructure"],
        link: "#project-details",
      },
      {
        id: 7,
        title: "Digital Skills for Entrepreneurs Program",
        category: "Economic Development",
        year: "2023-2024",
        image: "/api/placeholder/640/360",
        description:
          "Training program equipping small business owners with digital marketing, e-commerce, and financial technology skills to expand their market reach.",
        outcomes: [
          "185 entrepreneurs completed the program",
          "68% reported increased business revenue",
          "23 businesses established online sales channels",
        ],
        tags: ["economic", "technology", "education"],
        link: "#project-details",
      },
      {
        id: 8,
        title: "Waste Management & Recycling Initiative",
        category: "Environment",
        year: "2022-2023",
        image: "/api/placeholder/640/360",
        description:
          "Community-based waste management program introducing sustainable waste sorting, recycling systems, and creating value from recyclable materials.",
        outcomes: [
          "5 communities implemented comprehensive recycling systems",
          "Waste to landfill reduced by 45%",
          "18 green jobs created in waste processing",
        ],
        tags: ["environment", "waste", "community"],
        link: "#project-details",
      },
      {
        id: 9,
        title: "Girls' STEM Education Project",
        category: "Education",
        year: "2023-2024",
        image: "/api/placeholder/640/360",
        description:
          "Specialized program to encourage girls' participation in STEM subjects through hands-on workshops, mentorship, and technology exposure.",
        outcomes: [
          "320 girls participated in STEM workshops",
          "92% reported increased interest in STEM careers",
          "15 schools received STEM learning equipment",
        ],
        tags: ["education", "women", "technology"],
        link: "#project-details",
      },
    ],
    []
  );

  // Filter works based on active filter
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredWorks(works);
    } else {
      setFilteredWorks(
        works.filter((work) => work.tags.includes(activeFilter))
      );
    }
  }, [works, activeFilter]);

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
              <AnimatedBadge>Our Work & Projects</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                Transforming Communities{" "}
                <span className="relative inline-block">
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
                Explore our portfolio of completed and ongoing projects that
                demonstrate our commitment to sustainable development and
                community empowerment. Each project represents a collaborative
                journey with local partners to create meaningful, lasting
                change.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Our Projects</SectionHeading>

            {/* Filter buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex flex-wrap justify-center gap-3"
            >
              <FilterButton
                active={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
              >
                All Projects
              </FilterButton>
              <FilterButton
                active={activeFilter === "education"}
                onClick={() => setActiveFilter("education")}
              >
                Education
              </FilterButton>
              <FilterButton
                active={activeFilter === "health"}
                onClick={() => setActiveFilter("health")}
              >
                Health
              </FilterButton>
              <FilterButton
                active={activeFilter === "environment"}
                onClick={() => setActiveFilter("environment")}
              >
                Environment
              </FilterButton>
              <FilterButton
                active={activeFilter === "economic"}
                onClick={() => setActiveFilter("economic")}
              >
                Economic Development
              </FilterButton>
              <FilterButton
                active={activeFilter === "women"}
                onClick={() => setActiveFilter("women")}
              >
                Women & Girls
              </FilterButton>
              <FilterButton
                active={activeFilter === "rural"}
                onClick={() => setActiveFilter("rural")}
              >
                Rural Development
              </FilterButton>
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
                  link={work.link}
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
                  No projects found
                </h3>
                <p className="text-muted-foreground">
                  No projects match your current filter. Please try another
                  category.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
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
                Partner With Us
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Join our network of collaborators and contribute your expertise
                to our ongoing and future projects. Together, we can create
                sustainable solutions to complex challenges.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="bg-primary font-medium text-white hover:bg-primary/90">
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/20 font-medium hover:bg-primary/10 hover:text-primary"
                >
                  View Upcoming Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
