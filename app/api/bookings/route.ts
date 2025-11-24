import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST /api/bookings - Create new booking
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.restaurant_id || !body.user_name || !body.user_email || !body.date || !body.time || !body.party_size) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const booking = await prisma.booking.create({
            data: {
                restaurant_id: body.restaurant_id,
                user_name: body.user_name,
                user_email: body.user_email,
                user_phone: body.user_phone || null,
                date: new Date(body.date),
                time: body.time,
                party_size: body.party_size,
                special_requests: body.special_requests || null,
                status: 'CONFIRMED',
            },
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error('Error creating booking', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}
