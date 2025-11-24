"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { TrendingUp, Users, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BusinessPage() {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
                        alt="Restaurant Kitchen"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-6">
                    <div className="max-w-2xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                            Join 500+ Bikaner Restaurants
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                        >
                            Grow Your Business with <span className="text-[var(--color-primary)]">Right Eats</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-300"
                        >
                            Reach more customers, manage reviews, and boost your revenue with Bikaner's premium discovery platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-2xl shadow-[var(--color-primary)]/30">
                                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                                View Success Stories
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[var(--color-primary)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { label: "Active Users", value: "50K+" },
                            { label: "Restaurants", value: "500+" },
                            { label: "Monthly Orders", value: "120K+" },
                            { label: "Cities", value: "1" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-4xl font-bold">{stat.value}</div>
                                <div className="text-white/80 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl font-bold text-[var(--color-accent)]">Why Partner with Us?</h2>
                        <p className="text-gray-600 text-lg">We provide the tools you need to succeed in the digital age.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />,
                                title: "Increase Visibility",
                                desc: "Stand out to thousands of hungry customers looking for their next meal."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-[var(--color-primary)]" />,
                                title: "Customer Insights",
                                desc: "Understand your customers better with detailed analytics and review management."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />,
                                title: "Verified Reviews",
                                desc: "Build trust with authentic, verified reviews from real diners."
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="hover:shadow-xl transition-all duration-300 border-0">
                                <CardContent className="pt-8 text-center space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-[var(--color-accent)] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold">Ready to transform your business?</h2>
                        <p className="text-xl text-gray-300">Join the fastest growing food network in Bikaner today.</p>
                        <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-gray-100">
                            Register Your Restaurant
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
