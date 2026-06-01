import { useState } from "react";
import { motion } from "framer-motion";

import { hardwareProducts } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductsShowcaseProps {
  darkMode: boolean;
}

export default function ProductsShowcase({
  darkMode,
}: ProductsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Hardware",
    "Plywood",
    "Fittings",
    "Accessories",
    "Pipes",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? hardwareProducts
      : hardwareProducts.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-neutral-900" : "bg-white"
      }`}
    >
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
            Hardware Products Showcase
          </h2>

          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-neutral-600"
            }`}
          >
            Click any product category to explore brands &
            products
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-amber-600 text-white"
                  : darkMode
                  ? "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  : "bg-gray-100 text-neutral-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}