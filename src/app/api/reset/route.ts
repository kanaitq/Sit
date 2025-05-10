import { NextResponse } from 'next/server';
import { prisma } from '~/lib/db';

// GET /api/reset - Get last reset time
export async function GET() {
  try {
    const resetTracker = await prisma.resetTracker.findFirst({
      where: { id: 'singleton' },
    });
    
    return NextResponse.json(resetTracker || { lastReset: new Date(0) });
  } catch (error) {
    console.error('Error fetching reset tracker:', error);
    return NextResponse.json({ error: 'Failed to fetch reset tracker' }, { status: 500 });
  }
}

// POST /api/reset - Perform a reset of all data
export async function POST() {
  try {
    // Reset all food selections
    await prisma.foodOption.updateMany({
      data: { selected: false },
    });
    
    // Reset all seat selections
    await prisma.seatSelection.updateMany({
      data: { selected: false },
    });
    
    // Update the reset tracker
    const now = new Date();
    await prisma.resetTracker.upsert({
      where: { id: 'singleton' },
      update: { lastReset: now },
      create: { id: 'singleton', lastReset: now },
    });
    
    return NextResponse.json({ success: true, resetTime: now });
  } catch (error) {
    console.error('Error performing reset:', error);
    return NextResponse.json({ error: 'Failed to perform reset' }, { status: 500 });
  }
} 