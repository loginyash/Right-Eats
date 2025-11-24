import { Variants } from "framer-motion";

/**
 * Centralized animation variants library for consistent animations across the app
 */

// Basic fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1], // Custom easing for smooth feel
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

// Slide animations
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
    },
};

export const slideDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
    },
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: { duration: 0.3 },
    },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: 0.3 },
    },
};

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.2 },
    },
};

export const scaleInSpring: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.2 },
    },
};

// Stagger container and items
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Enhanced card hover animation
export const cardHover = {
    rest: {
        y: 0,
        scale: 1,
        boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    hover: {
        y: -12,
        scale: 1.01,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

// Button hover states
export const buttonHover = {
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
        },
    },
};

// Page transition variants
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
};

// Modal/Dialog animations
export const modalBackdrop: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, delay: 0.1 },
    },
};

export const modalContent: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: 0.2,
        },
    },
};

// Floating action button
export const floatingButton: Variants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
    hover: {
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
};

// Pulse animation (for badges, notifications)
export const pulse: Variants = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Shimmer loading effect (used with CSS)
export const shimmer = {
    animate: {
        backgroundPosition: ["200% 0", "-200% 0"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

// Success/Celebration animation
export const successBounce: Variants = {
    hidden: {
        scale: 0,
        rotate: -180,
    },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};

// Navbar scroll animation
export const navbarScroll = {
    top: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
    },
    scrolled: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
