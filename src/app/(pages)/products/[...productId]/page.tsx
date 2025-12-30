import { ProductI } from "@/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductSlider from "@/components/productSlider/productSlider";
import Stars from "@/components/stars/stars";
import AddToCart from "@/components/addToCart/addToCart";

type Props = {
  params: Promise<{
    productId: string[];
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  const id = productId[0];

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Product not found
      </div>
    );
  }

  const { data: product }: { data: ProductI | null } = await response.json();

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <Card className="grid md:grid-cols-2 gap-6 max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        
        {/* Left: Product Images */}
        <div className="p-3 md:p-4 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
          <div className="transition-transform duration-300 hover:scale-105 w-full">
            <ProductSlider
              images={product.images}
              altContent={product.title}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="p-4 md:p-5 flex flex-col justify-between">
          <div>
            <CardHeader className="mb-3">
              <CardDescription className="text-gray-500 uppercase tracking-wide">
                {product.brand.name}
              </CardDescription>

              <CardTitle className="text-xl md:text-2xl font-bold">
                {product.title}
              </CardTitle>

              <CardDescription className="mt-1 text-gray-600">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <CardDescription className="text-sm text-gray-500">
                {product.category.name}
              </CardDescription>

              {/* Ratings */}
              <div className="flex items-center gap-1">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <span className="ml-2 text-gray-600 font-medium">
                  ({product.ratingsAverage})
                </span>
              </div>

              {/* Price & Quantity */}
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-bold text-green-600">
                  {product.price} EGP
                </p>
                <p className="text-gray-700 font-medium">
                  In Stock: {product.quantity}
                </p>
              </div>
            </CardContent>
          </div>

          {/* Add to Cart */}
          <div className="mt-5">
            <AddToCart
              productId={product._id}
          
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
