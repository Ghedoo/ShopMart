// src/app/about/page.tsx
import React from "react";
import { Truck, ShieldCheck, Headphones, RotateCcw, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16 px-4">

        {/* العنوان */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            About ShopMart
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ShopMart is your one-stop destination for the latest technology, fashion,
            and lifestyle products. We are committed to providing quality products
            with fast shipping and excellent customer service.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-blue-900">
            Our Mission
          </h2>
          <p className="text-blue-700">
            To make shopping for quality products easy, convenient, and enjoyable
            for everyone. We believe that everyone deserves access to the latest
            and best products at competitive prices.
          </p>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Quality", desc: "We only sell products that meet our high standards" },
              { title: "Customer Service", desc: "Your satisfaction is our priority" },
              { title: "Innovation", desc: "We stay ahead of trends to bring you the latest products" },
              { title: "Trust", desc: "We build lasting relationships with our customers" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose ShopMart */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            Why Choose ShopMart?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Feature
              icon={<Truck />}
              title="Fast Shipping"
              desc="Quick and reliable delivery to your doorstep"
            />
            <Feature
              icon={<ShieldCheck />}
              title="Quality Guarantee"
              desc="All products are carefully selected and tested"
            />
            <Feature
              icon={<Headphones />}
              title="24/7 Support"
              desc="Our customer service team is always here to help"
            />
            <Feature
              icon={<RotateCcw />}
              title="Easy Returns"
              desc="Hassle-free return policy for your peace of mind"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
      <div className="flex justify-center mb-3 text-blue-700">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
