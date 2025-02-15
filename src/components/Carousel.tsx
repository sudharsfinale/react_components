import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    text: `"Turn Knowledge into Profits! Learn Trading the Smart Way"`,
    image: "/image1.png",
  },
  {
    id: 2,
    text: `"Content 2"`,
    image: "/image1.png",
  },
  {
    id: 3,
    text: `"Content 3"`,
    image: "/image1.png",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2} // Adjust resistance
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) {
              nextSlide(); // Swipe left → Next slide
            } else if (info.offset.x > 50) {
              prevSlide(); // Swipe right → Previous slide
            }
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <img
            src={slides[current].image}
            alt="Slide"
            style={{ userSelect: "none" }}
            className="absolute w-full h-full object-cover opacity-50"
          />
          <h2 className="relative z-10 text-2xl md:text-4xl font-bold text-white text-center px-4">
            {slides[current].text}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      {/* <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        ▶
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            onClick={() => setCurrent(index)}
            key={index}
            className={`h-1 w-12  ${
              current === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
