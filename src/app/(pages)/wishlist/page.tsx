"use client";

import { useWishlist } from "@/components/WishlistContext/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

/* ---------- Skeleton Loader ---------- */
function SkeletonCard() {
  return (
    <div className="border rounded-3xl p-4 flex flex-col items-center shadow-md animate-pulse bg-[#f5e9de]">
      <div className="w-full h-48 mb-4 bg-[#e0d5ca] rounded-2xl" />
      <div className="w-3/4 h-6 mb-2 bg-[#e0d5ca] rounded" />
      <div className="w-1/2 h-5 mb-4 bg-[#e0d5ca] rounded" />
      <div className="w-full h-10 bg-[#d9c7b7] rounded-xl" />
    </div>
  );
}

export default function WishlistPage() {
  const { wishlist, loading, toggleWishlist } = useWishlist();
  const [firstLoad, setFirstLoad] = useState(true);

  // إزالة الـ Skeleton بعد أول تحميل
  useEffect(() => {
    if (!loading) {
      const id = setTimeout(() => setFirstLoad(false), 0);
      return () => clearTimeout(id);
    }
  }, [loading]);

  // Skeleton Loader أولي
  if (firstLoad)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  // إذا الـ Wishlist فارغة
  if (!wishlist.length)
    return (
      <div className="text-center py-20">
        <p className="text-2xl font-bold text-[#8b5e3c]">
          Your wishlist is empty ❤️
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-8 py-3 bg-[#8b5e3c] hover:bg-[#a16d4c] text-white rounded-xl shadow-lg transition"
        >
          Shop Now
        </Link>
      </div>
    );

  // المحتوى الحقيقي
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#8b5e3c]">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.map((product) => (
          <motion.div
            key={product._id}
            whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
            className="border rounded-3xl p-4 flex flex-col items-center shadow-md bg-[#f5e9de] relative overflow-hidden transition"
          >
            <div className="relative w-full h-52 mb-4 group">
              <Image
                src={product.imageCover || "/placeholder.png"}
                alt={product.title || "product"}
                fill
                className="object-cover rounded-2xl"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />

              <button
                onClick={() => {
                  toggleWishlist(product._id);
                  toast.success("Removed from wishlist!");
                }}
                className="absolute top-3 right-3 bg-white/90 hover:bg-red-500 text-red-500 hover:text-white rounded-full p-2 shadow-md transition duration-300 opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={20} />
              </button>

              <div className="absolute bottom-3 left-3 bg-[#8b5e3c]/80 text-white rounded-full p-1">
                <Heart size={16} />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-center text-[#4a3f35] mb-1">
              {product.title}
            </h2>
            <p className="text-[#5a4634] font-medium mb-4">
              ${product.price || "0.00"}
            </p>

            <Link
              href={`/product/${product._id}`}
              className="w-full text-center py-2 bg-[#8b5e3c] hover:bg-[#a16d4c] text-white rounded-xl shadow-md transition font-medium"
            >
              View Product
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
