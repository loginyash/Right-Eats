export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'user' | 'admin';
}

export interface Review {
  id: string;
  user_id: string;
  user_name?: string; // Helper for UI
  user_avatar?: string; // Helper for UI
  rating: number;
  comment: string;
  date: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  zomato_price?: number;
  swiggy_price?: number;
  is_bestseller: boolean;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  address: string;
  geo_coords: {
    lat: number;
    lng: number;
  };
  images: string[];
  price_range: '$' | '$$' | '$$$' | '$$$$';
  minimal_description: string;
  reviews: Review[];
  average_bill_per_person?: number;
  popular_dishes?: Dish[];
}
