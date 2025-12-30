// src/app/press/page.tsx
import React from "react";
import { Newspaper, Megaphone, Calendar, Download, Mail } from "lucide-react";

export default function PressPage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20 px-4">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            Press & Media
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the latest news, announcements, and media resources about ShopMart.
            We’re excited to share our story with the world.
          </p>
        </section>

        {/* Press Highlights */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Press Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Highlight
              icon={<Newspaper />}
              title="ShopMart Expands Product Range"
              desc="ShopMart introduces new lifestyle and tech categories to serve more customers."
            />
            <Highlight
              icon={<Megaphone />}
              title="New Customer Experience Update"
              desc="Major platform update focused on speed, design, and usability."
            />
            <Highlight
              icon={<Calendar />}
              title="Record Growth in 2025"
              desc="ShopMart sees strong growth driven by customer satisfaction and innovation."
            />
          </div>
        </section>

        {/* Press Releases */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Press Releases
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <Release
              date="March 12, 2025"
              title="ShopMart Launches Faster Shipping Options"
            />
            <Release
              date="January 28, 2025"
              title="ShopMart Reaches 100K Happy Customers"
            />
            <Release
              date="November 5, 2024"
              title="ShopMart Introduces Sustainability Initiative"
            />
          </div>
        </section>

        {/* Media Resources */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Media Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Resource title="Company Logo" />
            <Resource title="Brand Guidelines" />
            <Resource title="Product Images" />
          </div>
        </section>

        {/* Press Contact */}
        <section className="bg-blue-50 p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            Press Contact
          </h2>
          <p className="text-blue-700 mb-5">
            For media inquiries, interviews, or press materials, please contact us.
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-800 font-medium">
            <Mail className="w-5 h-5" />
            press@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Highlight({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="flex justify-center text-blue-700 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Release({
  date,
  title,
}: {
  date: string;
  title: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <button className="text-blue-700 hover:underline font-medium">
        Read More
      </button>
    </div>
  );
}

function Resource({ title }: { title: string }) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
      <Download className="w-8 h-8 mx-auto mb-3 text-blue-700" />
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <button className="text-blue-700 hover:underline font-medium">
        Download
      </button>
    </div>
  );
}
