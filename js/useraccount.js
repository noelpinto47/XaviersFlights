
// apiurl = 'https://sheetdb.io/api/v1/mw8od9co60e23/search?active=TRUE';

var strlogin = "";

async function getapi(url) {

// Storing response
const response = await fetch(url);
                  
// Storing data in form of JSON
var data = await response.json();

// console.log(typeof data);
strlogin = JSON.stringify(data);
// console.log(strlogin);


if(strlogin == "" || strlogin == "[]")
{
    console.log("No user");
}
else
{
    console.log("User exists");
    console.log(data[0]['email']);

    if(strlogin.indexOf(data[0]['email']) >= 0 )
    {
        var emailid = data[0][['email']];
        const response2 = await fetch("https://sheetdb.io/api/v1/ydvonqq5r96vl/search?email="+emailid);

        // Storing data in form of JSON
        var data2 = await response2.json();

        // console.log(typeof data);
        strlogin2 = JSON.stringify(data2);
        console.log(data2[0]['uname']);
        document.getElementById("usernamep").innerHTML = data2[0]['uname'];

        var signinbutton =  document.getElementById('signinbutton');
        signinbutton.parentNode.removeChild(signinbutton);
        document.getElementById("myaccount").tabIndex = 0;
        document.getElementById("myaccount").style.color = "white";
        var acc = document.getElementById("myaccount");
        acc.href = "pages/AccountPage/index.html";
    }
}
}

// getapi(apiurl);


