import { RotateCcw, CreditCard, Package, Mail } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
          Refund Policy
        </h1>
        <p className="text-gray-500 mt-2">Last updated: 9/20/2025</p>
      </div>

      <div className="space-y-8">
        {/* Refund Window */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <RotateCcw className="text-blue-600" />
            <h2 className="text-xl font-semibold">Refund Window</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            You have 30 days from the date of delivery to request a refund or exchange for most items. Items must be in original condition with all tags attached.
          </p>
        </section>

        {/* How to Request a Refund */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <CreditCard className="text-blue-600" />
            <h2 className="text-xl font-semibold">How to Request a Refund</h2>
          </div>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Contact us at <a href="mailto:returns@shopmart.com" className="text-blue-600 hover:underline">returns@shopmart.com</a> with your order number.</li>
            <li>We will send you a prepaid return shipping label if applicable.</li>
            <li>Package your items and ship them back using the label or approved method.</li>
            <li>Once received, your refund will be processed within 5–7 business days.</li>
          </ol>
        </section>

        {/* Refund Conditions */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-blue-600" />
            <h2 className="text-xl font-semibold">Refund Conditions</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Items must be unworn, unwashed, unused, and in their original packaging. Some items may be excluded from refunds (see individual product page for details).
          </p>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 rounded-2xl p-6 text-center">
          <Mail className="mx-auto text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p className="text-blue-900">
            If you have any questions about refunds or exchanges, please reach out to us at <a href="mailto:returns@shopmart.com" className="hover:underline">returns@shopmart.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
