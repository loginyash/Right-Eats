"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight, Mail, Lock, Github, Facebook } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Artistic */}
            <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
                        alt="Luxury Dining"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                </div>

                <div className="relative z-10 p-12 text-center text-white space-y-6 max-w-lg">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-bold tracking-tight"
                    >
                        Experience the <span className="text-[var(--color-primary)]">Extraordinary</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-300 font-light"
                    >
                        Join thousands of food enthusiasts discovering the hidden gems of Bikaner.
                    </motion.p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-8 bg-[var(--color-background)]">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-[var(--color-accent)]">Welcome Back</h2>
                        <p className="text-gray-500">Sign in to continue your culinary journey</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                placeholder="Email address"
                                type="email"
                                icon={<Mail className="w-4 h-4" />}
                                className="h-12"
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                icon={<Lock className="w-4 h-4" />}
                                className="h-12"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-[var(--color-primary)] hover:underline font-medium">Forgot password?</a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-medium shadow-xl shadow-orange-500/20"
                            isLoading={isLoading}
                        >
                            Sign In <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[var(--color-background)] px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12">
                            <Github className="mr-2 h-4 w-4" /> Github
                        </Button>
                        <Button variant="outline" className="h-12">
                            <Facebook className="mr-2 h-4 w-4 text-blue-600" /> Facebook
                        </Button>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="#" className="text-[var(--color-primary)] font-bold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
