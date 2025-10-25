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

    get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type, adults, children, infants);
}

var count1 = 0, count2 = 0;
var elem1, elem2, elem3;


async function get_airline_data(preferred_airline, from, to, depart_on, return_on, travel_class, trip_type, adults, children, infants)
{

        const response2 = await fetch(CONFIG.SHEETDB_AIRLINE_NAMES_API + "/search?airline_name=" + preferred_airline);
    
        // Storing data in form of JSON
        var data2 = await response2.json();

        // console.log(typeof data);
        strlogin2 = JSON.stringify(data2);
        
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

            var mydate = new Date(depart_on);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            var str = mydate.getDay().toString() + ' '  +  month + ' ' + mydate.getFullYear();
            document.getElementById("card-1-from-date").innerHTML = str;

            var mydate = new Date(return_on);
            var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
            var str2 = mydate.getDay().toString() + ' '  +  month + ' ' + mydate.getFullYear();
            document.getElementById("card-1-to-date").innerHTML = str2;

            if(travel_class == "Economy")
            {
                document.getElementById("card-1-price").innerHTML = data2[0]['pricing_economy_usd'];
            }else if(travel_class=="Business class"){
                document.getElementById("card-1-price").innerHTML = data2[0]['pricing_business_usd'];
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

            const response_a = await fetch(CONFIG.SHEETDB_AIRLINES_API + '/search?id=' + a);
            const response_b = await fetch(CONFIG.SHEETDB_AIRLINES_API + '/search?id=' + b);
            const response_c = await fetch(CONFIG.SHEETDB_AIRLINES_API + '/search?id=' + c);

            // Storing data in form of JSON
            var data_a = await response_a.json();
            var data_b = await response_b.json();
            var data_c = await response_c.json();


            console.log(data_a[0]['airline_id'] + " " + data_b[0]['airline_id'] + " " + data_c[0]['airline_id']);

            img1 = data_a[0]['airline_id'];
            img2 = data_b[0]['airline_id'];
            img3 = data_c[0]['airline_id'];
            
            img1file = "../../images/logos/"+img1+".png";
            img2file = "../../images/logos/"+img2+".png";
            img3file = "../../images/logos/"+img3+".png";

            if(count1 == 0)
            { 
                elem1 = document.createElement("img");
                elem2 = document.createElement("img");
                elem3 = document.createElement("img");
               
                count1++;
            }
            count1++;

            elem1.setAttribute("src", img1file);
            elem1.setAttribute("alt", "img1");
            elem1.setAttribute("id", "img1id");
            elem1.setAttribute("class", "featured-image");
            if(count1 == 2)
             document.getElementById("img1div").appendChild(elem1);
           
             document.getElementById("card-1-from").innerHTML = from;
            document.getElementById("card-1-to").innerHTML = to;
            document.getElementById("card-1-from-date").innerHTML = depart_on;
            document.getElementById("card-1-to-date").innerHTML = return_on;

            elem2.setAttribute("src", img2file);
            elem2.setAttribute("alt", "img2");
            elem2.setAttribute("id", "img2id");
            elem2.setAttribute("class", "featured-image");

            elem3.setAttribute("src", img3file);
            elem3.setAttribute("alt", "img2");
            elem3.setAttribute("id", "img2id");
            elem3.setAttribute("class", "featured-image");
        }

        


}