"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => (
        <motion.div
            ref={ref}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    y: 0,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    },
                },
                hover: {
                    y: -12,
                    scale: 1.01,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    },
                },
            }}
            className={cn(
                "rounded-[2rem] bg-white text-[var(--color-foreground)] border border-gray-100 overflow-hidden",
                "shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]",
                "transition-shadow duration-300 ease-out",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-xl font-bold leading-none tracking-tight text-[var(--color-accent)]",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardContent };
