export interface Seat {
  id: number;
  name: string;
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const seats: Seat[] = [
  {
    id: 1,
    name: 'John',
    position: 'top-left'
  },
  {
    id: 2,
    name: 'Emily',
    position: 'top-center'
  },
  {
    id: 3,
    name: 'Michael',
    position: 'top-right'
  },
  {
    id: 4,
    name: 'Sophia',
    position: 'bottom-left'
  },
  {
    id: 5,
    name: 'Daniel',
    position: 'bottom-center'
  },
  {
    id: 6,
    name: 'Olivia',
    position: 'bottom-right'
  }
]; 