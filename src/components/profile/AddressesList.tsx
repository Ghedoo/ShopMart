"use client";

import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { Address } from "@/hooks/useAddresses";

export default function AddressesList({
  addresses,
  addAddress,
  removeAddress,
  setDefault,
  updateAddress,
}: {
  addresses: Address[];
  addAddress: any;
  removeAddress: (id: string) => void;
  setDefault: (id: string) => void;
  updateAddress: (id: string, data: Omit<Address, "_id">) => void;
}) {
  return (
    <div className="space-y-6">
      <AddressForm onAdd={addAddress} />

      <div className="grid md:grid-cols-2 gap-4">
        {addresses.map(addr => (
          <AddressCard
            key={addr._id}
            address={addr}
            onDelete={removeAddress}
            onSetDefault={setDefault}
            onUpdate={updateAddress}
          />
        ))}
      </div>
    </div>
  );
}
