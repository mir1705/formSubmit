var myForm = document.getElementById('form');
// Event listener that listens for submit event
myForm.addEventListener("submit", function(e){
    e.preventDefault();
// retrieve values
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// validate username and password fields
if(username=='' || password==''){
        alert("Please Fill all required fields");
    }
else{
        alert("Form submit");
    }
})