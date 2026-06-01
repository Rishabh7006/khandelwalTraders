import { Link } from "react-router-dom";
import { brands } from "../data/products";

interface Props {
  darkMode: boolean;
}

export default function Brands({ darkMode }: Props) {
  return (
    <section
      className={`py-20 ${
        darkMode ? "bg-neutral-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-neutral-800"
          }`}
        >
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.slug}`}
              className={`p-6 rounded-xl shadow-lg text-center transition hover:-translate-y-1 ${
                darkMode ? "bg-neutral-800" : "bg-white"
              }`}
            >
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-neutral-800"
                }`}
              >
                {brand.name}
              </h3>

              <p className="text-amber-600 mt-2">
                {brand.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}