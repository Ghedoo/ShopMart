"use client";

import { useSession } from "next-auth/react";
import { User, Mail, ShieldCheck } from "lucide-react";

export default function UserInfo() {
  const { data: session } = useSession();
  if (!session) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-lg max-w-sm mx-auto border border-indigo-100">
      <h3 className="text-xl font-bold mb-4 text-indigo-700 text-center">My Profile</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <User className="text-indigo-500 w-5 h-5" />
          <span className="font-medium text-gray-700">Name:</span>
          <span className="text-gray-900">{session.user.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-500 w-5 h-5" />
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-900">{session.user.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-indigo-500 w-5 h-5" />
          <span className="font-medium text-gray-700">Role:</span>
          <span className="text-gray-900 capitalize">{session.user.role}</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
        Edit Profile
      </button>
    </div>
  );
}
