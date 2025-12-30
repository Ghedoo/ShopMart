// src/app/privacy-policy/page.tsx
import React from "react";
import { ShieldCheck, Database, Share2, Lock, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 px-4">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: 12/24/2025
          </p>
        </section>

        {/* Information We Collect */}
        <PolicyCard
          icon={<Database />}
          title="Information We Collect"
          text="We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support."
        />

        {/* How We Use Your Information */}
        <PolicyCard
          icon={<ShieldCheck />}
          title="How We Use Your Information"
          text="We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you."
        />

        {/* Information Sharing */}
        <PolicyCard
          icon={<Share2 />}
          title="Information Sharing"
          text="We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."
        />

        {/* Data Security */}
        <PolicyCard
          icon={<Lock />}
          title="Data Security"
          text="We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        />

        {/* Contact */}
        <section className="bg-blue-50 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-900">
            Contact Us
          </h2>
          <p className="text-blue-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-800 font-medium">
            <Mail className="w-5 h-5" />
            privacy@shopmart.com
          </div>
        </section>

      </div>
    </div>
  );
}

/* ---------- Component ---------- */

function PolicyCard({
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
