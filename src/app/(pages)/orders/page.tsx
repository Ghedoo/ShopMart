'use client'
import React, { useEffect, useState } from 'react'

interface Product {
  title: string
  imageCover: string
  price: number
}

interface CartItem {
  count: number
  product: Product
  price: number
  _id: string
}

interface Order {
  _id: string
  shippingAddress?: {
    details?: string
    city?: string
    phone?: string
  }
  totalOrderPrice?: number
  paymentMethodType?: string
  isPaid?: boolean
  isDelivered?: boolean
  createdAt?: string
  user?: {
    _id: string
    name?: string
    email?: string
  }
  cartItems?: CartItem[]
}

interface OrdersProps {
  userToken: string
  userId: string
}

export default function Orders({ userToken, userId }: OrdersProps) {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17${userId}`, {
          method: 'GET',
          headers: {
            token: userToken,
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json()
        console.log('User Orders API response:', data)

        if (Array.isArray(data)) {
        
          const userOrders = data.filter(order => order.user?._id === userId)
          setOrders(userOrders)
        } else {
          setOrders([])
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [userToken, userId])

  if (loading) return <div>Loading orders...</div>
  if (!orders || orders.length === 0) return <div>No orders found for this user</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <ul className="space-y-6">
        {orders.map((order) => (
          <li key={order._id} className="border p-4 rounded shadow">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Payment:</strong> {order.paymentMethodType ?? 'N/A'}</p>
            <p><strong>Paid:</strong> {order.isPaid ? 'Yes' : 'No'}</p>
            <p><strong>Delivered:</strong> {order.isDelivered ? 'Yes' : 'No'}</p>
            <p><strong>Total:</strong> {order.totalOrderPrice ?? 'N/A'}</p>
            <p>
              <strong>Shipping:</strong> {order.shippingAddress?.details ?? 'N/A'}, {order.shippingAddress?.city ?? 'N/A'}, {order.shippingAddress?.phone ?? 'N/A'}
            </p>
            <p><strong>Created At:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}</p>
            <div className="mt-2">
              <strong>Products:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                {order.cartItems?.map((item) => (
                  <li key={item._id} className="flex items-center space-x-2">
                    <img src={item.product.imageCover} alt={item.product.title} className="w-12 h-12 object-cover rounded" />
                    <span>{item.product.title} x {item.count} - ${item.price}</span>
                  </li>
                )) ?? <li>No products</li>}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
