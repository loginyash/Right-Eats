"use client";

import { motion } from "framer-motion";
import { OrderButton } from "./OrderButton";
import { Clock, Bike } from "lucide-react";
import { PlatformBadge } from "./ui/PlatformBadge";

interface OrderingSectionProps {
    restaurantName: string;
    swiggyUrl?: string;
    zomatoUrl?: string;
    deliveryTime?: string;
    availableOn: string[];
}

export function OrderingSection({
    restaurantName,
    swiggyUrl,
    zomatoUrl,
    deliveryTime,
    availableOn,
}: OrderingSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl p-8 border border-orange-100 shadow-lg"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Online</h2>
                    <p className="text-gray-600">Choose your preferred platform</p>
                </div>

                {deliveryTime && (
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                        <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="font-semibold text-gray-700">{deliveryTime}</span>
                    </div>
                )}
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600">Available on:</span>
                {availableOn.map((platform) => (
                    <PlatformBadge
                        key={platform}
                        platform={platform as "swiggy" | "zomato" | "direct"}
                        size="sm"
                    />
                ))}
            </div>

            {/* Order Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {availableOn.includes("swiggy") && (
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all"
                    >
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-2">🛵</div>
                            <h3 className="font-bold text-gray-900">Swiggy</h3>
                            <p className="text-xs text-gray-500 mt-1">Fast delivery</p>
                        </div>
                        <OrderButton
                            platform="swiggy"
                            url={swiggyUrl}
                            restaurantName={restaurantName}
                            size="md"
                            className="w-full"
                        />
                    </motion.div>
                )}

                {availableOn.includes("zomato") && (
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 transition-all"
                    >
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-2">🍽️</div>
                            <h3 className="font-bold text-gray-900">Zomato</h3>
                            <p className="text-xs text-gray-500 mt-1">Trusted platform</p>
                        </div>
                        <OrderButton
                            platform="zomato"
                            url={zomatoUrl}
                            restaurantName={restaurantName}
                            size="md"
                            className="w-full"
                        />
                    </motion.div>
                )}

                {availableOn.includes("direct") && (
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all"
                    >
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-2">📞</div>
                            <h3 className="font-bold text-gray-900">Direct Order</h3>
                            <p className="text-xs text-gray-500 mt-1">Call restaurant</p>
                        </div>
                        <OrderButton
                            platform="direct"
                            restaurantName={restaurantName}
                            size="md"
                            className="w-full"
                        />
                    </motion.div>
                )}
            </div>

            <div className="mt-6 flex items-start gap-2 bg-blue-50 p-4 rounded-xl border border-blue-200">
                <Bike className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                    <strong>Pro Tip:</strong> Compare prices across platforms to get the best deal! Prices may vary.
                </p>
            </div>
        </motion.section>
    );
}
