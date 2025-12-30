"use client";

import { HeartIcon } from "lucide-react";
import { useWishlist } from "@/components/WishlistContext/WishlistContext";
import { Button } from "../ui/button";

export default function WishlistButton({
  productId,
}: {
  productId: string;
}) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const active = isInWishlist(productId);

  return (
    <Button
      onClick={() => toggleWishlist(productId)}
      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow"
    >
      <HeartIcon
        className={
          active
            ? "text-red-500 fill-red-500"
            : "text-gray-400"
        }
      />
    </Button>
  );
}
