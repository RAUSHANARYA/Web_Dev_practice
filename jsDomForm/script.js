/*

Form Handling? 

Taking user input and processing it using JavaScript

Problem Without JS ❌

When form submits:
page refreshes
data lost

preventDefault() == Stops default browser behavior.

*/

//submit Event

// let form = document.getElementById("form");

// form.addEventListener("submit", function(event){

//    event.preventDefault(); // JavaScript controls form.

//      let name = document.getElementById("name").value;

//    console.log(name);

//    console.log("Form Submitted");

// });


form.addEventListener("submit", function(event){

   event.preventDefault();

   let name = document.getElementById("name").value;

   if(name === "")
   {
      alert("Please Enter Name");
   }
   else
   {
      alert("Form Submitted");
   }

});