# Xaviers Flights ✈️

<p align="center">
  <img src="images/Crest.png" alt="Xaviers Flights Logo" width="150"/>
</p>

<p align="center">
  <strong>A seamless flight booking experience for domestic and international travel</strong>
</p>

## 📋 About

**Xaviers Flights** is a modern flight booking web application developed as a final year project for B.Sc. IT degree, demonstrating advanced web development concepts and serverless architecture. The platform showcases a complete flight booking ecosystem with dynamic boarding pass generation, intelligent flight search algorithms, and a universal authentication system—all without traditional backend infrastructure.

This project explores the implementation of a **serverless-first architecture** using SheetDB.io as a RESTful API layer over Google Sheets, combined with client-side data persistence through LocalStorage. The application features real-time flight search with randomized results using the Fisher-Yates shuffle algorithm, automatic seat assignment based on travel class, and dynamic boarding pass generation with unique flight numbers and gate assignments.

Key technical implementations include ES6+ JavaScript with class-based authentication, mock API data simulation, responsive Bootstrap 4 design with custom CSS animations, and a hybrid data strategy that balances instant client-side performance with optional cloud synchronization.

## ✨ Features

### Core Functionality
- 🔍 **Smart Flight Search**: Search for one-way, round-trip, and multi-city flights with real-time validation
- 🎲 **Dynamic Flight Results**: Randomized flight suggestions from a pool of 12+ airlines
- 🌍 **International & Domestic**: Book flights to destinations worldwide
- 💺 **Class Selection**: Choose between Economy and Business class with dynamic pricing
- ✈️ **Airline Preferences**: Filter by preferred airline or view all available options

### Advanced Features
- 🎫 **Dynamic Boarding Pass Generation**: Automatic boarding pass creation with:
  - Randomized seat assignments (Economy: 20A-45F, Business: 1A-10D)
  - Unique flight numbers and gate assignments
  - Printable format with barcode visualization
- 📊 **Booking Management Dashboard**: Full-width booking tiles with:
  - Real-time booking history
  - Interactive boarding pass viewer in modal
  - Print and download capabilities
- 👤 **Universal Authentication System**: 
  - LocalStorage-based session management
  - Instant login state across all pages
  - No API delays, no page refresh required
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Green-themed interface with smooth animations and hover effects

## 🛠️ Technologies & Architecture

### Frontend Stack
- **HTML5**: Semantic markup with modern web standards
- **CSS3**: Custom styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: 
  - ES6 Classes for authentication system
  - Template literals for dynamic content
  - Arrow functions and modern syntax
  - LocalStorage API for client-side data persistence
- **Bootstrap 4**: Responsive grid system and components
- **jQuery 3.3.1**: DOM manipulation and event handling

### Backend & Data
- **Serverless Architecture**: No traditional backend required
- **SheetDB.io**: RESTful API over Google Sheets
  - Acts as a serverless database
  - Real-time data synchronization
  - No server maintenance required
- **LocalStorage**: Client-side data persistence for:
  - User authentication sessions
  - Booking history
  - Flight search cache

### Key Architecture Patterns
- **Mock API Data**: Client-side flight data generation simulating API responses
- **Singleton Pattern**: Global authentication instance
- **Observer Pattern**: Real-time UI updates on state changes
- **Fisher-Yates Shuffle**: Randomized flight order algorithm
- **Modular JavaScript**: Separated concerns (auth, booking, search)

### Analytics & Monitoring
- **Google Analytics**: User behavior tracking and insights

## 📁 Project Structure

```
XaviersFlights/
├── css/
│   ├── bootstrap.min.css        # Bootstrap framework
│   └── style.css                # Custom styles & booking cards
├── js/
│   ├── auth.js                  # Universal authentication system
│   ├── config.js                # API endpoint configuration
│   ├── main.js                  # Core utilities
│   └── HomePageJS/
│       ├── bookflight.js        # Booking logic
│       ├── bookingflight.js     # Flight search & mock data
│       └── RandomSelection.js   # Randomization utilities
├── images/
│   ├── Crest.png               # Logo (protected)
│   ├── logos/                  # Airline logos (12+ airlines)
│   ├── favicon/                # Browser icons
│   └── carouselImages/         # Homepage carousel
├── pages/
│   ├── BookingsPage/           # Booking management dashboard
│   ├── BookingsPage/           # View all bookings with modal
│   ├── RegisterPage/           # User registration & quick login
│   ├── AccountPage/            # User profile management
│   └── Flights/                # Flight listing pages
├── templates/
│   └── FlightTicketTemplate/   # Dynamic boarding pass template
├── fonts/                      # Poppins and custom fonts
├── index.html                  # Main landing page
├── .env.example                # Environment variables template
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended for full functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/noelpinto47/XaviersFlights.git
   cd XaviersFlights
   ```

2. Open the project:
   - **Simple method**: Open `index.html` directly in your web browser
   - **Recommended method**: Use a local development server

### Running with a Local Server

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## 🎯 Usage

### Quick Start Flow

1. **User Registration/Login**
   - Navigate to Register page
   - Enter your details or use "Quick Login (Demo)"
   - Automatically logged in across all pages

2. **Search for Flights**
   - Select trip type (One-way/Round-trip)
   - Choose departure and arrival cities
   - Pick travel dates
   - Select number of passengers
   - Choose travel class (Economy/Business)
   - Optionally filter by preferred airline

