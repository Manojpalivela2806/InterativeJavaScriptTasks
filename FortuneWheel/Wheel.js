function fun() {
    var randomNumber = Math.round(Math.random()*350);
    console.log(randomNumber);
    document.querySelector("#wheel").style.transform=`rotate(${1500+randomNumber}deg)`;
}