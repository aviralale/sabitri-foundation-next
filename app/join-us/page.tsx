"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedUnderline from "@/components/shared/animated-underline";
import AnimatedBadge from "@/components/shared/animated-badge";
import FormInput from "@/components/contact/form-input";
import FaqItem from "@/components/shared/faq-item";

// Join Foundation Page Content
const JOINCONTENT = {
    hero: {
        badge: "Join Our Community",
        title: "Become part of",
        highlightedTitle: "our foundation",
        description: "Join a community of passionate individuals dedicated to making a difference. Your skills, experience, and dedication can help us achieve our mission and create lasting impact in the communities we serve."
    },
    perks: [
        {
            icon: "Users",
            title: "Connect with Like-minded People",
            description: "Build meaningful relationships with other members who share your passion for social impact and community service."
        },
        {
            icon: "Lightbulb",
            title: "Develop New Skills",
            description: "Access exclusive workshops, training sessions, and mentorship opportunities to grow professionally and personally."
        },
        {
            icon: "HandHeart",
            title: "Make a Real Impact",
            description: "Contribute directly to projects that address important social challenges and create positive change."
        }
    ],
    form: {
        title: "Join Our Foundation",
        description: "Fill out the form below to start your application. We'll review your information and get back to you within 3-5 business days.",
        inputs: [
            {
                label: "First Name",
                type: "text",
                placeholder: "Enter your first name",
                name: "firstName",
                required: true
            },
            {
                label: "Last Name",
                type: "text",
                placeholder: "Enter your last name",
                name: "lastName",
                required: true
            },
            {
                label: "Email Address",
                type: "email",
                placeholder: "your.email@example.com",
                name: "email",
                required: true
            },
            {
                label: "Phone Number",
                type: "tel",
                placeholder: "Your phone number",
                name: "phone",
                required: false
            },
            {
                label: "Company Name",
                type: "text",
                placeholder: "Enter your company name",
                name: "companyName",
                required: true
            },
            {
                label: "Why do you want to join our foundation?",
                type: "textarea",
                placeholder: "Tell us about your motivation to join and how you can contribute...",
                name: "motivation",
                required: true
            }
        ],
        membershipOptions: [
            { value: "volunteer", label: "Volunteer Member" },
            { value: "regular", label: "Regular Member" },
            { value: "donor", label: "Supporting Donor" },
            { value: "professional", label: "Professional Advisor" }
        ],
        skillOptions: [
            { value: "leadership", label: "Leadership" },
            { value: "fundraising", label: "Fundraising" },
            { value: "marketing", label: "Marketing & Communications" },
            { value: "eventManagement", label: "Event Management" },
            { value: "projectManagement", label: "Project Management" },
            { value: "teaching", label: "Teaching/Training" },
            { value: "technology", label: "Technology" },
            { value: "design", label: "Design" },
            { value: "legal", label: "Legal Expertise" },
            { value: "finance", label: "Financial Management" },
            { value: "other", label: "Other Skills" }
        ],
        submitText: "Submit Application",
        submittingText: "Submitting...",
        success: {
            title: "Application Submitted!",
            message: "Thank you for your interest in joining our foundation. We've received your application and will contact you shortly to discuss next steps."
        }
    },
    faq: {
        title: "Frequently Asked Questions",
        items: [
            {
                question: "What are the membership requirements?",
                answer: "Our foundation welcomes individuals from all backgrounds who share our values and mission. Members are expected to contribute and attend quarterly meetings."
            },
            {
                question: "How can I contribute as a member?",
                answer: "Members can contribute in numerous ways: volunteering at events, sharing professional expertise, joining committees, helping with fundraising, participating in outreach programs, and more. We match members' skills with areas where they can have the most impact."
            },
            {
                question: "What benefits do members receive?",
                answer: "Members receive networking opportunities, skill development workshops, recognition for their contributions, invitations to exclusive events, and the satisfaction of making a meaningful difference in the community."
            }
        ]
    },
};

// Icons Component
const IconComponent = ({ name }: { name: string }) => {
    switch (name) {
        case "Users":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            );
        case "Lightbulb":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" /><path d="M10 22h4" />
                </svg>
            );
        case "HandHeart":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 6.1h3a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.1a2 2 0 0 1 2-2h3" />
                    <path d="M8 12 12 16 16 12" />
                    <path d="M12 3v13" />
                </svg>
            );
        default:
            return null;
    }
};

