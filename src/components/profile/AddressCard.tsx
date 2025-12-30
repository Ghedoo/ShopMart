"use client";

import { useState } from "react";
import { Address } from "@/hooks/useAddresses";
import EditAddressModal from "./EditAddressModal";

export default function AddressCard({
  address,
  onDelete,
  onSetDefault,
  onUpdate,
}: {
  address: Address;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
  onUpdate: (id: string, data: Omit<Address, "_id">) => void;
}) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <div className="border p-4 rounded-xl bg-white shadow">
        <h3 className="font-semibold">{address.name}</h3>
        <p>{address.details}</p>
        <p>{address.city}</p>
        <p>{address.phone}</p>

        <div className="flex gap-3 mt-3 flex-wrap">
          {!address.isDefault && (
            <button
              onClick={() => onSetDefault(address._id)}
              className="text-blue-600 text-sm"
            >
              Set Default
            </button>
          )}

          <button
            onClick={() => setEditOpen(true)}
            className="text-gray-700 text-sm"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(address._id)}
            className="text-red-600 text-sm"
          >
            Delete
          </button>

          {address.isDefault && (
            <span className="text-green-600 text-sm font-semibold">
              Default
            </span>
          )}
        </div>
      </div>

      {editOpen && (
        <EditAddressModal
          address={address}
          onClose={() => setEditOpen(false)}
          onSave={(id, data) => {
            onUpdate(id, data);
            setEditOpen(false);
          }}
        />
      )}
    </>
  );
}
