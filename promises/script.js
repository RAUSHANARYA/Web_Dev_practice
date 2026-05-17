//
/*
 - ek object h jo - asycn code ke future value ko represent krat h 
 -- 3 state 
 --- pending - food preparing 
 --- fulfilled - orde complete 
 ---- rejected - order cancel 

 let promise = new Promise((resolve, reject) => {

    always write asycn code using promses 

imp -- promise result must be consumed.
.then()-- fulfil honek bd agr koi task krna ho // success 
.catch() -- failure 




*/

let firstpromise = new Promise((resolve , reject)=>
{
    let success = true;

   if(success)
   {
      resolve("Task completed"); // output
   }
   else
   {
      reject("Task failed");
   }
    firstpromise.then((meesage) =>{

        console.log("then ka mssg h "+meesage);
        
        
    }).catch((error)=>{
        console.log("error" + error);
        
    })
    
});

// asyn code 

let promises = new Promise((resolve , reject)=>
{

function counting()
{
    console.log("counting"); // its show pending 
    
    // console.log(count);
    // if(count===0) return; 
    // count --;
}

setTimeout(counting,1000) });



// Promise.resolve().then( fun );

// function fun()
// {
//     console.log("promise higer priotity then callback Que no time ");
    
// }
 

// console.log('sync code 4th line but print in call stack 2nd positio '); //sycn code -- excute imdeaitely 



fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
   return response.json();
})
.then((data) => {
   console.log(data);
})
.catch((error) => {
   console.log(error);
});