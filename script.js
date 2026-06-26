function book(eventName){

document.getElementById("event").value=eventName;

}

function submitBooking(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let event=document.getElementById("event").value;

if(name=="" || email=="" || event==""){

alert("Please complete the form.");

return;

}

alert(

"Booking Successful!\n\n"+

"Name : "+name+

"\nEvent : "+event+

"\nEmail : "+email

);

}
