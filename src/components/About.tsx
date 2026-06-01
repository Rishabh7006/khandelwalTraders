import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock, TrendingUp, Shield } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const features = [
    { icon: Users, title: "Trusted Local Business", desc: "Serving the community for over 28 years" },
    { icon: Award, title: "Quality Products", desc: "Premium materials from top brands" },
    { icon: Clock, title: "Reliable Support", desc: "Expert guidance and after-sales service" },
    { icon: TrendingUp, title: "Competitive Pricing", desc: "Best prices in the market" },
    { icon: Shield, title: "Genuine Products", desc: "100% authentic materials guaranteed" },
    { icon: CheckCircle, title: "Multiple Categories", desc: "One-stop shop for all needs" },
  ];

  return (
    // <section className={`py-20 ${darkMode ? "bg-neutral-800" : "bg-amber-50"}`}>
    <section
      id="about"
      className={`py-20 ${
        darkMode
          ? "bg-neutral-800"
          : "bg-amber-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full mb-6">
              About Us
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-neutral-800"}`}>
              Your Trusted Hardware & Plywood Supplier
            </h2>
            <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
              Khandelwal Traders is a trusted hardware and plywood supplier providing premium quality 
              materials for homes, interiors, contractors, and commercial projects. Since 1997, we have 
              been serving the Chhibramau region with dedication and excellence.
            </p>
            <p className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
              Our commitment to quality, competitive pricing, and customer satisfaction has made us the 
              preferred choice for contractors, interior designers, and homeowners across Kannauj district.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`p-2 rounded-lg ${darkMode ? "bg-neutral-700" : "bg-white"}`}>
                      <IconComponent size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-neutral-500"}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-square rounded-2xl ${darkMode ? "bg-neutral-700" : "bg-white"} shadow-lg p-6 flex flex-col items-center justify-center`}
              >
                <div className="w-20 h-20 bg-amber-600 rounded-xl mb-4" />
                <p className={`font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Plywood Sheets</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-square rounded-2xl ${darkMode ? "bg-neutral-700" : "bg-white"} shadow-lg p-6 flex flex-col items-center justify-center mt-8`}
              >
                <div className="w-20 h-20 bg-neutral-700 rounded-xl mb-4" />
                <p className={`font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Hardware Tools</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-square rounded-2xl ${darkMode ? "bg-neutral-700" : "bg-white"} shadow-lg p-6 flex flex-col items-center justify-center -mt-8`}
              >
                <div className="w-20 h-20 bg-amber-700 rounded-xl mb-4" />
                <p className={`font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Laminates</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`aspect-square rounded-2xl ${darkMode ? "bg-neutral-700" : "bg-white"} shadow-lg p-6 flex flex-col items-center justify-center`}
              >
                <div className="w-20 h-20 bg-neutral-600 rounded-xl mb-4" />
                <p className={`font-medium ${darkMode ? "text-white" : "text-neutral-700"}`}>Door Fittings</p>
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-amber-600 text-white px-6 py-4 rounded-xl shadow-lg"
            >
              <p className="text-3xl font-bold">18+</p>
              <p className="text-sm">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}