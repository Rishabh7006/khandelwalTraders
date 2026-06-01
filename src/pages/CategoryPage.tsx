import { Link, useParams } from "react-router-dom";

import { brands } from "../data/products";

interface Props {
  darkMode: boolean;
}

export default function CategoryPage({ darkMode }: Props) {
  const { slug } = useParams();

  const filteredBrands = brands.filter(
    (brand) => brand.slug === slug
  );

  return (
    <div
      className={`min-h-screen py-20 ${
        darkMode ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className={`text-4xl font-bold mb-10 capitalize ${
            darkMode ? "text-white" : "text-neutral-800"
          }`}
        >
          {slug} Brands
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.slug}`}
              className={`p-6 rounded-xl shadow-lg transition hover:-translate-y-1 ${
                darkMode ? "bg-neutral-800" : "bg-gray-100"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-neutral-800"
                }`}
              >
                {brand.name}
              </h2>

              <p className="text-amber-600">
                Explore Products →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}