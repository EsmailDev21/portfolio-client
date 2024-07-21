import React, { useState } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-96">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full border-indigo-950  h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-turquoise bg-opacity-70 text-slate-950 p-2 rounded-full w-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-turquoise bg-opacity-70 text-slate-950 p-2 rounded-full w-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>
    </div>
  );
};

export default Carousel;
