import { ProductI } from "@/interfaces";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import WishlistButton from "@/components/wishlist/WishlistButton";
import Image from "next/image";
import Stars from "@/components/stars/stars";
import Link from "next/link";
import AddToCart from "@/components/addToCart/addToCart";

export default async function Products() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products"
  );

  const { data: products }: { data: ProductI[] } = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Card
          key={product._id}
          className="relative group rounded-3xl shadow-lg overflow-hidden bg-gradient-to-br from-[#e6d6c8] to-[#d9c7b7] transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Wishlist Button */}
          <div className="absolute top-3 right-3 z-20">
            <WishlistButton productId={product._id} />
          </div>

          <Link href={"/products/" + product._id}>
            <CardHeader className="p-0">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageCover || "/placeholder.png"}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-full"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
              </div>
            </CardHeader>
          </Link>

          <CardContent className="px-4 py-3">
            <CardDescription className="text-sm text-gray-700">
              {product.brand.name}
            </CardDescription>
            <CardTitle className="text-lg font-semibold text-[#4a3f35]">
              {product.title.split(" ", 3).join(" ")}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500 mb-2">
              {product.category.name}
            </CardDescription>

            <div className="flex items-center gap-2 mb-2">
              <Stars /><Stars /><Stars /><Stars />
              <p className="text-sm text-gray-600">({product.ratingsAverage})</p>
            </div>

            <p className="font-bold text-[#5a4634]">{product.price} EGP</p>
          </CardContent>

          <CardFooter className="px-4 py-3 border-t border-gray-300 bg-[#e6d6c8]/30">
            <AddToCart productId={product._id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
