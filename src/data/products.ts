import {
  CarouselItem,
  HardwareProduct,
  Testimonial,
  Brand,
  ProductDetail,
} from "../types";

import micaImg from "../assets/images/mica.png";

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Plywood Sheets",
    category: "plywood",
    description:
      "Premium quality plywood sheets for furniture and construction. Available in various grades and thicknesses for all your project needs.",
    sizes: "8x4, 6x4 feet",
    thickness: "6mm - 25mm",
    color: "bg-amber-700",
  },

  {
    id: 2,
    title: "MDF Boards",
    category: "boards",
    description:
      "High-density MDF boards perfect for interior furniture, wardrobes, and decorative panels.",
    sizes: "8x4 feet",
    thickness: "12mm - 25mm",
    color: "bg-neutral-600",
  },

  {
    id: 3,
    title: "Laminates",
    category: "laminates",
    description:
      "Designer laminates in hundreds of colors and textures.",
    sizes: "8x4 feet",
    thickness: "0.8mm - 1.5mm",
    color: "bg-amber-600",
  },

  {
    id: 4,
    title: "PVC Boards",
    category: "boards",
    description:
      "Waterproof PVC boards ideal for bathroom cabinets and kitchens.",
    sizes: "8x4 feet",
    thickness: "5mm - 18mm",
    color: "bg-neutral-700",
  },

  {
    id: 5,
    title: "Decorative Panels",
    category: "panels",
    description:
      "Stylish decorative panels for modern interiors.",
    sizes: "Various sizes",
    thickness: "Custom",
    color: "bg-amber-800",
  },

  {
    id: 6,
    title: "Wooden Boards",
    category: "boards",
    description:
      "Solid wooden boards and block boards for furniture construction.",
    sizes: "8x4 feet",
    thickness: "12mm - 50mm",
    color: "bg-neutral-800",
  },

  {
    id: 7,
    title: "Sunmica Sheets",
    category: "laminates",
    image: micaImg,
    description:
      "Original Sunmica brand laminates in matte and gloss finishes.",
    sizes: "8x4 feet",
    thickness: "1mm",
    color: "bg-amber-600",
  },

  {
    id: 8,
    title: "Interior Panels",
    category: "panels",
    description:
      "Complete interior paneling solutions for modern spaces.",
    sizes: "Custom sizes",
    thickness: "Various",
    color: "bg-neutral-600",
  },
];

export const hardwareProducts: HardwareProduct[] = [
  {
    id: 1,
    name: "Door Handles",
    category: "Hardware",
    slug: "hardware",
    description:
      "Premium door handles in brass, steel, and aluminum finishes",
    variants: 50,
    color: "bg-amber-100",
  },

  {
    id: 2,
    name: "Locks",
    category: "Hardware",
    slug: "hardware",
    description:
      "Mortise locks, cylindrical locks, and smart locks",
    variants: 35,
    color: "bg-neutral-100",
  },

  {
    id: 3,
    name: "Pipes",
    category: "Pipes",
    slug: "pipes",
    description:
      "PVC, CPVC, and GI pipes for plumbing applications",
    variants: 25,
    color: "bg-amber-50",
  },

  {
    id: 4,
    name: "Jaali (Net)",
    category: "Accessories",
    slug: "accessories",
    description:
      "Mosquito nets and safety grills for windows and doors",
    variants: 15,
    color: "bg-neutral-50",
  },

  {
    id: 5,
    name: "Hinges",
    category: "Fittings",
    slug: "fittings",
    description:
      "Butt hinges, concealed hinges, and heavy-duty hinges",
    variants: 40,
    color: "bg-amber-100",
  },

  {
    id: 6,
    name: "Bathroom Fittings",
    category: "Fittings",
    slug: "fittings",
    description:
      "Taps, showers, and sanitary fittings",
    variants: 60,
    color: "bg-neutral-100",
  },

  {
    id: 7,
    name: "Screws",
    category: "Hardware",
    slug: "hardware",
    description:
      "Wood screws, machine screws, and self-tapping screws",
    variants: 100,
    color: "bg-amber-50",
  },

  {
    id: 8,
    name: "Nails",
    category: "Hardware",
    slug: "hardware",
    description:
      "Wire nails, concrete nails, and finishing nails",
    variants: 30,
    color: "bg-neutral-50",
  },

  {
    id: 9,
    name: "Plywood Accessories",
    category: "Accessories",
    slug: "plywood",
    description:
      "Edge bands and plywood finishing materials",
    variants: 45,
    color: "bg-amber-100",
  },

  {
    id: 10,
    name: "Modular Hardware",
    category: "Hardware",
    slug: "hardware",
    description:
      "Kitchen and wardrobe modular fittings",
    variants: 80,
    color: "bg-neutral-100",
  },

  {
    id: 11,
    name: "Door Closers",
    category: "Hardware",
    slug: "hardware",
    description:
      "Hydraulic door closers and spring-loaded closers",
    variants: 20,
    color: "bg-amber-50",
  },

  {
    id: 12,
    name: "Cabinet Handles",
    category: "Fittings",
    slug: "fittings",
    description:
      "Designer cabinet handles and drawer pulls",
    variants: 70,
    color: "bg-neutral-50",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Contractor",
    content:
      "Khandelwal Traders has been our go-to supplier for all construction materials.",
    rating: 5,
  },

  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Designer",
    content:
      "Excellent collection of laminates and plywood.",
    rating: 5,
  },

  {
    id: 3,
    name: "Amit Verma",
    role: "Homeowner",
    content:
      "Very helpful staff and genuine products.",
    rating: 5,
  },

  {
    id: 4,
    name: "Suresh Patel",
    role: "Builder",
    content:
      "Bulk pricing and quality are excellent.",
    rating: 5,
  },
];

