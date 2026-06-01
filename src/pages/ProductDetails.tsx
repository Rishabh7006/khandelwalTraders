import { useParams } from "react-router-dom";

import { productDetails } from "../data/products";

interface Props {
  darkMode: boolean;
}

export default function ProductDetails({
  darkMode,
}: Props) {
  const { id } = useParams();

  const product = productDetails.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className={`min-h-screen py-20 ${
        darkMode ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          className={`rounded-2xl overflow-hidden shadow-xl ${
            darkMode ? "bg-neutral-800" : "bg-gray-100"
          }`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover"
          />

          <div className="p-8">
            <h1
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-neutral-800"
              }`}
            >
              {product.title}
            </h1>

            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-300" : "text-neutral-600"
              }`}
            >
              {product.description}
            </p>

            <div className="mb-8">
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-neutral-800"
                }`}
              >
                Features
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 bg-amber-600 text-white rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-neutral-800"
                }`}
              >
                Available Variants
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <span
                    key={variant}
                    className={`px-4 py-2 rounded-full ${
                      darkMode
                        ? "bg-neutral-700 text-white"
                        : "bg-white text-neutral-700"
                    }`}
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </div>

            <button className="bg-amber-600 hover:bg-amber-700 transition px-8 py-4 rounded-xl text-white font-bold">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}