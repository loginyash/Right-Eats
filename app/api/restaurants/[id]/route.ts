import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/restaurants/[id] - Get single restaurant with details
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const restaurant = await prisma.restaurant.findUnique({
            where: { id: params.id },
            include: {
                popular_dishes: true,
                reviews: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });

        if (!restaurant) {
            return NextResponse.json({ error: 'Restaurant not found' }, { status: 404 });
        }

        // Parse images JSON
        const restaurantWithImages = {
            ...restaurant,
            images: JSON.parse(restaurant.images),
        };

        return NextResponse.json(restaurantWithImages);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        return NextResponse.json({ error: 'Failed to fetch restaurant' }, { status: 500 });
    }
}
