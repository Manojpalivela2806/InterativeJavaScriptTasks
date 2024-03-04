let f = document.getElementById("form");
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");

let check = document.createElement("h2");
document.body.append(check);

f.addEventListener("submit",(e)=>{
    e.preventDefault();
    let gmail = l1.value;
    let pass = l2.value;
    if(gmail=="" || pass==""){
        check.textContent="fill the above required fields";
    }
    else{
        let Gmail=localStorage.getItem("gmail");
        let Password=localStorage.getItem("password");
        if(Gmail==gmail && Password==pass){
            open("./index.html");
        }
        else{
            check.textContent="Incorrect password or emailId";
        }
    }
});