3. **View Results**
   - Get 3 randomized flight options (or 1 if airline specified)
   - Compare airlines, prices, and schedules
   - See real-time pricing based on selected class

4. **Book Flight**
   - Click "Book Flight" on your preferred option
   - System generates:
     - Random seat number (appropriate for class)
     - Unique flight number
     - Random gate assignment
   - Redirected to digital boarding pass

5. **Manage Bookings**
   - Visit Bookings page to see all your reservations
   - Full-width booking tiles show all details
   - Click "View Pass" to see boarding pass in modal
   - Print or download boarding passes

6. **Logout**
   - Click "Sign Out" button
   - Confirm logout
   - Redirected to homepage

## 🔧 Configuration

### Environment Variables

The project uses a centralized configuration system for API endpoints. All SheetDB API URLs are managed in `js/config.js`.

**Important**: Since this is a plain HTML/CSS/JS project without a build tool, API endpoints are defined directly in the `config.js` file. The `.env` file is included only for documentation/reference purposes.

#### Setup Instructions:

1. **To update API endpoints**: Edit `js/config.js` directly
2. **For reference**: The `.env` file documents what each API endpoint is used for
3. **For new developers**: Use `.env.example` to understand the required configuration

#### API Endpoints Used:

- **SHEETDB_AIRLINES_API** - Stores airline information and details
- **SHEETDB_AIRLINE_NAMES_API** - Used for searching airlines by name
- **SHEETDB_USERS_API** - Manages user registration and authentication
- **SHEETDB_SESSIONS_API** - Tracks active user sessions
- **SHEETDB_BOOKINGS_API** - Stores flight booking information
- **SHEETDB_ADMIN_API** - Admin panel data (optional)

### SheetDB Integration (Serverless Backend)

The project uses **SheetDB.io** as a serverless backend, eliminating the need for traditional server infrastructure:

#### Advantages of Serverless Architecture:
- ✅ **No Server Maintenance**: No need to manage servers or databases
- ✅ **Auto-Scaling**: Handles traffic automatically
- ✅ **Cost-Effective**: Pay only for API calls made
- ✅ **Real-Time Sync**: Changes in Google Sheets reflect immediately
- ✅ **Easy Setup**: No complex backend configuration
- ✅ **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)

#### Setup Your Own Instance:

1. **Create Google Sheets** for each data type:
   - `airlines_sheet` - Airline information and pricing
   - `users_sheet` - User registration data
   - `bookings_sheet` - Flight booking records
   - `sessions_sheet` - Active user sessions (optional)

2. **Connect to SheetDB.io**:
   - Visit [SheetDB.io](https://sheetdb.io)
   - Create API for each Google Sheet
   - Get API endpoint URLs

3. **Configure the Project**:
   - Update API endpoints in `js/config.js`
   - Document in `.env` file for reference

#### Client-Side Data Strategy:

The application uses a **hybrid approach**:
- **Mock Data**: Flight search uses client-side mock data for instant results
- **LocalStorage**: Authentication and bookings stored locally for speed
- **SheetDB**: Optional persistence for multi-device sync

This approach provides:
- ⚡ Lightning-fast user experience
- 🔒 Works offline for core features
- ☁️ Cloud backup when online

### Google Analytics

The project includes Google Analytics tracking. Update the tracking ID in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Noel Pinto**
- GitHub: [@noelpinto47](https://github.com/noelpinto47)
- Institution: St Xavier's College, Mumbai

## 📧 Contact

For queries or feedback, please reach out:
- Email: xaviersairline@gmail.com
- Office: 5, Mahapalika Marg, Fort, Mumbai, Maharashtra 400001
- Phone: 022-22620661

## ⚠️ Disclaimer

This is an educational project created for demonstration purposes. The logo and branding assets are protected and should not be used without permission.

## 🎨 Design Highlights

### Color Scheme
- **Primary**: #04A289 (Teal Green) - Trust and growth
- **Secondary**: #5faf8a (Light Green) - Freshness and vitality
- **Accent**: #fedebad7 (Cream) - Warmth and comfort
- **Background**: #D5ECEA (Light Cyan) - Calm and serenity

### UX Patterns
- **Instant Feedback**: Real-time form validation
- **Smooth Animations**: CSS transitions on all interactive elements
- **Progressive Disclosure**: Collapsible "More Options" section
- **Visual Hierarchy**: Clear separation of content with cards and gradients
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🚀 Performance Optimizations

- **Lazy Loading**: Images loaded on demand
- **LocalStorage Caching**: Reduces API calls
- **Minimal Dependencies**: Only essential libraries included
- **Client-Side Processing**: No server round-trips for core features
- **Optimized Assets**: Compressed images and minified CSS/JS

## 🔐 Security Considerations

- **Client-Side Validation**: Input sanitization and validation
- **No Sensitive Data Storage**: Passwords not stored in localStorage
- **HTTPS Ready**: Can be deployed with SSL/TLS
- **XSS Prevention**: Template literals properly escaped
- **CORS Configured**: API endpoints with proper CORS headers

## 🙏 Acknowledgments

- **Bootstrap** for the responsive framework
- **jQuery** for DOM manipulation
- **SheetDB.io** for serverless backend solution
- **Google Fonts** for Poppins typography
- **St Xavier's College, Mumbai** for academic support
- **Open Source Community** for inspiration and best practices

---

<p align="center">Made with ❤️ by Noel Pinto</p>
