import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    // <section className={`py-20 ${darkMode ? "bg-neutral-900" : "bg-amber-50"}`}>
    <section
      id="contact"
      className={`py-20 ${
        darkMode
          ? "bg-neutral-900"
          : "bg-amber-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-neutral-800"}`}>
            Contact Us
          </h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
            Get in touch with us for inquiries, quotes, or bulk orders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl shadow-xl ${darkMode ? "bg-neutral-800" : "bg-white"}`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-neutral-800"}`}>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-neutral-700"}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    darkMode 
                      ? "bg-neutral-700 border-neutral-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-200 text-neutral-800 placeholder-gray-400"
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-neutral-700"}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    darkMode 
                      ? "bg-neutral-700 border-neutral-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-200 text-neutral-800 placeholder-gray-400"
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-neutral-700"}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    darkMode 
                      ? "bg-neutral-700 border-neutral-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-200 text-neutral-800 placeholder-gray-400"
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-neutral-700"}`}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                    darkMode 
                      ? "bg-neutral-700 border-neutral-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-200 text-neutral-800 placeholder-gray-400"
                  }`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Business Card */}
            <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? "bg-neutral-800" : "bg-white"}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-neutral-800"}`}>
                Business Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? "bg-neutral-700" : "bg-amber-100"}`}>
                    <MapPin size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>Address</p>
                    <p className={`${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
                      Khandelwal Traders,<br />
                      GT Road,<br />
                      Opposite Gurdayal Petrol Pump,<br />
                      Chhibramau, Kannauj - 209721
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? "bg-neutral-700" : "bg-amber-100"}`}>
                    <Phone size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>Phone</p>
                    <a href="tel:9986461414" className={`${darkMode ? "text-gray-300 hover:text-amber-400" : "text-neutral-600 hover:text-amber-600"}`}>
                      9986461414
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? "bg-neutral-700" : "bg-amber-100"}`}>
                    <Mail size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>Email</p>
                    <a href="mailto:info@khandelwaltraders.com" className={`${darkMode ? "text-gray-300 hover:text-amber-400" : "text-neutral-600 hover:text-amber-600"}`}>
                      info@khandelwaltraders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? "bg-neutral-700" : "bg-amber-100"}`}>
                    <Clock size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? "text-white" : "text-neutral-800"}`}>Business Hours</p>
                    <p className={`${darkMode ? "text-gray-300" : "text-neutral-600"}`}>
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:9986461414"
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919986461414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold border-2 ${
                    darkMode
                      ? "border-white text-white hover:bg-white hover:text-neutral-900"
                      : "border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white"
                  } transition-colors`}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className={`h-64 rounded-2xl shadow-xl overflow-hidden ${
                darkMode ? "bg-neutral-700" : "bg-gray-200"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.537934741694!2d79.49950654049279!3d27.145953704900627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e19c05ba2ce55%3A0x96f9e0511936049c!2sKhandelwal%20Traders!5e0!3m2!1sen!2sin!4v1780248851689!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Khandelwal Traders Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}