import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  ArrowLeft,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;

  setDarkMode: (
    value: boolean
  ) => void;

  currentSection: string;

  scrollToSection: (
    section: string
  ) => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  currentSection,
  scrollToSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const isHomePage =
    location.pathname === "/";

  const navLinks = [
    {
      name: "Home",
      id: "home",
    },

    {
      name: "Products",
      id: "products",
    },

    {
      name: "About",
      id: "about",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  const handleNavigation = (
    sectionId: string
  ) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate("/");

      setTimeout(() => {
        const element =
          document.getElementById(
            sectionId
          );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${
        darkMode
          ? "bg-neutral-900 border-neutral-700"
          : "bg-white border-gray-200"
      } border-b shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            {/* BACK BUTTON */}
            {!isHomePage && (
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  navigate(-1)
                }
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-neutral-800 text-white"
                    : "bg-gray-100 text-neutral-800"
                }`}
              >
                <ArrowLeft size={20} />
              </motion.button>
            )}

            {/* LOGO */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              onClick={() =>
                navigate("/")
              }
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">
                  KT
                </span>
              </div>

              <div>
                <h1
                  className={`text-xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-neutral-800"
                  }`}
                >
                  Khandelwal Traders
                </h1>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  Hardware & Plywood
                  Solutions
                </p>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{
                  y: -2,
                }}
                onClick={() =>
                  handleNavigation(
                    link.id
                  )
                }
                className={`font-medium transition-colors ${
                  currentSection ===
                  link.id
                    ? "text-amber-600"
                    : darkMode
                    ? "text-gray-300 hover:text-amber-500"
                    : "text-neutral-600 hover:text-amber-600"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* DARK MODE */}
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-neutral-800 text-amber-400"
                  : "bg-gray-100 text-neutral-600"
              }`}
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </motion.button>

            {/* CALL BUTTON */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="tel:9986461414"
              className="hidden sm:flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-amber-700 transition-colors"
            >
              <Phone size={18} />

              <span>
                9986461414
              </span>
            </motion.a>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className={`md:hidden p-2 rounded-lg ${
                darkMode
                  ? "text-white"
                  : "text-neutral-800"
              }`}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className={`md:hidden ${
              darkMode
                ? "bg-neutral-800"
                : "bg-gray-50"
            } border-t ${
              darkMode
                ? "border-neutral-700"
                : "border-gray-200"
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    handleNavigation(
                      link.id
                    )
                  }
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentSection ===
                    link.id
                      ? "bg-amber-600 text-white"
                      : darkMode
                      ? "text-gray-300 hover:bg-neutral-700"
                      : "text-neutral-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <a
                href="tel:9986461414"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-medium bg-amber-600 text-white"
              >
                <Phone size={18} />

                <span>
                  Call: 9986461414
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}