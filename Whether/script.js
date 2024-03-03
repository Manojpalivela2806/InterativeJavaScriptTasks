let inp = document.getElementById("one");
let form = document.getElementById("form");
let con = document.getElementById("con");
let check = document.createElement("h2");
document.body.appendChild(check);


// console.log(rand);
let weather=["foggy","thunderStrom","rainy","partialy cloud","cloudy","sunny Day"];
let randomWeather = weather[Math.floor(Math.random() * weather.length)];

form.addEventListener("submit",(e)=>{
    let rand = Math.floor(Math.random()*50);
    e.preventDefault();
    if(inp.value!=""){   
    let city = document.getElementById("one");
    console.log(city.value);
    con.innerHTML="Current Temperature in "+city.value+" is "+rand+" \u00B0C "+randomWeather
    check.textContent="";
    }
    else{
        check.textContent="Please provide the city name";
        check.style.color="red";
    }
})