// src/app/terms-of-service/page.tsx
import React from "react";
import {
  FileText,
  CheckCircle,
  Download,
  ShoppingBag,
  CreditCard,
  RotateCcw,
  Mail,
} from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 px-4">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: 12/24/2025
          </p>
        </section>

        <TermCard
          icon={<CheckCircle />}
          title="Acceptance of Terms"
          text="By accessing and using ShopMart, you accept and agree to be bound by the terms and provision of this agreement."
        />

        <TermCard
          icon={<Download />}
          title="Use License"
          text="Permission is granted to temporarily download one copy of the materials on ShopMart for personal, non-commercial transitory viewing only."
        />

        <TermCard
          icon={<ShoppingBag />}
          title="Product Information"
          text="We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free."
        />

        <TermCard
          icon={<CreditCard />}
          title="Pricing and Payment"
          text="All prices are subject to change without notice. Payment is due at the time of purchase."
        />

        <TermCard
          icon={<RotateCcw />}
          title="Returns and Refunds"
          text="Returns are accepted within 30 days of purchase. Items must be in original condition with all tags attached."
        />

        {/* Contact */}
        <section className="bg-blue-50 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Contact Information
          </h2>
          <p className="text-blue-700 mb-4">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-800 font-medium">
            <Mail className="w-5 h-5" />
            legal@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Component ---------- */

function TermCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-start gap-3">
        <div className="text-blue-700 mt-1">{icon}</div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-1">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
