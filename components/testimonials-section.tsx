import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export async function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Patel",
      designation: "Founder",
      message:
        "Sabitri Foundation's vision of integrating NGOs under one platform is truly inspiring. Their support has helped us connect with like-minded organizations, share resources, and amplify our environmental initiatives. Together, we are making a bigger impact!",
      image: "https://randomuser.me/api/portraits/men/87.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials || []} />;
}
