import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/products/FeaturedProducts';
import ProductsPage from './components/products/ProductsPage';
import Footer from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';

// Filter featured products (those with discounts or marked as featured)
const featuredProducts = products.slice(0, 3); // For now, showing first 3 products as featured

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedProducts products={featuredProducts} />
          <CategoryGrid />
          <ProductsPage />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;