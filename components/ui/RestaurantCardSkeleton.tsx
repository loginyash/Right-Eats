"use client";

import { ShimmerSkeleton } from "./ShimmerSkeleton";

/**
 * Skeleton loader specifically for restaurant cards with shimmer animations
 */
export function RestaurantCardSkeleton() {
    return (
        <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Image skeleton */}
            <ShimmerSkeleton className="h-72 w-full rounded-none" />

            {/* Content skeleton */}
            <div className="pt-8 px-6 space-y-4">
                <div className="flex justify-between items-start">
                    <ShimmerSkeleton className="h-8 w-2/3" />
                    <ShimmerSkeleton className="h-6 w-12" />
                </div>
                <ShimmerSkeleton className="h-4 w-full" />
                <ShimmerSkeleton className="h-4 w-5/6" />
                <ShimmerSkeleton className="h-4 w-1/2" />
            </div>

            {/* Footer skeleton */}
            <div className="border-t border-gray-50 p-6 flex justify-between items-center mt-6">
                <ShimmerSkeleton className="h-4 w-24" />
                <ShimmerSkeleton className="h-8 w-8 rounded-full" />
            </div>
        </div>
    );
}
