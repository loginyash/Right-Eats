"use client";

import { motion } from "framer-motion";
import { floatingButton } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FloatingActionButtonProps {
    /**
     * Icon component to display
     */
    icon: LucideIcon;
    /**
     * Click handler
     */
    onClick?: () => void;
    /**
     * Optional badge count for notifications
     */
    badgeCount?: number;
    /**
     * Position of the button
     */
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    /**
     * Custom className
     */
    className?: string;
    /**
     * Accessible label
     */
    ariaLabel?: string;
}

const positionClasses = {
    "bottom-right": "bottom-8 right-8",
    "bottom-left": "bottom-8 left-8",
    "top-right": "top-8 right-8",
    "top-left": "top-8 left-8",
};

/**
 * Floating action button with pulse animation and optional notification badge
 */
export function FloatingActionButton({
    icon: Icon,
    onClick,
    badgeCount,
    position = "bottom-right",
    className,
    ariaLabel,
}: FloatingActionButtonProps) {
    return (
        <motion.button
            variants={floatingButton}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            aria-label={ariaLabel}
            className={cn(
                "fixed z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg hover:shadow-xl flex items-center justify-center",
                positionClasses[position],
                className
            )}
        >
            <Icon className="w-6 h-6" />

            {badgeCount && badgeCount > 0 && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center"
                >
                    {badgeCount > 9 ? "9+" : badgeCount}
                </motion.span>
            )}
        </motion.button>
    );
}
