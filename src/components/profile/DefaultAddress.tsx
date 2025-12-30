"use client";

import { Address } from "@/hooks/useAddresses";

export default function DefaultAddress({
  address,
}: { address: Address | null }) {
  if (!address)
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        No default address
      </div>
    );

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Default Address</h3>
      <p><b>{address.name}</b></p>
      <p>{address.details}</p>
      <p>{address.city}</p>
      <p>{address.phone}</p>
    </div>
  );
}
