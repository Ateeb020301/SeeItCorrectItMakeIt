var sloganArr = ["QUBIT","PIXELS","FIREWALL","BRAIN?"]
var slogan = document.getElementById("slogan");
var buisnessUl = document.getElementById("buisnessUl");
var creationUl = document.getElementById("creationUl");
var cyberUl = document.getElementById("cyberUl");
/*
buisnessUl.onclick = function(){
   if(buisnessUl.style.marginBottom=="0px"){
      buisnessUl.style.marginBottom = "300px";
   }else if(buisnessUl.style.marginBottom== "300px"){
      buisnessUl.style.marginBottom = "0px";
   }
}*/



function endlessLoop(){
   setInterval(function(){
    var random = Math.floor(Math.random()*4);
    var string = sloganArr[random]
    slogan.innerHTML= string;
   },2000);
}
