"use client";
import { useState, useRef, useId, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Share2,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
} from "lucide-react";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
  impactNumber?: string;
  impactLabel?: string;
  location?: string;
  date?: string;
  category?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/small screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMobile) return; // Disable effect on mobile

    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isMobile) return; // Disable effect on mobile
    setIsHovered(true);
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const isActive = current === index;
  const {
    src,
    button,
    title,
    description,
    impactNumber,
    impactLabel,
    location,
    date,
  } = slide;

  // Responsive styles
  const getSlideStyles = () => {
    // Base styles for all devices
    const baseStyles = {
      transform: isActive
        ? "scale(1) rotateX(0deg) rotateY(0deg)"
        : index < current
        ? isMobile
          ? "scale(0.9)"
          : "scale(0.85) rotateX(5deg) rotateY(-10deg) translateZ(-100px)"
        : isMobile
        ? "scale(0.9)"
        : "scale(0.85) rotateX(5deg) rotateY(10deg) translateZ(-100px)",
      transition: "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transformOrigin: "center center",
      opacity: isActive ? 1 : 0.7,
    };

    // Add responsive width/height
    return {
      ...baseStyles,
      width: isMobile ? "90vw" : "70vmin",
      height: isMobile ? "80vh" : "70vmin",
      maxHeight: isMobile ? "600px" : "none",
    };
  };

  return (
    <div
      className="relative w-full flex justify-center"
      style={{
        perspective: isMobile ? "none" : "1200px",
      }}
    >
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-500 ease-in-out mx-2 md:mx-4 z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={getSlideStyles()}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden transition-all duration-500 ease-out"
          style={{
            transform:
              isActive && !isMobile
                ? "translate3d(calc(var(--x) / 25), calc(var(--y) / 25), 0)"
                : "none",
            boxShadow: isActive
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Animated overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 opacity-100 z-10" />

          {isActive && (
            <div
              className="absolute inset-0 bg-gradient-to-tr from-orange-700/40 via-green-500/40 to-blue-700/40 z-20"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 15s ease infinite",
              }}
            />
          )}

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
              zIndex: 20,
            }}
          />

          {/* Subtle grain texture */}
          <div
            className="absolute inset-0 opacity-20 z-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          ></div>

          <Image
            fill
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: 0,
              transform:
                isHovered && isActive && !isMobile ? "scale(1.08)" : "scale(1)",
              transition: "transform 8s ease-out, opacity 0.7s ease-in-out",
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />

          {/* Location badge - responsive positioning */}
          {location && (
            <div
              className="absolute top-3 max-w-1/2 md:top-6 left-3 md:left-6 bg-white/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium text-white border border-white/30 shadow-lg flex items-center space-x-1 md:space-x-2 z-30"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <MapPin size={isMobile ? 12 : 14} className="text-emerald-400" />
              <span>{location}</span>
            </div>
          )}

          {/* Date badge - responsive positioning */}
          {date && (
            <div
              className="absolute bottom-20 md:bottom-40 left-3 md:left-6 bg-white/10 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium text-white border border-white/30 shadow-lg flex items-center space-x-1 md:space-x-2 z-30"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <Calendar size={isMobile ? 12 : 14} className="text-blue-400" />
              <span>{date}</span>
            </div>
          )}

          {/* Impact numbers with responsive design */}
          {impactNumber && (
            <div
              className="absolute top-3 md:top-6 right-3 md:right-6 bg-gradient-to-br from-blue-600/50 to-emerald-700/50 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl flex flex-col items-center shadow-xl z-30 border border-emerald-500/50"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <span className="text-xl md:text-3xl font-bold text-white">
                {impactNumber}
              </span>
              <span className="text-xs text-emerald-100">{impactLabel}</span>
            </div>
          )}
        </div>

        <article
          className="relative px-4 md:px-8 py-4 md:py-6 transition-all duration-700 ease-in-out flex flex-col h-full justify-end z-20"
          style={{
            opacity: isActive ? 1 : 0,
            visibility: isActive ? "visible" : "hidden",
            transform: isActive ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div
            className="mb-4 md:mb-6 p-3 md:p-6 bg-black/40 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-300"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <h2 className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-5 relative">
              {title}
              <span
                className="absolute -bottom-2 md:-bottom-3 left-1/2 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                style={{
                  transform: "translateX(-50%)",
                  width: isMobile ? "4rem" : "6rem",
                }}
              ></span>
            </h2>
            {description && (
              <p className="text-sm md:text-base lg:text-lg mt-4 md:mt-6 text-white/90 max-w-lg mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-2 md:mt-4">
            <button className="px-4 md:px-8 py-2 md:py-4 text-xs md:text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-full flex items-center space-x-2 md:space-x-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md border border-emerald-500/50">
              <span>{button}</span>
              <ChevronRight
                size={isMobile ? 14 : 18}
                className="text-emerald-300"
              />
            </button>
            <button
              className="p-2 md:p-4 bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 flex items-center justify-center border border-white/20 hover:border-white/40"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <Share2 size={isMobile ? 16 : 20} className="text-blue-400" />
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative w-14 h-14 flex items-center justify-center bg-white/10 border border-white/20 rounded-full focus:outline-none hover:-translate-y-1 active:translate-y-0 transition-all duration-300 shadow-lg overflow-hidden group"
      title={title}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backdropFilter: "blur(8px)",
        background: isHovered
          ? "linear-gradient(to right, rgba(16, 185, 129, 0.4), rgba(59, 130, 246, 0.4))"
          : "rgba(255, 255, 255, 0.1)",
      }}
    >
      {type === "previous" ? (
        <ArrowLeft
          size={22}
          className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1"
        />
      ) : (
        <ArrowRight
          size={22}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
  title?: string;
  subtitle?: string;
}

export function Carousel({ slides, title, subtitle }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handlePreviousClick = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);

    setTimeout(() => setIsTransitioning(false), 900);
  }, [current, isTransitioning, slides.length]);

  const handleNextClick = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);

    setTimeout(() => setIsTransitioning(false), 900);
  }, [current, isTransitioning, slides.length]);

  const handleSlideClick = (index: number) => {
    if (current !== index && !isTransitioning) {
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 900);
    }
  };

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isTransitioning) {
        handleNextClick();
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [current, isTransitioning, handleNextClick]);

  const id = useId();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePreviousClick();
      } else if (e.key === "ArrowRight") {
        handleNextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, isTransitioning, handlePreviousClick, handleNextClick]);

  return (
    <div className="relative mx-auto px-6  min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10"
          style={{ filter: "blur(48px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10"
          style={{ filter: "blur(48px)" }}
        />
      </div>

      {/* Title heading with enhanced styling */}
      {title && (
        <div className="text-center mb-16 relative z-10">
          <div
            className="inline-block mb-3 bg-gradient-to-r from-emerald-500/80 to-blue-500/80 px-6 py-2 rounded-full"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <Star size={16} className="inline-block mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-white/80">
              Featured Experiences
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-4  bg-clip-text "
            style={{
              backgroundImage: "linear-gradient(to right, white, #D1D5DB)",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              backgroundImage: "linear-gradient(to right, #10B981, #3B82F6)",
            }}
          ></div>
        </div>
      )}

      <div
        ref={carouselRef}
        className="relative w-full mx-auto"
        aria-labelledby={`carousel-heading-${id}`}
        style={{
          width: "80vmin",
          height: "70vmin",
        }}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>

        <div
          className="absolute flex justify-center items-center space-x-8 w-full"
          style={{ top: "calc(100% + 3rem)" }}
        >
          <CarouselControl
            type="previous"
            title="Previous"
            handleClick={handlePreviousClick}
          />

          {/* Enhanced progress indicator */}
          <div
            className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`transition-all duration-500 ease-out flex items-center justify-center ${
                  current === index
                    ? "w-10 h-4 rounded-full"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40 rounded-full"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                style={
                  current === index
                    ? {
                        backgroundImage:
                          "linear-gradient(to right, #10B981, #3B82F6)",
                      }
                    : {}
                }
              >
                {current === index && (
                  <span
                    className="absolute w-10 h-4 rounded-full"
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      filter: "blur(4px)",
                      animation: "pulse 2s infinite",
                    }}
                  ></span>
                )}
              </button>
            ))}
          </div>

          <CarouselControl
            type="next"
            title="Next"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      {/* Slide counter */}
      <div
        className="absolute bottom-6 left-1/2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm text-white/80 font-medium"
        style={{
          transform: "translateX(-50%)",
          backdropFilter: "blur(8px)",
        }}
      >
        {current + 1} / {slides.length}
      </div>

      {/* Add styles for animations and effects */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
