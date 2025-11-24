"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { toast } from "sonner";
import { modalBackdrop, modalContent, successBounce } from "@/lib/animation-variants";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    restaurantName: string;
}

export function BookingModal({ isOpen, onClose, restaurantName }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
            toast.success("Table reserved successfully!");
        }, 1500);
    };

    const handleClose = () => {
        onClose();
        // Reset step after modal closes
        setTimeout(() => setStep(1), 300);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    variants={modalBackdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                />

                <motion.div
                    variants={modalContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-[var(--color-primary)] p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClose}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>
                        <h2 className="text-2xl font-bold">Reserve a Table</h2>
                        <p className="text-white/80 text-sm mt-1">at {restaurantName}</p>

                        {/* Decorative circles */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    </div>

                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleBooking}
                                    className="space-y-5"
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[var(--color-primary)]" /> Date
                                        </label>
                                        <Input type="date" className="w-full" required />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[var(--color-primary)]" /> Time
                                            </label>
                                            <Input type="time" className="w-full" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <Users className="w-4 h-4 text-[var(--color-primary)]" /> Guests
                                            </label>
                                            <select className="w-full h-11 rounded-xl border border-gray-200 px-3 bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none">
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                                    <option key={n} value={n}>{n} People</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Special Requests</label>
                                        <textarea
                                            className="w-full h-24 rounded-xl border border-gray-200 p-3 bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-none"
                                            placeholder="Allergies, special occasion, etc."
                                        />
                                    </div>

                                    <Button type="submit" className="w-full h-12 text-lg" isLoading={isLoading}>
                                        Confirm Reservation
                                    </Button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center py-8 space-y-4"
                                >
                                    <motion.div
                                        variants={successBounce}
                                        initial="hidden"
                                        animate="visible"
                                        className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <CheckCircle className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
                                    <p className="text-gray-500">
                                        Your table at {restaurantName} has been reserved. We've sent a confirmation email to you.
                                    </p>
                                    <Button onClick={handleClose} variant="outline" className="w-full mt-6">
                                        Done
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
