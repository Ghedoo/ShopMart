// src/app/(pages)/brands/page.tsx
import Image from "next/image";
import Link from "next/link";

type Brand = {
  _id: string;
  name: string;
  image: string;
};

export default async function BrandsPage() {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/brands",
    { cache: "no-store" }
  );

  const { data: brands }: { data: Brand[] } = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#f2ede8] to-[#ece5de]">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#4a3f35]">
          Brands
        </h1>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand._id}
              href={`/brands/${brand._id}`}
              className="group rounded-2xl bg-white/80 backdrop-blur
                         border border-gray-200
                         p-5 flex flex-col items-center justify-center
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Brand Image */}
              <div className="relative w-full h-24 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Brand Name */}
              <p className="mt-4 text-sm font-semibold text-gray-700 text-center tracking-wide">
                {brand.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
