// src/app/(pages)/brands/loading.tsx
import { Card } from "@/components/ui/card";

export default function LoadingBrands() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#f2ede8] to-[#ece5de]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              className="rounded-2xl p-5 bg-white/70 backdrop-blur shadow animate-pulse"
            >
              <div className="h-24 bg-gray-300 rounded mb-4" />
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
