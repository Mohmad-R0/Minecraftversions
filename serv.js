var menubtn = document.getElementById("menubtn");
var nav = document.getElementById("nav");
nav.style.right = "-250px";
menubtn.onclick = function(){
  if(nav.style.right == "-250px"){
    nav.style.right = "0";
  }
  else{
    nav.style.right = "-250px";
  }
}

function show(BoxId){
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById(BoxId).style.display = "block";
}

var emailwindow = document.getElementById("emailwindow");
var close = document.getElementById("close");
var emaill = document.getElementById("emaill");
emaill.onclick = function(){
  emailwindow.style.display = "flex";
}
close.onclick = function(){
  emailwindow.style.display = "none";
}