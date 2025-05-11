import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
// Work Card component
const WorkCard: React.FC<{
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  outcomes: string[];
  link: string;
  index: number;
}> = ({ title, category, year, image, description, outcomes, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group overflow-hidden rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:bg-muted/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          fill
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/90 text-white dark:text-black px-3 py-1 text-xs font-medium  backdrop-blur-sm">
              {category}
            </span>
            <span className="rounded-full bg-black/50 text-white dark:text-black px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {year}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-primary">
            Key Outcomes:
          </h4>
          <ul className="space-y-1">
            {outcomes.map((item, idx) => (
              <li key={idx} className="flex items-start text-xs">
                <svg
                  className="mr-2 mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500"
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
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/20 text-sm hover:bg-primary/10 hover:text-primary"
          onClick={() => window.open(link, "_blank")}
        >
          View Project Details
        </Button>
      </div>
    </motion.div>
  );
};

export default WorkCard;
