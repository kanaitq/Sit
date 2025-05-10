export interface SeatProps {
  name: string;
  position: 'top' | 'bottom';
  seatId: string;
}

export interface TableProps {
  seats: {
    id: number;
    name: string;
    position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  }[];
}

export interface GuestCounterProps {
  maxGuests?: number;
  defaultValue?: number;
} 