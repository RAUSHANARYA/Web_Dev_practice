/*
Q1. Change Paragraph Text on Button Click

learning - no easy 

*/


console.log("js");

var para = document.querySelector("#fpara");
var btn = document.querySelector("#btn");
var res = document.querySelector("#res");

btn.addEventListener('mouseover' , chnageTextColor);
btn.addEventListener('mouseout' , chnageBaseColor);


function chnageTextColor()
{
    para.style.color = 'red';
    para.textContent = 'change ho gya text ';
}

function chnageBaseColor()
{
    para.style.color = 'black';
}

res.addEventListener('click' , function(){

    window.location.reload();
});