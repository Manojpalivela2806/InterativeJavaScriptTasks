//my code
let x= document.getElementById("s1");
let y= document.getElementById("s2");
let number =x.textContent;
function demo()
{
    number++;
    x.textContent=number;
}
function desk()
{
 y.textContent=`Previous Count:`+(number-1);
}

//Other way code
var count=0;
var Previouscount=0;
function counttask()
{
    Previouscount=count;
    count++;

    var ccount= document.getElementById("s1");
    var pcount = document.getElementById("s2");

    ccount.innerHTML=count;
    pcount.innerHTML=`Previous Count:`+(Previouscount);
}