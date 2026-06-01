import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919986461414?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-40 animate-ping" />

      {/* Main Button */}
      <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl transition-all">
        <MessageCircle size={26} className="text-white" />
      </div>

      {/* Tooltip (optional) */}
      <span className="absolute right-16 bottom-3 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}