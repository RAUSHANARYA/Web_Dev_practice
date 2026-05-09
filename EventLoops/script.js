/*

date -10/05 topic - event loop 

1.sycn code  -
 jo code same time m execute / print  ho jaye 
 no wait 
  eg - console.log('Js sycn code ');

  2. async code 
   - not gunatte to show exution . print on same time 
   - to show behiavour not guarnte on ame time

   --- to handle this use event loop 
        -- callstack , browser , callqueue 

     1.Call Stack?   -- A stack where JavaScript executes functions.immdeatily 

    2. WEB APIs /browser - use async code 

        These are browser-provided features.
        JavaScript itself DOES NOT handle timers.
        Browser handles them.

        Examples:
        setTimeout -- asyc code function 
        DOM events
        fetch
        geolocation

3. CALLBACK QUEUE 
----Stores completed async callbacks.
after complete 2 sec - store in callback Queue the 2nd liine - ki jaise 2s sec hoge print kr dena 
-------
4.blocking

vvi imp 

MICROTASK QUEUE - Higher priority than callback queue.

--Used by:

Promise
queueMicrotask
MutationObserver

Microtask Queue gets priority
== order to ecute 
1. Call Stack
2. Microtask Queue
3. Callback Queue
*/ 

console.log('Js sycn code ');
console.log('same time exexution ');
console.log("all gud ");

// setTimeout

console.log('start'); //sycn code -- excute imdeaitely 

setTimeout(sayMyname , 200); //--//asyc code -- js wait or run after 2 se

function sayMyname()
{
    console.log("rasuahan chala after 2 sec iske v koi gurnatee ni ");
}

console.log('end'); //sycn code -- excute imdeaitely 


/*

samjho pure kahani ab 
ek hota h call stack , 1 hota h web api ( browser)   , 1 hota h callback queue 

ye 3 ekloop bante h to excute asyc code 

code ek exam s e samjho 

exution awlays step by step 

1st line 
-- sycn code so print -- start

use callstack --- ek stack jisme , log- start print krne ko bola to kr dia 

2 line - use setTimeout fn asycn code -- time 2000ms after 2 s print the line - browser start time

js dont wait 2 sec -- its exute 3rd line 

after complete 2 sec - store in callback Queue the 2nd liine - ki jaise 2s sec hoge print kr dena 

*/



///  MICROTASK QUEUE

console.log('sync code 1st line '); //sycn code -- excute imdeaitely 

setTimeout(sayMynam , 200); //--//asyc code -- js wait or run after 2 se

function sayMynam()
{
    console.log(" 2nd line but ascy code rasuahan chala after 2 sec iske v koi gurnatee ni ");
}
//
Promise.resolve().then( fun );

function fun()
{
    console.log("promise higer priotity then callback Que no time ");
    
}
 

console.log('sync code 4th line but print in call stack 2nd positio '); //sycn code -- excute imdeaitely 