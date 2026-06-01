import { Link, useParams } from "react-router-dom";

import { productDetails } from "../data/products";

interface Props {
  darkMode: boolean;
}

export default function BrandPage({ darkMode }: Props) {
  const { slug } = useParams();

  const products = productDetails.filter(
    (item) => item.categorySlug === slug
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
          {slug} Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={`rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 ${
                darkMode ? "bg-neutral-800" : "bg-gray-100"
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {product.title}
                </h2>

                <p
                  className={`mb-4 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-neutral-600"
                  }`}
                >
                  {product.description}
                </p>

                <span className="text-amber-600 font-bold">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}