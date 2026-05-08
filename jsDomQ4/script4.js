/*
// Q4. Add and Remove List Items
-- dheko agr add button click krge to -- humne jo inputm value dia h 
wo as a list bna jayega toshow hoga 

-- remove krne br wo value hat jayega

learning - 

// use global varibale of li od add n remove both acess 
// mujhe ek Li craete krna h ul k andr 
 --- so use document.createEmelemt(" ky craete krna wo ")

 li.textcontent=inp.value // li m inpvalue le li 
 ul.appendclhild(li) -- mean ul ma dd krdi magr kyy





*/



console.log("js");
var add = document.querySelector('#ad');
var rem = document.querySelector('#rem');
var ul = document.querySelector('#ul');
var textt = document.querySelector('#textt');
var ul = document.querySelector('ul');
var inp = document.querySelector('input');
var li ;

add.addEventListener('click' , addFunction);
rem.addEventListener('click' , removeFn)

function addFunction()
{
   if(inp.value==="")
   {
    alert('input in invalid');
   }
   else{

    // craete kro li ko  - create element
     li = document.createElement('li');
     li.textContent = inp.value; // li  m input text lo 
    ul.appendChild(li);  // ul m add kr do 
    inp.value="";


   }
}

function removeFn()
{
   ul.lastElementChild.remove();
    // ul.removeChild(li);
}

