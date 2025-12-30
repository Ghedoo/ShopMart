// /src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* القسم الأول - معلومات الاتصال */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-4">
            Get in Touch<br />
            We&lsquo;d love to hear from you. Send us a message and we&lsquo;ll respond as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Mail className="w-5 h-5 text-blue-600 group-hover:animate-bounce" />
              <span className="hover:text-blue-600 transition">support@shopmart.com</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <Phone className="w-5 h-5 text-green-600 group-hover:animate-bounce" />
              <span className="hover:text-green-600 transition">(+20) 01093333333</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <MapPin className="w-5 h-5 text-red-600 group-hover:animate-bounce" />
              <span className="hover:text-red-600 transition">123 Shop Street, Octoper City, DC 12345</span>
            </div>
          </div>
        </div>

        {/* القسم الثاني - فورم الرسالة */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
