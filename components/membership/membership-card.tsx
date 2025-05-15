import { Button } from "../ui/button";
import { motion } from "framer-motion";
// Membership Card component
interface MembershipCardProps {
  title: string;
  period?: string;
  features: string[];
  index: number;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  features,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`group relative overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 hover:shadow-lg ${"border-primary/30 bg-primary/5"}`}
    >
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <div className="mb-6"></div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
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
              {feature}
            </li>
          ))}
        </ul>
        <Button className={`w-full`} onClick={()=> window.location.href = "/join-us"}>Join Now</Button>
      </div>
    </motion.div>
  );
};

export default MembershipCard;
