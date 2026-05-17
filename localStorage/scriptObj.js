/*

Storing object inlocalStorage 

local storrage -- store data in string 

so we need to convert by method

   object --> JSON ( js object notaion ) by--->  JSON.stringify()
   ==Object converted into string.

RETRIEVING OBJECT -- > JSON.parse()

JSON ---> object 
Object _----> JSON.stringify() -> Stored in localStorage -> getItem() -> JSON.parse() -> Original Object

*/

// JSON DATA 

let user = { name:'raushan' , age :21 };

localStorage.setItem('user', JSON.stringify(user));

// output == {name: "raushan", age: 21}

let data = localStorage.getItem('user');
let userr = JSON.parse(data);
console.log(userr.name); // raushan


// eg of arr

let arr = [10,20,20,30,90];
localStorage.setItem('indx' ,JSON.stringify(arr));


// retrive 
// localStorage.getItem("indx")  -- return single in string " 10, 20, 20, 30, 90 "
let dataArr = JSON.parse(localStorage.getItem("indx"));
console.log(dataArr);  // return in array (5) [10, 20, 20, 30, 90]
console.log(dataArr[0]); 
