import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ImageWithParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth - 0.5) * 30;
      const moveY = (clientY / innerHeight - 0.5) * 30;

      ref.current.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(20px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (ref.current) {
          ref.current.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
        }
      }}
    >
      <div
        ref={ref}
        className="h-full w-full transition-transform duration-300 ease-out"
      >
        <Image
          fill
          className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-110 dark:brightness-90"
          src="https://www.sabitrifoundation.org/img/images/Logo.svg"
          alt="Global Collaboration"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 opacity-60 mix-blend-overlay transition-opacity duration-300 hover:opacity-70 dark:from-blue-500/30 dark:to-purple-500/30 dark:mix-blend-color-dodge"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white opacity-70"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.7 + 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithParallax;
