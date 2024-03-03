//task
function active()
{
    let x = document.getElementById("text");
    let ch = x.value;
    console.log(ch);

    if(x.value!="")
    {
    let odl=document.getElementById("order")
    let check=document.createElement("li") 
    odl.append(check);
    check.innerHTML= ch;
    x.value="";
    }
}