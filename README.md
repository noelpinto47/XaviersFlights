# Xaviers Flights ✈️

<p align="center">
  <img src="images/Crest.png" alt="Xaviers Flights Logo" width="150"/>
</p>

<p align="center">
  <strong>A seamless flight booking experience for domestic and international travel</strong>
</p>

## 📋 About

Xaviers Flights is a commercial flight booking web application that enables travelers to book domestic and international flights with ease. The platform provides a user-friendly interface for searching flights, managing bookings, and enjoying a hassle-free travel experience.

## ✨ Features

- 🔍 **Flight Search**: Search for one-way, round-trip, and multi-city flights
- 🌍 **International & Domestic**: Book flights to destinations worldwide
- 👤 **User Accounts**: Register and manage your personal account
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- 💺 **Class Selection**: Choose between Economy and Business class
- ✈️ **Airline Preferences**: Select your preferred airline
- 📊 **Booking Management**: View and track your flight bookings
- 📧 **Email Integration**: Email validation and notifications

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 4
- **Libraries**: jQuery 3.3.1
- **Database**: SheetDB.io (for data storage)
- **Analytics**: Google Analytics
- **Tools**: Email validation, responsive design patterns

## 📁 Project Structure

```
XaviersFlights/
├── css/                  # Stylesheets
├── js/                   # JavaScript files
│   ├── main.js
│   ├── userlogin.js
│   ├── useraccount.js
│   └── HomePageJS/
├── images/              # Images and assets
│   ├── Crest.png       # Logo (protected)
│   ├── favicon/
│   └── carouselImages/
├── pages/              # Additional pages
│   ├── BookingsPage/
│   ├── Flights/
│   └── RegisterPage/
├── templates/          # HTML templates
├── data/              # Data files
├── fonts/             # Custom fonts
├── index.html         # Main landing page
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

1. **Search for Flights**: Use the search form on the homepage to find available flights
2. **Select Trip Type**: Choose between one-way, round-trip, or multi-city
3. **Enter Details**: Fill in departure/arrival cities, dates, and passenger information
4. **Choose Preferences**: Select class of travel and preferred airline
5. **Book Flight**: Review search results and book your preferred flight
6. **Manage Bookings**: View your bookings in the Bookings section

## 🔧 Configuration

### Environment Variables

The project uses a centralized configuration system for API endpoints. All SheetDB API URLs are managed through:

1. **`.env` file** - Contains your actual API keys (not tracked in git)
2. **`js/config.js`** - Loads and provides API endpoints to the application
3. **`.env.example`** - Template file showing required variables

#### Setup Instructions:

1. The `.env` file already contains the current API endpoints
2. To use your own SheetDB APIs:
   - Copy `.env.example` to create a new `.env` file
   - Replace the placeholder values with your actual SheetDB API endpoints
   - Update the values in `js/config.js` to match your `.env` file

#### API Endpoints Used:

- **SHEETDB_AIRLINES_API** - Stores airline information and details
- **SHEETDB_AIRLINE_NAMES_API** - Used for searching airlines by name
- **SHEETDB_USERS_API** - Manages user registration and authentication
- **SHEETDB_SESSIONS_API** - Tracks active user sessions
- **SHEETDB_BOOKINGS_API** - Stores flight booking information
- **SHEETDB_ADMIN_API** - Admin panel data (optional)

### SheetDB Integration

The project uses SheetDB.io for data storage. To set up your own instance:

1. Create Google Sheets for each data type (users, bookings, airlines, etc.)
2. Connect each sheet to SheetDB.io to get API endpoints
3. Update the API endpoints in `js/config.js`
4. Optionally update the `.env` file for documentation

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

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- jQuery for DOM manipulation
- SheetDB.io for data storage solution
- St Xavier's College, Mumbai for academic support

---

<p align="center">Made with ❤️ by Noel Pinto</p>
