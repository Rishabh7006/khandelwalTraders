import { motion } from "framer-motion";
import { Truck, Store, Home, Users, Package, Clock } from "lucide-react";

interface ServicesProps {
  darkMode: boolean;
}

const servicesData = [
  {
    icon: Store,
    title: "Wholesale Supply",
    description: "Bulk orders at wholesale prices for contractors and businesses",
    color: "bg-amber-600",
  },
  {
    icon: Package,
    title: "Retail Hardware Products",
    description: "Quality hardware products for individual customers",
    color: "bg-neutral-700",
  },
  {
    icon: Home,
    title: "Interior Material Solutions",
    description: "Complete interior materials for homes and offices",
    color: "bg-amber-700",
  },
  {
    icon: Users,
    title: "Contractor Support",
    description: "Dedicated support and special pricing for contractors",
    color: "bg-neutral-600",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Special rates and priority delivery for bulk orders",
    color: "bg-amber-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Kannauj and nearby areas",
    color: "bg-neutral-700",
  },
];

export default function Services({ darkMode }: ServicesProps) {
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
            Our Services
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
            Comprehensive solutions for all your hardware and construction needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 rounded-xl shadow-lg ${
                  darkMode ? "bg-neutral-700" : "bg-gray-50"
                }`}
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-neutral-800"}`}>
                  {service.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}