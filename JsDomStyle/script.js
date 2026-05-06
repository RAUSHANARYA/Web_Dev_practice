/*
date = 06/ 04 
topic - dom style 

 using .style we can use 

 element.style.property = "value";
 imp = CSS properties become camelCase in JS.
 background-color - in css
backgroundColor - in js

style is NOT Best for Large Projects so use = classList 

 part 2 - classList - add n remove 
  use/select css class-propeerty in css  then change its accordigly 
  Multiple styles together
  classList use hota hai

  PART 5 — toggle()
  Adds class if absent.
Removes class if present.
*/
let h1Tag = document.querySelector("h1");

h1Tag.style.color = "red";
h1Tag.style.backgroundColor = "blue";
h1Tag.style.fontFamily = "poppins";

h1Tag.textContent = "helo ji";

//======
//classList

let textt = document.querySelector('.classlistUse');

textt.classList.add("classlistUse");

textt.classList.remove('classlistUse');

textt.classList.toggle('classlistUse');
