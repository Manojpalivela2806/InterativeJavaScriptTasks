let d1=document.getElementById("inp");
let d2=document.getElementById("body");
var num=1;

function sub()
{
    num++;
    if(num%2==0)
    {
        d2.style.background="black";
        d1.setAttribute("value","light");
    }
    else{
        document.body.style.background="white";
        d1.setAttribute("value","dark")
    }
    
}
function tog()
{
   document.body.classList.toggle("black");
   var z=d1.getAttribute("value");
   if(z!="light"){
    d1.setAttribute("value","light");
   }else{
    d1.setAttribute("value","dark");
   }
}