// Perk Card Component
const PerkCard = ({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md hover:shadow-lg hover:border-primary/30 transition-all duration-300"
        >
            <div className="mb-4 rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary">
                <IconComponent name={icon} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    );
};

// FAQ Item Component
const FaqItemComponent = ({ question, answer }: { question: string; answer: string }) => {
    return (
        <div className="rounded-xl border border-muted/20 bg-card/50 p-6 backdrop-blur-md transition-all hover:border-primary/30">
            <h3 className="mb-2 text-lg font-semibold">{question}</h3>
            <p className="text-muted-foreground">{answer}</p>
        </div>
    );
};

export default function JoinPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSelectedSkills([...selectedSkills, value]);
        } else {
            setSelectedSkills(selectedSkills.filter(skill => skill !== value));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            e.currentTarget.reset();
            setSelectedSkills([]);

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
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
                        <AnimatedBadge >{JOINCONTENT.hero.badge}</AnimatedBadge>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="mt-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-5xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
                        >
                            {JOINCONTENT.hero.title}{" "}
                            <span className="relative text-primary inline-block">
                                {JOINCONTENT.hero.highlightedTitle}
                                <AnimatedUnderline />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
                        >
                            {JOINCONTENT.hero.description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Perks Section */}
            <section className="relative py-16 bg-muted/5">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" 
                />
                <div className="relative mx-auto max-w-6xl px-6">
                    <h2 className="sr-only">Foundation Benefits</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {JOINCONTENT.perks.map((perk, index) => (
                            <PerkCard
                                key={index}
                                icon={perk.icon}
                                title={perk.title}
                                description={perk.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Form Section */}
            <section className="relative py-20 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[600px] rounded-full bg-primary/5 blur-3xl" 
                />
                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Left column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10"
                        >
                            <div className="mb-8">
                                <h2 className="mb-4 text-3xl font-bold text-primary">
                                    {JOINCONTENT.form.title}
                                </h2>
                                <p className="text-muted-foreground">
                                    {JOINCONTENT.form.description}
                                </p>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-lg border border-green-200 bg-green-50 p-8 shadow-md dark:border-green-800 dark:bg-green-900/30"
                                >
                                    <div className="flex items-center">
                                        <CheckCircle className="mr-3 h-8 w-8 text-green-500" />
                                        <h3 className="text-xl font-medium">
                                            {JOINCONTENT.form.success.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-muted-foreground">
                                        {JOINCONTENT.form.success.message}
                                    </p>
                                </motion.div>
                            ) : (
                                <div
                                    className="rounded-xl border border-muted/20 bg-card/50 p-8 backdrop-blur-md shadow-md"
                                >
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-6 md:grid-cols-2">
                                            {JOINCONTENT.form.inputs.slice(0, 2).map((input) => (
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
                                        
                                        <div className="mt-6 space-y-6">
                                            {JOINCONTENT.form.inputs.slice(2, 5).map((input) => (
                                                <FormInput
                                                    key={input.name}
                                                    label={input.label}
                                                    type={input.type}
                                                    placeholder={input.placeholder}
                                                    name={input.name}
                                                    required={input.required}
                                                />
                                            ))}

                                            <FormInput
                                                label={JOINCONTENT.form.inputs[5].label}
                                                type={JOINCONTENT.form.inputs[5].type}
                                                placeholder={JOINCONTENT.form.inputs[5].placeholder}
                                                name={JOINCONTENT.form.inputs[5].name}
                                                required={JOINCONTENT.form.inputs[5].required}
                                            />
                                        </div>

                                        <div className="mt-8">
                                            <Button
                                                type="submit"
                                                className="w-full bg-primary text-lg font-medium py-6 transition-all hover:bg-primary/90 hover:shadow-lg"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="mr-2 h-5 w-5 animate-spin"
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
                                                        {JOINCONTENT.form.submittingText}
                                                    </>
                                                ) : (
                                                    JOINCONTENT.form.submitText
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </motion.div>

                        {/* Right column - FAQ */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="mb-8">
                                <h2 className="mb-4 text-3xl font-bold text-primary">
                                    {JOINCONTENT.faq.title}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {JOINCONTENT.faq.items.map((item, index) => (
                                    <FaqItemComponent 
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            
        </div>
    );
}