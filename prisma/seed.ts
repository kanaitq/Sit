import { PrismaClient } from '@prisma/client';
import { initialFoodOptions } from '../src/data/foodOptions';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');
  
  // Seed food options
  console.log('Seeding food options...');
  for (const option of initialFoodOptions) {
    await prisma.foodOption.upsert({
      where: { id: option.id },
      update: option,
      create: option,
    });
  }
  console.log('Food options seeded successfully.');
  
  // Seed seat positions
  console.log('Seeding seat positions...');
  const seatPositions = ['top', 'topRight', 'bottomRight', 'bottom', 'bottomLeft', 'topLeft'];
  for (const position of seatPositions) {
    await prisma.seatSelection.upsert({
      where: { position },
      update: { position, selected: false },
      create: { position, selected: false },
    });
  }
  console.log('Seat positions seeded successfully.');
  
  // Initialize reset tracker
  console.log('Initializing reset tracker...');
  await prisma.resetTracker.upsert({
    where: { id: 'singleton' },
    update: { lastReset: new Date() },
    create: { id: 'singleton', lastReset: new Date() },
  });
  console.log('Reset tracker initialized successfully.');
  
  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 