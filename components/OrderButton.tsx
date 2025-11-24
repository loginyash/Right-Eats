"use client";

import { motion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
    platform: "swiggy" | "zomato" | "direct";
    url?: string;
    restaurantName?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline";
}

const platformConfig = {
    swiggy: {
        name: "Order on Swiggy",
        color: "bg-orange-500 hover:bg-orange-600",
        outlineColor: "border-orange-500 text-orange-600 hover:bg-orange-50",
        icon: ExternalLink,
    },
    zomato: {
        name: "Order on Zomato",
        color: "bg-red-500 hover:bg-red-600",
        outlineColor: "border-red-500 text-red-600 hover:bg-red-50",
        icon: ExternalLink,
    },
    direct: {
        name: "Call to Order",
        color: "bg-[var(--color-primary)] hover:bg-[var(--color-accent)]",
        outlineColor: "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-orange-50",
        icon: Phone,
    },
};

const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

export function OrderButton({
    platform,
    url,
    restaurantName,
    className,
    size = "md",
    variant = "solid",
}: OrderButtonProps) {
    const config = platformConfig[platform];
    const Icon = config.icon;

    const handleClick = () => {
        if (platform === "direct") {
            // For direct ordering, could show phone number or booking modal
            alert(`Call restaurant to order: ${restaurantName || "Restaurant"}`);
        } else if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg",
                variant === "solid" ? cn("text-white", config.color) : cn("border-2 bg-white", config.outlineColor),
                sizeClasses[size],
                !url && platform !== "direct" && "opacity-50 cursor-not-allowed",
                className
            )}
            disabled={!url && platform !== "direct"}
        >
            <Icon className="w-4 h-4" />
            <span>{config.name}</span>
        </motion.button>
    );
}
