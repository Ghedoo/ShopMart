"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [visibleCols, setVisibleCols] = useState([false, false, false, false, false]);

  useEffect(() => {
    // تفعيل Fade-in تدريجي لكل عمود
    visibleCols.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCols((prev) => {
          const newState = [...prev];
          newState[idx] = true;
          return newState;
        });
      }, idx * 150); // 150ms بين كل عمود
    });
  }, []);

  const colClass = (isVisible: boolean) =>
    `transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} text-center sm:text-left`;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-x-10 justify-items-center sm:justify-items-start">
        
        {/* القسم الأول - معلومات المتجر */}
        <div className={colClass(visibleCols[0])}>
          <h2 className="text-xl font-bold mb-4 text-gray-300">ShopMart</h2>
          <p className="text-gray-400 text-sm mb-4">
            Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2 justify-center sm:justify-start">
            <MapPin className="w-5 h-5 mt-1"/>
            <span className="text-gray-400 text-sm">123 Shop Street, Octoper City, DC 12345</span>
          </div>

          <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
            <Phone className="w-5 h-5"/>
            <span className="text-gray-400 text-sm">(+20) 01093333333</span>
          </div>

          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <Mail className="w-5 h-5"/>
            <span className="text-gray-400 text-sm">support@shopmart.com</span>
          </div>

          <div className="flex gap-4 mt-2 justify-center sm:justify-start">
            {[{
              href: "https://www.facebook.com",
              icon: <Facebook className="w-6 h-6"/>
            },{
              href: "https://www.twitter.com",
              icon: <Twitter className="w-6 h-6"/>
            },{
              href: "https://www.instagram.com",
              icon: <Instagram className="w-6 h-6 hover:scale-110 hover:text-red-400"/>
            },{
              href: "https://www.youtube.com",
              icon: <Youtube className="w-6 h-6 hover:scale-110 hover:text-red-600"/>
            }].map((item, idx) => (
              <Link key={idx} href={item.href} target="_blank"
                className="hover:text-blue-500 transition-colors duration-200 transform hover:scale-110">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* SHOP */}
        <div className={colClass(visibleCols[1])}>
          <h3 className="font-semibold mb-4 text-gray-300">SHOP</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Electronics","Fashion","Home & Garden","Sports","Deals"].map((cat, idx) => (
              <li key={idx}>
                <Link href="/categories" className="hover:text-white hover:underline transition-colors duration-200">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className={colClass(visibleCols[2])}>
          <h3 className="font-semibold mb-4 text-gray-300">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Contact Us","Help Center","Track Your Order","Returns & Exchanges","Size Guide"].map((item, idx) => (
              <li key={idx}>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors duration-200">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div className={colClass(visibleCols[3])}>
          <h3 className="font-semibold mb-4 text-gray-300">ABOUT</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["About ShopMart","Careers","Press","Investor Relations","Sustainability"].map((item, idx) => (
              <li key={idx}>
                <Link href="/about" className="hover:text-white hover:underline transition-colors duration-200">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* POLICIES */}
        <div className={colClass(visibleCols[4])}>
          <h3 className="font-semibold mb-4 text-gray-300">POLICIES</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Privacy Policy","Terms of Service","Cookie Policy","Shipping Policy","Refund Policy"].map((item, idx) => (
              <li key={idx}>
                <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors duration-200">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ShopMart. All rights reserved.
      </div>
    </footer>
  );
}
