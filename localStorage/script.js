
/*

local storage - dtata is stor ein key value pair store in one browser 
   users - store temporary data 

   #
   local store store only in string ,
    object array accont direly store
    so we use :  JSON.stringify()  ==  Object → JSON String
                JSON.parse()  ==   String → Object
       

   methods
   setItem() -- localStorage.setItem(key, value); 
   2. getItem() ---localStorage.getItem(key);
   3. removeItem() --- Remove specific item 
                    --localStorage.removeItem(key);
   4. clear() ----Deletes ALL local storage data. 
              --- just write ==localStorage.clear();                

*/

//----------------------------------------------------
// const e = document.querySelector('.name');


// // comment krne k bd v data raushan hi dhekege qki wo store kr lia h 


// // set item ( "key " , " value ") - a space also count use carefully 
// const set = localStorage.setItem("Name" , "shivanhsi"); // myName update 

// e.innerText = localStorage.myName ; // raushan 
// e.innerText = localStorage.Name;  // shivanshi 

// e.innerText = localStorage.myName + " " + localStorage.Name; // raushan sv


// // 2. getItem()

// const get = localStorage.getItem('Name');  // shaivanshi
// const get1 = localStorage.getItem('myName');  // raushan
// console.log(get);
// console.log(get1);

// // removeItem()

// const remove = localStorage.removeItem('Name'); // remove shivanhsi

// //. clear() 
// localStorage.clear();

//----------------------------------------------

// we have do--when we click button store button in color in local storage n when we click button color change 

// let red = document.querySelector("#red");
// let blue = document.querySelector("#blue");
// let yellow = document.querySelector("#yellow");

// // show data after refrrsh 
// document.body.style.backgroundColor =
// localStorage.getItem("color");

// red.addEventListener("click" , ()=>
// {
//     let rcolor = localStorage.setItem('rColor' ,'red');
//        document.body.style.backgroundColor = localStorage.getItem('rColor');
    
// });
// blue.addEventListener("click" , ()=>
// {
//     let rcolor = localStorage.setItem('bColor' ,'blue');
//        document.body.style.backgroundColor = localStorage.getItem('bColor');
    
// });
// yellow.addEventListener("click" , ()=>
// {
//     let rcolor = localStorage.setItem('yColor' ,'yellow');
//        document.body.style.backgroundColor = localStorage.getItem('yColor');
    
// });

//=============================================
//2nd mthod 

let allBtn = document.querySelectorAll('button');

allBtn.forEach((btn)=>
{
     btn.addEventListener('click' ,()=>
    {
        localStorage.setItem('color' , btn.innerHTML.toLowerCase() );
        setColor();
    });
    
  
   
});

let setColor=(()=>
{
   let color = localStorage.getItem('color');
   document.body.style.backgroundColor = color;
})

setColor();