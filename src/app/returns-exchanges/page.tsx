// /src/app/returns-exchanges/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ReturnsExchangesPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold text-center">Returns & Exchanges</h1>

        {/* Return Policy */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Return Policy</h2>
          <p className="text-gray-700">
            We want you to be completely satisfied with your purchase. If youre not happy with your order, well make it right.
          </p>
         <div className="bg-blue-100 p-6 rounded-xl shadow-inner">
  <h3 className="font-semibold text-blue-800 text-lg mb-2">30-Day Return Window</h3>
  <p className="text-blue-700">
    You have 30 days from the delivery date to return or exchange your items.
  </p>
</div>

          <h3 className="font-semibold mt-4">Return Conditions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Items must be in original condition with all tags attached</li>
            <li>Items must be unworn, unwashed, and unused</li>
            <li>Original packaging should be included when possible</li>
            <li>Some items may be excluded from returns (see product page for details)</li>
          </ul>
        </div>

        {/* How to Return */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Contact Us:</span> Email us at <span className="text-blue-600">returns@shopmart.com</span> with your order number
            </li>
            <li>
              <span className="font-semibold">Get Return Label:</span> Well send you a prepaid return shipping label
            </li>
            <li>
              <span className="font-semibold">Ship Your Return:</span> Package your items and drop off at any authorized location
            </li>
            <li>
              <span className="font-semibold">Receive Refund:</span> Well process your refund within 5-7 business days
            </li>
          </ol>
        </div>

        {/* Questions? */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Questions?</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about returns or exchanges, please dont hesitate to contact our customer service team.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Mail className="w-5 h-5"/>
            <Link href="/contact" className="hover:underline font-medium">Contact Support</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
