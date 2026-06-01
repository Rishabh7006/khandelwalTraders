import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

import { HardwareProduct } from "../types";

interface ProductCardProps {
  product: HardwareProduct;
  index: number;
  darkMode: boolean;
}

export default function ProductCard({
  product,
  index,
  darkMode,
}: ProductCardProps) {
  return (
    <Link to={`/category/${product.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        layout
        whileHover={{ y: -8 }}
        className={`group rounded-xl overflow-hidden shadow-lg cursor-pointer ${
          darkMode ? "bg-neutral-800" : "bg-white"
        }`}
      >
        <div
          className={`relative h-48 ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } overflow-hidden`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full ${product.color} flex items-center justify-center`}
          >
            <div
              className={`w-24 h-24 rounded-lg ${
                darkMode ? "bg-neutral-600" : "bg-white"
              } shadow-md flex items-center justify-center`}
            >
              <span
                className={`text-3xl font-bold ${
                  darkMode ? "text-amber-400" : "text-amber-600"
                }`}
              >
                {product.name.charAt(0)}
              </span>
            </div>
          </motion.div>

          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg">
              <Eye size={18} />
              View Category
            </button>
          </motion.div>

          <span className="absolute top-3 left-3 px-3 py-1 bg-amber-600 text-white text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>

        <div className="p-4">
          <h3
            className={`font-bold text-lg mb-2 ${
              darkMode ? "text-white" : "text-neutral-800"
            }`}
          >
            {product.name}
          </h3>

          <p
            className={`text-sm mb-3 ${
              darkMode ? "text-gray-400" : "text-neutral-500"
            }`}
          >
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-neutral-500"
              }`}
            >
              {product.variants} variants
            </span>

            <span className="text-amber-600 font-medium text-sm">
              Explore →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}