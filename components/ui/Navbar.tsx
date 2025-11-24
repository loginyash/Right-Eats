"use client";

import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            animate={{
                backgroundColor: isScrolled
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(255, 255, 255, 0.7)",
                boxShadow: isScrolled
                    ? "0 4px 30px rgba(0, 0, 0, 0.1)"
                    : "0 4px 30px rgba(0, 0, 0, 0.03)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky top-0 z-50 w-full backdrop-blur-md"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group relative flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col leading-none"
                    >
                        <div className="relative flex items-center">
                            <span className="text-3xl font-black tracking-tighter text-[var(--color-accent)]">
                                Right
                            </span>
                            <span className="text-3xl font-black tracking-tighter text-[var(--color-primary)] ml-1">
                                Eats
                            </span>
                            {/* Stylized Arrow */}
                            <motion.div
                                className="absolute -top-3 right-0 transform translate-x-1 -rotate-12"
                                animate={{
                                    rotate: [-12, -8, -12],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-primary)] w-6 h-6">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </Link>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-lg mx-12">
                    <div className="relative w-full group">
                        <Input
                            placeholder="Search for restaurants, cuisines..."
                            icon={<Search className="h-4 w-4 text-gray-400" />}
                            className="bg-gray-50/50 border-gray-200/50 focus:bg-white focus:border-[var(--color-primary)]/30 focus:ring-4 focus:ring-[var(--color-primary)]/10 transition-all duration-300 h-12 rounded-full shadow-inner"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" className="md:hidden text-gray-600">
                        <Search className="h-5 w-5" />
                    </Button>

                    <div className="hidden sm:flex items-center space-x-1">
                        <Link href="/business">
                            <Button variant="ghost" className="text-gray-600 hover:text-[var(--color-primary)] font-medium">
                                For Business
                            </Button>
                        </Link>
                    </div>

                    <div className="h-6 w-px bg-gray-200 mx-2 hidden sm:block" />

                    <Link href="/login">
                        <Button className="rounded-full px-6 bg-[var(--color-accent)] hover:bg-black text-white shadow-lg shadow-black/10 hover:shadow-black/20 transition-all duration-300">
                            <User className="h-4 w-4 mr-2" />
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
