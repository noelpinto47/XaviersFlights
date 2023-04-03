var searchResultClicked = false;


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

    var from = document.getElementById("from_place").value;
    var to = document.getElementById("to_place").value;
    var depart_on = document.getElementById("depart_date").value;
    var return_on = document.getElementById("return_date").value;
    var adults  = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var infants = document.getElementById("infants").value;

    var e = document.getElementById("travel_class");
    var value = e.value;
    var travel_class = e.options[e.selectedIndex].text;
    console.log(travel_class);

    var e = document.getElementById("preferred_airline");
    var value = e.value;
    var preferred_airline = "";
    preferred_airline = e.options[e.selectedIndex].text;
    console.log(preferred_airline);

    get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type);

    console.log(cards.childNodes[5].style.display);

    

    console.log(from, to, depart_on, return_on, adults, children, infants);
}

var count1 = 0, count2 = 0;
var elem1;


async function get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type)
{

        const response2 = await fetch("https://sheetdb.io/api/v1/el1a9b9s02z8h/search?airline_name="+preferred_airline);
    
        // Storing data in form of JSON
        var data2 = await response2.json();

        // console.log(typeof data);
        strlogin2 = JSON.stringify(data2);
        
        var card = cards.childNodes;
        cards.style.display="block";
        
        if(preferred_airline != "Select")
        {
            cards.childNodes[5].style.display = "none";
            cards.childNodes[9].style.display = "none";
            document.getElementById("card-1-heading").innerHTML = data2[0]['airline_name'];
            
        var img1file = "../../images/logos/" + data2[0]['airline_id'] + ".png";        

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
            document.getElementById("card-1-from-date").innerHTML = depart_on;
            document.getElementById("card-1-to-date").innerHTML = return_on;

            if(travel_class == "Economy")
            {
                document.getElementById("card-1-price").innerHTML = data2[0]['pricing_economy_usd'];
            }else if(travel_class=="Business class"){
                document.getElementById("card-1-price").innerHTML = data2[0]['pricing_business_usd'];
            }

            document.getElementById("card-1-trip-type").innerHTML = trip_type;

        }
        else if(preferred_airline == "Select")
        { 
            cards.childNodes[5].style.display = "";
            cards.childNodes[9].style.display = "";

            var a = randomNumber(101, 112);
            var b = randomNumber(101, 112);
            while(a == b)
            {
                b = randomNumber(101, 112);
            }

            var c = randomNumber(101,112);
            while (c == b || c == a)
            {   
                var c = randomNumber(101,112);
            }

            
            img1 = "air_new_zealand";
            img2 = "etihad_airways";
            img3 = "eva_air";
            
            img1file = "../../images/logos/"+img1+".png";
            img2file = "../../images/logos/"+img2+".png";
            img3file = "../../images/logos/"+img3+".png";

            if(count2 == 0)
            { 
                count2++;
            }

            elem1.setAttribute("src", img1file);
            elem1.setAttribute("alt", "img1");
            elem1.setAttribute("id", "img1id");
            elem1.setAttribute("class", "featured-image");
            document.getElementById("img1div").appendChild(elem1);
            document.getElementById("card-1-from").innerHTML = from;
            document.getElementById("card-1-to").innerHTML = to;
            document.getElementById("card-1-from-date").innerHTML = depart_on;
            document.getElementById("card-1-to-date").innerHTML = return_on;

           
            elem1.setAttribute("src", img2file);
            elem1.setAttribute("alt", "img1");
            elem1.setAttribute("id", "img1id");
            elem1.setAttribute("class", "featured-image");
            document.getElementById("img2div").appendChild(elem1);

            
            elem1.setAttribute("src", img3file);
            elem1.setAttribute("alt", "img1");
            elem1.setAttribute("id", "img1id");
            elem1.setAttribute("class", "featured-image");
            document.getElementById("img3div").appendChild(elem1);

        }

        


}