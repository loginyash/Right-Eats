"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, MapPin, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { mockRestaurants } from "@/data/mock";
import Link from "next/link";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filters = ["All", "Fine Dining", "Street Food", "Cafes", "Sweets", "North Indian"];

  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      restaurant.cuisine.includes(activeFilter) ||
      (activeFilter === "Fine Dining" && restaurant.price_range === "$$$$") ||
      (activeFilter === "Street Food" && restaurant.price_range === "$");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Carousel */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-background)] z-10" />
            <img
              src={HERO_IMAGES[currentHeroIndex]}
              alt="Bikaner Desert"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 container mx-auto px-6 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase">
              Discover Bikaner's Culinary Soul
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none">
              Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-yellow-200">Extraordinary</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From royal feasts in palaces to legendary street food in the old city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <Input
                placeholder="Search for restaurants, cuisines..."
                className="relative h-16 pl-14 rounded-full bg-white/95 backdrop-blur-xl border-0 shadow-2xl text-lg placeholder:text-gray-400 focus:bg-white transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-6 h-6 text-[var(--color-primary)]" />}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 space-y-16">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <h2 className="text-3xl font-bold text-[var(--color-accent)]">Curated Collections</h2>
          <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar w-full md:w-auto">
            {filters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Button
                  variant={activeFilter === filter ? "primary" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full whitespace-nowrap px-6 h-10 ${activeFilter === filter ? 'shadow-lg shadow-orange-500/20' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  {filter}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/restaurant/${restaurant.id}`}>
                <Card className="h-full group cursor-pointer border-0 bg-white">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <img
                      src={restaurant.images[0]}
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-sm text-gray-900">{restaurant.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30">
                        {restaurant.cuisine}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="pt-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-colors">
                        {restaurant.name}
                      </h3>
                      <span className="text-gray-400 font-medium tracking-widest text-sm">{restaurant.price_range}</span>
                    </div>
                    <p className="text-gray-500 line-clamp-2 leading-relaxed">
                      {restaurant.minimal_description}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                      {restaurant.address}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t border-gray-50 p-6 flex justify-between items-center">
                    <span className="text-sm font-bold text-[var(--color-primary)] group-hover:underline decoration-2 underline-offset-4">
                      Reserve Table
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-32"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block p-6 rounded-full bg-gray-50 mb-6"
            >
              <Search className="w-12 h-12 text-gray-300" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No restaurants found</h3>
            <p className="text-gray-500">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
