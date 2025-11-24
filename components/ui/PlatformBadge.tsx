"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlatformBadgeProps {
    platform: "swiggy" | "zomato" | "direct";
    size?: "sm" | "md" | "lg";
    className?: string;
    pulse?: boolean;
}

const platformConfig = {
    swiggy: {
        name: "Swiggy",
        color: "bg-orange-500",
        textColor: "text-white",
        icon: "🛵",
    },
    zomato: {
        name: "Zomato",
        color: "bg-red-500",
        textColor: "text-white",
        icon: "🍽️",
    },
    direct: {
        name: "Direct",
        color: "bg-[var(--color-primary)]",
        textColor: "text-white",
        icon: "📞",
    },
};

const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
};

export function PlatformBadge({ platform, size = "md", className, pulse = false }: PlatformBadgeProps) {
    const config = platformConfig[platform];

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full font-medium shadow-sm",
                config.color,
                config.textColor,
                sizeClasses[size],
                pulse && "animate-pulse-subtle",
                className
            )}
        >
            <span>{config.icon}</span>
            <span>{config.name}</span>
        </motion.div>
    );
}
