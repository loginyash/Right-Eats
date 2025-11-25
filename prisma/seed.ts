import { PrismaClient } from '@prisma/client';
import { mockRestaurants } from '../data/mock';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed...');

    // Clear existing data
    await prisma.booking.deleteMany();
    await prisma.review.deleteMany();
    await prisma.popularDish.deleteMany();
    await prisma.restaurant.deleteMany();

    // Seed restaurants
    for (const restaurant of mockRestaurants) {
        await prisma.restaurant.create({
            data: {
                id: restaurant.id,
                name: restaurant.name,
                cuisine: restaurant.cuisine,
                description: restaurant.minimal_description,
                minimal_description: restaurant.minimal_description,
                address: restaurant.address,
                rating: restaurant.rating,
                price_range: restaurant.price_range,
                images: JSON.stringify(restaurant.images),
                average_bill_per_person: restaurant.average_bill_per_person || null,
                available_on: "Both",
                popular_dishes: {
                    create: restaurant.popular_dishes?.map(dish => ({
                        id: dish.id,
                        name: dish.name,
                        description: dish.description,
                        price: dish.price,
                        zomato_price: dish.zomato_price || null,
                        swiggy_price: dish.swiggy_price || null,
                        is_bestseller: dish.is_bestseller || false,
                    })) || [],
                },
                reviews: {
                    create: restaurant.reviews?.map(review => ({
                        id: review.id,
                        user_id: review.user_id,
                        user_name: review.user_name || "Anonymous",
                        rating: review.rating,
                        comment: review.comment,
                        date: new Date(review.date),
                    })) || [],
                },
            },
        });
        console.log(`Created restaurant: ${restaurant.name}`);
    }

    console.log('Seed completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
