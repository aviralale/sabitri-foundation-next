"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

// Membership Card component
interface MembershipCardProps {
  title: string;
  period?: string;
  features: string[];
  index: number;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  features,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`group relative overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 hover:shadow-lg ${"border-primary/30 bg-primary/5"}`}
    >
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <div className="mb-6"></div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
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
              {feature}
            </li>
          ))}
        </ul>
        <Button className={`w-full`}>Join Now</Button>
      </div>
    </motion.div>
  );
};

// FAQ component
interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="overflow-hidden rounded-lg border border-muted/20 bg-muted/5 backdrop-blur-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-medium"
      >
        {question}
        <svg
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ${
          isOpen
            ? "max-h-96 p-4 pt-0 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <p className="text-sm text-muted-foreground">{answer}</p>
      </div>
    </motion.div>
  );
};

export default function MembershipPage() {
  // Create scroll animation
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Membership data
  const memberships = [
    {
      title: "Nonprofit Membership",
      price: "$350",
      period: "year",
      features: [
        "Access to capacity building resources",
        "Partnership opportunities with other nonprofits",
        "Participation in collaborative projects",
        "Representation in advocacy initiatives",
        "Quarterly networking events",
        "Shared resource library access",
      ],
      recommended: false,
    },
    {
      title: "Individual Membership",
      price: "$75",
      period: "year",
      features: [
        "Voting rights in annual general meetings",
        "Volunteer opportunities in projects",
        "Access to exclusive events and workshops",
        "Monthly newsletter and impact reports",
        "Discounted entry to paid events",
        "Digital badge for social media profiles",
      ],
      recommended: true,
    },
    {
      title: "Affiliate Membership",
      price: "$200",
      period: "year",
      features: [
        "Brand visibility on our platform",
        "Corporate volunteering opportunities",
        "Access to CSR project frameworks",
        "Co-branding opportunities for initiatives",
        "Quarterly impact assessment reports",
        "Priority invitation to conferences",
      ],
      recommended: false,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What are the benefits of becoming a member?",
      answer:
        "Membership provides access to our resource network, collaboration opportunities, capacity building resources, advocacy support, and the ability to participate in our governance through voting rights.",
    },
    {
      question: "How are membership fees utilized?",
      answer:
        "Membership fees directly support our operational infrastructure, capacity building programs, advocacy efforts, and provide seed funding for collaborative initiatives among members.",
    },
    {
      question: "Can I upgrade my membership level later?",
      answer:
        "Yes, you can upgrade your membership at any time. The difference in fee will be prorated for the remaining period of your current membership term.",
    },
    {
      question:
        "Is there a membership option for students or low-income individuals?",
      answer:
        "We offer discounted membership rates for students and individuals from low-income backgrounds. Please contact our membership team for more information.",
    },
    {
      question: "How can I get involved beyond just paying membership fees?",
      answer:
        "Members can volunteer for projects, join working groups, participate in governance, contribute specialized skills, attend events, and help with fundraising efforts.",
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
              <AnimatedBadge>Join Our Community</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                Become a Part of{" "}
                <span className="relative text-primary inline-block">
                  Our Mission
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                Join our growing community of change-makers dedicated to
                sustainable development and community empowerment. As a member,
                you&apos;ll gain access to resources, partnerships, and
                opportunities to make a meaningful impact.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Membership Types Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Membership Options</SectionHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground"
            >
              Choose the membership type that aligns with your goals and how you
              want to engage with our mission. All members become part of our
              collaborative network working toward sustainable development.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {memberships.map((membership, index) => (
                <MembershipCard
                  key={index}
                  title={membership.title}
                  period={membership.period}
                  features={membership.features}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Why Join Our NGO?</SectionHeading>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-blue-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Collaborative Network
                </h3>
                <p className="text-muted-foreground">
                  Connect with like-minded organizations and individuals working
                  toward similar goals, creating opportunities for partnerships
                  and collective impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-green-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Resource Access</h3>
                <p className="text-muted-foreground">
                  Gain access to toolkits, research, best practices, and funding
                  opportunities that can enhance your capacity and effectiveness
                  in implementing projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-purple-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Amplified Voice</h3>
                <p className="text-muted-foreground">
                  Join our advocacy efforts and campaigns with a stronger
                  collective voice, influencing policy decisions and public
                  awareness on critical development issues.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-orange-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Knowledge Sharing
                </h3>
                <p className="text-muted-foreground">
                  Learn from and contribute to a growing knowledge base of best
                  practices, case studies, and lessons learned from projects
                  around the world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-red-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-red-500"
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
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Governance Participation
                </h3>
                <p className="text-muted-foreground">
                  Have a say in the strategic direction of our organization
                  through voting rights, ensuring that our work remains relevant
                  and responsive to community needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
              >
                <div className="mb-4 rounded-full bg-cyan-500/10 p-3 w-14 h-14 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-cyan-500"
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
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Capacity Building
                </h3>
                <p className="text-muted-foreground">
                  Access training workshops, mentorship programs, and technical
                  assistance to strengthen your organizational or personal
                  capacity in development work.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Frequently Asked Questions</SectionHeading>

            <div className="mx-auto max-w-4xl space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center backdrop-blur-md md:p-12 lg:p-16"
            >
              <AnimatedBadge>Limited Time Offer</AnimatedBadge>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                Join Today and Become a Reason for Someone&apos;s Smile
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Become a part of our growing community dedicated to making a
                positive impact.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="bg-primary px-8 py-6 text-lg font-medium text-white hover:bg-primary/90">
                  Join Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Have Questions?</SectionHeading>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-8 text-lg text-muted-foreground">
                Our membership team is ready to assist you with any questions
                about joining our community or the benefits of membership.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90">
                  <MessageCircle />
                  Contact Membership Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
