import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: '1',
    name: 'Uniforms & Gis',
    description: 'Traditional and competition uniforms',
    image: 'https://images.unsplash.com/photo-1617796110702-9a4e47de6deb?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Protective Gear',
    description: 'Guards, helmets, and padding',
    image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Training Equipment',
    description: 'Bags, pads, and training tools',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Accessories',
    description: 'Belts, wraps, and more',
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80'
  }
];

export default function CategoryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">{category.name}</h3>
              <p className="text-sm md:text-base text-gray-200">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}