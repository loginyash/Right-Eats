import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/restaurants - List all restaurants with filtering
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search') || '';
        const cuisine = searchParams.get('cuisine') || '';
        const priceRange = searchParams.get('priceRange') || '';

        const restaurants = await prisma.restaurant.findMany({
            where: {
                AND: [
                    search
                        ? {
                            OR: [
                                { name: { contains: search, mode: 'insensitive' } },
                                { cuisine: { contains: search, mode: 'insensitive' } },
                            ],
                        }
                        : {},
                    cuisine ? { cuisine: { contains: cuisine, mode: 'insensitive' } } : {},
                    priceRange ? { price_range: priceRange } : {},
                ],
            },
            include: {
                popular_dishes: true,
                reviews: true,
            },
            orderBy: {
                rating: 'desc',
            },
        });

        // Parse images JSON
        const restaurantsWithImages = restaurants.map(r => ({
            ...r,
            images: JSON.parse(r.images),
        }));

        return NextResponse.json(restaurantsWithImages);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        return NextResponse.json({ error: 'Failed to fetch restaurants' }, { status: 500 });
    }
}

// POST /api/restaurants - Create new restaurant (admin)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const restaurant = await prisma.restaurant.create({
            data: {
                name: body.name,
                cuisine: body.cuisine,
                description: body.description,
                minimal_description: body.minimal_description,
                address: body.address,
                rating: body.rating,
                price_range: body.price_range,
                images: JSON.stringify(body.images),
                average_bill_per_person: body.average_bill_per_person,
            },
        });

        return NextResponse.json(restaurant, { status: 201 });
    } catch (error) {
        console.error('Error creating restaurant:', error);
        return NextResponse.json({ error: 'Failed to create restaurant' }, { status: 500 });
    }
}
