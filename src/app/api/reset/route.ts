import { NextResponse } from 'next/server';
import { db } from '~/lib/db';

// GET /api/reset - Get last reset time
export async function GET() {
  try {
    // Use the guest data as it contains the reset time
    const guestData = await db.guests.get();
    
    return NextResponse.json({ lastReset: guestData.lastReset });
  } catch (error) {
    console.error('Error fetching reset tracker:', error);
    return NextResponse.json({ error: 'Failed to fetch reset tracker' }, { status: 500 });
  }
}

// POST /api/reset - Perform a reset of all data
export async function POST() {
  try {
    // Reset all food selections
    await db.food.reset();
    
    // Reset all seat selections
    await db.seats.reset();
    
    // Reset guest count
    const guestData = await db.guests.reset();
    
    return NextResponse.json({ success: true, resetTime: guestData.lastReset });
  } catch (error) {
    console.error('Error performing reset:', error);
    return NextResponse.json({ error: 'Failed to perform reset' }, { status: 500 });
  }
} 