"use client";

import { useState } from "react";
import { Address } from "@/hooks/useAddresses";

export default function EditAddressModal({
  address,
  onClose,
  onSave,
}: {
  address: Address;
  onClose: () => void;
  onSave: (id: string, data: Omit<Address, "_id">) => void;
}) {
  const [form, setForm] = useState({
    name: address.name,
    details: address.details,
    phone: address.phone,
    city: address.city,
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h3 className="font-semibold mb-4">Edit Address</h3>

        <div className="grid gap-3">
          {Object.keys(form).map(key => (
            <input
              key={key}
              className="border p-2 rounded"
              value={form[key as keyof typeof form]}
              onChange={e =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => onSave(address._id, form)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
