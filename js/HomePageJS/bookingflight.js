var searchResultClicked = false;

// Mock API response data - simulating what an API would return
const mockFlightData = [
    {
        id: 101,
        airline_id: "air_new_zealand",
        airline_name: "Air New Zealand",
        pricing_economy_usd: "$850",
        pricing_business_usd: "$2,400"
    },
    {
        id: 102,
        airline_id: "air_nippon_airways",
        airline_name: "Air Nippon Airways",
        pricing_economy_usd: "$920",
        pricing_business_usd: "$2,650"
    },
    {
        id: 103,
        airline_id: "cathay_pacific_airways",
        airline_name: "Cathay Pacific Airways",
        pricing_economy_usd: "$780",
        pricing_business_usd: "$2,200"
    },
    {
        id: 104,
        airline_id: "etihad_airways",
        airline_name: "Etihad Airways",
        pricing_economy_usd: "$890",
        pricing_business_usd: "$2,550"
    },
    {
        id: 105,
        airline_id: "eva_air",
        airline_name: "Eva Air",
        pricing_economy_usd: "$810",
        pricing_business_usd: "$2,350"
    },
    {
        id: 106,
        airline_id: "korean_air",
        airline_name: "Korean Air",
        pricing_economy_usd: "$870",
        pricing_business_usd: "$2,500"
    },
    {
        id: 107,
        airline_id: "qantas",
        airline_name: "Qantas",
        pricing_economy_usd: "$950",
        pricing_business_usd: "$2,700"
    },
    {
        id: 108,
        airline_id: "qatar_airways",
        airline_name: "Qatar Airways",
        pricing_economy_usd: "$900",
        pricing_business_usd: "$2,600"
    },
    {
        id: 109,
        airline_id: "singapore_airlines",
        airline_name: "Singapore Airlines",
        pricing_economy_usd: "$930",
        pricing_business_usd: "$2,680"
    },
    {
        id: 110,
        airline_id: "turkish_airlines",
        airline_name: "Turkish Airlines",
        pricing_economy_usd: "$820",
        pricing_business_usd: "$2,300"
    },
    {
        id: 111,
        airline_id: "virgin_atlantic",
        airline_name: "Virgin Atlantic",
        pricing_economy_usd: "$880",
        pricing_business_usd: "$2,450"
    },
    {
        id: 112,
        airline_id: "virgin_australia",
        airline_name: "Virgin Australia",
        pricing_economy_usd: "$840",
        pricing_business_usd: "$2,380"
    }
];

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

var cards = document.getElementById('cards');
cards.style.display = "none";
var selected_airline = false;

function check_trip_type()
{
    var trip_type = document.querySelector('input[name="trip-type"]:checked').value;
    console.log(trip_type); 
    
    var return_box = document.getElementById("return_box");

    if(trip_type == "oneWay")
    {
        return_box.style.display = "none";
    }
    else if(trip_type == "roundTrip")
    {
        if(return_box.style.display == "none")
        {
            return_box.style.display = "block";
        }
    }

}

function searchFlights(){

    var trip_type = document.querySelector('input[name="trip-type"]:checked').value;
    console.log(trip_type);

    var e = document.getElementById("from-place");
    var from = e.options[e.selectedIndex].text;
    var e = document.getElementById("to-place");
    var to = e.options[e.selectedIndex].text;
    var depart_on = document.getElementById("depart_date").value;
    var return_on = document.getElementById("return_date").value;
    var adults  = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var infants = document.getElementById("infants").value;

    var e = document.getElementById("travel_class");
    var travel_class = e.options[e.selectedIndex].text;
    console.log(travel_class);

    var e = document.getElementById("preferred_airline");
    var preferred_airline = "";
    preferred_airline = e.options[e.selectedIndex].text;
    console.log(preferred_airline);
    
    // Validation: Check if from and to locations are the same
    if(from === to || from === "Select" || to === "Select") {
        alert("Please select different departure and arrival locations.");
        return;
    }
    
    // Validation: Check if departure date is selected
    if(!depart_on) {
        alert("Please select a departure date.");
        return;
    }
    
    // Validation: Check if return date is selected for round trips
    if(trip_type === "roundTrip" && !return_on) {
        alert("Please select a return date for round trip.");
        return;
    }

    get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type, adults, children, infants);
}

