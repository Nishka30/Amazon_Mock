import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export function PaymentFailure() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Payment Failed
        </h1>
        <p className="mt-2 text-gray-600">
          We couldn't process your payment. Please try again or use a different payment method.
        </p>
        <Link
          to="/checkout"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}