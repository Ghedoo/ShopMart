// src/app/investor-relations/page.tsx
import React from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  FileText,
  Mail,
} from "lucide-react";

export default function InvestorRelationsPage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20 px-4">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            Investor Relations
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Welcome to ShopMart Investor Relations. Here you can find key information
            about our business performance, strategy, and growth opportunities.
          </p>
        </section>

        {/* Company Overview */}
        <section className="bg-blue-50 p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            Company Overview
          </h2>
          <p className="text-blue-700 leading-relaxed">
            ShopMart is a fast-growing e-commerce platform focused on delivering
            high-quality technology, fashion, and lifestyle products. Our scalable
            business model, strong customer loyalty, and focus on innovation position
            us for sustainable long-term growth.
          </p>
        </section>

        {/* Key Metrics */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Key Metrics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Metric title="Customers" value="100K+" icon={<Users />} />
            <Metric title="Annual Growth" value="45%" icon={<TrendingUp />} />
            <Metric title="Orders / Month" value="20K+" icon={<BarChart3 />} />
            <Metric title="Markets" value="5+" icon={<FileText />} />
          </div>
        </section>

        {/* Financial Information */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Financial Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="Annual Reports" />
            <InfoCard title="Quarterly Results" />
            <InfoCard title="Investor Presentations" />
          </div>
        </section>

        {/* Growth Strategy */}
        <section className="bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Growth Strategy
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Expanding product categories and supplier partnerships</li>
            <li>Enhancing logistics and delivery infrastructure</li>
            <li>Investing in technology and customer experience</li>
            <li>Entering new regional markets</li>
          </ul>
        </section>

        {/* Investor Contact */}
        <section className="bg-blue-50 p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">
            Investor Contact
          </h2>
          <p className="text-blue-700 mb-5">
            For investor inquiries, financial reports, or partnership opportunities,
            please contact our investor relations team.
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-800 font-medium">
            <Mail className="w-5 h-5" />
            investors@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Metric({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="flex justify-center text-blue-700 mb-2">
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

function InfoCard({ title }: { title: string }) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md text-center">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <button className="text-blue-700 hover:underline font-medium">
        View Details
      </button>
    </div>
  );
}
