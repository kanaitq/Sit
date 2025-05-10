# Seating Application

A Next.js application for managing seat and food selections for guests, with features like a real-time guest counter, interactive seat selection, food preferences selection, and daily automatic reset.

## Features

- **Interactive Seat Selection**: Users can select/deselect seats around a virtual table
- **Food Preferences**: Selection of food options with visual feedback
- **Real-time Guest Counter**: Track additional guests beyond those seated
- **Automatic Reset**: Cron job resets selections daily at midnight (Singapore time)
- **Responsive Design**: Works on mobile and desktop devices
- **Offline Capability**: Fallback to localStorage when offline

## Technical Architecture

### Frontend

- Next.js 14 (App Router)
- React components with memoization for performance
- Tailwind CSS for styling
- Client-side state management with localStorage backup

### Backend

- Next.js API routes (database-independent)
- Vercel Cron for scheduled resets

### Data Layer

The application uses a database-independent approach through an abstraction layer:

#### Data Access Layer (`lib/db.ts`)

The heart of our database independence is the `db` object that provides a consistent interface for data operations:

```typescript
export const db = {
  food: {
    getAll: () => {...},
    update: (id, selected) => {...},
    reset: () => {...}
  },
  seats: {
    getAll: () => {...},
    update: (position, selected) => {...},
    reset: () => {...}
  },
  guests: {
    get: () => {...},
    update: (count) => {...},
    reset: () => {...}
  }
}
```

This allows the application to work with any database backend by simply implementing these interfaces.

## API Endpoints

### `/api/seats`
- `GET` - Retrieves all seat selections
- `POST` - Updates a seat selection status
- `PUT` - Resets all seat selections

### `/api/food`
- `GET` - Retrieves all food options with selection status
- `POST` - Updates a food option's selection status
- `PUT` - Resets all food selections

### `/api/guests`
- `GET` - Retrieves current guest count and last reset time
- `POST` - Updates the guest count

### `/api/guests/reset`
- `PUT` - Resets the guest count to 0

### `/api/reset`
- `GET` - Retrieves the last reset time
- `POST` - Performs a complete reset of all data

### `/api/cron/reset`
- `GET` - Automatic reset endpoint called by Vercel Cron

## Database Independence

The application implements a database-independent architecture:

1. **Abstraction Layer**: All database operations go through the `db` object in `lib/db.ts`
2. **Memory Store**: The current implementation uses an in-memory store with the following structure:
   ```typescript
   const memoryStore = {
     foodOptions: new Map<string, FoodOption>(),
     seatSelections: new Map<string, boolean>(),
     guestData: { count: 0, lastReset: new Date().toISOString() }
   }
   ```
3. **API Routes**: All API routes use the `db` object instead of directly accessing any database
4. **Frontend Storage**: The `storage.ts` utility provides client-side caching and localStorage fallback

To switch databases, only the implementation of the `db` object functions needs to change, while the rest of the application remains the same.

## Local Development

```bash
npm install
npm run dev
```

## Deployment

The application is ready to be deployed on Vercel with the following features:

1. Push to GitHub
2. Connect to Vercel
3. Set up a Cron job for `/api/cron/reset` to run at midnight Singapore time

## Environment Variables

- `RESET_AUTH_TOKEN` - Token for authorizing cron job resets (required in production)

## Error Handling

The application includes comprehensive error handling:

- Error boundaries for component failures
- Network status detection
- Retry logic for API calls
- Graceful degradation to localStorage

## Reset Functionality

Data is automatically reset at midnight Singapore time (GMT+8). You can also manually reset:

- Seat selections via the "Reset Seats" button
- Food selections via the "Clear All" button

## Troubleshooting

### Common Issues

1. **PowerShell "&& operator error**:
   - Use the `run-dev.cmd` file instead
   - Or run the commands separately: first `cd seating`, then `npm run dev`

2. **package.json not found**:
   - Make sure you're in the correct directory (seating folder)
   - Use the `run-dev.cmd` file which automatically navigates to the correct directory

3. **Network errors or API failures**:
   - The application will automatically fall back to localStorage
   - Check the network status indicator in the bottom right corner

4. **Visual glitches**:
   - Try clearing your browser cache
   - Ensure your browser is up to date

## License

MIT

## Deployment Instructions

### Vercel Deployment

For a successful deployment to Vercel, follow these steps:

1. Make sure you have the following environment variables set in your Vercel project settings:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/dummy_db
   ```
   (This is a placeholder and won't be used as we're using the in-memory implementation)

2. Add the following build settings in your Vercel project:
   - Framework Preset: Next.js
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install

3. Deploy using the Vercel CLI or connect your GitHub repository to Vercel.

### Local Development

To run the application locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Application Features

- Seat selection with server synchronization
- Additional guest tracking with automatic midnight reset
- Food selection with optimized layout for better readability
- Responsive design that works across device sizes
- Comprehensive error handling and recovery
- Cross-browser compatibility

