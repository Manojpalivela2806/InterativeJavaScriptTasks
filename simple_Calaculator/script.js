let display="";//will say the current value

//to clear the input screen
let clear1 = () => {
    display="";
    updatevalue();
};

let num= number=>{
    display+=number;//allowing user to click any number
    updatevalue();
}
let operate = oper =>{
    display+=oper;
    updatevalue();
}
let calc = () =>{
    let res=eval(display);
    display=res.toString();
    updatevalue();//converting the result to string to display
};

let updatevalue =()=>{
document.getElementById("l1").value=display;
}