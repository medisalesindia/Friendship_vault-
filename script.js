function unlock() {

const password = document.getElementById("password").value;
const error = document.getElementById("error");

if(password === "RoKo"){

error.style.color="#8dff9b";
error.innerHTML="✅ Access Granted";

setTimeout(function(){

window.location.href="choose.html";

},1000);

}else{

error.style.color="#ffb3b3";
error.innerHTML="❌ Wrong Password";

document.getElementById("password").value="";

}

}
