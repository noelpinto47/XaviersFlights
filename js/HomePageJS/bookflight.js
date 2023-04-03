
var strlogin = "";

async function bookingapi(preferred_airline, trip_type) {

fetch('https://sheetdb.io/api/v1/tggtw9qaihl6s', {
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

function book_flight(){

    var currentWindowURL = window.location.href;
    var bookingURL = currentWindowURL.substring(0,currentWindowURL.indexOf("/index.html"));
    
    bookingURL += '/templates/FlightTicketTemplate/index.html';

    
    var e = document.getElementById("preferred_airline");
    var preferred_airline = "";
    preferred_airline = e.options[e.selectedIndex].text;
    var trip_type = "";

    var trip_type = document.querySelector('input[name="trip-type"]:checked').value;
    if(trip_type == "roundTrip")
    {
        trip_type = "Round Trip";
    }
    else if(trip_type == "oneWay")
    {
        trip_type = "One Way";
    }

    bookingapi(preferred_airline, trip_type);

    alert("Flight successfully booked!");


    // bookingURL 
    window.location = bookingURL;
}