var count1 = 0, count2 = 0;
var elem1, elem2, elem3;


function formatDate(dateString) {
    const mydate = new Date(dateString);
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return mydate.getDate() + ' ' + months[mydate.getMonth()] + ' ' + mydate.getFullYear();
}

function get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type, adults, children, infants)
{
    cards.style.display = "block";
    
    if(preferred_airline != "Select")
    {
        // Hide additional cards when specific airline is selected
        cards.childNodes[5].style.display = "none";
        cards.childNodes[9].style.display = "none";
        
        // Find the selected airline from mock data
        const selectedAirlineData = mockFlightData.find(airline => 
            airline.airline_name === preferred_airline
        );
        
        if(selectedAirlineData) {
            document.getElementById("card-1-heading").innerHTML = selectedAirlineData.airline_name;
            
            const img1file = "./images/logos/" + selectedAirlineData.airline_id + ".png";
            
            if(count1 == 0)
            {
                elem1 = document.createElement("img");
                count1++;
            }
            
            elem1.setAttribute("src", img1file);
            elem1.setAttribute("alt", "img1");
            elem1.setAttribute("id", "img1id");
            elem1.setAttribute("class", "featured-image");
            document.getElementById("img1div").appendChild(elem1);
            document.getElementById("card-1-from").innerHTML = from;
            document.getElementById("card-1-to").innerHTML = to;
            
            if(trip_type == "roundTrip") {
                document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
                document.getElementById("card-1-to-date").innerHTML = formatDate(return_on);
                document.getElementById("card-1-schedule").innerHTML = "SCHEDULE FROM : <span id='card-1-from-date'></span> TO : <span id='card-1-to-date'></span>";
                document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
                document.getElementById("card-1-to-date").innerHTML = formatDate(return_on);
            } else {
                document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
                document.getElementById("card-1-schedule").innerHTML = "SCHEDULE : <span id='card-1-from-date'></span>";
                document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
            }
            
            if(travel_class == "Economy")
            {
                document.getElementById("card-1-price").innerHTML = selectedAirlineData.pricing_economy_usd;
            }
            else if(travel_class == "Business class")
            {
                document.getElementById("card-1-price").innerHTML = selectedAirlineData.pricing_business_usd;
            }
            
            if(trip_type == "roundTrip")
            {
                document.getElementById("card-1-trip-type").innerHTML = "Round Trip";
            }
            else if(trip_type == "oneWay")
            {
                document.getElementById("card-1-trip-type").innerHTML = "One Way";
            }
        }
    }
    else if(preferred_airline == "Select")
    {
        // Show all cards when no specific airline is selected
        cards.childNodes[5].style.display = "";
        cards.childNodes[9].style.display = "";
        
        // Shuffle the mock data and select first 3 airlines
        const shuffledFlights = shuffleArray(mockFlightData);
        const data_a = shuffledFlights[0];
        const data_b = shuffledFlights[1];
        const data_c = shuffledFlights[2];
        
        console.log(data_a.airline_id + " " + data_b.airline_id + " " + data_c.airline_id);
        
        const img1file = "./images/logos/" + data_a.airline_id + ".png";
        const img2file = "./images/logos/" + data_b.airline_id + ".png";
        const img3file = "./images/logos/" + data_c.airline_id + ".png";
        
        if(count1 == 0)
        {
            elem1 = document.createElement("img");
            elem2 = document.createElement("img");
            elem3 = document.createElement("img");
            count1++;
        }
        
        // Update first card
        elem1.setAttribute("src", img1file);
        elem1.setAttribute("alt", "img1");
        elem1.setAttribute("id", "img1id");
        elem1.setAttribute("class", "featured-image");
        document.getElementById("img1div").innerHTML = "";
        document.getElementById("img1div").appendChild(elem1);
        
        document.getElementById("card-1-heading").innerHTML = data_a.airline_name;
        document.getElementById("card-1-from").innerHTML = from;
        document.getElementById("card-1-to").innerHTML = to;
        
        if(trip_type == "roundTrip") {
            document.getElementById("card-1-schedule").innerHTML = "SCHEDULE FROM : <span id='card-1-from-date'></span> TO : <span id='card-1-to-date'></span>";
            document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
            document.getElementById("card-1-to-date").innerHTML = formatDate(return_on);
        } else {
            document.getElementById("card-1-schedule").innerHTML = "SCHEDULE : <span id='card-1-from-date'></span>";
            document.getElementById("card-1-from-date").innerHTML = formatDate(depart_on);
        }
        
        if(travel_class == "Economy")
        {
            document.getElementById("card-1-price").innerHTML = data_a.pricing_economy_usd;
        }
        else if(travel_class == "Business class")
        {
            document.getElementById("card-1-price").innerHTML = data_a.pricing_business_usd;
        }
        
        if(trip_type == "roundTrip")
        {
            document.getElementById("card-1-trip-type").innerHTML = "Round Trip";
        }
        else if(trip_type == "oneWay")
        {
            document.getElementById("card-1-trip-type").innerHTML = "One Way";
        }
        
        // Update second card
        elem2.setAttribute("src", img2file);
        elem2.setAttribute("alt", "img2");
        elem2.setAttribute("id", "img2id");
        elem2.setAttribute("class", "featured-image");
        document.getElementById("img2div").innerHTML = "";
        document.getElementById("img2div").appendChild(elem2);
        
        document.getElementById("card-2-heading").innerHTML = data_b.airline_name;
        document.getElementById("card-2-from").innerHTML = from;
        document.getElementById("card-2-to").innerHTML = to;
        
        if(trip_type == "roundTrip") {
            document.getElementById("card-2-schedule").innerHTML = "SCHEDULE FROM : <span id='card-2-from-date'></span> TO : <span id='card-2-to-date'></span>";
            document.getElementById("card-2-from-date").innerHTML = formatDate(depart_on);
            document.getElementById("card-2-to-date").innerHTML = formatDate(return_on);
        } else {
            document.getElementById("card-2-schedule").innerHTML = "SCHEDULE : <span id='card-2-from-date'></span>";
            document.getElementById("card-2-from-date").innerHTML = formatDate(depart_on);
        }
        
        if(travel_class == "Economy")
        {
            document.getElementById("card-2-price").innerHTML = data_b.pricing_economy_usd;
        }
        else if(travel_class == "Business class")
        {
            document.getElementById("card-2-price").innerHTML = data_b.pricing_business_usd;
        }
        
        if(trip_type == "roundTrip")
        {
            document.getElementById("card-2-trip-type").innerHTML = "Round Trip";
        }
        else if(trip_type == "oneWay")
        {
            document.getElementById("card-2-trip-type").innerHTML = "One Way";
        }
        
        // Update third card
        elem3.setAttribute("src", img3file);
        elem3.setAttribute("alt", "img3");
        elem3.setAttribute("id", "img3id");
        elem3.setAttribute("class", "featured-image");
        document.getElementById("img3div").innerHTML = "";
        document.getElementById("img3div").appendChild(elem3);
        
        document.getElementById("card-3-heading").innerHTML = data_c.airline_name;
        document.getElementById("card-3-from").innerHTML = from;
        document.getElementById("card-3-to").innerHTML = to;
        
        if(trip_type == "roundTrip") {
            document.getElementById("card-3-schedule").innerHTML = "SCHEDULE FROM : <span id='card-3-from-date'></span> TO : <span id='card-3-to-date'></span>";
            document.getElementById("card-3-from-date").innerHTML = formatDate(depart_on);
            document.getElementById("card-3-to-date").innerHTML = formatDate(return_on);
        } else {
            document.getElementById("card-3-schedule").innerHTML = "SCHEDULE : <span id='card-3-from-date'></span>";
            document.getElementById("card-3-from-date").innerHTML = formatDate(depart_on);
        }
        
        if(travel_class == "Economy")
        {
            document.getElementById("card-3-price").innerHTML = data_c.pricing_economy_usd;
        }
        else if(travel_class == "Business class")
        {
            document.getElementById("card-3-price").innerHTML = data_c.pricing_business_usd;
        }
        
        if(trip_type == "roundTrip")
        {
            document.getElementById("card-3-trip-type").innerHTML = "Round Trip";
        }
        else if(trip_type == "oneWay")
        {
            document.getElementById("card-3-trip-type").innerHTML = "One Way";
        }
    }
}
