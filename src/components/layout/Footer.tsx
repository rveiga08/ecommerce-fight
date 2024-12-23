import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MartialMart</h3>
            <p className="text-sm">
              Your trusted source for premium martial arts equipment and gear since 1970.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Uniforms & Gis</a></li>
              <li><a href="#" className="hover:text-white">Protective Gear</a></li>
              <li><a href="#" className="hover:text-white">Training Equipment</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>1234 Martial Way</li>
              <li>Dojo City, DC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: support@martialmart.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MartialMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}