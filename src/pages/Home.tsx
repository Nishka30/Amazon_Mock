import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Shopping"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to ShopHub
          </h1>
          <p className="mt-6 max-w-xl text-xl">
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy
            our fast delivery service.
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <ShoppingBag className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Wide Selection</h3>
            <p className="mt-2 text-gray-600">
              Browse through thousands of products
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your orders delivered quickly
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Secure Shopping</h3>
            <p className="mt-2 text-gray-600">
              Your transactions are always secure
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCard className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Easy Payments</h3>
            <p className="mt-2 text-gray-600">
              Multiple payment options available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}