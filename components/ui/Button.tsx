"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-[var(--color-primary)] text-white hover:bg-[#d69600] shadow-lg shadow-orange-500/20",
            secondary: "bg-[var(--color-secondary)] text-white hover:bg-[#b35900] shadow-lg shadow-orange-700/20",
            outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
            ghost: "hover:bg-black/5 text-[var(--color-foreground)]",
            glass: "glass text-[var(--color-foreground)] hover:bg-white/40",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm rounded-xl",
            md: "h-11 px-6 text-base rounded-2xl",
            lg: "h-14 px-8 text-lg rounded-2xl",
            icon: "h-11 w-11 p-0 rounded-2xl flex items-center justify-center",
        };

        return (
            <motion.button
                ref={ref}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                animate="rest"
                variants={{
                    rest: {
                        scale: 1,
                    },
                    hover: {
                        scale: 1.02,
                        transition: {
                            duration: 0.2,
                            ease: "easeOut",
                        },
                    },
                    tap: {
                        scale: 0.98,
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut",
                        },
                    },
                }}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
