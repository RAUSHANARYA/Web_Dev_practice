
/*
// Q2. Swap Two Images

learning - like swap the image simple as temp
        - image1.src 

*/
console.log("js");

var btn = document.querySelector("#btn");
var image1 = document.querySelector("#img1");
var image2 = document.querySelector("#img2");


btn.addEventListener('click' , swapImage);

function swapImage()
{
    let temp = image1.src;
    image1.src = image2.src;
    image2.src = temp;
}