export const brands: Brand[] = [
  {
    id: 1,
    name: "CenturyPly",
    category: "Plywood",
    slug: "plywood",
  },

  {
    id: 2,
    name: "Greenply",
    category: "Plywood",
    slug: "plywood",
  },

  {
    id: 3,
    name: "Sunmica",
    category: "Laminates",
    slug: "laminates",
    image: micaImg,
  },

  {
    id: 4,
    name: "Merino",
    category: "Laminates",
    slug: "laminates",
  },

  {
    id: 5,
    name: "Godrej",
    category: "Hardware",
    slug: "hardware",
  },

  {
    id: 6,
    name: "Dorset",
    category: "Hardware",
    slug: "hardware",
  },

  {
    id: 7,
    name: "Hafele",
    category: "Fittings",
    slug: "fittings",
  },

  {
    id: 8,
    name: "Hettich",
    category: "Fittings",
    slug: "fittings",
  },

  {
    id: 9,
    name: "Astral",
    category: "Pipes",
    slug: "pipes",
  },

  {
    id: 10,
    name: "Finolex",
    category: "Pipes",
    slug: "pipes",
  },
];

export const productDetails: ProductDetail[] = [
  {
    id: 1,
    categorySlug: "plywood",

    title: "CenturyPly Premium Boards",

    description:
      "Premium quality plywood sheets suitable for homes, offices, and modular furniture.",

    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",

    features: [
      "Waterproof",
      "Termite Resistant",
      "Smooth Finish",
      "Long Lasting",
    ],

    variants: [
      "6mm",
      "12mm",
      "18mm",
      "Marine Grade",
      "Commercial Grade",
    ],
  },

  {
    id: 2,
    categorySlug: "hardware",

    title: "Premium Hardware Collection",

    description:
      "Wide range of locks, handles, hinges, and fittings.",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    features: [
      "Rust Resistant",
      "Heavy Duty",
      "Premium Finish",
    ],

    variants: [
      "Door Locks",
      "Handles",
      "Closers",
      "Hinges",
    ],
  },

  {
    id: 3,
    categorySlug: "laminates",

    title: "Designer Laminates",

    description:
      "Decorative laminates available in matte, glossy, and textured finishes.",

    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",

    features: [
      "Scratch Resistant",
      "Elegant Designs",
      "Easy Cleaning",
    ],

    variants: [
      "Glossy",
      "Matte",
      "Wood Texture",
      "Marble Finish",
    ],
  },

  {
    id: 4,
    categorySlug: "fittings",

    title: "Furniture Fittings",

    description:
      "High-quality modular fittings for kitchens and wardrobes.",

    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba",

    features: [
      "Premium Steel",
      "Soft Closing",
      "Modern Design",
    ],

    variants: [
      "Drawer Channels",
      "Cabinet Handles",
      "Hydraulic Hinges",
    ],
  },

  {
    id: 5,
    categorySlug: "pipes",

    title: "Pipes & Plumbing",

    description:
      "PVC and CPVC plumbing solutions for residential and commercial use.",

    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7",

    features: [
      "Leak Proof",
      "Durable Material",
      "Easy Installation",
    ],

    variants: [
      "PVC Pipes",
      "CPVC Pipes",
      "GI Pipes",
    ],
  },
];