import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="group relative flex items-center w-fit">
                            <div className="relative flex items-center">
                                <span className="text-2xl font-black tracking-tighter text-[var(--color-accent)]">
                                    Right
                                </span>
                                <span className="text-2xl font-black tracking-tighter text-[var(--color-primary)] ml-1">
                                    Eats
                                </span>
                                <div className="absolute -top-2 right-0 transform translate-x-1 -rotate-12">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-primary)]">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Discover the best tastes of the desert city. From street food to royal dining.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Discover</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Trending</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)]">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Best Rated</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[var(--color-primary)]">About Us</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Careers</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Terms</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)]">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Right Eats. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
