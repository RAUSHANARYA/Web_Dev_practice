
/*
//Q6. Tabbed Interfaces

learning 

*/

var home = document.querySelector("#home");
var about = document.querySelector("#about");
var det = document.querySelector("#det");

var ph = document.querySelector("#ph");

var pa = document.querySelector("#pa");

var pd = document.querySelector("#pd");


home.addEventListener('click' , firstpara);
about.addEventListener('click' , Secondpara);
det.addEventListener('click' , Thirdpara);

function firstpara()
{
    
    ph.style.display = "block";

    pa.style.display = "none";

    pd.style.display = "none";
}
function Secondpara()
{
    pa.style.display = "block";

    ph.style.display = "none";

    pd.style.display = "none";
}

function Thirdpara()
{
       pd.style.display = "block";

    ph.style.display = "none";

    pa.style.display = "none";
}