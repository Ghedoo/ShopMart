"use client";

import { useState } from "react";
import { Address } from "@/hooks/useAddresses";

export default function AddressForm({
  onAdd,
}: {
  onAdd: (a: Omit<Address, "_id">) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    details: "",
    phone: "",
    city: "",
  });

  const submit = () => {
    if (Object.values(form).some(v => !v)) return;
    onAdd(form);
    setForm({ name: "", details: "", phone: "", city: "" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 max-w-3xl mx-auto mt-6">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">Add Address</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {Object.keys(form).map(key => (
          <input
            key={key}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={form[key as keyof typeof form]}
            onChange={e =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}
      </div>

      <button
        onClick={submit}
        className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors font-medium"
      >
        Save Address
      </button>
    </div>
  );
}
