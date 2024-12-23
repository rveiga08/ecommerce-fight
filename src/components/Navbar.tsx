import React, { useState } from 'react';
import { Menu, Search, User, X } from 'lucide-react';
import CartIcon from './cart/CartIcon';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="ml-4 flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-red-600">MartialMart</h1>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center px-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search for martial arts equipment..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Categories</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Orders</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Account</a>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}