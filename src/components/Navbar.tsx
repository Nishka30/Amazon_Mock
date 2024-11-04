import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const cart = useStore((state) => state.cart);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">ShopHub</span>
          </Link>
          <div className="flex items-center">
            <Link to="/products" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Products
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="ml-1 bg-indigo-600 text-white rounded-full px-2 py-1 text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}