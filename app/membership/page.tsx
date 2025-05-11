"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import FaqItem from "@/components/shared/faq-item";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedBadge from "@/components/shared/animated-badge";
import AnimatedUnderline from "@/components/shared/animated-underline";
import SectionHeading from "@/components/shared/section-heading";
import MEMBERSHIP_CONTENT from "@/data/membership.data";
import { getIconByName } from "@/lib/icons";
import MembershipCard from "@/components/membership/membership-card";
import CallToAction from "@/components/membership/call-to-action";

export default function MembershipPage() {
  // Destructure content sections for easier access
  const { hero, membershipOptions, benefits, faq, contact } =
    MEMBERSHIP_CONTENT;

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
              <AnimatedBadge>{hero.badge}</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                {hero.title.split("Our Mission")[0]}
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
                {hero.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Membership Types Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{membershipOptions.heading}</SectionHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground"
            >
              {membershipOptions.description}
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {membershipOptions.memberships.map((membership, index) => (
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
            <SectionHeading>{benefits.heading}</SectionHeading>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
                >
                  <div
                    className={`mb-4 rounded-full bg-${benefit.color}-500/10 p-3 w-14 h-14 flex items-center justify-center`}
                  >
                    {getIconByName(
                      benefit.icon,
                      `h-8 w-8 text-${benefit.color}-500`
                    )}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{faq.heading}</SectionHeading>

            <div className="mx-auto max-w-4xl space-y-4">
              {faq.questions.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
        {/* Contact Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>{contact.heading}</SectionHeading>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-8 text-lg text-muted-foreground">
                {contact.description}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                  <MessageCircle />
                  {contact.buttonText}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
