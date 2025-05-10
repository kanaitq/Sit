// Shared state between API route handlers
// In a real application, this would be stored in a database

// Store the guest count and reset date in a shared object
export const guestData = {
  count: 0,
  lastReset: new Date()
};

// Function to check and reset if midnight has passed
export const checkAndResetIfNeeded = (): void => {
  const currentDate = new Date().toDateString();
  const lastResetDate = guestData.lastReset.toDateString();
  
  if (currentDate !== lastResetDate) {
    // It's a new day, reset the count
    guestData.count = 0;
    guestData.lastReset = new Date();
    console.log('Guest count reset at midnight');
  }
}; 