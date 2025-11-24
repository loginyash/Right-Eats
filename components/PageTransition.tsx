"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/animation-variants";

interface PageTransitionProps {
    children: React.ReactNode;
}

/**
 * Page transition wrapper component for smooth navigation animations
 */
export function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
