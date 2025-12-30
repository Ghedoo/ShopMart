"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/components/context/CartContext";
import { Loader, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import CheckOut from "@/components/CheckOut/CheckOut";
import CartSkeleton from "@/components/cart/CartSkeleton";
import {
  updateCartItemAction,
  removeCartItemAction,
  clearCartAction,
} from "./_actions/cart.actions";
import { Item } from "@/interfaces/cart";

export default function CartPage() {
  const { cartData, isLoading, getCart } = useContext(CartContext);

  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);

  // 🔹 Loading
  if (isLoading) return <CartSkeleton />;

  // 🔹 Empty Cart
  if (!cartData?.data?.products?.length) {
    return (
      <div className="flex min-h-[75vh] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Your cart is empty 😪</h2>
        <Link href="/products">
          <Button>Shop now</Button>
        </Link>
      </div>
    );
  }

  const productsWithTotal = cartData.data.products.map(item => ({
    ...item,
    totalPrice: item.price * item.count,
  }));

  const subtotal = productsWithTotal.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  const tax = +(subtotal * 0.14).toFixed(2);
  const shipping = 50; // مثال ثابت
  const total = subtotal + tax + shipping;

  // 🔹 Actions
  async function updateItem(productId: string, count: number) {
    setUpdatingId(productId);
    try {
      await updateCartItemAction(productId, count);
      await getCart();
      toast.success("Updated");
    } catch {
      toast.error("Update failed");
    }
    setUpdatingId(null);
  }

  async function removeItem(productId: string) {
    setRemovingId(productId);
    try {
      await removeCartItemAction(productId);
      await getCart();
      toast.success("Removed");
    } catch {
      toast.error("Remove failed");
    }
    setRemovingId(null);
  }

  async function clearCart() {
    setClearing(true);
    try {
      await clearCartAction();
      await getCart();
      toast.success("Cart cleared");
    } catch {
      toast.error("Clear failed");
    }
    setClearing(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 py-10">
      <div className="container">
        <h1 className="text-3xl font-bold mb-1">Shopping Cart</h1>
        <p className="text-gray-500">{cartData.numOfCartItems} items</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* 🛒 Items */}
          <div className="lg:col-span-2 space-y-4">
            {productsWithTotal.map(
              (item: Item & { totalPrice: number }) => {
                const imageSrc =
                  item.product?.imageCover?.trim()
                    ? item.product.imageCover
                    : "/placeholder.png";

                return (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row gap-4 p-4 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <Image
                      src={imageSrc}
                      alt={item.product.title || "Product image"}
                      width={120}
                      height={120}
                      className="rounded-xl object-cover"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">
                          {item.product.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.product.brand?.name}
                        </p>
                      </div>

                      <div className="mt-2 flex justify-between items-center">
                        <p className="font-medium text-gray-700">
                          EGP {item.totalPrice.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            disabled={
                              item.count === 1 ||
                              updatingId === item.product._id
                            }
                            onClick={() =>
                              updateItem(item.product._id, item.count - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition"
                          >
                            -
                          </button>
                          <span className="w-6 text-center">
                            {updatingId === item.product._id ? (
                              <Loader className="animate-spin mx-auto" />
                            ) : (
                              item.count
                            )}
                          </span>
                          <button
                            disabled={updatingId === item.product._id}
                            onClick={() =>
                              updateItem(item.product._id, item.count + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.product._id)}
                          className="text-red-600 text-sm flex items-center gap-1 hover:underline"
                        >
                          {removingId === item.product._id && (
                            <Loader className="animate-spin" />
                          )}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* 💳 Order Summary */}
          <div className="border rounded-2xl p-6 bg-white shadow-sm space-y-4 h-fit">
            <h2 className="font-bold text-xl">Order Summary</h2>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cartData.numOfCartItems} items)</span>
              <span>EGP {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Tax (14%)</span>
              <span>EGP {tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>EGP {shipping.toFixed(2)}</span>
            </div>

            <hr className="my-2 border-gray-200" />

            <div className="flex justify-between font-bold text-lg text-gray-800">
              <span>Total</span>
              <span>EGP {total.toFixed(2)}</span>
            </div>

            <CheckOut cartId={cartData.data._id} />

            <Button
              variant="outline"
              onClick={clearCart}
              disabled={clearing}
              className="w-full text-red-600 flex justify-center gap-2 mt-2 hover:bg-red-50 transition"
            >
              <Trash2 /> Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
