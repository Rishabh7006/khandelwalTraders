import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ darkMode }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl mb-8 transition ${
        darkMode
          ? "bg-neutral-800 text-white hover:bg-neutral-700"
          : "bg-gray-100 text-neutral-800 hover:bg-gray-200"
      }`}
    >
      <ArrowLeft size={20} />
      Back
    </button>
  );
}