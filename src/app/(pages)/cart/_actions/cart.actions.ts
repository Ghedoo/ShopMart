"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { cartResponse } from "@/interfaces/cart";

const API = "https://ecommerce.routemisr.com/api/v1/cart";

// 🔹 جلب التوكن من السيشن
async function getToken(): Promise<string> {
  const session = await getServerSession(authOptions);
  if (!session?.token) throw new Error("Unauthorized");
  return session.token;
}

// 🔹 جلب السلة
export async function getCartAction(): Promise<cartResponse> {
  const token = await getToken();
  const res = await fetch(API, {
    headers: { token },
    cache: "no-store",
  });
  return res.json();
}

// 🔹 إضافة منتج للسلة ✅ (هذا كان ناقص)
export async function addToCartAction(
  productId: string
): Promise<cartResponse> {
  const token = await getToken();

  const res = await fetch(API, {
    method: "POST",
    headers: {
      token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  if (!res.ok) {
    throw new Error("Failed to add product");
  }

  return res.json();
}

// 🔹 تعديل كمية منتج
export async function updateCartItemAction(
  productId: string,
  count: number
): Promise<cartResponse> {
  const token = await getToken();

  const res = await fetch(`${API}/${productId}`, {
    method: "PUT",
    headers: {
      token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ count }),
  });

  return res.json();
}

// 🔹 حذف منتج
export async function removeCartItemAction(
  productId: string
): Promise<cartResponse> {
  const token = await getToken();

  const res = await fetch(`${API}/${productId}`, {
    method: "DELETE",
    headers: { token },
  });

  return res.json();
}

// 🔹 تفريغ السلة
export async function clearCartAction(): Promise<cartResponse> {
  const token = await getToken();

  const res = await fetch(API, {
    method: "DELETE",
    headers: { token },
  });

  return res.json();
}
