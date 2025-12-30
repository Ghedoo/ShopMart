import Image from "next/image";
import Link from "next/link";
import { ProductI } from "@/interfaces";

type Brand = {
  _id: string;
  name: string;
  image: string;
  description?: string;
};

type Props = {
  params: Promise<{
    brandId: string;
  }>;
};

export default async function BrandDetails({ params }: Props) {
  const { brandId } = await params;

  const brandRes = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`,
    { cache: "no-store" }
  );

  if (!brandRes.ok) {
    return (
      <p className="text-center py-12 text-red-500">
        البراند غير موجود
      </p>
    );
  }

  const { data: brand }: { data: Brand } = await brandRes.json();

  const productsRes = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
    { cache: "no-store" }
  );

  if (!productsRes.ok) {
    return (
      <p className="text-center py-12 text-red-500">
        حدث خطأ أثناء جلب المنتجات
      </p>
    );
  }

  const { data: products }: { data: ProductI[] } =
    await productsRes.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#f2ede8] to-[#ece5de]">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/brands" className="hover:underline">Brands</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">{brand.name}</span>
        </div>

        {/* Brand Header (خفيف وشيك) */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-14
                        bg-white/70 backdrop-blur rounded-2xl p-6 shadow">
          {brand.image && (
            <Image
              src={brand.image}
              alt={brand.name}
              width={130}
              height={130}
              className="object-contain"
            />
          )}

          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Brand
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#4a3f35]">
              {brand.name}
            </h1>

            {brand.description && (
              <p className="mt-2 text-gray-600 max-w-xl">
                {brand.description}
              </p>
            )}
          </div>
        </div>

        {/* Products */}
        {products.length === 0 ? (
          <p className="text-center py-20 text-gray-600">
            لا توجد منتجات لهذا البراند
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product._id}`}
                className="group rounded-2xl bg-white/80 backdrop-blur
                           shadow hover:shadow-xl
                           transition-all duration-300
                           hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-sm text-gray-800 line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="mt-2 font-bold text-[#5a4634]">
                    {product.price} EGP
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
