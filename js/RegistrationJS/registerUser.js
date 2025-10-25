
var fname = "", uname = "", email = "", password="", confirm_password = "", phone_number="", gender="";


document.querySelector('#button-1').addEventListener('click', function(){ 
  
  console.log("click detected");
  fname = document.getElementById("fname").value;
  uname = document.getElementById("uname").value;
  email = document.getElementById("email").value;
  phone_number = document.getElementById("phone_number").value;
  password = document.getElementById("password").value;
  confirm_password = document.getElementById("confirm_password").value;
  var ele = document.getElementsByName("gender");

  // api url
  const api_url = 
        CONFIG.SHEETDB_USERS_API + "/search?email=" + email;
    
  // Defining async function
  async function getapi(url) {
      
      // Storing response
      const response = await fetch(url);
      
      // Storing data in form of JSON
      var data = await response.json();
      // console.log(typeof data);
      str = JSON.stringify(data);
      console.log(str);

      if (str.indexOf(email) >= 0)
      {

          var currentWindowURL = window.location.href;
          var homeURL = currentWindowURL.substring(0,currentWindowURL.indexOf("/pages")+1);
          
        if(confirm("Email already exists in database. Please sign in."))
        {
        }
        else{
          homeURL += "/pages/RegisterPage/index.html";
          window.location = homeURL;
        }
      }
      else{

          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            {
              if(i == 0)
              {
                gender = "male";
              }
              else if(i == 1)
              {
                gender = "female";
              }
              else if(i == 2)
              {
                gender = "other";
              }
            }
            
        }
      
      
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

        var emailValid = false;
        if(validateEmail(email)){
          console.log("email valid");
          emailValid = true;
        }
        else{
          console.log("invalid email");
        }

  if(password.localeCompare(confirm_password) != 0 || emailValid == false)
  { 
    if(password.localeCompare(confirm_password) != 0)
      alert("Please enter matching password");
    if(emailValid == false)
      alert("Please enter a valid email address");
  }
  else{
      if (confirm("Register User?")) {
                
                
                fetch(CONFIG.SHEETDB_USERS_API, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: [
                        {
                            'id': "INCREMENT",
                            'fname': fname,
                            'uname': uname,
                            'email': email,
                            'phone_number':phone_number,
                            'password':password,
                            'gender':gender,
                        }
                    ]
                })
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          
              
              alert("User Sucessfully Registered!");

            } else {
              alert("You pressed Cancel!");
            }

        }
      } 
    }

    getapi(api_url);


});