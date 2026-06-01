import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselItems } from "../data/products";

interface CarouselProps {
  darkMode: boolean;
}

export default function Carousel({ darkMode }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section className={`py-16 ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-neutral-800"
        }`}
      >
        Our Product Range
      </h2>

      <p
        className={`text-lg ${
          darkMode ? "text-gray-300" : "text-neutral-600"
        }`}
      >
        Explore our wide variety of premium building materials
      </p>
    </motion.div>

    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative h-[400px] sm:h-[500px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <div
              className={`relative h-full ${
                darkMode ? "bg-neutral-700" : "bg-amber-50"
              }`}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full grid lg:grid-cols-2 gap-8 p-8 sm:p-12">
                  
                  {/* Left Content */}
                  <div className="flex flex-col justify-center">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-full mb-4 w-fit"
                    >
                      {carouselItems[currentIndex].category}
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`text-3xl sm:text-4xl font-bold mb-4 ${
                        darkMode ? "text-white" : "text-neutral-800"
                      }`}
                    >
                      {carouselItems[currentIndex].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`text-lg mb-6 ${
                        darkMode ? "text-gray-300" : "text-neutral-600"
                      }`}
                    >
                      {carouselItems[currentIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-4"
                    >
                      <span
                        className={`px-4 py-2 rounded-lg ${
                          darkMode
                            ? "bg-neutral-600 text-white"
                            : "bg-white text-neutral-700"
                        }`}
                      >
                        {carouselItems[currentIndex].sizes}
                      </span>

                      <span
                        className={`px-4 py-2 rounded-lg ${
                          darkMode
                            ? "bg-neutral-600 text-white"
                            : "bg-white text-neutral-700"
                        }`}
                      >
                        {carouselItems[currentIndex].thickness}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="hidden lg:flex items-center justify-center"
                  >
                    <div
                      className={`w-80 h-80 rounded-2xl overflow-hidden ${
                        darkMode ? "bg-neutral-600" : "bg-white"
                      } shadow-xl flex items-center justify-center`}
                    >
                      {carouselItems[currentIndex].image ? (
                        <img
                          src={carouselItems[currentIndex].image}
                          alt={carouselItems[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className={`w-64 h-64 rounded-xl ${carouselItems[currentIndex].color} flex items-center justify-center`}
                        >
                          <span className="text-white text-6xl font-bold opacity-50">
                            {carouselItems[currentIndex].title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
          darkMode
            ? "bg-neutral-600 text-white hover:bg-neutral-500"
            : "bg-white text-neutral-800 hover:bg-gray-100"
        } shadow-lg transition-colors`}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
          darkMode
            ? "bg-neutral-600 text-white hover:bg-neutral-500"
            : "bg-white text-neutral-800 hover:bg-gray-100"
        } shadow-lg transition-colors`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-amber-600 w-8"
                : darkMode
                ? "bg-neutral-500 hover:bg-neutral-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
}