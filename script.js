window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}


function topFunction() {
  	document.body.scrollTop=0;
  	document.documentElement.scrollTop=0;
} 

var time = new Date();
hours = time.getHours();
console.log("It is " + hours);
if(hours>10){
  document.body.style.background = "#121212";
  document.getElementsByClassName("jumbotron")[0].style.background = "#000000";
  
  convert(document.querySelectorAll("p"),"white");
  convert(document.querySelectorAll("h1"),"white");
  convert(document.querySelectorAll("h2"),"white");
  convert(document.querySelectorAll("li"),"white");
  convert(document.querySelectorAll("a"),"white");
  convert(document.querySelectorAll("small"),"white");
  convert(document.querySelectorAll("figcaption"),"white");
  convert(document.querySelectorAll("button"),"white");
  convertBG(document.getElementsByClassName("card-body"),"black");
  convertBG(document.getElementsByClassName("card"),"black");
  convertBG(document.getElementsByClassName("list-group-item"),"black");
  convertBG(document.getElementsByClassName("btn"),"black");
  convertBG(document.getElementsByClassName("footer"),"#121212");
  

}

function convert(elemnt,colour){
  for (i=0;i<elemnt.length; i++){
    elemnt[i].style.color = colour;
  }
}
function convertBG(elemnt,colour){
  for (i=0;i<elemnt.length; i++){
    elemnt[i].style.background = colour;
  }
}