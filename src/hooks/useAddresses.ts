"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export interface Address {
  _id: string;
  name: string;
  city: string;
  phone: string;
  details: string;
  isDefault?: boolean;
}

const API = "https://ecommerce.routemisr.com/api/v1/addresses";

export function useAddresses() {
  const { data: session, status } = useSession();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAddresses = async () => {
    if (!session?.token) return;
    setLoading(true);
    try {
      const res = await fetch(API, {
        headers: { Authorization: `Bearer ${session.token}` },
      });
      const data = await res.json();
      setAddresses(data.data || []);
    } catch {
      toast.error("Failed to load addresses");
    } finally {
      setLoading(false);
    }
  };

  const addAddress = async (address: Omit<Address, "_id">) => {
    if (!session?.token) return;
    try {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(address),
      });
      toast.success("Address added");
      fetchAddresses();
    } catch {
      toast.error("Failed to add address");
    }
  };

  const updateAddress = async (id: string, address: Omit<Address, "_id">) => {
    if (!session?.token) return;
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify(address),
      });
      toast.success("Address updated");
      fetchAddresses();
    } catch {
      toast.error("Failed to update address");
    }
  };

  const removeAddress = async (id: string) => {
    if (!session?.token) return;
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${session.token}` },
      });
      setAddresses(prev => prev.filter(a => a._id !== id));
      toast.success("Address deleted");
    } catch {
      toast.error("Failed to delete address");
    }
  };

  const setDefault = async (id: string) => {
    if (!session?.token) return;
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({ isDefault: true }),
      });
      toast.success("Default address updated");
      fetchAddresses();
    } catch {
      toast.error("Failed to set default address");
    }
  };

  useEffect(() => {
    if (status !== "loading") fetchAddresses();
  }, [status, session]);

  const defaultAddress = addresses.find(a => a.isDefault) || null;

  return {
    addresses,
    defaultAddress,
    loading,
    addAddress,
    updateAddress,
    removeAddress,
    setDefault,
  };
}
