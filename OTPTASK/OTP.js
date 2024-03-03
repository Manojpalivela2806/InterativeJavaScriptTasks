let get=document.getElementById("get");
let paste=document.getElementById("paste");

function otp() {
    let otp = Math.floor(Math.random()*9999)+1000;
    // console.log(otp);
    get.value=otp;
}

function check(){
    if(get.value==paste.value)
    {
        alert("login Sucessfull")
    }
    else{
        alert("invalid OTP")
    }
    paste.value="";
}