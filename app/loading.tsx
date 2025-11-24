import { Skeleton } from "@/components/ui/Skeleton";

import { RestaurantCardSkeleton } from "@/components/ui/RestaurantCardSkeleton";

export default function Loading() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Skeleton */}
            <section className="relative h-[85vh] min-h-[600px] bg-gray-200 animate-shimmer" />

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-16">
                {/* Header Skeleton */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="h-9 w-64 bg-gray-200 rounded-lg animate-shimmer" />
                    <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-shimmer" />
                        ))}
                    </div>
                </div>

                {/* Restaurant Grid Skeletons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <RestaurantCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
