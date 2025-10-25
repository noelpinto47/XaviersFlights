# SheetDB API Endpoints Documentation

This document lists all SheetDB API endpoints used in the XaviersFlights project and their purposes.

## Configuration Location

All API endpoints are centrally managed in:
- **Primary Config**: `js/config.js`
- **Environment File**: `.env` (for reference/documentation)
- **Template**: `.env.example` (for new setups)

## API Endpoints

### 1. Airlines Database API
**Variable**: `SHEETDB_AIRLINES_API`  
**URL**: `https://sheetdb.io/api/v1/766c1w7u2454g`  
**Purpose**: Stores comprehensive airline information including airline IDs, names, logos, and pricing  
**Used In**:
- `js/HomePageJS/RandomSelection.js` (commented out)
- `js/HomePageJS/bookingflight.js` (lines 142-144)
- `pages/BookingFlightPage/index.html` (commented out, lines 90-92)

### 2. Airline Names API
**Variable**: `SHEETDB_AIRLINE_NAMES_API`  
**URL**: `https://sheetdb.io/api/v1/el1a9b9s02z8h`  
**Purpose**: Used for searching airlines by name and retrieving airline-specific details  
**Used In**:
- `js/HomePageJS/bookingflight.js` (line 63)

### 3. Users API
**Variable**: `SHEETDB_USERS_API`  
**URL**: `https://sheetdb.io/api/v1/ydvonqq5r96vl`  
**Purpose**: Manages user registration, authentication, and profile data  
**Used In**:
- `js/useraccount.js` (line 30)
- `js/RegistrationJS/registerUser.js` (lines 18, 97)
- `pages/SignInPage/index.html` (lines 144, 183, 199)
- `pages/AccountPage/index.html` (line 190)

### 4. Sessions API
**Variable**: `SHEETDB_SESSIONS_API`  
**URL**: `https://sheetdb.io/api/v1/mw8od9co60e23`  
**Purpose**: Tracks active user sessions and login status  
**Used In**:
- `js/useraccount.js` (line 1)
- `pages/SignInPage/index.html` (lines 183, 199)
- `pages/AccountPage/index.html` (lines 177, 214)

### 5. Bookings API
**Variable**: `SHEETDB_BOOKINGS_API`  
**URL**: `https://sheetdb.io/api/v1/tggtw9qaihl6s`  
**Purpose**: Stores flight booking information and booking history  
**Used In**:
- `js/HomePageJS/bookflight.js` (line 6)

### 6. Admin Panel API (Legacy/Optional)
**Variable**: `SHEETDB_ADMIN_API`  
**URL**: `https://sheetdb.io/api/v1/60kbutnb8spow`  
**Purpose**: Legacy admin panel functionality (currently commented out)  
**Used In**:
- `pages/AdminPanel/index.html` (line 190, commented out)
- `pages/AdminPage/index.html` (line 191, commented out)

## Usage Pattern

All API calls follow this pattern:

```javascript
// Example: Fetching user data
const response = await fetch(CONFIG.SHEETDB_USERS_API + '/search?email=' + email);
const data = await response.json();
```

## Migration Notes

All hardcoded SheetDB URLs have been replaced with references to the CONFIG object:
- ❌ Before: `'https://sheetdb.io/api/v1/ydvonqq5r96vl'`
- ✅ After: `CONFIG.SHEETDB_USERS_API`

## Security Note

The `.env` file containing actual API keys should be:
1. Kept private and never committed to public repositories
2. Added to `.gitignore` (already done)
3. Shared securely with team members when needed

For new developers, use `.env.example` as a template and obtain the actual API keys from the project administrator.

## Updating API Endpoints

To change an API endpoint:

1. Update the value in `js/config.js`
2. Optionally update the `.env` file for documentation
3. Test all affected features thoroughly

## API Endpoints by Feature

### User Management
- Registration: `SHEETDB_USERS_API`
- Login: `SHEETDB_USERS_API` + `SHEETDB_SESSIONS_API`
- Profile: `SHEETDB_USERS_API`
- Logout: `SHEETDB_SESSIONS_API`

### Flight Search & Booking
- Search Airlines: `SHEETDB_AIRLINES_API` + `SHEETDB_AIRLINE_NAMES_API`
- Book Flight: `SHEETDB_BOOKINGS_API`
- View Bookings: `SHEETDB_BOOKINGS_API`

### Session Management
- Active Sessions: `SHEETDB_SESSIONS_API`
- User Status: `SHEETDB_SESSIONS_API`
