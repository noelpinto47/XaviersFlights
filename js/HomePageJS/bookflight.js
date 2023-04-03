

function book_flight(){

    var currentWindowURL = window.location.href;
    var bookingURL = currentWindowURL.substring(0,currentWindowURL.indexOf("/index.html"));
    
    bookingURL += '/pages/BookingsPage/index.html';

    alert("Flight successfully booked!");
    
    window.location = bookingURL;
}

