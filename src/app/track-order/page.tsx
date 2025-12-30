// /src/app/track-order/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: هنا ممكن تضيف استدعاء API لتتبع الطلب
    setOrderStatus(`Order #${orderNumber} for ${email} is currently being processed.`);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold text-center mb-2">Track Your Order</h1>
        <p className="text-center text-gray-600">Enter Your Order Information</p>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="orderNumber" className="block mb-1 font-medium">Order Number</label>
              <input
                type="text"
                id="orderNumber"
                placeholder="Enter your order number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Track Order
            </button>
          </form>
        </div>

        {/* Order Status Section */}
        {orderStatus && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Order Status</h2>
            <p className="text-gray-700">{orderStatus}</p>
          </div>
        )}

        {/* Need Help Section */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">If you&apos;re having trouble tracking your order, please contact our customer service team.</p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Mail className="w-5 h-5"/>
            <Link href="/contact" className="hover:underline font-medium">Contact Support</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
