"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, Users, Target, ArrowUpRight, MapPin } from "lucide-react";
import AnimatedGradientBg from "@/components/shared/animated-gradient-bg";
import AnimatedBadge from "@/components/shared/animated-badge";
import AnimatedUnderline from "@/components/shared/animated-underline";
import SectionHeading from "@/components/shared/section-heading";
import CallToAction from "@/components/programs/call-to-action";

// Example page based on one program from the data
// In a real application, this would be dynamically populated based on the slug from the URL
interface ProgramDetailsPageParams {
  slug: string;
}

export default function ProgramDetailsPage({ params }: { params: ProgramDetailsPageParams }) {
  // This would typically come from a getStaticProps or similar data fetching method
  // For demonstration purposes, we're using the first program from the data
  const program = {
  id: 1,
  title: "Rural Education Transformation Project",
  slug: "rural-education-transformation-project",
  category: "Education",
  year: "2023-2024",
  // Replace single image with an array of images
  images: [
    "https://images.unsplash.com/photo-1744578413523-33596836891b",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1744578413523-33596836891b",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1744578413523-33596836891b",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
    "https://images.unsplash.com/photo-1742198865450-cf9ce4335a33",
  ],
  description:
    "A comprehensive project focused on improving educational outcomes in rural areas through digital integration, teacher training, and infrastructure improvements.",
  fullDescription: 
    "The Rural Education Transformation Project represents our commitment to bridging the digital divide and enhancing educational quality in underserved rural communities. By integrating technology into classrooms, providing comprehensive teacher training, and improving school infrastructure, we create environments where rural students can thrive academically.\n\nOur approach combines physical improvements to learning spaces with capacity building for educators, ensuring sustainable impact that continues beyond our direct involvement. By working closely with local education authorities and community leaders, we ensure solutions are culturally appropriate and address the unique challenges facing each community.",
  location: "Multiple rural districts across the region",
  beneficiaries: "15 schools, 378 teachers, approximately 5,200 students",
  duration: "18 months (2023-2024)",
  partners: ["Ministry of Education", "DigiLearn Foundation", "Rural Development Trust"],
  outcomes: [
    "15 rural schools modernized with digital facilities",
    "85% improvement in student digital literacy",
    "378 teachers trained in modern teaching methodologies",
  ],
  phases: [
    { name: "Needs Assessment", duration: "Jan - Mar 2023", complete: true },
    { name: "Infrastructure Development", duration: "Apr - Aug 2023", complete: true },
    { name: "Teacher Training", duration: "Sep - Dec 2023", complete: true },
    { name: "Implementation & Monitoring", duration: "Jan - Jun 2024", complete: true },
  ],
  tags: ["education", "technology", "rural"],
  relatedProjects: [4, 9], // IDs of related projects
};

  // Find related projects
  const relatedProjects = [
    {
      id: 4,
      title: "Youth Leadership & Social Innovation Camp",
      slug: "youth-leadership-social-innovation-camp",
      category: "Youth Development",
      image: "/api/placeholder/640/360",
    },
    {
      id: 9,
      title: "Girls' STEM Education Project",
      slug: "girls-stem-education-project",
      category: "Education",
      image: "/api/placeholder/640/360",
    }
  ];

  return (
    <>
      <main className="relative overflow-x-hidden">
        <AnimatedGradientBg />

        {/* Back button */}
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <Link 
            href="/programs" 
            className="group inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-background/90 hover:text-foreground"
          >
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to All Programs
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 lg:pb-16 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <AnimatedBadge>{program.category}</AnimatedBadge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-balance text-4xl font-bold tracking-tight text-transparent md:text-5xl xl:text-6xl dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
              >
                {program.title.split(" Project")[0]}{" "}
                <span className="relative inline-block text-primary">
                  Project
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {program.description}
              </motion.p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {program.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {program.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  {program.beneficiaries.split(",")[0]}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative py-6">
  <div className="mx-auto max-w-5xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-xl border border-muted/20 bg-muted/5 shadow-lg backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {program.images.map((image, index) => (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={`${program.title} - Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

        {/* Project Details */}
        <section className="relative py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-3">
              {/* Main content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2"
              >
                <h2 className="text-2xl font-bold md:text-3xl">About the Project</h2>
                <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                  {program.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <h3 className="mt-12 text-xl font-bold md:text-2xl">Key Outcomes</h3>
                <ul className="mt-6 space-y-3">
                  {program.outcomes.map((outcome, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Target size={20} className="mt-1 shrink-0 text-primary" />
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>

                
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">Project Details</h3>
                  
                  <div className="mt-4 space-y-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{program.duration}</p>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground">Location:</span>
                      <p className="font-medium">{program.location}</p>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground">Beneficiaries:</span>
                      <p className="font-medium">{program.beneficiaries}</p>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground">Partners:</span>
                      <div className="mt-1 space-y-1">
                        {program.partners.map((partner, index) => (
                          <p key={index} className="font-medium">{partner}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {program.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        href={`/programs?filter=${tag}`}
                        className="rounded-full bg-muted/20 px-3 py-1 text-xs font-medium transition-colors hover:bg-muted/30"
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-xl border border-muted/20 bg-primary/5 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">Get Involved</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Interested in supporting this or similar projects? Reach out to our team to explore partnership opportunities.
                  </p>
                  <Link 
                    href="/join-us" 
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Become a Partner
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="relative py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading>Related Projects</SectionHeading>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {relatedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-sm transition-all hover:border-muted/30 hover:bg-muted/10"
                >
                  <Link href={`/programs/${project.slug}`} className="absolute inset-0 z-10" />
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary">{project.category}</span>
                    <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <ArrowUpRight size={16} className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
      </main>
    </>
  );
}