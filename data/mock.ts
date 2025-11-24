import { Restaurant } from '@/types';

export const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Gallops Restaurant',
        cuisine: 'North Indian & Continental',
        rating: 4.5,
        address: 'Opposite Junagarh Fort, Bikaner',
        geo_coords: { lat: 28.0158, lng: 73.3119 },
        images: [
            '/gallops_restaurant_1763968132496.png',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$$',
        minimal_description: 'A classic spot with a view of Junagarh Fort, serving vintage vibes and great coffee.',
        average_bill_per_person: 450,
        popular_dishes: [
            { id: 'd1', name: 'Butter Chicken', description: 'Creamy tomato-based curry', price: 320, zomato_price: 340, swiggy_price: 335, is_bestseller: true },
            { id: 'd2', name: 'Paneer Tikka', description: 'Charcoal grilled cottage cheese', price: 280, zomato_price: 295, swiggy_price: 290, is_bestseller: true },
            { id: 'd3', name: 'Dal Makhani', description: 'Slow cooked black lentils', price: 220, zomato_price: 235, swiggy_price: 230, is_bestseller: false },
            { id: 'd4', name: 'Garlic Naan', description: 'Clay oven bread with garlic', price: 60, zomato_price: 65, swiggy_price: 62, is_bestseller: false },
            { id: 'd5', name: 'Cappuccino', description: 'Italian coffee specialty', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: true }
        ],
        reviews: [
            { id: 'r1', user_id: 'u1', user_name: 'Aditi R.', rating: 5, comment: 'The coffee and the view are unmatched. A must-visit in Bikaner.', date: '2023-10-15' }
        ]
    },
    {
        id: '2',
        name: "Heeralal's",
        cuisine: 'Sweets & Street Food',
        rating: 4.8,
        address: 'Station Road, Bikaner',
        geo_coords: { lat: 28.0180, lng: 73.3150 },
        images: [
            '/heeralal_sweets_1763968160855.png',
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$',
        minimal_description: 'Legendary for its Rasgullas and Raj Kachori. The heart of Bikaner sweets.',
        average_bill_per_person: 150,
        popular_dishes: [
            { id: 'd6', name: 'Rasgulla (6 pcs)', description: 'Soft cottage cheese balls in syrup', price: 80, zomato_price: 90, swiggy_price: 85, is_bestseller: true },
            { id: 'd7', name: 'Raj Kachori', description: 'Crispy kachori with toppings', price: 60, zomato_price: 70, swiggy_price: 65, is_bestseller: true },
            { id: 'd8', name: 'Gulab Jamun (4 pcs)', description: 'Deep-fried milk solids in syrup', price: 70, zomato_price: 80, swiggy_price: 75, is_bestseller: false },
            { id: 'd9', name: 'Samosa (2 pcs)', description: 'Crispy potato-filled pastry', price: 40, zomato_price: 45, swiggy_price: 45, is_bestseller: true }
        ],
        reviews: []
    },
    {
        id: '3',
        name: 'Narendra Bhawan',
        cuisine: 'Fine Dining & Royal',
        rating: 4.9,
        address: 'Samvet Shikhar, Bikaner',
        geo_coords: { lat: 28.0300, lng: 73.3300 },
        images: [
            '/narendra_bhawan_luxury_1763968184407.png',
            'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$$$$',
        minimal_description: 'Experience royalty. An eclectic mix of traditional and modern luxury dining.',
        average_bill_per_person: 2500,
        popular_dishes: [
            { id: 'd10', name: 'Royal Laal Maas', description: 'Fiery red mutton curry from palaces', price: 850, zomato_price: 900, swiggy_price: 890, is_bestseller: true },
            { id: 'd11', name: 'Lobster Thermidor', description: 'French-style lobster in cream sauce', price: 1200, zomato_price: 1280, swiggy_price: 1250, is_bestseller: false },
            { id: 'd12', name: 'Truffle Risotto', description: 'Creamy rice with black truffle', price: 950, zomato_price: 1000, swiggy_price: 980, is_bestseller: false },
            { id: 'd13', name: 'Maharaja Thali', description: 'A royal spread of 12 delicacies', price: 1500, zomato_price: 1600, swiggy_price: 1575, is_bestseller: true }
        ],
        reviews: []
    },
    {
        id: '4',
        name: 'Amber Wall',
        cuisine: 'Multi-Cuisine',
        rating: 4.2,
        address: 'Sagar Hotel, Bikaner',
        geo_coords: { lat: 28.0200, lng: 73.3200 },
        images: [
            'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$$$',
        minimal_description: 'Elegant dining with a vast menu. Perfect for family dinners.',
        average_bill_per_person: 600,
        popular_dishes: [
            { id: 'd14', name: 'Chicken Biryani', description: 'Aromatic basmati rice with chicken', price: 350, zomato_price: 370, swiggy_price: 365, is_bestseller: true },
            { id: 'd15', name: 'Veg Manchurian', description: 'Indo-Chinese veggie balls', price: 240, zomato_price: 255, swiggy_price: 250, is_bestseller: false },
            { id: 'd16', name: 'Tandoori Platter', description: 'Mixed grilled meats', price: 550, zomato_price: 580, swiggy_price: 570, is_bestseller: true },
            { id: 'd17', name: 'Brownie with Ice Cream', description: 'Warm chocolate brownie', price: 180, zomato_price: 195, swiggy_price: 190, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '5',
        name: 'Chhotu Motu Joshi',
        cuisine: 'Breakfast & Snacks',
        rating: 4.7,
        address: 'Station Road, Bikaner',
        geo_coords: { lat: 28.0190, lng: 73.3160 },
        images: [
            '/breakfast_street_food_1763968341362.png',
            'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$',
        minimal_description: 'The best place for Poori Bhaji and Jalebi in the morning.',
        average_bill_per_person: 100,
        popular_dishes: [
            { id: 'd18', name: 'Poori Bhaji', description: 'Fluffy bread with spicy potato curry', price: 60, zomato_price: 70, swiggy_price: 65, is_bestseller: true },
            { id: 'd19', name: 'Jalebi (250g)', description: 'Sweet spiral fritters', price: 80, zomato_price: 90, swiggy_price: 85, is_bestseller: true },
            { id: 'd20', name: 'Masala Chai', description: 'Spiced Indian tea', price: 20, zomato_price: 25, swiggy_price: 22, is_bestseller: false },
            { id: 'd21', name: 'Aloo Paratha', description: 'Stuffed flatbread with potato', price: 50, zomato_price: 60, swiggy_price: 55, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '6',
        name: 'Laxmi Niwas Palace',
        cuisine: 'Royal Rajasthani',
        rating: 4.9,
        address: 'Lalgarh Palace Complex, Bikaner',
        geo_coords: { lat: 28.0400, lng: 73.3400 },
        images: [
            '/laxmi_niwas_palace_1763968219014.png',
            'https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$$$$',
        minimal_description: 'Dine like a Maharaja in the courtyard of this magnificent palace.',
        average_bill_per_person: 2200,
        popular_dishes: [
            { id: 'd22', name: 'Gatte Ki Sabzi', description: 'Gram flour dumplings in yogurt curry', price: 420, zomato_price: 450, swiggy_price: 440, is_bestseller: false },
            { id: 'd23', name: 'Ker Sangri', description: 'Traditional desert beans and berries', price: 380, zomato_price: 400, swiggy_price: 395, is_bestseller: true },
            { id: 'd24', name: 'Imperial Thali', description: '15-course royal meal experience', price: 1800, zomato_price: 1900, swiggy_price: 1875, is_bestseller: true },
            { id: 'd25', name: 'Bikaneri Ghevar', description: 'Honeycomb dessert disc', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '7',
        name: 'Skybytes',
        cuisine: 'Rooftop & Continental',
        rating: 4.3,
        address: 'Hotel Gold View, Bikaner',
        geo_coords: { lat: 28.0250, lng: 73.3250 },
        images: [
            '/skybytes_rooftop_1763968250553.png',
            'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$$$',
        minimal_description: 'Stunning rooftop views of the city paired with delicious continental fare.',
        average_bill_per_person: 750,
        popular_dishes: [
            { id: 'd26', name: 'Grilled Chicken Steak', description: 'With mashed potatoes and veggies', price: 520, zomato_price: 550, swiggy_price: 540, is_bestseller: true },
            { id: 'd27', name: 'Margherita Pizza', description: 'Classic Italian pizza', price: 380, zomato_price: 400, swiggy_price: 395, is_bestseller: false },
            { id: 'd28', name: 'Pasta Alfredo', description: 'Creamy white sauce pasta', price: 340, zomato_price: 360, swiggy_price: 355, is_bestseller: true },
            { id: 'd29', name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: 220, zomato_price: 235, swiggy_price: 230, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '8',
        name: 'Bhikharam Chandmal',
        cuisine: 'Sweets & Namkeen',
        rating: 4.8,
        address: 'Kote Gate, Bikaner',
        geo_coords: { lat: 28.0170, lng: 73.3100 },
        images: [
            '/bhikharam_namkeen_shop_1763968291407.png',
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop'
        ],
        price_range: '$',
        minimal_description: 'World-famous Bikaneri Bhujia and authentic traditional sweets.',
        average_bill_per_person: 200,
        popular_dishes: [
            { id: 'd30', name: 'Bikaneri Bhujia (500g)', description: 'Crispy gram flour noodles', price: 150, zomato_price: 165, swiggy_price: 160, is_bestseller: true },
            { id: 'd31', name: 'Kaju Katli (500g)', description: 'Cashew fudge', price: 450, zomato_price: 480, swiggy_price: 470, is_bestseller: false },
            { id: 'd32', name: 'Motichoor Ladoo (500g)', description: 'Tiny sweet balls', price: 280, zomato_price: 300, swiggy_price: 295, is_bestseller: true },
            { id: 'd33', name: 'Soan Papdi (500g)', description: 'Flaky sweet squares', price: 200, zomato_price: 215, swiggy_price: 210, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '9',
        name: 'Garden Cafe',
        cuisine: 'Cafe & Fast Food',
        rating: 4.1,
        address: 'Near Junagarh, Bikaner',
        geo_coords: { lat: 28.0160, lng: 73.3120 },
        images: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$',
        minimal_description: 'A relaxed outdoor setting perfect for evening snacks and coffee.',
        average_bill_per_person: 300,
        popular_dishes: [
            { id: 'd34', name: 'Veg Burger', description: 'Loaded veggie patty burger', price: 150, zomato_price: 165, swiggy_price: 160, is_bestseller: false },
            { id: 'd35', name: 'French Fries', description: 'Crispy potato fries', price: 100, zomato_price: 110, swiggy_price: 105, is_bestseller: false },
            { id: 'd36', name: 'Cold Coffee', description: 'Chilled coffee with ice cream', price: 130, zomato_price: 140, swiggy_price: 135, is_bestseller: true },
            { id: 'd37', name: 'Chocolate Shake', description: 'Rich chocolate milkshake', price: 140, zomato_price: 150, swiggy_price: 145, is_bestseller: true }
        ],
        reviews: []
    },
    {
        id: '10',
        name: 'Utsav Restaurant',
        cuisine: 'Vegetarian Thali',
        rating: 4.4,
        address: 'Station Road, Bikaner',
        geo_coords: { lat: 28.0185, lng: 73.3155 },
        images: ['https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$',
        minimal_description: 'Authentic Rajasthani Thali experience with unlimited servings.',
        average_bill_per_person: 350,
        popular_dishes: [
            { id: 'd38', name: 'Rajasthani Thali', description: '8 vegetables, dal, roti, rice, dessert', price: 300, zomato_price: 320, swiggy_price: 315, is_bestseller: true },
            { id: 'd39', name: 'Special Kadhi', description: 'Gram flour curry with fritters', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: false },
            { id: 'd40', name: 'Bati Churma', description: 'Baked wheat balls with sweet crumble', price: 180, zomato_price: 195, swiggy_price: 190, is_bestseller: true },
            { id: 'd41', name: 'Lassi', description: 'Sweet yogurt drink', price: 60, zomato_price: 70, swiggy_price: 65, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '11',
        name: 'Hangout Cafe',
        cuisine: 'Italian & Mexican',
        rating: 4.2,
        address: 'Sadul Ganj, Bikaner',
        geo_coords: { lat: 28.0350, lng: 73.3350 },
        images: ['https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$',
        minimal_description: 'Popular hangout spot for youth with great pizza and mocktails.',
        average_bill_per_person: 400,
        popular_dishes: [
            { id: 'd42', name: 'Veggie Supreme Pizza', description: 'Loaded with fresh vegetables', price: 320, zomato_price: 340, swiggy_price: 335, is_bestseller: true },
            { id: 'd43', name: 'Chicken Tacos (3 pcs)', description: 'Mexican-style tacos', price: 280, zomato_price: 300, swiggy_price: 295, is_bestseller: false },
            { id: 'd44', name: 'Virgin Mojito', description: 'Refreshing mint mocktail', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: true },
            { id: 'd45', name: 'Nachos with Cheese Dip', description: 'Crispy tortilla chips', price: 180, zomato_price: 195, swiggy_price: 190, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '12',
        name: 'Moomal Restaurant',
        cuisine: 'North Indian',
        rating: 4.0,
        address: 'RTDC Hotel, Bikaner',
        geo_coords: { lat: 28.0220, lng: 73.3220 },
        images: ['https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$',
        minimal_description: 'Reliable North Indian food in a comfortable, government-run setting.',
        average_bill_per_person: 400,
        popular_dishes: [
            { id: 'd46', name: 'Kadai Paneer', description: 'Cottage cheese in spicy gravy', price: 280, zomato_price: 295, swiggy_price: 290, is_bestseller: true },
            { id: 'd47', name: 'Chicken Curry', description: 'Traditional home-style curry', price: 300, zomato_price: 320, swiggy_price: 315, is_bestseller: false },
            { id: 'd48', name: 'Jeera Rice', description: 'Cumin-flavored rice', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: false },
            { id: 'd49', name: 'Mixed Raita', description: 'Yogurt with vegetables', price: 80, zomato_price: 90, swiggy_price: 85, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '13',
        name: 'Sankalp',
        cuisine: 'South Indian',
        rating: 4.5,
        address: 'Vyas Colony, Bikaner',
        geo_coords: { lat: 28.0450, lng: 73.3450 },
        images: ['https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$',
        minimal_description: 'The best place for Dosas and Idlis in Bikaner.',
        average_bill_per_person: 250,
        popular_dishes: [
            { id: 'd50', name: 'Masala Dosa', description: 'Crispy rice crepe with potato filling', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: true },
            { id: 'd51', name: 'Idli Sambar (4 pcs)', description: 'Steamed rice cakes with lentil soup', price: 80, zomato_price: 90, swiggy_price: 85, is_bestseller: false },
            { id: 'd52', name: 'Filter Coffee', description: 'South Indian frothy coffee', price: 50, zomato_price: 60, swiggy_price: 55, is_bestseller: true },
            { id: 'd53', name: 'Uttapam', description: 'Thick rice pancake with toppings', price: 110, zomato_price: 120, swiggy_price: 115, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '14',
        name: 'Cafe Indra',
        cuisine: 'Coffee & Snacks',
        rating: 4.3,
        address: 'Junagarh Road, Bikaner',
        geo_coords: { lat: 28.0155, lng: 73.3115 },
        images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$',
        minimal_description: 'A cozy corner for coffee lovers right next to the fort.',
        average_bill_per_person: 180,
        popular_dishes: [
            { id: 'd54', name: 'Espresso', description: 'Strong Italian coffee shot', price: 90, zomato_price: 100, swiggy_price: 95, is_bestseller: false },
            { id: 'd55', name: 'Sandwich Club', description: 'Triple-layer veg sandwich', price: 140, zomato_price: 150, swiggy_price: 145, is_bestseller: true },
            { id: 'd56', name: 'Chocolate Cake Slice', description: 'Rich chocolate sponge cake', price: 100, zomato_price: 110, swiggy_price: 105, is_bestseller: true },
            { id: 'd57', name: 'Latte', description: 'Espresso with steamed milk', price: 120, zomato_price: 130, swiggy_price: 125, is_bestseller: false }
        ],
        reviews: []
    },
    {
        id: '15',
        name: 'Kings Pavilion',
        cuisine: 'Multi-Cuisine',
        rating: 4.6,
        address: 'Lalgarh, Bikaner',
        geo_coords: { lat: 28.0410, lng: 73.3410 },
        images: ['https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop'],
        price_range: '$$$',
        minimal_description: 'Royal ambiance with a diverse menu catering to all palates.',
        average_bill_per_person: 800,
        popular_dishes: [
            { id: 'd58', name: 'Seafood Platter', description: 'Grilled fish, prawns, and calamari', price: 1200, zomato_price: 1280, swiggy_price: 1250, is_bestseller: true },
            { id: 'd59', name: 'Lamb Rogan Josh', description: 'Aromatic Kashmiri lamb curry', price: 650, zomato_price: 690, swiggy_price: 675, is_bestseller: false },
            { id: 'd60', name: 'Asian Stir Fry', description: 'Mixed vegetables in Thai sauce', price: 420, zomato_price: 445, swiggy_price: 435, is_bestseller: false },
            { id: 'd61', name: 'Kulfi Falooda', description: 'Traditional Indian ice cream dessert', price: 150, zomato_price: 165, swiggy_price: 160, is_bestseller: true }
        ],
        reviews: []
    }
];
