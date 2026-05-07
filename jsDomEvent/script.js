/*

Used to attach functionality to an element when an event happens.

Use addEventListener() Instead of onclick

 document.querySelector('#btn').addEventListener('event' , fn);
 then u define fn n work 

 event like :-
  click , dbclick , mouseover , mouseleave ,chnage , keydown , submit

*/


console.log("js connected");




function buttonON()
{
    document.querySelector("#bulb1").style.background = 'Red';
}
function buttonOFF()
{
    document.querySelector("#bulb1").style.background = 'white';
}

 document.querySelector('#color').addEventListener('change' , changeValue);

 function changeValue()
 {
    const value = document.querySelector('#color').value;
    document.querySelector("#bulb1").style.backgroundColor = value;
 }


 // click event 
 var btn =  document.querySelector('#btn');

            btn.addEventListener('click' , fn);

 function fn ()
 {
    btn.textContent = 'click one me ';
    btn.style.backgroundColor ='Pink';
 }

// another way ==
// btn.addEventListener('click', function () {

//     btn.textContent = 'Clicked';
    
// });

//  DOUBLE CLICK EVENT (dblclick)

// Runs when user double clicks.
 btn.addEventListener('dblclick' , fn);

// MOUSEOVER EVENT
//  Runs when mouse enters element.
  btn.addEventListener('mouseover' , fn);

   btn.addEventListener('mouseout' , fn);

// 5. CHANGE EVENT
// Meaning

// Runs when input value changes.

 document.querySelector('#color').addEventListener('change' , changeValue);

 function changeValue()
 {
    const value = document.querySelector('#color').value;
    document.querySelector("#bulb1").style.backgroundColor = value;
 }


 // event objects 

//  creates an object containing all event information.

document.querySelector('body').addEventListener('mousemove', fun);

function fun(mouseXYdetails)
{
    console.log(mouseXYdetails);
    console.log("X =", mouseXYdetails.clientX); //mouse X position
    console.log("Y =", mouseXYdetails.clientY); //mouse X position

    // Means cursor is at:

        // 420px from left
        // 215px from top

        console.log(mouseXYdetails.target); //element where event happened
        console.log(mouseXYdetails.key); //keyboard key pressed
}