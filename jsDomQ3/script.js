/*
// Form Validation

learning - 

preventDefault - always use event in fun(event)
= event.preventDeafault();

alert ka content hmesa uske function m hoga alert(" messgae")

name.value==" " -- not name ===" "


*/

console.log("js");

var name = document.querySelector("#name");
var age = document.querySelector("#age");
var email = document.querySelector("#email");
var btn = document.querySelector("#btn");

btn.addEventListener('click', fn);

function fn(event)
{
    event.preventDefault();

    if(name.value === "" || age.value === "" || email.value === "")
    {
        alert("Invalid Entry");
    }
    else
    {
        alert("Form Submitted");
    }
}