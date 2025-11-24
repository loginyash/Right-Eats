"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, DollarSign, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { mockRestaurants } from "@/data/mock";
import { notFound } from "next/navigation";
import { Review, Restaurant } from "@/types";
import { BookingModal } from "@/components/BookingModal";
import { Utensils } from "lucide-react";

export default function RestaurantPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const restaurant = mockRestaurants.find((r: Restaurant) => r.id === id);

    if (!restaurant) {
        notFound();
    }

    const [reviews, setReviews] = useState<Review[]>(restaurant.reviews || []);
    const [newReview, setNewReview] = useState("");
    const [userRating, setUserRating] = useState(5);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReview.trim()) return;

        const review: Review = {
            id: Math.random().toString(36).substr(2, 9),
            user_id: "current-user",
            user_name: "You",
            rating: userRating,
            comment: newReview,
            date: new Date().toISOString().split("T")[0],
        };

        setReviews([review, ...reviews]);
        setNewReview("");
    };

    return (
        <div className="pb-20">
            {/* Parallax Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={restaurant.images[0]}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-32 pb-12">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <Badge className="bg-[var(--color-primary)] text-white border-0 text-lg py-1 px-4">
                                {restaurant.cuisine}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                {restaurant.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-xl">{restaurant.rating}</span>
                                    <span className="text-sm opacity-80">({reviews.length} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    <span>{restaurant.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    <span>{restaurant.price_range}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Info & Menu */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold">About</h2>
                                </div>
                                {restaurant.average_bill_per_person && (
                                    <div className="glass px-6 py-3 rounded-2xl">
                                        <div className="text-sm text-gray-500">Average Bill (per person)</div>
                                        <div className="text-2xl font-bold text-[var(--color-primary)]">₹{restaurant.average_bill_per_person}</div>
                                    </div>
                                )}
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {restaurant.minimal_description} Experience the authentic flavors of Bikaner in a setting that blends tradition with modern comfort. Perfect for any occasion.
                            </p>
                        </section>

                        {/* Menu Section */}
                        {restaurant.popular_dishes && restaurant.popular_dishes.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
                                    Popular Dishes
                                </h2>
                                <div className="space-y-4">
                                    {restaurant.popular_dishes.map((dish) => (
                                        <div key={dish.id} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-shadow">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-bold text-lg text-gray-900">{dish.name}</h4>
                                                        {dish.is_bestseller && (
                                                            <span className="text-xs font-bold bg-[var(--color-primary)] text-white px-2 py-0.5 rounded-full">BESTSELLER</span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-500">{dish.description}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-400 mb-1">Right Eats</div>
                                                    <div className="text-lg font-bold text-[var(--color-primary)]">₹{dish.price}</div>
                                                </div>
                                                {dish.zomato_price && (
                                                    <div className="text-center">
                                                        <div className="text-xs text-gray-400 mb-1">Zomato</div>
                                                        <div className="text-lg font-semibold text-[#cb202d]">₹{dish.zomato_price}</div>
                                                        <div className="text-xs text-red-600">+₹{dish.zomato_price - dish.price}</div>
                                                    </div>
                                                )}
                                                {dish.swiggy_price && (
                                                    <div className="text-center">
                                                        <div className="text-xs text-gray-400 mb-1">Swiggy</div>
                                                        <div className="text-lg font-semibold text-[#FC8019]">₹{dish.swiggy_price}</div>
                                                        <div className="text-xs text-orange-600">+₹{dish.swiggy_price - dish.price}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold">Reviews</h2>
                                <Button variant="outline" size="sm">Write a Review</Button>
                            </div>

                            {/* Add Review Form */}
                            <Card className="mb-8 bg-gray-50 border-dashed">
                                <CardContent className="pt-6">
                                    <form onSubmit={handleSubmitReview} className="space-y-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-medium">Your Rating:</span>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setUserRating(star)}
                                                    className="focus:outline-none"
                                                >
                                                    <Star
                                                        className={`w-6 h-6 ${star <= userRating
                                                            ? "text-yellow-400 fill-yellow-400"
                                                            : "text-gray-300"
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <Input
                                                value={newReview}
                                                onChange={(e) => setNewReview(e.target.value)}
                                                placeholder="Share your experience..."
                                                className="bg-white"
                                            />
                                            <Button type="submit" disabled={!newReview}>
                                                Post
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Reviews List */}
                            <div className="space-y-6">
                                {reviews.length > 0 ? (
                                    reviews.map((review) => (
                                        <motion.div
                                            key={review.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="border-b border-gray-100 pb-6 last:border-0"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] font-bold">
                                                        {review.user_name?.[0] || "U"}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold">{review.user_name || "User"}</h4>
                                                        <span className="text-xs text-gray-500">{review.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-sm font-medium">
                                                    <Star className="w-3 h-3 mr-1 fill-yellow-700" />
                                                    {review.rating}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 pl-14">{review.comment}</p>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 bg-gray-50 rounded-2xl">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <Star className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">No reviews yet</h3>
                                        <p className="text-gray-500">Be the first to share your experience!</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="border-0 shadow-xl shadow-orange-500/5">
                                <CardContent className="pt-6 space-y-6">
                                    <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden relative">
                                        {/* Placeholder Map */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-orange-50 text-orange-800/50 font-bold">
                                            Interactive Map
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-1" />
                                            <div>
                                                <h4 className="font-medium">Address</h4>
                                                <p className="text-sm text-gray-500">{restaurant.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-[var(--color-primary)] mt-1" />
                                            <div>
                                                <h4 className="font-medium">Opening Hours</h4>
                                                <p className="text-sm text-gray-500">10:00 AM - 11:00 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Button className="w-full col-span-2" size="lg" onClick={() => setIsBookingModalOpen(true)}>
                                            Reserve Table
                                        </Button>

                                        <Button className="w-full col-span-2 bg-[#cb202d] hover:bg-[#b01b27] text-white border-0" size="lg">
                                            Order on Zomato
                                        </Button>
                                        <Button className="w-full col-span-2 bg-[#FC8019] hover:bg-[#e57316] text-white border-0" size="lg">
                                            Order on Swiggy
                                        </Button>

                                        <Button className="w-full" variant="outline">
                                            Get Directions
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Share
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                restaurantName={restaurant.name}
            />
        </div>
    );
}
