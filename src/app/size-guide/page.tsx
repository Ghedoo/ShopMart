// /src/app/size-guide/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function SizeGuidePage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* العنوان والمقدمة */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
            Size Guide
          </h1>
          <p className="text-gray-600">
            Find your perfect fit with our detailed size guide. Please measure
            yourself carefully to ensure the best fit.
          </p>
        </div>

        {/* جدول المقاسات */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="px-4 py-2 border">Size</th>
                <th className="px-4 py-2 border">Chest (in)</th>
                <th className="px-4 py-2 border">Waist (in)</th>
                <th className="px-4 py-2 border">Hips (in)</th>
                <th className="px-4 py-2 border">Height (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-blue-50">
                <td className="px-4 py-2 border">S</td>
                <td className="px-4 py-2 border">34-36</td>
                <td className="px-4 py-2 border">26-28</td>
                <td className="px-4 py-2 border">36-38</td>
                <td className="px-4 py-2 border">
                  5&apos;4&quot;-5&apos;6&quot;
                </td>
              </tr>
              <tr className="odd:bg-blue-50">
                <td className="px-4 py-2 border">M</td>
                <td className="px-4 py-2 border">36-38</td>
                <td className="px-4 py-2 border">28-30</td>
                <td className="px-4 py-2 border">38-40</td>
                <td className="px-4 py-2 border">
                  5&apos;6&quot;-5&apos;8&quot;
                </td>
              </tr>
              <tr className="odd:bg-blue-50">
                <td className="px-4 py-2 border">L</td>
                <td className="px-4 py-2 border">38-40</td>
                <td className="px-4 py-2 border">30-32</td>
                <td className="px-4 py-2 border">40-42</td>
                <td className="px-4 py-2 border">
                  5&apos;8&quot;-5&apos;10&quot;
                </td>
              </tr>
              <tr className="odd:bg-blue-50">
                <td className="px-4 py-2 border">XL</td>
                <td className="px-4 py-2 border">40-42</td>
                <td className="px-4 py-2 border">32-34</td>
                <td className="px-4 py-2 border">42-44</td>
                <td className="px-4 py-2 border">
                  5&apos;10&quot;-6&apos;0&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ملاحظات إضافية */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Notes</h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Measurements are approximate and may vary by brand.</li>
            <li>
              Please use a measuring tape and check your measurements carefully
              before ordering.
            </li>
            <li>
              If you are between sizes, we recommend ordering the larger size.
            </li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Need Help?</h2>
          <p className="text-blue-700 mb-4">
            If you have any questions about sizing or measurements, please
            contact our customer service team.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Mail className="w-5 h-5" />
            <Link href="/contact" className="hover:underline font-medium">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
