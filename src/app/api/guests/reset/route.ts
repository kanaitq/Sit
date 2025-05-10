import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/lib/db';

// PUT endpoint to reset the guest count
export async function PUT(request: NextRequest) {
  try {
    // Reset the guest count to 0
    const guestData = await db.guests.reset();
    
    return NextResponse.json({
      count: guestData.count,
      lastReset: guestData.lastReset,
      message: 'Guest count has been reset'
    });
  } catch (error) {
    console.error('Error resetting guest count:', error);
    return NextResponse.json(
      { error: 'Failed to reset guest count' },
      { status: 500 }
    );
  }
} 