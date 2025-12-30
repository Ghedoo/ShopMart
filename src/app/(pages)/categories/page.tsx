"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonLoading from "@/app/(pages)/categories/SkeletonLoading";
import Image from "next/image";

type Category = {
  _id: string;
  name: string;
  description?: string;
  image?: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/categories"
        );
        const data = await res.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#f2ede8] to-[#ece5de]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4a3f35]">
          Categories
        </h1>

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonLoading key={i} />
            ))}
          </div>
        )}

        {/* Categories */}
        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/categories/${category._id}`}
                className="group rounded-2xl bg-white/80 backdrop-blur
                           border border-gray-200
                           p-5 flex flex-col
                           transition-all duration-500
                           opacity-0 animate-fadeIn
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                {category.image && (
                  <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {category.name}
                </h2>

                {/* Description */}
                {category.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                    {category.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
