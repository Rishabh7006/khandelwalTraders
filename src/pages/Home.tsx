import Hero from "../components/Hero";

import Carousel from "../components/Carousel";

import ProductsShowcase from "../components/ProductsShowcase";

import Services from "../components/Services";

import Testimonials from "../components/Testimonials";

import Brands from "../components/Brands";

import About from "../components/About";

import Contact from "../components/Contact";

import Footer from "../components/Footer";

interface Props {
  darkMode: boolean;

  scrollToSection: (
    section: string
  ) => void;
}

export default function Home({
  darkMode,
  scrollToSection,
}: Props) {
  return (
    <>
      {/* HOME */}
      <div id="home">
        <Hero
          darkMode={darkMode}
          scrollToSection={
            scrollToSection
          }
        />
      </div>

      {/* CAROUSEL */}
      <Carousel darkMode={darkMode} />

      {/* PRODUCTS */}
      <div id="products">
        <ProductsShowcase
          darkMode={darkMode}
        />
      </div>

      {/* SERVICES */}
      <Services darkMode={darkMode} />

      {/* BRANDS */}
      <Brands darkMode={darkMode} />

      {/* ABOUT */}
      <div id="about">
        <About darkMode={darkMode} />
      </div>

      {/* TESTIMONIALS */}
      <Testimonials
        darkMode={darkMode}
      />

      {/* CONTACT */}
      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}