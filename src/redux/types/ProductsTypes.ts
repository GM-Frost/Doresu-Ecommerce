export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  color: {
    id: string;
    name: string;
  };
  sizes: {
    id: string;
    name: string;
    quantity: number;
  }[];
  images: {
    id: string;
    imageUrl: string;
  }[];
  category: {
    id: string;
    name: string;
  };
}
