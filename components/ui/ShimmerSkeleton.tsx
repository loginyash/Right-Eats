"use client";

import { cn } from "@/lib/utils";

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to show the shimmer animation
     */
    shimmer?: boolean;
}

/**
 * Enhanced skeleton loader with shimmer effect for premium loading states
 */
function ShimmerSkeleton({
    className,
    shimmer = true,
    ...props
}: ShimmerSkeletonProps) {
    return (
        <div
            className={cn(
                "rounded-md bg-gray-200/50",
                shimmer && "animate-shimmer",
                className
            )}
            {...props}
        />
    );
}

export { ShimmerSkeleton };
