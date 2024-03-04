let f=document.getElementById("form");
let inp= document.getElementsByClassName("in")

let check = document.createElement("h2");
document.body.append(check);

let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");
let l4=document.getElementById("l4");

f.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=l1.value;
    let gmail=l2.value;
    let mobile =l3.value;
    let pass = l4.value;
    if(name=="" || gmail=="" || mobile=="" || pass==""){
        console.log("fill the required fields");
        check.textContent="fill the above required fields";
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("gmail",gmail);
        localStorage.setItem("mobile",mobile);
        localStorage.setItem("password",pass);
        l1.value="";
        l2.value="";
        l3.value="";
        l4.value="";
        open("./LogIn.html");
    }
}
)



