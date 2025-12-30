// src/app/sustainability/page.tsx
import React from "react";
import {
  Leaf,
  Recycle,
  Truck,
  Users,
  Globe,
  Mail,
} from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20 px-4">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
            Sustainability at ShopMart
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At ShopMart, sustainability is at the heart of everything we do.
            We are committed to reducing our environmental impact while creating
            long-term value for our customers, partners, and communities.
          </p>
        </section>

        {/* Our Commitment */}
        <section className="bg-green-50 p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">
            Our Commitment
          </h2>
          <p className="text-green-700 leading-relaxed">
            We strive to operate responsibly by minimizing waste, reducing carbon
            emissions, and supporting ethical sourcing. Sustainability is not just
            a goal—it’s a responsibility.
          </p>
        </section>

        {/* Sustainability Pillars */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Sustainability Pillars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Pillar
              icon={<Leaf />}
              title="Eco-Friendly Products"
              desc="Partnering with suppliers who follow sustainable and ethical practices."
            />
            <Pillar
              icon={<Recycle />}
              title="Waste Reduction"
              desc="Reducing packaging waste and promoting recyclable materials."
            />
            <Pillar
              icon={<Truck />}
              title="Responsible Logistics"
              desc="Optimizing deliveries to reduce carbon emissions."
            />
            <Pillar
              icon={<Users />}
              title="Community Impact"
              desc="Supporting communities through fair labor and social initiatives."
            />
            <Pillar
              icon={<Globe />}
              title="Global Responsibility"
              desc="Operating with environmental awareness across all markets."
            />
          </div>
        </section>

        {/* Goals */}
        <section className="bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Our Goals
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reduce packaging waste by 30% over the next 3 years</li>
            <li>Increase use of recyclable materials across all shipments</li>
            <li>Partner with environmentally responsible suppliers</li>
            <li>Lower carbon emissions through smarter logistics</li>
          </ul>
        </section>

        {/* Sustainability Contact */}
        <section className="bg-green-50 p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-green-900">
            Sustainability Contact
          </h2>
          <p className="text-green-700 mb-5">
            Have questions or ideas about sustainability at ShopMart?
            We’d love to hear from you.
          </p>
          <div className="flex justify-center items-center gap-2 text-green-800 font-medium">
            <Mail className="w-5 h-5" />
            sustainability@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Pillar({
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
      <div className="flex justify-center text-green-700 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
