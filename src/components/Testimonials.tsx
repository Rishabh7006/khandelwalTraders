import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/products";

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  return (
    <section className={`py-20 ${darkMode ? "bg-neutral-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-800"}`}>
            What Our Customers Say
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
            Trusted by contractors, builders, and homeowners across the region
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? "bg-neutral-700" : "bg-gray-50"
              }`}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Content */}
              <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${darkMode ? "bg-neutral-600" : "bg-amber-100"} flex items-center justify-center`}>
                  <span className={`font-bold ${darkMode ? "text-amber-400" : "text-amber-600"}`}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-neutral-500"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}