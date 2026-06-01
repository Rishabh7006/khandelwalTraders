export interface CarouselItem {
  id: number;
  title: string;
  category: string;
  image?: string;
  description: string;
  sizes: string;
  thickness: string;
  color: string;
}

export interface HardwareProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  variants: number;
  color: string;
  image?: string;

  // NEW
  slug: string;
}

export interface ProductDetail {
  id: number;
  categorySlug: string;

  title: string;
  image?: string;
  description: string;

  features: string[];
  variants: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Brand {
  id: number;
  name: string;
  category: string;
  image?: string;

  // NEW
  slug: string;
}

export interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  color: string;
}