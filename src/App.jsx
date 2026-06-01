import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [currentSection, setCurrentSection] =
    useState("home");

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = [
        "home",
        "products",
        "about",
        "contact",
      ];

      const scrollPosition =
        window.scrollY + 120;

      for (const section of sections) {
        const element =
          document.getElementById(section);

        if (element) {
          const offsetTop =
            element.offsetTop;

          const offsetHeight =
            element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + offsetHeight
          ) {
            setCurrentSection(section);

            break;
          }
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);

      return;
    }

    const element =
      document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-neutral-900"
          : "bg-white"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              scrollToSection={
                scrollToSection
              }
            />
          }
        />

        <Route
          path="/category/:slug"
          element={
            <CategoryPage
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="/brand/:slug"
          element={
            <BrandPage
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              darkMode={darkMode}
            />
          }
        />
      </Routes>

      <WhatsAppButton />
    </div>
  );
}

export default App;