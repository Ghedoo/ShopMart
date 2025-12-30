"use client";

export default function CartSkeleton() {
  return (
    <div className="container animate-pulse">
      <div className="h-8 w-48 bg-muted rounded mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* items */}
        <div className="lg:col-span-2 space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4 p-4 border rounded-xl">
              <div className="size-[100px] bg-muted rounded-lg" />
              <div className="flex-1 space-y-3">
                <div className="h-4 w-2/3 bg-muted rounded" />
                <div className="h-3 w-1/3 bg-muted rounded" />
                <div className="h-3 w-1/4 bg-muted rounded" />
                <div className="flex gap-2 mt-4">
                  <div className="h-8 w-8 bg-muted rounded" />
                  <div className="h-8 w-8 bg-muted rounded" />
                  <div className="h-8 w-8 bg-muted rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* summary */}
        <div className="border rounded-xl p-5 space-y-3">
          <div className="h-5 w-32 bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-4 w-full bg-muted rounded" />
          <div className="h-6 w-full bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}
