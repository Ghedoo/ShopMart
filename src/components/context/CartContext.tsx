"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { cartResponse } from "@/interfaces/cart";
import { getCartAction } from "@/app/(pages)/cart/_actions/cart.actions";

type CartContextType = {
  cartData: cartResponse | null;
  isLoading: boolean;
  getCart: () => Promise<void>;
};

export const CartContext = createContext<CartContextType>({
  cartData: null,
  isLoading: false,
  getCart: async () => {},
});

export function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartData, setCartData] = useState<cartResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getCart() {
    setIsLoading(true);
    try {
      const data = await getCartAction();

      if (!data?.data?.products) {
        setCartData(null);
      } else {
        setCartData(data);
      }
    } catch {
      setCartData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartData,
        isLoading,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
