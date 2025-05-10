import { NextResponse } from 'next/server';
import { prisma } from '~/lib/db';

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
    
    console.log('Midnight reset completed at:', now.toISOString());
    return NextResponse.json({ success: true, resetTime: now });
  } catch (error) {
    console.error('Error performing scheduled reset:', error);
    return NextResponse.json({ error: 'Failed to perform scheduled reset' }, { status: 500 });
  }
} 