var isUser = false;
var emailUni = "";

function userVerified(){
    isUser = true;
    console.log("User sucessfully logged in");

    console.log(emailUni);

    // console.log(typeof window.location.href);
    // if user is logged in
    alert("User sucessfully logged in");

    var currentWindowURL = window.location.href;

    // console.log(currentWindowURL);
    // console.log(currentWindowURL.indexOf("/pages"));

    var homeURL = currentWindowURL.substring(0,currentWindowURL.indexOf("/pages")+1);
    homeURL += "/index.html";


    window.location = homeURL;


}


