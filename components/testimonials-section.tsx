import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HOMEDATA } from "@/data/home.data";

export async function TestimonialsSection() {
  return <AnimatedTestimonials testimonials={HOMEDATA.testimonials || []} />;
}
