import { NextResponse } from 'next/server';
import { db } from '~/lib/db';

// GET /api/seats - Get all seat selections
export async function GET() {
  try {
    const seatSelections = await db.seats.getAll();
    return NextResponse.json(seatSelections);
  } catch (error) {
    console.error('Error fetching seat selections:', error);
    return NextResponse.json({ error: 'Failed to fetch seat selections' }, { status: 500 });
  }
}

// POST /api/seats - Update a seat selection
export async function POST(request: Request) {
  try {
    const { position, selected } = await request.json();
    
    if (!position) {
      return NextResponse.json({ error: 'Seat position is required' }, { status: 400 });
    }
    
    const updatedSeat = await db.seats.update(position, selected);
    
    return NextResponse.json(updatedSeat);
  } catch (error) {
    console.error('Error updating seat selection:', error);
    return NextResponse.json({ error: 'Failed to update seat selection' }, { status: 500 });
  }
}

// PUT /api/seats/reset - Reset all seat selections
export async function PUT() {
  try {
    await db.seats.reset();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error resetting seat selections:', error);
    return NextResponse.json({ error: 'Failed to reset seat selections' }, { status: 500 });
  }
} 