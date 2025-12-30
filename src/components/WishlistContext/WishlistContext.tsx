"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type WishlistProduct = {
  _id: string;
  title?: string;
  imageCover?: string;
  price?: number;
};

type WishlistContextType = {
  wishlist: WishlistProduct[];
  loading: boolean;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (id: string) => Promise<void>;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const token = session?.token;

  useEffect(() => {
    if (status === "loading") return;

    if (!token) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    async function fetchWishlist() {
      try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("token", token!);

        const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", { headers });

        if (!res.ok) throw new Error("Failed to fetch wishlist");

        const data = await res.json();
        setWishlist(data.data || []);
      } catch (error) {
        toast.error("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    }

    fetchWishlist();
  }, [token, status]);

  function isInWishlist(id: string) {
    return wishlist.some((item) => item._id === id);
  }

  async function toggleWishlist(productId: string) {
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const exists = isInWishlist(productId);

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("token", token);

      const url = exists
        ? `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`
        : "https://ecommerce.routemisr.com/api/v1/wishlist";

      const res = await fetch(url, {
        method: exists ? "DELETE" : "POST",
        headers,
        body: exists ? undefined : JSON.stringify({ productId }),
      });

      if (!res.ok) throw new Error("Wishlist error");

      setWishlist((prev) =>
        exists
          ? prev.filter((p) => p._id !== productId)
          : [...prev, { _id: productId }]
      );

      toast.success(exists ? "Removed from wishlist" : "Added to wishlist ❤️");
    } catch {
      toast.error("Wishlist error");
    }
  }

  return (
    <WishlistContext.Provider
      value={{ wishlist, loading, isInWishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}
