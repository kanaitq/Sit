import { NextRequest, NextResponse } from 'next/server';

// Access the shared state
// In a real app with a database, this would be a proper database import
import { guestData } from '../shared';

// PUT endpoint to reset the guest count
export async function PUT(request: NextRequest) {
  try {
    // Reset the guest count to 0
    guestData.count = 0;
    
    return NextResponse.json({
      count: 0,
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