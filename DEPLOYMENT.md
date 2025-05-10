# Dinner Menu Planner - Deployment Guide

This guide provides instructions for deploying the Dinner Menu Planner application to a production environment.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Building for Production

To build the application for production deployment:

1. Navigate to the project directory:
   ```
   cd seating
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the application:
   ```
   npm run build
   ```

4. The build artifacts will be stored in the `.next` directory.

## Deployment Options

### Option 1: Self-hosted Node.js Server

1. After building the application, start the production server:
   ```
   npm run start
   ```
   
   This will start the application on port 3000 by default. You can change the port by setting the `PORT` environment variable:
   ```
   PORT=8080 npm run start
   ```

2. For a proper production setup, use a process manager like PM2:
   ```
   npm install -g pm2
   pm2 start npm --name "dinner-menu-planner" -- start
   ```

### Option 2: Vercel (Recommended)

The easiest way to deploy this Next.js application is to use Vercel:

1. Create an account on [Vercel](https://vercel.com) if you don't have one.
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Deploy the application:
   ```
   vercel
   ```
   
   Or simply connect your GitHub repository to Vercel for automatic deployments.

### Option 3: Static Export

If you prefer a static site (without server-side rendering):

1. Add the export script to package.json:
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```
2. Run the export command:
   ```
   npm run export
   ```
3. The static files will be in the `out` directory, which can be deployed to any static hosting service like Netlify, GitHub Pages, or Amazon S3.

## Environment Variables

No environment variables are required for basic functionality.

## Auto-reset Functionality

The application is designed to automatically reset all selections at midnight Singapore time (UTC+8). This functionality works client-side and relies on the browser's JavaScript execution.

## Troubleshooting

- **Time display issues**: The Singapore time display relies on the client's browser supporting the Intl API with proper timezone data. If users report issues with time display, they may need to update their browser.
- **Auto-reset not working**: The auto-reset at midnight only works while the app is open in a browser tab. For a more robust solution, consider implementing a server-side scheduled task.

## Additional Notes

- This application uses client-side localStorage to persist user selections. Data will be lost if users clear their browser data.
- For a multi-user production environment, consider implementing a backend database for data persistence. 