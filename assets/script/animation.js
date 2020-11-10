var sloganArr = ["QUBIT","PIXELS","FIREWALL","YOUR BRAIN?"]
var slogan = document.getElementById("slogan");

function endlessLoop(){
   setInterval(function(){
    var random = Math.floor(Math.random()*4);
    var string = sloganArr[random]
    slogan.innerHTML= string;
   },2000);
}
