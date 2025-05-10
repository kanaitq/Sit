# Vercel Deployment Guide

This guide provides instructions for deploying the Food Selection App to Vercel with server-side storage and automatic midnight reset functionality.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A GitHub repository with your code
- A PostgreSQL database (you can use Vercel Postgres or any other PostgreSQL provider)

## Step 1: Set Up Your Database

1. Create a PostgreSQL database. You can use:
   - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
   - [Neon](https://neon.tech)
   - [Supabase](https://supabase.com)
   - Any other PostgreSQL provider

2. Get your database connection string, which should look like:
   ```
   postgresql://username:password@hostname:port/database
   ```

## Step 2: Deploy to Vercel

1. Push your code to a GitHub repository.

2. Log in to your Vercel account and click "New Project".

3. Import your GitHub repository.

4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: `seating` (if your code is in a subdirectory)
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Add the following environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `CRON_SECRET`: A secure random string for authorizing cron jobs

6. Click "Deploy".

## Step 3: Run Database Migrations

After the initial deployment, you need to run the Prisma migrations and seed the database:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Log in to Vercel CLI:
   ```
   vercel login
   ```

3. Link your local project to the Vercel project:
   ```
   cd seating
   vercel link
   ```

4. Pull the environment variables:
   ```
   vercel env pull
   ```

5. Run the database migrations and seed:
   ```
   npx prisma migrate deploy
   npx prisma db seed
   ```

## Step 4: Verify Cron Job Setup

The application includes a cron job that runs at midnight Singapore time (16:00 UTC) to reset all selections. Vercel automatically sets up this cron job based on the configuration in `vercel.json`.

To verify the cron job is working:

1. Go to your Vercel project dashboard.
2. Navigate to "Settings" > "Cron Jobs".
3. You should see a cron job configured to run at 16:00 UTC daily, pointing to the `/api/cron/reset` endpoint.

## Troubleshooting

1. **Database Connection Issues**:
   - Verify your `DATABASE_URL` is correct in the Vercel environment variables.
   - Make sure your database allows connections from Vercel's IP addresses.

2. **Cron Job Not Running**:
   - Check the Vercel logs for any errors related to the cron job.
   - Verify the cron job is properly configured in the Vercel dashboard.
   - Make sure the `CRON_SECRET` environment variable is set.

3. **Data Not Persisting**:
   - Check the database connection and migrations.
   - Verify the API endpoints are working correctly by testing them directly.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs) 