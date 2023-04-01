var searchResultClicked = false;


var cards = document.getElementById('cards');
cards.style.display = "none";

function searchFlights(){
    
    cards.style.display="block";

    var trip_type = document.querySelector('input[name="trip-type"]:checked').value;
    console.log(trip_type);

    var from = document.getElementById("from_place").value;
    var to = document.getElementById("to_place").value;
    var depart_on = document.getElementById("depart_date").value;
    var return_on = document.getElementById("return_date").value;
    var adults  = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var infants = document.getElementById("infants").value;

    // var travel_class = 
    // var preference = 

    console.log(from, to, depart_on, return_on, adults, children, infants);


    var count = 0;

    if(from == "")
    {
        alert("Enter boarding airport");
    }
    if(to == "")
    {
        alert("Enter destination airport");
    }
    if(depart_on  == "")
    {
        alert("Departure Date not entered");
    }
    if(return_on == "")
    {
        alert("Return date not entered");
    }


}