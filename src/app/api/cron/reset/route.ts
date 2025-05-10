import { NextResponse } from 'next/server';
import { db } from '~/lib/db';

// This endpoint will be called by a Vercel cron job at midnight Singapore time
export async function GET(request: Request) {
  // Verify that this is a legitimate cron job request
  // You can add authorization checks here if needed
  const authHeader = request.headers.get('authorization');
  
  // In production, you should use a secure token
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    // Reset all food selections
    await db.food.reset();
    
    // Reset all seat selections
    await db.seats.reset();
    
    // Reset guest count and get the latest reset time
    const guestData = await db.guests.reset();
    
    console.log('Midnight reset completed at:', guestData.lastReset.toISOString());
    return NextResponse.json({ success: true, resetTime: guestData.lastReset });
  } catch (error) {
    console.error('Error performing scheduled reset:', error);
    return NextResponse.json({ error: 'Failed to perform scheduled reset' }, { status: 500 });
  }
} 