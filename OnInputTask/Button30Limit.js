let x = document.getElementById("sp");
let y=x.value;
console.log(y);
var count=y;
let s =30;
function maxi(){
    if(x.value<30)
    {
        count++;
        x.setAttribute("value",count);
        console.log(count);
    }
}
function mini(){
    if(x.value>0)
    {
        count--;
        x.setAttribute("value",count);
        console.log(count);
    }
}
///Other code
// var num=0;
// var allInput=document.querySelectorAll("input");
// console.log(allInput);
// allInput[2].addEventListener("click",function(){
//     if(num<30)
//     {
//         num++;
//         allInput[1].value=num;
//     }
// })
// allInput[0].addEventListener("click",function(){
//     if(num>0){
//         num--;
//         allInput[1].value=num;
//     }
// })