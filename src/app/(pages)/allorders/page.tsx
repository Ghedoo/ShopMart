'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

interface Order {
  _id: string
  status: string
  totalPrice: number
  createdAt: string
}

export default function AllOrdersPage() {
  const { data: session, status } = useSession()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchOrders() {
      if (status !== 'authenticated' || !session?.token || !session?.user?._id) {
        setError('You must be logged in')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(
          `https://ecommerce.routemisr.com/api/v1/orders/user/${session.user._id}`,
          {
            headers: { token: session.token },
          }
        )
        const data = await response.json()
        if (data.status === 'success') setOrders(data.orders)
        else setError('Failed to fetch orders')
      } catch {
        setError('Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [session, status])

  if (loading) return <p className="text-center mt-10">Loading orders...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>
  if (orders.length === 0) return <p className="text-center mt-10">No orders found</p>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="grid gap-4">
        {orders.map(order => (
          <div
            key={order._id}
            className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <p><span className="font-semibold">Order ID:</span> {order._id}</p>
              <p><span className="font-semibold">Total Price:</span> ${order.totalPrice}</p>
              <p><span className="font-semibold">Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full font-semibold ${
                order.status === 'completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
