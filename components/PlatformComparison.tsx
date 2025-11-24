"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";
import { OrderButton } from "./OrderButton";
import { Trophy } from "lucide-react";

interface PlatformPrice {
    platform: "right_eats" | "swiggy" | "zomato";
    price: number;
    url?: string;
}

interface PlatformComparisonProps {
    dishName: string;
    prices: PlatformPrice[];
    restaurantName?: string;
}

const platformLabels = {
    right_eats: "Right Eats",
    swiggy: "Swiggy",
    zomato: "Zomato",
};

export function PlatformComparison({ dishName, prices, restaurantName }: PlatformComparisonProps) {
    // Find the lowest price
    const lowestPrice = Math.min(...prices.map(p => p.price));

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100"
        >
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>💰</span>
                Price Comparison - {dishName}
            </h3>

            <div className="space-y-3">
                {prices.map((item, index) => {
                    const isBestPrice = item.price === lowestPrice;
                    const platform = item.platform === "right_eats" ? "direct" : item.platform;

                    return (
                        <motion.div
                            key={item.platform}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "flex items-center justify-between p-4 rounded-xl transition-all",
                                isBestPrice
                                    ? "bg-white border-2 border-green-400 shadow-md"
                                    : "bg-white border border-gray-200"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span className="font-semibold text-gray-900 min-w-[100px]">
                                    {platformLabels[item.platform]}
                                </span>
                                <span className="text-2xl font-bold text-[var(--color-primary)]">
                                    ₹{item.price}
                                </span>
                                {isBestPrice && (
                                    <Badge className="bg-green-500 text-white flex items-center gap-1">
                                        <Trophy className="w-3 h-3" />
                                        Best Deal
                                    </Badge>
                                )}
                            </div>

                            {item.platform !== "right_eats" && (
                                <OrderButton
                                    platform={platform as "swiggy" | "zomato"}
                                    url={item.url}
                                    restaurantName={restaurantName}
                                    size="sm"
                                    variant="outline"
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
                💡 Prices may vary. Save ₹{prices.find(p => p.price !== lowestPrice)?.price ? prices.find(p => p.price !== lowestPrice)!.price - lowestPrice : 0} by ordering at the best price!
            </p>
        </motion.div>
    );
}

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
