"use client";

import { Carousel } from "@/components/shared/carousel";
import ArtandPlayImg from "@/assets/images/Arts and play.png";
import WomenEmpowermentImg from "@/assets/images/WomenEmpowerment.png";
import VisitCraftImg from "@/assets/images/VisitCraft.png";
import AutismImg from "@/assets/images/Autism.png";

export function ProgramsSection() {
  const slideData = [
    {
      title: "Art and Play Session",
      location: "Bhimsengola Sec. School",
      button: "Dive into Creativity",
      description:
        "A therapeutic and fun session designed to enhance emotional expression and learning through creative play.",
      impactNumber: "50+",
      impactLabel: "Students Engaged",
      src: ArtandPlayImg.src,
    },
    {
      title: "Women Awareness and Donation",
      location: "Subhashree Vaikalpik Mahila Vidhyalaya",
      button: "See the Vision",
      description:
        "Empowering women through essential health education and material donations to promote dignity and awareness.",
      impactNumber: "80+",
      impactLabel: "Women Reached",
      src: WomenEmpowermentImg.src,
    },
    {
      title: "World Autism Awareness Day",
      location: "Aashakiran Psychosocial Counselling and Autism Care",
      button: "Feel the Energy",
      description:
        "Celebrating neurodiversity through awareness activities, sensory play, and inclusive engagement.",
      impactNumber: "25+",
      impactLabel: "Children Supported",
      src: AutismImg.src,
    },
    {
      title: "Visit Craft and Play",
      location: "Hope Rising Children Home",
      button: "Uncover the Stories",
      description:
        "An interactive day full of storytelling, crafts, and laughter with children in a nurturing environment.",
      impactNumber: "30+",
      impactLabel: "Kids Inspired",
      src: VisitCraftImg.src,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel
        title="Empowering Hearts, Enriching Lives"
        subtitle="Explore the diverse programs by Sabitri Foundation that bring hope, joy, and empowerment to communities across Nepal."
        slides={slideData}
      />
    </div>
  );
}
