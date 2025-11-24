# 🍽️ Right Eats - Restaurant Discovery Platform

A premium, full-stack restaurant discovery platform for Bikaner featuring smooth animations, comprehensive restaurant data, and seamless booking experience.

## ✨ Features

- 🎨 **Premium UI/UX** - Smooth animations powered by Framer Motion
- 🗄️ **Full-Stack Backend** - Prisma ORM + SQLite database
- 🚀 **Next.js 14** - App Router with Server Components
- 📱 **Fully Responsive** - Mobile-first design
- 🔍 **Advanced Search & Filters** - Find restaurants by cuisine, price, rating
- ⭐ **Reviews System** - Read and write restaurant reviews
- 📅 **Online Booking** - Reserve tables directly through the app
- 💫 **Scroll Animations** - Elements animate into view
- 🎭 **Interactive Components** - Hover effects, loading skeletons
- 🌟 **Popular Dishes** - View menus with price comparisons across platforms

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production-ready)
- **UI Components**: Custom components with Lucide React icons
- **Form Handling**: React Hook Form + Zod
- **Notifications**: Sonner

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/right-eats.git
cd right-eats
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
DATABASE_URL="file:./dev.db"
```

4. Initialize the database:
```bash
# Push schema to database
npm run db:push

# Seed the database with mock data
npm run db:seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Database Schema

- **Restaurants** - Core restaurant information
- **PopularDishes** - Menu items with price comparisons
- **Reviews** - User reviews and ratings
- **Bookings** - Table reservation system

## 🎯 API Endpoints

### Restaurants
- `GET /api/restaurants` - List all restaurants (with filters)
- `GET /api/restaurants/[id]` - Get restaurant details
- `POST /api/restaurants` - Create restaurant (admin)

### Reviews
- `GET /api/restaurants/[id]/reviews` - Get restaurant reviews
- `POST /api/restaurants/[id]/reviews` - Add new review

### Bookings
- `POST /api/bookings` - Create new booking

## 📱 Key Features Walkthrough

### Home Page
- Hero carousel with desert imagery
- Animated filter chips for cuisine categories
- Restaurant grid with scroll-triggered animations
- Premium card hover effects

### Restaurant Detail Page
- Immersive hero image
- Popular dishes with platform price comparisons (Right Eats, Zomato, Swiggy)
- Reviews section with rating display
- Sticky booking sidebar

### Booking Modal
- Multi-step form with smooth transitions
- Date, time, and party size selection
- Success animation with spring bounce

## 🎨 Animation Features

- Page transitions (fade/slide)
- Scroll-triggered element animations
- Card lift and shadow effects on hover
- Button scale interactions
- Shimmer loading skeletons
- Modal scale and fade transitions
- Navbar opacity change on scroll

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with data
```

## 📦 Project Structure

```
right-eats/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── restaurant/        # Restaurant pages
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components
│   └── *.tsx             # Feature components
├── lib/                   # Utility functions
│   ├── animation-variants.ts
│   └── prisma.ts
├── prisma/               # Database
│   ├── schema.prisma
│   └── seed.ts
├── public/               # Static assets
└── types/               # TypeScript types
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for Bikaner food lovers

---

⭐ Star this repo if you found it helpful!
