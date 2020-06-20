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
if(hours<=6 || hours>=18  ){
  document.body.style.background = "#121212";
  
  convert(document.querySelectorAll("p"),"white");
  convert(document.querySelectorAll("h1"),"white");
  convert(document.querySelectorAll("h2"),"white");
  convert(document.querySelectorAll("li"),"white");
  convert(document.querySelectorAll("a"),"white");
  convert(document.querySelectorAll("small"),"white");
  convert(document.querySelectorAll("figcaption"),"white");
  convert(document.querySelectorAll("button"),"white");
  convert(document.querySelectorAll("h4"),"white");
  convert(document.querySelectorAll("h5"),"white");
  convertBG(document.getElementsByClassName("nav-item"),"#121212");
  document.getElementsByClassName("navbar")[0].classList.remove("bg-light");
  convertBG(document.getElementsByClassName("navbar"),"black");
  convertBG(document.getElementsByClassName("card-body"),"black");
  convertBG(document.getElementsByClassName("card"),"black");
  convertBG(document.getElementsByClassName("list-group-item"),"black");
  convertBG(document.getElementsByClassName("btn"),"black");
  convertBG(document.getElementsByClassName("footer"),"#121212");
  convertBG(document.getElementsByClassName("modal"),"#121212"); //for body when modal is open
  convertBG(document.getElementsByClassName("modal-content"),"#121212");
  convertBG(document.getElementsByClassName("modal-header"),"#000000");
  convertBG(document.getElementsByClassName("modal-footer"),"#000000");
  convertBG(document.getElementsByClassName("navbar-toggler"),"#332940");
  
  var arrows = document.querySelectorAll(".bult");

  for (let i = 0; i < arrows.length; i++) {
	  arrows[i].style.fill = "white";
  }
  convertModal();
  
  if(document.getElementsByClassName("navbar-expand-lg").length==0){
    modalList = document.getElementsByClassName("nav-item");
    for(i=0;i<modalList.length;i++){
      modalList[i].style.border="0px #0062cc solid";
  }
  }

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

function convertModal(){
  var modalList=document.getElementsByClassName("modal-content");
  
  for(i=0;i<modalList.length;i++){
    modalList[i].style.border="5PX black solid";
  }
  
  modalList = document.getElementsByClassName("nav-item");
  for(i=0;i<modalList.length;i++){
    modalList[i].style.border="1px #0062cc solid";
  }
  
}