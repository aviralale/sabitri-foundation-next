"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, MapPin, Clock, MessageSquare } from "lucide-react";

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

// Contact info card component
const ContactInfoCard = ({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col items-center rounded-xl border border-muted/20 bg-muted/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </motion.div>
  );
};

// FAQ accordion component
const FaqItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="overflow-hidden rounded-lg border border-muted/20 bg-muted/5 backdrop-blur-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-medium transition-all duration-200 hover:bg-muted/10"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
      </button>
      <motion.div
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        initial={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-muted/20"
      >
        <div className="p-4 text-sm text-muted-foreground">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

// Form input component
const FormInput = ({
  label,
  type = "text",
  placeholder = "",
  name,
  required = false,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
          rows={5}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      )}
    </div>
  );
};

export default function ContactPage() {
  // Create scroll animation
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.currentTarget.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // FAQ data
  const faqs = [
    {
      question: "How can I volunteer with your organization?",
      answer:
        "We welcome volunteers with various skills and backgrounds. Please fill out our contact form specifying your interest in volunteering, and our volunteer coordinator will reach out with current opportunities that match your skills and availability.",
    },
    {
      question: "Do you offer internship opportunities?",
      answer:
        "Yes, we offer internships for students and recent graduates in fields related to sustainable development, education, public health, and nonprofit management. Internships are available both at our headquarters and at project sites.",
    },
    {
      question: "How can my organization partner with you on projects?",
      answer:
        "We're always looking for strategic partners who share our vision. Organizations interested in collaboration can reach out through our contact form or directly send a text through whatsapp with information about your organization and potential areas of collaboration.",
    },
    {
      question: "Do you accept donations of goods or services?",
      answer:
        "Yes, we accept in-kind donations that align with our project needs. Please contact us with details about what you'd like to donate, and our team will evaluate if it meets current project requirements and coordinate logistics if applicable.",
    },
    {
      question:
        "How can I request a speaker from your organization for an event?",
      answer:
        "Our team members are available for speaking engagements related to sustainable development, community empowerment, and our project areas. Please submit your request through the contact form at least 6 weeks before your event, including details about the audience, topic, and date.",
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
              <AnimatedBadge>Get In Touch</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                Let&apos;s Start a{" "}
                <span className="relative text-primary inline-block">
                  Conversation
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                Whether you&apos;re interested in collaborating on a project,
                joining our team, or simply learning more about our work,
                we&apos;d love to hear from you. Reach out using any of the
                methods below, and our team will respond promptly.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="relative py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ContactInfoCard
                icon={<MapPin size={24} />}
                title="Visit Our Office"
                index={0}
              >
                <p className="mt-1">Kalash Complex, Suncity, Pepsicola</p>
                <p>Kathmandu, Nepal</p>
                <a
                  href="https://www.google.com/maps/place/Sabitri+Reading+Room/@27.6935334,85.367872,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b50cb347f1f:0x73c05143e3a8b2df!8m2!3d27.6935287!4d85.3704469!16s%2Fg%2F11vqschd3k?entry=ttu\&g\_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D](https://www.google.com/maps/place/Sabitri+Reading+Room/@27.6935334,85.367872,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b50cb347f1f:0x73c05143e3a8b2df!8m2!3d27.6935287!4d85.3704469!16s%2Fg%2F11vqschd3k?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-primary hover:underline"
                >
                  View on Map
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                icon={<Clock size={24} />}
                title="Office Hours"
                index={1}
              >
                <p className="mt-1">Sunday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: Closed</p>
              </ContactInfoCard>

              <ContactInfoCard
                icon={<MessageSquare size={24} />}
                title="Communication Channels"
                index={2}
              >
                <p className="mt-1">Email: sabitrifoundation14@gmail.com</p>
                <p>Phone: +977-1-5911394</p>
                <p>WhatsApp: +977 9704804907</p>
              </ContactInfoCard>
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
                  <h2 className="mb-4 text-3xl font-bold">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
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
                        Message Sent Successfully!
                      </h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. Our team will respond to your
                      inquiry shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md"
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormInput
                        label="First Name"
                        placeholder="Enter your first name"
                        name="firstName"
                        required
                      />
                      <FormInput
                        label="Last Name"
                        placeholder="Enter your last name"
                        name="lastName"
                        required
                      />
                    </div>
                    <FormInput
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormInput
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                      />
                      <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                          Inquiry Type
                        </label>
                        <select className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50">
                          <option value="">Select an option</option>
                          <option value="partnership">
                            Partnership Inquiry
                          </option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donation">Donation Information</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <FormInput
                      label="Message"
                      type="textarea"
                      placeholder="How can we help you?"
                      name="message"
                      required
                    />
                    <div className="mt-6">
                      <Button
                        type="submit"
                        className="w-full bg-primary font-medium text-white transition-all hover:bg-primary/90"
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
                            Sending...
                          </>
                        ) : (
                          "Send Message"
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
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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
                Stay Updated
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Subscribe to our newsletter to receive updates on our projects,
                events, and opportunities to get involved in creating positive
                change.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow rounded-lg border border-muted/30 bg-white/20 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <Button className="whitespace-nowrap bg-primary font-medium text-white hover:bg-primary/90">
                  Subscribe Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
