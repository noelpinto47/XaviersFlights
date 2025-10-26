
var strlogin = "";

async function bookingapi(preferred_airline, trip_type) {

fetch(CONFIG.SHEETDB_BOOKINGS_API, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': "INCREMENT",
                'booking_status': "Booked",
                'boarding_pass_number': "E14KJS",
                'airline_name': preferred_airline,
                'travel_type': trip_type,
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));


}

function generateSeatNumber(travelClass) {
    // Economy: rows 20-45, seats A-F
    // Business: rows 1-10, seats A-D
    let row, seat;
    
    if(travelClass === "Economy") {
        row = Math.floor(Math.random() * 26) + 20; // 20-45
        seat = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A-F
    } else {
        row = Math.floor(Math.random() * 10) + 1; // 1-10
        seat = String.fromCharCode(65 + Math.floor(Math.random() * 4)); // A-D
    }
    
    return row + seat;
}

function generateFlightNumber() {
    // Generate flight number like X3-65C3
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 90) + 10;
    const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));
    const num3 = Math.floor(Math.random() * 9) + 1;
    
    return `${letter1}${num1}-${num2}${letter2}${num3}`;
}

function generateGate() {
    // Generate gate like 11B
    const num = Math.floor(Math.random() * 50) + 1;
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 6)); // A-F
    return num + letter;
}

function book_flight(cardNumber){

    var currentWindowURL = window.location.href;
    var bookingURL = currentWindowURL.substring(0,currentWindowURL.indexOf("/index.html"));
    
    bookingURL += '/templates/FlightTicketTemplate/index.html';

    // Get flight details from the selected card
    var airline = document.getElementById(`card-${cardNumber}-heading`).innerHTML;
    var from = document.getElementById(`card-${cardNumber}-from`).innerHTML;
    var to = document.getElementById(`card-${cardNumber}-to`).innerHTML;
    var fromDate = document.getElementById(`card-${cardNumber}-from-date`).innerHTML;
    var price = document.getElementById(`card-${cardNumber}-price`).innerHTML;
    var tripType = document.getElementById(`card-${cardNumber}-trip-type`).innerHTML;
    
    // Get travel class
    var e = document.getElementById("travel_class");
    var travel_class = e.options[e.selectedIndex].text;
    
    // Get passenger details from form
    var passengerName = document.getElementsByName("passport_id")[0].value || "Passenger Name";
    
    // Generate seat number based on class
    var seatNumber = generateSeatNumber(travel_class);
    var flightNumber = generateFlightNumber();
    var gate = generateGate();
    
    // Store booking data in localStorage
    var bookingData = {
        airline: airline,
        from: from,
        to: to,
        fromDate: fromDate,
        price: price,
        tripType: tripType,
        travelClass: travel_class,
        passengerName: passengerName,
        seatNumber: seatNumber,
        flightNumber: flightNumber,
        gate: gate
    };
    
    // Store individual booking data for boarding pass
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Add to all bookings array
    var allBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    allBookings.push(bookingData);
    localStorage.setItem('allBookings', JSON.stringify(allBookings));
    
    bookingapi(airline, tripType);

    alert("Flight successfully booked!");

    // Navigate to boarding pass
    window.location = bookingURL;
}

