let targetul = document.getElementById("list");
let button=document.getElementById("but")
let in1 = document.getElementById("inp"); 


button.addEventListener ("click",()=>{
   let inp=in1.value;
   let createli = document.createElement("li");
    let div = document.createElement("div");
    createli.setAttribute("id","inl");
    console.log("hi");
    console.log(createli);
    if(inp=="")
    alert("please,enter the task");
    else{ 
        
        createli.innerHTML = inp;
        div.setAttribute("id","div");
        div.setAttribute("class", "getone");

       
        targetul.appendChild(createli);
        targetul.appendChild(div);
        //create mark button
        let btn1 = document.createElement("button");
        btn1.setAttribute("class","inbut");
        btn1.innerHTML="mark";
        btn1.onclick = function(){
            createli.style.textDecoration="line-through";
        }
        div.appendChild(btn1);
        btn1.ondblclick = function(){
            createli.style.textDecoration="none";
        }
        div.appendChild(btn1);

        //create delete button
        let btn2 = document.createElement("button");
        btn2.setAttribute("class","inbut");
        btn2.innerHTML="Delete";
        btn2.onclick=function(){
            targetul.removeChild(createli);
            targetul.removeChild(div);
        }
        div.appendChild(btn2);

         //create update button
         let btn3 = document.createElement("button");
         btn3.setAttribute("class","inbut");
         btn3.innerHTML="update";
         btn3.onclick= function(){
            in1.value = createli.innerHTML;
            targetul.removeChild(createli);
            targetul.removeChild(div);
         }
         div.appendChild(btn3); 
        }
    
        in1.value="";
    }
)

