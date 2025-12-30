"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Order {
  _id: string;
  totalOrderPrice: number;
  isPaid: boolean;
}

export default function OrdersHistory() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${session.user.email}`,
      {
        headers: { Authorization: `Bearer ${session.user.email}` },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .finally(() => setLoading(false));
  }, [session]);

  if (loading) return <p>Loading orders...</p>;
  if (!orders.length) return <p>No orders</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Orders</h3>
      {orders.map((o) => (
        <div key={o._id} className="flex justify-between border-b py-2">
          <span>#{o._id.slice(-6)}</span>
          <span>${o.totalOrderPrice}</span>
          <span>{o.isPaid ? "Paid" : "Pending"}</span>
        </div>
      ))}
    </div>
  );
}
