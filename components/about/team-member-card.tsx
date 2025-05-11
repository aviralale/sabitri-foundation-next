"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  index?: number;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  index = 0,
}: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group rounded-xl border border-muted/20 bg-muted/5 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="aspect-square w-full">
          <Image
            fill
            src={image}
            alt={name}
            className="h-full w-full rounded-lg object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
