function unlock(){

const password=document.getElementById("password").value;
const error=document.getElementById("error");

if(password==="RoKo"){

error.style.color="#7CFFB2";
error.innerHTML="✅ Welcome...";

document.querySelector("button").innerHTML="Opening...";

setTimeout(function(){

window.location.href="choose.html";

},1200);

}else{

error.style.color="#FF9B9B";
error.innerHTML="❌ Wrong Password";

document.getElementById("password").value="";

}

}
window.onload=function(){

setTimeout(function(){

const splash=document.getElementById("splash");

if(splash){

splash.style.display="none";

}

},2000);

}
