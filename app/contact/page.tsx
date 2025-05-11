"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedUnderline from "@/components/shared/animated-underline";
import AnimatedBadge from "@/components/shared/animated-badge";
import { ContactInfoCard } from "@/components/contact/contact-info-card";
import FaqItem from "@/components/shared/faq-item";
import FormInput from "@/components/contact/form-input";
import { CONTACTCONTENT } from "@/data/contact.data";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.currentTarget.reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
              <AnimatedBadge>{CONTACTCONTENT.hero.badge}</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                {CONTACTCONTENT.hero.title}{" "}
                <span className="relative text-primary inline-block">
                  {CONTACTCONTENT.hero.highlightedTitle}
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {CONTACTCONTENT.hero.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="relative py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CONTACTCONTENT.contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  index={index}
                >
                  {info.details.map((detail, i) => (
                    <p key={i} className={i === 0 ? "mt-1" : ""}>
                      {detail}
                    </p>
                  ))}
                  {info.link && (
                    <a
                      href={info.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-primary hover:underline"
                    >
                      {info.link.text}
                    </a>
                  )}
                </ContactInfoCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left column - Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold">
                    {CONTACTCONTENT.form.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {CONTACTCONTENT.form.description}
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/30"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                      <h3 className="text-lg font-medium">
                        {CONTACTCONTENT.form.success.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {CONTACTCONTENT.form.success.message}
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md"
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      {CONTACTCONTENT.form.inputs.slice(0, 2).map((input) => (
                        <FormInput
                          key={input.name}
                          label={input.label}
                          placeholder={input.placeholder}
                          name={input.name}
                          type={input.type}
                          required={input.required}
                        />
                      ))}
                    </div>
                    <FormInput
                      label={CONTACTCONTENT.form.inputs[2].label}
                      type={CONTACTCONTENT.form.inputs[2].type}
                      placeholder={CONTACTCONTENT.form.inputs[2].placeholder}
                      name={CONTACTCONTENT.form.inputs[2].name}
                      required={CONTACTCONTENT.form.inputs[2].required}
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormInput
                        label={CONTACTCONTENT.form.inputs[3].label}
                        type={CONTACTCONTENT.form.inputs[3].type}
                        placeholder={CONTACTCONTENT.form.inputs[3].placeholder}
                        name={CONTACTCONTENT.form.inputs[3].name}
                        required={CONTACTCONTENT.form.inputs[3].required}
                      />
                      <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                          Inquiry Type
                        </label>
                        <select className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50">
                          {CONTACTCONTENT.form.selectOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <FormInput
                      label={CONTACTCONTENT.form.inputs[4].label}
                      type={CONTACTCONTENT.form.inputs[4].type}
                      placeholder={CONTACTCONTENT.form.inputs[4].placeholder}
                      name={CONTACTCONTENT.form.inputs[4].name}
                      required={CONTACTCONTENT.form.inputs[4].required}
                    />
                    <div className="mt-6">
                      <Button
                        type="submit"
                        className="w-full bg-primary font-medium transition-all hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="mr-2 h-4 w-4 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            {CONTACTCONTENT.form.submittingText}
                          </>
                        ) : (
                          CONTACTCONTENT.form.submitText
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Right column - Map and FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Map placeholder */}
                <div className="mb-10 overflow-hidden rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-md">
                  <div className="aspect-video w-full bg-muted/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.112186599058!2d85.367872!3d27.6935334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b50cb347f1f%3A0x73c05143e3a8b2df!2sSabitri%20Reading%20Room!5e0!3m2!1sen!2snp!4v1715243037168!5m2!1sen!2snp"
                      loading="lazy"
                      allowFullScreen
                      className="h-full w-full border-0"
                      title="Sabitri Reading Room Location"
                    ></iframe>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h3 className="mb-6 text-2xl font-bold">
                    {CONTACTCONTENT.faq.title}
                  </h3>
                  <div className="space-y-4">
                    {CONTACTCONTENT.faq.items.map((faq, index) => (
                      <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
