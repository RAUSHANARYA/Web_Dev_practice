/*
Q5. Countdown Timer

learning - 

mosst impp 

 setInterval(function() {} , timer in ms );  1000ms =1s
clearInterval(what to stop ) -- alway stor in variable set interval
and decalre variable globally




*/

var btn = document.querySelector('#btn');
var h3 =document.querySelector('h3');

var stop = document.querySelector('#stp');
let timer;

btn.addEventListener('click' , countdown);
stop.addEventListener('click' , stopCount);

function countdown()
{
    let count =0;
     timer = setInterval(function (){
        count++;
        h3.innerText = count;
       
      
        // count = 0;


     } , 100);
}

function stopCount()
{
    clearInterval(timer);
}