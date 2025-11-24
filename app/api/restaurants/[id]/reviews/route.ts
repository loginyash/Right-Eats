import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/restaurants/[id]/reviews - Get reviews for a restaurant
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const reviews = await prisma.review.findMany({
            where: { restaurant_id: params.id },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

// POST /api/restaurants/[id]/reviews - Add new review
export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();

        const review = await prisma.review.create({
            data: {
                restaurant_id: params.id,
                user_id: body.user_id || 'anonymous',
                user_name: body.user_name,
                rating: body.rating,
                comment: body.comment,
            },
        });

        return NextResponse.json(review, { status: 201 });
    } catch (error) {
        console.error('Error creating review:', error);
        return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
    }
}
