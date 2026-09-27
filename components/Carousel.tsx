"use client";
import { ReactNode, useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  slides: ReactNode[];
  autoPlayInterval?: number; // ms, defaults to 5000
}

export default function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    timeoutRef.current = setTimeout(() => {
      next();
    }, autoPlayInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused, autoPlayInterval, slides.length]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="w-full h-full flex items-center justify-center">
        {slides[current]}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 z-10 p-2 rounded-full bg-white/80 shadow-md text-[#334c96] hover:bg-white hover:scale-110 transition-all duration-200"
      >
        <ArrowLeft size={22} strokeWidth={2.5} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 z-10 p-2 rounded-full bg-white/80 shadow-md text-[#334c96] hover:bg-white hover:scale-110 transition-all duration-200"
      >
        <ArrowRight size={22} strokeWidth={2.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-200 ${
              i === current ? "bg-[#334c96] w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}