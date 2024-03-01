let e=document.getElementById("bu");
console.log(e);
var bd=document.getElementById("body")
console.log(bd);
e.addEventListener("click",()=>{
    var red = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*125);
    var blue = Math.round(Math.random()*255);
    document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";
})
// function run(){
//     var red = Math.round(Math.random()*255);
//     var green = Math.round(Math.random()*125);
//     var blue = Math.round(Math.random()*255);
//     document.body.style.backgroundColor="rgb("+red+","+red+","+red+")";   
// }