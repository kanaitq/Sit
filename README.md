# Food Selection App

A web application for managing food selections and seat assignments with offline support.

## Features

- Seat selection with interactive UI
- Food option selection
- Automatic midnight reset
- Works offline with localStorage fallback
- Error handling and recovery
- Singapore time display

## Development

### Prerequisites

- Node.js 16+ and npm

### Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

#### Windows (PowerShell or Command Prompt)

You can use one of the following methods:

1. Using the Command Prompt launcher (simplest option):
```
run-dev.cmd
```

2. Using the PowerShell script:
```powershell
.\dev.ps1
```

3. Using the batch file:
```
.\dev.bat
```

4. Using separate commands (if you have issues with the scripts):
```powershell
cd seating
npm run dev
```

#### macOS/Linux

You can use one of the following methods:

1. Using the shell script (simplest option):
```bash
chmod +x run-dev.sh  # Make it executable (first time only)
./run-dev.sh
```

2. Using separate commands:
```bash
cd seating
npm run dev
```

### Building for Production

```bash
npm run build
```

### Running in Production Mode

```bash
npm start
```

## Offline Functionality

The application is designed to work offline by:

1. First attempting to use the API endpoints
2. Falling back to localStorage if API calls fail
3. Showing network status indicators
4. Automatically syncing when back online

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

