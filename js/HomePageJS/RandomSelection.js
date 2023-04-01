  // Code to generate 3 random airlines from the database
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("Genenrating 3 Random Numbers between 101 and 110: ")

var a = randomNumber(101, 110);
// a = 101;
var b = randomNumber(101, 110);
while(a == b)
{
    b = randomNumber(101, 110);
}

var c = randomNumber(101,110);

while (c == b || c == a)
{   
    var c = randomNumber(101,110);
}

console.log(a + " " + b  + " " + c);

var img1 = "", img2 = "", img3 = "";

var img1file = "", img2file = "", img3file = "";

function getapi_() {

// Storing response
// const response_a = await fetch('https://sheetdb.io/api/v1/766c1w7u2454g/search?id='+a);
// const response_b = await fetch('https://sheetdb.io/api/v1/766c1w7u2454g/search?id='+b);
// const response_c = await fetch('https://sheetdb.io/api/v1/766c1w7u2454g/search?id='+c);

// // Storing data in form of JSON
// var data_a = await response_a.json();
// var data_b = await response_b.json();
// var data_c = await response_c.json();


// console.log(data_a[0]['airline_id'] + " " + data_b[0]['airline_id'] + " " + data_c[0]['airline_id']);

// img1 = data_a[0]['airline_id'];
// img2 = data_b[0]['airline_id'];
// img3 = data_c[0]['airline_id'];

// sample data for limiting api requests


img1 = "air_new_zealand";
img2 = "etihad_airways";
img3 = "eva_air";

console.log(img1 + " " + img2 + " " + img3);

img1file = "../../images/logos/"+img1+".png";
img2file = "../../images/logos/"+img2+".png";
img3file = "../../images/logos/"+img3+".png";

console.log(img1file + " " + img2file + " " + img3file);

var elem = document.createElement("img");
    elem.setAttribute("src", img1file);
    elem.setAttribute("alt", "img1");
    elem.setAttribute("id", "img1id");
    elem.setAttribute("class", "featured-image");
    document.getElementById("img1div").appendChild(elem);

    elem = document.createElement("img");
    elem.setAttribute("src", img2file);
    elem.setAttribute("alt", "img1");
    elem.setAttribute("id", "img1id");
    elem.setAttribute("class", "featured-image");
    document.getElementById("img2div").appendChild(elem);

elem = document.createElement("img");
    elem.setAttribute("src", img3file);
    elem.setAttribute("alt", "img1");
    elem.setAttribute("id", "img1id");
    elem.setAttribute("class", "featured-image");
    document.getElementById("img3div").appendChild(elem);
}

getapi_(); //using function call since aync