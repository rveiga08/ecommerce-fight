import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import { useCart } from '../../context/CartContext';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { addItem } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Special Offers</h2>
        <a href="#" className="text-red-600 hover:text-red-700 font-semibold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(productId) => addItem(productId)}
          />
        ))}
      </div>
    </section>
  );
}