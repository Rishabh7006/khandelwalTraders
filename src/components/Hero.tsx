import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  scrollToSection: (section: string) => void;
  darkMode: boolean;
}

export default function Hero({ scrollToSection, darkMode }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${darkMode ? "bg-neutral-800" : "bg-amber-50"}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 w-full h-full p-4">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`${darkMode ? "bg-amber-600" : "bg-amber-800"} rounded-sm`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full mb-6"
            >
              🔨 Trusted Hardware Supplier
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${darkMode ? "text-white" : "text-neutral-800"}`}
            >
              Premium Hardware, Plywood &{" "}
              <span className="text-amber-600">Interior Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-neutral-600"}`}
            >
              Your trusted partner for high-quality hardware materials, plywood sheets, laminates, and building supplies. 
              Serving contractors, interior designers, and homeowners since 1997.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("products")}
                className="flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-amber-700 transition-colors"
              >
                Explore Products
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-neutral-900"
                    : "border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white"
                } transition-colors`}
              >
                <Phone size={20} />
                Contact Us
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { value: "18+", label: "Years Experience" },
                { value: "5000+", label: "Happy Customers" },
                { value: "1000+", label: "Products" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className={`text-3xl font-bold ${darkMode ? "text-amber-400" : "text-amber-600"}`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-neutral-500"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${darkMode ? "bg-neutral-700" : "bg-amber-100"}`}>
              <div className="aspect-square flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? "bg-neutral-600" : "bg-amber-200"} rounded-xl p-6 aspect-square flex flex-col items-center justify-center`}
                  >
                    <div className="w-16 h-16 bg-amber-600 rounded-lg mb-3" />
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Plywood Sheets</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? "bg-neutral-600" : "bg-amber-200"} rounded-xl p-6 aspect-square flex flex-col items-center justify-center`}
                  >
                    <div className="w-16 h-16 bg-neutral-700 rounded-lg mb-3" />
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Hardware Tools</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? "bg-neutral-600" : "bg-amber-200"} rounded-xl p-6 aspect-square flex flex-col items-center justify-center`}
                  >
                    <div className="w-16 h-16 bg-amber-700 rounded-lg mb-3" />
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Laminates</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? "bg-neutral-600" : "bg-amber-200"} rounded-xl p-6 aspect-square flex flex-col items-center justify-center`}
                  >
                    <div className="w-16 h-16 bg-neutral-600 rounded-lg mb-3" />
                    <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Door Fittings</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              <p className="font-bold">Quality Assured</p>
              <p className="text-sm opacity-90">Premium Materials</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}