"use client";

import React from "react";

export default function SkeletonLoading() {
  return (
    <div className="animate-pulse rounded-2xl bg-white/60 backdrop-blur border border-gray-200 p-5 flex flex-col space-y-4">
      {/* Image placeholder */}
      <div className="w-full h-36 bg-gray-300 rounded-xl dark:bg-gray-700"></div>

      {/* Title placeholder */}
      <div className="h-5 w-3/4 bg-gray-300 rounded dark:bg-gray-600"></div>

      {/* Description placeholder */}
      <div className="h-4 w-full bg-gray-300 rounded dark:bg-gray-600"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded dark:bg-gray-600"></div>
    </div>
  );
}
