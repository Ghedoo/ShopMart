import { Truck, Clock, Globe, Package, Mail } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
          Shipping Policy
        </h1>
        <p className="text-gray-500 mt-2">Last updated: 9/20/2025</p>
      </div>

      <div className="space-y-8">
        {/* Shipping Methods */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Truck className="text-blue-600" />
            <h2 className="text-xl font-semibold">Shipping Methods</h2>
          </div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Standard Shipping: 3–5 business days</li>
            <li>Express Shipping: 1–2 business days</li>
            <li>International Shipping: Times and costs vary</li>
          </ul>
        </section>

        {/* Shipping Costs */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-blue-600" />
            <h2 className="text-xl font-semibold">Shipping Costs</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Shipping costs are calculated based on order weight and total price.
            Free shipping is available for orders over $50.
          </p>
        </section>

        {/* Order Processing */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-blue-600" />
            <h2 className="text-xl font-semibold">Order Processing</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Orders are processed within 1–2 business days. Weekends and holidays
            may delay processing.
          </p>
        </section>

        {/* Tracking Orders */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="text-blue-600" />
            <h2 className="text-xl font-semibold">Tracking Orders</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A tracking number is provided via email once your order has shipped.
            You can also track your order on the <a href="/track-order" className="text-blue-600 hover:underline">Track Your Order</a> page.
          </p>
        </section>

        {/* Shipping Restrictions */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">Shipping Restrictions</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Some products may not be available for international shipping.</li>
            <li>Restricted items include hazardous materials and oversized items.</li>
          </ul>
        </section>

        {/* Lost or Damaged Items */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">Lost or Damaged Items</h2>
          <p className="text-gray-600 leading-relaxed">
            If your package is lost or damaged during shipping, please contact our support team immediately at <a href="mailto:shipping@shopmart.com" className="text-blue-600 hover:underline">shipping@shopmart.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
