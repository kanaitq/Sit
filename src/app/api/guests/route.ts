import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/lib/db';

// GET endpoint to retrieve the current guest count
export async function GET(request: NextRequest) {
  try {
    const guestData = await db.guests.get();
    
    return NextResponse.json({
      count: guestData.count,
      lastReset: guestData.lastReset
    });
  } catch (error) {
    console.error('Error fetching guest count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guest count', count: 0 },
      { status: 500 }
    );
  }
}

// POST endpoint to update the guest count
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Input validation
    if (body === null || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    if (typeof body.count !== 'number') {
      return NextResponse.json(
        { error: 'Count must be a number' },
        { status: 400 }
      );
    }
    
    if (body.count < 0 || body.count > 100) {
      return NextResponse.json(
        { error: 'Count must be between 0 and 100' },
        { status: 400 }
      );
    }
    
    // Update the guest count
    const guestData = await db.guests.update(body.count);
    
    return NextResponse.json({
      count: guestData.count,
      lastReset: guestData.lastReset
    });
  } catch (error) {
    console.error('Error updating guest count:', error);
    return NextResponse.json(
      { error: 'Failed to update guest count' },
      { status: 500 }
    );
  }
} 