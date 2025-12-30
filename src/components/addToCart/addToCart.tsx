"use client";

import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Loader2, ShoppingCartIcon } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../context/CartContext";
import { addToCartAction } from "@/app/(pages)/products/_action/addTocart.action";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddToCart({ productId }: { productId: string }) {
  const { getCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  async function addProductToCart() {
    if (session.status !== "authenticated") {
      router.push("/login");
      return;
    }

    setIsLoading(true);
    try {
      await addToCartAction(productId);
      await getCart();
      toast.success("Product added to cart successfully");
    } catch (err: unknown) {
      toast.error("Failed to add product");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CardFooter className="gap-2 flex w-full p-0">
      <Button
        onClick={addProductToCart}
        className="grow flex justify-center items-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <ShoppingCartIcon />
        )}
        Add to cart
      </Button>
    </CardFooter>
  );
}
