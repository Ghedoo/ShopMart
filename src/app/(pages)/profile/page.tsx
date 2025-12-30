"use client";

import { useSession } from "next-auth/react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UserInfo from "@/components/profile/UserInfo";
import DefaultAddress from "@/components/profile/DefaultAddress";
import AddressesList from "@/components/profile/AddressesList";
import OrdersHistory from "@/components/profile/OrdersHistory";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import { useAddresses } from "@/hooks/useAddresses";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const addresses = useAddresses();

  if (status === "loading") return <ProfileSkeleton />;
  if (!session) return <p className="text-center mt-10">Please login</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-6 space-y-8">
        <ProfileHeader user={session.user} />
        <UserInfo />
        <DefaultAddress address={addresses.defaultAddress} />
        <AddressesList
          addresses={addresses.addresses}
          addAddress={addresses.addAddress}
          removeAddress={addresses.removeAddress}
          setDefault={addresses.setDefault}
          updateAddress={addresses.updateAddress}
        />
        <OrdersHistory />
      </div>
    </div>
  );
}
