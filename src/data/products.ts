import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Karate Gi',
    description: 'Professional-grade cotton karate uniform with reinforced stitching',
    price: 89.99,
    category: 'uniforms',
    martialArt: 'karate',
    image: 'https://images.unsplash.com/photo-1617796110702-9a4e47de6deb?auto=format&fit=crop&q=80',
    brand: 'Elite Fighter',
    inStock: true
  },
  {
    id: '2',
    name: 'MMA Training Gloves',
    description: 'Durable synthetic leather MMA gloves with enhanced padding',
    price: 49.99,
    category: 'protective-gear',
    martialArt: 'mma',
    image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80',
    brand: 'FightPro',
    inStock: true
  },
  {
    id: '3',
    name: 'Heavy Duty Punching Bag',
    description: '70lb hanging bag perfect for striking practice',
    price: 149.99,
    category: 'training-equipment',
    martialArt: 'boxing',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80',
    brand: 'StrikeMaster',
    inStock: true
  }
];