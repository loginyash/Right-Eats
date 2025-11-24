"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";

interface ScrollAnimationWrapperProps extends Omit<HTMLMotionProps<"div">, "variants"> {
    children: React.ReactNode;
    /**
     * Animation variant to use
     */
    variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
    /**
     * Delay before animation starts (in seconds)
     */
    delay?: number;
    /**
     * Whether to animate only once
     */
    once?: boolean;
    /**
     * Custom className
     */
    className?: string;
}

const variants: Record<string, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    },
    slideUp: {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    },
    slideRight: {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        },
    },
};

/**
 * Reusable wrapper component for scroll-triggered animations
 */
export function ScrollAnimationWrapper({
    children,
    variant = "slideUp",
    delay = 0,
    once = true,
    className,
    ...props
}: ScrollAnimationWrapperProps) {
    const selectedVariant = variants[variant];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            variants={selectedVariant}
            transition={{ delay }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
