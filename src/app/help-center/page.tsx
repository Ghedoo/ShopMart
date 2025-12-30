// /src/app/help-center/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function HelpCenterPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other secure payment methods."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account."
    },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-center mb-4">Help Center</h1>
        <p className="text-center text-gray-600">Frequently Asked Questions</p>

        {/* FAQ Section */}
        <div className="space-y-6 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
          <p className="text-gray-700 mb-4">If you can`&apos;`,t find the answer you`&apos;`re looking for, our customer service team is here to help.</p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Mail className="w-5 h-5"/>
            <Link href="/contact" className="hover:underline font-medium">Contact Us</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
