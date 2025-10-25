/**
 * Configuration file for SheetDB API endpoints
 * 
 * This file loads API endpoints from environment variables or falls back to defaults.
 * For production, update the .env file with your actual SheetDB API keys.
 */

// Note: In a browser environment, we need to manually load env variables
// For now, we'll define them directly here. In production, you'd want to use
// a build tool like webpack or vite to inject these from .env

const CONFIG = {
    // Airlines Database API (for fetching airline information)
    SHEETDB_AIRLINES_API: 'https://sheetdb.io/api/v1/766c1w7u2454g',
    
    // Airline Names API (for searching by airline name)
    SHEETDB_AIRLINE_NAMES_API: 'https://sheetdb.io/api/v1/el1a9b9s02z8h',
    
    // User Registration/Login API
    SHEETDB_USERS_API: 'https://sheetdb.io/api/v1/ydvonqq5r96vl',
    
    // Active Sessions API (for tracking logged-in users)
    SHEETDB_SESSIONS_API: 'https://sheetdb.io/api/v1/mw8od9co60e23',
    
    // Bookings API (for flight bookings)
    SHEETDB_BOOKINGS_API: 'https://sheetdb.io/api/v1/tggtw9qaihl6s',
    
    // Admin Panel API (legacy/optional)
    SHEETDB_ADMIN_API: 'https://sheetdb.io/api/v1/60kbutnb8spow'
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// For Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
