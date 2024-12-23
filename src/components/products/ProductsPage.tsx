import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { MartialArt } from '../../types';
import { products } from '../../data/products';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import { useCart } from '../../context/CartContext';

export default function ProductsPage() {
  const [selectedMartialArt, setSelectedMartialArt] = useState<MartialArt | 'all'>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  const filteredProducts = selectedMartialArt === 'all'
    ? products
    : products.filter(product => product.martialArt === selectedMartialArt);

  const handleAddToCart = (productId: string) => {
    addItem(productId);
  };

  const handleMartialArtChange = (art: MartialArt | 'all') => {
    setSelectedMartialArt(art);
    setIsFilterOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">All Products</h1>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md"
        >
          <Filter className="h-5 w-5" />
          Filters
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className={`
          lg:w-64 lg:flex-shrink-0
          fixed lg:relative inset-0 z-40 bg-white lg:bg-transparent
          transform transition-transform duration-300 ease-in-out
          ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4 lg:p-0">
            <div className="flex lg:hidden justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ProductFilters
              selectedMartialArt={selectedMartialArt}
              onMartialArtChange={handleMartialArtChange}
            />
          </div>
        </div>
        
        {/* Overlay for mobile filter */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div className="flex-1">
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}