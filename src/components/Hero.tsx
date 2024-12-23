import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80"
        alt="Martial Arts Equipment"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Premium Martial Arts Equipment</h1>
          <p className="text-xl mb-8">For champions in training and masters alike</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}