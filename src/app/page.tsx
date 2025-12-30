"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  Box,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function HomePage() {
  const { data: session, status } = useSession();

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f5f0eb]">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 bg-[#d9c7b7]/50 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#d9c7b7]/30 rounded-full blur-2xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="w-full max-w-[100%] mx-auto py-28 px-4 md:px-12">
        {/* Greeting */}
        {status === "authenticated" && (
          <div className="flex justify-center mb-6">
            <div className="px-4 py-2 bg-[#d9c7b7] text-[#4a3f35] rounded-full text-sm font-medium">
              👋 Welcome back, {session.user?.name}
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Shop smarter with <span className="text-[#8b5e3c]">ShopMart</span>
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-[#5a4634] mb-6"
            >
              Fast, Secure & Reliable Shopping
            </motion.h2>
            <p className="text-lg text-[#5a4634] mb-8 max-w-xl">
              High-quality tech, fashion, and lifestyle products. Fast delivery,
              secure payments, and easy returns.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button className="px-8 py-3 bg-[#8b5e3c] hover:bg-[#a16d4c] text-white rounded-xl shadow-md transition">
                    Explore Products
                  </Button>
                </motion.div>
              </Link>

              <Link href="/categories">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="outline"
                    className="px-8 py-3 border-[#8b5e3c] text-[#8b5e3c] hover:bg-[#d9c7b7] rounded-xl transition"
                  >
                    Browse Categories
                  </Button>
                </motion.div>
              </Link>
            </div>

            <p className="text-sm text-[#5a4634] mt-4">
              No registration required to browse products
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-72 md:h-[420px] rounded-3xl bg-gradient-to-br from-[#a16d4c] via-[#b78460] to-[#d9c7b7] shadow-2xl flex items-center justify-center w-full"
          >
            <div className="text-center text-white px-6">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">
                Trusted by customers
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Everything you need, in one place
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 w-full grid grid-cols-3 gap-6">
          <Stat value={10000} label="Products" icon={<Box />} />
          <Stat value={5000} label="Customers" icon={<ShieldCheck />} />
          <Stat value={24} label="Support" icon={<Headphones />} suffix="/7" />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full">
          <Feature
            icon={<Truck />}
            title="Fast Shipping"
            description="Get your orders quickly and reliably"
          />
          <Feature
            icon={<ShieldCheck />}
            title="Secure Payments"
            description="Safe and secure payment methods"
          />
          <Feature
            icon={<Headphones />}
            title="24/7 Support"
            description="We are here whenever you need help"
          />
          <Feature
            icon={<RotateCcw />}
            title="Easy Returns"
            description="Hassle-free returns and refunds"
          />
        </div>

        {/* Testimonials */}
        <div className="mt-24 w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#8b5e3c] text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              name="Alice Johnson"
              review="Amazing service and fast delivery! Highly recommend."
            />
            <Testimonial
              name="Mohamed Salah"
              review="Products are top quality. I will definitely buy again!"
            />
            <Testimonial
              name="Sara Ahmed"
              review="Customer support is excellent, very responsive and helpful."
            />
          </div>
        </div>

        {/* Newsletter / CTA
        <div className="mt-24 w-full max-w-2xl mx-auto text-center bg-[#d9c7b7]/40 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-[#8b5e3c] mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-[#5a4634] mb-6">
            Stay updated with the latest products and offers
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-[#8b5e3c] w-full sm:w-auto flex-1"
            />
            <Button className="px-6 py-2 bg-[#8b5e3c] hover:bg-[#a16d4c] text-white rounded-lg">
              Subscribe
            </Button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function Stat({
  value,
  label,
  icon,
  suffix = "",
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full bg-[#f0e0d8] rounded-2xl p-6 shadow-md"
    >
      <div className="text-[#8b5e3c] mb-2">{icon}</div>
      <p className="text-3xl font-bold text-[#8b5e3c]">
        <CountUp end={value} duration={1.5} />
        {suffix}
      </p>
      <p className="text-[#5a4634] text-sm mt-1">{label}</p>
    </motion.div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        backgroundColor: "#e3d6ca",
      }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center p-6 bg-[#f0e0d8] rounded-2xl shadow-md transition w-full"
    >
      <div className="mb-3 text-[#8b5e3c]">{icon}</div>
      <h3 className="font-semibold text-[#4a3f35]">{title}</h3>
      <p className="text-[#5a4634] text-sm mt-1">{description}</p>
    </motion.div>
  );
}

function Testimonial({ name, review }: { name: string; review: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#f0e0d8] p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
    >
      <Star className="text-[#8b5e3c] mb-2" />
      <p className="text-[#5a4634] mb-4">{`"${review}"`}</p>
      <p className="font-semibold text-[#4a3f35]">{name}</p>
    </motion.div>
  );
}
