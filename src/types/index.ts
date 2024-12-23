export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  martialArt: string;
  image: string;
  brand: string;
  inStock: boolean;
}

export type MartialArt = 'karate' | 'jiujitsu' | 'taekwondo' | 'judo' | 'mma' | 'muaythai' | 'kungfu' | 'boxing';

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}