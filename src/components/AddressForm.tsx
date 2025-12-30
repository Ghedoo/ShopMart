"use client";

interface Props {
  newAddress: { name: string; details: string; phone: string; city: string };
  setNewAddress: React.Dispatch<
    React.SetStateAction<{ name: string; details: string; phone: string; city: string }>
  >;
  onAdd: () => void;
}

export default function AddressForm({ newAddress, setNewAddress, onAdd }: Props) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-white shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          value={newAddress.name}
          onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
        />
        <input
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Details"
          value={newAddress.details}
          onChange={(e) => setNewAddress({ ...newAddress, details: e.target.value })}
        />
        <input
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Phone"
          value={newAddress.phone}
          onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
        />
        <input
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="City"
          value={newAddress.city}
          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
        />
      </div>
      <button
        onClick={onAdd}
        className="mt-4 w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Add Address
      </button>
    </div>
  );
}
