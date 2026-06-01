import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const productLinks = [
    "Plywood Sheets",
    "Laminates",
    "Hardware",
    "Door Fittings",
    "Bathroom Fittings",
    "Pipes & Fittings",
  ];

  return (
    <footer className={`${darkMode ? "bg-neutral-950" : "bg-neutral-900"} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Khandelwal Traders</h3>
                <p className="text-gray-400 text-sm">Hardware & Plywood Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for premium hardware materials, plywood sheets, laminates, and building supplies since 1997.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <span className="text-white text-sm font-bold">{index}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1">
                  <MapPin size={18} className="text-amber-500" />
                </div>
                <p className="text-gray-400 text-sm">
                  GT Road,<br />
                  Chhibramau, Kannauj - 209721
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1">
                  <Phone size={18} className="text-amber-500" />
                </div>
                <a href="tel:9986461414" className="text-gray-400 hover:text-amber-500 transition-colors">
                  9986461414
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1">
                  <Mail size={18} className="text-amber-500" />
                </div>
                <a href="mailto:info@khandelwaltraders.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  info@khandelwaltraders.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Khandelwal Traders. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed with care for quality hardware solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}