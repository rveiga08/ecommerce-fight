import React from 'react';
import { MartialArt } from '../../types';

interface ProductFiltersProps {
  selectedMartialArt: MartialArt | 'all';
  onMartialArtChange: (martialArt: MartialArt | 'all') => void;
}

export default function ProductFilters({ selectedMartialArt, onMartialArtChange }: ProductFiltersProps) {
  const martialArts: (MartialArt | 'all')[] = ['all', 'karate', 'jiujitsu', 'taekwondo', 'judo', 'mma', 'muaythai', 'kungfu', 'boxing'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Martial Art</h3>
      <div className="space-y-2">
        {martialArts.map((art) => (
          <button
            key={art}
            onClick={() => onMartialArtChange(art)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedMartialArt === art
                ? 'bg-red-600 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {art.charAt(0).toUpperCase() + art.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}