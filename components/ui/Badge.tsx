"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80",
                secondary:
                    "border-transparent bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/80",
                outline: "text-[var(--color-foreground)]",
                glass: "glass border-white/20 text-[var(--color-foreground)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof badgeVariants> {
    /**
     * Whether to show pulse animation
     */
    pulse?: boolean;
    children?: React.ReactNode;
}

function Badge({ className, variant, pulse = false, ...props }: BadgeProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className={cn(
                badgeVariants({ variant }),
                pulse && "animate-pulse-subtle",
                className
            )}
            {...props}
        />
    );
}

export { Badge, badgeVariants };
