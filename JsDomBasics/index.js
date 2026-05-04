/*
dom = documment object model
window is parent of all object 
--- aceess any tags 
-- by id , class 
 
# access  to fetch by id , class , tag , name = 

        document.getElemetById(" id name ") -- match the id n return obje 
        document.getElementsByClassName("class_name);

        document.querySelector(" "); .class name , #id , tag
        or 
        document.querySelcectorAll(" ")- all class name , all id where fetch

# update 
 -- inner html , outerhtml , text-content , innerText        
 = button.innerHTML;  // <p>Submit</p> -- get method
 let x = button.innerHTML = "<p>reset</p>";  // set methoa

 /--- outerHTML
// GET METHOD

let y = button.outerHTML;
console.log(y);   // all html tag of button 

// SET METHOD
button.outerHTML = "<h2>replace button</h2>";  // pura button hi replace ho jayege 

innerHTML
→ XSS attack possibility
→ Carefully use with user input

outerHTML
→ Pura element replace karta hai
→ Element + inside content

textContent
→ Sirf text
→ Hidden text bhi read karta hai
→ HTML render nahi karta
More secure
→ Recommended for normal text updates

innerText
→ Sirf visible text
→ Hidden text ignore karta hai
*/

console.log("js");

const fn = document.getElementById("fpara");
console.log(fn);
document.getElementsByClassName("fclass");

document.getElementsByTagName("p");

document.querySelector(".fclass");

//----- update
let button = document.getElementById("btn");

// let x = button.innerHTML;  // <p>Submit</p>-- get methode

// let x = button.innerHTML = "<p>reset</p>";  // set methoa
// console.log(x);

//--- outerHTML
// GET METHOD

let y = button.outerHTML;
console.log(y);   // all html tag of button 

// SET METHOD
// button.outerHTML = "<h2>replace button</h2>";  // pura button hi replace ho jayege 



//-------- inner.TEXT
// get
let a = button.innerText;
console.log(a);      // submit

//set 
 let b = button.innerText = "click me";
 console.log(b);   // button text change - set click me 

 //--- inner.Content 

 // GET METHOD
let z = button.textContent;
console.log(z);   // click me 

button.textContent = "Reset";  // sirf text change hoga
// HTML tag treat nahi karega